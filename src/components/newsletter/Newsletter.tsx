import { Container } from "@/components/ui/Container";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";

type HomePageData = {
  newsletterHeading?: string;
  newsletterCopy?: string;
};

export async function Newsletter() {
  const data = await client.fetch<HomePageData | null>(homePageQuery);
  const heading = data?.newsletterHeading ?? "One great strategy, decoded each week.";
  const copy =
    data?.newsletterCopy ??
    "Original analysis for founders, operators, investors, and anyone curious about how durable advantage is actually built.";

  return (
    <section className="bg-accent py-16 text-[#0a0a0a] sm:py-20" id="newsletter">
      <Container>
        <div className="grid grid-cols-4 gap-5 md:grid-cols-12">
          <p className="col-span-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] md:col-span-3">
            The Strategy Decode letter
          </p>
          <div className="col-span-4 mt-12 md:col-span-7 md:col-start-6 md:mt-0">
            <h2 className="max-w-4xl font-serif text-[clamp(3.5rem,7vw,7.5rem)] font-medium leading-[0.83] tracking-[-0.06em] text-balance">
              {heading}
            </h2>
            <div className="mt-12 flex flex-col gap-5 border-t border-black/30 pt-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-lg text-base leading-7 text-black/70">{copy}</p>
              <p className="shrink-0 border border-black px-5 py-3 text-xs font-bold uppercase tracking-[0.18em]">
                Launching soon
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
