import type { Metadata } from "next"
import EisClient from "@/app/components/EisClient"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.technexusmw.com/eis",
    languages: {
      "en": "https://www.technexusmw.com/eis",
      "pt": "https://www.technexusmw.com/pt/eis",
      "ny": "https://www.technexusmw.com/ny/eis",
      "x-default": "https://www.technexusmw.com/eis",
    },
  },
  title: "MRA-Certified EIS + POS Software | TechNexus",
  description: "MRA-certified EIS bridge and POS software for Malawi businesses. QR receipts, stock control, offline support, accounting sync and nationwide onboarding.",
}

export default function EISPage() {
  return <EisClient />
}
