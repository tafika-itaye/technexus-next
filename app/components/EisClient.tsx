"use client";

import Link from "next/link";
import { useState } from "react";
import type { EisStrings } from "@/app/components/eisContent";

const G     = "#1B7F3A";
const GL    = "#E8F5EE";
const INK   = "#0D1117";
const BODY  = "#374151";
const MUTED = "#6B7280";
const LIGHT = "#F3F4F6";
const WHITE = "#FFFFFF";
const BDR   = "#E5E7EB";
const BDR2  = "#D1D5DB";



/* Canonical pricing — single source of truth for all languages */
const PLAN_META = [
  { name: "Tablet POS",                setup: "MWK 350,000",        monthly: "MWK 60,000",        popular: false, hardware: true,  note: false },
  { name: "Retail Kiosk POS",          setup: "MWK 600,000",        monthly: "MWK 75,000",        popular: true,  hardware: true,  note: false },
  { name: "EIS Bridge & Integration",  setup: "From MWK 500,000",   monthly: "MWK 75,000",        popular: false, hardware: false, note: true  },
];

const MB = { setup: "From MWK 5,600,000", monthly: "From MWK 500,000" };



function Check({ color = G }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
      <circle cx="8" cy="8" r="8" fill={color === G ? GL : "#F0FDF4"} />
      <path d="M4.5 8.2l2.2 2.2 4.5-4.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const sectionLight: React.CSSProperties = { padding: "96px 32px", background: WHITE };
const sectionAlt: React.CSSProperties   = { padding: "96px 32px", background: LIGHT };
const container: React.CSSProperties   = { maxWidth: "1160px", margin: "0 auto" };
const eyebrow: React.CSSProperties     = { fontSize: "14px", fontWeight: 600, color: G, marginBottom: "12px" };
const sectionTitle: React.CSSProperties = { fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 40px)", color: INK, lineHeight: 1.15, letterSpacing: "-0.02em" };
const bodyText: React.CSSProperties    = { fontSize: "15px", color: BODY, lineHeight: 1.7, fontWeight: 400 };
const inputStyle: React.CSSProperties  = { width: "100%", padding: "10px 14px", background: WHITE, border: "1px solid " + BDR2, borderRadius: "6px", color: INK, fontSize: "14px", outline: "none", boxSizing: "border-box" as const };

export default function EisClient({ t }: { t: EisStrings }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bizName, setBizName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [notes, setNotes] = useState("");

  const plans = PLAN_META.map((meta, i) => ({
    ...meta,
    desc: t.plans[i].desc,
    features: t.plans[i].features,
    wa: encodeURIComponent(`Hi TechNexus, I would like to enquire about the ${meta.name} package`),
  }));

  const [titleLine1, titleLine2] = t.pricingTitle.split("\n");

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    let msg = "EIS Consultation Request";
    if (bizName) msg += "\nBusiness: " + bizName;
    if (contactName) msg += "\nContact: " + contactName;
    if (phone) msg += "\nPhone: " + phone;
    if (selectedPlan) msg += "\nPlan: " + selectedPlan;
    if (notes) msg += "\nNotes: " + notes;
    window.open("https://wa.me/265889941700?text=" + encodeURIComponent(msg), "_blank");
  }

  return (
    <div style={{ background: WHITE, color: INK, fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>

      {/* HERO */}
      <section style={{ background: "#F6F8F7", padding: "120px 32px 96px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: G }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(27,127,58,0.08) 0%, rgba(27,127,58,0) 42%)", pointerEvents: "none" }} />
        <div style={{ ...container, position: "relative" }}>
          <div style={{ ...eyebrow, color: G, marginBottom: "20px" }}>{t.valueEyebrow}</div>
          <h1 style={{
            fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
            color: INK,
            lineHeight: 1.08,
            letterSpacing: 0,
            maxWidth: "780px",
            marginBottom: "24px",
          }}>
            {t.heroTitle1}<br />
            <span style={{ color: G }}>{t.heroTitle2}</span>
          </h1>
          <p style={{ fontSize: "18px", color: MUTED, maxWidth: "680px", lineHeight: 1.7, marginBottom: "40px", fontWeight: 400 }}>
            {t.heroSub}
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: G, color: WHITE, fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "7px", textDecoration: "none", letterSpacing: "-0.01em" }}>
              {t.ctaConsult}
            </a>
            <a href="#pricing" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: WHITE, color: INK, fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "7px", border: `1px solid ${BDR2}`, textDecoration: "none" }}>
              {t.ctaCompare}
            </a>
          </div>
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginTop: "56px", paddingTop: "40px", borderTop: `1px solid ${BDR}` }}>
            {t.trust.map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7.2l3 3 6-6" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontSize: "13px", color: BODY, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ ...sectionLight, paddingTop: "80px" }}>
        <div style={container}>
          <div style={{ marginBottom: "12px", ...eyebrow }}>{t.pricingEyebrow}</div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", gap: "16px" }}>
            <h2 style={{ ...sectionTitle, maxWidth: "500px" }}>
              {titleLine1}<br />{titleLine2}
            </h2>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GL, color: G, fontWeight: 600, fontSize: "14px", padding: "11px 22px", borderRadius: "7px", border: "1px solid rgba(27,127,58,0.25)", textDecoration: "none", whiteSpace: "nowrap" as const }}>
              {t.askUs}
            </a>
          </div>

          <p style={{ fontSize: "15px", color: BODY, lineHeight: 1.65, maxWidth: "720px", marginTop: "-24px", marginBottom: "40px" }}>{t.pricingLede}</p>

          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px", alignItems: "start" }}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: WHITE,
                  border: plan.popular ? `2px solid ${G}` : `1px solid ${BDR}`,
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: plan.popular ? "0 4px 24px rgba(27,127,58,0.12)" : "0 1px 4px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "4px", background: plan.popular ? G : BDR }} />
                <div style={{ padding: "24px 24px 20px" }}>
                  {plan.popular && (
                    <div style={{ display: "inline-block", background: G, color: WHITE, fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "4px", marginBottom: "12px" }}>
                      {t.mostPopular}
                    </div>
                  )}
                  <h3 style={{ fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)", fontSize: "17px", fontWeight: 700, color: INK, marginBottom: "6px" }}>{plan.name}</h3>
                  <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6, marginBottom: "20px", minHeight: "52px" }}>{plan.desc}</p>
                  <div style={{ padding: "16px", background: plan.popular ? GL : LIGHT, borderRadius: "8px", marginBottom: "0" }}>
                    <div style={{ fontSize: "11px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{t.setupFee}</div>
                    <div style={{ fontSize: "20px", fontWeight: 800, color: plan.popular ? G : INK, letterSpacing: "-0.02em", marginBottom: "10px" }}>{plan.setup}{plan.note ? "*" : ""}</div>
                    <div style={{ borderTop: `1px solid ${plan.popular ? "rgba(27,127,58,0.2)" : BDR}`, paddingTop: "10px" }}>
                      <div style={{ fontSize: "11px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{t.monthlyLabel}</div>
                      <div style={{ fontSize: "16px", fontWeight: 700, color: plan.popular ? G : BODY }}>{plan.monthly} {t.perMonth}</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "0 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  {plan.hardware && <div style={{ fontSize: "11px", fontWeight: 700, color: G, marginBottom: "10px" }}>{t.hardwareNote}</div>}
                  <div style={{ fontSize: "11px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px", marginTop: "4px" }}>{t.whatsIncluded}</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
                        <Check color={plan.popular ? G : "#6B7280"} />
                        <span style={{ fontSize: "13px", color: plan.popular ? BODY : MUTED, lineHeight: 1.55 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={"https://wa.me/265889941700?text=" + plan.wa}
                    target="_blank"
                    rel="noopener"
                    style={{
                      display: "block",
                      textAlign: "center",
                      marginTop: "24px",
                      padding: "12px 20px",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: 700,
                      textDecoration: "none",
                      background: plan.popular ? G : WHITE,
                      color: plan.popular ? WHITE : INK,
                      border: plan.popular ? "none" : `1px solid ${BDR2}`,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {plan.name === "Multi-Branch / Enterprise" ? t.customQuote : t.enquirePlan}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "20px", border: `1px solid ${BDR}`, borderRadius: "12px", background: LIGHT, padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 420px" }}>
              <h3 style={{ fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)", fontSize: "18px", fontWeight: 700, color: INK, marginBottom: "6px" }}>{t.mbTitle}</h3>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6, margin: "0 0 10px" }}>{t.mbDesc}</p>
              <div style={{ fontSize: "13px", fontWeight: 600, color: BODY }}>{t.setupFee}: {MB.setup} &middot; {t.monthlyLabel}: {MB.monthly} {t.perMonth}</div>
            </div>
            <a href={"https://wa.me/265889941700?text=" + encodeURIComponent("Hi TechNexus, I would like to enquire about the Multi-Branch / Enterprise package")} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: G, color: WHITE, fontWeight: 700, fontSize: "14px", padding: "12px 24px", borderRadius: "7px", textDecoration: "none", whiteSpace: "nowrap" as const }}>
              {t.customQuote}
            </a>
          </div>

          <p style={{ fontSize: "12px", color: MUTED, marginTop: "14px" }}>{t.setupNote}</p>

          <div style={{ marginTop: "56px", marginBottom: "20px" }}>
            <div style={eyebrow}>{t.integrationsTitle}</div>
            <h2 style={{ ...sectionTitle, fontSize: "clamp(22px, 3vw, 32px)", maxWidth: "640px" }}>{t.integrationsLede}</h2>
          </div>

          <div style={{ marginTop: "0", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", padding: "20px 24px", background: LIGHT, borderRadius: "10px", border: `1px solid ${BDR}` }}>
            <div style={{ fontSize: "12px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" as const }}>{t.integrations}</div>
            <div style={{ width: "1px", height: "20px", background: BDR }} />
            {["Sage", "QuickBooks", "Pastel", "Odoo", "ERP"].map(name => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: "7px", background: WHITE, border: `1px solid ${BDR}`, borderRadius: "6px", padding: "6px 14px" }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3 3 6-6" stroke={G} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontSize: "13px", fontWeight: 600, color: BODY }}>{name}</span>
              </div>
            ))}
            <span style={{ fontSize: "12px", color: MUTED }}>{t.integrationsNote}</span>
          </div>

          <div style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: BDR, border: `1px solid ${BDR}`, borderRadius: "10px", overflow: "hidden" }}>
            {t.perks.map(([pt1, pb]) => (
              <div key={pt1} style={{ background: WHITE, padding: "20px 22px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: INK, marginBottom: "4px" }}>{pt1}</div>
                <p style={{ fontSize: "12px", color: MUTED, lineHeight: 1.6, margin: 0 }}>{pb}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px" }}>
            <div style={eyebrow}>{t.addonsTitle}</div>
            <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px" }}>{t.addonsLede}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: BDR, border: `1px solid ${BDR}`, borderRadius: "10px", overflow: "hidden" }}>
              {t.addons.map(([an, ab]) => (
                <div key={an} style={{ background: WHITE, padding: "20px 22px" }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: INK, marginBottom: "4px" }}>{an}</div>
                  <p style={{ fontSize: "12px", color: MUTED, lineHeight: 1.6, margin: 0 }}>{ab}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section id="value" style={{ ...sectionAlt }}>
        <div style={container}>
          <div style={{ ...eyebrow }}>{t.valueEyebrow}</div>
          <h2 style={{ ...sectionTitle, maxWidth: "560px", marginBottom: "12px" }}>
            {t.valueTitle}
          </h2>
          <p style={{ ...bodyText, maxWidth: "560px", marginBottom: "56px" }}>
            {t.valueBody}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {t.pillars.map((p) => (
              <div key={p.title} style={{ background: WHITE, border: `1px solid ${BDR}`, borderRadius: "10px", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: GL, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.2l3.5 3.5 6.5-6.5" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: INK }}>{p.title}</div>
                <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.65, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ ...sectionLight }}>
        <div style={container}>
          <div style={{ ...eyebrow }}>{t.howEyebrow}</div>
          <h2 style={{ ...sectionTitle, marginBottom: "48px" }}>{t.howTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2px", background: BDR, border: `1px solid ${BDR}`, borderRadius: "12px", overflow: "hidden" }}>
            {t.steps.map((s) => (
              <div key={s.step} style={{ background: WHITE, padding: "28px 24px" }}>
                <div style={{ fontSize: "11px", fontWeight: 800, color: G, letterSpacing: "0.1em", marginBottom: "12px" }}>{s.step}</div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: INK, marginBottom: "8px" }}>{s.title}</div>
                <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ ...sectionAlt }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "start" }} className="faq-grid">
            <div>
              <div style={{ ...eyebrow }}>{t.faqEyebrow}</div>
              <h2 style={{ ...sectionTitle, marginBottom: "16px" }}>{t.faqTitle}</h2>
              <p style={{ ...bodyText, fontSize: "14px" }}>
                {t.faqSub}
              </p>
              <a href={"https://wa.me/265889941700?text=" + t.faqWa} target="_blank" rel="noopener" style={{ display: "inline-flex", marginTop: "20px", alignItems: "center", gap: "8px", background: G, color: WHITE, fontWeight: 700, fontSize: "13px", padding: "10px 20px", borderRadius: "7px", textDecoration: "none" }}>
                {t.faqAsk}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: BDR, border: `1px solid ${BDR}`, borderRadius: "12px", overflow: "hidden" }}>
              {t.faqs.map((f, i) => (
                <div key={i} style={{ background: openFaq === i ? GL : WHITE }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", padding: "20px 24px", fontFamily: "inherit", fontSize: "14px", fontWeight: 600, color: INK, cursor: "pointer", background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                  >
                    {f.q}
                    <span style={{ fontSize: "20px", fontWeight: 400, color: G, marginLeft: "16px", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>+</span>
                  </button>
                  {openFaq === i && (
                    <p style={{ padding: "0 24px 20px", fontSize: "14px", color: BODY, lineHeight: 1.7, fontWeight: 400, maxWidth: "640px", margin: 0 }}>{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ ...sectionLight, borderTop: `1px solid ${BDR}` }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "start" }} className="contact-grid">
            <div>
              <div style={{ ...eyebrow }}>{t.contactEyebrow}</div>
              <h2 style={{ ...sectionTitle, marginBottom: "16px" }}>{t.contactTitle}</h2>
              <p style={{ ...bodyText, marginBottom: "32px" }}>
                {t.contactBody}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: t.infoLabels.wa, val: "+265 889 941 700" },
                  { label: t.infoLabels.email, val: "technexus_mw@proton.me" },
                  { label: t.infoLabels.loc, val: "Lilongwe & Blantyre, Malawi" },
                  { label: t.infoLabels.web, val: "www.technexusmw.com" },
                ].map(({ label, val }) => (
                  <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: G, flexShrink: 0, marginTop: "6px" }} />
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                      <div style={{ fontSize: "14px", color: INK, fontWeight: 500 }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "36px", padding: "20px", background: LIGHT, borderRadius: "10px", border: `1px solid ${BDR}` }}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>{t.mraTitle}</div>
                <p style={{ fontSize: "13px", color: BODY, lineHeight: 1.6, margin: 0 }}>
                  {t.mraBody} <Link href={t.credentialsHref} style={{ color: G, textDecoration: "underline", textUnderlineOffset: "3px" }}>{t.mraCred}</Link>
                </p>
                <a
                  href="/certificates/technexus-mra-eis-certificate.pdf"
                  download
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", fontSize: "13px", fontWeight: 700, color: G, textDecoration: "none" }}
                >
                  {t.mraDownload}
                </a>
              </div>

              {/* Trust badges */}
              <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <a href={t.credentialsHref} style={{ flex: "1 1 160px", textDecoration: "none" }}>
                  <div style={{ padding: "20px", background: WHITE, borderRadius: "10px", border: `1px solid ${BDR}`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/badges/mra-eis-certified.svg" alt="MRA EIS Certified Integrator — TechNexus" width={120} height={120} loading="lazy" style={{ display: "block" }} />
                    <span style={{ fontSize: "11px", fontWeight: 700, color: BODY, letterSpacing: "0.04em", textAlign: "center" }}>{t.verifyCert}</span>
                  </div>
                </a>
                <a href="https://buymalawi.mw/" target="_blank" rel="noopener" style={{ flex: "1 1 160px", textDecoration: "none" }}>
                  <div style={{ padding: "20px", background: WHITE, borderRadius: "10px", border: `1px solid ${BDR}`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/badges/buy-malawian.svg" alt="Buy Malawian, Build Malawi — TechNexus is a verified member" width={120} height={120} loading="lazy" style={{ display: "block" }} />
                    <span style={{ fontSize: "11px", fontWeight: 700, color: BODY, letterSpacing: "0.04em", textAlign: "center" }}>{t.proudlyMw}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <div style={{ background: WHITE, border: `1px solid ${BDR}`, borderRadius: "12px", padding: "36px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)", fontSize: "18px", fontWeight: 700, color: INK, marginBottom: "24px" }}>{t.formTitle}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { id: "eis-biz", label: t.fBiz, value: bizName, setter: setBizName, placeholder: t.fBizPh, type: "text" },
                    { id: "eis-contact", label: t.fContact, value: contactName, setter: setContactName, placeholder: t.fContactPh, type: "text" },
                    { id: "eis-phone", label: t.fPhone, value: phone, setter: setPhone, placeholder: "+265 ...", type: "tel" },
                  ].map(({ id, label, value, setter, placeholder, type }) => (
                    <div key={label}>
                      <label htmlFor={id} style={{ fontSize: "12px", fontWeight: 600, color: BODY, display: "block", marginBottom: "6px" }}>{label}</label>
                      <input
                        id={id} type={type}
                        value={value}
                        onChange={e => setter(e.target.value)}
                        placeholder={placeholder}
                        style={inputStyle}
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="eis-plan" style={{ fontSize: "12px", fontWeight: 600, color: BODY, display: "block", marginBottom: "6px" }}>{t.fPlan}</label>
                    <select id="eis-plan" value={selectedPlan} onChange={e => setSelectedPlan(e.target.value)} style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="">{t.fPlanPh}</option>
                      {plans.map(p => <option key={p.name}>{p.name}</option>)}
                      <option>{t.fNotSure}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eis-notes" style={{ fontSize: "12px", fontWeight: 600, color: BODY, display: "block", marginBottom: "6px" }}>{t.fNotes}</label>
                    <textarea
                      id="eis-notes" value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder={t.fNotesPh}
                      rows={3}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                  <button
                    onClick={submitForm}
                    style={{ background: G, color: WHITE, fontWeight: 700, fontSize: "15px", padding: "13px 24px", borderRadius: "7px", border: "none", cursor: "pointer", letterSpacing: "-0.01em" }}
                  >
                    {t.fSend}
                  </button>
                  <p style={{ fontSize: "11px", color: MUTED, lineHeight: 1.6, textAlign: "center", margin: 0 }}>
                    {t.fPrivacy1}{" "}
                    <Link href={t.privacyHref} style={{ color: G, textDecoration: "underline" }}>{t.fPrivacyLink}</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
        input:focus, select:focus, textarea:focus {
          border-color: #1B7F3A !important;
          box-shadow: 0 0 0 3px rgba(27,127,58,0.12);
        }
        a[href^="https://wa.me"]:hover { opacity: 0.88; }
      `}</style>
    </div>
  );
}
