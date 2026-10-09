import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.technexusmw.com/pt/credentials",
    languages: {
      "en": "https://www.technexusmw.com/credentials",
      "pt": "https://www.technexusmw.com/pt/credentials",
      "ny": "https://www.technexusmw.com/ny/credentials",
      "x-default": "https://www.technexusmw.com/credentials",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
