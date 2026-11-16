
"use client";

export type RegisterType = "sales" | "purchases";

type RegisterSwitcherProps = {
  activeRegister: RegisterType;
  onRegisterChange: (register: RegisterType) => void;
};

export function RegisterSwitcher({
  activeRegister,
  onRegisterChange,
}: RegisterSwitcherProps) {
  return (
    <div
      role="group"
      aria-label="Wybór rejestru VAT"
      className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1"
    >
      <button
        type="button"
        aria-pressed={activeRegister === "sales"}
        onClick={() => onRegisterChange("sales")}
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
        onClick={() => onRegisterChange("purchases")}
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
