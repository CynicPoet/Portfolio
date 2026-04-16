import { NextResponse } from "next/server";

export function GET() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivam-pokharkar.vercel.app";
  const body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
