export function formatReadTime(minutes: number | null | undefined): string {
  const value = Math.max(1, Math.round(minutes ?? 1));
  return `${value} min read`;
}

export function formatDate(iso: string | null | undefined): string {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(iso));
}

export function formatByline(
  authors: { name: string }[] | null | undefined
): string {
  const names = (authors ?? []).map((a) => a.name).filter(Boolean);
  if (names.length === 0) return "Strategy Decode";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}
