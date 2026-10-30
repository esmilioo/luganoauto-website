/**
 * Leasing su NUOVO (formula francese standard).
 * Default: anticipo 10%, 3.9% annuo, 48 mesi.
 */
export function calculateMonthlyLease(
  totalPriceChf: number,
  downPaymentPct = 0.1,
  annualRatePct = 3.9,
  months = 48
): number {
  if (totalPriceChf <= 0) return 0;
  const down = totalPriceChf * downPaymentPct;
  const financed = totalPriceChf - down;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return Math.round(financed / months);
  return Math.round((financed * r) / (1 - Math.pow(1 + r, -months)));
}

/**
 * Leasing su USATO — formula standard svizzera con valore residuo.
 * Il residuo dipende dall'età dell'auto (più vecchia → più basso).
 */
export function calculateUsedLease(
  priceChf: number,
  vehicleYear: number,
  downPaymentPct = 0.15,
  annualRatePct = 4.5,
  months = 48
): { monthly: number; residual: number; downPayment: number } {
  if (priceChf <= 0) {
    return { monthly: 0, residual: 0, downPayment: 0 };
  }
  const age = Math.max(0, new Date().getFullYear() - vehicleYear);
  // 75% a 0 anni, -5% per anno, minimo 35%
  const residualPct = Math.max(0.35, 0.75 - age * 0.05);
  const residual = Math.round(priceChf * residualPct);
  const downPayment = Math.round(priceChf * downPaymentPct);

  const amortizedBase = priceChf - downPayment - residual;
  const depreciation = amortizedBase / months;
  const rentCharge = ((priceChf - downPayment + residual) * annualRatePct) / 2400;
  const monthly = Math.round(depreciation + rentCharge);

  return { monthly, residual, downPayment };
}