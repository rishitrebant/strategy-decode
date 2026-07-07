import { article } from "@/sanity/schemaTypes/documents/article";
import { author } from "@/sanity/schemaTypes/documents/author";
import { category } from "@/sanity/schemaTypes/documents/category";
import { company } from "@/sanity/schemaTypes/documents/company";
import { homePage } from "@/sanity/schemaTypes/documents/homePage";
import { redirect } from "@/sanity/schemaTypes/documents/redirect";
import { siteSettings } from "@/sanity/schemaTypes/documents/siteSettings";
import { tag } from "@/sanity/schemaTypes/documents/tag";
import { callout } from "@/sanity/schemaTypes/objects/callout";
import { codeBlock } from "@/sanity/schemaTypes/objects/codeBlock";
import { editorialImage } from "@/sanity/schemaTypes/objects/editorialImage";
import { portableContent } from "@/sanity/schemaTypes/objects/portableContent";
import { pullQuote } from "@/sanity/schemaTypes/objects/pullQuote";
import { seo } from "@/sanity/schemaTypes/objects/seo";
import { source } from "@/sanity/schemaTypes/objects/source";
import { youtubeEmbed } from "@/sanity/schemaTypes/objects/youtubeEmbed";
import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    author,
    category,
    tag,
    company,
    homePage,
    siteSettings,
    redirect,
    seo,
    editorialImage,
    source,
    pullQuote,
    youtubeEmbed,
    codeBlock,
    callout,
    portableContent,
  ],
};
