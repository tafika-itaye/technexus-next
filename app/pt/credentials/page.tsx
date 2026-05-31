"use client";

import Link from "next/link";
import { useState } from "react";


const registration = [
  { label: "Nome Legal", value: "TechNexus" },
  { label: "Registo Comercial", value: "BRN.A6SNWQY — MSME, Republica do Malawi" },
  { label: "Morada", value: "Blantyre, Malawi" },
  { label: "Contacto Principal", value: "+265 889 941 700 · +265 995 753 326" },
  { label: "E-mail", value: "technexus_mw@proton.me" },
  { label: "Estado MANePS", value: "Activo — Sistema Nacional de Procurement Electronico do Malawi" },
  { label: "Registo PPDA", value: "Registado — Autoridade de Procurement Publico e Alienacao de Bens" },
  { label: "Conformidade MRA", value: "Autoridade Tributaria do Malawi — conforme em termos fiscais" },
  { label: "Mercados de Actuacao", value: "Malawi, Zambia, Mocambique, Africa do Sul, China (fornecimento)" },
  { label: "Taxa IVA", value: "17,5% (em vigor desde Janeiro de 2026)" },
];

const services = [
  { title: "Fornecimento Hardware ICT", body: "HP, Dell, Lenovo, Samsung, Synology, APC, Canon. Laptops, desktops, NAS, UPS, impressoras, redes." },
  { title: "Desenvolvimento de Software", body: "ASP.NET Core, Blazor, PostgreSQL. Sistemas empresariais, aplicacoes web, plataformas hospitalares." },
  { title: "Servicos Linguisticos", body: "Traducao, transcricao, legendagem, interpretacao. Ingles, Portugues, Chichewa, Swahili." },
  { title: "Montagem de PC", body: "Construcoes desktop personalizadas. Intel i5, Windows 11 Pro, testado. Precos de volume para instituicoes." },
  { title: "Material Medico", body: "EPI, diagnostico, instrumentos, mobiliario hospitalar, auxiliares de mobilidade, farmaceuticos. Fontes SADC." },
  { title: "Servicos IT Geridos", body: "Redes, infraestrutura de servidores, helpdesk, integracao de sistemas. Com SLA." },
];

const procurement = [
  { title: "Sector Publico", body: "Todo o procurement publico conduzido ao abrigo da Lei de Gestao das Financas Publicas (2022). Trilhas de auditoria completas. Elegivel para concursos electronicos MANePS." },
  { title: "Sector Privado", body: "Condicoes comerciais standard. Faturas pro-forma, faturas fiscais, notas de entrega e recibos emitidos." },
  { title: "Parceiros de Desenvolvimento", body: "Experiencia com missoes diplomaticas, ONGs internacionais e programas financiados por doadores." },
  { title: "Transfronteirico", body: "Operacoes no Malawi, Zambia, Mocambique e Africa do Sul. Facturacao em USD e MWK." },
];

const serviceOptions = [
  "IT Hardware / Catalogo",
  "Montagem de PC",
  "Desenvolvimento de Software",
  "Servicos Linguisticos",
  "Material Medico",
  "Consultoria de Concursos / Pre-Qualificacao",
  "Consultoria de Registo de Empresas",
  "Servicos IT Geridos",
  "Outro",
];

const ACCENT = "var(--fl-blue)";
const BG = "var(--surface)";
const TEXT = "var(--text)";
const MUTED = "var(--muted)";
const BORDER = "var(--border)";
const SURF2 = "var(--surface-alt)";

