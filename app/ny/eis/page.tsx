import type { Metadata } from "next";
import EisClient from "../../eis/EisClient";

export const metadata: Metadata = {
  title: "EIS + POS Software Yotsimikiziridwa ndi MRA | TechNexus",
  description: "Bridge ya EIS yotsimikiziridwa ndi MRA ndi POS software kwa mabizinesi a ku Malawi. QR receipts, stock control, offline support, accounting sync ndi nationwide onboarding.",
  alternates: {
    canonical: "https://www.technexusmw.com/ny/eis",
    languages: {
      "en": "https://www.technexusmw.com/eis",
      "pt": "https://www.technexusmw.com/pt/eis",
      "ny": "https://www.technexusmw.com/ny/eis",
    },
  },
};

export default function NyEISPage() {
  return <EisClient lang="ny" />;
}
