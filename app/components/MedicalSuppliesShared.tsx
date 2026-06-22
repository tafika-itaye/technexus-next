"use client";
import React from "react";

const BG = "var(--fl-neutral-2)";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const ACCENT = "var(--fl-blue)";

export const TH: React.CSSProperties = { padding: "10px 16px", textAlign: "left" as const, fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", color: MUTED, borderBottom: "1px solid var(--fl-neutral-8)", background: "var(--fl-neutral-4)" };
export const TD: React.CSSProperties = { padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid var(--fl-neutral-8)", color: TEXT };

export type Locale = "en" | "pt" | "ny";
export type Row = [string, string, string, string];

export interface MedicalSuppliesData {
  masks: Row[];
  respiratory: Row[];
  gloves: Row[];
  syringes: Row[];
  disinfectants: Row[];
  diagnostics: Row[];
  monitoring: Row[];
  labCotton: Row[];
  furniture: Row[];
  mobility: Row[];
  pharma: Row[];
}

const t = {
  en: {
    waBase: "https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0A",
    waLabel: "%0APrice%3A%20",
    heroTitle: "Medical Supplies Catalogue",
    heroSub: "Healthcare equipment, consumables and pharmaceuticals sourced through verified SADC partners. Serving Malawi, Zambia, Mozambique and South Africa.",
    ratePill: "Rate: 1 USD = MK 1,734 \u00b7 March 2026 \u00b7 Contact for formal quotations",
    colProduct: "Product", colPack: "Pack",
    s1: "Protective Equipment \u2014 Masks", s1sub: "Certified protective masks for clinical and institutional use.",
    s2: "Respiratory Masks and Devices", s2sub: "Respiratory support for oxygen therapy and nebulisation.",
    s3: "Gloves", s3sub: "Examination, surgical and disposable gloves.",
    s4: "Syringes and Scalpels", s5: "Disinfectants and Alcohol",
    s6: "Diagnostic Instruments", s7: "Monitoring Devices",
    s8: "Laboratory and Cotton", s9: "Hospital Furniture and Scales",
    s10: "Mobility Aids", s11: "Medicines and Pharmaceuticals",
    orderTitle: "Ordering Information",
    orderBody: "All medical supplies are sourced through verified wholesale partners. Prices on application for institutional and bulk orders. Discounts available for hospitals, clinics, NGOs and government health programmes. Contact TechNexus for formal quotations and supply chain agreements.",
    orderCta: "Request a Quote",
    orderWa: "https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20from%20the%20Medical%20Supplies%20page.",
  },
  pt: {
    waBase: "https://wa.me/265889941700?text=Ola%20TechNexus%2C%20gostaria%20de%20um%20orcamento%20para%3A%0A",
    waLabel: "%0APreco%3A%20",
    heroTitle: "Catalogo de Material Medico",
    heroSub: "Equipamento de saude, consumiveis e farmaceuticos provenientes de parceiros SADC verificados. Ao servico do Malawi, Zambia, Mocambique e Africa do Sul.",
    ratePill: "Taxa: 1 USD = MK 1,734 \u00b7 Marco 2026 \u00b7 Contacte para orcamentos formais",
    colProduct: "Produto", colPack: "Embalagem",
    s1: "Equipamento de Proteccao \u2014 Mascaras", s1sub: "Mascaras de proteccao certificadas para uso clinico e institucional.",
    s2: "Dispositivos Respiratorios", s2sub: "Suporte respiratorio para oxigenoterapia e nebulizacao.",
    s3: "Luvas", s3sub: "Luvas de exame, cirurgicas e descartaveis.",
    s4: "Seringas e Bisturis", s5: "Desinfectantes e Alcool",
    s6: "Instrumentos de Diagnostico", s7: "Dispositivos de Monitorizacao",
    s8: "Laboratorio e Algodao", s9: "Mobiliario Hospitalar e Balancas",
    s10: "Auxiliares de Mobilidade", s11: "Medicamentos e Farmaceuticos",
    orderTitle: "Informacao de Encomenda",
    orderBody: "Todo o material medico e adquirido atraves de parceiros grossistas verificados. Precos sob consulta para encomendas institucionais e a granel. Descontos disponiveis para hospitais, clinicas, ONGs e programas de saude governamentais. Contacte a TechNexus para orcamentos formais e acordos de cadeia de fornecimento.",
    orderCta: "Pedir Orcamento",
    orderWa: "https://wa.me/265889941700?text=Ola%20TechNexus%2C%20gostaria%20de%20um%20orcamento%20da%20pagina%20Material%20Medico.",
  },
  ny: {
    waBase: "https://wa.me/265889941700?text=Muli%20bwanji%20TechNexus%2C%20ndikufuna%20quotation%20ya%3A%0A",
    waLabel: "%0AMtengo%3A%20",
    heroTitle: "Zinthu za Chipatala",
    heroSub: "Zida za zaumoyo, zinthu zomalizidwa ndi mankhwala ochokera kwa ogulitsa otsimikiziridwa a SADC. Tili ndi ntchito ku Malawi, Zambia, Mozambique ndi South Africa.",
    ratePill: "Mtengo: 1 USD = MK 1,734 \u00b7 Marichi 2026 \u00b7 Lumikizanani kwa quotation yovomerezeka",
    colProduct: "Chinthu", colPack: "Phukusi",
    s1: "Zida Zotetezera \u2014 Masiki", s1sub: "Masiki azoteteza otsimikiziridwa kwa chipatala ndi mabungwe.",
    s2: "Zipangizo Zotetezera Kupuma", s2sub: "Thandizo la kupuma kwa okisijeni ndi nebulization.",
    s3: "Migonjera ya Dzanja", s3sub: "Migonjera ya kuyeza, opaleshoni ndi yomalizidwa.",
    s4: "Ma Injekishoni ndi Zinganga", s5: "Zophetsa Tizilombo ndi Alkoholi",
    s6: "Zida Zoyeza Matenda", s7: "Zida Zoyang'anira",
    s8: "Laaboretori ndi Zida Zina", s9: "Fanicha ya Chipatala",
    s10: "Zipangizo Zothandizira Kuyenda", s11: "Mankhwala",
    orderTitle: "Zidziwitso za Kulamula",
    orderBody: "Zinthu zonse za chipatala zichokera kwa ogulitsa otsimikiziridwa. Mitengo momufunira kwa malamulo a mabungwe ndi okulidwa ambiri. Kutsitsa kulikonse kumapezeka kwa zipatala, makiliniiki, mabungwe osapanga phindu ndi mapulogalamu a boma. Lumikizanani nafe kuti mupeze quotation yovomerezeka ndi mgwirizano wa bungwe lopezeretsa zinthu.",
    orderCta: "Pemphani Quotation",
    orderWa: "https://wa.me/265889941700?text=Muli%20bwanji%20TechNexus%2C%20ndikufuna%20quotation%20kuchokera%20ku%20peji%20ya%20Zinthu%20za%20Chipatala.",
  },
};

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div style={{ borderLeft: "4px solid var(--fl-blue)", paddingLeft: "16px", marginBottom: sub ? "6px" : "20px" }}>
      <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>{title}</h2>
      {sub && <p style={{ fontSize: "13px", color: MUTED, margin: "4px 0 0" }}>{sub}</p>}
    </div>
  );
}

