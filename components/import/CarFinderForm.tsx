"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const INPUT =
  "w-full bg-transparent border-0 border-b border-titanium/15 focus:border-crimson outline-none py-3 text-sm placeholder:text-titanium/25 transition-colors";

type Form = {
  brand: string;
  model: string;
  yearFrom: string;
  yearTo: string;
  budgetMax: string;
  notes: string;
  fullName: string;
  email: string;
  phone: string;
  contactMethod: string;
};

export function CarFinderForm() {
  const [form, setForm] = useState<Form>({
    brand: "",
    model: "",
    yearFrom: "",
    yearTo: "",
    budgetMax: "",
    notes: "",
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "WHATSAPP",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upd = (k: keyof Form, v: string) => setForm({ ...form, [k]: v });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/car-finder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          yearFrom: form.yearFrom ? Number(form.yearFrom) : undefined,
          yearTo: form.yearTo ? Number(form.yearTo) : undefined,
          budgetMaxChf: Number(form.budgetMax),
        }),
      });
      if (!res.ok) throw new Error("Errore invio");
      setSent(true);
    } catch (err) {
      setError((err as Error).message);
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
          Ricerca avviata.
        </h2>
        <p className="text-titanium/60 mt-3 max-w-md mx-auto text-sm leading-relaxed">
          Il nostro team Car Finder ti invierà una shortlist entro 3–5 giorni
          lavorativi. Nessun anticipo richiesto.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="border border-titanium/10 bg-graphite p-6 md:p-10 space-y-8"
    >
      <div>
        <h2 className="font-display text-2xl font-light tracking-tight">
          Cosa stai cercando?
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        <input
          placeholder="Marca *"
          value={form.brand}
          onChange={(e) => upd("brand", e.target.value)}
          required
          className={INPUT}
        />
        <input
          placeholder="Modello / variante (opzionale)"
          value={form.model}
          onChange={(e) => upd("model", e.target.value)}
          className={INPUT}
        />
        <input
          type="number"
          placeholder="Anno da"
          value={form.yearFrom}
          onChange={(e) => upd("yearFrom", e.target.value)}
          className={INPUT}
        />
        <input
          type="number"
          placeholder="Anno a"
          value={form.yearTo}
          onChange={(e) => upd("yearTo", e.target.value)}
          className={INPUT}
        />
        <input
          type="number"
          placeholder="Budget massimo CHF *"
          value={form.budgetMax}
          onChange={(e) => upd("budgetMax", e.target.value)}
          required
          className={cn(INPUT, "md:col-span-2")}
        />
      </div>

      <textarea
        placeholder="Note (colore, allestimento, optional indispensabili, km massimi, provenienza preferita…)"
        rows={3}
        value={form.notes}
        onChange={(e) => upd("notes", e.target.value)}
        className={cn(INPUT, "resize-none")}
      />

      <div className="border-t border-titanium/10 pt-8">
        <h2 className="font-display text-2xl font-light tracking-tight">
          Come ricontattarti
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        <input
          placeholder="Nome e Cognome *"
          value={form.fullName}
          onChange={(e) => upd("fullName", e.target.value)}
          required
          className={cn(INPUT, "md:col-span-2")}
        />
        <input
          type="email"
          placeholder="Email *"
          value={form.email}
          onChange={(e) => upd("email", e.target.value)}
          required
          className={INPUT}
        />
        <input
          type="tel"
          placeholder="Telefono *"
          value={form.phone}
          onChange={(e) => upd("phone", e.target.value)}
          required
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

      {error && (
        <div className="border-l-2 border-crimson pl-4 text-xs text-crimson">
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="crimson"
        className="w-full"
        disabled={sending}
      >
        {sending ? "Invio…" : "Avvia ricerca gratuita"}
      </Button>
    </form>
  );
}