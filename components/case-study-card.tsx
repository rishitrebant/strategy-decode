'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface CaseStudyCardProps {
  id: string;
  image: string;
  imageAlt: string;
  company: string;
  headline: string;
  description: string;
  keyTakeaway: string;
  href: string;
}

export function CaseStudyCard({
  image,
  imageAlt,
  company,
  headline,
  description,
  keyTakeaway,
  href,
}: CaseStudyCardProps) {
  return (
    <Link href={href}>
      <article className="group flex flex-col md:flex-row gap-8 p-8 border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all duration-300 bg-surface">
        {/* Image - Left */}
        <div className="flex-shrink-0 w-full md:w-64">
          <div className="relative overflow-hidden rounded-lg bg-neutral-100 aspect-square">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content - Right */}
        <div className="flex flex-col flex-1 justify-between">
          {/* Header */}
          <div>
            {/* Company Badge */}
            <div className="mb-4">
              <Badge variant="secondary">{company}</Badge>
            </div>

            {/* Headline */}
            <h3 className="text-2xl font-semibold leading-snug mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
              {headline}
            </h3>

            {/* Description */}
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              {description}
            </p>

            {/* Key Takeaway */}
            <div className="p-4 bg-neutral-50 border-l-2 border-primary rounded-sm">
              <p className="text-sm font-medium text-foreground">
                Key Takeaway: <span className="font-normal text-muted-foreground">{keyTakeaway}</span>
              </p>
            </div>
          </div>

          {/* Read More Link */}
          <div className="mt-6">
            <span className="text-sm font-medium text-primary group-hover:underline">
              Read Case Study →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
