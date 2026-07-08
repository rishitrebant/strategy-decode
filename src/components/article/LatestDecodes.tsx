import { ArticleCard, type ArticleCardData } from "@/components/cards/ArticleCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";

type HomePageData = {
  latestArticles?: ArticleCardData[];
};

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-12 lg:col-span-8 lg:col-start-5",
] as const;

export async function LatestDecodes() {
  const data = await client.fetch<HomePageData | null>(homePageQuery);
  const latestArticles = data?.latestArticles ?? [];

  if (latestArticles.length === 0) return null;

  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading aside="Latest research" eyebrow="New work" title="Latest decodes." />
        <div className="mt-16 grid grid-cols-4 gap-x-5 gap-y-20 md:mt-24 md:grid-cols-12 md:gap-y-28">
          {latestArticles.map((article, index) => (
            <ArticleCard
              {...article}
              className={`col-span-4 ${spans[index % spans.length]}`}
              key={article.slug}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
