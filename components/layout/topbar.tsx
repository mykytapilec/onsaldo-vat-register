
export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-6">
      <div>
        <h1 className="text-sm font-semibold text-[var(--foreground)]">
          Rejestry i VAT
        </h1>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5">
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-[var(--success)]"
        />
        <span className="text-xs font-medium text-[var(--foreground-secondary)]">
          Tryb demonstracyjny
        </span>
      </div>
    </header>
  );
}
