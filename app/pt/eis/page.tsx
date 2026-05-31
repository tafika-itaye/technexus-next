"use client";

import Link from "next/link";
import { useState } from "react";

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

const pillars = [
  { title: "Conformidade Garantida", body: "Ligamos o seu negocio ao EIS da MRA rapidamente. Sem lacunas. Sem penalizacoes. Cada venda e assinada digitalmente pela MRA com QR legivel em cada recibo." },
  { title: "Continuidade do Negocio", body: "Mantenha o seu POS ou sistema contabilistico actual. A nossa bridge liga-o ao EIS sem qualquer interrupcao nas suas operacoes." },
  { title: "Tranquilidade Total", body: "Baseados em Blantyre. Resposta no mesmo dia. Monitorizacao continua. Actualizacoes da MRA tratadas automaticamente — sem custos adicionais." },
];

const steps = [
  { num: "1", title: "Contacte-nos", body: "Ligue, envie WhatsApp ou preencha o formulario. Confirmamos os seus requisitos no mesmo dia." },
  { num: "2", title: "Avaliacao no local", body: "Avaliamos o seu sistema actual. Bridge simples ou POS completo — recomendamos a solucao certa." },
  { num: "3", title: "Instalacao e activacao", body: "Instalamos a bridge EIS ou POS, registamos os seus terminais na MRA e activamos cada dispositivo." },
  { num: "4", title: "Teste e formacao", body: "Teste completo. Formamos pelo menos um colaborador por instalacao e deixamos um guia do utilizador." },
  { num: "5", title: "Arranque", body: "Cada venda gera um recibo QR assinado pela MRA. Esta em conformidade. Monitorizamos desde o primeiro dia." },
];

const plans = [
  { name: "Bridge Simples", setup: "MWK 120,000", monthly: "MWK 35,000", desc: "Para empresas com POS ou sistema contabilistico existente. Ligamos ao EIS da MRA. Sem hardware adicional. Integracao mais rapida.", featured: false, cta: "Solicitar informacao" },
  { name: "POS Movel Inicial", setup: "MWK 520,000", monthly: "MWK 50,000", desc: "Ideal para pequeno comercio, restauracao e vendedores ambulantes. Software POS completo e conforme ao EIS num dispositivo movel.", featured: false, cta: "Solicitar informacao" },
  { name: "POS de Balcao Empresarial", setup: "MWK 750,000", monthly: "MWK 70,000", desc: "Para lojas, farmacias e comercio geral. Hardware de balcao com inventario completo, vendas e submissao EIS integrados.", featured: true, cta: "Solicitar informacao" },
  { name: "Retalho Pro", setup: "MWK 1,250,000", monthly: "MWK 110,000", desc: "Para grossistas, grandes superficies e retalho de alto volume. Multi-terminal, relatorios avancados e auditoria completa.", featured: false, cta: "Solicitar informacao" },
  { name: "Multi-Estabelecimento / Empresarial", setup: "A partir de MWK 1,500,000", monthly: "MWK 150,000 - 300,000", desc: "Instalacao multi-estabelecimento personalizada. Visita ao local obrigatoria. Inclui integracao dedicada e suporte prioritario.", featured: false, cta: "Solicitar visita ao local" },
];

const monthly = [
  { title: "Monitorizacao de Disponibilidade EIS", body: "Monitorizamos o seu pipeline de submissao a MRA 24 horas por dia. Os problemas sao detectados antes de a MRA o sinalizar." },
  { title: "Deteccao e Resolucao de Erros", body: "Submissoes falhadas sao identificadas e resolvidas. Mantem-se em conformidade mesmo quando algo corre mal." },
  { title: "Gestao de Actualizacoes da MRA", body: "Quando a MRA altera o protocolo EIS ou taxas, aplicamos a actualizacao automaticamente. Sem custo adicional." },
  { title: "Suporte Remoto", body: "Pessoas reais. Confirmacao no mesmo dia. Problemas standard resolvidos em 24 a 48 horas." },
];

