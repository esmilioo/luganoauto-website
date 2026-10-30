"use client";

import { useState } from "react";
import { Dialog } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  vehicleModel?: string;
};

const WHATSAPP_NUMBER = "41910000000";

const APPOINTMENTS = [
  { id: "VIP_TEST_DRIVE", label: "VIP Test Drive" },
  { id: "TRADE_IN_EVALUATION", label: "Valutazione Permuta" },
  { id: "FINANCIAL_CONSULTING", label: "Consulenza Leasing" },
] as const;

const CONTACTS = [
  { id: "WHATSAPP", label: "WhatsApp VIP" },
  { id: "PHONE", label: "Telefono" },
  { id: "EMAIL", label: "Email" },
] as const;

const APPOINTMENT_LABEL: Record<string, string> = {
  VIP_TEST_DRIVE: "VIP Test Drive",
  TRADE_IN_EVALUATION: "Valutazione Permuta",
  FINANCIAL_CONSULTING: "Consulenza Leasing",
};

const INPUT =
  "w-full bg-transparent border-0 border-b border-titanium/15 focus:border-crimson outline-none py-3 text-sm placeholder:text-titanium/25 transition-colors";

export function VIPBookingModal({ open, onClose, vehicleModel }: Props) {
  const [appointment, setAppointment] = useState<string>("VIP_TEST_DRIVE");
  const [contact, setContact] = useState<string>("WHATSAPP");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetAll = () => {
    setAppointment("VIP_TEST_DRIVE");
    setContact("WHATSAPP");
    setForm({ fullName: "", email: "", phone: "", date: "", time: "", notes: "" });
    setError(null);
    setSent(false);
    setSending(false);
  };

  const handleClose = () => {
    setTimeout(resetAll, 300);
    onClose();
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      "Ciao Lugano Auto!",
      "Ho appena inviato una richiesta dal sito.",
      "",
      `• Tipo: ${APPOINTMENT_LABEL[appointment] ?? appointment}`,
      `• Veicolo: ${vehicleModel ?? "—"}`,
      `• Nome: ${form.fullName || "—"}`,
      `• Data preferita: ${form.date || "—"} ${form.time ? `alle ${form.time}` : ""}`,
      form.notes ? `• Note: ${form.notes}` : null,
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`,
      "_blank"
    );
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          appointmentType: appointment,
          contactMethod: contact,
          vehicleModel,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Errore invio richiesta");
      }
      setSent(true);
    } catch (err) {
      setError(
        (err as Error).message ||
          "Errore durante l'invio. Riprova o contattaci su WhatsApp."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      title={sent ? "Richiesta inviata" : "Prenota Private Showroom"}
    >
      {sent ? (
        <div className="py-6">
          <p className="font-display text-3xl font-light tracking-tight">
            Grazie, {form.fullName.split(" ")[0] || "ospite"}.
          </p>
          <p className="text-titanium/55 mt-4 text-sm leading-relaxed max-w-md">
            Il tuo concierge ti contatterà entro 24h via{" "}
            {contact === "WHATSAPP"
              ? "WhatsApp"
              : contact === "PHONE"
              ? "telefono"
              : "email"}
            .
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-noir px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" />
              Apri WhatsApp
            </button>
            <Button variant="outline" onClick={handleClose}>
              Chiudi
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-10">
          {vehicleModel && (
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-titanium/50">
              <span className="h-1.5 w-1.5 bg-crimson" />
              Veicolo · <span className="text-titanium">{vehicleModel}</span>
            </div>
          )}

          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-titanium/40">
              Tipologia appuntamento
            </label>
            <div className="mt-4 grid grid-cols-3 gap-0 border border-titanium/15">
              {APPOINTMENTS.map((a, i) => (
                <button
                  type="button"
                  key={a.id}
                  onClick={() => setAppointment(a.id)}
                  className={cn(
                    "px-4 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors",
                    i !== 0 && "border-l border-titanium/15",
                    appointment === a.id
                      ? "bg-titanium text-noir"
                      : "text-titanium/60 hover:text-titanium"
                  )}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <input
              required
              placeholder="Nome e Cognome"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className={cn(INPUT, "col-span-2")}
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={INPUT}
            />
            <input
              required
              type="tel"
              placeholder="Telefono"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={INPUT}
            />
            <input
              required
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className={cn(INPUT, "text-titanium/80")}
            />
            <input
              required
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className={cn(INPUT, "text-titanium/80")}
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-titanium/40">
              Contatto preferito
            </label>
            <div className="mt-4 grid grid-cols-3 gap-0 border border-titanium/15">
              {CONTACTS.map((c, i) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setContact(c.id)}
                  className={cn(
                    "px-4 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors",
                    i !== 0 && "border-l border-titanium/15",
                    contact === c.id
                      ? "bg-gold text-noir"
                      : "text-titanium/60 hover:text-titanium"
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-titanium/40">
              Note (opzionale)
            </label>
            <textarea
              rows={3}
              placeholder="Allestimento desiderato, permuta, orari preferiti…"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className={cn(INPUT, "resize-none mt-2")}
            />
          </div>

          {error && (
            <div className="border-l-2 border-crimson pl-4 text-xs text-crimson">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <Button
              type="submit"
              variant="crimson"
              className="w-full"
              disabled={sending}
            >
              {sending ? "Invio in corso…" : "Richiedi appuntamento privato"}
            </Button>

            <button
              type="button"
              onClick={openWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-titanium/40 hover:text-gold transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Preferisci WhatsApp? Scrivici →
            </button>
          </div>
        </form>
      )}
    </Dialog>
  );
}