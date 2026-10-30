"use client";
import { FilterBar } from "@/components/showroom/FilterBar";
import { ShowroomGrid } from "@/components/showroom/ShowroomGrid";
import { TelemetryTable } from "@/components/showroom/TelemetryTable";
import { useShowroomStore } from "@/store/showroomStore";
import { MOCK_VEHICLES } from "@/lib/mockData";

export default function ShowroomPage() {
  const viewMode = useShowroomStore((s) => s.viewMode);
  return (
    <main className="pt-24 min-h-screen">
      <header className="px-6 md:px-16 pt-16 pb-8">
        <p className="text-[10px] uppercase tracking-[0.5em] text-titanium/50">Showroom</p>
        <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tighter mt-4">
          The Collection.
        </h1>
      </header>
      <FilterBar />
      {viewMode === "grid"
        ? <ShowroomGrid vehicles={MOCK_VEHICLES} />
        : <TelemetryTable vehicles={MOCK_VEHICLES} />}
    </main>
  );
}