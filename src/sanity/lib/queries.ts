import { groq } from "next-sanity";

// ---------- Shared projections ----------

const articleCardProjection = /* groq */ `{
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  heroImage,
  "category": primaryCategory->{title, "slug": slug.current},
  "authors": authors[]->{name, "slug": slug.current},
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
}`;

const articleFullProjection = /* groq */ `{
  _id,
  title,
  "slug": slug.current,
  dek,
  excerpt,
  body,
  heroImage,
  publishedAt,
  updatedAtEditorial,
  seo,
  "category": primaryCategory->{title, "slug": slug.current},
  "secondaryCategories": secondaryCategories[]->{title, "slug": slug.current},
  "authors": authors[]->{
    name,
    "slug": slug.current,
    role,
    portrait,
    shortBio,
    socialLinks
  },
  "tags": tags[]->{title, "slug": slug.current},
  "companies": companies[]->{name, "slug": slug.current, logo},
  "relatedArticles": relatedArticles[]->${articleCardProjection},
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
}`;

// ---------- Site-wide ----------

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  title,
  tagline,
  description,
  baseUrl,
  defaultShareImage,
  navigation,
  footerLinkGroups,
  footerTagline,
  footerDescription,
  socialProfiles,
  newsletter,
  organization
}`;

// ---------- Homepage ----------

export const homePageQuery = groq`*[_type == "homePage"][0]{
  heroEyebrow,
  heroHeadline,
  heroIntroduction,
  heroBadge,
  heroTags,
  newsletterHeading,
  newsletterCopy,
  "featuredStory": featuredStory->${articleFullProjection},
  "categoryModules": categoryModules[]->{
    title,
    "slug": slug.current,
    description
  },
  "latestArticles": coalesce(
    latestOverride[]->${articleCardProjection},
    *[_type == "article" && status == "ready"] | order(publishedAt desc)[0...9]${articleCardProjection}
  )
}`;

// ---------- Articles ----------

export const allArticleSlugsQuery = groq`*[_type == "article" && status == "ready"]{"slug": slug.current, publishedAt}`;

export const articleBySlugQuery = groq`*[_type == "article" && slug.current == $slug][0]${articleFullProjection}`;

export const allArticlesQuery = groq`*[_type == "article" && status == "ready"] | order(publishedAt desc)${articleCardProjection}`;

export const articlesByCategoryQuery = groq`*[
  _type == "article" && status == "ready" && primaryCategory->slug.current == $categorySlug
] | order(publishedAt desc)${articleCardProjection}`;

export const searchArticlesQuery = groq`*[
  _type == "article" && status == "ready" &&
  (title match $q + "*" || excerpt match $q + "*" || dek match $q + "*")
] | order(publishedAt desc)${articleCardProjection}`;

// ---------- Categories ----------

export const allCategoriesQuery = groq`*[_type == "category"] | order(order asc){
  title,
  "slug": slug.current,
  description,
  image
}`;

export const categoryBySlugQuery = groq`*[_type == "category" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  description,
  longDescription,
  image,
  "featuredArticle": featuredArticle->${articleCardProjection}
}`;

export const allCategorySlugsQuery = groq`*[_type == "category"]{"slug": slug.current}`;

// ---------- Authors ----------

export const allAuthorsQuery = groq`*[_type == "author" && active == true]{
  name,
  "slug": slug.current,
  role,
  portrait,
  shortBio
}`;

export const authorBySlugQuery = groq`*[_type == "author" && slug.current == $slug][0]{
  name,
  "slug": slug.current,
  role,
  portrait,
  shortBio,
  bio,
  socialLinks
}`;

export const authorArticlesQuery = groq`*[
  _type == "article" && status == "ready" && $authorSlug in authors[]->slug.current
] | order(publishedAt desc)${articleCardProjection}`;

export const allAuthorSlugsQuery = groq`*[_type == "author"]{"slug": slug.current}`;

// ---------- Companies ----------

export const allCompaniesQuery = groq`*[_type == "company"] | order(name asc){
  name,
  "slug": slug.current,
  logo,
  summary,
  industries
}`;

export const companyBySlugQuery = groq`*[_type == "company" && slug.current == $slug][0]{
  name,
  "slug": slug.current,
  logo,
  summary,
  website,
  foundedYear,
  headquarters,
  industries,
  seo
}`;

export const allCompanySlugsQuery = groq`*[_type == "company"]{"slug": slug.current}`;
