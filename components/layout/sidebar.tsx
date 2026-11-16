
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col border-r border-[var(--border)] bg-[var(--surface)]">
      <div className="flex h-16 items-center border-b border-[var(--border)] px-6">
        <span className="text-xl font-semibold tracking-tight">
          Onsaldo
        </span>
      </div>

      <nav className="flex-1 p-4" aria-label="Główna nawigacja">
        <Link
          href="/"
          aria-current="page"
          className="flex items-center rounded-[var(--radius-md)] bg-[var(--surface-secondary)] px-3 py-2.5 text-sm font-medium text-[var(--foreground)]"
        >
          Rejestry i VAT
        </Link>
      </nav>

      <div className="border-t border-[var(--border)] p-4">
        <div className="text-sm font-medium">Konto demonstracyjne</div>
        <div className="mt-1 text-xs text-[var(--foreground-secondary)]">
          Wersja demonstracyjna
        </div>
      </div>
    </aside>
  );
}
