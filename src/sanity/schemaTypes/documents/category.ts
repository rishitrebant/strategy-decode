import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "parent",
      title: "Parent category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) =>
        rule.custom((parent, context) => {
          if (!parent?._ref || !context.document?._id) return true;
          const currentId = context.document._id.replace(/^drafts\./, "");
          return parent._ref === currentId ? "A category cannot be its own parent." : true;
        }),
    }),
    defineField({
      name: "fullPath",
      title: "Full path",
      description: "Materialized nested path, e.g. growth/distribution.",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "longDescription",
      title: "Long SEO/editorial description",
      type: "portableContent",
    }),
    defineField({
      name: "image",
      title: "Category image",
      type: "editorialImage",
    }),
    defineField({
      name: "featuredArticle",
      title: "Featured article",
      type: "reference",
      to: [{ type: "article" }],
    }),
    defineField({
      name: "order",
      title: "Sort order",
      type: "number",
      validation: (rule) => rule.integer().min(0),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
