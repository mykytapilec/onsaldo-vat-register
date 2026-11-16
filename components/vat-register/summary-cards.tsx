
const summaryItems = [
  {
    label: "Netto",
    value: "9 700,00 zł",
  },
  {
    label: "VAT",
    value: "2 323,00 zł",
  },
  {
    label: "Brutto",
    value: "12 023,00 zł",
  },
];

export function SummaryCards() {
  return (
    <section
      aria-label="Podsumowanie finansowe"
      className="grid grid-cols-1 gap-4 sm:grid-cols-3"
    >
      {summaryItems.map((item) => (
        <article
          key={item.label}
          className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5"
        >
          <p className="text-sm font-medium text-[var(--foreground-secondary)]">
            {item.label}
          </p>

          <p className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {item.value}
          </p>
        </article>
      ))}
    </section>
  );
}
