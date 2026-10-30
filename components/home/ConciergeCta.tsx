"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { VIPBookingModal } from "@/components/concierge/VIPBookingModal";
import { TextReveal } from "@/components/ui/TextReveal";

const FEATURES = [
  {
    n: "01",
    title: "Private Showroom",
    desc: "Appuntamenti dedicati, lontano dai riflettori.",
  },
  {
    n: "02",
    title: "VIP Test Drive",
    desc: "Prova su strada dei modelli selezionati.",
  },
  {
    n: "03",
    title: "Consulenza 1:1",
    desc: "Leasing svizzero, permute e finanziamenti.",
  },
];

export function ConciergeCta() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-32 border-t border-titanium/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold">
              Concierge
            </p>
            <TextReveal
              text="Un servizio su misura per chi non accetta compromessi."
              className="font-display font-light text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] tracking-tighter mt-6"
            />
            <Button variant="outline" className="mt-10" onClick={() => setOpen(true)}>
              Prenota appuntamento
            </Button>
          </div>

          <div className="md:col-span-7 md:pl-12">
            <div className="border-t border-titanium/10">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_200px_1fr] gap-6 py-8 border-b border-titanium/10 items-baseline"
                >
                  <span className="font-mono text-xs text-titanium/30">{f.n}</span>
                  <h3 className="font-display text-xl font-light tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm text-titanium/50 leading-relaxed col-span-2 md:col-span-1">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <VIPBookingModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}