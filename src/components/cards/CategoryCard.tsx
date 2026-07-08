import Link from "next/link";

import { ArrowIcon } from "@/components/ui/ArrowIcon";

type CategoryCardProps = {
  description?: string;
  index: string;
  title: string;
  slug: string;
};

export function CategoryCard({ description, index, title, slug }: CategoryCardProps) {
  return (
    <Link
      className="group col-span-2 flex min-h-56 flex-col justify-between border-t border-rule py-5 transition-colors duration-150 hover:border-accent md:col-span-4 lg:min-h-64"
      href={`/categories/${slug}`}
    >
      <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.17em]">
        <span className="text-muted">Focus {index}</span>
        <ArrowIcon className="size-4 text-muted transition-all duration-150 group-hover:translate-x-1 group-hover:text-accent" />
      </div>
      <div>
        <h3 className="font-serif text-[clamp(2rem,3.4vw,3.8rem)] font-medium leading-none tracking-[-0.04em]">
          {title}
        </h3>
        <p className="mt-4 max-w-xs text-sm leading-6 text-muted">{description}</p>
      </div>
    </Link>
  );
}
