import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechNexus — Solucoes IT, Servicos Linguisticos e Fornecimento de Equipamentos",
  description: "Fornecedor pan-africano de hardware IT, montagem de PCs, desenvolvimento de software, servicos linguisticos e equipamento medico. Registado PPDA. Blantyre, Malawi.",
  alternates: { canonical: "https://www.technexusmw.com/pt" },
};

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return children;
}
