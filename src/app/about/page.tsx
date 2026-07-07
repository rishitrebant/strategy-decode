import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description: "About Strategy Decode.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-4 gap-5 md:grid-cols-12">
            <div className="col-span-4 md:col-span-9">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                About
              </p>
              <h1 className="mt-8 font-serif text-[clamp(4rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.06em]">
                The place where ambitious people learn how great companies win.
              </h1>
            </div>
            <div className="col-span-4 mt-10 space-y-6 text-lg leading-8 text-muted md:col-span-7 md:col-start-6">
              <p>
                Strategy Decode is a premium digital publication focused on the
                choices behind competitive advantage: business models, marketing
                systems, founder decisions, leadership, growth, psychology, and
                the operating details that make companies endure.
              </p>
              <p>
                The editorial promise is simple: explain how great companies
                actually win without turning strategy into generic business advice.
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
