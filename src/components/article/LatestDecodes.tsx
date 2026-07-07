import { ArticleCard, type ArticleCardData } from "@/components/cards/ArticleCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles, getArticleCategory } from "@/lib/fixtures";

const latestArticles: ArticleCardData[] = articles
  .filter((article) => !article.featured)
  .map((article) => ({
    artwork: article.artwork,
    category: getArticleCategory(article)?.name ?? "Strategy",
    readTime: article.readTime,
    slug: article.slug,
    title: article.title,
  }));

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-12 lg:col-span-8 lg:col-start-5",
] as const;

export function LatestDecodes() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading
          aside="Latest research"
          eyebrow="New work"
          title="Latest decodes."
        />
        <div className="mt-16 grid grid-cols-4 gap-x-5 gap-y-20 md:mt-24 md:grid-cols-12 md:gap-y-28">
          {latestArticles.map((article, index) => (
            <ArticleCard
              {...article}
              className={`col-span-4 ${spans[index]}`}
              key={article.slug}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
