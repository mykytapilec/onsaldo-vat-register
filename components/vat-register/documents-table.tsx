
"use client";

import { useMemo, useState } from "react";
import { documents } from "./documents-data";
// import { documents } from "@/components/vat-register/documents-data";

type DocumentsTableProps = {
  searchQuery: string;
  year: string;
  month: string;
};

const pageSize = 10;

export function DocumentsTable({
  searchQuery,
  year,
  month,
}: DocumentsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDocuments = useMemo(() => {
    return documents.filter((document) => {
      const matchesSearch =
        !searchQuery ||
        `${document.contractor} ${document.number} ${document.ksef}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const documentDate = new Date(`${document.date}T00:00:00`);

      const matchesYear =
        !year ||
        year === "Wszystkie" ||
        documentDate.getFullYear().toString() === year;

      const matchesMonth =
        !month ||
        month === "Wszystkie" ||
        (documentDate.getMonth() + 1).toString().padStart(2, "0") === month;

      return matchesSearch && matchesYear && matchesMonth;
    });
  }, [searchQuery, year, month]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredDocuments.length / pageSize),
  );
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedDocuments = filteredDocuments.slice(
    (safeCurrentPage - 1) * pageSize,
    safeCurrentPage * pageSize,
  );

  return (
    <section className="mt-8">
      <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead className="bg-[var(--surface-muted)] text-[var(--text-secondary)]">
              <tr>
                <th className="px-4 py-3 font-medium">Kontrahent</th>
                <th className="px-4 py-3 font-medium">Data</th>
                <th className="px-4 py-3 font-medium">Numer dokumentu</th>
                <th className="px-4 py-3 font-medium">Status KSeF</th>
                <th className="px-4 py-3 font-medium">ID dokumentu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {paginatedDocuments.length > 0 ? (
                paginatedDocuments.map((document) => (
                  <tr
                    key={document.id}
                    className="text-[var(--text-primary)]"
                  >
                    <td className="whitespace-nowrap px-4 py-3">
                      {document.contractor}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {new Date(`${document.date}T00:00:00`).toLocaleDateString(
                        "pl-PL",
                      )}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {document.number}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {document.ksef}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {document.id}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-10 text-center text-[var(--text-secondary)]"
                  >
                    Brak dokumentów spełniających wybrane kryteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--border)] px-4 py-3 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            {filteredDocuments.length === 0
              ? "0"
              : `${(safeCurrentPage - 1) * pageSize + 1}-${Math.min(
                  safeCurrentPage * pageSize,
                  filteredDocuments.length,
                )}`}{" "}
            z {filteredDocuments.length} zapisów
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safeCurrentPage === 1}
              className="rounded-lg border border-[var(--border)] px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Poprzednia
            </button>
            <span>
              {safeCurrentPage} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={safeCurrentPage === totalPages}
              className="rounded-lg border border-[var(--border)] px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Następna
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
