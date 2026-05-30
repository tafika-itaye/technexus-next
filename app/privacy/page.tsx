const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const ACCENT = "var(--fl-blue)";

const s: React.CSSProperties = { fontSize: "14px", color: MUTED, lineHeight: 1.8, marginBottom: "12px" };
const h2s: React.CSSProperties = { fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, margin: "36px 0 12px", paddingTop: "8px", borderTop: "1px solid var(--fl-neutral-8)" };
const li: React.CSSProperties = { fontSize: "14px", color: MUTED, lineHeight: 1.8, marginBottom: "6px" };

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--fl-neutral-2)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 40px" }}>
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "48px" }}>

          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, color: TEXT, letterSpacing: "-0.02em", marginBottom: "8px" }}>Privacy Policy</h1>
          <p style={{ fontSize: "13px", color: MUTED, marginBottom: "24px" }}>Effective date: 1 April 2026 · Last updated: April 2026 · Version 1.0</p>

          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "32px" }}>
            {["GDPR-Aware","HIPAA-Aware (Language Services)","No Data Sold","Analytics: Anonymised IP"].map(b => (
              <span key={b} style={{ background: "rgba(0,120,212,0.1)", border: "1px solid rgba(0,120,212,0.3)", borderRadius: "999px", padding: "4px 14px", fontSize: "12px", color: ACCENT, fontWeight: 600 }}>{b}</span>
            ))}
          </div>

          <h2 style={h2s} id="s1">1. Who We Are</h2>
          <p style={s}>TechNexus ("we", "us", "our") is a business registered in the Republic of Malawi (BRN: A6SNWQY). We supply ICT hardware, custom PC assembly, software development services, language and translation services, and medical equipment to businesses, government entities, and development partners across Southern and East Africa.</p>
          <p style={s}>This Privacy Policy explains how TechNexus collects, uses, stores, and protects personal data when you visit www.technexusmw.com or submit an enquiry to us.</p>

          <h2 style={h2s} id="s2">2. What Data We Collect</h2>
          <p style={s}>We collect only the minimum data necessary to respond to your enquiry or deliver our services:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Enquiry form data:</strong> Name, organisation name, email address or WhatsApp number, service selected, and message content — submitted voluntarily via our contact forms.</li>
            <li style={li}><strong>Language Services data:</strong> For translation, transcription, or interpretation projects, we may handle source documents that contain personal or sensitive information belonging to your organisation or its beneficiaries.</li>
            <li style={li}><strong>Analytics data:</strong> Anonymous usage data via Google Analytics (GA4) with IP anonymisation enabled. No personally identifiable information is sent to Google Analytics.</li>
            <li style={li}><strong>Technical data:</strong> Standard server/CDN access logs retained by our infrastructure provider (GitHub Pages / Cloudflare) — not collected or stored by TechNexus directly.</li>
          </ul>
          <p style={s}>We do not use cookies for tracking, advertising, or profiling. We do not run any advertising networks or retargeting systems.</p>

          <h2 style={h2s} id="s3">3. How We Use Your Data</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>To respond to your enquiry via WhatsApp or email.</li>
            <li style={li}>To prepare quotations, tender submissions, or service proposals you have requested.</li>
            <li style={li}>To deliver contracted language services, including translation and transcription.</li>
            <li style={li}>To understand aggregate site usage via anonymised analytics and improve our website.</li>
            <li style={li}>To comply with legal obligations under Malawian law.</li>
          </ul>
          <p style={s}>We will never use your data for unsolicited marketing, sell it to third parties, or use it for automated profiling or decision-making.</p>

          <h2 style={h2s} id="s4">4. Legal Basis for Processing (GDPR)</h2>
          <p style={s}>If you are located in the EU, EEA, or UK, we process your personal data on the following legal bases:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Legitimate interests (Art. 6(1)(f)):</strong> Responding to business enquiries you have initiated.</li>
            <li style={li}><strong>Contract performance (Art. 6(1)(b)):</strong> Processing data necessary to deliver services you have contracted with us.</li>
            <li style={li}><strong>Legal obligation (Art. 6(1)(c)):</strong> Compliance with applicable Malawian financial and tax law.</li>
            <li style={li}><strong>Consent (Art. 6(1)(a)):</strong> For analytics cookies, where consent has been obtained.</li>
          </ul>

          <h2 style={h2s} id="s5">5. Cookies and Analytics</h2>
          <p style={s}>This website uses Google Analytics 4 (GA4) with IP anonymisation enabled. No advertising features or remarketing audiences are enabled. You may opt out at any time via the Google Analytics Opt-out Browser Add-on. We set no other cookies, tracking pixels, or fingerprinting.</p>

          <h2 style={h2s} id="s6">6. Language Services and HIPAA-Aware Handling</h2>
          <p style={s}>Some projects may involve documents or recordings containing protected health information (PHI), patient records, legal documents, or other sensitive personal data. For such projects we apply the following safeguards:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>Source materials are handled only by the assigned language professional(s) bound by confidentiality.</li>
            <li style={li}>Files are transferred via secure, encrypted channels.</li>
            <li style={li}>Completed deliverables and source materials are deleted within 30 days of project completion unless the client requests otherwise in writing.</li>
            <li style={li}>We do not retain, copy, or sub-license client content beyond the commissioned project.</li>
            <li style={li}>Clients in regulated industries are encouraged to execute a Data Processing Agreement (DPA) before project commencement.</li>
          </ul>
          <p style={{ ...s, fontStyle: "italic" }}>Note: TechNexus is based in Malawi and is not a US-based Covered Entity or Business Associate under HIPAA. Our "HIPAA-aware" designation means we apply equivalent data handling standards as a matter of professional practice.</p>

          <h2 style={h2s} id="s7">7. Data Sharing and Third Parties</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>WhatsApp (Meta Platforms):</strong> Enquiry submissions are sent to our business WhatsApp number and processed under WhatsApp's own privacy policy. You initiate this transfer voluntarily.</li>
            <li style={li}><strong>Google Analytics (Google LLC):</strong> Anonymised usage data as described in Section 5.</li>
            <li style={li}><strong>GitHub / Cloudflare:</strong> Our website infrastructure providers. They may process standard access logs. We do not pass enquiry data to them.</li>
          </ul>
          <p style={s}>We do not share personal data with any other third parties, advertisers, or data brokers.</p>

          <h2 style={h2s} id="s8">8. Data Retention</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Enquiry data:</strong> Retained in our WhatsApp business account for up to 2 years, then deleted.</li>
            <li style={li}><strong>Language Services project files:</strong> Deleted within 30 days of project completion unless otherwise agreed in writing.</li>
            <li style={li}><strong>Analytics data:</strong> Google Analytics data retention is set to 14 months.</li>
            <li style={li}><strong>Infrastructure logs:</strong> Managed by GitHub/Cloudflare per their own retention policies (typically 30 days).</li>
          </ul>

          <h2 style={h2s} id="s9">9. Your Rights</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Right of access:</strong> Request a copy of the personal data we hold about you.</li>
            <li style={li}><strong>Right to rectification:</strong> Request correction of inaccurate data.</li>
            <li style={li}><strong>Right to erasure:</strong> Request deletion of your data where no legal obligation requires retention.</li>
            <li style={li}><strong>Right to restrict processing:</strong> Request that we limit how we use your data.</li>
            <li style={li}><strong>Right to data portability:</strong> Receive your data in a structured, machine-readable format.</li>
            <li style={li}><strong>Right to object:</strong> Object to processing based on legitimate interests.</li>
            <li style={li}><strong>Right to withdraw consent:</strong> Where processing is based on consent, withdraw it at any time.</li>
          </ul>
          <p style={s}>To exercise any of these rights, contact us using the details in Section 14. We will respond within 30 days at no charge.</p>

          <h2 style={h2s} id="s10">10. International Transfers</h2>
          <p style={s}>TechNexus operates from Malawi. Data submitted via our enquiry forms is received and processed in Malawi. When you use Google Analytics or WhatsApp, your data may be transferred to servers in the United States or other countries, governed by the privacy policies of Google and Meta respectively.</p>

          <h2 style={h2s} id="s11">11. Security</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>HTTPS enforced for all connections with HSTS preloading.</li>
            <li style={li}>Content Security Policy (CSP) headers to mitigate cross-site scripting risks.</li>
            <li style={li}>X-Frame-Options set to DENY to prevent clickjacking.</li>
            <li style={li}>No server-side database — this website is a static site with no back-end data store.</li>
          </ul>
          <p style={s}>No method of transmission over the internet is 100% secure. We maintain commercially reasonable safeguards.</p>

          <h2 style={h2s} id="s12">12. Children's Privacy</h2>
          <p style={s}>Our website and services are directed exclusively at businesses and professionals. We do not knowingly collect personal data from anyone under the age of 18.</p>

          <h2 style={h2s} id="s13">13. Changes to This Policy</h2>
          <p style={s}>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of the website after changes constitutes acceptance of the updated policy.</p>

          <h2 style={h2s} id="s14">14. Contact Us</h2>
          <p style={s}>For any privacy-related questions, data subject requests, or to request a Data Processing Agreement:</p>
          <div style={{ background: "var(--fl-neutral-2)", border: "1px solid " + BORDER, borderRadius: "8px", padding: "20px", fontSize: "14px", color: MUTED, lineHeight: 2 }}>
            <strong style={{ color: TEXT }}>TechNexus</strong><br />
            Blantyre, Malawi · BRN: A6SNWQY<br />
            <a href="tel:+265889941700" style={{ color: ACCENT }}>+265 889 941 700</a> · <a href="tel:+265995753326" style={{ color: ACCENT }}>+265 995 753 326</a><br />
            <a href="mailto:info@technexusmw.com" style={{ color: ACCENT }}>info@technexusmw.com</a><br />
            <a href="https://wa.me/265889941700" target="_blank" rel="noopener" style={{ color: ACCENT }}>WhatsApp</a>
          </div>
          <p style={{ ...s, marginTop: "20px", fontSize: "12px" }}>If you are located in the EU/EEA and believe we have not addressed your concern, you have the right to lodge a complaint with your local data protection supervisory authority.</p>

        </div>
      </div>
    </div>
  );
}
