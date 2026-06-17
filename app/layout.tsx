// app/layout.tsx — Root layout dengan metadata SEO lengkap

import type { Metadata, Viewport } from "next";
import "./globals.css";

// ─── SEO Metadata ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Yuken Velino | curzy.dev",
  description: "Portfolio Hub",
  icons: {
    icon: "/avatar.jpg",
    shortcut: "/avatar.jpg",
    apple: "/avatar.jpg",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
