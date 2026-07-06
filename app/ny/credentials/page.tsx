"use client";

import { useState } from "react";

const registration = [
  { label: "Dzina Lachilungamo", value: "TechNexus" },
  { label: "Kulembetsa kwa Bizinesi", value: "BRN.A6SNWQY — MSME, Republic ya Malawi" },
  { label: "Adiresi", value: "Lilongwe ndi Malawi yonse" },
  { label: "Kulumikizana Kwayamba", value: "+265 889 941 700 · +265 995 753 326" },
  { label: "Imelo", value: "technexus_mw@proton.me" },
  { label: "Chikho cha MANePS", value: "Chogwira — Dongosolo la National Electronic Procurement la Malawi" },
  { label: "Kulembetsa PPDA", value: "Wolembedwa — Authority ya Public Procurement ndi Disposal of Assets" },
  { label: "Kuvomerezana ndi MRA", value: "Malawi Revenue Authority — wovomerezana pa msonkho" },
  { label: "Misika", value: "Malawi, Zambia, Mozambique, South Africa, China (zochokera)" },
  { label: "Msonkho wa VAT", value: "17.5% (woyamba Januware 2026)" },
];

const services = [
  { title: "Kupeza Hardware ya ICT", body: "HP, Dell, Lenovo, Samsung, Synology, APC, Canon. Malaptop, madesktop, NAS, UPS, maprinta, manetiwaiki." },
  { title: "Kupanga Mapulogalamu", body: "ASP.NET Core, Blazor, PostgreSQL. Ma system a mabungwe, ma applications a web, ma platform a zipatala." },
  { title: "Ntchito za Chilankhulo", body: "Kumasulira, kulemba, kuika masubtitle, kutanthauzira. Chingerezi, Chiputukizi, Chichewa, Kiswahili." },
  { title: "Kupanga PC", body: "Madesktop opangidwa mwakukonzekera. Intel i5, Windows 11 Pro, oyezedwa. Mitengo ya kuchuluka kwa mabungwe." },
  { title: "Zinthu za Chipatala", body: "EPI, kuyeza, zipangizo, fanicha ya chipatala, zipangizo zothandizira kuyenda, mankhwala. Zochokera ku SADC." },
  { title: "Ntchito za IT Zosamaliridwa", body: "Manetiwaiki, mapangidwe a seva, helpdesk, kuphatikiza ma system. Ndi SLA." },
];

const procurement = [
  { title: "Gawo la Boma", body: "Kugulira kwonse kwa boma kukupita malinga ndi Lamulo la Kuyang'anira Ndalama za Boma (2022). Zolembedwa zonse. Wopatikizika ku ma tender amagetsi a MANePS." },
  { title: "Gawo la Private", body: "Zomvana zachintchito zachikhalidwe. Ma pro-forma invoice, ma tax invoice, ma delivery note ndi ma risiti zotumizidwa." },
  { title: "Ogwirirana ndi Chitukuko", body: "Zokha ndi maulendo azamdule, ma NGO azamdule ndi mapulogalamu opatsidwa ndi opereka." },
  { title: "Mtsogolo mwa Malire", body: "Ntchito ku Malawi, Zambia, Mozambique ndi South Africa. Kufakturira mu USD ndi MWK." },
];

const serviceOptions = [
  "IT Hardware / Catalogue",
  "Kupanga PC",
  "Kupanga Mapulogalamu",
  "Ntchito za Chilankhulo",
  "Zinthu za Chipatala",
  "Uphungu wa Tender / Pre-Qualification",
  "Uphungu wa Kulembetsa Bizinesi",
  "Ntchito za IT Zosamaliridwa",
  "Zina",
];

const ACCENT = "var(--fl-blue)";
const BG = "var(--surface)";
const TEXT = "var(--text)";
const MUTED = "var(--muted)";
const BORDER = "var(--border)";
const SURF2 = "var(--surface-alt)";

