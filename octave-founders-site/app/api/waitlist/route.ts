import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });
    }

    // Option A (recommended): forward to a form endpoint (Formspree, etc.)
    // Set WAITLIST_ENDPOINT in Vercel: Settings → Environment Variables.
    const endpoint = process.env.WAITLIST_ENDPOINT;

    if (endpoint) {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: source || "octave-founders" })
      });

      if (!res.ok) {
        return NextResponse.json({ ok: false, error: "Upstream failed" }, { status: 502 });
      }
    } else {
      // Fallback: no endpoint configured. Still return ok so you can test the site.
      console.log("[waitlist] email:", email, "source:", source);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
