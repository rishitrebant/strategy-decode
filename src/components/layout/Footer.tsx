import Link from "next/link";

import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

type FooterLink = { label: string; href: string };
type FooterGroup = { title?: string; links?: FooterLink[] };
type SiteSettings = {
  title?: string;
  footerDescription?: string;
  footerTagline?: string;
  footerLinkGroups?: FooterGroup[];
};

const fallbackGroups: FooterGroup[] = [
  {
    title: "Explore",
    links: [
      { label: "Articles", href: "/articles" },
      { label: "Categories", href: "/categories" },
      { label: "Companies", href: "/companies" },
      { label: "Authors", href: "/authors" },
    ],
  },
  {
    title: "Publication",
    links: [
      { label: "About", href: "/about" },
      { label: "Editorial policy", href: "/editorial-policy" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
];

export async function Footer() {
  const settings = await client.fetch<SiteSettings | null>(siteSettingsQuery);
  const groups = settings?.footerLinkGroups?.length ? settings.footerLinkGroups : fallbackGroups;
  const siteTitle = settings?.title ?? "Strategy Decode";
  const description =
    settings?.footerDescription ??
    "Decoding the strategies behind the world's most successful companies.";
  const tagline = settings?.footerTagline ?? "Clarity over noise";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-canvas pb-8 pt-16 sm:pt-24">
      <Container>
        <div className="grid grid-cols-4 gap-x-5 gap-y-16 md:grid-cols-12">
          <div className="col-span-4 md:col-span-6">
            <Link
              className="group inline-flex items-center gap-4 font-serif text-[clamp(2.8rem,5vw,5rem)] leading-none tracking-[-0.045em]"
              href="/"
            >
              {siteTitle}
              <ArrowIcon className="size-8 -rotate-45 transition-transform duration-150 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
            <p className="mt-6 max-w-md text-base leading-7 text-muted">{description}</p>
          </div>

          {groups.map((group) => (
            <div className="col-span-2 md:col-span-2" key={group.title}>
              <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                {group.title}
              </p>
              <ul className="space-y-3 text-sm text-muted">
                {(group.links ?? []).map((link) => (
                  <li key={link.href}>
                    <Link className="hover:text-ink" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-rule pt-5 text-[0.65rem] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteTitle}</p>
          <p>{tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
