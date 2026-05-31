import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechNexus — Solucoes IT, Servicos Linguisticos e Fornecimento de Equipamentos",
  description: "Fornecedor pan-africano de hardware IT, montagem de PCs, desenvolvimento de software, servicos linguisticos e equipamento medico. Registado PPDA. Blantyre, Malawi.",
  alternates: { canonical: "https://www.technexusmw.com/pt" },
};

const services = [
  { href: "/pt/catalogue", img: "/index_main/server_rack_1.webp", label: "Catalogo IT", title: "Hardware ICT, Escritorio & Infraestrutura", body: "Hardware certificado HP, Dell, Lenovo, Samsung, Synology, APC, Canon. Laptops, desktops, NAS, UPS, impressoras, componentes, perifericos e acessorios.", cta: "Ver Catalogo" },
  { href: "/pt/computer-assembly", img: "/index_main/motherboard_assembly_1.webp", label: "Montagem PC", title: "Montagem de Desktop Personalizado", body: "Desktops para escritorio e educacao construidos por medida. Intel i5, componentes de qualidade, Windows 11 Pro, montados e testados.", cta: "Ver Configuracoes" },
  { href: "/pt/software-development", img: "/index_main/software_dev_1.webp", label: "Software", title: "Software & Aplicacoes Web Personalizadas", body: "Aplicacoes web, sistemas de gestao, solucoes de base de dados e software desktop Windows.", cta: "Solicitar Orcamento" },
  { href: "/pt/language-services", img: "/index_main/african_woman_interpreter_1.webp", label: "Servicos Linguisticos", title: "TechNexus Scripts", body: "Traducao, transcricao, legendagem, interpretacao e formacao linguistica. Ingles, Portugues, Chichewa, Swahili.", cta: "Ver Servicos" },
  { href: "/pt/medical-supplies", img: "/index_main/medical_equipment_1.webp", label: "Material Medico", title: "Equipamento & Consumiveis de Saude", body: "Material medico certificado atraves de parceiros SADC verificados. EPI, diagnostico, instrumentos, mobiliario hospitalar.", cta: "Ver Catalogo" },
  { href: "/pt/credentials", img: "/index_main/server_rack_2.webp", label: "Credenciais & Contacto", title: "Credenciais da Empresa & Formulario de Contacto", body: "Detalhes de registo, quadro de conformidade, referencias diplomaticas e formulario de contacto directo.", cta: "Ver Credenciais" },
];

const brands = ["HP","Dell","Lenovo","Samsung","Synology","APC","Canon","ASUS","Microsoft","AWS","Google"];


export default function PtHomePage() {
  return (
    <div>
      <div style={{ background: "var(--fl-neutral-2)", padding: "48px 40px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
          {services.map(s => (
            <Link key={s.href} href={s.href} style={{ textDecoration: "none", background: "#fff", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-4)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "180px", overflow: "hidden", position: "relative" }}>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)", display: "flex", alignItems: "flex-end", padding: "12px 16px" }}>
                  <span style={{ color: "#fff", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</span>
                </div>
              </div>
              <div style={{ padding: "20px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: "var(--fl-neutral-90)", marginBottom: "8px" }}>{s.title}</h2>
                <p style={{ fontSize: "13px", color: "#595959", lineHeight: 1.6, flex: 1 }}>{s.body}</p>
                <span style={{ marginTop: "16px", color: "var(--fl-blue)", fontSize: "13px", fontWeight: 600 }}>{s.cta} &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}



