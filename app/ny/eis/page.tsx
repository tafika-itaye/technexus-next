import type { Metadata } from "next";
import EisClient from "../../eis/EisClient";

export const metadata: Metadata = {
  title: "EIS Bridge ndi Software ya POS | TechNexus",
  description: "Ma invoice a elekitironiki otsimikiziridwa ndi MRA ku Malawi. Kutumiza kwa EIS nthawi yomweyo, ma risiti a QR, mzere wa offline. Imagwirizana ndi QuickBooks ndi Sage. Kuyamba mu maola 72.",
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
