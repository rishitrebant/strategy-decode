'use client';

interface SectionTitleProps {
  title: string;
  description?: string;
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
