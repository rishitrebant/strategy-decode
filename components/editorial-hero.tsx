'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface EditorialHeroProps {
  category: string;
  headline: string;
  excerpt: string;
  author: string;
  readingTime: string;
  publishedDate: string;
  imageUrl: string;
  imageAlt: string;
  storyUrl?: string;
}

export function EditorialHero({
  category,
  headline,
  excerpt,
  author,
  readingTime,
  publishedDate,
  imageUrl,
  imageAlt,
  storyUrl = '#',
}: EditorialHeroProps) {
  return (
    <article className="w-full">
      {/* Hero Image */}
      <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden bg-neutral-100">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Category Badge */}
        <div className="mb-6">
          <Badge variant="outline" className="text-xs font-medium uppercase tracking-wide">
            {category}
          </Badge>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight mb-6 text-foreground">
          {headline}
        </h1>

        {/* Excerpt */}
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 font-light">
          {excerpt}
        </p>

        {/* Article Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-200 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">{author}</p>
              <p className="text-xs text-neutral-500">{publishedDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 sm:ml-auto">
            <span className="text-sm text-neutral-500">{readingTime} read</span>
          </div>
        </div>

        {/* Read Story Button */}
        <Button
          asChild
          className="inline-block"
        >
          <Link href={storyUrl}>
            Read Story
          </Link>
        </Button>
      </div>
    </article>
  );
}
