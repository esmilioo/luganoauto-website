"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MOCK_VEHICLES } from "@/lib/mockData";
import type { VehicleCard } from "@/lib/mockData";

export type ValuationRequest = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  contactMethod: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  plate?: string;
  vin?: string;
  conditionNotes?: string;
  photos: string[];
  desiredPriceChf?: number;
  status: "NEW" | "IN_REVIEW" | "OFFER_SENT" | "ACCEPTED" | "DECLINED";
  createdAt: string;
};

export type CarFinderRequest = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  contactMethod: string;
  brand: string;
  model?: string;
  yearFrom?: number;
  yearTo?: number;
  budgetMaxChf: number;
  notes?: string;
  status: "NEW" | "SEARCHING" | "FOUND" | "IMPORTED" | "CANCELLED";
  createdAt: string;
};

export type Booking = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  contactMethod: string;
  appointmentType: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  vehicleId?: string;
  vehicleModel?: string;
  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
  createdAt: string;
};

const DEMO_LEADS = {
  valuations: [
    {
      id: "val-1",
      fullName: "Marco Bianchi",
      email: "marco.bianchi@example.ch",
      phone: "+41 79 123 45 67",
      contactMethod: "WHATSAPP",
      brand: "Porsche",
      model: "911 Carrera S (991)",
      year: 2018,
      mileage: 42000,
      plate: "TI 123456",
      conditionNotes: "Tagliandi ufficiali Porsche, gomme nuove.",
      photos: [],
      desiredPriceChf: 95000,
      status: "NEW" as const,
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
    {
      id: "val-2",
      fullName: "Lucia Ferrari",
      email: "l.ferrari@example.ch",
      phone: "+41 78 987 65 43",
      contactMethod: "PHONE",
      brand: "BMW",
      model: "M4 Competition",
      year: 2020,
      mileage: 28000,
      plate: "TI 654321",
      conditionNotes: "Primo proprietario, full optional.",
      photos: [],
      status: "IN_REVIEW" as const,
      createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    },
  ],
  carFinder: [
    {
      id: "cf-1",
      fullName: "Andrea Rossi",
      email: "a.rossi@example.ch",
      phone: "+41 76 555 44 33",
      contactMethod: "WHATSAPP",
      brand: "Porsche",
      model: "911 GT3 (992)",
      yearFrom: 2022,
      yearTo: 2024,
      budgetMaxChf: 250000,
      notes: "Preferibilmente colore Shark Blue, pacchetto Weissach.",
      status: "SEARCHING" as const,
      createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    },
  ],
  bookings: [
    {
      id: "bk-1",
      fullName: "Giulia Verdi",
      email: "g.verdi@example.ch",
      phone: "+41 91 555 12 34",
      contactMethod: "WHATSAPP",
      appointmentType: "VIP_TEST_DRIVE",
      preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
      preferredTime: "14:30",
      notes: "Interessata alla Cayenne Turbo GT.",
      vehicleId: "v4",
      vehicleModel: "Porsche Cayenne Turbo GT",
      status: "PENDING" as const,
      createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
    },
  ],
};

type AdminStore = {
  vehicles: VehicleCard[];
  valuations: ValuationRequest[];
  carFinder: CarFinderRequest[];
  bookings: Booking[];

  addVehicle: (v: VehicleCard) => void;
  updateVehicle: (id: string, patch: Partial<VehicleCard>) => void;
  deleteVehicle: (id: string) => void;

  updateValuationStatus: (id: string, status: ValuationRequest["status"]) => void;
  updateCarFinderStatus: (id: string, status: CarFinderRequest["status"]) => void;
  updateBookingStatus: (id: string, status: Booking["status"]) => void;

  deleteValuation: (id: string) => void;
  deleteCarFinder: (id: string) => void;
  deleteBooking: (id: string) => void;

  resetAll: () => void;
};

export const useAdminStore = create<AdminStore>()(
  persist(
    (set) => ({
      vehicles: MOCK_VEHICLES,
      valuations: DEMO_LEADS.valuations,
      carFinder: DEMO_LEADS.carFinder,
      bookings: DEMO_LEADS.bookings,

      addVehicle: (v) => set((s) => ({ vehicles: [v, ...s.vehicles] })),
      updateVehicle: (id, patch) =>
        set((s) => ({
          vehicles: s.vehicles.map((v) => (v.id === id ? { ...v, ...patch } : v)),
        })),
      deleteVehicle: (id) =>
        set((s) => ({ vehicles: s.vehicles.filter((v) => v.id !== id) })),

      updateValuationStatus: (id, status) =>
        set((s) => ({
          valuations: s.valuations.map((v) => (v.id === id ? { ...v, status } : v)),
        })),
      updateCarFinderStatus: (id, status) =>
        set((s) => ({
          carFinder: s.carFinder.map((v) => (v.id === id ? { ...v, status } : v)),
        })),
      updateBookingStatus: (id, status) =>
        set((s) => ({
          bookings: s.bookings.map((v) => (v.id === id ? { ...v, status } : v)),
        })),

      deleteValuation: (id) =>
        set((s) => ({ valuations: s.valuations.filter((v) => v.id !== id) })),
      deleteCarFinder: (id) =>
        set((s) => ({ carFinder: s.carFinder.filter((v) => v.id !== id) })),
      deleteBooking: (id) =>
        set((s) => ({ bookings: s.bookings.filter((v) => v.id !== id) })),

      resetAll: () =>
        set({
          vehicles: MOCK_VEHICLES,
          valuations: DEMO_LEADS.valuations,
          carFinder: DEMO_LEADS.carFinder,
          bookings: DEMO_LEADS.bookings,
        }),
    }),
    { name: "lugano-admin-store" }
  )
);