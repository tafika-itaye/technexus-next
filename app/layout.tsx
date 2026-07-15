import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400","500","600","700"], display: "swap" });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["700","800"], display: "swap" });

export const metadata: Metadata = {
  title: "TechNexus — IT Solutions, Language Services & Equipment Supply",
  description: "Pan-African supplier of IT hardware, custom PC assembly, software development, language services and medical equipment. PPDA registered. Lilongwe and nationwide, Malawi.",
  metadataBase: new URL("https://www.technexusmw.com"),
  openGraph: { siteName: "TechNexus", locale: "en_GB", type: "website", images: [{ url: "/Products_logos/technexuslogo1.webp", width: 400, height: 400 }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppChat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "TechNexus",
          "legalName": "TechNexus MW",
          "url": "https://www.technexusmw.com",
          "telephone": "+265-889-941-700",
          "email": "technexus_mw@proton.me",
          "logo": "https://www.technexusmw.com/Products_logos/technexuslogo1.webp",
          "description": "Pan-African supplier of IT hardware, custom PC assembly, software development, language services and medical equipment. PPDA registered. Lilongwe and nationwide, Malawi.",
          "address": { "@type": "PostalAddress", "addressLocality": "Lilongwe", "addressRegion": "Nationwide", "addressCountry": "MW" },
          "identifier": "BRN.A6SNWQY",
          "sameAs": ["https://wa.me/265889941700"]
        }) }} />
      </body>
    <GoogleAnalytics gaId="G-JZG3NK1DGM" />
    </html>
  );
}



