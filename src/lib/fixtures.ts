import type { ArtworkVariant } from "@/components/ui/EditorialArtwork";

export type FixtureAuthor = {
  bio: string;
  name: string;
  role: string;
  slug: string;
};

export type FixtureCategory = {
  description: string;
  longDescription: string;
  name: string;
  slug: string;
};

export type FixtureArticle = {
  artwork: ArtworkVariant;
  authorSlug: string;
  body: string[];
  categorySlug: string;
  dek: string;
  excerpt: string;
  featured?: boolean;
  publishedAt: string;
  readTime: string;
  slug: string;
  tags: string[];
  title: string;
};

export const authors: FixtureAuthor[] = [
  {
    name: "Strategy Decode",
    slug: "strategy-decode",
    role: "Editorial desk",
    bio: "The Strategy Decode editorial desk studies company strategy, business models, marketing systems, and leadership decisions behind durable advantage.",
  },
];

export const categories: FixtureCategory[] = [
  {
    name: "Marketing",
    slug: "marketing",
    description: "How companies create demand, memory, and cultural relevance.",
    longDescription:
      "Marketing at Strategy Decode means more than campaigns. We study positioning, distribution, category design, pricing signals, cultural memory, and the systems that make customers choose one company over another.",
  },
  {
    name: "Business Models",
    slug: "business-models",
    description: "The systems that turn customer value into durable economics.",
    longDescription:
      "Business model analysis focuses on how companies create, capture, and compound value. The best models make good customer behavior and strong unit economics reinforce each other.",
  },
  {
    name: "Leadership",
    slug: "leadership",
    description: "The consequential decisions made when the path is not obvious.",
    longDescription:
      "Leadership coverage examines founder judgment, CEO decision-making, operating cadence, culture, and the strategic tradeoffs that shape companies under pressure.",
  },
  {
    name: "Psychology",
    slug: "psychology",
    description: "The invisible forces that shape what people choose and remember.",
    longDescription:
      "Psychology is where strategy meets human behavior: habits, identity, memory, friction, trust, status, defaults, and the subtle mechanisms that change demand.",
  },
  {
    name: "Growth",
    slug: "growth",
    description: "Compounding loops, distribution advantages, and paths to scale.",
    longDescription:
      "Growth strategy explores the loops, channels, product decisions, and timing advantages that help companies scale without losing the economics that made them work.",
  },
  {
    name: "Startups",
    slug: "startups",
    description: "Early choices that determine whether an ambitious company endures.",
    longDescription:
      "Startup strategy focuses on wedge selection, founder-market fit, sequencing, capital discipline, and the fragile early decisions that create or destroy optionality.",
  },
];

