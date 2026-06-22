"use client";

import Link from "next/link";
import { useState } from "react";


const G     = "#1B7F3A";
const GL    = "#E8F5EE";
const INK   = "#0D1117";
const BODY  = "#374151";
const MUTED = "#6B7280";
const LIGHT = "#F3F4F6";
const WHITE = "#FFFFFF";
const BDR   = "#E5E7EB";
const BDR2  = "#D1D5DB";


const plans = [
  {
    name: "Bridge Only",
    setup: "MWK 350,000",
    monthly: "MWK 75,000 / mo",
    desc: "For businesses with an existing POS or accounting system that only need MRA EIS connectivity.",
    popular: false,
    wa: "Hi%20TechNexus%2C%20I%20want%20to%20enquire%20about%20the%20Bridge%20Only%20EIS%20plan",
    features: [
      "MRA EIS bridge",
      "Terminal activation support",
      "Online invoice submission",
      "QR receipt support",
      "Basic monitoring",
      "Email support",
    ],
  },
  {
    name: "Mobile POS Starter",
    setup: "MWK 850,000",
    monthly: "MWK 95,000 / mo",
    desc: "For small shops, mobile sellers, food service, and market traders.",
    popular: false,
    wa: "Hi%20TechNexus%2C%20I%20want%20to%20enquire%20about%20the%20Mobile%20POS%20Starter%20plan",
    features: [
      "Mobile / tablet POS",
      "MRA fiscal receipts",
      "Product catalogue",
      "Basic stock tracking",
      "Offline receipt support for allowed sales",
      "Receipt print support",
      "Standard onboarding",
    ],
  },
  {
    name: "Counter POS Business",
    setup: "MWK 1,875,000",
    monthly: "MWK 190,000 / mo",
    desc: "For shops, pharmacies, general dealers, and counter-based retail.",
    popular: true,
    wa: "Hi%20TechNexus%2C%20I%20want%20to%20enquire%20about%20the%20Counter%20POS%20Business%20plan",
    features: [
      "Full counter POS",
      "MRA online and offline sales handling",
      "Signed QR receipts",
      "Stock protection, prevents over-selling",
      "Cashier and manager user roles",
      "Inventory dashboard",
      "Customer display support",
      "Sage Business Cloud Accounting sync",
      "QuickBooks Online sync",
      "MRA invoice ID and QR write-back",
      "Failed invoice monitoring",
      "Priority setup",
    ],
  },
  {
    name: "Retail Pro",
    setup: "MWK 3,450,000",
    monthly: "MWK 315,000 / mo",
    desc: "For wholesalers, multi-department stores, and high-volume retail.",
    popular: false,
    wa: "Hi%20TechNexus%2C%20I%20want%20to%20enquire%20about%20the%20Retail%20Pro%20plan",
    features: [
      "Everything in Counter POS Business",
      "Advanced inventory controls",
      "Low-stock alerts",
      "Supplier and cost tracking",
      "Returns and credit notes",
      "Customer purchase history",
      "Branch-level reports",
      "Stock drift alerts against MRA",
      "Accountant / month-end export pack",
      "Priority support",
    ],
  },
  {
    name: "Multi-Branch / Enterprise",
    setup: "From MWK 5,600,000",
    monthly: "From MWK 500,000 / mo",
    desc: "For multi-branch operators, groups, and custom deployments.",
    popular: false,
    wa: "Hi%20TechNexus%2C%20I%20want%20to%20enquire%20about%20Multi-Branch%20EIS%20deployment",
    features: [
      "Multi-branch rollout",
      "Multi-terminal management",
      "Consolidated reporting",
      "Dedicated onboarding manager",
      "Custom accounting integration",
      "Custom workflows",
      "SLA support",
      "Field deployment planning",
      "Staff training",
      "Data cleanup and migration",
    ],
  },
];

