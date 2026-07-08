import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { SanityImage } from "@/components/ui/SanityImage";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-lg leading-8 text-ink/90 sm:text-xl sm:leading-9">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em]">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent pl-6 font-serif text-2xl italic leading-snug">
        {children}
      </blockquote>
    ),
  },
  types: {
    editorialImage: ({ value }) => (
      <SanityImage className="my-10 min-h-[20rem]" value={value} />
    ),
    pullQuote: ({ value }) => (
      <blockquote className="my-10 border-l-2 border-accent pl-6 font-serif text-3xl italic leading-snug">
        {value?.quote}
        {value?.attribution ? (
          <cite className="mt-3 block text-sm not-italic text-muted">
            — {value.attribution}
          </cite>
        ) : null}
      </blockquote>
    ),
    callout: ({ value }) => (
      <div className="my-10 border border-rule bg-surface p-6 text-base leading-7">
        {value?.text}
      </div>
    ),
    codeBlock: ({ value }) => (
      <pre className="my-10 overflow-x-auto bg-ink p-6 text-sm text-canvas">
        <code>{value?.code}</code>
      </pre>
    ),
  },
};

export function ArticleBody({ value }: { value: unknown }) {
  return (
    <div className="space-y-8">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <PortableText components={components} value={value as any} />
    </div>
  );
}
