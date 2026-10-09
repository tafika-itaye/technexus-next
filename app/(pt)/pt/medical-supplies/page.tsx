import type { Metadata } from "next";
import MedicalSuppliesShared from "@/app/components/MedicalSuppliesShared";
import { ptData } from "./data";

export const metadata: Metadata = {
  title: "TechNexus -- Catalogo de Material Medico",
  description: "Catalogo de material medico. EPI, diagnostico, mobiliario hospitalar, farmaceuticos. SADC. Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/pt/medical-supplies",
    languages: {
      "en": "https://www.technexusmw.com/medical-supplies",
      "pt": "https://www.technexusmw.com/pt/medical-supplies",
      "ny": "https://www.technexusmw.com/ny/medical-supplies",
    },
  },
};

export default function PtMedicalSuppliesPage() {
  return <MedicalSuppliesShared locale="pt" data={ptData} />;
}