import type { Metadata } from "next";
import EisClient from "../../eis/EisClient";

export const metadata: Metadata = {
  title: "Software EIS + POS Certificado pela MRA | TechNexus",
  description: "Bridge EIS certificada pela MRA e software POS para empresas no Malawi. Recibos QR, controlo de stock, suporte offline, sincronizacao contabilistica e onboarding nacional.",
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
