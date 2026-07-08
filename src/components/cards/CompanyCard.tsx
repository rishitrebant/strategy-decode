import Link from "next/link";

import { SanityImage } from "@/components/ui/SanityImage";

export type CompanyCardData = {
  name: string;
  slug: string;
  logo?: unknown;
  summary?: string;
  industries?: string[];
};

export function CompanyCard({ name, slug, logo, summary, industries }: CompanyCardData) {
  return (
    <Link
      className="group flex flex-col border-t border-rule py-6 transition-colors duration-150 hover:border-accent"
      href={`/companies/${slug}`}
    >
      <SanityImage
        className="min-h-24 max-w-[10rem] bg-transparent"
        sizes="200px"
        value={
          logo
            ? { image: logo, alt: name }
            : undefined
        }
      />
      <h3 className="mt-6 font-serif text-3xl leading-none tracking-[-0.03em] group-hover:text-accent">
        {name}
      </h3>
      {summary ? (
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{summary}</p>
      ) : null}
      {industries?.length ? (
        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.16em] text-accent">
          {industries.join(" · ")}
        </p>
      ) : null}
    </Link>
  );
}
