import { Navigation } from '@/components/navigation';
import { EditorialHero } from '@/components/editorial-hero';

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="w-full">
        <EditorialHero
          category="CEO Breakdowns"
          headline="The Art of Strategic Patience"
          excerpt="In an era of rapid decision-making and quarterly earnings reports, the most successful leaders understand that true strategic transformation requires patience, clarity, and an unwavering commitment to first principles."
          author="Sarah Chen"
          readingTime="8 min"
          publishedDate="March 15, 2024"
          imageUrl="/hero-featured.png"
          imageAlt="Featured article about strategic patience in modern business"
          storyUrl="/articles/strategic-patience"
        />
      </main>
    </>
  );
}
