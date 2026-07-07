import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/cards/ArticleCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import {
  authors,
  getArticleCategory,
  getArticlesByAuthor,
  getAuthorBySlug,
} from "@/lib/fixtures";

type AuthorPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  return {
    title: author?.name ?? "Author not found",
    description: author?.bio,
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) notFound();

  const authorArticles = getArticlesByAuthor(author.slug);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="py-16 sm:py-24">
        <Container>
          <section className="grid gap-8 md:grid-cols-12">
            <div className="size-32 bg-accent md:col-span-3" aria-hidden="true" />
            <div className="md:col-span-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                Author
              </p>
              <h1 className="mt-5 font-serif text-[clamp(4rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.06em]">
                {author.name}
              </h1>
              <p className="mt-4 text-sm uppercase tracking-[0.16em] text-muted">
                {author.role}
              </p>
              <p className="mt-8 max-w-3xl text-xl leading-8 text-muted">
                {author.bio}
              </p>
            </div>
          </section>

          <section className="mt-20 border-t border-rule pt-12">
            <div className="mb-12 flex items-end justify-between gap-6">
              <h2 className="font-serif text-5xl tracking-[-0.04em]">
                Latest from {author.name}
              </h2>
              <p className="hidden text-sm uppercase tracking-[0.16em] text-muted sm:block">
                {authorArticles.length} articles
              </p>
            </div>
            <div className="grid grid-cols-4 gap-x-5 gap-y-20 md:grid-cols-12">
              {authorArticles.map((article) => (
                <ArticleCard
                  artwork={article.artwork}
                  category={getArticleCategory(article)?.name ?? "Strategy"}
                  className="col-span-4 md:col-span-6"
                  key={article.slug}
                  readTime={article.readTime}
                  slug={article.slug}
                  title={article.title}
                />
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
