import Link from "next/link";
import { VehicleForm } from "@/components/admin/VehicleForm";

export default function NewVehiclePage() {
  return (
    <main className="p-8 md:p-10 max-w-4xl">
      <nav className="text-[10px] uppercase tracking-[0.3em] text-titanium/40 mb-6">
        <Link href="/admin/vehicles" className="hover:text-titanium">
          ← Veicoli
        </Link>
      </nav>
      <p className="text-[10px] uppercase tracking-[0.4em] text-titanium/40">
        Nuovo
      </p>
      <h1 className="font-display text-3xl font-light tracking-tight mt-2 mb-12">
        Aggiungi veicolo
      </h1>
      <VehicleForm />
    </main>
  );
}