import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName, email, phone, contactMethod, appointmentType,
      date, time, notes, vehicleModel,
    } = body;

    if (!fullName || !email || !phone || !date || !time) {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 });
    }

    // Prova a persistere su DB; se il DB non è raggiungibile, risponde comunque OK (demo).
    try {
      const booking = await prisma.vIPBooking.create({
        data: {
          fullName, email, phone, contactMethod, appointmentType,
          preferredDate: new Date(date),
          preferredTime: time,
          notes: notes ?? null,
        },
      });
      return NextResponse.json({ ok: true, id: booking.id });
    } catch (dbErr) {
      console.warn("[bookings] DB non disponibile, modalità demo:", (dbErr as Error).message);
      return NextResponse.json({ ok: true, mode: "demo", reference: `VIP-${Date.now()}` });
    }
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}