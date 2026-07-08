import type { Metadata } from "next";

import { CompanyCard, type CompanyCardData } from "@/components/cards/CompanyCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { client } from "@/sanity/lib/client";
import { allCompaniesQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Companies",
  description: "Companies decoded by Strategy Decode.",
};

export default async function CompaniesPage() {
  const companies = await client.fetch<CompanyCardData[]>(allCompaniesQuery);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            aside={`${companies.length} companies`}
            eyebrow="Subjects"
            title="Companies."
          />

          {companies.length === 0 ? (
            <p className="mt-16 text-muted">No companies published yet.</p>
          ) : (
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {companies.map((company) => (
                <CompanyCard {...company} key={company.slug} />
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
