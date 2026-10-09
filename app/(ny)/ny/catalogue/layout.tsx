import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.technexusmw.com/ny/catalogue",
    languages: {
      "en": "https://www.technexusmw.com/catalogue",
      "pt": "https://www.technexusmw.com/pt/catalogue",
      "ny": "https://www.technexusmw.com/ny/catalogue",
      "x-default": "https://www.technexusmw.com/catalogue",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
