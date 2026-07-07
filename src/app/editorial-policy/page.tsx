import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "Strategy Decode editorial standards and corrections policy.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Standards
            </p>
            <h1 className="mt-8 font-serif text-[clamp(4rem,9vw,7rem)] font-medium leading-[0.84] tracking-[-0.06em]">
              Editorial policy.
            </h1>
            <div className="mt-12 space-y-8 text-lg leading-8 text-muted">
              <p>
                Strategy Decode publishes analysis designed to explain how companies
                win. We separate editorial judgment from sponsorship, cite meaningful
                sources where appropriate, and avoid presenting speculation as fact.
              </p>
              <p>
                Material corrections should update the article, record the correction
                when reader trust requires it, and use the article’s editorial update
                field once Sanity content goes live.
              </p>
              <p>
                Sponsored work must be clearly disclosed. Links that exist because of
                a commercial relationship should be marked explicitly in the CMS.
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
