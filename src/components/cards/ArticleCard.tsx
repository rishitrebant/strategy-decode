import Link from "next/link";

import { ArrowIcon } from "@/components/ui/ArrowIcon";
import {
  EditorialArtwork,
  type ArtworkVariant,
} from "@/components/ui/EditorialArtwork";

export type ArticleCardData = {
  artwork: ArtworkVariant;
  category: string;
  readTime: string;
  slug: string;
  title: string;
};

type ArticleCardProps = ArticleCardData & {
  className?: string;
};

export function ArticleCard({
  artwork,
  category,
  className = "",
  readTime,
  slug,
  title,
}: ArticleCardProps) {
  return (
    <article className={`group ${className}`}>
      <Link className="block" href={`/articles/${slug}`}>
        <EditorialArtwork
          className="transition-transform duration-200 group-hover:scale-[0.995]"
          variant={artwork}
        />
        <div className="border-t border-rule pt-4">
          <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.17em]">
            <span className="text-accent">{category}</span>
            <span className="text-muted">{readTime}</span>
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
