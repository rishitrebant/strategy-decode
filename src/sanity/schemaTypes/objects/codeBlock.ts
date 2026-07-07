import { CodeBlockIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const codeBlock = defineType({
  name: "codeBlock",
  title: "Code block",
  type: "object",
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      initialValue: "text",
    }),
    defineField({
      name: "filename",
      title: "Filename",
      type: "string",
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "text",
      rows: 12,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "highlightedLines",
      title: "Highlighted lines",
      description: "Comma-separated line numbers or ranges, e.g. 1,3-5.",
      type: "string",
    }),
  ],
});
