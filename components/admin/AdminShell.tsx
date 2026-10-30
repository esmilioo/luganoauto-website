"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Car,
  Inbox,
  ArrowLeft,
  RotateCcw,
} from "lucide-react";
import { useAdminStore } from "@/store/adminStore";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/vehicles", label: "Veicoli", icon: Car },
  { href: "/admin/leads", label: "Lead", icon: Inbox },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const valuations = useAdminStore((s) => s.valuations);
  const carFinder = useAdminStore((s) => s.carFinder);
  const bookings = useAdminStore((s) => s.bookings);
  const resetAll = useAdminStore((s) => s.resetAll);

  const pendingLeads =
    valuations.filter((v) => v.status === "NEW").length +
    carFinder.filter((c) => c.status === "NEW").length +
    bookings.filter((b) => b.status === "PENDING").length;

  return (
    <div className="min-h-screen flex bg-noir text-titanium">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-titanium/10 bg-graphite flex flex-col">
        <div className="p-6 border-b border-titanium/10">
          <Link
            href="/admin"
            className="font-display text-[12px] uppercase tracking-[0.35em] font-light"
          >
            Lugano<span className="text-crimson">·</span>Admin
          </Link>
          <p className="text-[9px] uppercase tracking-[0.3em] text-titanium/30 mt-2">
            Control Panel
          </p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {NAV.map((item) => {
            const active = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);
            const badge = item.href === "/admin/leads" && pendingLeads > 0 ? pendingLeads : null;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-sm transition-colors rounded",
                  active
                    ? "bg-titanium/5 text-titanium"
                    : "text-titanium/60 hover:text-titanium hover:bg-white/[0.02]"
                )}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                <span className="flex-1">{item.label}</span>
                {badge && (
                  <span className="bg-crimson text-noir text-[10px] font-semibold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                    {badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-titanium/10 space-y-1">
          <button
            onClick={() => {
              if (confirm("Ripristinare tutti i dati demo? Le modifiche andranno perse.")) {
                resetAll();
              }
            }}
            className="w-full flex items-center gap-3 px-3 py-2 text-xs text-titanium/40 hover:text-titanium transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset dati demo
          </button>
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 text-xs text-titanium/40 hover:text-titanium transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Torna al sito
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 overflow-y-auto">{children}</div>
    </div>
  );
}