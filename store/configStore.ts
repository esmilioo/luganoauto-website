"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { calculateMonthlyLease } from "@/lib/leasing";
import type { SelectedOption } from "@/types";

type ConfigState = {
  vehicleId: string | null;
  vehicleSlug: string | null;
  basePriceChf: number;
  selectedOptions: Record<string, SelectedOption>;

  setVehicle: (id: string, slug: string, basePriceChf: number) => void;
  selectOption: (o: SelectedOption) => void;
  reset: () => void;

  totalPrice: () => number;
  monthlyLease: () => number;
  optionsList: () => SelectedOption[];
};

export const useConfigStore = create<ConfigState>()(
  persist(
    (set, get) => ({
      vehicleId: null,
      vehicleSlug: null,
      basePriceChf: 0,
      selectedOptions: {},

      setVehicle: (vehicleId, vehicleSlug, basePriceChf) =>
        set({ vehicleId, vehicleSlug, basePriceChf }),

      selectOption: (o) =>
        set((s) => ({
          selectedOptions: { ...s.selectedOptions, [o.categorySlug]: o },
        })),

      reset: () => set({ selectedOptions: {} }),

      totalPrice: () => {
        const { basePriceChf, selectedOptions } = get();
        return (
          basePriceChf +
          Object.values(selectedOptions).reduce((acc, o) => acc + o.priceChf, 0)
        );
      },

      monthlyLease: () => calculateMonthlyLease(get().totalPrice()),

      optionsList: () => Object.values(get().selectedOptions),
    }),
    {
      name: "lugano-auto-config",
      partialize: (s) => ({
        vehicleId: s.vehicleId,
        vehicleSlug: s.vehicleSlug,
        basePriceChf: s.basePriceChf,
        selectedOptions: s.selectedOptions,
      }),
    }
  )
);