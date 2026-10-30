import { CarValuationForm } from "@/components/sell/CarValuationForm";

export default function SellPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-[900px] px-6 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gold">
          Compro Usato High-Ticket
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tighter font-light mt-4">
          Vendi o permuta la tua auto.
        </h1>
        <p className="text-titanium/60 mt-6 max-w-xl leading-relaxed">
          Valutazione gratuita in 24h. Acquistiamo supercar, sportive e vetture di
          prestigio in Canton Ticino con pagamento immediato e passaggio di proprietà
          incluso.
        </p>

        <div className="mt-16">
          <CarValuationForm />
        </div>
      </div>
    </main>
  );
}