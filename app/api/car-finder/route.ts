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
      yearFrom,
      yearTo,
      budgetMaxChf,
      preferredCategory,
      notes,
    } = body;

    if (!fullName || !email || !phone || !brand || !budgetMaxChf) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    try {
      const request = await prisma.carFinderRequest.create({
        data: {
          fullName,
          email,
          phone,
          contactMethod,
          brand,
          model: model ?? null,
          yearFrom: yearFrom ? Number(yearFrom) : null,
          yearTo: yearTo ? Number(yearTo) : null,
          budgetMaxChf: Number(budgetMaxChf),
          preferredCategory: preferredCategory ?? null,
          notes: notes ?? null,
        },
      });
      return NextResponse.json({ ok: true, id: request.id });
    } catch (dbErr) {
      console.warn(
        "[car-finder] DB non disponibile, demo mode:",
        (dbErr as Error).message
      );
      return NextResponse.json({
        ok: true,
        mode: "demo",
        reference: `FIND-${Date.now()}`,
      });
    }
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}