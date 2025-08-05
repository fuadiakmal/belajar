import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: "ini dari api.",
  });
}

export async function POST(req) {
  return NextResponse.json({
    data: await req.json(),
  });
}
