import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

type NavItem = { label: string; href: string };
type SiteSettings = { title?: string; navigation?: NavItem[] };

const fallbackNav: NavItem[] = [
  { label: "Articles", href: "/articles" },
  { label: "Categories", href: "/categories" },
  { label: "Authors", href: "/authors" },
];

export async function Navbar() {
  const settings = await client.fetch<SiteSettings | null>(siteSettingsQuery);
  const navigation = settings?.navigation?.length ? settings.navigation : fallbackNav;
  const siteTitle = settings?.title ?? "Strategy Decode";

  return (
    <header className="relative z-20 border-b border-rule bg-canvas">
      <Container className="flex h-[4.75rem] items-center justify-between">
        <Link
          className="inline-flex min-h-11 items-center gap-3 text-sm font-bold uppercase tracking-[0.17em]"
          href="/"
        >
          <span aria-hidden="true" className="size-2 bg-accent" />
          {siteTitle}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <Link
              className="flex min-h-11 items-center text-sm text-muted transition-colors duration-150 hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            aria-label="Search"
            className="flex size-11 items-center justify-center border border-rule text-muted transition-colors duration-150 hover:border-muted hover:text-ink"
            href="/search"
          >
            <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <details className="mobile-menu relative">
            <summary
              aria-label="Toggle navigation"
              className="flex size-11 cursor-pointer flex-col items-center justify-center gap-1.5 border border-rule"
            >
              <span className="mobile-menu__line block h-px w-4 bg-ink transition-transform" />
              <span className="mobile-menu__line block h-px w-4 bg-ink transition-transform" />
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 top-[calc(100%+0.75rem)] w-56 border border-rule bg-surface p-3"
            >
              {[...navigation, { label: "Search", href: "/search" }].map((item) => (
                <Link
                  className="flex min-h-11 items-center border-b border-rule px-3 text-sm text-muted last:border-0 hover:text-ink"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
