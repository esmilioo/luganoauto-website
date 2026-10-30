import Image from "next/image";

const MILESTONES = [
  { year: "1992", title: "Le origini", desc: "Nasce a Lugano come officina specializzata in vetture sportive tedesche." },
  { year: "2005", title: "Showroom", desc: "Apertura del flagship store in Via Nassa, primo concessionario Porsche del Ticino." },
  { year: "2015", title: "Performance Division", desc: "Debutta la divisione dedicata a vetture da pista e track-day." },
  { year: "2024", title: "Digital Flagship", desc: "Nasce Lugano Auto Performance & Heritage: configuratore 3D e concierge digitale." },
];

export default function HeritagePage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.5em] text-titanium/50">Since 1992</p>
        <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tighter mt-4">
          Heritage<span className="text-crimson">.</span>
        </h1>
        <p className="text-titanium/60 max-w-xl mt-8 leading-relaxed text-lg">
          Tre decenni di passione per l&apos;ingegneria meccanica. Una storia che continua
          a scriversi attraverso ogni vettura che passa dal nostro showroom.
        </p>

        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mt-16">
          <Image
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=90"
            alt="Lugano Auto Heritage"
            fill
            className="object-cover"
            sizes="(max-width:1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-transparent" />
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {MILESTONES.map((m) => (
            <div key={m.year} className="border-t border-titanium/10 pt-6">
              <p className="font-mono text-sm text-gold">{m.year}</p>
              <h3 className="font-display text-2xl tracking-tight mt-2">{m.title}</h3>
              <p className="text-titanium/60 mt-3 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}