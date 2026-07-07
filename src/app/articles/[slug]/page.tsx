import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { EditorialArtwork } from "@/components/ui/EditorialArtwork";
import {
  articles,
  getArticleAuthor,
  getArticleBySlug,
  getArticleCategory,
} from "@/lib/fixtures";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const category = getArticleCategory(article);
  const author = getArticleAuthor(article);
  const related = articles
    .filter(
      (candidate) =>
        candidate.slug !== article.slug &&
        candidate.categorySlug === article.categorySlug
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <article className="py-16 sm:py-24">
          <Container>
            <div className="grid grid-cols-4 gap-5 md:grid-cols-12">
              <div className="col-span-4 md:col-span-10 md:col-start-2">
                <Link
                  className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent"
                  href={`/categories/${category?.slug ?? ""}`}
                >
                  {category?.name ?? "Strategy"}
                </Link>
                <h1 className="mt-8 max-w-6xl font-serif text-[clamp(3.6rem,8vw,8rem)] font-medium leading-[0.84] tracking-[-0.06em] text-balance">
                  {article.title}
                </h1>
                <p className="mt-8 max-w-3xl text-xl leading-8 text-muted sm:text-2xl sm:leading-9">
                  {article.dek}
                </p>
                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-rule pt-5 text-sm text-muted">
                  <Link href={`/authors/${author?.slug ?? ""}`}>
                    By {author?.name ?? "Strategy Decode"}
                  </Link>
                  <time dateTime={article.publishedAt}>
                    {new Intl.DateTimeFormat("en", {
                      dateStyle: "medium",
                    }).format(new Date(article.publishedAt))}
                  </time>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <EditorialArtwork
                className="min-h-[22rem] sm:min-h-[34rem] lg:min-h-[44rem]"
                variant={article.artwork}
              />
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
              <div className="space-y-8 text-lg leading-8 text-ink/90 sm:text-xl sm:leading-9">
                {article.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <aside className="mt-16 border-y border-rule py-8">
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                  Author
                </p>
                <h2 className="mt-4 font-serif text-4xl">{author?.name}</h2>
                <p className="mt-4 text-base leading-7 text-muted">{author?.bio}</p>
              </aside>
            </div>
          </Container>
        </article>

        {related.length > 0 && (
          <section className="border-t border-rule py-20">
            <Container>
              <div className="grid grid-cols-4 gap-5 md:grid-cols-12">
                <h2 className="col-span-4 font-serif text-5xl tracking-[-0.04em] md:col-span-4">
                  Related decodes
                </h2>
                <div className="col-span-4 grid gap-6 md:col-span-8">
                  {related.map((item) => (
                    <Link
                      className="group border-t border-rule pt-5"
                      href={`/articles/${item.slug}`}
                      key={item.slug}
                    >
                      <span className="text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                        {getArticleCategory(item)?.name}
                      </span>
                      <h3 className="mt-3 font-serif text-4xl leading-none tracking-[-0.04em] group-hover:text-accent">
                        {item.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
