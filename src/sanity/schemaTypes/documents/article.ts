import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) =>
        rule.required().min(35).warning("Article titles usually work best at 35–80 characters."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dek",
      title: "Dek / subheadline",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(80).max(240),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(120).max(190),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "portableContent",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "editorialImage",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "author" }] })],
      validation: (rule) => rule.required().min(1).unique(),
    }),
    defineField({
      name: "primaryCategory",
      title: "Primary category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "secondaryCategories",
      title: "Secondary categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })],
      validation: (rule) => rule.unique(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "tag" }] })],
      validation: (rule) => rule.unique(),
    }),
    defineField({
      name: "companies",
      title: "Companies",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "company" }] })],
      validation: (rule) => rule.unique(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "updatedAtEditorial",
      title: "Editorially updated at",
      type: "datetime",
      description: "Only set for reader-visible updates or corrections.",
    }),
    defineField({
      name: "status",
      title: "Editorial status",
      type: "string",
      initialValue: "draft",
      options: {
        layout: "radio",
        list: [
          { title: "Draft", value: "draft" },
          { title: "In review", value: "inReview" },
          { title: "Ready", value: "ready" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Only use for syndicated/external-original content.",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
    defineField({
      name: "relatedArticles",
      title: "Related articles",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "article" }] })],
      validation: (rule) => rule.max(4).unique(),
    }),
    defineField({
      name: "sources",
      title: "Sources",
      type: "array",
      of: [defineArrayMember({ type: "source" })],
    }),
    defineField({
      name: "sponsorDisclosure",
      title: "Sponsor disclosure",
      type: "object",
      fields: [
        defineField({ name: "sponsorName", title: "Sponsor name", type: "string" }),
        defineField({
          name: "disclosureText",
          title: "Disclosure text",
          type: "text",
          rows: 3,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "primaryCategory.title",
      media: "heroImage.image",
    },
  },
});
