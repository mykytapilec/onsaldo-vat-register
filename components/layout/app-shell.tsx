
import type { ReactNode } from "react";

import { MobileNavigation } from "./mobile-navigation";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-4 pb-24 md:p-6">
          {children}
        </main>

        <MobileNavigation />
      </div>
    </div>
  );
}
