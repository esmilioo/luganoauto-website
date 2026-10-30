"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

const INPUT =
  "w-full bg-transparent border-0 border-b border-titanium/15 focus:border-crimson outline-none py-3 text-sm placeholder:text-titanium/25 transition-colors";

type Form = {
  brand: string;
  model: string;
  year: string;
  mileage: string;
  plate: string;
  vin: string;
  conditionNotes: string;
  photos: string;
  desiredPrice: string;
  fullName: string;
  email: string;
  phone: string;
  contactMethod: string;
};

const STEPS = ["Auto", "Condizioni", "Contatto"];

export function CarValuationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>({
    brand: "",
    model: "",
    year: "",
    mileage: "",
    plate: "",
    vin: "",
    conditionNotes: "",
    photos: "",
    desiredPrice: "",
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "WHATSAPP",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upd = (k: keyof Form, v: string) => setForm({ ...form, [k]: v });

  const canNext = () => {
    if (step === 0) return form.brand && form.model && form.year && form.mileage;
    if (step === 1) return true;
    return form.fullName && form.email && form.phone;
  };

  const submit = async () => {
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/valuations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          year: Number(form.year),
          mileage: Number(form.mileage),
          desiredPriceChf: form.desiredPrice ? Number(form.desiredPrice) : undefined,
          photos: form.photos ? form.photos.split(",").map((s) => s.trim()) : [],
        }),
      });
      if (!res.ok) throw new Error("Errore invio");
      setSent(true);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="border border-titanium/10 p-10 md:p-16 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-crimson/40 bg-crimson/5">
          <Check className="h-6 w-6 text-crimson" />
        </div>
        <h2 className="font-display text-3xl font-light tracking-tight mt-6">
          Richiesta ricevuta.
        </h2>
        <p className="text-titanium/60 mt-3 max-w-md mx-auto text-sm leading-relaxed">
          Il nostro ufficio acquisti ti contatterà entro 24h con una proposta di
          valutazione. Se preferisci accelerare, scrivici su WhatsApp.
        </p>
        <Button
          variant="gold"
          className="mt-8"
          onClick={() =>
            window.open(
              `https://wa.me/41910000000?text=${encodeURIComponent(
                `Ciao, ho appena inviato la valutazione della mia ${form.brand} ${form.model} (${form.year}, ${form.mileage} km).`
              )}`,
              "_blank"
            )
          }
        >
          Apri WhatsApp
        </Button>
      </div>
    );
  }

  return (
    <div className="border border-titanium/10 bg-graphite p-6 md:p-10">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-10">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                i <= step ? "bg-crimson" : "bg-titanium/20"
              )}
            />
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.28em]",
                i <= step ? "text-titanium" : "text-titanium/30"
              )}
            >
              {label}
            </span>
            {i < STEPS.length - 1 && (
              <span className="w-6 h-px bg-titanium/15 mx-2" />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="s0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h2 className="font-display text-2xl font-light tracking-tight">
              La tua auto
            </h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <input
                placeholder="Marca *"
                value={form.brand}
                onChange={(e) => upd("brand", e.target.value)}
                className={INPUT}
              />
              <input
                placeholder="Modello e versione *"
                value={form.model}
                onChange={(e) => upd("model", e.target.value)}
                className={INPUT}
              />
              <input
                type="number"
                placeholder="Anno immatricolazione *"
                value={form.year}
                onChange={(e) => upd("year", e.target.value)}
                className={INPUT}
              />
              <input
                type="number"
                placeholder="Chilometraggio *"
                value={form.mileage}
                onChange={(e) => upd("mileage", e.target.value)}
                className={INPUT}
              />
              <input
                placeholder="Targa (opzionale)"
                value={form.plate}
                onChange={(e) => upd("plate", e.target.value)}
                className={INPUT}
              />
              <input
                placeholder="VIN / Telaio (opzionale)"
                value={form.vin}
                onChange={(e) => upd("vin", e.target.value)}
                className={INPUT}
              />
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="s1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h2 className="font-display text-2xl font-light tracking-tight">
              Condizioni & foto
            </h2>
            <textarea
              placeholder="Descrivi brevemente le condizioni: tagliandi, gomme, eventuali danni, optional rilevanti…"
              rows={4}
              value={form.conditionNotes}
              onChange={(e) => upd("conditionNotes", e.target.value)}
              className={cn(INPUT, "resize-none")}
            />
            <input
              placeholder="URL foto (separati da virgola) — opzionale"
              value={form.photos}
              onChange={(e) => upd("photos", e.target.value)}
              className={INPUT}
            />
            <p className="text-[11px] text-titanium/40 leading-relaxed">
              Puoi inviare fino a 10 foto. Se hai un link a una cartella Drive/iCloud,
              incollalo qui. In alternativa, dopo l'invio ti manderemo un link WhatsApp
              dedicato per caricarle.
            </p>
            <input
              type="number"
              placeholder="Prezzo desiderato CHF (opzionale)"
              value={form.desiredPrice}
              onChange={(e) => upd("desiredPrice", e.target.value)}
              className={INPUT}
            />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="s2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h2 className="font-display text-2xl font-light tracking-tight">
              Come ricontattarti
            </h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <input
                placeholder="Nome e Cognome *"
                value={form.fullName}
                onChange={(e) => upd("fullName", e.target.value)}
                className={cn(INPUT, "md:col-span-2")}
              />
              <input
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => upd("email", e.target.value)}
                className={INPUT}
              />
              <input
                type="tel"
                placeholder="Telefono *"
                value={form.phone}
                onChange={(e) => upd("phone", e.target.value)}
                className={INPUT}
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-titanium/40">
                Contatto preferito
              </label>
              <div className="mt-3 grid grid-cols-3 gap-0 border border-titanium/15">
                {["WHATSAPP", "PHONE", "EMAIL"].map((c, i) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => upd("contactMethod", c)}
                    className={cn(
                      "px-4 py-3 text-[10px] uppercase tracking-[0.2em] transition-colors",
                      i !== 0 && "border-l border-titanium/15",
                      form.contactMethod === c
                        ? "bg-gold text-noir"
                        : "text-titanium/60 hover:text-titanium"
                    )}
                  >
                    {c === "WHATSAPP" ? "WhatsApp" : c === "PHONE" ? "Telefono" : "Email"}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <div className="mt-6 border-l-2 border-crimson pl-4 text-xs text-crimson">
          {error}
        </div>
      )}

      <div className="mt-10 flex items-center justify-between">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className={cn(
            "flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-titanium/50 hover:text-titanium transition-colors disabled:opacity-30",
          )}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Indietro
        </button>

        {step < 2 ? (
          <Button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canNext()}
            variant="crimson"
          >
            Avanti
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        ) : (
          <Button
            onClick={submit}
            disabled={!canNext() || sending}
            variant="crimson"
          >
            {sending ? "Invio…" : "Invia richiesta"}
          </Button>
        )}
      </div>
    </div>
  );
}