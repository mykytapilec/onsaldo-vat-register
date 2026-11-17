
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
import {
  DemoStatesToolbar,
  type DemoState,
} from "@/components/vat-register/demo-states-toolbar";

export default function Home() {
  const [activeRegister, setActiveRegister] =
    useState<RegisterType>("sales");

  const [demoState, setDemoState] = useState<DemoState>("filled");

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
              <DemoStatesToolbar
                activeState={demoState}
                onStateChange={setDemoState}
              />
            </div>

            {demoState === "filled" ? (
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
                    operation={filters.operation}
                    jpk={filters.jpk}
                  />
                </div>
              </>
            ) : demoState === "empty" ? (
              <div className="mt-6 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Brak dokumentów
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Nie znaleziono dokumentów w wybranym rejestrze.
                </p>
              </div>
            ) : (
              <div
                role="alert"
                className="mt-6 rounded-[var(--radius-lg)] border border-red-300 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30"
              >
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">
                  Wystąpił błąd
                </h3>
                <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                  Nie udało się załadować danych rejestru. Spróbuj ponownie
                  później.
                </p>
              </div>
            )}
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