const valuePillars = [
  { title: "MRA-certified fiscal receipts", body: "Every sale carries a digitally signed MRA QR receipt. Your compliance is provable and audit-ready from day one." },
  { title: "Stock protection before sale", body: "Sales are blocked when stock runs out. No over-selling, no correction headaches, no MRA discrepancy risk." },
  { title: "Offline receipts for allowed transactions", body: "Power cuts and network drops do not stop your trading. Queued submissions sync automatically when connectivity resumes." },
  { title: "Sage and QuickBooks accounting sync", body: "Counter POS Business and above sync live with Sage Business Cloud Accounting and QuickBooks Online." },
  { title: "Manager dashboards and audit trail", body: "Full transaction history with MRA invoice numbers. Voids, returns, and credit notes tracked and audit-ready." },
  { title: "Local Malawi onboarding and support", body: "Blantyre-based team. Same-day response. MRA updates handled automatically. You trade; we keep you compliant." },
];

const faqs = [
  { q: "Do I need to buy new hardware?", a: "Not always. If you already have a POS or accounting system, the Bridge Only plan connects it to MRA EIS without hardware changes. If you need a full POS terminal, we supply and configure it as part of the Mobile POS, Counter POS, or Retail Pro packages." },
  { q: "What happens when the internet goes down?", a: "The system queues all transactions locally and submits them to MRA when connectivity resumes. You keep trading without interruption. MRA allows a defined offline window and our system handles the sync automatically." },
  { q: "How long does MRA registration take?", a: "Bridge-only clients are typically live within 1 to 3 business days. Counter and Retail POS installations take 3 to 5 days depending on the number of terminals. We handle MRA registration and device activation on your behalf." },
  { q: "Can I keep my existing POS or accounting software?", a: "Yes. The Bridge Only plan is designed exactly for this. We integrate with common systems used in Malawi including QuickBooks and Sage. We assess your system before recommending the right plan." },
  { q: "What does the monthly fee cover?", a: "Ongoing monitoring, same-day support, and all MRA update handling. When MRA releases firmware or compliance updates, we apply them at no extra charge. The monthly fee is fixed with no hidden integration costs." },
  { q: "Does the Counter POS Business plan really sync with QuickBooks and Sage?", a: "Yes. Counter POS Business and above include live two-way sync with Sage Business Cloud Accounting and QuickBooks Online, including MRA invoice ID and QR write-back so your accounting records match MRA records precisely." },
];


const sectionLight: React.CSSProperties = { padding: "96px 32px", background: WHITE };
const sectionAlt: React.CSSProperties   = { padding: "96px 32px", background: LIGHT };
const container: React.CSSProperties   = { maxWidth: "1160px", margin: "0 auto" };
const eyebrow: React.CSSProperties     = { fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: G, marginBottom: "12px" };
const sectionTitle: React.CSSProperties = { fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 40px)", color: INK, lineHeight: 1.15, letterSpacing: "-0.02em" };
const bodyText: React.CSSProperties    = { fontSize: "15px", color: BODY, lineHeight: 1.7, fontWeight: 400 };
const inputStyle: React.CSSProperties  = { width: "100%", padding: "10px 14px", background: WHITE, border: "1px solid " + BDR2, borderRadius: "6px", color: INK, fontSize: "14px", outline: "none", boxSizing: "border-box" as const };