export default function NyCredentialsPage() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState("");
  const [msg, setMsg] = useState("");

  function submitEnquiry() {
    if (!name.trim() || !contact.trim()) return;
    let t = "TechNexus Enquiry (NY)";
    t += "%0ADzina: " + encodeURIComponent(name);
    if (org) t += "%0ABungwe: " + encodeURIComponent(org);
    t += "%0AKulumikizana: " + encodeURIComponent(contact);
    if (service) t += "%0ANtchito: " + encodeURIComponent(service);
    if (msg) t += "%0AUthenga: " + encodeURIComponent(msg);
    window.open("https://wa.me/265889941700?text=" + t, "_blank");
  }

  const inp: React.CSSProperties = { width: "100%", padding: "9px 12px", background: "var(--glass)", border: "1px solid var(--glass-border)", borderRadius: "8px", color: "#fff", fontSize: "0.85rem", outline: "none", boxSizing: "border-box" };
  const sh: React.CSSProperties = { fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 700, color: TEXT, borderBottom: "2px solid " + BORDER, paddingBottom: "10px", marginBottom: "20px", marginTop: "48px" };
  const cell: React.CSSProperties = { padding: "10px 14px", fontSize: "0.84rem", borderBottom: "1px solid " + BORDER };

  return (
    <div style={{ color: TEXT, fontFamily: "var(--font-body)" }}>

      <div style={{ background: "var(--accent)", padding: "48px 40px 36px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#fff", marginBottom: "12px" }}>Zikalata za Kampani ndi Kulumikizana</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", maxWidth: "620px", margin: "0 auto 20px", lineHeight: 1.65 }}>
          Zambiri za kulembetsa, njira ya kuvomerezana, umboni wa diplomasi ndi fomula lolumikizana mwachindunji. Wopatikizika ku ma tender a boma, mgwirizano wa private sector ndi procurement ya ogwirirana ndi chitukuko.
        </p>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "20px", padding: "6px 18px", fontSize: "0.78rem", color: "#fff", fontWeight: 600, letterSpacing: "0.04em" }}>
          MANePS Wogwira · Wolembedwa PPDA · Wovomerezana MRA · BRN.A6SNWQY
        </div>
      </div>

      <div style={{ height: "220px", overflow: "hidden", position: "relative", background: "#0a2742" }}>
        <img src="/index_main/server_rack_2-1200.webp" alt="TechNexus credentials" width={1100} height={220} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.45 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,40,80,0.7) 0%, transparent 60%)" }} />
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 32px 80px" }}>

        <h2 style={sh}>Kulembetsa ndi Kutsatira Malamulo</h2>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: SURF2 }}>
                <th style={{ ...cell, fontWeight: 700, textAlign: "left", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", color: MUTED }}>Chinthu</th>
                <th style={{ ...cell, fontWeight: 700, textAlign: "left", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", color: MUTED }}>Zambiri</th>
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

        <h2 style={sh}>Mndandanda wa Ntchito</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: BORDER, border: "1px solid " + BORDER, borderRadius: "8px", overflow: "hidden" }}>
          {services.map((s, i) => (
            <div key={i} style={{ padding: "20px", background: BG }}>
              <h4 style={{ fontSize: "0.88rem", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>{s.title}</h4>
              <p style={{ fontSize: "0.78rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>

        <h2 style={sh}>Umboni wa Diplomasi</h2>
        <div style={{ background: SURF2, border: "1px solid " + BORDER, borderLeft: "4px solid var(--fl-blue)", borderRadius: "8px", padding: "24px 28px" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>High Commission ya Mozambique — Lilongwe</h3>
          <p style={{ fontSize: "0.84rem", color: MUTED, lineHeight: 1.65, margin: 0 }}>
            High Commission ya Republic ya Mozambique, Lilongwe (February 2026) itsimikizira kuti TechNexus yaperekedwa ntchito zapamwamba ku Mission pa nthawi yayitali. Mission ikutamanda TechNexus chifukwa cha muyeso wake wapamwamba wa kukhala wachikumbu, kulondola, kukhala wodalirika ndi chinsinsi.
          </p>
        </div>

        <h2 style={sh}>Njira Zogulira</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: BORDER, border: "1px solid " + BORDER, borderRadius: "8px", overflow: "hidden" }}>
          {procurement.map((p, i) => (
            <div key={i} style={{ padding: "20px", background: BG }}>
              <h4 style={{ fontSize: "0.88rem", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>{p.title}</h4>
              <p style={{ fontSize: "0.78rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>

        <h2 style={{ ...sh, marginTop: "48px" }}>Tumizani Funso</h2>
        <p style={{ fontSize: "0.88rem", color: MUTED, marginBottom: "24px" }}>Dzazani fomu pansipa kapena lumikizanani nafe mwachindunji pa WhatsApp.</p>
        <div style={{ background: SURF2, border: "1px solid " + BORDER, borderRadius: "8px", padding: "28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label htmlFor="ny-cred-name" style={{ fontSize: "0.78rem", color: MUTED, display: "block", marginBottom: "4px" }}>Dzina *</label>
              <input id="ny-cred-name" type="text" placeholder="Dzina lanu" value={name} onChange={e => setName(e.target.value)} style={inp} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="ny-cred-org" style={{ fontSize: "0.78rem", color: MUTED, display: "block", marginBottom: "4px" }}>Bungwe</label>
              <input id="ny-cred-org" type="text" placeholder="Kampani / NGO / Bungwe" value={org} onChange={e => setOrg(e.target.value)} style={inp} autoComplete="organization" />
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="ny-cred-contact" style={{ fontSize: "0.78rem", color: MUTED, display: "block", marginBottom: "4px" }}>Imelo kapena WhatsApp *</label>
            <input id="ny-cred-contact" type="text" placeholder="+265 ... kapena imelo yanu" value={contact} onChange={e => setContact(e.target.value)} style={inp} autoComplete="email" />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="ny-cred-service" style={{ fontSize: "0.78rem", color: MUTED, display: "block", marginBottom: "4px" }}>Ntchito Yomukhumba *</label>
            <select id="ny-cred-service" value={service} onChange={e => setService(e.target.value)} style={{ ...inp, cursor: "pointer" }}>
              <option value="">— Sankhani —</option>
              {serviceOptions.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="ny-cred-msg" style={{ fontSize: "0.78rem", color: MUTED, display: "block", marginBottom: "4px" }}>Uthenga *</label>
            <textarea id="ny-cred-msg" rows={4} placeholder="Fotokozani zomwe mukufuna, kuchuluka, malo kapena zambiri zinanena..." value={msg} onChange={e => setMsg(e.target.value)} style={{ ...inp, resize: "vertical" }} />
          </div>
          <button onClick={submitEnquiry} type="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 24px", background: "#25D366", color: "#fff", border: "none", borderRadius: "8px", fontSize: "0.88rem", fontWeight: 700, cursor: "pointer" }}>
            Tumizani kudzera WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
}
