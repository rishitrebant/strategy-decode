import { TransferIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const redirect = defineType({
  name: "redirect",
  title: "Redirect",
  type: "document",
  icon: TransferIcon,
  fields: [
    defineField({
      name: "fromPath",
      title: "From path",
      type: "string",
      description: "Path only, e.g. /articles/old-slug.",
      validation: (rule) => rule.required().regex(/^\//, "Must start with /."),
    }),
    defineField({
      name: "toPath",
      title: "To path or URL",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "number",
      initialValue: 308,
      options: {
        layout: "radio",
        list: [
          { title: "301 permanent", value: 301 },
          { title: "308 permanent", value: 308 },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "note",
      title: "Note",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: "fromPath",
      subtitle: "toPath",
    },
  },
});
