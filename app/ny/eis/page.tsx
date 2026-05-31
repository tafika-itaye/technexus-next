"use client";

import { useState } from "react";

const pillars = [
  { title: "Tsimikiziro la Kutsatira Malamulo", body: "Timalumikiza bizinesi yanu ku EIS ya MRA mwamsanga. Palibe mipata. Palibe zipatso. Kugulitsa kulikonse kumasainidwa digito ndi MRA ndi QR yowerenga pa risiti iliyonse." },
  { title: "Kukhalabe Kwa Bizinesi", body: "Sungani POS yanu kapena dongosolo lanu la ndalama lomwe lili nalo. Bridge yathu imalumikiza ku EIS popanda kuvuta ntchito zanu." },
  { title: "Mtendere wa Mtima", body: "Tili ku Blantyre. Yankho lochitika tsiku lomwelo. Kuyang'anira kopitilira. Zosintha za MRA zikukhudzidwa mwazilumba — palibe ndalama zowonjezeka." },
];

const steps = [
  { num: "1", title: "Lumikizanani nafe", body: "Imbani foni, tumizani WhatsApp kapena dzazani fomula. Titsimikizira zomwe mukufuna tsiku lomwelo." },
  { num: "2", title: "Kuyezera pa malo", body: "Tiyeza dongosolo lanu lomwe lili nalo. Bridge yosavuta kapena POS yathunthu — tikupangira njira yoyenera." },
  { num: "3", title: "Kukhazikitsa ndi kutsegula", body: "Tikhazikitsa bridge ya EIS kapena POS, tilembetsa ma terminal anu ku MRA ndipo titsegula chipangizo chilichonse." },
  { num: "4", title: "Kuyeza ndi maphunziro", body: "Kuyeza kwathunthu. Timaphunzitsa wantchito wosaichepera mmodzi pa kukhazikitsa ndipo tisiyira buku la ogwiritsa ntchito." },
  { num: "5", title: "Kuyambira", body: "Kugulitsa kulikonse kumapanga risiti ya QR yosainidwa ndi MRA. Muli m'malamulo. Tiyangana kuyambira tsiku loyamba." },
];

const plans = [
  { name: "Bridge Yosavuta", setup: "MWK 120,000", monthly: "MWK 35,000", desc: "Kwa mabizinesi ake POS kapena dongosolo la ndalama. Timalumikiza ku EIS ya MRA. Palibe hardware yowonjezeka. Kuphatikiza kosavuta.", featured: false, cta: "Funsani zambiri" },
  { name: "POS ya Foni Yoyambira", setup: "MWK 520,000", monthly: "MWK 50,000", desc: "Yabwino kwa malonda ang'ono, maresitoranti ndi ogulitsa pa msewu. Software ya POS yathunthu ndi yovomerezeka ndi EIS pa chipangizo cha foni.", featured: false, cta: "Funsani zambiri" },
  { name: "POS ya Kaonter ya Bizinesi", setup: "MWK 750,000", monthly: "MWK 70,000", desc: "Kwa masitolo, ma pharmacy ndi malonda wamba. Hardware ya kaonter ndi katundu wathunthu, kugulitsa ndi kutumiza EIS zophatikizidwa.", featured: true, cta: "Funsani zambiri" },
  { name: "Retalho Pro", setup: "MWK 1,250,000", monthly: "MWK 110,000", desc: "Kwa ogulitsa kwakukulu, masitolo akulu ndi malonda a kuchuluka. Ma terminal ochuluka, malipoti apamwamba ndi kuyang'anira kwathunthu.", featured: false, cta: "Funsani zambiri" },
  { name: "Malo Ochuluka / Bizinesi Yakukula", setup: "Kuyambira MWK 1,500,000", monthly: "MWK 150,000 - 300,000", desc: "Kukhazikitsa kopangidwa kwa malo ochuluka. Kuyang'anira pa malo kofunika. Kuphatikiza kodzikirira ndi thandizo loyamba.", featured: false, cta: "Pemphani kuyang'anira pa malo" },
];

