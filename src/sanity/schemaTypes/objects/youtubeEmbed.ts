import { PlayIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const youtubeEmbed = defineType({
  name: "youtubeEmbed",
  title: "YouTube embed",
  type: "object",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "videoId",
      title: "Video ID",
      type: "string",
      description: "Use the YouTube video ID only, not the full embed code.",
      validation: (rule) =>
        rule.required().regex(/^[a-zA-Z0-9_-]{11}$/, {
          name: "YouTube video ID",
          invert: false,
        }),
    }),
    defineField({
      name: "title",
      title: "Accessible title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startAt",
      title: "Start time in seconds",
      type: "number",
      validation: (rule) => rule.integer().min(0),
    }),
  ],
});
