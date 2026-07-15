"use client";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    href: "/ny/catalogue",
    img: "/index_main/server_rack_1-800.webp",
    alt: "Hardware ya ICT, Ofesi ndi Zomangamanga",
    label: "Zinthu za IT",
    title: "Hardware ya ICT, Ofesi ndi Zomangamanga",
    body: "Hardware yotsimikiziridwa ya HP, Dell, Lenovo, Samsung, Synology, APC, Canon. Malaputopu, madesikutopu, NAS, UPS, maprinta, zinthu, ndi zipereka.",
    cta: "Onani Zinthu",
  },
  {
    href: "/ny/computer-assembly",
    img: "/index_main/motherboard_assembly_1.webp",
    alt: "Kupanga Desikutopu Mwamsonkho",
    label: "Kupanga PC",
    title: "Kupanga Desikutopu Mwamsonkho",
    body: "Madesikutopu opangidwa mwamsonkho kwa ofesi ndi masukulu. Intel i5, zinthu zabwino, Windows 11 Pro, opangidwa ndi otestedwa.",
    cta: "Onani Mapangidwe",
  },
  {
    href: "/ny/software-development",
    img: "/index_main/software_dev_1-800.webp",
    alt: "Software ndi Mapulogalamu a Intaneti",
    label: "Software",
    title: "Software ndi Mapulogalamu a Intaneti",
    body: "Mapulogalamu a bizinesi, zinthu za intaneti, ndi software ya desikutopu ya Windows. Opangidwa mu C#, SQL ndi tekinoloje yamakono.",
    cta: "Funsani",
  },
  {
    href: "/ny/language-services",
    img: "/index_main/african_woman_interpreter_1.webp",
    alt: "TechNexus Scripts",
    label: "Ntchito za Chilankhulo",
    title: "TechNexus Scripts",
    body: "Kumasulira, kulembera, kupereka mawu, ndi maphunziro a chilankhulo. Chingelezi, Chipwitikizi, Chichewa, Chiswahili.",
    cta: "Onani Ntchito",
  },
  {
    href: "/ny/medical-supplies",
    img: "/index_main/medical_equipment_1.webp",
    alt: "Zida ndi Zinthu za Chipatala",
    label: "Zinthu za Chipatala",
    title: "Zida ndi Zinthu za Chipatala",
    body: "Zida za chipatala zochokera kwa olehera otsimikiziridwa a SADC. EPI, kuyeza matenda, zida, fanicha ya chipatala, zothandizira kuyenda, ndi mankhwala.",
    cta: "Onani Zinthu",
  },
  {
    href: "/ny/eis",
    img: null as string | null,
    alt: "Compliance EIS",
    label: "Compliance EIS",
    title: "EIS Bridge & Software ya POS",
    body: "Ma invoice a elekitironiki otsimikiziridwa ndi MRA. Kutumiza kwa EIS nthawi yomweyo, ma risiti a QR, mzere wa offline. Imagwirizana ndi QuickBooks ndi Sage. Kuyamba mu maola 72.",
    cta: "Onani Mapulani",
  },
  {
    href: "/ny/credentials",
    img: "/index_main/server_rack_2-800.webp",
    alt: "Umboni wa Kampani ndi Fomu ya Kulumikizana",
    label: "Umboni ndi Kulumikizana",
    title: "Umboni wa Kampani ndi Fomu ya Kulumikizana",
    body: "Zidziwitso za kulembetsa, mlangizo wa compliance, mauthenga a zamdule ndi fomu ya kulumikizana mwachindunji. Olembedwa MANePS.",
    cta: "Onani Umboni",
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

export default function NyHomePage() {
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
    let t = "Funso la TechNexus\nDzina: " + name.trim();
    if (org.trim()) t += "\nBungwe: " + org.trim();
    if (service && service !== "Sankhani ntchito") t += "\nNtchito: " + service;
    if (msg.trim()) t += "\nUthenga: " + msg.trim();
    window.open("https://wa.me/265889941700?text=" + encodeURIComponent(t), "_blank");
  }

  return (
    <>
      {/* BRAND STRIP */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "32px 40px 28px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center", marginBottom: "20px" }}>
            Mitundu yomwe timagulitsa ndi kuthandizira
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
        {["Olembedwa PPDA","MANePS Akugwira Ntchito","MSME BRN.A6SNWQY","Oyenda ndi Lamulo la MRA"].map(b => (
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
            Mnzanu wa tekinoloje ndi ntchito za chilankhulo mu Malawi
          </h2>
          <p style={{ color: "var(--fl-neutral-40)", fontSize: "16px", maxWidth: "600px", margin: "0 auto 24px", lineHeight: 1.7 }}>
            Hardware ya IT, kupanga software, ntchito za chilankhulo, kupanga PC mwamsonkho, ndi zida za chipatala kwa mabizinesi mu Africa Yakum'mwera ndi Kum'mawa.
          </p>
          <div style={{ maxWidth: "480px", margin: "0 auto" }}>
            <input
              type="text"
              placeholder="Sakani ntchito..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{ width: "100%", padding: "12px 20px", borderRadius: "8px", border: "1px solid #2a2a3a", background: "#1a1a2e", color: "#fff", fontSize: "15px", outline: "none" }}
            />
            {query && (
              <div style={{ marginTop: "8px", color: "var(--fl-neutral-40)", fontSize: "13px" }}>
                {filtered.length} mwa {services.length} zapezeka
              </div>
            )}
          </div>
        </div>
      </div>

      {/* EIS SPOTLIGHT */}
      <div className="eis-spotlight" style={{ padding: "40px 40px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
          <div style={{ flex: "1 1 480px" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: "8px" }}>
              EIS Bridge &amp; POS: compliance ya ma invoice a elekitironiki mu maola 72.
            </h3>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.65, maxWidth: "560px", margin: 0 }}>
              Kutumiza kwa MRA nthawi yomweyo, ma risiti a QR osainidwa, mzere wa offline, ndi kugwirizana ndi Sage &amp; QuickBooks. Sungani sisitimu yanu kapena ikani POS yathunthu.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/ny/eis" className="eis-spotlight-cta" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", fontWeight: 700, fontSize: "14px", padding: "13px 26px", borderRadius: "8px", textDecoration: "none" }}>
              Onani Mapulani a EIS
            </Link>
            <Link href="/ny/eis#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontWeight: 600, fontSize: "14px", padding: "13px 26px", borderRadius: "8px", textDecoration: "none" }}>
              Pemphani Uphungu
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
                    <div style={{ fontSize: "0.7rem", opacity: 0.7, marginTop: "3px", letterSpacing: "1px", textTransform: "uppercase" }}>Otsimikiziridwa ndi MRA</div>
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
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>Funso Lachangu</h3>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "24px" }}>Lembani pansipa ndipo tikuyankhani pa WhatsApp mkati mwa maola 24.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-grid-2">
            <div>
              <label htmlFor="qe-name" style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: "6px" }}>Dzina *</label>
              <input id="qe-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Dzina lanu" style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius)", fontSize: "14px" }} />
            </div>
            <div>
              <label htmlFor="qe-org" style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: "6px" }}>Bungwe</label>
              <input id="qe-org" type="text" value={org} onChange={e => setOrg(e.target.value)} placeholder="Kampani / NGO / Sukulu" style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius)", fontSize: "14px" }} />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="qe-service" style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: "6px" }}>Ntchito *</label>
              <select id="qe-service" value={service} onChange={e => setService(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius)", fontSize: "14px" }}>
                <option>Sankhani ntchito</option>
                <option>Hardware ya IT / Zinthu</option>
                <option>Kupanga PC</option>
                <option>Kupanga Software</option>
                <option>Ntchito za Chilankhulo</option>
                <option>Zinthu za Chipatala</option>
                <option>Compliance EIS</option>
                <option>Uphungu wa Ma Tender / Pre-Qualification</option>
                <option>Uphungu wa Kulembetsa Bizinesi</option>
                <option>Ntchito Zoyendetsa IT</option>
                <option>Zina</option>
              </select>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: "6px" }}>Uthenga *</label>
              <textarea value={msg} onChange={e => setMsg(e.target.value)} rows={3} placeholder="Fotokozani zomwe mukufuna kapena funsani funso..." style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius)", fontSize: "14px", resize: "vertical" }} />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <button onClick={sendQE} type="button" style={{ background: "#25D366", color: "#fff", border: "none", borderRadius: "var(--radius)", padding: "12px 28px", fontSize: "14px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                Tumizani pa WhatsApp
              </button>
              <p style={{ marginTop: "10px", fontSize: "11px", color: "var(--muted)" }}>
                Zidziwitso zanu zimagwiritsidwa ntchito pokuyankhani nokha. Sitigawana zidziwitso zanu ndi ena.
                Onani <Link href="/ny/privacy" style={{ color: "var(--muted)", textDecoration: "underline" }}>Ndondomeko ya Chinsinsi</Link> yathu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
