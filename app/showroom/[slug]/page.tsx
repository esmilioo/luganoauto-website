"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_VEHICLES } from "@/lib/mockData";
import { CarDetailView } from "@/components/showroom/CarDetailView";

export default function CarPage() {
  const params = useParams<{ slug: string }>();
  const vehicle = MOCK_VEHICLES.find((v) => v.slug === params.slug);

  if (!vehicle) notFound();

  return (
    <main className="pt-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-8">
        <nav className="text-[10px] uppercase tracking-[0.28em] text-titanium/40 flex items-center gap-2">
          <Link href="/" className="hover:text-titanium transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/showroom" className="hover:text-titanium transition-colors">
            Inventario
          </Link>
          <span>/</span>
          <span className="text-titanium/70">{vehicle.brand} {vehicle.model}</span>
        </nav>
      </div>
      <CarDetailView vehicle={vehicle} />
    </main>
  );
}