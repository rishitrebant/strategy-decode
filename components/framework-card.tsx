'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface FrameworkCardProps {
  id: string;
  title: string;
  description: string;
  components: string[];
  icon?: string;
  href: string;
}

export function FrameworkCard({
  title,
  description,
  components,
  icon,
  href,
}: FrameworkCardProps) {
  return (
    <Link href={href}>
      <article className="group flex flex-col p-8 border border-border rounded-lg hover:border-primary hover:shadow-sm hover:bg-neutral-50 transition-all duration-300 bg-surface h-full">
        {/* Icon placeholder - minimal */}
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-neutral-100 mb-6 flex items-center justify-center text-2xl">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold leading-snug mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Components */}
        <div className="flex flex-wrap gap-2">
          {components.map((component) => (
            <Badge key={component} variant="outline" className="text-xs">
              {component}
            </Badge>
          ))}
        </div>
      </article>
    </Link>
  );
}
