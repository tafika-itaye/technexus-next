import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demonstracoes — TechNexus",
  description: "TechNexus — Demonstracoes de Software",
  robots: { index: false },
  alternates: {
    canonical: "https://www.technexusmw.com/pt/demos",
    languages: {
      "en": "https://www.technexusmw.com/demos",
      "pt": "https://www.technexusmw.com/pt/demos",
      "ny": "https://www.technexusmw.com/ny/demos",
    },
  },
};

export default function PTDemosPage() {
  return (
    <>
      <div style={{ background: "var(--surface-alt, #1a1a2e)", borderBottom: "1px solid var(--border)", padding: "6px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: ".82rem", flexWrap: "wrap", gap: "6px" }}>
        <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/pt">Inicio</a>
          <a href="/pt/catalogue">Catalogo IT</a>
          <a href="/pt/eis">EIS</a>
          <a href="/pt/demos" style={{ fontWeight: 700, color: "var(--fl-blue, #4f8ef7)" }}>Demos</a>
          <a href="/pt/credentials">Credenciais</a>
        </nav>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="/demos">EN</a>
          <span style={{ fontWeight: 700, color: "var(--fl-blue, #4f8ef7)" }}>PT</span>
          <a href="/ny/demos">NY</a>
        </div>
      </div>

      <main style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
        <strong style={{ fontSize: "clamp(2rem,6vw,4rem)", letterSpacing: "-.02em" }}>Em Breve</strong>
      </main>
    </>
  );
}

