import { CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "title",
      title: "Site title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "baseUrl",
      title: "Base URL",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "defaultShareImage",
      title: "Default share image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "navigation",
      title: "Primary navigation",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL/path", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "footerLinkGroups",
      title: "Footer link groups",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "footerLinkGroup",
          fields: [
            defineField({ name: "title", title: "Group title", type: "string" }),
            defineField({
              name: "links",
              title: "Links",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({ name: "label", title: "Label", type: "string" }),
                    defineField({ name: "href", title: "URL/path", type: "string" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "footerTagline",
      title: "Footer tagline",
      description: 'e.g. "Clarity over noise"',
      type: "string",
    }),
    defineField({
      name: "footerDescription",
      title: "Footer description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "socialProfiles",
      title: "Social profiles",
      type: "object",
      fields: [
        defineField({ name: "x", title: "X / Twitter", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
        defineField({ name: "youtube", title: "YouTube", type: "url" }),
      ],
    }),
    defineField({
      name: "newsletter",
      title: "Newsletter",
      type: "object",
      fields: [
        defineField({ name: "provider", title: "Provider", type: "string", initialValue: "Buttondown" }),
        defineField({ name: "archiveUrl", title: "Archive URL", type: "url" }),
      ],
    }),
    defineField({
      name: "comments",
      title: "Comments",
      type: "object",
      fields: [
        defineField({ name: "enabled", title: "Enabled", type: "boolean", initialValue: false }),
        defineField({ name: "provider", title: "Provider", type: "string", initialValue: "Hyvor Talk" }),
      ],
    }),
    defineField({
      name: "organization",
      title: "Organization schema",
      type: "object",
      fields: [
        defineField({ name: "name", title: "Name", type: "string" }),
        defineField({ name: "logo", title: "Logo", type: "image" }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site settings" };
    },
  },
});
