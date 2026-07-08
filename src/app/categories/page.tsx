import type { Metadata } from "next";

import { CategoryCard } from "@/components/cards/CategoryCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { client } from "@/sanity/lib/client";
import { allCategoriesQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Categories",
  description: "Explore Strategy Decode by category.",
};

type CategoryData = { title: string; slug: string; description?: string };

export default async function CategoriesPage() {
  const categories = await client.fetch<CategoryData[]>(allCategoriesQuery);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="py-20 sm:py-28">
        <Container>
          <SectionHeading aside="Taxonomy" eyebrow="Explore" title="Categories." />
          <div className="mt-16 grid grid-cols-4 gap-x-5 gap-y-8 md:grid-cols-12">
            {categories.map((category, index) => (
              <CategoryCard
                {...category}
                index={String(index + 1).padStart(2, "0")}
                key={category.slug}
              />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
