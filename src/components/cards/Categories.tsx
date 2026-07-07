import { CategoryCard } from "@/components/cards/CategoryCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/lib/fixtures";

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
