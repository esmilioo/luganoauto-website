import { PrismaClient, VehicleCategory } from "@prisma/client";
const prisma = new PrismaClient();

const VEHICLES = [
  { slug: "porsche-911-gt3-rs", brand: "Porsche", model: "911 GT3 RS", category: VehicleCategory.PURE_SPORT, horsepower: 525, torqueNm: 465, zeroToHundred: 3.2, topSpeedKmh: 296, basePriceChf: 241_000, heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=90", description: "Aerodinamica portata all'estremo." },
  { slug: "audi-rs-e-tron-gt", brand: "Audi", model: "RS e-tron GT", category: VehicleCategory.ELECTRIC_PRECISION, horsepower: 646, torqueNm: 830, zeroToHundred: 3.3, topSpeedKmh: 250, rangeKm: 472, basePriceChf: 158_900, heroImage: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1600&q=90", description: "L'elettrico secondo Audi Sport." },
  { slug: "bmw-m5-cs", brand: "BMW M", model: "M5 CS", category: VehicleCategory.PURE_SPORT, horsepower: 635, torqueNm: 750, zeroToHundred: 3.0, topSpeedKmh: 305, basePriceChf: 189_000, heroImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=90", description: "La M5 più estrema di sempre." },
  { slug: "porsche-cayenne-turbo-gt", brand: "Porsche", model: "Cayenne Turbo GT", category: VehicleCategory.PERFORMANCE_SUV, horsepower: 640, torqueNm: 850, zeroToHundred: 3.3, topSpeedKmh: 300, basePriceChf: 210_500, heroImage: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1600&q=90", description: "Il SUV più veloce di Zuffenhausen." },
  { slug: "bugatti-chiron-super-sport", brand: "Bugatti", model: "Chiron Super Sport", category: VehicleCategory.HYPERCAR, horsepower: 1600, torqueNm: 1600, zeroToHundred: 2.4, topSpeedKmh: 440, basePriceChf: 3_200_000, heroImage: "https://images.unsplash.com/photo-1614029351499-29526a32a69a?w=1600&q=90", description: "W16 quad-turbo da 8.0L." },
  { slug: "porsche-taycan-turbo-s", brand: "Porsche", model: "Taycan Turbo S", category: VehicleCategory.ELECTRIC_PRECISION, horsepower: 761, torqueNm: 1050, zeroToHundred: 2.8, topSpeedKmh: 260, rangeKm: 440, basePriceChf: 217_000, heroImage: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1600&q=90", description: "L'elettrico che ha riscritto le regole." },
];

const OPTION_CATEGORIES = [
  { slug: "paint", name: "Carrozzeria", options: [
      { slug: "guards-red", name: "Guards Red", priceChf: 0, hexColor: "#B12B28" },
      { slug: "gt-silver", name: "GT Silver Metallic", priceChf: 1_800, hexColor: "#B8BCC0" },
      { slug: "shark-blue", name: "Shark Blue", priceChf: 2_400, hexColor: "#1D4E7A" },
      { slug: "python-green", name: "Python Green", priceChf: 3_100, hexColor: "#3E5B3A" },
      { slug: "jet-black", name: "Jet Black Metallic", priceChf: 1_200, hexColor: "#0B0B0D" },
  ]},
  { slug: "wheels", name: "Cerchi", options: [
      { slug: "19-forged", name: '19" Forgiati', priceChf: 3_500, hexColor: null },
      { slug: "20-forged", name: '20" Forgiati', priceChf: 5_200, hexColor: null },
      { slug: "21-forged", name: '21" Forgiati', priceChf: 7_800, hexColor: null },
  ]},
  { slug: "brakes", name: "Pinze Freno", options: [
      { slug: "black", name: "Nero Lucido", priceChf: 0, hexColor: "#0B0B0D" },
      { slug: "red", name: "Rosso", priceChf: 650, hexColor: "#FF2E4C" },
      { slug: "yellow", name: "Giallo PCCB", priceChf: 8_900, hexColor: "#F5C518" },
  ]},
  { slug: "aero", name: "Pacchetti Aerodinamici", options: [
      { slug: "carbon", name: "Pacchetto Carbonio Esterno", priceChf: 9_400, hexColor: null },
      { slug: "weissach", name: "Pacchetto Weissach", priceChf: 14_800, hexColor: null },
  ]},
  { slug: "interior", name: "Interni", options: [
      { slug: "nappa-black", name: "Pelle Nappa Nera", priceChf: 0, hexColor: "#1A1A1A" },
      { slug: "nappa-red", name: "Pelle Nappa Rossa", priceChf: 4_200, hexColor: "#7A1519" },
      { slug: "alcantara", name: "Alcantara + Cuciture a Contrasto", priceChf: 6_500, hexColor: "#2A2A2A" },
  ]},
];

async function main() {
  console.log("Seeding…");
  for (const v of VEHICLES) {
    await prisma.vehicle.upsert({ where: { slug: v.slug }, update: v, create: v });
  }
  for (const c of OPTION_CATEGORIES) {
    const cat = await prisma.optionCategory.upsert({
      where: { slug: c.slug },
      update: { name: c.name },
      create: { slug: c.slug, name: c.name },
    });
    for (const o of c.options) {
      await prisma.option.upsert({
        where: { categoryId_slug: { categoryId: cat.id, slug: o.slug } },
        update: { ...o, categoryId: cat.id },
        create: { ...o, categoryId: cat.id },
      });
    }
  }
  console.log("Seed completato.");
}

main().finally(() => prisma.$disconnect());