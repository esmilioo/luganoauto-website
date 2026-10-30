export type VehicleCategory =
  | "SPORTIVA"
  | "SUV_PERFORMANCE"
  | "HYPERCAR"
  | "CLASSIC"
  | "GRAND_TOURER"
  | "ELECTRIC_PRECISION";

export type VehicleStatus =
  | "AVAILABLE"
  | "RESERVED"
  | "SOLD"
  | "IN_INSPECTION"
  | "COMING_SOON";

export type AppointmentType =
  | "VIP_TEST_DRIVE"
  | "SALONE_VISIT"
  | "TRADE_IN_EVALUATION"
  | "FINANCIAL_CONSULTING";

export type ContactMethod = "WHATSAPP" | "PHONE" | "EMAIL";

export type SelectedUpgrade = {
  categorySlug: string;
  optionId: string;
  name: string;
  priceChf: number;
  hexColor?: string | null;
};