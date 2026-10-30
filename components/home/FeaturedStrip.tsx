"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MOCK_VEHICLES } from "@/lib/mockData";
import { formatChf } from "@/lib/utils";
import { TextReveal } from "@/components/ui/TextReveal";

export function FeaturedStrip() {
  return (
    <section className="py-32 px-6 md:px-10 border-t border-titanium/10">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-titanium/40">
              Ultimi arrivi in salone
            </p>
            <TextReveal
              text="Selezione della settimana."
              className="font-display font-light text-[clamp(2rem,5vw,4.5rem)] leading-[1] tracking-tighter mt-4"
            />
          </div>
          <Link
            href="/showroom"
            data-magnetic
            className="hidden md:inline-block text-[11px] uppercase tracking-[0.28em] text-titanium/60 hover:text-titanium border-b border-titanium/30 hover:border-titanium pb-1 transition-colors"
          >
            Vedi tutto l'inventario →
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-6 md:-mx-10 px-6 md:px-10">
          {MOCK_VEHICLES.slice(0, 5).map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.06,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="snap-start shrink-0 w-[78vw] md:w-[420px]"
            >
              <Link href={`/showroom/${v.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
                  <Image
                    src={v.heroImage}
                    alt={`${v.brand} ${v.model}`}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-apple)] group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 78vw, 420px"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-titanium/40">
                    {v.brand} · {v.year}
                  </p>
                  <h3 className="font-display text-xl tracking-tight font-light mt-2">
                    {v.model} {v.variant}
                  </h3>
                  <div className="mt-3 pt-3 border-t border-titanium/10 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-titanium/50">
                    <span>
                      {v.mileage.toLocaleString("it-CH")} km · {v.horsepower} CV
                    </span>
                    <span className="text-titanium/70 font-mono">
                      {formatChf(v.priceChf)}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}