import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { calculateMonthlyLease } from "@/lib/leasing";

export async function POST(req: Request) {
  try {
    const { vehicleId, totalPriceChf, optionIds } = await req.json();
    if (!vehicleId || !totalPriceChf) {
      return NextResponse.json({ error: "Dati mancanti" }, { status: 400 });
    }
    const hashId = `LUG-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
    const monthly = calculateMonthlyLease(totalPriceChf);

    try {
      const cfg = await prisma.vehicleConfiguration.create({
        data: {
          hashId,
          vehicleId,
          totalPriceChf,
          monthlyLeaseChf: monthly,
          options: {
            create: (optionIds ?? []).map((optionId: string) => ({ optionId })),
          },
        },
      });
      return NextResponse.json({ ok: true, hashId: cfg.hashId, monthlyLeaseChf: monthly });
    } catch (dbErr) {
      console.warn("[config] DB non disponibile, demo mode:", (dbErr as Error).message);
      return NextResponse.json({ ok: true, mode: "demo", hashId, monthlyLeaseChf: monthly });
    }
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}