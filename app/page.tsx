import { Navigation } from '@/components/navigation';
import { EditorialHero } from '@/components/editorial-hero';
import { ArticleCard } from '@/components/article-card';
import { FeaturedArticleCard } from '@/components/featured-article-card';
import { CaseStudyCard } from '@/components/case-study-card';
import { FrameworkCard } from '@/components/framework-card';
import { MostReadItem } from '@/components/most-read-item';
import { NewsletterCard } from '@/components/newsletter-card';
import { SectionTitle } from '@/components/section-title';
import { Footer } from '@/components/footer';

const ceoBreakdowns = [
  {
    id: '1',
    image: '/hero-featured.png',
    imageAlt: 'How Nvidia Built CUDA',
    category: 'CEO Breakdowns',
    headline: 'How Nvidia Built CUDA',
    excerpt: 'The architectural decision that turned Nvidia from a graphics card company into the infrastructure backbone of AI.',
    author: 'Michael Zhang',
    readingTime: '12 min',
    href: '/articles/nvidia-cuda',
  },
  {
    id: '2',
    image: '/hero-featured.png',
    imageAlt: 'The Costco Strategy Playbook',
    category: 'CEO Breakdowns',
    headline: 'The Costco Strategy Playbook',
    excerpt: 'How Costco turned low margins and membership fees into one of the world\'s most successful retailers.',
    author: 'James Wilson',
    readingTime: '10 min',
    href: '/articles/costco-strategy',
  },
  {
    id: '3',
    image: '/hero-featured.png',
    imageAlt: 'Inside Apple\'s Product Culture',
    category: 'CEO Breakdowns',
    headline: 'Inside Apple\'s Product Culture',
    excerpt: 'The systems and principles that have guided Apple\'s product decisions for over two decades.',
    author: 'Lisa Anderson',
    readingTime: '15 min',
    href: '/articles/apple-product-culture',
  },
  {
    id: '4',
    image: '/hero-featured.png',
    imageAlt: 'The OpenAI Business Model',
    category: 'CEO Breakdowns',
    headline: 'The OpenAI Business Model',
    excerpt: 'How OpenAI transformed research into a subscription service that powers the AI revolution.',
    author: 'David Chen',
    readingTime: '11 min',
    href: '/articles/openai-business-model',
  },
];

const latestStories = [
  {
    id: '1',
    image: '/hero-featured.png',
    imageAlt: 'Netflix\'s Reinvention Strategy',
    category: 'Case Studies',
    headline: 'Netflix\'s Reinvention Strategy',
    excerpt: 'From DVD rental service to streaming giant: the strategic pivots that saved Netflix.',
    author: 'Sarah Chen',
    readingTime: '9 min',
    href: '/articles/netflix-reinvention',
  },
  {
    id: '2',
    image: '/hero-featured.png',
    imageAlt: 'Tesla\'s Manufacturing Advantage',
    category: 'Manufacturing',
    headline: 'Tesla\'s Manufacturing Advantage',
    excerpt: 'How Tesla\'s vertical integration and manufacturing innovation became its competitive moat.',
    author: 'Robert Kumar',
    readingTime: '13 min',
    href: '/articles/tesla-manufacturing',
  },
  {
    id: '3',
    image: '/hero-featured.png',
    imageAlt: 'Amazon\'s Flywheel Explained',
    category: 'Strategy',
    headline: 'Amazon\'s Flywheel Explained',
    excerpt: 'The virtuous cycle of network effects and customer obsession that powers Amazon\'s dominance.',
    author: 'Emma Thompson',
    readingTime: '14 min',
    href: '/articles/amazon-flywheel',
  },
];

const caseStudies = [
  {
    id: '1',
    image: '/hero-featured.png',
    imageAlt: 'Netflix case study',
    company: 'Netflix',
    headline: 'How Netflix Built a $250B Media Empire',
    description: 'From DVDs to streaming to content creation: Netflix\'s transformation strategy and how they went from disrupting Blockbuster to becoming a Hollywood studio.',
    keyTakeaway: 'Success requires constant reinvention and willingness to cannibalize your own business.',
    href: '/case-studies/netflix',
  },
  {
    id: '2',
    image: '/hero-featured.png',
    imageAlt: 'Stripe case study',
    company: 'Stripe',
    headline: 'How Stripe Became the Infrastructure Layer for the Internet',
    description: 'By focusing on developer experience and solving the unglamorous problem of payments infrastructure, Stripe became the most valuable private fintech company.',
    keyTakeaway: 'Focus on the infrastructure that other companies need, not the customer-facing product.',
    href: '/case-studies/stripe',
  },
];

const frameworks = [
  {
    id: '1',
    title: 'The Jobs to Be Done Framework',
    description: 'Understanding what job customers are hiring your product to do.',
    components: ['Customer Research', 'Job Definition', 'Solution Design'],
    icon: '⚙️',
    href: '/frameworks/jobs-to-be-done',
  },
  {
    id: '2',
    title: 'The Hedgehog Concept',
    description: 'Finding your strategic focus at the intersection of three circles.',
    components: ['Passion', 'Capability', 'Economics'],
    icon: '🎯',
    href: '/frameworks/hedgehog-concept',
  },
  {
    id: '3',
    title: 'Porter\'s Five Forces',
    description: 'Analyzing industry competitiveness and strategic positioning.',
    components: ['Rivalry', 'Threats', 'Bargaining Power', 'Substitutes'],
    icon: '📊',
    href: '/frameworks/porters-five-forces',
  },
];

const mostRead = [
  { rank: 1, headline: 'How Nvidia Built CUDA', category: 'CEO Breakdowns', views: 45230, href: '/articles/nvidia-cuda' },
  { rank: 2, headline: 'The Costco Strategy Playbook', category: 'Strategy', views: 38921, href: '/articles/costco-strategy' },
  { rank: 3, headline: 'Netflix\'s Reinvention Strategy', category: 'Case Studies', views: 35642, href: '/articles/netflix-reinvention' },
  { rank: 4, headline: 'Inside Apple\'s Product Culture', category: 'CEO Breakdowns', views: 33115, href: '/articles/apple-product-culture' },
  { rank: 5, headline: 'Tesla\'s Manufacturing Advantage', category: 'Manufacturing', views: 31428, href: '/articles/tesla-manufacturing' },
];

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="w-full">
        {/* Hero Section */}
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

        {/* CEO Breakdowns Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <SectionTitle title="CEO Breakdowns" description="Deep analysis of the decisions and strategies behind the world's most successful companies." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ceoBreakdowns.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </section>

        {/* Latest Stories Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 border-t border-border">
          <SectionTitle title="Latest Stories" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestStories.map((article) => (
              <FeaturedArticleCard key={article.id} {...article} />
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 border-t border-border">
          <SectionTitle title="Case Studies" description="Real-world examples of strategic thinking and execution from industry leaders." />
          <div className="space-y-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>
        </section>

        {/* Frameworks Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 border-t border-border">
          <SectionTitle title="Frameworks" description="Battle-tested frameworks for strategic thinking and decision-making." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frameworks.map((framework) => (
              <FrameworkCard key={framework.id} {...framework} />
            ))}
          </div>
        </section>

        {/* Most Read Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 border-t border-border">
          <SectionTitle title="Most Read This Week" />
          <div className="bg-surface border border-border rounded-lg p-8">
            {mostRead.map((item) => (
              <MostReadItem key={item.rank} {...item} />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 border-t border-border">
          <NewsletterCard />
        </section>
      </main>

      <Footer />
    </>
  );
}
