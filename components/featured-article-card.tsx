'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface FeaturedArticleCardProps {
  id: string;
  image: string;
  imageAlt: string;
  category: string;
  headline: string;
  excerpt: string;
  author: string;
  readingTime: string;
  href: string;
}

export function FeaturedArticleCard({
  image,
  imageAlt,
  category,
  headline,
  excerpt,
  author,
  readingTime,
  href,
}: FeaturedArticleCardProps) {
  return (
    <Link href={href}>
      <article className="group flex flex-col h-full cursor-pointer">
        {/* Image Container - Larger */}
        <div className="relative overflow-hidden rounded-lg bg-neutral-100 mb-8 aspect-square">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Category Badge */}
          <div className="mb-4">
            <Badge variant="outline">{category}</Badge>
          </div>

          {/* Headline - Larger */}
          <h3 className="text-2xl font-semibold leading-snug mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
            {headline}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
            <span>{author}</span>
            <span>{readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
