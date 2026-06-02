// app/layout.tsx — Root layout dengan metadata SEO lengkap

import type { Metadata, Viewport } from "next";
import "./globals.css";

// ─── SEO Metadata ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Yuken Velino | curzy.my.id",
  description:
    "Full Stack Developer · Portofolio dan link hub pribadi Yuken Velino. Project 1–12, sertifikat, bisnis, dan kontak.",
  keywords: [
    "Yuken Velino",
    "curzy",
    "portofolio",
    "full stack developer",
    "link hub",
    "curzy.my.id",
  ],
  authors: [{ name: "Yuken Velino", url: "https://curzy.my.id" }],
  creator: "Yuken Velino",
  metadataBase: new URL("https://curzy.my.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://curzy.my.id",
    title: "Yuken Velino | curzy.my.id",
    description:
      "Full Stack Developer · Portofolio dan link hub pribadi Yuken Velino.",
    siteName: "curzy.my.id",
  },
  twitter: {
    card: "summary",
    title: "Yuken Velino | curzy.my.id",
    description: "Full Stack Developer · curzy.my.id",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/avatar.jpg",
  },
};

// ─── Viewport ─────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Jangan nonaktifkan zoom — accessibility requirement (ui-ux-pro-max rule)
};

// ─── Root Layout ──────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Preconnect Google Fonts untuk performa optimal */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Favicon */}
        <link rel="icon" href="/avatar.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
