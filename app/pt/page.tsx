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

const ptLinks = [
  { href: "/pt", label: "Inicio" },
  { href: "/pt/catalogue", label: "Catalogo IT" },
  { href: "/pt/computer-assembly", label: "Montagem PC" },
  { href: "/pt/language-services", label: "Servicos Linguisticos" },
  { href: "/pt/medical-supplies", label: "Material Medico" },
  { href: "/pt/software-development", label: "Software" },
  { href: "/pt/eis", label: "Conformidade EIS" },
  { href: "/pt/credentials", label: "Credenciais" },
];

export default function PtHomePage() {
  return (
    <div>
      <div style={{ background: "var(--fl-neutral-90)", borderBottom: "1px solid #2a2a2a", padding: "8px 24px", display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
        {ptLinks.map(l => (
          <Link key={l.href} href={l.href} style={{ color: "var(--fl-neutral-40)", fontSize: "13px", padding: "4px 10px", textDecoration: "none", borderRadius: "4px" }}>{l.label}</Link>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
          <Link href="/" style={{ fontSize: "11px", padding: "3px 8px", border: "1px solid #444", borderRadius: "4px", color: "#999", textDecoration: "none" }}>EN</Link>
          <Link href="/pt" style={{ fontSize: "11px", padding: "3px 8px", border: "1px solid var(--fl-blue)", borderRadius: "4px", color: "var(--fl-blue)", textDecoration: "none" }}>PT</Link>
          <Link href="/ny" style={{ fontSize: "11px", padding: "3px 8px", border: "1px solid #444", borderRadius: "4px", color: "#999", textDecoration: "none" }}>NY</Link>
        </div>
      </div>
      <div style={{ background: "var(--fl-neutral-90)", borderBottom: "1px solid #2a2a2a", padding: "12px 40px", display: "flex", gap: "28px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        {brands.map(b => (
          <span key={b} style={{ color: "#cccccc", fontSize: "12px", fontWeight: 600 }}>{b}</span>
        ))}
      </div>
      <div style={{ background: "var(--accent)", padding: "8px 40px", display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { label: "Registado PPDA", color: "#90caf9" },
          { label: "MANePS Activo", color: "#90caf9" },
          { label: "MSME BRN.A6SNWQY", color: "#90caf9" },
          { label: "Conforme MRA", color: "#90caf9" },
        ].map(b => (
          <span key={b.label} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#fff", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: b.color, display: "inline-block", flexShrink: 0 }} />
            {b.label}
          </span>
        ))}
      </div>
      <div style={{ background: "var(--fl-neutral-90)", padding: "72px 40px 64px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
          Tecnologia. Idioma. Infraestrutura.
        </h1>
        <p style={{ color: "var(--fl-neutral-40)", fontSize: "16px", maxWidth: "600px", margin: "0 auto 24px", lineHeight: 1.7 }}>
          Hardware IT completo, desenvolvimento de software, servicos linguisticos, montagem de PCs e equipamento medico para empresas em toda a Africa Austral e Oriental.
        </p>
        <div style={{ display: "inline-block", background: "rgba(0,120,212,0.15)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "var(--fl-blue)", fontSize: "13px" }}>
          Fornecedores verificados no Malawi, Mocambique, Africa do Sul, EAU e China
        </div>
      </div>
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


