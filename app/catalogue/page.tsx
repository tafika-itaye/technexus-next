import type { Metadata } from "next"
import CatalogueClient from "./CatalogueClient"

export const metadata: Metadata = {
  title: "IT Hardware Catalogue | TechNexus",
  description: "HP, Dell, Lenovo, Samsung, Synology, APC and Canon hardware. Business laptops, desktops, NAS, UPS, printers and networking for businesses in Malawi and Southern Africa.",
}

export default function CataloguePage() {
  return <CatalogueClient />
}
