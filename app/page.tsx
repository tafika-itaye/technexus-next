"use client";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    href: "/catalogue",
    img: "/index_main/server_rack_1-800.webp",
    alt: "ICT, Office & Infrastructure Hardware",
    label: "ICT Catalogue",
    title: "ICT, Office & Infrastructure Hardware",
    body: "Certified HP, Dell, Lenovo, Samsung, Synology, APC, Canon hardware. Business laptops, desktops, NAS, UPS, printers, components, peripherals, and accessories.",
    cta: "View Catalogue",
  },
  {
    href: "/computer-assembly",
    img: "/index_main/motherboard_assembly_1.webp",
    alt: "Custom Desktop PC Assembly",
    label: "PC Assembly",
    title: "Custom Desktop PC Assembly",
    body: "Office and educational desktop PCs built to spec. Intel i5, quality components, Windows 11 Pro, assembled and QA-tested. Volume pricing for schools, government, and enterprise.",
    cta: "View Builds",
  },
  {
    href: "/software-development",
    img: "/index_main/software_dev_1-800.webp",
    alt: "Custom Software & Web Applications",
    label: "Software Dev",
    title: "Custom Software & Web Applications",
    body: "Bespoke web applications, business systems, database solutions, and Windows desktop software. Built in C#, SQL, and modern web technologies.",
    cta: "Enquire",
  },
  {
    href: "/language-services",
    img: "/index_main/african_woman_interpreter_1.webp",
    alt: "TechNexus Scripts",
    label: "Language Services",
    title: "TechNexus Scripts",
    body: "Professional translation, transcription, subtitling, interpretation, and language training. English, Portuguese, Chichewa, Swahili. HIPAA/GDPR-aware.",
    cta: "View Services",
  },
  {
    href: "/medical-supplies",
    img: "/index_main/medical_equipment_1.webp",
    alt: "Healthcare Equipment & Consumables",
    label: "Medical Supplies",
    title: "Healthcare Equipment & Consumables",
    body: "Medical-grade supplies sourced through verified SADC partners. PPE, diagnostics, instruments, hospital furniture, mobility aids, and pharmaceuticals.",
    cta: "View Catalogue",
  },
  {
    href: "/eis",
    img: null,
    alt: "EIS Compliance",
    label: "EIS Compliance",
    title: "EIS Bridge & POS Software",
    body: "MRA-certified electronic invoicing. Real-time EIS submission, QR receipts, offline queue. Connects to QuickBooks & Sage. Onboarding in 72 hours.",
    cta: "View Packages",
  },
  {
    href: "/credentials",
    img: "/index_main/server_rack_2-800.webp",
    alt: "Company Credentials & Contact Form",
    label: "Credentials & Contact",
    title: "Company Credentials & Contact Form",
    body: "Registration details, compliance framework, diplomatic references, and a direct enquiry form. MANePS registered.",
    cta: "View Credentials",
  },
];