function Check({ color = G }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
      <circle cx="8" cy="8" r="8" fill={color === G ? GL : "#F0FDF4"} />
      <path d="M4.5 8.2l2.2 2.2 4.5-4.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


export default function EISPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bizName, setBizName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [notes, setNotes] = useState("");

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    let t = "EIS%20Consultation%20Request";
    if (bizName) t += "%0ABusiness%3A%20" + encodeURIComponent(bizName);
    if (contactName) t += "%0AContact%3A%20" + encodeURIComponent(contactName);
    if (phone) t += "%0APhone%3A%20" + encodeURIComponent(phone);
    if (selectedPlan) t += "%0APlan%3A%20" + encodeURIComponent(selectedPlan);
    if (notes) t += "%0ANotes%3A%20" + encodeURIComponent(notes);
    window.open("https://wa.me/265889941700?text=" + t, "_blank");
  }

  return (
    <div style={{ background: WHITE, color: INK, fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>

      {/* HERO */}
      <section style={{
        background: INK,
        padding: "120px 32px 96px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle green accent behind hero */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: G }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(27,127,58,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ ...container, position: "relative" }}>
          <h1 style={{
            fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
            color: WHITE,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            maxWidth: "780px",
            marginBottom: "24px",
          }}>
            EIS Compliance, POS,<br />
            and Accounting, <span style={{ color: G }}>in one platform.</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#9CA3AF", maxWidth: "560px", lineHeight: 1.7, marginBottom: "40px", fontWeight: 300 }}>
            Connect your business to MRA EIS within 72 hours. Keep your current system or deploy a full counter POS with Sage and QuickBooks sync built in.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: G, color: WHITE, fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "7px", textDecoration: "none", letterSpacing: "-0.01em" }}
            >
              Book EIS Consultation
            </a>
            <a
              href="#pricing"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "#D1D5DB", fontWeight: 500, fontSize: "15px", padding: "14px 28px", borderRadius: "7px", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none" }}
            >
              Compare Packages
            </a>
          </div>
          {/* Trust strip */}
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginTop: "56px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {["72-hr onboarding", "MRA-signed QR receipts", "Sage & QuickBooks sync", "Blantyre-based support"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7.2l3 3 6-6" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontSize: "13px", color: "#9CA3AF", fontWeight: 400 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ ...sectionLight, paddingTop: "80px" }}>
        <div style={container}>
          <div style={{ marginBottom: "12px", ...eyebrow }}>Pricing</div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", gap: "16px" }}>
            <h2 style={{ ...sectionTitle, maxWidth: "500px" }}>
              EIS + POS + Accounting.<br />One rate card.
            </h2>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GL, color: G, fontWeight: 600, fontSize: "14px", padding: "11px 22px", borderRadius: "7px", border: "1px solid rgba(27,127,58,0.25)", textDecoration: "none", whiteSpace: "nowrap" as const }}>
              Not sure which plan? Ask us
            </a>
          </div>

          
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
                {/* Top bar */}
                <div style={{ height: "4px", background: plan.popular ? G : BDR }} />

                {/* Header */}
                <div style={{ padding: "24px 24px 20px" }}>
                  {plan.popular && (
                    <div style={{ display: "inline-block", background: G, color: WHITE, fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "4px", marginBottom: "12px" }}>
                      Most Popular
                    </div>
                  )}
                  <h3 style={{ fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)", fontSize: "17px", fontWeight: 700, color: INK, marginBottom: "6px" }}>{plan.name}</h3>
                  <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6, marginBottom: "20px", minHeight: "52px" }}>{plan.desc}</p>

                  {/* Pricing */}
                  <div style={{ padding: "16px", background: plan.popular ? GL : LIGHT, borderRadius: "8px", marginBottom: "0" }}>
                    <div style={{ fontSize: "11px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Setup fee</div>
                    <div style={{ fontSize: "20px", fontWeight: 800, color: plan.popular ? G : INK, letterSpacing: "-0.02em", marginBottom: "10px" }}>{plan.setup}</div>
                    <div style={{ borderTop: `1px solid ${plan.popular ? "rgba(27,127,58,0.2)" : BDR}`, paddingTop: "10px" }}>
                      <div style={{ fontSize: "11px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Monthly</div>
                      <div style={{ fontSize: "16px", fontWeight: 700, color: plan.popular ? G : BODY }}>{plan.monthly}</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div style={{ padding: "0 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "11px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px", marginTop: "4px" }}>What's included</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
                        <Check color={plan.popular ? G : "#6B7280"} />
                        <span style={{ fontSize: "13px", color: plan.popular ? BODY : MUTED, lineHeight: 1.55 }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
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
                    {plan.name === "Multi-Branch / Enterprise" ? "Request a custom quote" : "Enquire about this plan"}
                  </a>
                </div>
              </div>
            ))}
          </div>

          
          <div style={{ marginTop: "36px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", padding: "20px 24px", background: LIGHT, borderRadius: "10px", border: `1px solid ${BDR}` }}>
            <div style={{ fontSize: "12px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" as const }}>Accounting integrations</div>
            <div style={{ width: "1px", height: "20px", background: BDR }} />
            {["Sage Business Cloud Accounting", "QuickBooks Online"].map(name => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: "7px", background: WHITE, border: `1px solid ${BDR}`, borderRadius: "6px", padding: "6px 14px" }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3 3 6-6" stroke={G} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontSize: "13px", fontWeight: 600, color: BODY }}>{name}</span>
              </div>
            ))}
            <span style={{ fontSize: "12px", color: MUTED }}>Available on Counter POS Business and above.</span>
          </div>

          
          <div style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: BDR, border: `1px solid ${BDR}`, borderRadius: "10px", overflow: "hidden" }}>
            {[
              ["10% annual discount", "Pay monthly fees annually and save 10%."],
              ["72-hr onboarding", "Bridge-only clients live within 1 to 3 business days."],
              ["No lock-in surprises", "Clear pricing from day one. No hidden integration fees."],
              ["Malawi-first", "Blantyre-based team. No offshore queues. Same-day response."],
            ].map(([t, b]) => (
              <div key={t} style={{ background: WHITE, padding: "20px 22px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: INK, marginBottom: "4px" }}>{t}</div>
                <p style={{ fontSize: "12px", color: MUTED, lineHeight: 1.6, margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section id="value" style={{ ...sectionAlt }}>
        <div style={container}>
          <div style={{ ...eyebrow }}>More than EIS compliance</div>
          <h2 style={{ ...sectionTitle, maxWidth: "560px", marginBottom: "12px" }}>
            A retail operations platform built on compliance.
          </h2>
          <p style={{ ...bodyText, maxWidth: "560px", marginBottom: "56px" }}>
            TechNexus EIS is not just a fiscal receipt printer. It is a full-stack retail and compliance platform that keeps your business trading, your stock accurate, and your MRA records clean.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {valuePillars.map((p) => (
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
          <div style={{ ...eyebrow }}>Onboarding</div>
          <h2 style={{ ...sectionTitle, marginBottom: "48px" }}>You're live in five steps.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2px", background: BDR, border: `1px solid ${BDR}`, borderRadius: "12px", overflow: "hidden" }}>
            {[
              { step: "01", title: "Enquire", body: "Fill the form or message us. We confirm your requirements the same day." },
              { step: "02", title: "Assess", body: "We review your current setup and recommend bridge-only or full POS." },
              { step: "03", title: "Register", body: "We register your POS with MRA and activate each terminal." },
              { step: "04", title: "Go Live", body: "On-site setup. First MRA-signed QR receipt printed. Staff trained." },
              { step: "05", title: "Monitor", body: "Live monitoring from day one. MRA updates applied automatically." },
            ].map((s) => (
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
              <div style={{ ...eyebrow }}>FAQ</div>
              <h2 style={{ ...sectionTitle, marginBottom: "16px" }}>Common questions</h2>
              <p style={{ ...bodyText, fontSize: "14px" }}>
                Can't find what you need? Message us on WhatsApp and we'll respond the same day.
              </p>
              <a href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20have%20a%20question%20about%20EIS" target="_blank" rel="noopener" style={{ display: "inline-flex", marginTop: "20px", alignItems: "center", gap: "8px", background: G, color: WHITE, fontWeight: 700, fontSize: "13px", padding: "10px 20px", borderRadius: "7px", textDecoration: "none" }}>
                Ask on WhatsApp
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: BDR, border: `1px solid ${BDR}`, borderRadius: "12px", overflow: "hidden" }}>
              {faqs.map((f, i) => (
                <div key={i} style={{ background: openFaq === i ? GL : WHITE }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", padding: "20px 24px", fontFamily: "inherit", fontSize: "14px", fontWeight: 600, color: INK, cursor: "pointer", background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                  >
                    {f.q}
                    <span style={{ fontSize: "20px", fontWeight: 300, color: G, marginLeft: "16px", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>+</span>
                  </button>
                  {openFaq === i && (
                    <p style={{ padding: "0 24px 20px", fontSize: "14px", color: BODY, lineHeight: 1.7, fontWeight: 300, maxWidth: "640px", margin: 0 }}>{f.a}</p>
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
            {/* Left */}
            <div>
              <div style={{ ...eyebrow }}>Get started</div>
              <h2 style={{ ...sectionTitle, marginBottom: "16px" }}>Book your EIS consultation.</h2>
              <p style={{ ...bodyText, marginBottom: "32px" }}>
                We confirm your requirements the same day you reach out. No obligation. No boilerplate sales calls. Just a direct conversation about what your business needs.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: "WhatsApp", val: "+265 889 941 700" },
                  { label: "Email", val: "technexus_mw@proton.me" },
                  { label: "Location", val: "Blantyre, Malawi" },
                  { label: "Website", val: "www.technexusmw.com" },
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
                <div style={{ fontSize: "12px", fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>MRA Certified</div>
                <p style={{ fontSize: "13px", color: BODY, lineHeight: 1.6, margin: 0 }}>
                  TechNexus is a certified fiscal device integrator under the MRA EIS framework. Your compliance is backed by an accredited local partner. <Link href="/credentials" style={{ color: G, textDecoration: "underline", textUnderlineOffset: "3px" }}>View credentials</Link>
                </p>
              </div>
            </div>

            {/* Buy Malawi badge */}
            <a
              href="https://buymalawi.mw/"
              target="_blank"
              rel="noopener"
              style={{ display: "block", marginTop: "16px", textDecoration: "none" }}
            >
              <div style={{
                padding: "16px 20px",
                background: WHITE,
                borderRadius: "10px",
                border: `1px solid ${BDR}`,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    <img
                      src="/badges/buy_malawi.png"
                      alt="Buy Malawian. Build Malawi. -- TechNexus is a verified member."
                      style={{ width: "120px", height: "120px", objectFit: "contain", display: "block" }}
                    />
              </div>
            </a>

            {/* Right: form uses button onClick, not form tag */}
            <div>
              <div style={{ background: WHITE, border: `1px solid ${BDR}`, borderRadius: "12px", padding: "36px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)", fontSize: "18px", fontWeight: 700, color: INK, marginBottom: "24px" }}>Request a consultation</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { label: "Business name", value: bizName, setter: setBizName, placeholder: "Your business name", type: "text" },
                    { label: "Contact person", value: contactName, setter: setContactName, placeholder: "Your name", type: "text" },
                    { label: "Phone / WhatsApp", value: phone, setter: setPhone, placeholder: "+265 ...", type: "tel" },
                  ].map(({ label, value, setter, placeholder, type }) => (
                    <div key={label}>
                      <label style={{ fontSize: "12px", fontWeight: 600, color: BODY, display: "block", marginBottom: "6px" }}>{label}</label>
                      <input
                        type={type}
                        value={value}
                        onChange={e => setter(e.target.value)}
                        placeholder={placeholder}
                        style={inputStyle}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: BODY, display: "block", marginBottom: "6px" }}>Plan of interest</label>
                    <select value={selectedPlan} onChange={e => setSelectedPlan(e.target.value)} style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="">Select a plan (optional)</option>
                      {plans.map(p => <option key={p.name}>{p.name}</option>)}
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: BODY, display: "block", marginBottom: "6px" }}>Notes</label>
                    <textarea
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder="Brief description of your current setup (optional)"
                      rows={3}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                  <button
                    onClick={submitForm}
                    style={{ background: G, color: WHITE, fontWeight: 700, fontSize: "15px", padding: "13px 24px", borderRadius: "7px", border: "none", cursor: "pointer", letterSpacing: "-0.01em" }}
                  >
                    Send via WhatsApp
                  </button>
                  <p style={{ fontSize: "11px", color: MUTED, lineHeight: 1.6, textAlign: "center", margin: 0 }}>
                    Your details are used only to respond to this enquiry. We do not share your information with third parties.{" "}
                    <Link href="/privacy" style={{ color: G, textDecoration: "underline" }}>Privacy Policy</Link>
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
