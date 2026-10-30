import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MOCK_VEHICLES } from "@/lib/mockData";

export async function GET() {
  try {
    const vehicles = await prisma.vehicle.findMany({ where: { available: true } });
    return NextResponse.json(vehicles);
  } catch {
    return NextResponse.json(MOCK_VEHICLES);
  }
}