const brands = [
  { name: "HP",        src: "/Products_logos/optimized/hp.png" },
  { name: "Dell",      src: "/Products_logos/optimized/dell.png" },
  { name: "Lenovo",    src: "/Products_logos/optimized/lenovo.png" },
  { name: "Synology",  src: "/Products_logos/optimized/synology.png" },
  { name: "APC",       src: "/Products_logos/optimized/apc.png" },
  { name: "Canon",     src: "/Products_logos/optimized/canon.png" },
  { name: "ASUS",      src: "/Products_logos/optimized/asus.png" },
  { name: "Microsoft", src: "/Products_logos/optimized/microsoft.png" },
  { name: "AWS",       src: "/Products_logos/optimized/amazon_cloud_aws.png" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [service, setService] = useState("");
  const [msg, setMsg] = useState("");

  const filtered = query
    ? services.filter(s =>
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.body.toLowerCase().includes(query.toLowerCase()) ||
        s.label.toLowerCase().includes(query.toLowerCase())
      )
    : services;

  function sendQE() {
    if (!name.trim()) return;
    let t = "TechNexus Enquiry\nName: " + name.trim();
    if (org.trim()) t += "\nOrg: " + org.trim();
    if (service && service !== "Select a service") t += "\nService: " + service;
    if (msg.trim()) t += "\nMessage: " + msg.trim();
    window.open("https://wa.me/265889941700?text=" + encodeURIComponent(t), "_blank");
  }

  return (
    <>
      {/* BRAND STRIP */}
      <div style={{ background: "#ffffff", borderBottom: "1px solid var(--fl-neutral-8)", padding: "32px 40px 28px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4a5568", textAlign: "center", marginBottom: "20px" }}>
            Brands we supply and support
          </p>
          <div className="brand-strip-scroll" style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
            {brands.map((b, i) => (
              <span key={b.name} className="brand-logo-wrap">
                <img
                  src={b.src}
                  alt={b.name}
                  title={b.name}
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  width={120} height={28} className="brand-logo" style={{ height: "24px", width: "auto", objectFit: "contain" }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* BADGES */}
      <div style={{ background: "var(--accent)", padding: "8px 40px", display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
        {["PPDA Registered","MANePS Active","MSME BRN.A6SNWQY","MRA Compliant"].map(b => (
          <span key={b} style={{ color: "#fff", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em" }}>{b}</span>
        ))}
      </div>

      {/* HERO */}
      <div className="home-hero" style={{ position: "relative", overflow: "hidden", background: "#0a0a0a", padding: "72px 40px 64px", textAlign: "center" }}>
        <img
          src="/hero-bg-1280.webp"
          srcSet="/hero-bg-800.webp 800w, /hero-bg-1280.webp 1280w, /hero-bg-1600.webp 1600w"
          sizes="100vw"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.28 }}
        />
        <div className="hero-fade-in" style={{ position: "relative" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Technology. Language. Infrastructure.
          </h2>
          <p style={{ color: "var(--fl-neutral-40)", fontSize: "16px", maxWidth: "600px", margin: "0 auto 24px", lineHeight: 1.7 }}>
            End-to-end IT hardware, software development, language services, custom PC assembly, and medical equipment for businesses across Southern &amp; East Africa.
          </p>
          <div style={{ maxWidth: "480px", margin: "0 auto" }}>
            <input
              type="text"
              placeholder="Search services..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{ width: "100%", padding: "12px 20px", borderRadius: "8px", border: "1px solid #2a2a3a", background: "#1a1a2e", color: "#fff", fontSize: "15px", outline: "none" }}
            />
            {query && (
              <div style={{ marginTop: "8px", color: "var(--fl-neutral-40)", fontSize: "13px" }}>
                {filtered.length} of {services.length} items match
              </div>
            )}
          </div>
        </div>
      </div>

      {/* EIS SPOTLIGHT */}
      <div className="eis-spotlight" style={{ padding: "40px 40px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
          <div style={{ flex: "1 1 480px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.4)", borderRadius: "999px", padding: "4px 14px", marginBottom: "12px" }}>
              <span style={{ color: "#25D366", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>MRA-Certified Integrator</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: "8px" }}>
              EIS Bridge &amp; POS — e-invoicing compliance, live in 72 hours.
            </h3>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.65, maxWidth: "560px", margin: 0 }}>
              Real-time MRA submission, signed QR receipts, offline queue, and Sage &amp; QuickBooks sync. Keep your current system or deploy a full POS.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/eis" className="eis-spotlight-cta" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", fontWeight: 700, fontSize: "14px", padding: "13px 26px", borderRadius: "8px", textDecoration: "none" }}>
              View EIS Packages →
            </Link>
            <Link href="/eis#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontWeight: 600, fontSize: "14px", padding: "13px 26px", borderRadius: "8px", textDecoration: "none" }}>
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* SERVICE GRID */}
      <div style={{ background: "var(--surface-alt)", padding: "48px 40px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
          {filtered.map(s => (
            <Link key={s.href} href={s.href} className="svc-card" style={{ textDecoration: "none", background: "var(--surface)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-4)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "180px", overflow: "hidden", position: "relative", background: s.img ? "var(--fl-neutral-8)" : "linear-gradient(135deg,#032d1e 0%,#075E54 60%,#0a2742 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {s.img ? (
                  <img src={s.img} alt={s.alt} width={600} height={400} loading="lazy" decoding="async" className="svc-card-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div style={{ textAlign: "center", color: "#fff" }}>
                    <div style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.02em" }}>EIS Bridge &amp; POS</div>
                    <div style={{ fontSize: "0.7rem", opacity: 0.7, marginTop: "3px", letterSpacing: "1px", textTransform: "uppercase" }}>MRA Certified</div>
                  </div>
                )}
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)", display: "flex", alignItems: "flex-end", padding: "12px 16px" }}>
                  <span style={{ color: "#fff", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</span>
                </div>
              </div>
              <div style={{ padding: "20px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, color: "var(--text)", marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, flex: 1 }}>{s.body}</p>
                <span style={{ marginTop: "16px", color: "var(--accent)", fontSize: "13px", fontWeight: 600 }}>{s.cta} &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* QUICK ENQUIRY */}
      <div style={{ background: "var(--surface)", padding: "64px 40px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>Quick Enquiry</h3>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "24px" }}>Fill in below and we will respond via WhatsApp within 24 hours.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label htmlFor="qe-name" style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: "6px" }}>Name *</label>
              <input id="qe-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius)", fontSize: "14px" }} />
            </div>
            <div>
              <label htmlFor="qe-org" style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: "6px" }}>Organisation</label>
              <input id="qe-org" type="text" value={org} onChange={e => setOrg(e.target.value)} placeholder="Company / NGO / Institution" style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius)", fontSize: "14px" }} />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="qe-service" style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: "6px" }}>Service *</label>
              <select id="qe-service" value={service} onChange={e => setService(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius)", fontSize: "14px" }}>
                <option>Select a service</option>
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
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: "6px" }}>Message *</label>
              <textarea value={msg} onChange={e => setMsg(e.target.value)} rows={3} placeholder="Describe your requirement or ask a question..." style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius)", fontSize: "14px", resize: "vertical" }} />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <button onClick={sendQE} type="button" style={{ background: "#25D366", color: "#fff", border: "none", borderRadius: "var(--radius)", padding: "12px 28px", fontSize: "14px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                Send via WhatsApp
              </button>
              <p style={{ marginTop: "10px", fontSize: "11px", color: "var(--muted)" }}>
                Your details are used only to respond to this enquiry. We do not share your information with third parties.
                See our <Link href="/privacy" style={{ color: "var(--muted)", textDecoration: "underline" }}>Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}







