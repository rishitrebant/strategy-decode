'use client';

import Link from 'next/link';

interface MostReadItemProps {
  rank: number;
  headline: string;
  category: string;
  views: number;
  href: string;
}

export function MostReadItem({
  rank,
  headline,
  category,
  views,
  href,
}: MostReadItemProps) {
  return (
    <Link href={href}>
      <article className="group flex items-start gap-6 py-6 border-b border-border hover:bg-neutral-50 px-4 -mx-4 transition-colors duration-200">
        {/* Rank */}
        <div className="flex-shrink-0 pt-1">
          <div className="text-4xl font-bold text-neutral-200 group-hover:text-primary transition-colors duration-300">
            {rank.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Category */}
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
            {category}
          </p>

          {/* Headline */}
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-3 line-clamp-2">
            {headline}
          </h3>

          {/* Views */}
          <p className="text-xs text-muted-foreground">
            {views.toLocaleString()} views
          </p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors duration-300 text-sm mt-1">
          →
        </div>
      </article>
    </Link>
  );
}
