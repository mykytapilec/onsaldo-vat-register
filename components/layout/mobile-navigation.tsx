
import Link from "next/link";

export function MobileNavigation() {
  return (
    <nav
      aria-label="Nawigacja mobilna"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[var(--surface)] pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="mx-auto flex min-h-16 max-w-sm items-center justify-around">
        <Link
          href="/"
          aria-current="page"
          className="flex min-h-16 w-full flex-col items-center justify-center gap-1 px-4 py-2 text-xs font-medium text-[var(--primary)]"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h8" />
          </svg>

          <span>Rejestry i VAT</span>
        </Link>
      </div>
    </nav>
  );
}
