"use client";

import { useState } from "react";
import { useAdminStore } from "@/store/adminStore";
import { formatChf } from "@/lib/utils";
import { Trash2 } from "lucide-react";

type Tab = "bookings" | "valuations" | "carFinder";

export default function LeadsPage() {
  const [tab, setTab] = useState<Tab>("bookings");

  const bookings = useAdminStore((s) => s.bookings);
  const valuations = useAdminStore((s) => s.valuations);
  const carFinder = useAdminStore((s) => s.carFinder);

  const updateBookingStatus = useAdminStore((s) => s.updateBookingStatus);
  const updateValuationStatus = useAdminStore((s) => s.updateValuationStatus);
  const updateCarFinderStatus = useAdminStore((s) => s.updateCarFinderStatus);

  const deleteBooking = useAdminStore((s) => s.deleteBooking);
  const deleteValuation = useAdminStore((s) => s.deleteValuation);
  const deleteCarFinder = useAdminStore((s) => s.deleteCarFinder);

  const pending =
    bookings.filter((b) => b.status === "PENDING").length +
    valuations.filter((v) => v.status === "NEW").length +
    carFinder.filter((c) => c.status === "NEW").length;

  const TABS = [
    { id: "bookings" as Tab, label: "Prenotazioni", count: bookings.length },
    { id: "valuations" as Tab, label: "Valutazioni", count: valuations.length },
    { id: "carFinder" as Tab, label: "Car Finder", count: carFinder.length },
  ];

  return (
    <main className="p-8 md:p-10">
      <header className="mb-8">
        <p className="text-[10px] uppercase tracking-[0.4em] text-titanium/40">
          Lead
        </p>
        <h1 className="font-display text-4xl font-light tracking-tight mt-2">
          Gestione lead{" "}
          {pending > 0 && (
            <span className="text-crimson text-2xl ml-2">({pending} nuovi)</span>
          )}
        </h1>
      </header>

      <div className="flex gap-1 border-b border-titanium/10 mb-8">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-5 py-3 text-[11px] uppercase tracking-[0.25em] transition-colors border-b-2 -mb-px ${
              tab === t.id
                ? "text-titanium border-crimson"
                : "text-titanium/40 border-transparent hover:text-titanium/70"
            }`}
          >
            {t.label} ({t.count})
          </button>
        ))}
      </div>

      {tab === "bookings" && (
        <Table
          headers={["Cliente", "Tipo", "Veicolo", "Data", "Stato", ""]}
          rows={bookings.map((b) => [
            <div key="c">
              <p className="text-sm">{b.fullName}</p>
              <p className="text-[11px] text-titanium/40">{b.phone}</p>
            </div>,
            <span key="t" className="text-[10px] uppercase tracking-[0.2em]">
              {b.appointmentType.replace(/_/g, " ")}
            </span>,
            <span key="v" className="text-xs">
              {b.vehicleModel ?? "—"}
            </span>,
            <span key="d" className="text-xs font-mono tabular-nums">
              {b.preferredDate} {b.preferredTime}
            </span>,
            <StatusSelect
              key="s"
              value={b.status}
              options={["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"]}
              onChange={(v) =>
                updateBookingStatus(b.id, v as typeof b.status)
              }
            />,
            <DeleteBtn
              key="x"
              onClick={() => {
                if (confirm("Eliminare questo lead?")) deleteBooking(b.id);
              }}
            />,
          ])}
        />
      )}

      {tab === "valuations" && (
        <Table
          headers={["Cliente", "Auto", "Anno / KM", "Prezzo des.", "Stato", ""]}
          rows={valuations.map((v) => [
            <div key="c">
              <p className="text-sm">{v.fullName}</p>
              <p className="text-[11px] text-titanium/40">{v.phone}</p>
            </div>,
            <span key="a" className="text-xs">
              {v.brand} {v.model}
            </span>,
            <span key="y" className="text-xs font-mono tabular-nums">
              {v.year} · {v.mileage.toLocaleString("it-CH")}
            </span>,
            <span key="p" className="text-xs font-mono tabular-nums">
              {v.desiredPriceChf ? formatChf(v.desiredPriceChf) : "—"}
            </span>,
            <StatusSelect
              key="s"
              value={v.status}
              options={["NEW", "IN_REVIEW", "OFFER_SENT", "ACCEPTED", "DECLINED"]}
              onChange={(val) => updateValuationStatus(v.id, val as typeof v.status)}
            />,
            <DeleteBtn
              key="x"
              onClick={() => {
                if (confirm("Eliminare questa valutazione?")) deleteValuation(v.id);
              }}
            />,
          ])}
        />
      )}

      {tab === "carFinder" && (
        <Table
          headers={["Cliente", "Ricerca", "Anni", "Budget", "Stato", ""]}
          rows={carFinder.map((c) => [
            <div key="c">
              <p className="text-sm">{c.fullName}</p>
              <p className="text-[11px] text-titanium/40">{c.phone}</p>
            </div>,
            <span key="r" className="text-xs">
              {c.brand} {c.model ?? ""}
            </span>,
            <span key="y" className="text-xs font-mono tabular-nums">
              {c.yearFrom ?? "—"} – {c.yearTo ?? "—"}
            </span>,
            <span key="b" className="text-xs font-mono tabular-nums text-gold">
              {formatChf(c.budgetMaxChf)}
            </span>,
            <StatusSelect
              key="s"
              value={c.status}
              options={["NEW", "SEARCHING", "FOUND", "IMPORTED", "CANCELLED"]}
              onChange={(val) => updateCarFinderStatus(c.id, val as typeof c.status)}
            />,
            <DeleteBtn
              key="x"
              onClick={() => {
                if (confirm("Eliminare questa richiesta?")) deleteCarFinder(c.id);
              }}
            />,
          ])}
        />
      )}
    </main>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <div className="border border-titanium/10 bg-graphite overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-[10px] uppercase tracking-[0.3em] text-titanium/40 border-b border-titanium/10">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-5 py-4 font-normal">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td
                colSpan={headers.length}
                className="px-5 py-16 text-center text-titanium/40 text-sm"
              >
                Nessun lead in questa categoria.
              </td>
            </tr>
          )}
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-titanium/5 hover:bg-white/[0.02] transition-colors"
            >
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-4 align-middle">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusSelect({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-noir border border-titanium/15 text-titanium text-[10px] uppercase tracking-[0.15em] px-2 py-1.5 outline-none focus:border-crimson cursor-pointer"
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function DeleteBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="p-1.5 text-titanium/40 hover:text-crimson transition-colors"
      aria-label="Elimina"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  );
}