import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero eyebrow",
      type: "string",
      initialValue: "Business strategy, decoded",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero headline",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroIntroduction",
      title: "Hero introduction",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroBadge",
      title: "Hero badge",
      description: 'Small label, e.g. "Independent Publication".',
      type: "string",
    }),
    defineField({
      name: "heroTags",
      title: "Hero tags",
      description: 'Short list shown under the intro, e.g. Strategy / Power / Growth / Psychology.',
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: "featuredStory",
      title: "Featured story",
      type: "reference",
      to: [{ type: "article" }],
    }),
    defineField({
      name: "categoryModules",
      title: "Category modules",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })],
      validation: (rule) => rule.unique().max(8),
    }),
    defineField({
      name: "latestOverride",
      title: "Latest override",
      description: "Optional manual ordering. Leave empty for chronological latest.",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "article" }] })],
      validation: (rule) => rule.unique().max(12),
    }),
    defineField({
      name: "trendingStories",
      title: "Trending stories",
      description: "Curated manually at launch.",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "article" }] })],
      validation: (rule) => rule.unique().max(8),
    }),
    defineField({
      name: "newsletterHeading",
      title: "Newsletter heading",
      type: "string",
    }),
    defineField({
      name: "newsletterCopy",
      title: "Newsletter copy",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Homepage" };
    },
  },
});
