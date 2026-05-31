import type { Metadata } from "next"
import CredentialsClient from "./CredentialsClient"

export const metadata: Metadata = {
  title: "Company Credentials | TechNexus",
  description: "TechNexus registration details, compliance framework, diplomatic references and direct enquiry form. PPDA registered, MANePS active, MRA compliant.",
}

export default function CredentialsPage() {
  return <CredentialsClient />
}
