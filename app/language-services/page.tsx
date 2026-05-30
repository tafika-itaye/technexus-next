import Link from "next/link";

const langServices = [
  { name: "Document Translation", langs: "EN↔PT, EN↔NY, EN↔SW", unit: "per page (250 words)", mwk: "MK 17,340", usd: "$10", wa: "Document%20Translation%0APrice%3A%20%2410" },
  { name: "Certified Translation", langs: "EN↔PT, EN↔NY", unit: "per page (250 words)", mwk: "MK 26,010", usd: "$15", wa: "Certified%20Translation%0APrice%3A%20%2415" },
  { name: "Audio Transcription", langs: "EN, PT, NY, SW", unit: "per audio hour", mwk: "MK 86,700", usd: "$50", wa: "Audio%20Transcription%0APrice%3A%20%2450" },
  { name: "Transcription + Translation", langs: "EN↔PT, EN↔NY", unit: "per audio hour", mwk: "MK 138,720", usd: "$80", wa: "Transcription%20%2B%20Translation%0APrice%3A%20%2480" },
  { name: "Subtitling / Captioning", langs: "EN, PT, NY, SW", unit: "per video minute", mwk: "MK 8,670", usd: "$5", wa: "Subtitling%20%2F%20Captioning%0APrice%3A%20%245" },
  { name: "Consecutive Interpretation", langs: "EN↔PT, EN↔NY", unit: "per hour", mwk: "MK 121,380", usd: "$70", wa: "Consecutive%20Interpretation%0APrice%3A%20%2470" },
  { name: "Conference Interpretation", langs: "EN↔PT, EN↔NY", unit: "per half day", mwk: "MK 346,800", usd: "$200", wa: "Conference%20Interpretation%0APrice%3A%20%24200" },
  { name: "Language Training", langs: "EN, PT, NY, SW", unit: "per hour (group)", mwk: "MK 69,360", usd: "$40", wa: "Language%20Training%0APrice%3A%20%2440" },
  { name: "Proofreading & Editing", langs: "EN, PT", unit: "per page", mwk: "MK 8,670", usd: "$5", wa: "Proofreading%20%26%20Editing%0APrice%3A%20%245" },
  { name: "Website / App Localisation", langs: "EN↔PT, EN↔NY", unit: "custom quote", mwk: "from MK 346,800", usd: "from $200", wa: "Website%20%2F%20App%20Localisation%0APrice%3A%20from%20%24200" },
];

const tenderServices = [
  { name: "Pre-Qualification Registration", desc: "Supplier registration forms, company profiles, compliance docs", mwk: "MK 100,000" },
  { name: "Simple Tender Response", desc: "Quotation-based tenders, RFQs, straightforward bid documents", mwk: "MK 200,000" },
  { name: "Complex Tender Response", desc: "Full proposals, technical and financial bids, method statements, RFPs", mwk: "MK 450,000" },
  { name: "Compliance Review", desc: "Check completed docs for errors, missing fields, compliance gaps", mwk: "MK 75,000" },
  { name: "Tender Document Translation", desc: "Translate tender docs: English, Portuguese, Chichewa, Swahili", mwk: "MK 7,000/page" },
];

const localReg = [
  { name: "MSME / Business Name Registration", desc: "Register sole trader or MSME business name with MBRS", mwk: "MK 50,000" },
  { name: "Company Incorporation", desc: "Private Limited Company registration with MBRS. Memorandum, articles, share allocation", mwk: "MK 150,000" },
  { name: "TPIN Registration", desc: "Taxpayer PIN with Malawi Revenue Authority. Required for tax compliance and procurement", mwk: "MK 30,000" },
  { name: "MRA VAT Registration", desc: "VAT registration for businesses exceeding the MRA turnover threshold", mwk: "MK 50,000" },
  { name: "PPDA Vendor Registration", desc: "Register as a supplier on the Public Procurement and Disposal of Assets Authority portal", mwk: "MK 80,000" },
  { name: "MANePS Registration", desc: "Malawi National Electronic Procurement System — required for government tenders", mwk: "MK 80,000" },
  { name: "TEVETA / Sector Licensing", desc: "Technical, Entrepreneurial and Vocational Education and Training Authority licensing", mwk: "MK 100,000" },
  { name: "Annual Returns & Compliance Review", desc: "Prepare and file annual company returns, review compliance status across all registrations", mwk: "MK 60,000" },
];

