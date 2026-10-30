"use client";

import { useState, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAdminStore } from "@/store/adminStore";
import { Button } from "@/components/ui/Button";
import { SelectCustom } from "@/components/ui/SelectCustom";
import { Upload, X } from "lucide-react";
import type { VehicleCard } from "@/lib/mockData";
import type { VehicleCategory, VehicleStatus } from "@/types";

const INPUT =
  "w-full bg-transparent border-b border-titanium/15 focus:border-crimson outline-none py-2.5 text-sm placeholder:text-titanium/25 transition-colors";

const CATEGORY_OPTIONS = [
  { label: "Sportiva", value: "SPORTIVA" },
  { label: "SUV Performance", value: "SUV_PERFORMANCE" },
  { label: "Hypercar", value: "HYPERCAR" },
  { label: "Classica", value: "CLASSIC" },
  { label: "Gran Turismo", value: "GRAND_TOURER" },
  { label: "Elettrica", value: "ELECTRIC_PRECISION" },
];

const STATUS_OPTIONS = [
  { label: "Disponibile", value: "AVAILABLE" },
  { label: "Riservata", value: "RESERVED" },
  { label: "Venduta", value: "SOLD" },
  { label: "In Ispezione", value: "IN_INSPECTION" },
  { label: "In Arrivo", value: "COMING_SOON" },
];

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// --- COMPONENTE UPLOAD IMMAGINI ---
function ImageUploader({
  label,
  multiple = false,
  images,
  onChange,
}: {
  label: string;
  multiple?: boolean;
  images: string | string[];
  onChange: (base64: string | string[]) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const processFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    const promises = fileArray.map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises).then((base64Images) => {
      if (multiple) {
        onChange([...(images as string[]), ...base64Images]);
      } else {
        onChange(base64Images[0]);
      }
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  };

  const removeImage = (index?: number) => {
    if (multiple && index !== undefined) {
      const newImages = (images as string[]).filter((_, i) => i !== index);
      onChange(newImages);
    } else {
      onChange("");
    }
  };

  const imgList = multiple ? (images as string[]) : images ? [images as string] : [];

  return (
    <div className="space-y-4">
      <label className="text-[10px] uppercase tracking-[0.3em] text-titanium/40 block">
        {label}
      </label>

      {/* Area Drag & Drop */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border border-dashed p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${
          isDragging
            ? "border-crimson bg-crimson/5"
            : "border-titanium/20 hover:border-titanium/40 bg-white/[0.02]"
        }`}
      >
        <Upload className="h-6 w-6 text-titanium/40 mb-2" />
        <p className="text-sm text-titanium/70">
          Clicca o trascina i file qui
        </p>
        <p className="text-[10px] text-titanium/40 mt-1">
          PNG, JPG, WEBP (Max 5MB)
        </p>
        <input
          type="file"
          accept="image/*"
          multiple={multiple}
          className="hidden"
          ref={fileInputRef}
          onChange={(e) => processFiles(e.target.files)}
        />
      </div>

      {/* Anteprime */}
      {imgList.length > 0 && (
        <div className={`grid gap-3 mt-4 ${multiple ? "grid-cols-3 md:grid-cols-4" : "grid-cols-2 md:grid-cols-3"}`}>
          {imgList.map((src, i) => (
            <div key={i} className="relative aspect-video bg-graphite border border-titanium/10 group">
              {/* Uso il tag img standard per evitare errori di Next/Image con Base64 */}
              <img
                src={src}
                alt={`Preview ${i}`}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(multiple ? i : undefined)}
                className="absolute top-1 right-1 bg-noir/80 p-1 text-titanium hover:text-crimson opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
// ----------------------------------

export function VehicleForm({ vehicleId }: { vehicleId?: string }) {
  const router = useRouter();
  const vehicles = useAdminStore((s) => s.vehicles);
  const addVehicle = useAdminStore((s) => s.addVehicle);
  const updateVehicle = useAdminStore((s) => s.updateVehicle);

  const existing = useMemo(
    () => (vehicleId ? vehicles.find((v) => v.id === vehicleId) : null),
    [vehicleId, vehicles]
  );

  const [form, setForm] = useState<Partial<VehicleCard>>(
    existing ?? {
      brand: "",
      model: "",
      variant: "",
      category: "SPORTIVA",
      year: new Date().getFullYear(),
      mileage: 0,
      previousOwners: 1,
      horsepower: 0,
      torqueNm: 0,
      zeroToHundred: 0,
      topSpeedKmh: 0,
      priceChf: 0,
      vatDeductible: false,
      accidentFree: true,
      fullServiceHistory: true,
      mfkStatus: "MFK nuovo incluso",
      status: "AVAILABLE",
      heroImage: "",
      gallery: [],
      description: "",
      fuelType: "Benzina",
      transmission: "Automatico",
      drivetrain: "RWD",
      vin: "",
    }
  );

  const [saving, setSaving] = useState(false);

  const upd = (k: keyof VehicleCard, v: unknown) =>
    setForm((f) => ({ ...f, [k]: v }));

  const save = () => {
    if (!form.brand || !form.model || !form.heroImage) {
      alert("Compila almeno: Marca, Modello e carica un'Immagine principale.");
      return;
    }

    setSaving(true);

    if (existing) {
      updateVehicle(existing.id, form as VehicleCard);
    } else {
      const id = `v-${Date.now()}`;
      const slug =
        slugify(`${form.brand}-${form.model}-${form.variant}-${form.year}`) +
        "-" +
        id.slice(-4);
      const newVehicle: VehicleCard = {
        ...(form as VehicleCard),
        id,
        slug,
        vin: form.vin || `VIN${id}`,
        gallery: form.gallery || [],
      };
      addVehicle(newVehicle);
    }

    router.push("/admin/vehicles");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        save();
      }}
      className="space-y-12"
    >
      <Section title="Identificazione">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          <Field label="Marca *">
            <input
              required
              value={form.brand ?? ""}
              onChange={(e) => upd("brand", e.target.value)}
              className={INPUT}
              placeholder="Porsche"
            />
          </Field>
          <Field label="Modello *">
            <input
              required
              value={form.model ?? ""}
              onChange={(e) => upd("model", e.target.value)}
              className={INPUT}
              placeholder="911"
            />
          </Field>
          <Field label="Variante">
            <input
              value={form.variant ?? ""}
              onChange={(e) => upd("variant", e.target.value)}
              className={INPUT}
              placeholder="GT3 RS (992)"
            />
          </Field>
          
          {/* SELECT CUSTOM: Categoria */}
          <Field label="Categoria">
            <SelectCustom
              label=""
              options={CATEGORY_OPTIONS}
              value={form.category as string}
              onChange={(v) => upd("category", v)}
            />
          </Field>

          <Field label="Anno">
            <input
              type="number"
              value={form.year ?? ""}
              onChange={(e) => upd("year", Number(e.target.value))}
              className={INPUT}
            />
          </Field>
          <Field label="VIN / Telaio">
            <input
              value={form.vin ?? ""}
              onChange={(e) => upd("vin", e.target.value)}
              className={INPUT}
              placeholder="WP0ZZZ99Z…"
            />
          </Field>
        </div>
      </Section>

      <Section title="Prezzo & fiscalità">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          <Field label="Prezzo CHF">
            <input
              type="number"
              value={form.priceChf ?? 0}
              onChange={(e) => upd("priceChf", Number(e.target.value))}
              className={INPUT}
            />
          </Field>
          <Field label="IVA">
            <label className="flex items-center gap-3 mt-3 cursor-pointer">
              <input
                type="checkbox"
                checked={!!form.vatDeductible}
                onChange={(e) => upd("vatDeductible", e.target.checked)}
                className="accent-crimson w-4 h-4"
              />
              <span className="text-sm text-titanium/70">IVA esposta / deducibile</span>
            </label>
          </Field>
        </div>
      </Section>

      <Section title="Storico & condizioni">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          <Field label="Chilometraggio">
            <input
              type="number"
              value={form.mileage ?? 0}
              onChange={(e) => upd("mileage", Number(e.target.value))}
              className={INPUT}
            />
          </Field>
          <Field label="Proprietari precedenti">
            <input
              type="number"
              value={form.previousOwners ?? 1}
              onChange={(e) => upd("previousOwners", Number(e.target.value))}
              className={INPUT}
            />
          </Field>
          <Field label="Stato MFK">
            <input
              value={form.mfkStatus ?? ""}
              onChange={(e) => upd("mfkStatus", e.target.value)}
              className={INPUT}
              placeholder="MFK nuovo incluso"
            />
          </Field>
          <Field label="Note condizioni">
            <label className="flex items-center gap-3 mt-3 cursor-pointer">
              <input
                type="checkbox"
                checked={!!form.accidentFree}
                onChange={(e) => upd("accidentFree", e.target.checked)}
                className="accent-crimson w-4 h-4"
              />
              <span className="text-sm text-titanium/70">Mai incidentato</span>
            </label>
            <label className="flex items-center gap-3 mt-2 cursor-pointer">
              <input
                type="checkbox"
                checked={!!form.fullServiceHistory}
                onChange={(e) => upd("fullServiceHistory", e.target.checked)}
                className="accent-crimson w-4 h-4"
              />
              <span className="text-sm text-titanium/70">Libretto tagliandi completo</span>
            </label>
          </Field>
        </div>
      </Section>

      <Section title="Dati tecnici">
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-6">
          <Field label="Potenza (CV)">
            <input
              type="number"
              value={form.horsepower ?? 0}
              onChange={(e) => upd("horsepower", Number(e.target.value))}
              className={INPUT}
            />
          </Field>
          <Field label="Coppia (Nm)">
            <input
              type="number"
              value={form.torqueNm ?? 0}
              onChange={(e) => upd("torqueNm", Number(e.target.value))}
              className={INPUT}
            />
          </Field>
          <Field label="0–100 (s)">
            <input
              type="number"
              step="0.1"
              value={form.zeroToHundred ?? 0}
              onChange={(e) => upd("zeroToHundred", Number(e.target.value))}
              className={INPUT}
            />
          </Field>
          <Field label="VMax (km/h)">
            <input
              type="number"
              value={form.topSpeedKmh ?? 0}
              onChange={(e) => upd("topSpeedKmh", Number(e.target.value))}
              className={INPUT}
            />
          </Field>
          <Field label="Alimentazione">
            <input
              value={form.fuelType ?? ""}
              onChange={(e) => upd("fuelType", e.target.value)}
              className={INPUT}
              placeholder="Benzina"
            />
          </Field>
          <Field label="Cambio">
            <input
              value={form.transmission ?? ""}
              onChange={(e) => upd("transmission", e.target.value)}
              className={INPUT}
              placeholder="Automatico"
            />
          </Field>
          <Field label="Trazione">
            <input
              value={form.drivetrain ?? ""}
              onChange={(e) => upd("drivetrain", e.target.value)}
              className={INPUT}
              placeholder="RWD / AWD"
            />
          </Field>
          <Field label="Autonomia (km)">
            <input
              type="number"
              value={form.rangeKm ?? ""}
              onChange={(e) =>
                upd("rangeKm", e.target.value ? Number(e.target.value) : undefined)
              }
              className={INPUT}
              placeholder="Opzionale"
            />
          </Field>
        </div>
      </Section>

      <Section title="Media & descrizione">
        <div className="space-y-8">
          {/* UPLOAD IMMAGINE PRINCIPALE */}
          <ImageUploader
            label="Immagine principale *"
            images={form.heroImage ?? ""}
            onChange={(base64) => upd("heroImage", base64)}
          />

          {/* UPLOAD GALLERIA */}
          <ImageUploader
            label="Galleria (fino a 10 foto)"
            multiple
            images={form.gallery ?? []}
            onChange={(base64Array) => upd("gallery", base64Array)}
          />

          <Field label="Descrizione">
            <textarea
              value={form.description ?? ""}
              onChange={(e) => upd("description", e.target.value)}
              rows={4}
              className={INPUT + " resize-none mt-2"}
            />
          </Field>
        </div>
      </Section>

      <Section title="Stato & pubblicazione">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          {/* SELECT CUSTOM: Stato */}
          <Field label="Stato">
            <SelectCustom
              label=""
              options={STATUS_OPTIONS}
              value={form.status as string}
              onChange={(v) => upd("status", v)}
            />
          </Field>
        </div>
      </Section>

      <div className="flex items-center justify-between pt-6 border-t border-titanium/10">
        <button
          type="button"
          onClick={() => router.push("/admin/vehicles")}
          className="text-[11px] uppercase tracking-[0.28em] text-titanium/50 hover:text-titanium transition-colors"
        >
          ← Annulla
        </button>
        <Button type="submit" variant="crimson" disabled={saving}>
          {saving ? "Salvataggio…" : existing ? "Aggiorna veicolo" : "Crea veicolo"}
        </Button>
      </div>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[10px] uppercase tracking-[0.35em] text-titanium/40 mb-6 pb-3 border-b border-titanium/10">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.3em] text-titanium/40 block mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}