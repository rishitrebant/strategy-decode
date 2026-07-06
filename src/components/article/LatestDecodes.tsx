import { ArticleCard, type ArticleCardData } from "@/components/cards/ArticleCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const articles: ArticleCardData[] = [
  {
    title: "Why Nike Sells Identity",
    slug: "why-nike-sells-identity",
    category: "Marketing",
    readTime: "12 min",
    artwork: "nike",
  },
  {
    title: "The Netflix Flywheel",
    slug: "the-netflix-flywheel",
    category: "Growth",
    readTime: "15 min",
    artwork: "netflix",
  },
  {
    title: "How Costco Wins",
    slug: "how-costco-wins",
    category: "Business Models",
    readTime: "11 min",
    artwork: "costco",
  },
  {
    title: "The IKEA Maze Strategy",
    slug: "the-ikea-maze-strategy",
    category: "Psychology",
    readTime: "9 min",
    artwork: "ikea",
  },
  {
    title: "How Apple Controls Pricing",
    slug: "how-apple-controls-pricing",
    category: "Business Models",
    readTime: "14 min",
    artwork: "apple",
  },
  {
    title: "The Starbucks Third Place Strategy",
    slug: "the-starbucks-third-place-strategy",
    category: "Marketing",
    readTime: "13 min",
    artwork: "starbucks",
  },
];

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
          {articles.map((article, index) => (
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
