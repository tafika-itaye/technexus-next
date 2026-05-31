import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300","400","500","600","700"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["400","600","700","800"] });

export const metadata: Metadata = {
  title: "TechNexus — IT Solutions, Language Services & Equipment Supply",
  description: "Pan-African supplier of IT hardware, custom PC assembly, software development, language services and medical equipment. PPDA registered. Blantyre, Malawi.",
  metadataBase: new URL("https://www.technexusmw.com"),
  openGraph: { siteName: "TechNexus", locale: "en_GB", type: "website", images: [{ url: "/Products_logos/technexuslogo1.webp", width: 400, height: 400 }] },
};

const WaIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.697-1.81A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3z" fill="#fff"/>
    <path d="M21.5 18.5c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#25D366"/>
  </svg>
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <a href="https://wa.me/265889941700" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" style={{ position:"fixed", bottom:"28px", right:"28px", zIndex:9999, background:"#25D366", borderRadius:"50%", width:"56px", height:"56px", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 16px rgba(0,0,0,0.28)", textDecoration:"none" }}><WaIcon /></a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "TechNexus",
          "legalName": "TechNexus MW",
          "url": "https://www.technexusmw.com",
          "telephone": "+265-889-941-700",
          "email": "technexus_mw@proton.me",
          "logo": "https://www.technexusmw.com/Products_logos/technexuslogo1.webp",
          "description": "Pan-African supplier of IT hardware, custom PC assembly, software development, language services and medical equipment. PPDA registered. Blantyre, Malawi.",
          "address": { "@type": "PostalAddress", "addressLocality": "Blantyre", "addressCountry": "MW" },
          "identifier": "BRN.A6SNWQY",
          "sameAs": ["https://wa.me/265889941700"]
        }) }} />
      </body>
    </html>
  );
}



