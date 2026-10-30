"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useAdminStore } from "@/store/adminStore";
import { VehicleForm } from "@/components/admin/VehicleForm";

export default function EditVehiclePage() {
  const params = useParams<{ id: string }>();
  const vehicles = useAdminStore((s) => s.vehicles);
  const vehicle = vehicles.find((v) => v.id === params.id);

  if (!vehicle) {
    return (
      <main className="p-8 md:p-10">
        <p className="text-titanium/50">Veicolo non trovato.</p>
        <Link
          href="/admin/vehicles"
          className="text-crimson text-sm mt-4 inline-block hover:underline"
        >
          ← Torna alla lista
        </Link>
      </main>
    );
  }

  return (
    <main className="p-8 md:p-10 max-w-4xl">
      <nav className="text-[10px] uppercase tracking-[0.3em] text-titanium/40 mb-6">
        <Link href="/admin/vehicles" className="hover:text-titanium">
          ← Veicoli
        </Link>
      </nav>
      <p className="text-[10px] uppercase tracking-[0.4em] text-titanium/40">
        Modifica
      </p>
      <h1 className="font-display text-3xl font-light tracking-tight mt-2 mb-12">
        {vehicle.brand} {vehicle.model}
      </h1>
      <VehicleForm vehicleId={params.id} />
    </main>
  );
}