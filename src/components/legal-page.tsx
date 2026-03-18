export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-display text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-text-tertiary">Last updated: {updated}</p>
        <div className="prose-custom mt-10">{children}</div>
      </div>
    </section>
  );
}
