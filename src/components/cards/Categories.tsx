import { CategoryCard } from "@/components/cards/CategoryCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  {
    name: "Marketing",
    slug: "marketing",
    description: "How companies create demand, memory, and cultural relevance.",
  },
  {
    name: "Business Models",
    slug: "business-models",
    description: "The systems that turn customer value into durable economics.",
  },
  {
    name: "Leadership",
    slug: "leadership",
    description: "The consequential decisions made when the path is not obvious.",
  },
  {
    name: "Psychology",
    slug: "psychology",
    description: "The invisible forces that shape what people choose and remember.",
  },
  {
    name: "Growth",
    slug: "growth",
    description: "Compounding loops, distribution advantages, and paths to scale.",
  },
  {
    name: "Startups",
    slug: "startups",
    description: "Early choices that determine whether an ambitious company endures.",
  },
] as const;

export function Categories() {
  return (
    <section className="bg-surface py-20 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading
          aside="Six disciplines"
          eyebrow="Explore"
          title="Where advantage is built."
        />
        <div className="mt-16 grid grid-cols-4 gap-x-5 gap-y-8 md:grid-cols-12 lg:mt-24">
          {categories.map((category, index) => (
            <CategoryCard
              {...category}
              index={String(index + 1).padStart(2, "0")}
              key={category.slug}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
