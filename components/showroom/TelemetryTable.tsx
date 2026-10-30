"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useShowroomStore } from "@/store/showroomStore";
import { formatChf, formatNumber } from "@/lib/utils";
import type { VehicleCard } from "@/lib/mockData";

export function TelemetryTable({ vehicles }: { vehicles: VehicleCard[] }) {
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

  return (
    <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16">
      <table className="w-full text-left font-mono text-sm tabular-nums">
        <thead className="text-[10px] uppercase tracking-[0.3em] text-titanium/40 border-b border-titanium/15">
          <tr>
            <th className="py-5 pr-4 font-normal">#</th>
            <th className="py-5 pr-4 font-normal">Modello</th>
            <th className="py-5 pr-4 font-normal text-right">Anno</th>
            <th className="py-5 pr-4 font-normal text-right">KM</th>
            <th className="py-5 pr-4 font-normal text-right">CV</th>
            <th className="py-5 pr-4 font-normal text-right">0–100</th>
            <th className="py-5 pr-4 font-normal text-right">Prezzo</th>
            <th className="py-5 pr-4 font-normal">MFK</th>
            <th className="py-5 font-normal" />
          </tr>
        </thead>
        <tbody>
          {filtered.map((v, i) => (
            <tr
              key={v.id}
              className="border-b border-titanium/5 hover:bg-white/[0.02] transition-colors group"
            >
              <td className="py-5 pr-4 text-titanium/30">
                {String(i + 1).padStart(2, "0")}
              </td>
              <td className="py-5 pr-4">
                <Link
                  href={`/showroom/${v.slug}`}
                  className="hover:text-crimson transition-colors"
                >
                  <span className="text-titanium/50">{v.brand}</span>{" "}
                  <span>{v.model}</span>{" "}
                  <span className="text-titanium/40 text-xs">{v.variant}</span>
                </Link>
              </td>
              <td className="py-5 pr-4 text-right">{v.year}</td>
              <td className="py-5 pr-4 text-right text-titanium/60">
                {formatNumber(v.mileage)}
              </td>
              <td className="py-5 pr-4 text-right">{v.horsepower}</td>
              <td className="py-5 pr-4 text-right text-titanium/60">
                {v.zeroToHundred.toFixed(1)}s
              </td>
              <td className="py-5 pr-4 text-right text-gold">
                {formatChf(v.priceChf)}
              </td>
              <td className="py-5 pr-4 text-xs text-titanium/50">{v.mfkStatus}</td>
              <td className="py-5 text-right">
                <Link
                  href={`/showroom/${v.slug}`}
                  className="text-[10px] uppercase tracking-[0.25em] text-titanium/30 group-hover:text-crimson transition-colors"
                >
                  Dettagli →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}