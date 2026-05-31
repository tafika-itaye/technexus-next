"use client";
import Link from "next/link";
import { useState } from "react";

const registration = [
  ["Legal Name", "TechNexus"],
  ["Business Registration", "BRN.A6SNWQY — MSME, Republic of Malawi"],
  ["Physical Address", "Blantyre, Malawi"],
  ["Primary Contact", "+265 889 941 700 · +265 995 753 326"],
  ["Email", "technexus_mw@proton.me"],
  ["MANePS Status", "Active — Malawi National Electronic Procurement System"],
  ["PPDA Registration", "Registered — Public Procurement & Disposal of Assets Authority"],
  ["MRA Compliance", "Malawi Revenue Authority — tax compliant"],
  ["Operating Markets", "Malawi, Zambia, Mozambique, South Africa, China (sourcing)"],
  ["VAT Rate", "17.5% (effective January 2026)"],
];

const services = [
  { title: "ICT Hardware Supply", body: "HP, Dell, Lenovo, Samsung, Synology, APC, Canon. Laptops, desktops, NAS, UPS, printers, networking." },
  { title: "Software Development", body: "ASP.NET Core, Blazor, PostgreSQL. Business systems, web applications, hospital operations platforms." },
  { title: "Language Services", body: "Translation, transcription, subtitling, interpretation. English, Portuguese, Chichewa, Swahili." },
  { title: "PC Assembly", body: "Custom desktop builds. Intel i5, Windows 11 Pro, QA-tested. Volume pricing for institutions." },
  { title: "Medical Supplies", body: "PPE, diagnostics, instruments, hospital furniture, mobility aids, pharmaceuticals. SADC-verified sources." },
  { title: "IT Managed Services", body: "Network setup, server infrastructure, helpdesk support, system integration. SLA-backed." },
];

const procurement = [
  { title: "Public Sector", body: "All public procurement conducted under the Public Finance Management Act (2022). Full audit trails on every engagement. MANePS-eligible for electronic tenders." },
  { title: "Private Sector", body: "Standard commercial terms. Proforma invoices, tax invoices, delivery notes and payment receipts issued for all transactions." },
  { title: "Development Partners", body: "Experience working with diplomatic missions, international NGOs and donor-funded programmes. References available on request." },
  { title: "Cross-Border", body: "Operations in Malawi, Zambia, Mozambique and South Africa. USD and MWK invoicing available." },
];

const BG = "var(--fl-neutral-2)";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const ACCENT = "var(--fl-blue)";

