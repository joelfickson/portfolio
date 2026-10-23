import { slugify } from "./format";

export type Citation = { n: number; href: string; label: string };

export function collectCitations(body: any[] = []) {
  const citations = new Map<string, Citation>();
  for (const block of body) {
    if (block._type !== "block") continue;
    const links = new Map<string, string>(
      (block.markDefs ?? [])
        .filter((d: any) => d._type === "link" && /^https?:\/\//.test(d.href ?? ""))
        .map((d: any) => [d._key, d.href]),
    );
    for (const span of block.children ?? []) {
      for (const mark of span.marks ?? []) {
        const href = links.get(mark);
        if (!href) continue;
        const existing = citations.get(mark);
        if (existing) existing.label += span.text ?? "";
        else citations.set(mark, { n: citations.size + 1, href, label: span.text ?? "" });
      }
    }
  }
  return citations;
}

export function blockText(block: any) {
  return (block.children ?? []).map((c: any) => c.text ?? "").join("");
}

export function collectHeadings(body: any[] = []) {
  return body
    .filter((b) => b._type === "block" && b.style === "h2")
    .map((b) => {
      const text = blockText(b);
      return { id: slugify(text), text };
    });
}
