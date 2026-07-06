type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  aside?: string;
};

export function SectionHeading({ eyebrow, title, aside }: SectionHeadingProps) {
  return (
    <div className="grid grid-cols-4 items-end gap-5 border-t border-rule pt-4 md:grid-cols-12">
      <p className="col-span-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent md:col-span-3">
        {eyebrow}
      </p>
      <h2 className="col-span-4 mt-8 font-serif text-[clamp(2.6rem,5.2vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.045em] text-balance md:col-span-7 md:mt-0">
        {title}
      </h2>
      {aside ? (
        <p className="col-span-2 hidden text-right text-xs uppercase tracking-[0.16em] text-muted md:block">
          {aside}
        </p>
      ) : null}
    </div>
  );
}