const crossBorderReg = [
  { country: "Zambia", name: "PACRA Business Registration", desc: "Patents and Companies Registration Agency — company name search, reservation, and registration", mwk: "MK 200,000" },
  { country: "Zambia", name: "ZRA TPIN / Tax Registration", desc: "Zambia Revenue Authority taxpayer registration for doing business in Zambia", mwk: "MK 100,000" },
  { country: "Mozambique", name: "CPPME / NUIT Registration", desc: "Commercial registration with CPPME and tax number (NUIT) with AT-Mocambique. Includes Portuguese document preparation", mwk: "MK 250,000" },
  { country: "Mozambique", name: "License / Alvara Comercial", desc: "Municipal commercial operating licence. Required for formal business operations in Mozambique", mwk: "MK 150,000" },
  { country: "South Africa", name: "CIPC Company Registration", desc: "Companies and Intellectual Property Commission registration. Private company (Pty Ltd) or NPC", mwk: "MK 300,000" },
  { country: "South Africa", name: "SARS Tax Number", desc: "South African Revenue Service registration for income tax and VAT", mwk: "MK 120,000" },
  { country: "Multi-country", name: "Full Registration Pack", desc: "Business registration, tax number, and operating licence in a single country. Includes all document translation and agent coordination", mwk: "MK 400,000" },
];

const langPairs = [
  { pair: "English to/from Portuguese", body: "Documents, contracts, correspondence, medical records, legal instruments. Diplomatic and institutional clients served." },
  { pair: "English to/from Chichewa", body: "Community health, government communications, educational materials, NGO fieldwork documentation." },
  { pair: "English to/from Swahili", body: "Cross-border trade, East Africa NGO communications, media and broadcast." },
  { pair: "Portuguese to/from Chichewa", body: "Malawi-Mozambique corridor: border documentation, business agreements, consular materials." },
];

const sectors = [
  { title: "Diplomatic Missions", body: "Consular correspondence, diplomatic notes, visa documentation, protocol materials. Discretion assured." },
  { title: "Healthcare", body: "Patient records, clinical trial documentation, medical device manuals. HIPAA-aware handling." },
  { title: "Legal and Compliance", body: "Contracts, affidavits, court documents, compliance frameworks. Certified translations available." },
  { title: "Corporate and NGO", body: "Annual reports, HR policy, project documentation, donor reports, board materials." },
  { title: "Procurement and Tenders", body: "Pre-qualification packs, tender responses, RFQ documents, compliance reviews. Fixed-price service." },
  { title: "Cross-Border Business", body: "Business registration, tax compliance, operating licences in Malawi, Zambia, Mozambique, and South Africa." },
  { title: "Media and Broadcast", body: "Subtitling for film, documentary, training video and e-learning content." },
  { title: "Education", body: "Curriculum materials, textbook localisation, training manuals, exam papers." },
];

const BG = "var(--fl-neutral-2)";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const ACCENT = "var(--fl-blue)";
const TEAL = "var(--fl-teal)";

