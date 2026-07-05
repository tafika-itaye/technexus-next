import type { Metadata } from "next";
import EisClient from "../../eis/EisClient";

export const metadata: Metadata = {
  title: "EIS Bridge e Software POS | TechNexus",
  description: "Facturacao electronica certificada pela MRA para o Malawi. Submissao EIS em tempo real, recibos QR, fila offline. Liga ao QuickBooks e Sage. Integracao em 72 horas.",
  alternates: {
    canonical: "https://www.technexusmw.com/pt/eis",
    languages: {
      "en": "https://www.technexusmw.com/eis",
      "pt": "https://www.technexusmw.com/pt/eis",
      "ny": "https://www.technexusmw.com/ny/eis",
    },
  },
};

export default function PtEISPage() {
  return <EisClient lang="pt" />;
}
