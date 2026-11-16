
"use client";

import { useEffect } from "react";
import type { Document } from "./documents-data";

type DocumentDetailsModalProps = {
  selectedDocument: Document | null;
  onClose: () => void;
};

export function DocumentDetailsModal({
  selectedDocument,
  onClose,
}: DocumentDetailsModalProps) {
  useEffect(() => {
    if (!selectedDocument) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDocument, onClose]);

  if (!selectedDocument) return null;

  const fields = [
    {
      label: "Kontrahent",
      value: selectedDocument.contractor,
    },
    {
      label: "Data",
      value: new Date(
        `${selectedDocument.date}T00:00:00`,
      ).toLocaleDateString("pl-PL"),
    },
    {
      label: "Numer dokumentu",
      value: selectedDocument.number,
    },
    {
      label: "Status KSeF",
      value: selectedDocument.ksef,
    },
    {
      label: "ID dokumentu",
      value: selectedDocument.id,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="document-details-title"
        className="w-full max-w-lg rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl sm:p-6"
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2
            id="document-details-title"
            className="text-lg font-semibold text-[var(--text-primary)]"
          >
            Szczegóły dokumentu
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Zamknij"
            className="rounded-lg px-3 py-1.5 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--surface-muted)]"
          >
            Zamknij
          </button>
        </div>

        <dl className="space-y-4">
          {fields.map((field) => (
            <div
              key={field.label}
              className="flex flex-col gap-1 border-b border-[var(--border)] pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            >
              <dt className="text-sm text-[var(--text-secondary)]">
                {field.label}
              </dt>

              <dd className="break-words text-sm font-medium text-[var(--text-primary)] sm:max-w-[65%] sm:text-right">
                {field.label === "Status KSeF" ? (
                  <span className="inline-flex rounded-full bg-[var(--surface-muted)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]">
                    {field.value}
                  </span>
                ) : (
                  field.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
