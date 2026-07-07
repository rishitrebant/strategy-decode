import { InfoOutlineIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const callout = defineType({
  name: "callout",
  title: "Callout",
  type: "object",
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: "tone",
      title: "Tone",
      type: "string",
      initialValue: "note",
      options: {
        layout: "radio",
        list: [
          { title: "Note", value: "note" },
          { title: "Insight", value: "insight" },
          { title: "Warning", value: "warning" },
        ],
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
});
