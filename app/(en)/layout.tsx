import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { fontVars } from "@/app/components/fonts";
import SiteShell from "@/app/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.technexusmw.com"),
  title: "TechNexus — IT Solutions, Language Services & Equipment Supply",
  description: "Pan-African supplier of IT hardware, custom PC assembly, software development, language services and medical equipment. PPDA registered. Lilongwe and Blantyre, Malawi.",
  alternates: { canonical: "https://www.technexusmw.com" },
  openGraph: { siteName: "TechNexus", locale: "en_GB", type: "website", images: [{ url: "/Products_logos/technexuslogo1.webp", width: 400, height: 400 }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVars}>
      <body className="min-h-screen flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    <GoogleAnalytics gaId="G-JZG3NK1DGM" />
    </html>
  );
}
