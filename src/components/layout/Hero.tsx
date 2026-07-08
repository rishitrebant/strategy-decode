import { Container } from "@/components/ui/Container";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";

type HomePageHero = {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroIntroduction?: string;
  heroBadge?: string;
  heroTags?: string[];
};

export async function Hero() {
  const data = await client.fetch<HomePageHero | null>(homePageQuery);

  const eyebrow = data?.heroEyebrow ?? "Business strategy, decoded";
  const headline =
    data?.heroHeadline ??
    "How the world's most successful companies actually win.";
  const introduction =
    data?.heroIntroduction ??
    "Deep reporting and analysis on the choices behind competitive advantage.";
  const badge = data?.heroBadge ?? "Independent Publication";
  const tags = data?.heroTags?.length ? data.heroTags : ["Strategy", "Power", "Growth", "Psychology"];

  return (
    <section className="overflow-hidden border-b border-rule pb-8 pt-16 sm:pt-24 lg:min-h-[calc(100svh-4.75rem)] lg:pb-12 lg:pt-28">
      <Container className="flex min-h-[38rem] flex-col justify-between lg:min-h-[calc(100svh-12rem)]">
        <div className="grid grid-cols-4 gap-5 md:grid-cols-12">
          <p className="col-span-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent md:col-span-5">
            {eyebrow}
          </p>
          <p className="col-span-2 hidden text-right text-[0.68rem] uppercase leading-5 tracking-[0.16em] text-muted md:col-start-11 md:block">
            {badge}
          </p>
        </div>

        <h1 className="my-20 max-w-[83rem] font-serif text-[clamp(4rem,10.6vw,10rem)] font-medium leading-[0.79] tracking-[-0.067em] text-balance sm:my-24">
          {headline}
        </h1>

        <div className="grid grid-cols-4 items-end gap-5 border-t border-rule pt-5 md:grid-cols-12">
          <p className="col-span-4 max-w-xl text-lg leading-7 text-muted sm:text-xl md:col-span-6 md:col-start-7 lg:text-2xl lg:leading-8">
            {introduction}
          </p>
          <p className="col-span-2 mt-8 text-[0.68rem] uppercase leading-5 tracking-[0.16em] text-muted md:col-span-2 md:col-start-1 md:row-start-1 md:mt-0">
            {tags.join(" · ")}
          </p>
        </div>
      </Container>
    </section>
  );
}
