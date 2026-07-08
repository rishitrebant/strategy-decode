import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

type EditorialImageValue = {
  image: unknown;
  alt: string;
  caption?: string;
  credit?: string;
} | null | undefined;

type SanityImageProps = {
  value: EditorialImageValue;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function SanityImage({
  value,
  className = "",
  sizes = "100vw",
  priority = false,
}: SanityImageProps) {
  if (!value?.image) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const url = urlFor(value.image as any).width(1600).quality(80).auto("format").url();

  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <Image
        alt={value.alt || ""}
        className="object-cover"
        fill
        priority={priority}
        sizes={sizes}
        src={url}
      />
      {value.caption ? (
        <span className="sr-only">{value.caption}</span>
      ) : null}
    </div>
  );
}
