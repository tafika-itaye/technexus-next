import type { Metadata } from "next"
import CatalogueClient from "./CatalogueClient"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.technexusmw.com/catalogue",
    languages: {
      "en": "https://www.technexusmw.com/catalogue",
      "pt": "https://www.technexusmw.com/pt/catalogue",
      "ny": "https://www.technexusmw.com/ny/catalogue",
      "x-default": "https://www.technexusmw.com/catalogue",
    },
  },
  title: "IT Hardware Catalogue | TechNexus",
  description: "HP, Dell, Lenovo, Samsung, Synology, APC and Canon hardware. Business laptops, desktops, NAS, UPS, printers and networking for businesses in Malawi and Southern Africa.",
}

export default function CataloguePage() {
  return <CatalogueClient />
}
