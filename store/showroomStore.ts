"use client";

import { create } from "zustand";
import type { VehicleCategory, VehicleStatus } from "@/types";

export type ViewMode = "grid" | "table";

type ShowroomState = {
  viewMode: ViewMode;
  categories: VehicleCategory[];
  brands: string[];
  statuses: VehicleStatus[];
  minHorsepower: number;
  minYear: number;
  maxMileage: number;
  maxPriceChf: number;

  setViewMode: (m: ViewMode) => void;
  toggleCategory: (c: VehicleCategory) => void;
  toggleBrand: (b: string) => void;
  toggleStatus: (s: VehicleStatus) => void;
  setMinHorsepower: (v: number) => void;
  setMinYear: (v: number) => void;
  setMaxMileage: (v: number) => void;
  setMaxPriceChf: (v: number) => void;
  reset: () => void;
};

const DEFAULTS = {
  viewMode: "grid" as ViewMode,
  categories: [] as VehicleCategory[],
  brands: [] as string[],
  statuses: [] as VehicleStatus[],
  minHorsepower: 0,
  minYear: 1990,
  maxMileage: 200_000,
  maxPriceChf: 500_000,
};

export const useShowroomStore = create<ShowroomState>((set) => ({
  ...DEFAULTS,

  setViewMode: (viewMode) => set({ viewMode }),
  toggleCategory: (c) =>
    set((s) => ({
      categories: s.categories.includes(c)
        ? s.categories.filter((x) => x !== c)
        : [...s.categories, c],
    })),
  toggleBrand: (b) =>
    set((s) => ({
      brands: s.brands.includes(b)
        ? s.brands.filter((x) => x !== b)
        : [...s.brands, b],
    })),
  toggleStatus: (st) =>
    set((s) => ({
      statuses: s.statuses.includes(st)
        ? s.statuses.filter((x) => x !== st)
        : [...s.statuses, st],
    })),
  setMinHorsepower: (minHorsepower) => set({ minHorsepower }),
  setMinYear: (minYear) => set({ minYear }),
  setMaxMileage: (maxMileage) => set({ maxMileage }),
  setMaxPriceChf: (maxPriceChf) => set({ maxPriceChf }),
  reset: () => set(DEFAULTS),
}));