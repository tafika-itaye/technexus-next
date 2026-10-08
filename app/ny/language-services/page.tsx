import type { Metadata } from "next";
import LanguageServicesClient from "../../language-services/LanguageServicesClient";

export const metadata: Metadata = {
  title: "TechNexus Scripts — Ntchito za Zinenero ndi Uphungu",
  description: "TechNexus Scripts — kumasulira, kulemba, uphungu wa ma tender ndi kulembetsa bizinesi. Blantyre, Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/ny/language-services",
    languages: {
      "en": "https://www.technexusmw.com/language-services",
      "pt": "https://www.technexusmw.com/pt/language-services",
      "ny": "https://www.technexusmw.com/ny/language-services",
    },
  },
};

export default function NyLanguageServicesPage() {
  return <LanguageServicesClient lang="ny" />;
}
