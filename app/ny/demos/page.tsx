import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Zowonetsera — TechNexus",
  description: "TechNexus — Zowonetsera za Mapulogalamu",
  robots: { index: false },
  alternates: {
    canonical: "https://www.technexusmw.com/ny/demos",
    languages: {
      "en": "https://www.technexusmw.com/demos",
      "pt": "https://www.technexusmw.com/pt/demos",
      "ny": "https://www.technexusmw.com/ny/demos",
    },
  },
};
export default function NyDemosPage() {
  return (
    <>
      <div style={{ background: "var(--surface-alt, #1a1a2e)", borderBottom: "1px solid var(--border)", padding: "6px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: ".82rem", flexWrap: "wrap", gap: "6px" }}>
        <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/ny">Kunyumba</a>
          <a href="/ny/catalogue">Zinthu za IT</a>
          <a href="/ny/eis">EIS</a>
          <a href="/ny/demos" style={{ fontWeight: 700, color: "var(--fl-blue, #4f8ef7)" }}>Zowonetsera</a>
          <a href="/ny/credentials">Umboni</a>
        </nav>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="/demos">EN</a>
          <a href="/pt/demos">PT</a>
          <span style={{ fontWeight: 700, color: "var(--fl-blue, #4f8ef7)" }}>NY</span>
        </div>
      </div>
      <main style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
        <strong style={{ fontSize: "clamp(2rem,6vw,4rem)", letterSpacing: "-.02em" }}>Posachedwa</strong>
      </main>
    </>
  );
}
