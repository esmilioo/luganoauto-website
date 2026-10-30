"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAdminStore } from "@/store/adminStore";
import { formatChf } from "@/lib/utils";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function VehiclesAdminPage() {
  const vehicles = useAdminStore((s) => s.vehicles);
  const deleteVehicle = useAdminStore((s) => s.deleteVehicle);
  const [query, setQuery] = useState("");

  const filtered = vehicles.filter((v) =>
    `${v.brand} ${v.model} ${v.variant}`.toLowerCase().includes(query.toLowerCase())
  );

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Eliminare "${name}" dall'inventario?`)) {
      deleteVehicle(id);
    }
  };

  return (
    <main className="p-8 md:p-10">
      <header className="flex items-start justify-between gap-6 mb-10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-titanium/40">
            Inventario
          </p>
          <h1 className="font-display text-4xl font-light tracking-tight mt-2">
            Veicoli <span className="text-titanium/40 text-2xl">({vehicles.length})</span>
          </h1>
        </div>
        <Link href="/admin/vehicles/new">
          <Button variant="crimson">
            <Plus className="h-4 w-4" />
            Nuovo veicolo
          </Button>
        </Link>
      </header>

      <div className="relative mb-6 max-w-sm">
        <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-titanium/30" />
        <input
          placeholder="Cerca per marca, modello…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent border border-titanium/15 pl-10 pr-3 py-2.5 text-sm outline-none focus:border-crimson transition-colors"
        />
      </div>

      <div className="border border-titanium/10 bg-graphite overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-[10px] uppercase tracking-[0.3em] text-titanium/40 border-b border-titanium/10">
            <tr>
              <th className="px-5 py-4 font-normal">Veicolo</th>
              <th className="px-5 py-4 font-normal text-right">Anno</th>
              <th className="px-5 py-4 font-normal text-right">KM</th>
              <th className="px-5 py-4 font-normal text-right">Prezzo</th>
              <th className="px-5 py-4 font-normal">Stato</th>
              <th className="px-5 py-4 font-normal text-right">Azioni</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-16 text-center text-titanium/40 text-sm">
                  Nessun veicolo trovato.
                </td>
              </tr>
            )}
            {filtered.map((v) => (
              <tr
                key={v.id}
                className="border-b border-titanium/5 hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-10 shrink-0 bg-noir overflow-hidden">
                      <Image
                        src={v.heroImage}
                        alt={v.model}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="text-sm">
                        {v.brand} {v.model}{" "}
                        <span className="text-titanium/40 text-xs">{v.variant}</span>
                      </p>
                      <p className="text-[11px] text-titanium/40 mt-0.5 font-mono">
                        {v.vin.slice(0, 12)}…
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-right font-mono tabular-nums">
                  {v.year}
                </td>
                <td className="px-5 py-4 text-right font-mono tabular-nums text-titanium/70">
                  {v.mileage.toLocaleString("it-CH")}
                </td>
                <td className="px-5 py-4 text-right font-mono tabular-nums text-gold">
                  {formatChf(v.priceChf)}
                </td>
                <td className="px-5 py-4">
                  <StatusBadge status={v.status} />
                </td>
                <td className="px-5 py-4 text-right">
                  <div className="inline-flex items-center gap-1">
                    <Link
                      href={`/admin/vehicles/${v.id}`}
                      className="p-2 text-titanium/50 hover:text-titanium transition-colors"
                      aria-label="Modifica"
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(v.id, `${v.brand} ${v.model}`)}
                      className="p-2 text-titanium/50 hover:text-crimson transition-colors"
                      aria-label="Elimina"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; color: string }> = {
    AVAILABLE: { label: "Disponibile", color: "bg-emerald-500" },
    RESERVED: { label: "Riservato", color: "bg-amber-500" },
    SOLD: { label: "Venduto", color: "bg-titanium/30" },
    IN_INSPECTION: { label: "Ispezione", color: "bg-blue-500" },
    COMING_SOON: { label: "In arrivo", color: "bg-crimson" },
  };
  const s = map[status] ?? { label: status, color: "bg-titanium/30" };
  return (
    <span className="inline-flex items-center gap-2 text-xs">
      <span className={`h-1.5 w-1.5 rounded-full ${s.color}`} />
      {s.label}
    </span>
  );
}