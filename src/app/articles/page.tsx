import type { Metadata } from "next";

import { ArticleCard, type ArticleCardData } from "@/components/cards/ArticleCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { client } from "@/sanity/lib/client";
import { allArticlesQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Articles",
  description: "Business strategy decodes from Strategy Decode.",
};

export default async function ArticlesPage() {
  const articles = await client.fetch<ArticleCardData[]>(allArticlesQuery);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="py-20 sm:py-28">
        <Container>
          <SectionHeading aside={`${articles.length} decodes`} eyebrow="Archive" title="Articles." />
          <div className="mt-16 grid grid-cols-4 gap-x-5 gap-y-20 md:grid-cols-12">
            {articles.map((article, index) => (
              <ArticleCard
                {...article}
                className={index === 0 ? "col-span-4 md:col-span-7" : "col-span-4 md:col-span-5"}
                key={article.slug}
              />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
