"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useShowroomStore } from "@/store/showroomStore";
import { formatChf } from "@/lib/utils";
import type { VehicleCard } from "@/lib/mockData";

const STATUS_LABEL: Record<string, { label: string; color: string }> = {
  AVAILABLE: { label: "Disponibile", color: "bg-emerald-500" },
  RESERVED: { label: "Riservata", color: "bg-amber-500" },
  SOLD: { label: "Venduta", color: "bg-titanium/30" },
  IN_INSPECTION: { label: "In ispezione", color: "bg-blue-500" },
  COMING_SOON: { label: "In arrivo", color: "bg-crimson" },
};

export function ShowroomGrid({ vehicles }: { vehicles: VehicleCard[] }) {
  const { categories, brands, minHorsepower, minYear, maxMileage, maxPriceChf } =
    useShowroomStore();

  const filtered = useMemo(
    () =>
      vehicles.filter((v) => {
        if (categories.length && !categories.includes(v.category)) return false;
        if (brands.length && !brands.includes(v.brand)) return false;
        if (v.horsepower < minHorsepower) return false;
        if (v.year < minYear) return false;
        if (v.mileage > maxMileage) return false;
        if (v.priceChf > maxPriceChf) return false;
        return true;
      }),
    [vehicles, categories, brands, minHorsepower, minYear, maxMileage, maxPriceChf]
  );

  if (!filtered.length) {
    return (
      <p className="text-center py-40 text-titanium/40 text-sm">
        Nessun veicolo corrisponde ai filtri.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16">
        {filtered.map((v, i) => {
          const st = STATUS_LABEL[v.status];
          return (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: (i % 3) * 0.08,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={`/showroom/${v.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
                  <Image
                    src={v.heroImage}
                    alt={`${v.brand} ${v.model} ${v.variant}`}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-apple)] group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={cn("h-1.5 w-1.5 rounded-full", st.color)} />
                    <span className="glass-surface rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.2em]">
                      {st.label}
                    </span>
                  </div>
                  {v.vatDeductible && (
                    <div className="absolute top-4 right-4 glass-surface rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.2em]">
                      IVA esp.
                    </div>
                  )}
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-titanium/40">
                      {v.brand} · {v.year}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl tracking-tight font-light mt-2">
                      {v.model} {v.variant}
                    </h3>
                  </div>
                  <p className="font-mono text-xs text-titanium/60 whitespace-nowrap mt-1 tabular-nums">
                    {formatChf(v.priceChf)}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-titanium/10 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-titanium/50">
                  <span>
                    {v.mileage.toLocaleString("it-CH")} km · {v.horsepower} CV ·{" "}
                    {v.zeroToHundred}s
                  </span>
                  <span className="text-titanium/30 group-hover:text-crimson transition-colors">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Utility inline per evitare import extra
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}