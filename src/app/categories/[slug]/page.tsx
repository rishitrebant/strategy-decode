import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/article/PortableText";
import { ArticleCard, type ArticleCardData } from "@/components/cards/ArticleCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { client } from "@/sanity/lib/client";
import {
  allCategorySlugsQuery,
  articlesByCategoryQuery,
  categoryBySlugQuery,
} from "@/sanity/lib/queries";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

type CategoryData = {
  title: string;
  slug: string;
  description?: string;
  longDescription?: unknown;
  featuredArticle?: ArticleCardData | null;
};

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(allCategorySlugsQuery);
  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await client.fetch<CategoryData | null>(categoryBySlugQuery, { slug });

  return {
    title: category?.title ?? "Category not found",
    description: category?.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [category, categoryArticles] = await Promise.all([
    client.fetch<CategoryData | null>(categoryBySlugQuery, { slug }),
    client.fetch<ArticleCardData[]>(articlesByCategoryQuery, { categorySlug: slug }),
  ]);

  if (!category) notFound();

  const featured = category.featuredArticle ?? categoryArticles[0];

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
                {category.title}
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-8 text-muted">{category.description}</p>
            </div>
          </div>

          {featured && (
            <section className="mt-16 border-y border-rule py-12">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                Featured in {category.title}
              </p>
              <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.9] tracking-[-0.05em]">
                {featured.title}
              </h2>
            </section>
          )}

          <section className="mt-16">
            <div className="grid grid-cols-4 gap-x-5 gap-y-20 md:grid-cols-12">
              {categoryArticles.map((article) => (
                <ArticleCard {...article} className="col-span-4 md:col-span-6" key={article.slug} />
              ))}
            </div>
          </section>

          {category.longDescription ? (
            <section className="mt-20 max-w-3xl border-t border-rule pt-10">
              <p className="mb-5 text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                About {category.title}
              </p>
              <ArticleBody value={category.longDescription} />
            </section>
          ) : null}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