const monthly = [
  { title: "Kuyang'anira Kuthandikira kwa EIS", body: "Tiyangana njira yanu yotumizira ku MRA maola 24 pa tsiku. Zovuta zimakhedwa msanazo MRA isanakudziwitsa." },
  { title: "Kupeza ndi Kukonza Zolakwika", body: "Zotumizidwa zolephera zimapezedwa ndi kukonzedwa. Muli m'malamulo ngakhale zinthu zilakwike." },
  { title: "Kuyang'anira Zosintha za MRA", body: "MRA ikasinthitsa protocol ya EIS kapena mitengo, tikuika zosintha mwazilumba. Palibe ndalama zowonjezeka." },
  { title: "Thandizo la Kutali", body: "Anthu enieni. Kutsimikizira tsiku lomwelo. Zovuta zazikulu zimakonzedwa mu maola 24 mpaka 48." },
];

const sectors = [
  { title: "Masupermarket ndi Malonda a Chakudya", body: "Kuchuluka kwa ntchito. EIS yofunika. Nthawi zambiri osakhazikika. Kuchuluka mwamsanga kukhazikitsa." },
  { title: "Ma Pharmacy", body: "Olembedwa ku VAT. Olamulidwa. Odziwa za kuvomerezana. Bridge yosavuta m'mayiko ambiri." },
  { title: "Masitolo a Zomangamanga", body: "Ndalama zambiri ndi m'manja. Ma risiti a dzanja. Kuvutitsa pang'ono kwambiri ma system omwe alipo." },
  { title: "Maresitoranti ndi Zosangalatsa", body: "Ma terminal ochuluka. Akufuna ma risiti mwamsanga. Mwayi wabwino wa kugulitsa POS." },
  { title: "Ogulitsa Kwakukulu ndi Ogawana", body: "Kuchuluka kwa ma invoice. Zolakwika za EIS ndi zowononga. Mtengo wabwino woweleuka mwezi ndi mwezi." },
  { title: "Ogulitsa Magalimoto", body: "Olembedwa ku VAT. Ntchito zambiri. Nthawi zambiri pa ma system a dzanja." },
];

const timelines = [
  { pkg: "Bridge Yosavuta", time: "Masiku 1 mpaka 3 a ntchito" },
  { pkg: "POS ya Foni Yoyambira", time: "Masiku 2 mpaka 5 a ntchito" },
  { pkg: "POS ya Kaonter ya Bizinesi", time: "Masiku 3 mpaka 7 a ntchito" },
  { pkg: "Retalho Pro", time: "Masiku 5 mpaka 14 a ntchito (kutengera malo)" },
  { pkg: "Malo Ochuluka / Bizinesi Yakukula", time: "Mogwirizana pambuyo pa kuyang'anira pa malo" },
];

const incentives = [
  { title: "Makasitomala 20 oyamba", body: "Mwezi woyamba wa thandizo aulere pa phukusi iliyonse" },
  { title: "Kulipira chaka chonse", body: "Kutsitsa kwa 10% pa mitengo ya mwezi ndi kulipira kwachaka" },
  { title: "Kuphatikiza mu maola 72", body: "Makasitomala a bridge otsegulika mu masiku 1 mpaka 3 a ntchito" },
  { title: "Palibe zodabwitsa za kugwirizana", body: "Mitengo yowonekeratu kuyambira pachiyambi. Palibe ziphaso zobisika za kuphatikiza" },
];

const G = "#25D366";
const BG = "#0a0f0d";
const SURF = "#111a14";
const SURF2 = "#192119";
const BORDER = "#1f2e22";
const TEXT = "#e8f0e9";
const MUTED = "#7a9480";

