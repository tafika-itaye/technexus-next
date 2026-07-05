import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechNexus — Kupanga Mapulogalamu & IT Consultancy",
  description: "TechNexus kupanga mapulogalamu, ma applications a web, ma systems a mabungwe. ASP.NET Core, Blazor. Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/ny/software-development",
    languages: {
      "en": "https://www.technexusmw.com/software-development",
      "pt": "https://www.technexusmw.com/pt/software-development",
      "ny": "https://www.technexusmw.com/ny/software-development",
    },
  },
};

const BG = "var(--fl-neutral-2)";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const ACCENT = "var(--fl-blue)";
const TH: React.CSSProperties = { padding: "10px 16px", textAlign: "left" as const, fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", color: MUTED, borderBottom: "1px solid var(--fl-neutral-8)", background: "var(--fl-neutral-4)" };
const TD: React.CSSProperties = { padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid var(--fl-neutral-8)", color: TEXT };
const WA = "https://wa.me/265889941700?text=Muli%20bwanji%20TechNexus%2C%20ndikufuna%20quotation%20ya%3A%0A";

const services = [
  { name: "Kupanga Mapulogalamu a Mabungwe Akulu", featured: true, desc: "Ma system ofunikira kwambiri — gulu lodzikirira, SLA 24/7, kuyeza chitetezo, kuvomerezana, kukhazikitsa kwakukulu", mwk: "MK 26,010,000+", usd: "$15,000+" },
  { name: "Kupanga Mapulogalamu Okhazikika", featured: false, desc: "Ma applications a mabungwe opangidwa mwakukonzekera — ASP.NET Core, Blazor Server, PostgreSQL, cloud-native", mwk: "MK 7,000,000+", usd: "$3,700+" },
  { name: "Kupanga Application ya Web", featured: false, desc: "Ma applications a web, ma portal, ma dashboard, kupanga API", mwk: "MK 2,850,000+", usd: "$1,500+" },
  { name: "Kupanga App ya Foni", featured: false, desc: "Ma applications a Android ndi multiplataforma", mwk: "MK 5,700,000+", usd: "$3,000+" },
  { name: "Kusamalira ndi Kuthandiza Mapulogalamu", featured: false, desc: "Thandizo lopitilira, kukonza zolakwika, kukonzanso, yankho la SLA", mwk: "MK 2,080,000+/mwezi", usd: "$1,200+/mwezi" },
  { name: "Ntchito za Cloud ndi Kuphatikiza", featured: false, desc: "Azure, DigitalOcean, on-premise. Kusuntha, kukhazikitsa, kuyang'anira", mwk: "MK 3,800,000+", usd: "$2,000+" },
  { name: "Kusanthula Deta ndi BI", featured: false, desc: "Ma dashboard a lipoti, kutsatira KPI, thandizo la kusankha lothandizidwa ndi deta", mwk: "MK 2,850,000+", usd: "$1,500+" },
  { name: "Kupanga UI/UX", featured: false, desc: "Kafukufuku wa ogwiritsa ntchito, wireframes, mockups, ma prototype oweza kugwirizana", mwk: "MK 1,900,000+", usd: "$1,000+" },
  { name: "IT Consultancy ndi Kuyang'anira Ntchito", featured: false, desc: "Kusanthula zofunikira, architecture, kusankha ogulitsa, kuyang'anira ntchito", mwk: "Quotation yosintha", usd: "Yosintha" },
];

const stack = [
  { title: "Backend", body: "ASP.NET Core 8, C#, Entity Framework Core, REST APIs" },
  { title: "Frontend", body: "Blazor Server, Razor Pages, HTML5/CSS3, JavaScript" },
  { title: "Databases", body: "PostgreSQL 16, SQL Server, SQLite (foni)" },
  { title: "Cloud ndi DevOps", body: "Microsoft Azure, DigitalOcean, Docker, Git, pipelines CI/CD" },
  { title: "Mapangidwe", body: "Windows Server 2022, Ubuntu Server, Nginx, IIS" },
  { title: "Chitetezo", body: "ASP.NET Identity, kutsimikizira mwa udindo, SSL/TLS, encryption yosungidwa" },
];

const healthcare = [
  { title: "Ntchito za Chipatala", body: "Service desk ndi ticketing, kuyang'anira SLA, kutsatira zinthu, kusimba mwazilumba, malipoti a madepatimenti." },
  { title: "Kuvomerezana ndi Ubwino", body: "Kuyang'anira ndondomeko, kutsatira mitundu, kuvomereza antchito, malipoti a zochitika, kutumiza COHSASA." },
  { title: "Mapangidwe", body: "Ntchito za LAN/WAN, kukhazikitsa chipinda cha seva, kusuntha ku cloud, kuphatikiza ma system, ma system a POS." },
  { title: "Ma System a Kulanda Zinthu", body: "Kuyang'anira zinthu, kuyang'anira katundu, kuyang'anira ogulitsa, malipoti a kuvomerezana." },
];

const team = [
  { role: "Woyamba ndi Dyarekita Waukulu", body: "Zaka zoposa 15 za luso mu kupanga mapulogalamu a mabungwe." },
  { role: "Wopanga Wamkulu ndi Wokonza Mapangidwe", body: "Injiniya full-stack. Katswiri wa C#, .NET Core, Angular, React, Azure, CI/CD." },
  { role: "Woganizira za Bizinesi ndi Ma System", body: "Wotsimikiziridwa ISC2 CC. MSc mu Information Systems. Katswiri wa ITSM, ERP, Power BI ndi kusanthula deta." },
  { role: "Woyang'anira Bizinesi ndi Kulumikizana ndi Makasitomala", body: "Woyang'anira mgwirizano, kuvomerezana kwa kulanda, kugulitsa ndi kulumikizana kwa stakeholders." },
];

export default function NySoftwareDevelopmentPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      <div style={{ position: "relative", padding: "64px 40px 48px", textAlign: "center", backgroundImage: "url(/index_main/software_dev_1-1200.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative" }}>
          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Kupanga Mapulogalamu &amp; IT Consultancy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", maxWidth: "640px", margin: "0 auto 20px", lineHeight: 1.7 }}>
            Ma applications opangidwa mwakukonzekera, ma system a web ndi ma platform adigitala. Opangidwa mu C#, .NET Core, Blazor ndi PostgreSQL. Kuchokera pa lingaliro mpaka kukhazikitsa.
          </p>
          <div style={{ display: "inline-block", background: "rgba(0,120,212,0.25)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "#90caf9", fontSize: "13px" }}>
            ASP.NET Core · Blazor · PostgreSQL · Azure · Full-Stack
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>

        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "6px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Ntchito za Kupanga</h2>
          <p style={{ fontSize: "13px", color: MUTED, margin: "4px 0 0" }}>Mapulogalamu okhazikika omwe amapangitsa mabungwe kugwira ntchito bwino.</p>
        </div>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px" }}>Mitengo siikuphatikiza VAT ya 17.5%. Mtengo: 1 USD = MK 1,734 (Marichi 2026).</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "520px" }}>
            <thead>
              <tr>
                <th style={TH}>Ntchito</th>
                <th style={TH}>Mfotokozero</th>
                <th style={TH}>Kuyambira (MWK)</th>
                <th style={TH}>Kuyambira (USD)</th>
                <th style={TH}>Quote</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, i) => (
                <tr key={i} style={{ background: s.featured ? "rgba(0,120,212,0.06)" : i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={{ ...TD, fontWeight: 700, color: s.featured ? ACCENT : TEXT, whiteSpace: "nowrap" as const }}>
                    {s.featured ? "* " : ""}{s.name}
                  </td>
                  <td style={{ ...TD, color: MUTED, fontSize: "12px" }}>{s.desc}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600, whiteSpace: "nowrap" as const }}>{s.mwk}</td>
                  <td style={{ ...TD, color: MUTED, whiteSpace: "nowrap" as const }}>{s.usd}</td>
                  <td style={TD}>
                    <a href={WA + encodeURIComponent(s.name) + "%0AMtengo%3A%20" + encodeURIComponent(s.usd)} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" as const }}>
                      Quote
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "20px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Zinthu Zomwe Tigwiritsa Ntchito</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {stack.map(s => (
            <div key={s.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{s.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "6px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Luso la Zipatala ndi Mabungwe</h2>
          <p style={{ fontSize: "13px", color: MUTED, margin: "4px 0 0" }}>Chidziwitso chowona cha kupanga zinthu kwa ntchito za chipatala ndi maboma.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px", marginTop: "20px" }}>
          {healthcare.map(s => (
            <div key={s.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{s.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "20px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Gulu la Kupanga</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {team.map(t => (
            <div key={t.role} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <div style={{ fontFamily: "var(--font-syne)", fontSize: "14px", fontWeight: 700, color: ACCENT, marginBottom: "8px" }}>{t.role}</div>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{t.body}</p>
            </div>
          ))}
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid " + ACCENT, borderRadius: "8px", padding: "24px", marginBottom: "20px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Umboni ndi Kulembetsa</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>Olembedwa mwakukwanira ku MANePS (Dongosolo la National Electronic Procurement la Malawi). Mgwirizano wonse woyendera Lamulo la Kuyang'anira Ndalama za Boma (2022). Zolembedwa zonse pa ntchito yonse. Wopatikizika ku tender ya boma, mgwirizano wa private sector ndi procurement ya ogwirirana ndi chitukuko.</p>
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid " + ACCENT, borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Umboni wa Zamdule</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>High Commission ya Republic ya Mozambique, Lilongwe (February 2026) itsimikizira kuti TechNexus yaperekedwa ntchito zapamwamba ku Mission pa nthawi yayitali. Mission ikutamanda TechNexus chifukwa cha muyeso wake wapamwamba wa kukhala wachikumbu, kulondola, kukhala wodalirika ndi chinsinsi.</p>
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, marginBottom: "12px" }}>Yambitsani Ntchito</h3>
          <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, marginBottom: "20px" }}>
            Tiumizireni zomwe mukufuna kuchita kudzera WhatsApp kapena email. Tiyankha mu maola 24 ndi msonkhano woyambira ndipo tipereka quotation ya mtengo wokhazikika mu masiku 5 a ntchito.
          </p>
          <a href="https://wa.me/265889941700?text=Muli%20bwanji%20TechNexus%2C%20ndikufuna%20quotation%20kuchokera%20ku%20tsamba%20la%20Kupanga%20Mapulogalamu." target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Yambitsani Ntchito
          </a>
        </div>

      </div>
    </div>
  );
}
