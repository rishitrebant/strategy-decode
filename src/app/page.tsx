import { FeaturedArticle } from "@/components/article/FeaturedArticle";
import { LatestDecodes } from "@/components/article/LatestDecodes";
import { Categories } from "@/components/cards/Categories";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { Newsletter } from "@/components/newsletter/Newsletter";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <Hero />
        <FeaturedArticle />
        <Categories />
        <LatestDecodes />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
