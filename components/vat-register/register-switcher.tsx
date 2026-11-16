
"use client";

import { useState } from "react";

type RegisterType = "sales" | "purchases";

export function RegisterSwitcher() {
  const [activeRegister, setActiveRegister] =
    useState<RegisterType>("sales");

  return (
    <div
      role="group"
      aria-label="Wybór rejestru VAT"
      className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1"
    >
      <button
        type="button"
        aria-pressed={activeRegister === "sales"}
        onClick={() => setActiveRegister("sales")}
        className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
          activeRegister === "sales"
            ? "bg-[var(--primary)] text-white shadow-sm"
            : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
        }`}
      >
        Rejestr sprzedaży
      </button>

      <button
        type="button"
        aria-pressed={activeRegister === "purchases"}
        onClick={() => setActiveRegister("purchases")}
        className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
          activeRegister === "purchases"
            ? "bg-[var(--primary)] text-white shadow-sm"
            : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
        }`}
      >
        Rejestr zakupów
      </button>
    </div>
  );
}
