import { CarFinderForm } from "@/components/import/CarFinderForm";

export default function ImportPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-[900px] px-6 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gold">
          Car Finder · Import su misura
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tighter font-light mt-4">
          Non è a stock? La troviamo noi.
        </h1>
        <p className="text-titanium/60 mt-6 max-w-xl leading-relaxed">
          Ricerca dedicata in Europa e oltre. Ci occupiamo di trattativa,
          sdoganamento, collaudo MFK e consegna a Lugano. Tu scegli, noi pensiamo al
          resto.
        </p>

        <div className="mt-16">
          <CarFinderForm />
        </div>
      </div>
    </main>
  );
}