import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechNexus — Tekinoloje, Chilankhulo ndi Zomangamanga",
  description: "Wogulitsa wa Africa yonse wa hardware ya IT, kupanga PC, kupanga software, ntchito za chilankhulo ndi zida za chipatala. Olembedwa PPDA. Blantyre, Malawi.",
  alternates: { canonical: "https://www.technexusmw.com/ny" },
};

export default function NyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
