import Link from "next/link";

import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { EditorialArtwork } from "@/components/ui/EditorialArtwork";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedArticle() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading
          aside="Issue No. 001"
          eyebrow="Cover story"
          title="The strategy behind the spectacle."
        />

        <article className="mt-14 grid grid-cols-4 gap-5 md:mt-20 md:grid-cols-12">
          <Link
            aria-label="Read How Red Bull Built a Media Empire"
            className="group col-span-4 md:col-span-7"
            href="/articles/how-red-bull-built-a-media-empire"
          >
            <EditorialArtwork
              className="min-h-[25rem] transition-transform duration-200 group-hover:scale-[0.995] sm:min-h-[34rem] lg:min-h-[42rem]"
              variant="redbull"
            />
          </Link>

          <div className="col-span-4 flex flex-col border-t border-rule pt-5 md:col-span-5 md:col-start-8 md:border-t-0 md:border-l md:pl-8 md:pt-0 lg:pl-12">
            <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.17em]">
              <span className="text-accent">Marketing</span>
              <span className="text-muted">18 min read</span>
            </div>

            <h3 className="mt-12 font-serif text-[clamp(3.3rem,6.4vw,6.7rem)] font-medium leading-[0.86] tracking-[-0.055em] text-balance md:mt-auto">
              How Red Bull Built a Media Empire
            </h3>
            <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Red Bull does not market an energy drink. It manufactures culture,
              owns attention, and turns spectacle into a distribution advantage its
              competitors cannot buy.
            </p>

            <div className="mt-10 flex items-end justify-between border-t border-rule pt-5">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                By Strategy Decode
              </p>
              <Link
                className="group flex min-h-11 items-center gap-3 text-sm font-medium"
                href="/articles/how-red-bull-built-a-media-empire"
              >
                Read the decode
                <ArrowIcon className="size-5 transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
