import { CategoryCard } from "@/components/cards/CategoryCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { client } from "@/sanity/lib/client";
import { allCategoriesQuery } from "@/sanity/lib/queries";

type CategoryData = {
  title: string;
  slug: string;
  description?: string;
};

export async function Categories() {
  const categories = await client.fetch<CategoryData[]>(allCategoriesQuery);

  if (!categories?.length) return null;

  return (
    <section className="bg-surface py-20 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading aside="Six disciplines" eyebrow="Explore" title="Where advantage is built." />
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
