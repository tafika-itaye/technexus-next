import type { Metadata } from "next";
import MedicalSuppliesShared from "@/app/components/MedicalSuppliesShared";
import { nyData } from "./data";

export const metadata: Metadata = {
  title: "TechNexus -- Zinthu za Chipatala",
  description: "Zinthu za chipatala. EPI, kuyeza, fanicha ya chipatala, mankhwala. SADC. Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/ny/medical-supplies",
    languages: {
      "en": "https://www.technexusmw.com/medical-supplies",
      "pt": "https://www.technexusmw.com/pt/medical-supplies",
      "ny": "https://www.technexusmw.com/ny/medical-supplies",
    },
  },
};

export default function NyMedicalSuppliesPage() {
  return <MedicalSuppliesShared locale="ny" data={nyData} />;
}