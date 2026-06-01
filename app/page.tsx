// app/page.tsx — Server component: metadata + render client LinkHub.
// Semua logika tab ada di components/LinkHub.tsx (client component).

import LinkHub from "@/components/LinkHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yuken Velino | curzy.my.id",
  description:
    "Full Stack Developer · Portofolio dan link hub pribadi Yuken Velino. Project 1–12, sertifikat, bisnis, dan kontak.",
};

export default function Page() {
  return <LinkHub />;
}
