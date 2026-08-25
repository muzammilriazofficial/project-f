import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET(request: NextRequest) {
  if (!BACKEND_URL) {
    return NextResponse.json({ message: "BACKEND_URL not configured" }, { status: 500 });
  }
  try {
    const authHeader = request.headers.get("authorization");
    const res = await fetch(`${BACKEND_URL}/api/auth/me`, {
      headers: { Authorization: authHeader || "" },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json({ message: "Backend unreachable" }, { status: 502 });
  }
}
