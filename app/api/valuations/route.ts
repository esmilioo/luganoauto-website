import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      contactMethod,
      brand,
      model,
      year,
      mileage,
      plate,
      vin,
      conditionNotes,
      photos,
      desiredPriceChf,
    } = body;

    if (!fullName || !email || !phone || !brand || !model || !year || !mileage) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    try {
      const request = await prisma.valuationRequest.create({
        data: {
          fullName,
          email,
          phone,
          contactMethod,
          brand,
          model,
          year: Number(year),
          mileage: Number(mileage),
          plate: plate ?? null,
          vin: vin ?? null,
          conditionNotes: conditionNotes ?? null,
          photos: Array.isArray(photos) ? photos : [],
          desiredPriceChf: desiredPriceChf ?? null,
        },
      });
      return NextResponse.json({ ok: true, id: request.id });
    } catch (dbErr) {
      console.warn(
        "[valuations] DB non disponibile, demo mode:",
        (dbErr as Error).message
      );
      return NextResponse.json({
        ok: true,
        mode: "demo",
        reference: `VAL-${Date.now()}`,
      });
    }
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}