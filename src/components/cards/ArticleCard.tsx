import Link from "next/link";

import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { SanityImage } from "@/components/ui/SanityImage";
import { formatReadTime } from "@/lib/format";

export type ArticleCardData = {
  slug: string;
  title: string;
  heroImage?: unknown;
  category?: { title: string; slug: string } | null;
  estimatedReadingTime?: number | null;
};

type ArticleCardProps = ArticleCardData & {
  className?: string;
};

export function ArticleCard({
  heroImage,
  category,
  className = "",
  estimatedReadingTime,
  slug,
  title,
}: ArticleCardProps) {
  return (
    <article className={`group ${className}`}>
      <Link className="block" href={`/articles/${slug}`}>
        <SanityImage
          className="min-h-[16rem] transition-transform duration-200 group-hover:scale-[0.995]"
          value={heroImage as never}
        />
        <div className="border-t border-rule pt-4">
          <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.17em]">
            <span className="text-accent">{category?.title ?? "Strategy"}</span>
            <span className="text-muted">{formatReadTime(estimatedReadingTime)}</span>
          </div>
          <div className="mt-6 flex items-end justify-between gap-5">
            <h3 className="max-w-[11em] font-serif text-[clamp(2.15rem,4vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.045em] text-balance">
              {title}
            </h3>
            <ArrowIcon className="mb-1 size-5 shrink-0 text-muted transition-all duration-150 group-hover:translate-x-1 group-hover:text-ink" />
          </div>
        </div>
      </Link>
    </article>
  );
}
