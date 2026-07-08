import Link from "next/link";

import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { SanityImage } from "@/components/ui/SanityImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatByline, formatReadTime } from "@/lib/format";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";

type FeaturedArticleData = {
  slug: string;
  title: string;
  dek?: string;
  heroImage?: unknown;
  category?: { title: string; slug: string } | null;
  authors?: { name: string }[];
  estimatedReadingTime?: number | null;
};

type HomePageData = {
  featuredStory?: FeaturedArticleData | null;
};

export async function FeaturedArticle() {
  const data = await client.fetch<HomePageData | null>(homePageQuery);
  const article = data?.featuredStory;

  if (!article) return null;

  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading
          aside="Issue No. 001"
          eyebrow="Cover story"
          title="The strategy behind the spectacle."
        />

        <article className="mt-14 grid grid-cols-4 gap-5 md:mt-20 md:grid-cols-12">
          <Link
            aria-label={`Read ${article.title}`}
            className="group col-span-4 md:col-span-7"
            href={`/articles/${article.slug}`}
          >
            <SanityImage
              className="min-h-[25rem] transition-transform duration-200 group-hover:scale-[0.995] sm:min-h-[34rem] lg:min-h-[42rem]"
              value={article.heroImage as never}
            />
          </Link>

          <div className="col-span-4 flex flex-col border-t border-rule pt-5 md:col-span-5 md:col-start-8 md:border-t-0 md:border-l md:pl-8 md:pt-0 lg:pl-12">
            <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.17em]">
              <span className="text-accent">{article.category?.title ?? "Strategy"}</span>
              <span className="text-muted">{formatReadTime(article.estimatedReadingTime)}</span>
            </div>

            <h3 className="mt-12 font-serif text-[clamp(3.3rem,6.4vw,6.7rem)] font-medium leading-[0.86] tracking-[-0.055em] text-balance md:mt-auto">
              {article.title}
            </h3>
            <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {article.dek}
            </p>

            <div className="mt-10 flex items-end justify-between border-t border-rule pt-5">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                By {formatByline(article.authors)}
              </p>
              <Link
                className="group flex min-h-11 items-center gap-3 text-sm font-medium"
                href={`/articles/${article.slug}`}
              >
                Read the decode
                <ArrowIcon className="size-5 transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