export default function CredentialsPage() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState("");
  const [msg, setMsg] = useState("");

  function sendForm(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    let t = "TechNexus Enquiry\nName: " + name.trim();
    if (org.trim()) t += "\nOrg: " + org.trim();
    if (contact.trim()) t += "\nContact: " + contact.trim();
    if (service) t += "\nService: " + service;
    if (msg.trim()) t += "\nMessage: " + msg.trim();
    window.open("https://wa.me/265889941700?text=" + encodeURIComponent(t), "_blank");
  }

  const sh: React.CSSProperties = { fontFamily: "var(--font-syne)", fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 700, color: "var(--fl-neutral-90)", margin: "48px 0 20px" };
  const inp: React.CSSProperties = { width: "100%", padding: "10px 14px", background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", color: TEXT, fontSize: "14px", outline: "none" };
  const lbl: React.CSSProperties = { fontSize: "12px", color: MUTED, display: "block", marginBottom: "6px" };

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: "var(--font-body)", minHeight: "100vh" }}>

      {/* HERO */}
      <div style={{ padding: "80px 40px 48px", textAlign: "center", borderBottom: "1px solid " + BORDER, backgroundImage: "url(/index_main/server_rack_2.webp)", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "var(--fl-neutral-90)", letterSpacing: "-0.03em", marginBottom: "16px" }}>
          Company Credentials &amp; Contact
        </h1>
        <p style={{ color: MUTED, fontSize: "16px", maxWidth: "600px", margin: "0 auto 24px", lineHeight: 1.7 }}>
          Registration details, compliance framework, diplomatic references and a direct enquiry form.
          Available for government tenders, private sector contracts and development partner procurement.
        </p>
        <div style={{ display: "inline-block", background: "rgba(0,120,212,0.12)", border: "1px solid " + ACCENT, borderRadius: "999px", padding: "6px 20px", color: ACCENT, fontSize: "13px" }}>
          MANePS Active · PPDA Registered · MRA Compliant · BRN.A6SNWQY
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 40px 96px" }}>

        {/* REGISTRATION TABLE */}
        <h2 style={sh}>Registration &amp; Compliance</h2>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: SURF }}>
                <th style={{ padding: "12px 20px", textAlign: "left", color: MUTED, fontWeight: 600, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid " + BORDER }}>Item</th>
                <th style={{ padding: "12px 20px", textAlign: "left", color: MUTED, fontWeight: 600, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid " + BORDER }}>Detail</th>
              </tr>
            </thead>
            <tbody>
              {registration.map(([item, detail], i) => (
                <tr key={item} style={{ background: i % 2 === 0 ? "transparent" : SURF }}>
                  <td style={{ padding: "12px 20px", color: MUTED, fontSize: "13px", fontWeight: 600, borderBottom: "1px solid " + BORDER, whiteSpace: "nowrap" }}>{item}</td>
                  <td style={{ padding: "12px 20px", color: TEXT, fontSize: "13px", borderBottom: "1px solid " + BORDER }}>{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SERVICES */}
        <h2 style={sh}>Services Portfolio</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {services.map(s => (
            <div key={s.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: "var(--fl-neutral-90)", marginBottom: "8px" }}>{s.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* DIPLOMATIC REFERENCE */}
        <h2 style={sh}>Diplomatic Reference</h2>
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: "var(--fl-neutral-90)", marginBottom: "12px" }}>High Commission of Mozambique — Lilongwe</h3>
          <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.8 }}>
            The High Commission of the Republic of Mozambique, Lilongwe (February 2026) confirms that TechNexus has provided professional services to the Mission over an extended period.
            The Mission commends TechNexus for its high standards of professionalism, accuracy, reliability and discretion in the provision of IT and language services.
          </p>
        </div>

        {/* PROCUREMENT */}
        <h2 style={sh}>Procurement Framework</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {procurement.map(p => (
            <div key={p.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: "var(--fl-neutral-90)", marginBottom: "8px" }}>{p.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* ENQUIRY FORM */}
        <h2 style={sh}>Send an Enquiry</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "24px" }}>Fill in the form below or contact us directly via WhatsApp.</p>
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "12px", padding: "32px", maxWidth: "640px" }}>
          <form onSubmit={sendForm} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={lbl}>Name *</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required style={inp} />
              </div>
              <div>
                <label style={lbl}>Organisation</label>
                <input type="text" value={org} onChange={e => setOrg(e.target.value)} placeholder="Company / NGO / Institution" style={inp} />
              </div>
            </div>
            <div>
              <label style={lbl}>Email or WhatsApp *</label>
              <input type="text" value={contact} onChange={e => setContact(e.target.value)} placeholder="+265 ... or your@email.com" required style={inp} />
            </div>
            <div>
              <label style={lbl}>Service Required *</label>
              <select value={service} onChange={e => setService(e.target.value)} style={inp}>
                <option value="">— Select a service —</option>
                <option>IT Hardware / Catalogue</option>
                <option>PC Assembly</option>
                <option>Software Development</option>
                <option>Language Services</option>
                <option>Medical Supplies</option>
                <option>EIS Compliance</option>
                <option>Tender / Pre-Qualification Consulting</option>
                <option>Business Registration Consulting</option>
                <option>IT Managed Services</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label style={lbl}>Message *</label>
              <textarea value={msg} onChange={e => setMsg(e.target.value)} rows={4} placeholder="Describe your requirement, quantity, location or any specific details..." required style={{ ...inp, resize: "vertical" }} />
            </div>
            <button type="submit" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "var(--fl-neutral-90)", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
              Send via WhatsApp
            </button>
            <p style={{ fontSize: "11px", color: MUTED, lineHeight: 1.6 }}>
              Your details are used only to respond to this enquiry. We do not share your information with third parties.
              See our <Link href="/privacy" style={{ color: MUTED, textDecoration: "underline" }}>Privacy Policy</Link>.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}


