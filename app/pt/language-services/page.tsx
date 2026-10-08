import type { Metadata } from "next";
import LanguageServicesClient from "../../language-services/LanguageServicesClient";

export const metadata: Metadata = {
  title: "TechNexus Scripts — Serviços Linguísticos e Consultoria",
  description: "TechNexus Scripts — tradução, transcrição, consultoria de concursos e registo de empresas. Blantyre, Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/pt/language-services",
    languages: {
      "en": "https://www.technexusmw.com/language-services",
      "pt": "https://www.technexusmw.com/pt/language-services",
      "ny": "https://www.technexusmw.com/ny/language-services",
    },
  },
};

export default function PtLanguageServicesPage() {
  return <LanguageServicesClient lang="pt" />;
}
