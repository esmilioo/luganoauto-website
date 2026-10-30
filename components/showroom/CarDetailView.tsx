"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Gauge,
  FileText,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import type { VehicleCard } from "@/lib/mockData";
import { formatChf, formatNumber } from "@/lib/utils";
import { calculateUsedLease } from "@/lib/leasing";
import { Button } from "@/components/ui/Button";
import { VIPBookingModal } from "@/components/concierge/VIPBookingModal";

export function CarDetailView({ vehicle: v }: { vehicle: VehicleCard }) {
  const [activeImg, setActiveImg] = useState(0);
  const [downPct, setDownPct] = useState(0.15);
  const [months, setMonths] = useState(48);
  const [bookOpen, setBookOpen] = useState(false);

  const gallery = v.gallery.length ? v.gallery : [v.heroImage];
  const lease = calculateUsedLease(v.priceChf, v.year, downPct, 4.5, months);

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Ciao Lugano Auto, sono interessato alla ${v.brand} ${v.model} ${v.variant} (${v.year}, ${formatNumber(v.mileage)} km). Potete darmi più informazioni?`
    );
    window.open(`https://wa.me/41910000000?text=${msg}`, "_blank");
  };

  return (
    <>
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-10 grid lg:grid-cols-[1.2fr_1fr] gap-12">
        {/* LEFT — Gallery */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden bg-graphite group"
          >
            <Image
              src={gallery[activeImg]}
              alt={`${v.brand} ${v.model} — foto ${activeImg + 1}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 60vw"
            />
            {gallery.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImg((i) => (i - 1 + gallery.length) % gallery.length)
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center bg-noir/70 backdrop-blur-md hover:bg-noir transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Precedente"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setActiveImg((i) => (i + 1) % gallery.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center bg-noir/70 backdrop-blur-md hover:bg-noir transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Successiva"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}
            <div className="absolute bottom-4 left-4 bg-noir/70 backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-[0.22em]">
              {activeImg + 1} / {gallery.length}
            </div>
          </motion.div>

          {gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-2 mt-2">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={
                    "relative aspect-square overflow-hidden bg-graphite transition-opacity " +
                    (i === activeImg ? "opacity-100 ring-1 ring-crimson" : "opacity-40 hover:opacity-80")
                  }
                >
                  <Image
                    src={src}
                    alt={`Thumb ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="15vw"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — Info */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-titanium/40">
            {v.brand} · {v.year}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light tracking-tighter mt-3">
            {v.model} {v.variant}
          </h1>
          <p className="font-mono text-sm text-titanium/50 mt-2 tabular-nums">
            {formatNumber(v.mileage)} km · {v.previousOwners} proprietari ·{" "}
            {v.horsepower} CV
          </p>

          {/* Price */}
          <div className="mt-8 pb-8 border-b border-titanium/10">
            <p className="font-display text-3xl font-light tabular-nums">
              {formatChf(v.priceChf)}
            </p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-titanium/40 mt-2">
              {v.vatDeductible ? "IVA esposta · deducibile" : "IVA non esposta"}
            </p>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            <Badge icon={ShieldCheck} label="Garanzia 24 mesi" sub="Inclusa" />
            <Badge
              icon={BadgeCheck}
              label="Collaudo MFK"
              sub={v.mfkStatus}
            />
            <Badge icon={Gauge} label="KM certificati" sub="Verificati" />
            <Badge
              icon={FileText}
              label="Storico tagliandi"
              sub={v.fullServiceHistory ? "Completo" : "Parziale"}
            />
          </div>

          {/* CTA */}
          <div className="mt-8 space-y-3">
            <Button
              variant="crimson"
              className="w-full"
              onClick={() => setBookOpen(true)}
            >
              Prenota visita in salone
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:+41910000000`}
                className="flex items-center justify-center gap-2 border border-titanium/20 py-3 text-[11px] uppercase tracking-[0.22em] hover:border-titanium transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                Chiama
              </a>
              <button
                onClick={openWhatsApp}
                className="flex items-center justify-center gap-2 border border-titanium/20 py-3 text-[11px] uppercase tracking-[0.22em] hover:border-titanium transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </button>
            </div>
            {v.inspectionPdfUrl && (
              <a
                href={v.inspectionPdfUrl}
                className="block text-center text-[10px] uppercase tracking-[0.28em] text-titanium/50 hover:text-gold transition-colors pt-2"
              >
                Scarica report ispezione PDF →
              </a>
            )}
          </div>

          {/* Leasing calculator */}
          <div className="mt-10 border border-titanium/10 p-6">
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.3em] text-titanium/40">
                Leasing svizzero
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                4.5% annuo
              </p>
            </div>
            <p className="font-display text-3xl font-light mt-4 tabular-nums">
              {formatChf(lease.monthly)}
              <span className="text-sm text-titanium/40 font-sans">/mese</span>
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] text-titanium/50 mb-2">
                  <span>Anticipo</span>
                  <span className="font-mono tabular-nums">
                    {Math.round(downPct * 100)}% · {formatChf(lease.downPayment)}
                  </span>
                </div>
                <input
                  type="range"
                  min={0.1}
                  max={0.5}
                  step={0.05}
                  value={downPct}
                  onChange={(e) => setDownPct(Number(e.target.value))}
                  className="w-full accent-crimson"
                />
              </div>
              <div>
                <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] text-titanium/50 mb-2">
                  <span>Durata</span>
                  <span className="font-mono tabular-nums">{months} mesi</span>
                </div>
                <input
                  type="range"
                  min={24}
                  max={60}
                  step={12}
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full accent-crimson"
                />
              </div>
            </div>

            <p className="text-[10px] text-titanium/40 mt-4 leading-relaxed">
              Valore residuo stimato: {formatChf(lease.residual)}. Offerta soggetta ad
              approvazione. Include possibilità di riscatto finale.
            </p>
          </div>
        </div>
      </div>

      {/* Descrizione + specifiche */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 grid md:grid-cols-2 gap-16 border-t border-titanium/10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-titanium/40">
            Descrizione
          </p>
          <p className="text-titanium/70 mt-6 leading-relaxed text-base">
            {v.description}
          </p>
          {v.accidentFree && (
            <p className="text-emerald-400/80 text-xs mt-4 uppercase tracking-[0.2em]">
              ✓ Veicolo mai incidentato (perizia ASI disponibile)
            </p>
          )}
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-titanium/40">
            Specifiche
          </p>
          <dl className="mt-6 divide-y divide-titanium/10 border-y border-titanium/10">
            <Row label="Anno" value={String(v.year)} />
            <Row label="Chilometraggio" value={`${formatNumber(v.mileage)} km`} />
            <Row label="Proprietari" value={String(v.previousOwners)} />
            <Row label="Potenza" value={`${v.horsepower} CV`} />
            <Row label="Coppia" value={`${formatNumber(v.torqueNm)} Nm`} />
            <Row label="0–100 km/h" value={`${v.zeroToHundred.toFixed(1)} s`} />
            <Row label="VMax" value={`${v.topSpeedKmh} km/h`} />
            <Row label="Cambio" value={v.transmission} />
            <Row label="Trazione" value={v.drivetrain} />
            <Row label="Alimentazione" value={v.fuelType} />
            <Row label="VIN" value={v.vin} />
          </dl>
        </div>
      </div>

      <VIPBookingModal
        open={bookOpen}
        onClose={() => setBookOpen(false)}
        vehicleModel={`${v.brand} ${v.model} ${v.variant}`}
      />
    </>
  );
}

function Badge({
  icon: Icon,
  label,
  sub,
}: {
  icon: React.ElementType;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-3 border border-titanium/10 p-3">
      <Icon className="h-4 w-4 text-gold mt-0.5 shrink-0" />
      <div>
        <p className="text-[11px] uppercase tracking-[0.15em]">{label}</p>
        <p className="text-[10px] text-titanium/40 mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3 text-sm">
      <dt className="text-titanium/50">{label}</dt>
      <dd className="font-mono tabular-nums text-right">{value}</dd>
    </div>
  );
}