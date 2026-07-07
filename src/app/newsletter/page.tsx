import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Newsletter } from "@/components/newsletter/Newsletter";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "One great strategy, decoded each week.",
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="py-20 sm:py-28">
        <Container>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Newsletter
          </p>
          <h1 className="mt-8 max-w-5xl font-serif text-[clamp(4rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.06em]">
            One great strategy, decoded each week.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-muted">
            The MVP keeps newsletter capture visually ready while Buttondown integration
            remains a deliberate launch-hardening step.
          </p>
        </Container>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
