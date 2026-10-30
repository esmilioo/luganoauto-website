"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SelectCustom } from "@/components/ui/SelectCustom";

const BRAND_OPTIONS = [
  { label: "Tutte", value: "Tutte" },
  { label: "Porsche", value: "Porsche" },
  { label: "Audi", value: "Audi" },
  { label: "BMW M", value: "BMW M" },
  { label: "Mercedes-AMG", value: "Mercedes-AMG" },
];

const YEAR_OPTIONS = [
  { label: "Tutti", value: "Tutti" },
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
  { label: "2021", value: "2021" },
  { label: "2020", value: "2020" },
  { label: "2015", value: "2015" },
  { label: "2010", value: "2010" },
  { label: "Pre-2000", value: "Pre-2000" },
];

const TYPE_OPTIONS = [
  { label: "Tutte", value: "all" },
  { label: "Sportiva", value: "SPORTIVA" },
  { label: "SUV", value: "SUV_PERFORMANCE" },
  { label: "Classica", value: "CLASSIC" },
  { label: "Hypercar", value: "HYPERCAR" },
];

const INPUT =
  "w-full bg-transparent border-b border-titanium/30 py-2 text-sm text-titanium placeholder:text-titanium/25 outline-none focus:border-crimson transition-colors";

export function QuickSearch() {
  const router = useRouter();
  const [brand, setBrand] = useState("Tutte");
  const [year, setYear] = useState("Tutti");
  const [maxPrice, setMaxPrice] = useState("");
  const [type, setType] = useState("all");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (brand !== "Tutte") params.set("brand", brand);
    if (year !== "Tutti") params.set("year", year);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (type !== "all") params.set("type", type);
    router.push(`/showroom?${params.toString()}`);
  };

  return (
    <div className="p-1 border border-titanium/15 bg-noir/70 backdrop-blur-lg">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
        <div className="px-5 py-4 md:border-r border-titanium/10 border-b md:border-b-0">
          <SelectCustom
            label="Marca"
            options={BRAND_OPTIONS}
            value={brand}
            onChange={setBrand}
          />
        </div>

        <div className="px-5 py-4 md:border-r border-titanium/10 border-b md:border-b-0">
          <SelectCustom
            label="Anno min"
            options={YEAR_OPTIONS}
            value={year}
            onChange={setYear}
          />
        </div>

        <div className="px-5 py-4 md:border-r border-titanium/10 border-b md:border-b-0">
          <label className="text-[9px] uppercase tracking-[0.3em] text-titanium/40 block mb-1">
            Budget max CHF
          </label>
          <input
            type="number"
            placeholder="Es. 250000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className={INPUT}
          />
        </div>

        <div className="px-5 py-4 md:border-r border-titanium/10 border-b md:border-b-0">
          <SelectCustom
            label="Tipo"
            options={TYPE_OPTIONS}
            value={type}
            onChange={setType}
          />
        </div>

        <div className="p-3">
          <Button variant="crimson" onClick={handleSearch} className="w-full h-full">
            <Search className="h-4 w-4" />
            Cerca
          </Button>
        </div>
      </div>
    </div>
  );
}