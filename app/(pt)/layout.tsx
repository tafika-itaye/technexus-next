import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { fontVars } from "@/app/components/fonts";
import SiteShell from "@/app/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.technexusmw.com"),
  openGraph: { siteName: "TechNexus", locale: "pt_MZ", type: "website", images: [{ url: "/Products_logos/technexuslogo1.webp", width: 400, height: 400 }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className={fontVars}>
      <body className="min-h-screen flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    <GoogleAnalytics gaId="G-JZG3NK1DGM" />
    </html>
  );
}
