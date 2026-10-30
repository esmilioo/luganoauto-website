"use client";

import Link from "next/link";
import { useAdminStore } from "@/store/adminStore";
import { formatChf } from "@/lib/utils";
import { ArrowUpRight, Car, Inbox, TrendingUp, AlertCircle } from "lucide-react";

export default function AdminDashboard() {
  const vehicles = useAdminStore((s) => s.vehicles);
  const valuations = useAdminStore((s) => s.valuations);
  const carFinder = useAdminStore((s) => s.carFinder);
  const bookings = useAdminStore((s) => s.bookings);

  const available = vehicles.filter((v) => v.status === "AVAILABLE");
  const inventoryValue = available.reduce((acc, v) => acc + v.priceChf, 0);
  const pendingLeads =
    valuations.filter((v) => v.status === "NEW").length +
    carFinder.filter((c) => c.status === "NEW").length +
    bookings.filter((b) => b.status === "PENDING").length;

  const STATS = [
    {
      label: "Veicoli totali",
      value: String(vehicles.length),
      sub: `${available.length} disponibili`,
      icon: Car,
      href: "/admin/vehicles",
    },
    {
      label: "Valore inventario",
      value: formatChf(inventoryValue),
      sub: "solo disponibili",
      icon: TrendingUp,
      href: "/admin/vehicles",
    },
    {
      label: "Lead in attesa",
      value: String(pendingLeads),
      sub: "da ricontattare",
      icon: AlertCircle,
      href: "/admin/leads",
      accent: pendingLeads > 0,
    },
    {
      label: "Lead totali",
      value: String(valuations.length + carFinder.length + bookings.length),
      sub: "tutti i tipi",
      icon: Inbox,
      href: "/admin/leads",
    },
  ];

  return (
    <main className="p-8 md:p-10">
      <header className="mb-10">
        <p className="text-[10px] uppercase tracking-[0.4em] text-titanium/40">
          Dashboard
        </p>
        <h1 className="font-display text-4xl font-light tracking-tight mt-2">
          Benvenuto.
        </h1>
        <p className="text-titanium/50 text-sm mt-2">
          Panoramica in tempo reale di inventario e lead.
        </p>
      </header>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="group border border-titanium/10 bg-graphite p-6 hover:border-titanium/30 transition-colors"
          >
            <div className="flex items-start justify-between">
              <stat.icon
                className={`h-5 w-5 ${
                  stat.accent ? "text-crimson" : "text-titanium/40"
                }`}
              />
              <ArrowUpRight className="h-4 w-4 text-titanium/20 group-hover:text-titanium/50 transition-colors" />
            </div>
            <p className="font-display text-2xl md:text-3xl font-light tracking-tight mt-6 tabular-nums">
              {stat.value}
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-titanium/40 mt-2">
              {stat.label}
            </p>
            <p className="text-xs text-titanium/30 mt-1">{stat.sub}</p>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        <Section title="Ultimi veicoli" href="/admin/vehicles">
          {vehicles.slice(0, 4).map((v) => (
            <Link
              key={v.id}
              href={`/admin/vehicles/${v.id}`}
              className="flex items-center justify-between py-3 border-b border-titanium/5 hover:bg-white/[0.02] transition-colors"
            >
              <div>
                <p className="text-sm">
                  {v.brand} {v.model}{" "}
                  <span className="text-titanium/40 text-xs">{v.variant}</span>
                </p>
                <p className="text-[11px] text-titanium/40 mt-0.5">
                  {v.year} · {v.mileage.toLocaleString("it-CH")} km
                </p>
              </div>
              <p className="font-mono text-xs tabular-nums text-gold">
                {formatChf(v.priceChf)}
              </p>
            </Link>
          ))}
        </Section>

        <Section title="Lead recenti" href="/admin/leads">
          {bookings.slice(0, 2).map((b) => (
            <div
              key={b.id}
              className="py-3 border-b border-titanium/5"
            >
              <p className="text-sm">
                {b.fullName}{" "}
                <span className="text-[10px] uppercase tracking-[0.2em] text-crimson">
                  · {b.appointmentType.replace("_", " ")}
                </span>
              </p>
              <p className="text-[11px] text-titanium/40 mt-0.5">
                {b.vehicleModel ?? "—"} · {b.preferredDate} {b.preferredTime}
              </p>
            </div>
          ))}
          {valuations.slice(0, 2).map((v) => (
            <div key={v.id} className="py-3 border-b border-titanium/5">
              <p className="text-sm">
                {v.fullName}{" "}
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  · Valutazione
                </span>
              </p>
              <p className="text-[11px] text-titanium/40 mt-0.5">
                {v.brand} {v.model} · {v.year} · {v.mileage.toLocaleString("it-CH")} km
              </p>
            </div>
          ))}
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-titanium/10 bg-graphite">
      <div className="flex items-center justify-between px-6 py-4 border-b border-titanium/10">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-titanium/60">
          {title}
        </h2>
        <Link
          href={href}
          className="text-[10px] uppercase tracking-[0.3em] text-titanium/40 hover:text-crimson transition-colors"
        >
          Vedi tutti →
        </Link>
      </div>
      <div className="px-6">{children}</div>
    </div>
  );
}