import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OCTAVE — Founding Memberships",
  description: "Atlanta’s anime, manga, and alternative-culture home — Founding Membership drop."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
