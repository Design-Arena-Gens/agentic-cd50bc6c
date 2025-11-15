import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AccrueFlow™ v2.0 — Timeless Intelligence Platform",
  description:
    "AccrueFlow delivers autonomous, unbiased intelligence dossiers with bank-grade privacy for design and engineering leaders.",
  metadataBase: new URL("https://agentic-cd50bc6c.vercel.app"),
  openGraph: {
    title: "AccrueFlow™ v2.0 — Timeless Intelligence Platform",
    description:
      "Frictionless, bank-grade intelligence orchestrated for design and engineering teams.",
    url: "https://agentic-cd50bc6c.vercel.app",
    siteName: "AccrueFlow",
    images: [
      {
        url: "https://agentic-cd50bc6c.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AccrueFlow Digital Private Bank Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AccrueFlow™ v2.0",
    description:
      "The timeless intelligence private bank for autonomous due diligence.",
    site: "@accrueflow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
