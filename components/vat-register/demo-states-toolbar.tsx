
"use client";

export type DemoState = "filled" | "empty" | "error";

type DemoStatesToolbarProps = {
  activeState: DemoState;
  onStateChange: (state: DemoState) => void;
};

const states: { value: DemoState; label: string }[] = [
  { value: "filled", label: "Filled" },
  { value: "empty", label: "Empty" },
  { value: "error", label: "Error" },
];

export function DemoStatesToolbar({
  activeState,
  onStateChange,
}: DemoStatesToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3">
      <span className="mr-2 text-sm font-medium text-[var(--text-secondary)]">
        Demo state:
      </span>

      {states.map((state) => {
        const isActive = activeState === state.value;

        return (
          <button
            key={state.value}
            type="button"
            onClick={() => onStateChange(state.value)}
            aria-pressed={isActive}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-[var(--primary)] text-white"
                : "bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            {state.label}
          </button>
        );
      })}
    </div>
  );
}
