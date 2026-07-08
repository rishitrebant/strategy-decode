import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { SanityImage } from "@/components/ui/SanityImage";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { allCompanySlugsQuery, companyBySlugQuery } from "@/sanity/lib/queries";

type CompanyPageProps = {
  params: Promise<{ slug: string }>;
};

type SeoData = {
  title?: string;
  description?: string;
  shareImage?: { alt?: string } & Record<string, unknown>;
  noindex?: boolean;
};

type CompanyData = {
  name: string;
  slug: string;
  logo?: unknown;
  summary?: string;
  website?: string;
  foundedYear?: number;
  headquarters?: string;
  industries?: string[];
  seo?: SeoData;
};

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(allCompanySlugsQuery);
  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = await client.fetch<CompanyData | null>(companyBySlugQuery, { slug });

  if (!company) return { title: "Company not found" };

  const title = company.seo?.title || company.name;
  const description = company.seo?.description || company.summary;

  return {
    title,
    description,
    alternates: { canonical: `/companies/${company.slug}` },
    robots: company.seo?.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      images: company.seo?.shareImage
        ? [{ url: urlFor(company.seo.shareImage as any).width(1200).height(630).url() }]
        : undefined,
    },
  };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params;
  const company = await client.fetch<CompanyData | null>(companyBySlugQuery, { slug });

  if (!company) notFound();

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-4 gap-5 md:grid-cols-12">
            <div className="col-span-4 md:col-span-3">
              <SanityImage
                className="min-h-32 max-w-[12rem] bg-transparent"
                sizes="200px"
                value={company.logo ? { image: company.logo, alt: company.name } : undefined}
              />
            </div>

            <div className="col-span-4 md:col-span-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                Company
              </p>
              <h1 className="mt-5 font-serif text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.85] tracking-[-0.06em]">
                {company.name}
              </h1>
              {company.summary ? (
                <p className="mt-6 max-w-3xl text-xl leading-8 text-muted">{company.summary}</p>
              ) : null}

              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-rule pt-8 sm:grid-cols-3">
                {company.website ? (
                  <div>
                    <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                      Website
                    </dt>
                    <dd className="mt-2 text-sm">
                      <a
                        className="text-accent hover:underline"
                        href={company.website}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {company.website.replace(/^https?:\/\//, "")}
                      </a>
                    </dd>
                  </div>
                ) : null}

                {company.foundedYear ? (
                  <div>
                    <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                      Founded
                    </dt>
                    <dd className="mt-2 text-sm">{company.foundedYear}</dd>
                  </div>
                ) : null}

                {company.headquarters ? (
                  <div>
                    <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                      Headquarters
                    </dt>
                    <dd className="mt-2 text-sm">{company.headquarters}</dd>
                  </div>
                ) : null}

                {company.industries?.length ? (
                  <div className="col-span-2 sm:col-span-3">
                    <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                      Industries
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2 text-sm">
                      {company.industries.map((industry) => (
                        <span
                          className="border border-rule px-3 py-1 text-xs uppercase tracking-[0.1em] text-muted"
                          key={industry}
                        >
                          {industry}
                        </span>
                      ))}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