const TH: React.CSSProperties = { padding: "10px 16px", textAlign: "left", fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", color: MUTED, borderBottom: "1px solid var(--fl-neutral-8)", background: "var(--fl-neutral-4)" };
const TD: React.CSSProperties = { padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid var(--fl-neutral-8)", color: TEXT };

const WA_BASE = "https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0A";

function QuoteBtn({ text }: { text: string }) {
  return (
    <a href={WA_BASE + text} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" as const }}>
      Quote
    </a>
  );
}

export default function LanguageServicesPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      {/* HERO */}
      <div style={{ background: "var(--fl-neutral-90)", padding: "64px 40px 48px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
          TechNexus Scripts — Language and Consulting Services
        </h1>
        <p style={{ color: "#999", fontSize: "15px", maxWidth: "680px", margin: "0 auto 20px", lineHeight: 1.7 }}>
          Professional translation, transcription, subtitling, interpretation, tender consulting, and business registration services. Serving diplomatic missions, NGOs, healthcare institutions and private clients across Southern and East Africa.
        </p>
        <div style={{ display: "inline-block", background: "rgba(0,120,212,0.15)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "var(--fl-blue)", fontSize: "13px" }}>
          English · Portuguese · Chichewa · Swahili · HIPAA/GDPR-aware
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>

        {/* LANGUAGE SERVICES TABLE */}
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Language Services and Pricing</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "24px" }}>All prices exclude 17.5% VAT. Volume discounts available.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "520px" }}>
            <thead>
              <tr>
                <th style={TH}>Service</th>
                <th style={TH}>Languages</th>
                <th style={TH}>Unit</th>
                <th style={TH}>MWK</th>
                <th style={TH}>USD</th>
                <th style={TH}>Quote</th>
              </tr>
            </thead>
            <tbody>
              {langServices.map((s, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={{ ...TD, fontWeight: 600 }}>{s.name}</td>
                  <td style={{ ...TD, color: MUTED }}>{s.langs}</td>
                  <td style={{ ...TD, color: MUTED }}>{s.unit}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{s.mwk}</td>
                  <td style={{ ...TD, color: MUTED }}>{s.usd}</td>
                  <td style={TD}><QuoteBtn text={s.wa} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* LANGUAGE PAIRS */}
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "20px" }}>Language Pairs</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {langPairs.map(p => (
            <div key={p.pair} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{p.pair}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* SECTORS */}
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "20px" }}>Sectors Served</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {sectors.map(s => (
            <div key={s.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{s.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* DIPLOMATIC REFERENCE */}
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid " + ACCENT, borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Diplomatic Reference</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>The High Commission of the Republic of Mozambique, Lilongwe (February 2026) confirms that TechNexus has provided professional language services to the Mission over an extended period. The Mission commends TechNexus for its high standards of professionalism, accuracy, reliability and discretion.</p>
        </div>

        {/* TENDER CONSULTING */}
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Tender and Pre-Qualification Consulting</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "8px" }}>Stop losing contracts to paperwork errors. Fixed-price service.</p>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px", lineHeight: 1.7 }}>We complete your tender documents, pre-qualification forms, and bid responses with precision — in your language. Available in English, Portuguese, Chichewa, and Swahili.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "480px" }}>
            <thead>
              <tr>
                <th style={TH}>Service</th>
                <th style={TH}>Description</th>
                <th style={TH}>From (MWK)</th>
                <th style={TH}>Quote</th>
              </tr>
            </thead>
            <tbody>
              {tenderServices.map((s, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={{ ...TD, fontWeight: 600 }}>{s.name}</td>
                  <td style={{ ...TD, color: MUTED, fontSize: "12px" }}>{s.desc}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{s.mwk}</td>
                  <td style={TD}><QuoteBtn text={encodeURIComponent(s.name)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* LOCAL REGISTRATIONS */}
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Business Registration and Compliance Consulting</h2>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px", lineHeight: 1.7 }}>We prepare and submit business registration, licensing, and compliance documents on your behalf. Local Malawi registrations and cross-border registrations for Zambia, Mozambique, and South Africa. We work with PPDA, MRA, TPIN, MANePS, and relevant foreign registries.</p>

        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "17px", fontWeight: 700, color: TEAL, marginBottom: "16px" }}>Local Registrations — Malawi</h3>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "32px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "480px" }}>
            <thead>
              <tr>
                <th style={TH}>Service</th>
                <th style={TH}>Description</th>
                <th style={TH}>From (MWK)</th>
                <th style={TH}>Quote</th>
              </tr>
            </thead>
            <tbody>
              {localReg.map((s, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={{ ...TD, fontWeight: 600 }}>{s.name}</td>
                  <td style={{ ...TD, color: MUTED, fontSize: "12px" }}>{s.desc}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{s.mwk}</td>
                  <td style={TD}><QuoteBtn text={encodeURIComponent(s.name)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CROSS-BORDER REGISTRATIONS */}
        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "17px", fontWeight: 700, color: "#4CAF50", marginBottom: "8px" }}>Cross-Border Registrations</h3>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "16px", lineHeight: 1.7 }}>We coordinate with in-country agents in Zambia, Mozambique, and South Africa to handle registration processes remotely. Documents are prepared, translated where required, and submitted on your behalf.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "520px" }}>
            <thead>
              <tr>
                <th style={TH}>Country</th>
                <th style={TH}>Service</th>
                <th style={TH}>Description</th>
                <th style={TH}>From (MWK)</th>
                <th style={TH}>Quote</th>
              </tr>
            </thead>
            <tbody>
              {crossBorderReg.map((s, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={{ ...TD, fontWeight: 700, color: s.country === "Multi-country" ? MUTED : "var(--fl-amber)", whiteSpace: "nowrap" as const }}>{s.country}</td>
                  <td style={{ ...TD, fontWeight: 600 }}>{s.name}</td>
                  <td style={{ ...TD, color: MUTED, fontSize: "12px" }}>{s.desc}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{s.mwk}</td>
                  <td style={TD}><QuoteBtn text={encodeURIComponent(s.name)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CROSS-BORDER NOTE */}
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid #4CAF50", borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Important Notes on Cross-Border Registrations</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>Government filing fees, agent fees in the target country, and notarisation costs are charged separately at cost. We provide a full itemised quotation before any payment is required. Turnaround varies by country: Malawi 5-10 days, Zambia 10-15 days, Mozambique 15-25 days, South Africa 10-20 days. We maintain active agent relationships in all four countries.</p>
        </div>

        {/* HOW TO COMMISSION */}
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "32px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, marginBottom: "12px" }}>How to Commission</h3>
          <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, marginBottom: "20px" }}>
            Send your source document or requirements via WhatsApp or email. We confirm scope, turnaround time, and issue a quotation within 24 hours. Standard turnaround: 1-3 business days per document; 5-25 business days for registration services. Rush service available for language work. Confidentiality agreement provided on request.
          </p>
          <a href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20from%20the%20Language%20Services%20page." target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Request a Quote
          </a>
        </div>

      </div>
    </div>
  );
}
