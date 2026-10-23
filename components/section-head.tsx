import Link from "next/link";

export function SectionHead({
  title,
  href,
  linkLabel,
}: {
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="col-span-full mb-9 flex items-baseline justify-between font-ui text-[13px]">
      <h2 className="font-medium text-ink">{title}</h2>
      {href && linkLabel && (
        <Link href={href} className="text-accent hover:underline hover:underline-offset-4">
          {linkLabel} &rarr;
        </Link>
      )}
    </div>
  );
}
