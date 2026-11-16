
import { RegisterSwitcher } from "@/components/vat-register/register-switcher";
import { AppShell } from "@/components/layout/app-shell";

export default function Home() {
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
          <RegisterSwitcher />
        </div>
      </section>
    </AppShell>
  );
}
