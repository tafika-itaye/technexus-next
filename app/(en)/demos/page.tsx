import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demos — TechNexus",
  description: "TechNexus — Software Demos",
  robots: { index: false },
  alternates: {
    canonical: "https://www.technexusmw.com/demos",
    languages: {
      "en": "https://www.technexusmw.com/demos",
      "pt": "https://www.technexusmw.com/pt/demos",
      "ny": "https://www.technexusmw.com/ny/demos",
    },
  },
};

export default function DemosPage() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
      <strong style={{ fontSize: "clamp(2rem,6vw,4rem)", letterSpacing: "-0.02em", color: "var(--text)" }}>
        Coming Soon
      </strong>
    </div>
  );
}
