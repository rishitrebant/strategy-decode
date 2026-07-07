import { defineArrayMember, defineField, defineType } from "sanity";

export const portableContent = defineType({
  name: "portableContent",
  title: "Portable content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bulleted", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          defineArrayMember({
            name: "link",
            title: "External link",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "URL",
                type: "url",
                validation: (rule) =>
                  rule.uri({ scheme: ["http", "https", "mailto"] }).required(),
              }),
              defineField({
                name: "sponsored",
                title: "Sponsored link",
                type: "boolean",
                initialValue: false,
              }),
            ],
          }),
          defineArrayMember({
            name: "internalLink",
            title: "Internal link",
            type: "object",
            fields: [
              defineField({
                name: "reference",
                title: "Reference",
                type: "reference",
                to: [
                  { type: "article" },
                  { type: "category" },
                  { type: "author" },
                ],
                validation: (rule) => rule.required(),
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({ type: "editorialImage" }),
    defineArrayMember({ type: "pullQuote" }),
    defineArrayMember({ type: "youtubeEmbed" }),
    defineArrayMember({ type: "codeBlock" }),
    defineArrayMember({ type: "callout" }),
  ],
});
