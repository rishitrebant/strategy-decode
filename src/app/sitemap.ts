import type { MetadataRoute } from "next";

import { articles, authors, categories } from "@/lib/fixtures";

const baseUrl = "https://strategydecode.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/articles",
    "/categories",
    "/authors",
    "/newsletter",
    "/about",
    "/editorial-policy",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(article.publishedAt),
    })),
    ...categories.map((category) => ({
      url: `${baseUrl}/categories/${category.slug}`,
      lastModified: new Date(),
    })),
    ...authors.map((author) => ({
      url: `${baseUrl}/authors/${author.slug}`,
      lastModified: new Date(),
    })),
  ];
}