const sectors = [
  { title: "Supermercados e Comercio Alimentar", body: "Alto volume de transaccoes. EIS obrigatorio. Frequentemente impreparados. Impacto rapido na integracao." },
  { title: "Farmacias", body: "Registadas no IVA. Reguladas. Conscientes da conformidade. Bridge simples na maioria dos casos." },
  { title: "Lojas de Materiais de Construcao", body: "Muito dinheiro em caixa. Recibos manuais. Perturbacao minima dos sistemas existentes." },
  { title: "Restauracao e Hotelaria", body: "Multiplos terminais. Necessitam de recibos rapidos. Forte oportunidade de venda de POS." },
  { title: "Grossistas e Distribuidores", body: "Alto volume de facturas. Erros EIS sao dispendiosos. Forte valor recorrente mensal." },
  { title: "Fornecedores Automoveis", body: "Registados no IVA. Muitas transaccoes. Frequentemente em sistemas manuais." },
];

const timelines = [
  { pkg: "Bridge Simples", time: "1 a 3 dias uteis" },
  { pkg: "POS Movel Inicial", time: "2 a 5 dias uteis" },
  { pkg: "POS de Balcao Empresarial", time: "3 a 7 dias uteis" },
  { pkg: "Retalho Pro", time: "5 a 14 dias uteis (dependente do local)" },
  { pkg: "Multi-Estabelecimento / Empresarial", time: "Por acordo apos visita ao local" },
];

const incentives = [
  { title: "Primeiros 20 clientes", body: "Primeiro mes de suporte gratuito em qualquer pacote" },
  { title: "Pagamento anual", body: "Desconto de 10% nas mensalidades com pagamento anual" },
  { title: "Integracao em 72 horas", body: "Clientes bridge activos em 1 a 3 dias uteis" },
  { title: "Sem surpresas de fidelizacao", body: "Precos transparentes desde o inicio. Sem taxas de integracao ocultas" },
];

const G = "#25D366";
const BG = "#0a0f0d";
const SURF = "#111a14";
const SURF2 = "#192119";
const BORDER = "#1f2e22";
const TEXT = "#e8f0e9";
const MUTED = "#7a9480";

