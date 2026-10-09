import "../globals.css";
import Nav from "./Nav";
import Footer from "./Footer";
import WhatsAppChat from "./WhatsAppChat";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
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
        "description": "Pan-African supplier of IT hardware, custom PC assembly, software development, language services and medical equipment. PPDA registered. Lilongwe and Blantyre, Malawi.",
        "address": { "@type": "PostalAddress", "addressLocality": "Lilongwe", "addressRegion": "Nationwide", "addressCountry": "MW" },
        "identifier": "BRN.A6SNWQY",
        "sameAs": ["https://wa.me/265889941700"]
      }) }} />
    </>
  );
}
