import { EarthGlobeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const company = defineType({
  name: "company",
  title: "Company",
  type: "document",
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
    }),
    defineField({ name: "website", title: "Website", type: "url" }),
    defineField({ name: "foundedYear", title: "Founded year", type: "number" }),
    defineField({ name: "headquarters", title: "Headquarters", type: "string" }),
    defineField({
      name: "industries",
      title: "Industries",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.unique(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
