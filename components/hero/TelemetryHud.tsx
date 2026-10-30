"use client";
import { motion } from "framer-motion";
import { formatChf } from "@/lib/utils";

type Props = {
  hp: number; zeroToHundred: number; priceChf: number; model: string;
};

export function TelemetryHud({ hp, zeroToHundred, priceChf, model }: Props) {
  const items = [
    { label: "POWER", value: `${hp} CV` },
    { label: "0–100", value: `${zeroToHundred.toFixed(1)}s` },
    { label: "FROM", value: formatChf(priceChf) },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="glass-surface rounded-2xl px-6 py-5 flex items-center gap-10"
    >
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-titanium/50">Featured</p>
        <p className="font-display text-lg tracking-tight mt-1">{model}</p>
      </div>
      <div className="h-10 w-px bg-titanium/10" />
      {items.map((it) => (
        <div key={it.label}>
          <p className="text-[10px] uppercase tracking-[0.3em] text-titanium/50">{it.label}</p>
          <p className="font-mono text-lg mt-1">{it.value}</p>
        </div>
      ))}
    </motion.div>
  );
}