export default function PtCredentialsPage() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState("");
  const [msg, setMsg] = useState("");

  function submitEnquiry() {
    if (!name.trim() || !contact.trim()) return;
    let t = "TechNexus Enquiry (PT)";
    t += "%0ANome: " + encodeURIComponent(name);
    if (org) t += "%0AOrganizacao: " + encodeURIComponent(org);
    t += "%0AContacto: " + encodeURIComponent(contact);
    if (service) t += "%0AServico: " + encodeURIComponent(service);
    if (msg) t += "%0AMensagem: " + encodeURIComponent(msg);
    window.open("https://wa.me/265889941700?text=" + t, "_blank");
  }

  const inp: React.CSSProperties = { width: "100%", padding: "9px 12px", background: "var(--glass)", border: "1px solid var(--glass-border)", borderRadius: "8px", color: "#fff", fontSize: "0.85rem", outline: "none", boxSizing: "border-box" };
  const sh: React.CSSProperties = { fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 700, color: TEXT, borderBottom: "2px solid " + BORDER, paddingBottom: "10px", marginBottom: "20px", marginTop: "48px" };
  const cell: React.CSSProperties = { padding: "10px 14px", fontSize: "0.84rem", borderBottom: "1px solid " + BORDER };

  return (
    <div style={{ color: TEXT, fontFamily: "var(--font-body)" }}>

      <div style={{ background: "var(--accent)", padding: "48px 40px 36px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#fff", marginBottom: "12px" }}>Credenciais da Empresa e Contacto</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", maxWidth: "620px", margin: "0 auto 20px", lineHeight: 1.65 }}>
          Detalhes de registo, quadro de conformidade, referencias diplomaticas e formulario de contacto directo. Disponivel para concursos publicos, contratos do sector privado e procurement de parceiros de desenvolvimento.
        </p>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "20px", padding: "6px 18px", fontSize: "0.78rem", color: "#fff", fontWeight: 600, letterSpacing: "0.04em" }}>
          MANePS Activo · Registado PPDA · Conforme MRA · BRN.A6SNWQY
        </div>
      </div>

      <div style={{ height: "220px", overflow: "hidden", position: "relative", background: "#0a2742" }}>
        <img src="/index_main/server_rack_2.webp" alt="TechNexus credentials" width={1100} height={220} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.45 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,40,80,0.7) 0%, transparent 60%)" }} />
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 32px 80px" }}>

        <h2 style={sh}>Registo e Conformidade</h2>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: SURF2 }}>
                <th style={{ ...cell, fontWeight: 700, textAlign: "left", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", color: MUTED }}>Item</th>
                <th style={{ ...cell, fontWeight: 700, textAlign: "left", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", color: MUTED }}>Detalhe</th>
              </tr>
            </thead>
            <tbody>
              {registration.map((r, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : SURF2 }}>
                  <td style={{ ...cell, fontWeight: 600, whiteSpace: "nowrap" }}>{r.label}</td>
                  <td style={{ ...cell }}>{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={sh}>Portefolio de Servicos</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: BORDER, border: "1px solid " + BORDER, borderRadius: "8px", overflow: "hidden" }}>
          {services.map((s, i) => (
            <div key={i} style={{ padding: "20px", background: BG }}>
              <h4 style={{ fontSize: "0.88rem", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>{s.title}</h4>
              <p style={{ fontSize: "0.78rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>

        <h2 style={sh}>Referencia Diplomatica</h2>
        <div style={{ background: SURF2, border: "1px solid " + BORDER, borderLeft: "4px solid var(--fl-blue)", borderRadius: "8px", padding: "24px 28px" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Alto Comissariado de Mocambique — Lilongwe</h3>
          <p style={{ fontSize: "0.84rem", color: MUTED, lineHeight: 1.65, margin: 0 }}>
            O Alto Comissariado da Republica de Mocambique, Lilongwe (Fevereiro de 2026) confirma que a TechNexus prestou servicos profissionais a Missao durante um periodo prolongado. A Missao elogia a TechNexus pelos seus elevados padroes de profissionalismo, exactidao, fiabilidade e discricao.
          </p>
        </div>

        <h2 style={sh}>Quadro de Procurement</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: BORDER, border: "1px solid " + BORDER, borderRadius: "8px", overflow: "hidden" }}>
          {procurement.map((p, i) => (
            <div key={i} style={{ padding: "20px", background: BG }}>
              <h4 style={{ fontSize: "0.88rem", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>{p.title}</h4>
              <p style={{ fontSize: "0.78rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>

        <h2 style={{ ...sh, marginTop: "48px" }}>Enviar uma Consulta</h2>
        <p style={{ fontSize: "0.88rem", color: MUTED, marginBottom: "24px" }}>Preencha o formulario abaixo ou contacte-nos directamente via WhatsApp.</p>
        <div style={{ background: SURF2, border: "1px solid " + BORDER, borderRadius: "8px", padding: "28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label htmlFor="pt-cred-name" style={{ fontSize: "0.78rem", color: MUTED, display: "block", marginBottom: "4px" }}>Nome *</label>
              <input id="pt-cred-name" type="text" placeholder="O seu nome" value={name} onChange={e => setName(e.target.value)} style={inp} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="pt-cred-org" style={{ fontSize: "0.78rem", color: MUTED, display: "block", marginBottom: "4px" }}>Organizacao</label>
              <input id="pt-cred-org" type="text" placeholder="Empresa / ONG / Instituicao" value={org} onChange={e => setOrg(e.target.value)} style={inp} autoComplete="organization" />
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="pt-cred-contact" style={{ fontSize: "0.78rem", color: MUTED, display: "block", marginBottom: "4px" }}>E-mail ou WhatsApp *</label>
            <input id="pt-cred-contact" type="text" placeholder="+265 ... ou o@seu.email.com" value={contact} onChange={e => setContact(e.target.value)} style={inp} autoComplete="email" />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="pt-cred-service" style={{ fontSize: "0.78rem", color: MUTED, display: "block", marginBottom: "4px" }}>Servico Pretendido *</label>
            <select id="pt-cred-service" value={service} onChange={e => setService(e.target.value)} style={{ ...inp, cursor: "pointer" }}>
              <option value="">— Selecionar —</option>
              {serviceOptions.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="pt-cred-msg" style={{ fontSize: "0.78rem", color: MUTED, display: "block", marginBottom: "4px" }}>Mensagem *</label>
            <textarea id="pt-cred-msg" rows={4} placeholder="Descreva o seu requisito, quantidade, localizacao ou detalhes especificos..." value={msg} onChange={e => setMsg(e.target.value)} style={{ ...inp, resize: "vertical" }} />
          </div>
          <button onClick={submitEnquiry} type="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 24px", background: "#25D366", color: "#fff", border: "none", borderRadius: "8px", fontSize: "0.88rem", fontWeight: 700, cursor: "pointer" }}>
            Enviar via WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
}

