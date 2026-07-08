import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { SanityImage } from "@/components/ui/SanityImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { client } from "@/sanity/lib/client";
import { allAuthorsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Authors",
  description: "Author profiles and archives for Strategy Decode.",
};

type AuthorData = {
  name: string;
  slug: string;
  role?: string;
  shortBio?: string;
  portrait?: unknown;
};

export default async function AuthorsPage() {
  const authors = await client.fetch<AuthorData[]>(allAuthorsQuery);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="py-20 sm:py-28">
        <Container>
          <SectionHeading aside="Masthead" eyebrow="People" title="Authors." />
          <div className="mt-16 grid gap-8">
            {authors.map((author) => (
              <Link
                className="grid gap-5 border-t border-rule py-8 md:grid-cols-12"
                href={`/authors/${author.slug}`}
                key={author.slug}
              >
                <SanityImage className="size-24 md:col-span-2" value={author.portrait as never} />
                <div className="md:col-span-10">
                  <h2 className="font-serif text-5xl tracking-[-0.04em]">{author.name}</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-accent">
                    {author.role}
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                    {author.shortBio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
