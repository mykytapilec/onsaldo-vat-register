
"use client";

import { documents } from "./documents-data";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export type RegisterFilterValues = {
  search: string;
  year: string;
  month: string;
  operation: string;
  jpk: string;
};

type RegisterFiltersProps = {
  filters: RegisterFilterValues;
  onFiltersChange: (filters: RegisterFilterValues) => void;
};

const monthNames = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listopad",
  "grudzień",
];

const availableYears = Array.from(
  new Set(documents.map((document) => document.date.slice(0, 4))),
).sort((a, b) => Number(b) - Number(a));

const availableMonths = Array.from(
  new Set(documents.map((document) => document.date.slice(5, 7))),
).sort((a, b) => Number(a) - Number(b));

export function RegisterFilters({
  filters,
  onFiltersChange,
}: RegisterFiltersProps) {
  function updateFilter<K extends keyof RegisterFilterValues>(
    key: K,
    value: RegisterFilterValues[K],
  ) {
    onFiltersChange({ ...filters, [key]: value });
  }

  const selectClassName =
    "w-full appearance-none rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] py-2 pl-3 pr-9 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]";

  const chevronClassName =
    "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground-secondary)]";

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <label
            htmlFor="register-search"
            className="mb-2 block text-sm font-medium text-[var(--foreground)]"
          >
            Szukaj
          </label>
          <input
            id="register-search"
            type="search"
            value={filters.search}
            onChange={(event) => updateFilter("search", event.target.value)}
            placeholder="Szukaj dokumentu..."
            className="w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--foreground-secondary)] focus:border-[var(--accent)]"
          />
        </div>

        <div>
          <label
            htmlFor="register-year"
            className="mb-2 block text-sm font-medium text-[var(--foreground)]"
          >
            Rok
          </label>
          <div className="relative">
            <select
              id="register-year"
              value={filters.year}
              onChange={(event) => updateFilter("year", event.target.value)}
              className={selectClassName}
            >
              <option value="">Wybierz rok</option>
              <option value="Wszystkie">Wszystkie</option>
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <ChevronDown className={chevronClassName} />
          </div>
        </div>

        <div>
          <label
            htmlFor="register-month"
            className="mb-2 block text-sm font-medium text-[var(--foreground)]"
          >
            Miesiąc
          </label>
          <div className="relative">
            <select
              id="register-month"
              value={filters.month}
              onChange={(event) => updateFilter("month", event.target.value)}
              className={selectClassName}
            >
              <option value="">Wybierz miesiąc</option>
              <option value="Wszystkie">Wszystkie</option>
              {availableMonths.map((month) => (
                <option key={month} value={month}>
                  {monthNames[Number(month) - 1]}
                </option>
              ))}
            </select>
            <ChevronDown className={chevronClassName} />
          </div>
        </div>

        <div>
          <label
            htmlFor="register-operation"
            className="mb-2 block text-sm font-medium text-[var(--foreground)]"
          >
            Rodzaj operacji
          </label>
          <div className="relative">
            <select
              id="register-operation"
              value={filters.operation}
              onChange={(event) => updateFilter("operation", event.target.value)}
              className={selectClassName}
            >
              <option value="Wszystkie">Wszystkie</option>
            </select>
            <ChevronDown className={chevronClassName} />
          </div>
        </div>

        <div>
          <label
            htmlFor="register-jpk"
            className="mb-2 block text-sm font-medium text-[var(--foreground)]"
          >
            Kod JPK V7
          </label>
          <div className="relative">
            <select
              id="register-jpk"
              value={filters.jpk}
              onChange={(event) => updateFilter("jpk", event.target.value)}
              className={selectClassName}
            >
              <option value="Wszystkie">Wszystkie</option>
            </select>
            <ChevronDown className={chevronClassName} />
          </div>
        </div>
      </div>
    </div>
  );
}
