import Link from "next/link";

import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Articles", href: "/articles" },
      { label: "Categories", href: "/categories" },
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
] as const;

export function Footer() {
  return (
    <footer className="border-t border-rule bg-canvas pb-8 pt-16 sm:pt-24">
      <Container>
        <div className="grid grid-cols-4 gap-x-5 gap-y-16 md:grid-cols-12">
          <div className="col-span-4 md:col-span-6">
            <Link
              className="group inline-flex items-center gap-4 font-serif text-[clamp(2.8rem,5vw,5rem)] leading-none tracking-[-0.045em]"
              href="/"
            >
              Strategy Decode
              <ArrowIcon className="size-8 -rotate-45 transition-transform duration-150 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
            <p className="mt-6 max-w-md text-base leading-7 text-muted">
              Decoding the strategies behind the world&apos;s most successful companies.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div className="col-span-2 md:col-span-2" key={group.title}>
              <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                {group.title}
              </p>
              <ul className="space-y-3 text-sm text-muted">
                {group.links.map((link) => (
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
          <p>© 2026 Strategy Decode</p>
          <p>Clarity over noise</p>
        </div>
      </Container>
    </footer>
  );
}
