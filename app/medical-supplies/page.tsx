import type { Metadata } from "next";
import MedicalSuppliesShared from "@/app/components/MedicalSuppliesShared";
import { enData } from "./data";

export const metadata: Metadata = {
  title: "Medical Supplies | TechNexus",
  description: "Healthcare equipment, consumables and pharmaceuticals sourced through verified SADC partners. Serving Malawi, Zambia, Mozambique and South Africa.",
  alternates: {
    canonical: "https://www.technexusmw.com/medical-supplies",
    languages: {
      "en": "https://www.technexusmw.com/medical-supplies",
      "pt": "https://www.technexusmw.com/pt/medical-supplies",
      "ny": "https://www.technexusmw.com/ny/medical-supplies",
    },
  },
};

export default function MedicalSuppliesPage() {
  return <MedicalSuppliesShared locale="en" data={enData} />;
}