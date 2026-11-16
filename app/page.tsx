
"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import {
  RegisterSwitcher,
  type RegisterType,
} from "@/components/vat-register/register-switcher";
import {
  RegisterFilters,
  type RegisterFilterValues,
} from "@/components/vat-register/register-filters";
import { SummaryCards } from "@/components/vat-register/summary-cards";
import { VatBreakdown } from "@/components/vat-register/vat-breakdown";
import { DocumentsTable } from "@/components/vat-register/documents-table";

export default function Home() {
  const [activeRegister, setActiveRegister] =
    useState<RegisterType>("sales");

  const [filters, setFilters] = useState<RegisterFilterValues>({
    search: "",
    year: "",
    month: "",
    operation: "Wszystkie",
    jpk: "Wszystkie",
  });

  return (
    <AppShell>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight">
          Rejestry VAT
        </h2>

        <p className="mt-2 text-sm text-[var(--foreground-secondary)]">
          Zarządzaj rejestrami sprzedaży i zakupów.
        </p>

        <div className="mt-6">
          <RegisterSwitcher
            activeRegister={activeRegister}
            onRegisterChange={setActiveRegister}
          />
        </div>

        {activeRegister === "sales" ? (
          <>
            <div className="mt-6">
              <RegisterFilters
                filters={filters}
                onFiltersChange={setFilters}
              />
            </div>

            <div className="mt-6">
              <SummaryCards />
            </div>

            <div className="mt-6">
              <VatBreakdown />
            </div>

            <div className="mt-8">
              <DocumentsTable
                searchQuery={filters.search}
                year={filters.year}
                month={filters.month}
              />
            </div>
          </>
        ) : (
          <div className="mt-6 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Rejestr zakupów
            </h3>
            <p className="mt-2 text-sm text-[var(--foreground-secondary)]">
              Dane demonstracyjne rejestru zakupów nie zostały jeszcze dodane.
            </p>
          </div>
        )}
      </section>
    </AppShell>
  );
}