export default function NyEisPage() {
  const [bizName, setBizName] = useState("");
  const [contactName, setContactName] = useState("");
  const [pkg, setPkg] = useState("");
  const [msg, setMsg] = useState("");

  function submitEnquiry() {
    if (!contactName.trim()) return;
    let t = "EIS Compliance Enquiry (NY)";
    if (contactName) t += "%0ADzina: " + encodeURIComponent(contactName);
    if (bizName) t += "%0ABungwe: " + encodeURIComponent(bizName);
    if (pkg) t += "%0APhukusi: " + encodeURIComponent(pkg);
    if (msg) t += "%0AUthenga: " + encodeURIComponent(msg);
    window.open("https://wa.me/265889941700?text=" + t, "_blank");
  }

  const con: React.CSSProperties = { maxWidth: "1100px", margin: "0 auto" };
  const sec: React.CSSProperties = { padding: "80px 32px", background: BG };
  const inp: React.CSSProperties = { width: "100%", padding: "10px 14px", background: SURF2, border: "1px solid " + BORDER, borderRadius: "6px", color: TEXT, fontSize: "14px", outline: "none", boxSizing: "border-box" };
  const eyebrow: React.CSSProperties = { fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: G, marginBottom: "12px" };

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: "var(--font-body)" }}>

      <section style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "100px 32px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,211,102,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: G, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: G, display: "inline-block" }} />
          Dongosolo la Mabili Olemba la MRA
        </div>
        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: 1.1, color: "#fff", marginBottom: "20px", maxWidth: "720px" }}>
          EIS Compliance kwa <span style={{ color: G }}>mabizinesi a Malawi</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", maxWidth: "540px", lineHeight: 1.65, marginBottom: "32px" }}>
          Timalumikiza bizinesi yanu ku EIS ya MRA mu maola 72. Palibe kuvutitsa. Palibe zipatso. Ma risiti a QR osainidwa digito pa kugulitsa kulikonse.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#eis-contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", background: G, color: "#fff", borderRadius: "6px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>Lankhulani pa WhatsApp</a>
          <a href="#eis-pricing" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "6px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Onani Mitengo</a>
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#0d1a10", borderTop: "1px solid " + BORDER, borderBottom: "1px solid " + BORDER }}>
        {[
          { val: "72h", label: "Nthawi yanthunthu ya kuphatikiza" },
          { val: "MWK 0", label: "Ndalama zobisika" },
          { val: "Same day", label: "Yankho la thandizo" },
          { val: "Pano", label: "Gulu ku Blantyre" },
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
            <div style={eyebrow}>Njira</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.1 }}>Momwe Zimayendera</h2>
            <p style={{ color: MUTED, marginTop: "8px" }}>Kuyambira kulembetsa mpaka risiti yoyamba yosainidwa ndi MRA</p>
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
            <div style={eyebrow}>Mitengo</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.1 }}>Mitengo — Palibe Nsanja Zobisika</h2>
            <p style={{ color: MUTED, marginTop: "8px" }}>Kukhazikitsa ndi kamodzi. Mitengo ya mwezi imaphatikiza kuyang'anira, thandizo ndi zosintha zonse za MRA.</p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(200px, 1fr))", minWidth: "860px", border: "1px solid " + BORDER, borderRadius: "8px", overflow: "hidden" }}>
              {plans.map((p, i) => (
                <div key={i} style={{ padding: "24px 20px", borderRight: i < 4 ? "1px solid " + BORDER : "none", background: p.featured ? "#0d2e18" : SURF2, position: "relative", display: "flex", flexDirection: "column" }}>
                  {p.featured && <div style={{ position: "absolute", top: "12px", right: "12px", background: G, color: "#fff", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "20px", letterSpacing: "0.05em" }}>Wodziwika</div>}
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: p.featured ? "rgba(255,255,255,0.6)" : MUTED, marginBottom: "8px" }}>{p.name}</div>
                  <div style={{ fontFamily: "var(--font-syne)", fontSize: "1.5rem", fontWeight: 800, color: G, lineHeight: 1 }}>{p.setup}</div>
                  <div style={{ fontSize: "0.68rem", color: MUTED, marginBottom: "8px" }}>kukhazikitsa kamodzi</div>
                  <div style={{ fontSize: "0.84rem", fontWeight: 700, color: p.featured ? "rgba(255,255,255,0.9)" : TEXT, borderTop: "1px solid " + BORDER, paddingTop: "8px", marginBottom: "8px" }}>{p.monthly} <span style={{ fontWeight: 400, fontSize: "0.72rem", color: MUTED }}>/ mwezi</span></div>
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
            <div style={eyebrow}>Thandizo lophatikizidwa</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.1 }}>Chomwe Ndalama Zanu za Mwezi Zimaphatikiza</h2>
            <p style={{ color: MUTED, marginTop: "8px" }}>Mapulani onse amaphatikiza zitsimikizo izi zinayi</p>
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
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Mtengo wa Kutsatira Malamulo</h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65, marginBottom: "16px" }}>
                Zipatso za MRA chifukwa cha kusatsatira EIS ziyamba ku MWK 500,000 pa kuphwanya komwe kuyezedwa. Kukonzanso modzikha kwa ma risiti kumadya maola ochuluka a ntchito pa sabata. Mitengo yathu ya mwezi ndi yotsika kuposa malipiro a tsiku la wantchito mmodzi.
              </p>
              <div style={{ background: "rgba(231,76,60,0.12)", border: "1px solid rgba(231,76,60,0.3)", borderRadius: "6px", padding: "12px 16px", fontSize: "0.84rem", color: "#e74c3c", fontWeight: 600 }}>
                Zipatso za MRA ziyamba ku MWK 500,000 pa kuphwanya — ndalama zathu zachaka ndi gawo laling'ono la chipatso chimodzi
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 32px", background: SURF, borderTop: "1px solid " + BORDER, borderBottom: "1px solid " + BORDER }}>
        <div style={con}>
          <div style={{ marginBottom: "40px" }}>
            <div style={eyebrow}>Magawo</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.1 }}>Amene Timawatumikirira</h2>
            <p style={{ color: MUTED, marginTop: "8px" }}>Mabizinesi olembedwa ku VAT m'magawo a kuchuluka</p>
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
            <div style={eyebrow}>Nthawi</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.1 }}>Nthawi Zotsimikiziridwa za Kutumiza</h2>
            <p style={{ color: MUTED, marginTop: "8px" }}>Titsimikizira nthawi izi. Ngati tikuti maola 72, timapereka mu maola 72.</p>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid " + BORDER, borderRadius: "8px", overflow: "hidden" }}>
            <thead>
              <tr style={{ background: SURF }}>
                <th style={{ padding: "12px 16px", textAlign: "left", fontSize: "0.78rem", fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid " + BORDER }}>Phukusi</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontSize: "0.78rem", fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid " + BORDER }}>Nthawi Yoganizidwa</th>
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
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", marginBottom: "12px" }}>Muli okonzeka kutsatira malamulo?</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", marginBottom: "24px" }}>Imbani, tumizani WhatsApp kapena tumizani uthenga. Titha kukuphatikizani mu maola 72.</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
              <a href="https://wa.me/265889941700" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: G, color: "#fff", borderRadius: "6px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>Lankhulani pa WhatsApp</a>
              <a href="tel:+265889941700" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "6px", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>+265 889 941 700</a>
            </div>
          </div>
          <div style={{ background: SURF2, border: "1px solid " + BORDER, borderRadius: "8px", padding: "32px" }}>
            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: TEXT, marginBottom: "20px" }}>Fomula la Kufunsa za EIS</h3>
            <div style={{ display: "grid", gap: "14px" }}>
              <div>
                <label htmlFor="ny-eis-name" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: MUTED, marginBottom: "6px" }}>Dzina *</label>
                <input id="ny-eis-name" type="text" placeholder="Dzina lanu" value={contactName} onChange={e => setContactName(e.target.value)} style={inp} autoComplete="name" />
              </div>
              <div>
                <label htmlFor="ny-eis-org" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: MUTED, marginBottom: "6px" }}>Bungwe</label>
                <input id="ny-eis-org" type="text" placeholder="Dzina la kampani" value={bizName} onChange={e => setBizName(e.target.value)} style={inp} autoComplete="organization" />
              </div>
              <div>
                <label htmlFor="ny-eis-pkg" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: MUTED, marginBottom: "6px" }}>Phukusi yomukhumba</label>
                <select id="ny-eis-pkg" value={pkg} onChange={e => setPkg(e.target.value)} style={{ ...inp, cursor: "pointer" }}>
                  <option value="">Sankhani phukusi</option>
                  <option>Bridge Yosavuta — MWK 120,000 kukhazikitsa</option>
                  <option>POS ya Foni Yoyambira — MWK 520,000 kukhazikitsa</option>
                  <option>POS ya Kaonter ya Bizinesi — MWK 750,000 kukhazikitsa</option>
                  <option>Retalho Pro — MWK 1,250,000 kukhazikitsa</option>
                  <option>Malo Ochuluka / Bizinesi Yakukula — yosintha</option>
                  <option>Sindikudziwa — ndifuna uphungu</option>
                </select>
              </div>
              <div>
                <label htmlFor="ny-eis-msg" style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: MUTED, marginBottom: "6px" }}>Uthenga *</label>
                <textarea id="ny-eis-msg" rows={3} placeholder="Fotokozani bizinesi yanu ndi dongosolo lanu lomwe lili nalo..." value={msg} onChange={e => setMsg(e.target.value)} style={{ ...inp, resize: "vertical" }} />
              </div>
              <button onClick={submitEnquiry} type="button" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px 20px", background: G, color: "#fff", border: "none", borderRadius: "6px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>
                Tumizani kudzera WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
