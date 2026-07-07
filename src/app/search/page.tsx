import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { articles, getArticleCategory } from "@/lib/fixtures";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export const metadata: Metadata = {
  title: "Search",
  description: "Search Strategy Decode articles.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const results =
    query.length < 2
      ? []
      : articles.filter((article) => {
          const category = getArticleCategory(article)?.name ?? "";
          return [
            article.title,
            article.dek,
            article.excerpt,
            category,
            ...article.tags,
          ]
            .join(" ")
            .toLowerCase()
            .includes(query);
        });

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-4 gap-5 md:grid-cols-12">
            <div className="col-span-4 md:col-span-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                Search
              </p>
              <h1 className="mt-8 font-serif text-[clamp(4rem,9vw,8rem)] font-medium leading-[0.8] tracking-[-0.06em]">
                Find a decode.
              </h1>
            </div>
          </div>

          <form className="mt-14 flex max-w-3xl flex-col gap-4 border-t border-rule pt-6 sm:flex-row">
            <label className="sr-only" htmlFor="q">
              Search articles
            </label>
            <input
              className="min-h-14 flex-1 border border-rule bg-surface px-4 text-lg text-ink placeholder:text-muted"
              defaultValue={q}
              id="q"
              minLength={2}
              name="q"
              placeholder="Search titles, tags, categories…"
              type="search"
            />
            <button
              className="min-h-14 border border-accent bg-accent px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#0A0A0A]"
              type="submit"
            >
              Search
            </button>
          </form>

          <section className="mt-16 max-w-4xl">
            {query.length === 0 && (
              <p className="text-muted">Enter at least two characters to search.</p>
            )}
            {query.length === 1 && (
              <p className="text-muted">Search terms need at least two characters.</p>
            )}
            {query.length >= 2 && results.length === 0 && (
              <p className="text-muted">No results for “{q}”.</p>
            )}
            {results.length > 0 && (
              <div className="space-y-8">
                <p className="text-sm uppercase tracking-[0.16em] text-muted">
                  {results.length} result{results.length === 1 ? "" : "s"} for “{q}”
                </p>
                {results.map((article) => (
                  <Link
                    className="block border-t border-rule pt-6"
                    href={`/articles/${article.slug}`}
                    key={article.slug}
                  >
                    <span className="text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                      {getArticleCategory(article)?.name}
                    </span>
                    <h2 className="mt-3 font-serif text-5xl leading-none tracking-[-0.04em]">
                      {article.title}
                    </h2>
                    <p className="mt-4 max-w-2xl leading-7 text-muted">
                      {article.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
