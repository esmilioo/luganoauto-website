"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";

const STATS = [
  { value: 525, suffix: "CV", label: "Potenza massima" },
  { value: 3.2, suffix: "s", label: "0 – 100 km/h", decimals: 1 },
  { value: 296, suffix: "km/h", label: "Velocità massima" },
  { value: 465, suffix: "Nm", label: "Coppia" },
];

function AnimatedNumber({
  target,
  suffix,
  decimals = 0,
}: {
  target: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 40%"],
  });

  const value = useTransform(scrollYProgress, [0, 1], [0, target]);

  // Stato locale: React renderizza solo stringhe pure, mai MotionValue
  const [display, setDisplay] = useState<string>((0).toFixed(decimals));

  useMotionValueEvent(value, "change", (v) => {
    setDisplay(v.toFixed(decimals));
  });

  return (
    <div ref={ref} className="inline-flex items-baseline gap-1">
      <span className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tighter font-light tabular-nums">
        {display}
      </span>
      <span className="font-mono text-sm text-titanium/40">{suffix}</span>
    </div>
  );
}

export function PerformanceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative py-40 border-t border-titanium/10 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="max-w-4xl">
          <p className="text-[10px] uppercase tracking-[0.5em] text-titanium/40">
            Performance
          </p>
          <TextReveal
            text="Ingegneria che non concede nulla all'ordinario."
            className="font-display font-light text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] tracking-tighter mt-6 text-balance"
          />
        </div>

        <motion.div
          style={{ width: lineWidth }}
          className="h-px bg-titanium/20 mt-16 origin-left"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 mt-16">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <AnimatedNumber
                target={s.value}
                suffix={s.suffix}
                decimals={s.decimals ?? 0}
              />
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-titanium/50">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}