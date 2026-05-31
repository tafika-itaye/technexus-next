const BG = "var(--fl-neutral-2)";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const ACCENT = "var(--fl-blue)";
const TH: React.CSSProperties = { padding: "10px 16px", textAlign: "left" as const, fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", color: MUTED, borderBottom: "1px solid var(--fl-neutral-8)", background: "var(--fl-neutral-4)" };
const TD: React.CSSProperties = { padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid var(--fl-neutral-8)", color: TEXT };
const WA = "https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0A";

const services = [
  { name: "Enterprise Software Development", featured: true, desc: "Mission-critical systems — dedicated team, 24/7 SLA, security audits, compliance, large-scale deployments", mwk: "MK 26,010,000+", usd: "$15,000+" },
  { name: "Custom Software Development", featured: false, desc: "Bespoke business applications — ASP.NET Core, Blazor Server, PostgreSQL, cloud-native", mwk: "MK 7,000,000+", usd: "$3,700+" },
  { name: "Web Application Development", featured: false, desc: "Responsive web apps, portals, dashboards, API development", mwk: "MK 2,850,000+", usd: "$1,500+" },
  { name: "Mobile App Development", featured: false, desc: "Android and cross-platform applications", mwk: "MK 5,700,000+", usd: "$3,000+" },
  { name: "Software Maintenance and Support", featured: false, desc: "Ongoing support, bug fixing, updates, SLA response", mwk: "MK 2,080,000+/month", usd: "$1,200+/month" },
  { name: "Cloud Services and Integration", featured: false, desc: "Azure, DigitalOcean, on-premise. Migration, deployment, monitoring", mwk: "MK 3,800,000+", usd: "$2,000+" },
  { name: "Data Analytics and BI", featured: false, desc: "Reporting dashboards, KPI tracking, data-driven decision support", mwk: "MK 2,850,000+", usd: "$1,500+" },
  { name: "UI/UX Design", featured: false, desc: "User research, wireframes, mockups, interactive prototypes", mwk: "MK 1,900,000+", usd: "$1,000+" },
  { name: "IT Consultancy and Project Management", featured: false, desc: "Requirements analysis, architecture, vendor selection, project oversight", mwk: "Custom quote", usd: "Custom" },
];

const stack = [
  { title: "Backend", body: "ASP.NET Core 8, C#, Entity Framework Core, REST APIs" },
  { title: "Frontend", body: "Blazor Server, Razor Pages, HTML5/CSS3, JavaScript" },
  { title: "Database", body: "PostgreSQL 16, SQL Server, SQLite (mobile)" },
  { title: "Cloud and DevOps", body: "Microsoft Azure, DigitalOcean, Docker, Git, CI/CD pipelines" },
  { title: "Infrastructure", body: "Windows Server 2022, Ubuntu Server, Nginx, IIS" },
  { title: "Security", body: "ASP.NET Identity, role-based authentication, SSL/TLS, encryption at rest" },
];

const healthcare = [
  { title: "Hospital Operations", body: "Service desk and ticketing, SLA management, asset tracking, auto-routing, department reporting." },
  { title: "Compliance and Quality", body: "Policy management, version control, staff attestation, incident reporting, COHSASA accreditation export." },
  { title: "Infrastructure", body: "LAN/WAN projects, server room installation, cloud migration, systems integration, POS systems." },
  { title: "Procurement Systems", body: "Asset monitoring, inventory management, vendor management, compliance reporting." },
];

const team = [
  { role: "Founder and Managing Director", body: "Over 15 years of experience in enterprise software development." },
  { role: "Senior Developer and Technical Architect", body: "Full-stack engineer. Specialist in C#, .NET Core, Angular, React, Azure, CI/CD." },
  { role: "Business and Systems Analyst", body: "ISC2 CC certified. MSc in Management Information Systems. Specialist in ITSM, ERP, Power BI, data analysis." },
  { role: "Business Manager and Client Liaison", body: "Responsible for contract management, procurement compliance, sales and stakeholder coordination." },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      {/* HERO */}
      <div style={{ background: "var(--fl-neutral-90)", padding: "64px 40px 48px", textAlign: "center", backgroundImage: "url(/index_main/software_dev_1.webp)", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
          Software Development and IT Consultancy
        </h1>
        <p style={{ color: "#999", fontSize: "15px", maxWidth: "640px", margin: "0 auto 20px", lineHeight: 1.7 }}>
          Bespoke business applications, web systems and digital platforms. Built in C#, .NET Core, Blazor and PostgreSQL. From concept to deployment.
        </p>
        <div style={{ display: "inline-block", background: "rgba(0,120,212,0.15)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "var(--fl-blue)", fontSize: "13px" }}>
          ASP.NET Core · Blazor · PostgreSQL · Azure · Full-Stack
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>

        {/* SERVICES TABLE */}
        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "6px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Development Services</h2>
          <p style={{ fontSize: "13px", color: MUTED, margin: "4px 0 0" }}>Custom software solutions that improve how organisations operate.</p>
        </div>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px" }}>All prices exclude 17.5% VAT. Rate: 1 USD = MK 1,734 (March 2026).</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "520px" }}>
            <thead>
              <tr>
                <th style={TH}>Service</th>
                <th style={TH}>Description</th>
                <th style={TH}>From (MWK)</th>
                <th style={TH}>From (USD)</th>
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
                    <a href={WA + encodeURIComponent(s.name) + "%0APrice%3A%20" + encodeURIComponent(s.usd)} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" as const }}>
                      Quote
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TECHNOLOGY STACK */}
        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "20px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Technology Stack</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {stack.map(s => (
            <div key={s.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{s.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* HEALTHCARE CAPABILITIES */}
        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "6px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Healthcare and Institutional Capabilities</h2>
          <p style={{ fontSize: "13px", color: MUTED, margin: "4px 0 0" }}>Direct experience building systems for hospital operations and government institutions.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px", marginTop: "20px" }}>
          {healthcare.map(s => (
            <div key={s.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{s.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* TEAM */}
        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "20px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Development Team</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {team.map(t => (
            <div key={t.role} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <div style={{ fontFamily: "var(--font-syne)", fontSize: "14px", fontWeight: 700, color: ACCENT, marginBottom: "8px" }}>{t.role}</div>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{t.body}</p>
            </div>
          ))}
        </div>

        {/* CREDENTIALS */}
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid " + ACCENT, borderRadius: "8px", padding: "24px", marginBottom: "20px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Credentials and Registration</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>Fully registered on MANePS (Malawi National Electronic Procurement System). All engagements conducted under the Public Finance Management Act (2022). Full audit trails on every project. Available for public tenders, private sector contracts and development partner procurement.</p>
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid " + ACCENT, borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Diplomatic Reference</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>The High Commission of the Republic of Mozambique, Lilongwe (February 2026) confirms that TechNexus has provided professional services to the Mission over an extended period. The Mission commends TechNexus for its high standards of professionalism, accuracy, reliability and discretion.</p>
        </div>

        {/* CTA */}
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, marginBottom: "12px" }}>Start a Project</h3>
          <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, marginBottom: "20px" }}>
            Send us your requirements via WhatsApp or email. We respond within 24 hours with a scoping call, and deliver a fixed-price quotation within 5 business days.
          </p>
          <a href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20from%20the%20Software%20Dev%20page." target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Start a Project
          </a>
        </div>

      </div>
    </div>
  );
}

