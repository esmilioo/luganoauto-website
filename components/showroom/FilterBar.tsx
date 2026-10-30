"use client";

import { useShowroomStore } from "@/store/showroomStore";
import type { VehicleCategory } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORIES: { id: VehicleCategory; label: string }[] = [
  { id: "SPORTIVA", label: "Sportiva" },
  { id: "SUV_PERFORMANCE", label: "SUV Performance" },
  { id: "HYPERCAR", label: "Hypercar" },
  { id: "CLASSIC", label: "Classica" },
  { id: "GRAND_TOURER", label: "Gran Turismo" },
  { id: "ELECTRIC_PRECISION", label: "Elettrica" },
];

export function FilterBar() {
  const s = useShowroomStore();

  return (
    <div className="border-y border-titanium/10 bg-noir/95 backdrop-blur-md sticky top-[68px] z-30">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6 py-5">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-titanium/40">
              Filtra
            </span>
            {CATEGORIES.map((c) => {
              const active = s.categories.includes(c.id);
              return (
                <button
                  key={c.id}
                  data-magnetic
                  onClick={() => s.toggleCategory(c.id)}
                  className={cn(
                    "relative text-[11px] uppercase tracking-[0.22em] transition-colors pb-1",
                    active ? "text-titanium" : "text-titanium/40 hover:text-titanium/80"
                  )}
                >
                  {c.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-crimson" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-titanium/40">
                Anno ≥
              </span>
              <input
                type="range"
                min={1990}
                max={2025}
                step={1}
                value={s.minYear}
                onChange={(e) => s.setMinYear(Number(e.target.value))}
                className="w-24 accent-titanium"
              />
              <span className="font-mono text-xs text-titanium tabular-nums w-10">
                {s.minYear}
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-titanium/40">
                KM ≤
              </span>
              <input
                type="range"
                min={0}
                max={200_000}
                step={5000}
                value={s.maxMileage}
                onChange={(e) => s.setMaxMileage(Number(e.target.value))}
                className="w-24 accent-titanium"
              />
              <span className="font-mono text-xs text-titanium tabular-nums w-14">
                {s.maxMileage.toLocaleString("it-CH")}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => s.setViewMode("grid")}
                className={cn(
                  "px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] transition-colors",
                  s.viewMode === "grid"
                    ? "text-titanium"
                    : "text-titanium/40 hover:text-titanium/80"
                )}
              >
                Griglia
              </button>
              <span className="text-titanium/20">/</span>
              <button
                onClick={() => s.setViewMode("table")}
                className={cn(
                  "px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] transition-colors",
                  s.viewMode === "table"
                    ? "text-titanium"
                    : "text-titanium/40 hover:text-titanium/80"
                )}
              >
                Telemetria
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}