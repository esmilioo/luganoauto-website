import type { VehicleCategory, VehicleStatus } from "@/types";

export type VehicleCard = {
  id: string;
  slug: string;
  vin: string;
  brand: string;
  model: string;
  variant: string;
  category: VehicleCategory;
  year: number;
  mileage: number;
  previousOwners: number;
  horsepower: number;
  torqueNm: number;
  zeroToHundred: number;
  topSpeedKmh: number;
  rangeKm?: number;
  priceChf: number;
  vatDeductible: boolean;
  accidentFree: boolean;
  fullServiceHistory: boolean;
  mfkStatus: string;
  status: VehicleStatus;
  heroImage: string;
  gallery: string[];
  description: string;
  fuelType: string;
  transmission: string;
  drivetrain: string;
};

export const MOCK_VEHICLES: VehicleCard[] = [
  {
    id: "v1",
    slug: "porsche-911-gt3-rs-2021",
    vin: "WP0ZZZ99ZMS1XXXXX",
    brand: "Porsche",
    model: "911",
    variant: "GT3 RS (992)",
    category: "SPORTIVA",
    year: 2021,
    mileage: 12400,
    previousOwners: 1,
    horsepower: 525,
    torqueNm: 465,
    zeroToHundred: 3.2,
    topSpeedKmh: 296,
    priceChf: 219000,
    vatDeductible: false,
    accidentFree: true,
    fullServiceHistory: true,
    mfkStatus: "MFK nuovo incluso",
    status: "AVAILABLE",
    heroImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=90",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=90",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=90",
    ],
    description:
      "Esemplare unico, primo proprietario, condizioni da concorso. Weissach Package, full PPF, gomme nuove.",
    fuelType: "Benzina",
    transmission: "PDK 7 rapporti",
    drivetrain: "RWD",
  },
  {
    id: "v2",
    slug: "audi-rs-e-tron-gt-2022",
    vin: "WAUZZZGE1NB0XXXXX",
    brand: "Audi",
    model: "RS e-tron GT",
    variant: "quattro",
    category: "ELECTRIC_PRECISION",
    year: 2022,
    mileage: 28500,
    previousOwners: 1,
    horsepower: 646,
    torqueNm: 830,
    zeroToHundred: 3.3,
    topSpeedKmh: 250,
    rangeKm: 472,
    priceChf: 119500,
    vatDeductible: true,
    accidentFree: true,
    fullServiceHistory: true,
    mfkStatus: "05/2025",
    status: "AVAILABLE",
    heroImage:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1600&q=90",
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1600&q=90",
    ],
    description:
      "Unico proprietario, tagliandi Audi ufficiali, batteria 92% SoH certificata. Cerchi 21\" forgiati.",
    fuelType: "Elettrico",
    transmission: "Automatico",
    drivetrain: "AWD",
  },
  {
    id: "v3",
    slug: "bmw-m5-cs-2022",
    vin: "WBSJF0C50NCKXXXXX",
    brand: "BMW M",
    model: "M5",
    variant: "CS",
    category: "SPORTIVA",
    year: 2022,
    mileage: 19800,
    previousOwners: 1,
    horsepower: 635,
    torqueNm: 750,
    zeroToHundred: 3.0,
    topSpeedKmh: 305,
    priceChf: 149000,
    vatDeductible: false,
    accidentFree: true,
    fullServiceHistory: true,
    mfkStatus: "MFK nuovo incluso",
    status: "RESERVED",
    heroImage:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=90",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=90",
    ],
    description:
      "La M5 più estrema mai prodotta. Sedili carbonio, freni carboceramici, unico proprietario.",
    fuelType: "Benzina",
    transmission: "Automatico ZF8",
    drivetrain: "AWD",
  },
  {
    id: "v4",
    slug: "porsche-cayenne-turbo-gt-2022",
    vin: "WP1ZZZ9YZNDAXXXXX",
    brand: "Porsche",
    model: "Cayenne",
    variant: "Turbo GT",
    category: "SUV_PERFORMANCE",
    year: 2022,
    mileage: 34200,
    previousOwners: 2,
    horsepower: 640,
    torqueNm: 850,
    zeroToHundred: 3.3,
    topSpeedKmh: 300,
    priceChf: 165000,
    vatDeductible: true,
    accidentFree: true,
    fullServiceHistory: true,
    mfkStatus: "02/2026",
    status: "AVAILABLE",
    heroImage:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1600&q=90",
      "https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=1600&q=90",
    ],
    description:
      "Il SUV più veloce di Zuffenhausen. Pacchetto Sport Chrono, sedili posteriori sportivi.",
    fuelType: "Benzina",
    transmission: "Tiptronic S 8",
    drivetrain: "AWD",
  },
  {
    id: "v5",
    slug: "mercedes-amg-gt-black-series-2021",
    vin: "WDDYJ7KA1NA0XXXXX",
    brand: "Mercedes-AMG",
    model: "GT",
    variant: "Black Series",
    category: "HYPERCAR",
    year: 2021,
    mileage: 8900,
    previousOwners: 1,
    horsepower: 730,
    torqueNm: 800,
    zeroToHundred: 3.2,
    topSpeedKmh: 325,
    priceChf: 289000,
    vatDeductible: false,
    accidentFree: true,
    fullServiceHistory: true,
    mfkStatus: "MFK nuovo incluso",
    status: "AVAILABLE",
    heroImage:
      "https://images.unsplash.com/photo-1614029351499-29526a32a69a?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1614029351499-29526a32a69a?w=1600&q=90",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600&q=90",
    ],
    description:
      "Una delle 1.700 Black Series prodotte. Stato collezionistico, mai pista, libretto completo.",
    fuelType: "Benzina",
    transmission: "AMG Speedshift DCT 7",
    drivetrain: "RWD",
  },
  {
    id: "v6",
    slug: "porsche-911-carrera-3-2-1987",
    vin: "WP0ZZZ91ZHS1XXXXX",
    brand: "Porsche",
    model: "911",
    variant: "Carrera 3.2 (G-Series)",
    category: "CLASSIC",
    year: 1987,
    mileage: 98000,
    previousOwners: 3,
    horsepower: 231,
    torqueNm: 284,
    zeroToHundred: 5.4,
    topSpeedKmh: 245,
    priceChf: 89000,
    vatDeductible: false,
    accidentFree: true,
    fullServiceHistory: true,
    mfkStatus: "MFK nuovo incluso",
    status: "COMING_SOON",
    heroImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=90",
    ],
    description:
      "G-Series matching numbers, restaurata conservativamente. Collezione Ticino, ASI-ready.",
    fuelType: "Benzina",
    transmission: "G50 5 marce",
    drivetrain: "RWD",
  },
];