const artwork = {
  redbull: { kicker: "Media as moat", index: "Cover 001", word: "Velocity" },
  nike: { kicker: "Brand strategy", index: "01", word: "Identity" },
  netflix: { kicker: "Growth loops", index: "02", word: "Flywheel" },
  costco: { kicker: "Business model", index: "03", word: "Loyalty" },
  ikea: { kicker: "Psychology", index: "04", word: "The maze" },
  apple: { kicker: "Pricing power", index: "05", word: "Control" },
  starbucks: { kicker: "Experience", index: "06", word: "Third place" },
} as const;

export type ArtworkVariant = keyof typeof artwork;

type EditorialArtworkProps = {
  variant: ArtworkVariant;
  className?: string;
};

export function EditorialArtwork({
  variant,
  className = "",
}: EditorialArtworkProps) {
  const item = artwork[variant];

  return (
    <div
      aria-label={`${item.word} editorial artwork`}
      className={`editorial-art editorial-art--${variant} ${className}`}
      role="img"
    >
      <span className="editorial-art__kicker">{item.kicker}</span>
      <span className="editorial-art__index">{item.index}</span>
      <span className="editorial-art__word">{item.word}</span>
    </div>
  );
}
