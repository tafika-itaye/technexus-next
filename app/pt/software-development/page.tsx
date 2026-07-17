import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechNexus — Desenvolvimento de Software & Consultoria IT",
  description: "TechNexus desenvolvimento de software, aplicacoes web, sistemas empresariais. ASP.NET Core, Blazor. Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/pt/software-development",
    languages: {
      "en": "https://www.technexusmw.com/software-development",
      "pt": "https://www.technexusmw.com/pt/software-development",
      "ny": "https://www.technexusmw.com/ny/software-development",
    },
  },
};

const BG = "var(--fl-neutral-2)";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const ACCENT = "var(--fl-blue)";
const TH: React.CSSProperties = { padding: "10px 16px", textAlign: "left" as const, fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", color: MUTED, borderBottom: "1px solid var(--fl-neutral-8)", background: "var(--fl-neutral-4)" };
const TD: React.CSSProperties = { padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid var(--fl-neutral-8)", color: TEXT };
const WA = "https://wa.me/265889941700?text=Hi%20TechNexus%2C%20gostaria%20de%20um%20orcamento%20para%3A%0A";

const services = [
  { name: "Desenvolvimento de Software Empresarial", featured: true, desc: "Sistemas de missao critica — equipa dedicada, SLA 24/7, auditorias de seguranca, conformidade, implementacoes em larga escala", mwk: "MK 26.010.000+", usd: "$15,000+" },
  { name: "Desenvolvimento de Software Personalizado", featured: false, desc: "Aplicacoes empresariais por medida — ASP.NET Core, Blazor Server, PostgreSQL, cloud-native", mwk: "MK 7.000.000+", usd: "$3,700+" },
  { name: "Desenvolvimento de Aplicacao Web", featured: false, desc: "Aplicacoes web responsivas, portais, dashboards, desenvolvimento de API", mwk: "MK 2.850.000+", usd: "$1,500+" },
  { name: "Desenvolvimento de App Movel", featured: false, desc: "Aplicacoes Android e multiplataforma", mwk: "MK 5.700.000+", usd: "$3,000+" },
  { name: "Manutencao e Suporte de Software", featured: false, desc: "Suporte continuo, correccao de erros, actualizacoes, resposta SLA", mwk: "MK 2.080.000+/mes", usd: "$1,200+/mes" },
  { name: "Servicos Cloud e Integracao", featured: false, desc: "Azure, DigitalOcean, on-premise. Migracao, implementacao, monitorizacao", mwk: "MK 3.800.000+", usd: "$2,000+" },
  { name: "Analise de Dados e BI", featured: false, desc: "Dashboards de relatorios, acompanhamento de KPIs, suporte a decisao baseado em dados", mwk: "MK 2.850.000+", usd: "$1,500+" },
  { name: "Design UI/UX", featured: false, desc: "Pesquisa de utilizadores, wireframes, mockups, prototipos interactivos", mwk: "MK 1.900.000+", usd: "$1,000+" },
  { name: "Consultoria IT e Gestao de Projectos", featured: false, desc: "Analise de requisitos, arquitectura, seleccao de fornecedores, supervisao de projectos", mwk: "Orcamento personalizado", usd: "Personalizado" },
];

const stack = [
  { title: "Backend", body: "ASP.NET Core 8, C#, Entity Framework Core, REST APIs" },
  { title: "Frontend", body: "Blazor Server, Razor Pages, HTML5/CSS3, JavaScript" },
  { title: "Base de Dados", body: "PostgreSQL 16, SQL Server, SQLite (movel)" },
  { title: "Cloud e DevOps", body: "Microsoft Azure, DigitalOcean, Docker, Git, pipelines CI/CD" },
  { title: "Infraestrutura", body: "Windows Server 2022, Ubuntu Server, Nginx, IIS" },
  { title: "Seguranca", body: "ASP.NET Identity, autenticacao por funcoes, SSL/TLS, encriptacao em repouso" },
];

const healthcare = [
  { title: "Operacoes Hospitalares", body: "Service desk e ticketing, gestao de SLA, rastreio de activos, encaminhamento automatico, relatorios departamentais." },
  { title: "Conformidade e Qualidade", body: "Gestao de politicas, controlo de versoes, atestacao de pessoal, relatorios de incidentes, exportacao COHSASA." },
  { title: "Infraestrutura", body: "Projectos LAN/WAN, instalacao de sala de servidores, migracao para cloud, integracao de sistemas, sistemas POS." },
  { title: "Sistemas de Procurement", body: "Monitorizacao de activos, gestao de inventario, gestao de fornecedores, relatorios de conformidade." },
];

const team = [
  { role: "Fundador e Director Geral", body: "Mais de 15 anos de experiencia em desenvolvimento de software empresarial." },
  { role: "Programador Senior e Arquitecto Tecnico", body: "Engenheiro full-stack. Especialista em C#, .NET Core, Angular, React, Azure, CI/CD." },
  { role: "Analista de Negocios e Sistemas", body: "Certificado ISC2 CC. MSc em Sistemas de Informacao de Gestao. Especialista em ITSM, ERP, Power BI e analise de dados." },
  { role: "Gestora de Negocios e Liaisons com Clientes", body: "Responsavel pela gestao de contratos, conformidade de procurement, vendas e coordenacao de stakeholders." },
];

export default function PTSoftwareDevelopmentPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      <div style={{ background: "var(--fl-neutral-90)", padding: "64px 40px 48px", textAlign: "center", backgroundImage: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/index_main/software_dev_1-1200.webp)", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
          Desenvolvimento de Software &amp; Consultoria IT
        </h1>
        <p style={{ color: "#999", fontSize: "15px", maxWidth: "640px", margin: "0 auto 20px", lineHeight: 1.7 }}>
          Aplicacoes empresariais personalizadas, sistemas web e plataformas digitais. Desenvolvido em C#, .NET Core, Blazor e PostgreSQL. Do conceito a implementacao.
        </p>
        <div style={{ display: "inline-block", background: "rgba(0,120,212,0.15)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "var(--fl-blue)", fontSize: "13px" }}>
          ASP.NET Core · Blazor · PostgreSQL · Azure · Full-Stack
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>

        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "6px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Servicos de Desenvolvimento</h2>
          <p style={{ fontSize: "13px", color: MUTED, margin: "4px 0 0" }}>Solucoes de software personalizadas que melhoram o funcionamento das organizacoes.</p>
        </div>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px" }}>Precos excluem IVA de 17,5%. Taxa: 1 USD = MK 1.734 (Julho 2026).</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "520px" }}>
            <thead>
              <tr>
                <th style={TH}>Servico</th>
                <th style={TH}>Descricao</th>
                <th style={TH}>A partir de (MWK)</th>
                <th style={TH}>A partir de (USD)</th>
                <th style={TH}>Quote</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, i) => (
                <tr key={i} style={{ background: s.featured ? "rgba(0,120,212,0.06)" : i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={{ ...TD, fontWeight: 700, color: s.featured ? ACCENT : TEXT, whiteSpace: "nowrap" as const }}>
                    {s.featured ? "* " : ""}{s.name}
                  </td>
                  <td style={{ ...TD, color: MUTED, fontSize: "12px" }}>{s.desc}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600, whiteSpace: "nowrap" as const }}>{s.mwk}</td>
                  <td style={{ ...TD, color: MUTED, whiteSpace: "nowrap" as const }}>{s.usd}</td>
                  <td style={TD}>
                    <a href={WA + encodeURIComponent(s.name) + "%0APreco%3A%20" + encodeURIComponent(s.usd)} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" as const }}>
                      Quote
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "20px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Stack Tecnologico</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {stack.map(s => (
            <div key={s.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{s.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "6px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Capacidades para Saude e Instituicoes</h2>
          <p style={{ fontSize: "13px", color: MUTED, margin: "4px 0 0" }}>Experiencia directa na construcao de sistemas para operacoes hospitalares e instituicoes governamentais.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px", marginTop: "20px" }}>
          {healthcare.map(s => (
            <div key={s.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{s.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "20px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Equipa de Desenvolvimento</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {team.map(t => (
            <div key={t.role} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <div style={{ fontFamily: "var(--font-syne)", fontSize: "14px", fontWeight: 700, color: ACCENT, marginBottom: "8px" }}>{t.role}</div>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{t.body}</p>
            </div>
          ))}
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid " + ACCENT, borderRadius: "8px", padding: "24px", marginBottom: "20px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Credenciais e Registo</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>Totalmente registado no MANePS (Sistema Nacional de Procurement Electronico do Malawi). Todos os contratos conduzidos ao abrigo da Lei de Gestao das Financas Publicas (2022). Trilhas de auditoria completas em cada projecto. Disponivel para concursos publicos, contratos do sector privado e procurement de parceiros de desenvolvimento.</p>
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid " + ACCENT, borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Referencia Diplomatica</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>O Alto Comissariado da Republica de Mocambique, Lilongwe (Fevereiro de 2026) confirma que a TechNexus prestou servicos profissionais a Missao durante um periodo prolongado. A Missao elogia a TechNexus pelos seus elevados padroes de profissionalismo, exactidao, fiabilidade e discricao.</p>
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, marginBottom: "12px" }}>Iniciar um Projecto</h3>
          <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, marginBottom: "20px" }}>
            Envie-nos os seus requisitos via WhatsApp ou email. Respondemos em 24 horas com uma chamada de enquadramento e entregamos um orcamento a preco fixo em 5 dias uteis.
          </p>
          <a href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20gostaria%20de%20um%20orcamento%20da%20pagina%20Software%20Dev." target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Iniciar Projecto
          </a>
        </div>

      </div>
    </div>
  );
}

