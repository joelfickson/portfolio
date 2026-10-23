export function PageHeader({
  title,
  intro,
  children,
}: {
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="grid grid-cols-1 gap-x-12 pt-[88px] pb-14 max-md:pt-12 max-md:pb-9 md:grid-cols-[180px_minmax(0,640px)]">
      <div className="max-md:mb-6">{children}</div>
      <div>
        <h1 className="text-[42px] leading-[1.18] tracking-[-0.012em] nums max-md:text-[32px]">
          {title}
        </h1>
        {intro && (
          <p className="mt-[22px] text-xl leading-[1.55] text-mute max-md:text-lg">{intro}</p>
        )}
      </div>
    </header>
  );
}
