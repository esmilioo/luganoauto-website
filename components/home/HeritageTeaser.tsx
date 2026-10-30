"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";

export function HeritageTeaser() {
  return (
    <section className="py-32 border-t border-titanium/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] overflow-hidden bg-graphite"
        >
          <Image
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=90"
            alt="Lugano Auto Heritage"
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </motion.div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-titanium/40">
            Since 1992
          </p>
          <TextReveal
            text="Trent'anni di eccellenza, una sola ossessione."
            className="font-display font-light text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02] tracking-tighter mt-6"
          />
          <p className="text-titanium/55 mt-8 max-w-lg leading-relaxed">
            Una selezione curata di vetture iconiche, ognuna con una storia da
            raccontare. Passione per l'ingegneria meccanica svizzera e tedesca dal
            1992.
          </p>
          <Link
            href="/heritage"
            data-magnetic
            className="inline-flex items-center gap-3 mt-10 text-[11px] uppercase tracking-[0.28em] text-titanium border-b border-titanium/40 hover:border-crimson pb-1 transition-colors"
          >
            Scopri la nostra storia →
          </Link>
        </div>
      </div>
    </section>
  );
}