export const articles: FixtureArticle[] = [
  {
    title: "How Red Bull Built a Media Empire",
    slug: "how-red-bull-built-a-media-empire",
    categorySlug: "marketing",
    authorSlug: "strategy-decode",
    readTime: "18 min read",
    publishedAt: "2026-06-24",
    artwork: "redbull",
    featured: true,
    tags: ["media", "brand", "distribution"],
    dek: "Red Bull does not merely market an energy drink. It manufactures culture, owns attention, and turns spectacle into a distribution advantage competitors cannot buy.",
    excerpt:
      "A decode of how Red Bull transformed a commodity beverage into a media machine by owning events, athletes, stories, and the cultural contexts where its product makes sense.",
    body: [
      "Red Bull’s strategic insight was that attention is easier to rent than to own, but ownership compounds. Instead of only buying ad placements around culture, the company started producing the culture itself.",
      "The brand built a portfolio of assets that looked like marketing costs from the outside and distribution infrastructure from the inside: events, teams, athlete relationships, films, and owned media channels.",
      "The lesson is not that every company should become a media company. It is that the strongest brands often control the context in which customers learn what the product means.",
    ],
  },
  {
    title: "Why Nike Sells Identity",
    slug: "why-nike-sells-identity",
    categorySlug: "marketing",
    authorSlug: "strategy-decode",
    readTime: "12 min read",
    publishedAt: "2026-06-21",
    artwork: "nike",
    tags: ["identity", "brand", "culture"],
    dek: "Nike’s advantage is not just product performance. It is the ability to attach shoes and apparel to the identity customers want to inhabit.",
    excerpt:
      "Nike turns athletic aspiration into a repeatable brand system, using elite performance, cultural storytelling, and identity to make products feel personally meaningful.",
    body: [
      "Nike sells equipment, but the strategic product is identity. The customer is not only buying a shoe; they are buying a story about effort, taste, discipline, and belonging.",
      "The company reinforces that identity through athletes, product drops, retail environments, and a language of personal transformation that travels across sports and cultures.",
      "The durable advantage is emotional memory. When customers already know what Nike means, each new product starts with a reservoir of belief.",
    ],
  },
  {
    title: "The Netflix Flywheel",
    slug: "the-netflix-flywheel",
    categorySlug: "growth",
    authorSlug: "strategy-decode",
    readTime: "15 min read",
    publishedAt: "2026-06-18",
    artwork: "netflix",
    tags: ["flywheels", "subscription", "content"],
    dek: "Netflix’s growth came from reinforcing loops between subscribers, content investment, personalization, and global distribution.",
    excerpt:
      "A breakdown of the loops that helped Netflix scale from DVD logistics to a global entertainment platform with recurring revenue and data-informed content bets.",
    body: [
      "Netflix’s most important strategic move was not one product pivot. It was the construction of a flywheel where each additional subscriber improved the company’s ability to fund and distribute content.",
      "The streaming model changed the economics of attention. Global distribution meant a show could amortize across markets in a way traditional TV rarely allowed.",
      "The risk is that flywheels can become treadmills. When content spending rises faster than subscriber quality, the loop still moves — but it may stop compounding.",
    ],
  },
  {
    title: "How Costco Wins",
    slug: "how-costco-wins",
    categorySlug: "business-models",
    authorSlug: "strategy-decode",
    readTime: "11 min read",
    publishedAt: "2026-06-15",
    artwork: "costco",
    tags: ["retail", "membership", "trust"],
    dek: "Costco built a retail model where restraint, trust, and membership economics reinforce each other.",
    excerpt:
      "Costco’s edge comes from a disciplined operating model: fewer SKUs, low markups, membership revenue, employee retention, and a bargain-hunting experience customers trust.",
    body: [
      "Costco wins by making a promise that is unusually easy to understand and unusually hard to copy: the customer should trust that the deal is good.",
      "The membership model changes the incentives. Profit does not have to come primarily from pushing margins on each item, which supports the perception that Costco is on the customer’s side.",
      "Strategic restraint is the point. Fewer choices, limited markups, and a warehouse format are not aesthetic quirks; they are the mechanism.",
    ],
  },
  {
    title: "The IKEA Maze Strategy",
    slug: "the-ikea-maze-strategy",
    categorySlug: "psychology",
    authorSlug: "strategy-decode",
    readTime: "9 min read",
    publishedAt: "2026-06-12",
    artwork: "ikea",
    tags: ["retail", "psychology", "experience"],
    dek: "IKEA’s store design turns browsing into commitment by choreographing discovery, effort, and ownership.",
    excerpt:
      "A look at how IKEA uses retail psychology, showroom sequencing, flat-pack economics, and customer participation to make furniture feel attainable and personal.",
    body: [
      "IKEA’s maze is not accidental friction. It is a controlled journey that teaches customers how to imagine a room, compare styles, and discover adjacent needs.",
      "The store makes customers co-producers. Measuring, carrying, assembling, and transporting are not just cost savings; they can deepen the feeling of ownership.",
      "The strategic lesson is that experience design can alter economics when it changes what customers are willing to do themselves.",
    ],
  },
  {
    title: "How Apple Controls Pricing",
    slug: "how-apple-controls-pricing",
    categorySlug: "business-models",
    authorSlug: "strategy-decode",
    readTime: "14 min read",
    publishedAt: "2026-06-09",
    artwork: "apple",
    tags: ["pricing", "ecosystem", "brand"],
    dek: "Apple protects price by controlling the product, the channel, the ecosystem, and the comparison set.",
    excerpt:
      "Apple’s pricing power is not magic. It comes from integrated hardware, software, services, retail control, brand trust, and high switching costs.",
    body: [
      "Apple’s pricing power begins before the price is shown. The company shapes the comparison set through product integration, ecosystem benefits, and a retail experience that emphasizes value over discount.",
      "Control is the strategic through-line. Hardware, software, services, distribution, and brand all work together to reduce substitutability.",
      "The result is not immunity from competition. It is a wider zone in which Apple can charge premium prices without needing to explain itself every time.",
    ],
  },
  {
    title: "The Starbucks Third Place Strategy",
    slug: "the-starbucks-third-place-strategy",
    categorySlug: "marketing",
    authorSlug: "strategy-decode",
    readTime: "13 min read",
    publishedAt: "2026-06-06",
    artwork: "starbucks",
    tags: ["brand", "retail", "ritual"],
    dek: "Starbucks turned coffee into a repeatable ritual by owning the space between home and work.",
    excerpt:
      "The third-place strategy helped Starbucks make coffee feel like a daily ritual, using store design, language, convenience, and status cues to scale behavior.",
    body: [
      "Starbucks did not only premiumize coffee. It gave customers a place, a vocabulary, and a ritual that could fit into many different days.",
      "The third place worked because it blended consistency with small personal choices. Customers could feel known without the company surrendering operational control.",
      "As convenience reshapes the business, the strategic question is how much of the original place-based advantage can survive in a pickup-first world.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getAuthorBySlug(slug: string) {
  return authors.find((author) => author.slug === slug);
}

export function getArticlesByCategory(slug: string) {
  return articles.filter((article) => article.categorySlug === slug);
}

export function getArticlesByAuthor(slug: string) {
  return articles.filter((article) => article.authorSlug === slug);
}

export function getArticleCategory(article: FixtureArticle) {
  return getCategoryBySlug(article.categorySlug);
}

export function getArticleAuthor(article: FixtureArticle) {
  return getAuthorBySlug(article.authorSlug);
}
