import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/cards/ArticleCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import {
  categories,
  getArticlesByCategory,
  getArticleCategory,
  getCategoryBySlug,
} from "@/lib/fixtures";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  return {
    title: category?.name ?? "Category not found",
    description: category?.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const categoryArticles = getArticlesByCategory(category.slug);
  const featured = categoryArticles[0];

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-4 gap-5 md:grid-cols-12">
            <div className="col-span-4 md:col-span-9">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                Category
              </p>
              <h1 className="mt-8 font-serif text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.8] tracking-[-0.06em]">
                {category.name}
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-8 text-muted">
                {category.description}
              </p>
            </div>
          </div>

          {featured && (
            <section className="mt-16 border-y border-rule py-12">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                Featured in {category.name}
              </p>
              <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.9] tracking-[-0.05em]">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                {featured.excerpt}
              </p>
            </section>
          )}

          <section className="mt-16">
            <div className="grid grid-cols-4 gap-x-5 gap-y-20 md:grid-cols-12">
              {categoryArticles.map((article) => (
                <ArticleCard
                  artwork={article.artwork}
                  category={getArticleCategory(article)?.name ?? category.name}
                  className="col-span-4 md:col-span-6"
                  key={article.slug}
                  readTime={article.readTime}
                  slug={article.slug}
                  title={article.title}
                />
              ))}
            </div>
          </section>

          <section className="mt-20 max-w-3xl border-t border-rule pt-10">
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-accent">
              About {category.name}
            </p>
            <p className="mt-5 text-lg leading-8 text-muted">{category.longDescription}</p>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
