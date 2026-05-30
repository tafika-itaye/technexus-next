import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TechNexus — IT Solutions, Language Services & Equipment Supply",
  description: "Pan-African supplier of IT hardware, custom PC assembly, software development, language services and medical equipment. PPDA registered. Blantyre, Malawi.",
  metadataBase: new URL("https://www.technexusmw.com"),
  openGraph: {
    siteName: "TechNexus",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
