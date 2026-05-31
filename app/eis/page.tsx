import type { Metadata } from "next"
import EisClient from "./EisClient"

export const metadata: Metadata = {
  title: "EIS Bridge and POS Software | TechNexus",
  description: "MRA-certified electronic invoicing for Malawi. Real-time EIS submission, QR receipts, offline queue. Connects to QuickBooks and Sage. Onboarding in 72 hours.",
}

export default function EISPage() {
  return <EisClient />
}
