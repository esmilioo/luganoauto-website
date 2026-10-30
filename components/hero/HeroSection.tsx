"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { QuickSearch } from "./QuickSearch";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden flex flex-col">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2400&q=95"
          alt="Usato d'élite Lugano Auto"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-noir/30" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col flex-1 justify-end px-6 md:px-10 pb-10 md:pb-16 pt-32"
      >
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] uppercase tracking-[0.5em] text-crimson"
          >
            Lugano · Switzerland · Since 1992
          </motion.p>

          <TextReveal
            as="h1"
            text="Soli esemplari straordinari."
            className="font-display font-light text-[clamp(2.75rem,8vw,7rem)] leading-[0.92] tracking-tighter mt-4 max-w-5xl"
            delay={0.3}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-titanium/70 max-w-xl text-base md:text-lg leading-relaxed"
          >
            Usato selezionato, supercar e vetture di prestigio in Canton Ticino.
            Collaudo MFK, garanzia 24 mesi e chilometraggio certificato su ogni vettura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-5xl"
          >
            <QuickSearch />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            <Link
              href="/sell"
              data-magnetic
              className="text-[11px] uppercase tracking-[0.28em] text-titanium/70 hover:text-titanium border-b border-titanium/30 hover:border-titanium pb-1 transition-colors"
            >
              Vendi la tua auto →
            </Link>
            <Link
              href="/import"
              data-magnetic
              className="text-[11px] uppercase tracking-[0.28em] text-titanium/70 hover:text-titanium border-b border-titanium/30 hover:border-titanium pb-1 transition-colors"
            >
              Car Finder · Importazione su misura →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-4 right-6 md:right-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-titanium/40"
          >
            Scroll
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}