export default function PtEisPage() {
  const [bizName, setBizName] = useState("");
  const [contactName, setContactName] = useState("");
  const [pkg, setPkg] = useState("");
  const [msg, setMsg] = useState("");

  function submitEnquiry() {
    if (!contactName.trim()) return;
    let t = "EIS Compliance Enquiry (PT)";
    if (contactName) t += "%0ANome: " + encodeURIComponent(contactName);
    if (bizName) t += "%0AOrganizacao: " + encodeURIComponent(bizName);
    if (pkg) t += "%0APacote: " + encodeURIComponent(pkg);
    if (msg) t += "%0AMensagem: " + encodeURIComponent(msg);
    window.open("https://wa.me/265889941700?text=" + t, "_blank");
  }

  const con: React.CSSProperties = { maxWidth: "1100px", margin: "0 auto" };
  const sec: React.CSSProperties = { padding: "80px 32px", background: BG };
  const inp: React.CSSProperties = { width: "100%", padding: "10px 14px", background: SURF2, border: "1px solid " + BORDER, borderRadius: "6px", color: TEXT, fontSize: "14px", outline: "none", boxSizing: "border-box" };
  const eyebrow: React.CSSProperties = { fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: G, marginBottom: "12px" };

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: "var(--font-body)" }}>

      <div style={{ background: "var(--fl-neutral-90)", borderBottom: "1px solid #2a2a2a", padding: "8px 24px", display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
        {ptLinks.map(l => (
          <Link key={l.href} href={l.href} style={{ color: l.href === "/pt/eis" ? G : "var(--fl-neutral-40)", fontSize: "13px", padding: "4px 10px", textDecoration: "none", borderRadius: "4px" }}>{l.label}</Link>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
          <Link href="/eis" style={{ fontSize: "11px", padding: "3px 8px", border: "1px solid #444", borderRadius: "4px", color: "#999", textDecoration: "none" }}>EN</Link>
          <Link href="/pt/eis" style={{ fontSize: "11px", padding: "3px 8px", border: "1px solid " + G, borderRadius: "4px", color: G, textDecoration: "none" }}>PT</Link>
          <Link href="/ny/eis" style={{ fontSize: "11px", padding: "3px 8px", border: "1px solid #444", borderRadius: "4px", color: "#999", textDecoration: "none" }}>NY</Link>
        </div>
      </div>

      <section style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "100px 32px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,211,102,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: G, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: G, display: "inline-block" }} />
          Sistema de Facturacao Electronica MRA
        </div>
        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: 1.1, color: "#fff", marginBottom: "20px", maxWidth: "720px" }}>
          Conformidade EIS para <span style={{ color: G }}>empresas de Malawi</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", maxWidth: "540px", lineHeight: 1.65, marginBottom: "32px" }}>
          Ligamos o seu negocio ao EIS da MRA em 72 horas. Sem interrupcoes. Sem penalizacoes. Recibos QR assinados digitalmente em cada venda.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#eis-contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", background: G, color: "#fff", borderRadius: "6px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>Falar no WhatsApp</a>
          <a href="#eis-pricing" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "6px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Ver Precos</a>
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#0d1a10", borderTop: "1px solid " + BORDER, borderBottom: "1px solid " + BORDER }}>
        {[
          { val: "72h", label: "Tempo de integracao tipico" },
          { val: "MWK 0", label: "Custos ocultos" },
          { val: "Same day", label: "Resposta de suporte" },
          { val: "Local", label: "Equipa em Blantyre" },
        ].map((s, i) => (
          <div key={i} style={{ padding: "28px 20px", textAlign: "center", borderRight: i < 3 ? "1px solid " + BORDER : "none" }}>
            <div style={{ fontFamily: "var(--font-syne)", fontSize: "1.8rem", fontWeight: 800, color: G, lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: "0.72rem", color: MUTED, marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "3px solid " + G, borderBottom: "1px solid " + BORDER }}>
        {pillars.map((p, i) => (
          <div key={i} style={{ padding: "32px 28px", borderRight: i < 2 ? "1px solid " + BORDER : "none", background: SURF }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{p.title}</h3>
            <p style={{ fontSize: "0.84rem", color: MUTED, lineHeight: 1.65, margin: 0 }}>{p.body}</p>
          </div>
        ))}
      </div>

      <section style={sec}>
        <div style={con}>
          <div style={{ marginBottom: "48px" }}>
            <div style={eyebrow}>Processo</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.1 }}>Como funciona</h2>
            <p style={{ color: MUTED, marginTop: "8px" }}>Desde o registo ate ao primeiro recibo assinado pela MRA</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 16px", borderRight: i < 4 ? "1px solid " + BORDER : "none" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: G, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: "16px", flexShrink: 0 }}>{s.num}</div>
                <h4 style={{ fontSize: "0.88rem", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{s.title}</h4>
                <p style={{ fontSize: "0.78rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="eis-pricing" style={{ padding: "80px 32px", background: SURF, borderTop: "1px solid " + BORDER, borderBottom: "1px solid " + BORDER }}>
        <div style={con}>
          <div style={{ marginBottom: "40px" }}>
            <div style={eyebrow}>Precos</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.1 }}>Precos — sem custos ocultos</h2>
            <p style={{ color: MUTED, marginTop: "8px" }}>A instalacao e unica. A mensalidade cobre monitorizacao, suporte e todas as actualizacoes da MRA.</p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(200px, 1fr))", minWidth: "860px", border: "1px solid " + BORDER, borderRadius: "8px", overflow: "hidden" }}>
              {plans.map((p, i) => (
                <div key={i} style={{ padding: "24px 20px", borderRight: i < 4 ? "1px solid " + BORDER : "none", background: p.featured ? "#0d2e18" : SURF2, position: "relative", display: "flex", flexDirection: "column" }}>
                  {p.featured && <div style={{ position: "absolute", top: "12px", right: "12px", background: G, color: "#fff", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "20px", letterSpacing: "0.05em" }}>Popular</div>}
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: p.featured ? "rgba(255,255,255,0.6)" : MUTED, marginBottom: "8px" }}>{p.name}</div>
                  <div style={{ fontFamily: "var(--font-syne)", fontSize: "1.5rem", fontWeight: 800, color: G, lineHeight: 1 }}>{p.setup}</div>
                  <div style={{ fontSize: "0.68rem", color: MUTED, marginBottom: "8px" }}>instalacao unica</div>
                  <div style={{ fontSize: "0.84rem", fontWeight: 700, color: p.featured ? "rgba(255,255,255,0.9)" : TEXT, borderTop: "1px solid " + BORDER, paddingTop: "8px", marginBottom: "8px" }}>{p.monthly} <span style={{ fontWeight: 400, fontSize: "0.72rem", color: MUTED }}>/ mes</span></div>
                  <p style={{ fontSize: "0.75rem", color: p.featured ? "rgba(255,255,255,0.65)" : MUTED, lineHeight: 1.55, flex: 1, margin: "0 0 16px" }}>{p.desc}</p>
                  <a href="#eis-contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "9px 14px", background: p.featured ? G : "rgba(37,211,102,0.12)", color: "#fff", border: p.featured ? "none" : "1px solid " + G, borderRadius: "4px", fontSize: "0.78rem", fontWeight: 700, textDecoration: "none" }}>{p.cta}</a>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid " + BORDER, borderRadius: "8px", overflow: "hidden", marginTop: "24px" }}>
            {incentives.map((item, i) => (
              <div key={i} style={{ padding: "18px 20px", borderRight: i < 3 ? "1px solid " + BORDER : "none", background: SURF2 }}>
                <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: TEXT, marginBottom: "4px" }}>{item.title}</h4>
                <p style={{ fontSize: "0.75rem", color: MUTED, margin: 0, lineHeight: 1.5 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sec}>
        <div style={con}>
          <div style={{ marginBottom: "40px" }}>
            <div style={eyebrow}>Suporte incluido</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.1 }}>O que a sua mensalidade cobre</h2>
            <p style={{ color: MUTED, marginTop: "8px" }}>Todos os planos incluem estas quatro garantias</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid " + BORDER, borderRadius: "8px", overflow: "hidden" }}>
            {monthly.map((m, i) => (
              <div key={i} style={{ padding: "28px 24px", borderRight: i < 3 ? "1px solid " + BORDER : "none", background: SURF }}>
                <h4 style={{ fontSize: "0.88rem", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{m.title}</h4>
                <p style={{ fontSize: "0.8rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 32px 64px", background: BG }}>
        <div style={con}>
          <div style={{ display: "flex", gap: "28px", alignItems: "flex-start", background: "#1a0a0a", border: "1px solid #3a1a1a", borderLeft: "4px solid #e74c3c", borderRadius: "8px", padding: "32px 28px" }}>
            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>O custo da nao conformidade</h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65, marginBottom: "16px" }}>
                As penalizacoes da MRA por incumprimento EIS comecam em MWK 500.000 por infraccao auditada. A reconciliacao manual de recibos consome horas de trabalho por semana. A nossa mensalidade e inferior ao salario diario de um colaborador.
              </p>
              <div style={{ background: "rgba(231,76,60,0.12)", border: "1px solid rgba(231,76,60,0.3)", borderRadius: "6px", padding: "12px 16px", fontSize: "0.84rem", color: "#e74c3c", fontWeight: 600 }}>
                Penalizacoes da MRA a partir de MWK 500.000 por infraccao — o nosso custo anual e uma fraccao de uma unica penalizacao
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 32px", background: SURF, borderTop: "1px solid " + BORDER, borderBottom: "1px solid " + BORDER }}>
        <div style={con}>
          <div style={{ marginBottom: "40px" }}>
            <div style={eyebrow}>Sectores</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.1 }}>A quem servimos</h2>
            <p style={{ color: MUTED, marginTop: "8px" }}>Empresas registadas no IVA em sectores de alto volume</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: BORDER }}>
            {sectors.map((s, i) => (
              <div key={i} style={{ padding: "24px 20px", background: SURF2 }}>
                <h4 style={{ fontSize: "0.88rem", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>{s.title}</h4>
                <p style={{ fontSize: "0.78rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sec}>
        <div style={con}>
          <div style={{ marginBottom: "40px" }}>
            <div style={eyebrow}>Prazos</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.1 }}>Prazos de entrega</h2>
            <p style={{ color: MUTED, marginTop: "8px" }}>Comprometemo-nos com estes prazos. Se dizemos 72 horas, entregamos em 72 horas.</p>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid " + BORDER, borderRadius: "8px", overflow: "hidden" }}>
            <thead>
              <tr style={{ background: SURF }}>
                <th style={{ padding: "12px 16px", textAlign: "left", fontSize: "0.78rem", fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid " + BORDER }}>Pacote</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontSize: "0.78rem", fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid " + BORDER }}>Prazo previsto</th>
              </tr>
            </thead>
            <tbody>
              {timelines.map((t, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? SURF2 : BG }}>
                  <td style={{ padding: "12px 16px", fontSize: "0.84rem", color: TEXT, fontWeight: 600, borderBottom: i < timelines.length - 1 ? "1px solid " + BORDER : "none" }}>{t.pkg}</td>
                  <td style={{ padding: "12px 16px", fontSize: "0.84rem", color: G, fontWeight: 700, borderBottom: i < timelines.length - 1 ? "1px solid " + BORDER : "none" }}>{t.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="eis-contact" style={{ padding: "80px 32px", background: "linear-gradient(135deg, #0a1a0f, #0a2742)", borderTop: "3px solid " + G }}>
        <div style={{ ...con, maxWidth: "640px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", marginBottom: "12px" }}>Pronto para ficar em conformidade?</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", marginBottom: "24px" }}>Ligue, envie WhatsApp ou envie uma mensagem. Podemos integra-lo em 72 horas.</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
              <a href="https://wa.me/265889941700" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: G, color: "#fff", borderRadius: "6px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>Falar no WhatsApp</a>
              <a href="tel:+265889941700" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "6px", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>+265 889 941 700</a>
            </div>
          </div>
          <div style={{ background: SURF2, border: "1px solid " + BORDER, borderRadius: "8px", padding: "32px" }}>
            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: TEXT, marginBottom: "20px" }}>Formulario de consulta EIS</h3>
            <div style={{ display: "grid", gap: "14px" }}>
              <div>
                <label htmlFor="pt-eis-name" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: MUTED, marginBottom: "6px" }}>Nome *</label>
                <input id="pt-eis-name" type="text" placeholder="O seu nome" value={contactName} onChange={e => setContactName(e.target.value)} style={inp} autoComplete="name" />
              </div>
              <div>
                <label htmlFor="pt-eis-org" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: MUTED, marginBottom: "6px" }}>Organizacao</label>
                <input id="pt-eis-org" type="text" placeholder="Nome da empresa" value={bizName} onChange={e => setBizName(e.target.value)} style={inp} autoComplete="organization" />
              </div>
              <div>
                <label htmlFor="pt-eis-pkg" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: MUTED, marginBottom: "6px" }}>Pacote de interesse</label>
                <select id="pt-eis-pkg" value={pkg} onChange={e => setPkg(e.target.value)} style={{ ...inp, cursor: "pointer" }}>
                  <option value="">Seleccione um pacote</option>
                  <option>Bridge Simples — MWK 120,000 setup</option>
                  <option>POS Movel Inicial — MWK 520,000 setup</option>
                  <option>POS de Balcao Empresarial — MWK 750,000 setup</option>
                  <option>Retalho Pro — MWK 1,250,000 setup</option>
                  <option>Multi-Estabelecimento / Empresarial — personalizado</option>
                  <option>Nao tenho a certeza — preciso de aconselhamento</option>
                </select>
              </div>
              <div>
                <label htmlFor="pt-eis-msg" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: MUTED, marginBottom: "6px" }}>Mensagem *</label>
                <textarea id="pt-eis-msg" rows={3} placeholder="Descreva o seu negocio e configuracao actual..." value={msg} onChange={e => setMsg(e.target.value)} style={{ ...inp, resize: "vertical" }} />
              </div>
              <button onClick={submitEnquiry} type="button" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px 20px", background: G, color: "#fff", border: "none", borderRadius: "6px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>
                Enviar via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
