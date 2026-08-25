import { NextRequest } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const res = await fetch(`${BACKEND_URL}/api/auth/me`, {
    headers: { Authorization: authHeader || "" },
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}
