import type { Metadata } from "next"
import EisClient from "./EisClient"

export const metadata: Metadata = {
  title: "MRA-Certified EIS + POS Software | TechNexus",
  description: "MRA-certified EIS bridge and POS software for Malawi businesses. QR receipts, stock control, offline support, accounting sync and nationwide onboarding.",
}

export default function EISPage() {
  return <EisClient />
}