function QuoteBtn({ name, price, waBase, waLabel }: { name: string; price: string; waBase: string; waLabel: string }) {
  const wa = waBase + encodeURIComponent(name) + waLabel + encodeURIComponent(price);
  return (
    <a href={wa} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" as const }}>
      Quote
    </a>
  );
}

function ProdTable({ rows, colProduct, colPack, waBase, waLabel }: { rows: Row[]; colProduct: string; colPack: string; waBase: string; waLabel: string }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "36px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "400px" }}>
        <thead>
          <tr>
            <th style={TH}>{colProduct}</th>
            <th style={TH}>{colPack}</th>
            <th style={TH}>MWK</th>
            <th style={TH}>USD</th>
            <th style={TH}>Quote</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, pack, mwk, usd], i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
              <td style={{ ...TD, fontWeight: 600 }}>{name}</td>
              <td style={{ ...TD, color: MUTED }}>{pack}</td>
              <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{mwk}</td>
              <td style={{ ...TD, color: MUTED }}>{usd}</td>
              <td style={TD}><QuoteBtn name={name} price={usd} waBase={waBase} waLabel={waLabel} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MedicalSuppliesShared({ locale, data }: { locale: Locale; data: MedicalSuppliesData }) {
  const tr = t[locale];
  const pt = (rows: Row[]) => <ProdTable rows={rows} colProduct={tr.colProduct} colPack={tr.colPack} waBase={tr.waBase} waLabel={tr.waLabel} />;
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>
      <div style={{ position: "relative", background: "var(--fl-neutral-90)", minHeight: "280px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden" }}>
        <img src="/index_main/medical_equipment_1.webp" alt="" aria-hidden="true" width={1100} height={280} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.35 }} loading="eager" />
        <div style={{ position: "relative", zIndex: 1, padding: "64px 24px 48px" }}>
          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.8rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>{tr.heroTitle}</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", maxWidth: "640px", margin: "0 auto 20px", lineHeight: 1.7 }}>{tr.heroSub}</p>
          <div style={{ display: "inline-block", background: "rgba(0,120,212,0.25)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "#90caf9", fontSize: "13px" }}>{tr.ratePill}</div>
        </div>
      </div>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>
        <SectionHead title={tr.s1} sub={tr.s1sub} />{pt(data.masks)}
        <SectionHead title={tr.s2} sub={tr.s2sub} />{pt(data.respiratory)}
        <SectionHead title={tr.s3} sub={tr.s3sub} />{pt(data.gloves)}
        <SectionHead title={tr.s4} />{pt(data.syringes)}
        <SectionHead title={tr.s5} />{pt(data.disinfectants)}
        <SectionHead title={tr.s6} />{pt(data.diagnostics)}
        <SectionHead title={tr.s7} />{pt(data.monitoring)}
        <SectionHead title={tr.s8} />{pt(data.labCotton)}
        <SectionHead title={tr.s9} />{pt(data.furniture)}
        <SectionHead title={tr.s10} />{pt(data.mobility)}
        <SectionHead title={tr.s11} />{pt(data.pharma)}
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid var(--fl-blue)", borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>{tr.orderTitle}</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7, marginBottom: "20px" }}>{tr.orderBody}</p>
          <a href={tr.orderWa} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>{tr.orderCta}</a>
        </div>
      </div>
    </div>
  );
}