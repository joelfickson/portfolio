export function monthYear(date?: string | null) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

export function readingMinutes(plain?: string | null) {
  if (!plain) return null;
  const words = plain.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

export function hostname(url?: string | null) {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
