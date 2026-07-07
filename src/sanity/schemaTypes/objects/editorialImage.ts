import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const editorialImage = defineType({
  name: "editorialImage",
  title: "Editorial image",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
    defineField({
      name: "credit",
      title: "Credit",
      type: "string",
    }),
  ],
});
