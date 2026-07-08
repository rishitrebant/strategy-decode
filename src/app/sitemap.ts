import type { MetadataRoute } from "next";

import { client } from "@/sanity/lib/client";
import {
  allArticleSlugsQuery,
  allAuthorSlugsQuery,
  allCategorySlugsQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [settings, articleSlugs, categorySlugs, authorSlugs] = await Promise.all([
    client.fetch<{ baseUrl?: string } | null>(siteSettingsQuery),
    client.fetch<{ slug: string; publishedAt?: string }[]>(allArticleSlugsQuery),
    client.fetch<{ slug: string }[]>(allCategorySlugsQuery),
    client.fetch<{ slug: string }[]>(allAuthorSlugsQuery),
  ]);

  const baseUrl = settings?.baseUrl ?? "https://strategydecode.com";

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
    ...articleSlugs.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: article.publishedAt ? new Date(article.publishedAt) : new Date(),
    })),
    ...categorySlugs.map((category) => ({
      url: `${baseUrl}/categories/${category.slug}`,
      lastModified: new Date(),
    })),
    ...authorSlugs.map((author) => ({
      url: `${baseUrl}/authors/${author.slug}`,
      lastModified: new Date(),
    })),
  ];
}
