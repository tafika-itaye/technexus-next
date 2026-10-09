import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechNexus — Soluções IT, Serviços Linguísticos e Fornecimento de Equipamentos",
  description: "Fornecedor pan-africano de hardware IT, montagem de PCs, desenvolvimento de software, serviços linguísticos e equipamento médico. Registado PPDA. Lilongwe e Blantyre, Malawi.",
  alternates: { canonical: "https://www.technexusmw.com/pt" },
};

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return children;
}
