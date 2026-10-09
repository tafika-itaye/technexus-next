import type { Metadata } from "next";
import LanguageServicesClient from "@/app/components/LanguageServicesClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.technexusmw.com/language-services",
    languages: {
      "en": "https://www.technexusmw.com/language-services",
      "pt": "https://www.technexusmw.com/pt/language-services",
      "ny": "https://www.technexusmw.com/ny/language-services",
      "x-default": "https://www.technexusmw.com/language-services",
    },
  },
  title: "Language Services | TechNexus Scripts",
  description: "Professional translation, transcription, subtitling, interpretation and tender consulting. English, Portuguese, Chichewa, Swahili. Serving diplomatic missions and NGOs across Southern Africa.",
};

export default function LanguageServicesPage() {
  return <LanguageServicesClient />;
}
