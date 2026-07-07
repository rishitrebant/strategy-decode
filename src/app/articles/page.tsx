import type { Metadata } from "next";

import { ArticleCard } from "@/components/cards/ArticleCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles, getArticleCategory } from "@/lib/fixtures";

export const metadata: Metadata = {
  title: "Articles",
  description: "Business strategy decodes from Strategy Decode.",
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            aside={`${articles.length} decodes`}
            eyebrow="Archive"
            title="Articles."
          />
          <div className="mt-16 grid grid-cols-4 gap-x-5 gap-y-20 md:grid-cols-12">
            {articles.map((article, index) => (
              <ArticleCard
                artwork={article.artwork}
                category={getArticleCategory(article)?.name ?? "Strategy"}
                className={index === 0 ? "col-span-4 md:col-span-7" : "col-span-4 md:col-span-5"}
                key={article.slug}
                readTime={article.readTime}
                slug={article.slug}
                title={article.title}
              />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
