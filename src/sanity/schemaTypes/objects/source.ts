import { defineField, defineType } from "sanity";

export const source = defineType({
  name: "source",
  title: "Source",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publisher",
      title: "Publisher",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) =>
        rule.uri({ scheme: ["http", "https"] }).required(),
    }),
    defineField({
      name: "accessedAt",
      title: "Accessed date",
      type: "date",
    }),
  ],
});
