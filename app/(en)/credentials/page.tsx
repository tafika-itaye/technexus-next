import type { Metadata } from "next"
import CredentialsClient from "./CredentialsClient"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.technexusmw.com/credentials",
    languages: {
      "en": "https://www.technexusmw.com/credentials",
      "pt": "https://www.technexusmw.com/pt/credentials",
      "ny": "https://www.technexusmw.com/ny/credentials",
      "x-default": "https://www.technexusmw.com/credentials",
    },
  },
  title: "Company Credentials | TechNexus",
  description: "TechNexus registration details, compliance framework, diplomatic references and direct enquiry form. PPDA registered, MANePS active, MRA compliant.",
}

export default function CredentialsPage() {
  return <CredentialsClient />
}
