import type { Metadata } from "next";
import LanguageServicesClient from "@/app/components/LanguageServicesClient";

export const metadata: Metadata = {
  title: "Language Services | TechNexus Scripts",
  description: "Professional translation, transcription, subtitling, interpretation and tender consulting. English, Portuguese, Chichewa, Swahili. Serving diplomatic missions and NGOs across Southern Africa.",
};

export default function LanguageServicesPage() {
  return <LanguageServicesClient />;
}
