"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useMemo, useState } from "react";
import { useConfigStore } from "@/store/configStore";
import { calculateMonthlyLease } from "@/lib/leasing";
import { formatChf, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { VIPBookingModal } from "@/components/concierge/VIPBookingModal";

type OptionCat = {
  slug: string;
  name: string;
  options: { id: string; name: string; priceChf: number; hexColor?: string | null }[];
};

const OPTION_CATEGORIES: OptionCat[] = [
  {
    slug: "paint",
    name: "Carrozzeria",
    options: [
      { id: "p1", name: "Guards Red", priceChf: 0, hexColor: "#B12B28" },
      { id: "p2", name: "GT Silver", priceChf: 1800, hexColor: "#B8BCC0" },
      { id: "p3", name: "Shark Blue", priceChf: 2400, hexColor: "#1D4E7A" },
      { id: "p4", name: "Python Green", priceChf: 3100, hexColor: "#3E5B3A" },
      { id: "p5", name: "Jet Black", priceChf: 1200, hexColor: "#0B0B0D" },
    ],
  },
  {
    slug: "wheels",
    name: "Cerchi",
    options: [
      { id: "w1", name: '19" Forgiati', priceChf: 3500 },
      { id: "w2", name: '20" Forgiati', priceChf: 5200 },
      { id: "w3", name: '21" Forgiati', priceChf: 7800 },
    ],
  },
  {
    slug: "brakes",
    name: "Pinze Freno",
    options: [
      { id: "b1", name: "Nero Lucido", priceChf: 0, hexColor: "#0B0B0D" },
      { id: "b2", name: "Rosso", priceChf: 650, hexColor: "#FF2E4C" },
      { id: "b3", name: "Giallo PCCB", priceChf: 8900, hexColor: "#F5C518" },
    ],
  },
  {
    slug: "interior",
    name: "Interni",
    options: [
      { id: "i1", name: "Nappa Nera", priceChf: 0, hexColor: "#1A1A1A" },
      { id: "i2", name: "Nappa Rossa", priceChf: 4200, hexColor: "#7A1519" },
      { id: "i3", name: "Alcantara", priceChf: 6500, hexColor: "#2A2A2A" },
    ],
  },
];

function Car({ color }: { color: string }) {
  return (
    <group rotation={[0, -Math.PI / 4, 0]}>
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[4, 0.6, 1.8]} />
        <meshStandardMaterial color={color} metalness={0.85} roughness={0.22} />
      </mesh>
      <mesh position={[-0.2, 1.1, 0]} castShadow>
        <boxGeometry args={[2.4, 0.55, 1.5]} />
        <meshStandardMaterial color={color} metalness={0.85} roughness={0.22} />
      </mesh>
      {[
        [1.3, 0.5],
        [1.3, -0.5],
        [-1.3, 0.5],
        [-1.3, -0.5],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.35, z]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.25, 32]} />
          <meshStandardMaterial color="#0B0B0D" metalness={0.4} roughness={0.85} />
        </mesh>
      ))}
    </group>
  );
}

export function CarConfigurator() {
  const { selectedOptions, selectOption, totalPrice, basePriceChf, setVehicle } =
    useConfigStore();
  const [bookOpen, setBookOpen] = useState(false);

  useMemo(() => {
    setVehicle("demo", "porsche-911-gt3-rs", 241000);
  }, [setVehicle]);

  const paint = selectedOptions["paint"]?.hexColor ?? "#B8BCC0";
  const total = totalPrice();
  const lease = calculateMonthlyLease(total);

  const saveConfig = () => {
    const hash = Math.random().toString(36).slice(2, 10).toUpperCase();
    alert(`Configurazione salvata · ID: LUG-${hash}`);
  };

  return (
    <div className="grid lg:grid-cols-[1fr_460px] min-h-screen">
      {/* Canvas */}
      <div className="relative bg-[radial-gradient(ellipse_at_center,#14161d_0%,#08080a_85%)] min-h-[60vh] lg:min-h-0">
        <Canvas
          shadows
          camera={{ position: [6, 3, 6], fov: 40 }}
          className="!absolute inset-0"
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 5]} intensity={1.15} castShadow />
          <spotLight
            position={[-5, 5, 5]}
            intensity={0.7}
            angle={0.4}
            penumbra={1}
            color="#FF2E4C"
          />
          <Car color={paint} />
          <Environment preset="city" />
          <OrbitControls
            enablePan={false}
            minDistance={5}
            maxDistance={10}
            autoRotate
            autoRotateSpeed={0.4}
          />
        </Canvas>
        <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.3em] text-titanium/30">
          Drag · Rotate · Scroll · Zoom
        </div>
      </div>

      {/* Panel solido */}
      <aside className="border-l border-titanium/10 bg-graphite p-8 lg:p-10 overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.4em] text-titanium/40">
          Configurator
        </p>
        <h1 className="font-display text-3xl font-light tracking-tight mt-3">
          Porsche 911 GT3 RS
        </h1>
        <p className="font-mono text-xs text-titanium/40 mt-2 tabular-nums">
          Base · {formatChf(basePriceChf)}
        </p>

        <div className="mt-10 space-y-8">
          {OPTION_CATEGORIES.map((cat) => (
            <div key={cat.slug}>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-titanium/40 mb-4">
                {cat.name}
              </h3>
              <div className="divide-y divide-titanium/10 border-y border-titanium/10">
                {cat.options.map((opt) => {
                  const selected = selectedOptions[cat.slug]?.optionId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      data-magnetic
                      onClick={() =>
                        selectOption({
                          categorySlug: cat.slug,
                          optionId: opt.id,
                          name: opt.name,
                          priceChf: opt.priceChf,
                          hexColor: opt.hexColor,
                        })
                      }
                      className={cn(
                        "w-full flex items-center gap-4 py-3 text-left transition-colors",
                        selected ? "text-titanium" : "text-titanium/60 hover:text-titanium"
                      )}
                    >
                      {opt.hexColor ? (
                        <span
                          className="h-4 w-4 rounded-full border border-titanium/20"
                          style={{ backgroundColor: opt.hexColor }}
                        />
                      ) : (
                        <span className="h-4 w-4" />
                      )}
                      <span className="flex-1 text-sm">{opt.name}</span>
                      <span className="font-mono text-[11px] text-titanium/40 tabular-nums">
                        {opt.priceChf === 0 ? "—" : `+${formatChf(opt.priceChf)}`}
                      </span>
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          selected ? "bg-crimson" : "bg-transparent"
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-titanium/10 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-titanium/50">Totale</span>
            <span className="font-mono tabular-nums">{formatChf(total)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-titanium/50">Leasing 3.9% · 48m</span>
            <span className="font-mono tabular-nums text-gold">
              {formatChf(lease)}/mese
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={saveConfig}>
            Salva ID
          </Button>
          <Button variant="crimson" onClick={() => setBookOpen(true)}>
            Prenota build
          </Button>
        </div>
        <Button
          variant="ghost"
          className="w-full mt-3"
          onClick={() => alert("Scheda PDF in preparazione…")}
        >
          Genera scheda PDF →
        </Button>
      </aside>

      <VIPBookingModal
        open={bookOpen}
        onClose={() => setBookOpen(false)}
        vehicleModel="Porsche 911 GT3 RS"
      />
    </div>
  );
}