
export function VatBreakdown() {
  return (
    <section
      aria-labelledby="vat-breakdown-title"
      className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5"
    >
      <div className="flex items-center justify-between gap-4">
        <h3
          id="vat-breakdown-title"
          className="text-base font-semibold text-[var(--foreground)]"
        >
          Podział VAT
        </h3>

        <span className="text-xs font-medium text-[var(--foreground-secondary)]">
          Stawka VAT
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-4">
        <div>
          <p className="text-sm font-medium text-[var(--foreground)]">
            23%
          </p>
          <p className="mt-1 text-xs text-[var(--foreground-secondary)]">
            Kwota VAT
          </p>
        </div>

        <p className="text-lg font-semibold tabular-nums text-[var(--foreground)]">
          2 323,00 zł
        </p>
      </div>
    </section>
  );
}
