const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const ACCENT = "var(--fl-blue)";

const s: React.CSSProperties = { fontSize: "14px", color: MUTED, lineHeight: 1.8, marginBottom: "12px" };
const h2s: React.CSSProperties = { fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, margin: "36px 0 12px", paddingTop: "8px", borderTop: "1px solid var(--fl-neutral-8)" };
const li: React.CSSProperties = { fontSize: "14px", color: MUTED, lineHeight: 1.8, marginBottom: "6px" };

export default function TermsPage() {
  return (
    <div style={{ background: "var(--fl-neutral-2)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 40px" }}>
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "48px" }}>

          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, color: TEXT, letterSpacing: "-0.02em", marginBottom: "8px" }}>Terms of Service</h1>
          <p style={{ fontSize: "13px", color: MUTED, marginBottom: "32px" }}>Effective date: 1 April 2026 · Last updated: April 2026 · Version 1.0</p>

          <h2 style={h2s} id="s1">1. Definitions</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>"TechNexus"</strong>, "we", "us", "our" refers to TechNexus, registered in the Republic of Malawi (BRN: A6SNWQY), Blantyre.</li>
            <li style={li}><strong>"Website"</strong> refers to www.technexusmw.com and all pages and subpaths thereof.</li>
            <li style={li}><strong>"User"</strong>, "you", "your" refers to any individual or organisation accessing the Website or engaging TechNexus for goods or services.</li>
            <li style={li}><strong>"Services"</strong> refers to all goods and services offered by TechNexus, including ICT hardware supply, custom PC assembly, software development, language and translation services, and medical equipment supply.</li>
            <li style={li}><strong>"Quotation"</strong> refers to any written price estimate or proposal provided by TechNexus.</li>
          </ul>

          <h2 style={h2s} id="s2">2. Acceptance of Terms</h2>
          <p style={s}>By accessing or using this Website, submitting an enquiry, or placing an order with TechNexus, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use this Website or engage our services.</p>

          <h2 style={h2s} id="s3">3. Use of This Website</h2>
          <p style={s}>You agree to use this Website only for lawful purposes. You must not:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>Use automated tools to scrape or harvest content without written permission.</li>
            <li style={li}>Attempt to gain unauthorised access to any part of the Website or its infrastructure.</li>
            <li style={li}>Transmit harmful, offensive, or misleading content through any enquiry form.</li>
            <li style={li}>Misrepresent your identity or authority when submitting procurement enquiries.</li>
          </ul>

          <h2 style={h2s} id="s4">4. Products and Services</h2>
          <p style={s}>All product listings, service descriptions, and catalogues on this Website are for informational purposes only and do not constitute a binding offer. Stock availability, specifications, and service scope are subject to change without notice.</p>
          <p style={s}>TechNexus sources products from verified suppliers across Malawi, China, South Africa, and the UAE. For language services, scope, deliverable format, and turnaround time will be agreed in writing prior to commencement.</p>

          <h2 style={h2s} id="s5">5. Quotations and Pricing</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>All prices shown on this Website are indicative only and subject to change without notice.</li>
            <li style={li}>Prices exclude VAT at 17.5% unless explicitly stated otherwise.</li>
            <li style={li}>Where USD prices are shown, the MWK equivalent is calculated at the prevailing exchange rate at the time of invoicing.</li>
            <li style={li}>A formal, binding quotation is valid for 30 days from the date of issue unless stated otherwise.</li>
            <li style={li}>TechNexus reserves the right to revise a quotation if supplier prices, exchange rates, or import duties change materially between quotation and order confirmation.</li>
          </ul>

          <h2 style={h2s} id="s6">6. Orders, Payment and Delivery</h2>
          <p style={s}>An order is only confirmed upon receipt of a written purchase order or signed agreement and, where required, an advance payment.</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Payment terms:</strong> As agreed in the quotation. Standard terms for new clients are 50% deposit on order confirmation, balance on delivery.</li>
            <li style={li}><strong>Delivery:</strong> Risk in goods passes to the buyer upon delivery to the agreed delivery address. TechNexus is not liable for delays caused by customs, third-party logistics, or circumstances beyond our control.</li>
            <li style={li}><strong>Cancellations:</strong> Orders for goods sourced specifically for the client cannot be cancelled once a supplier purchase order has been placed. Standard stock items may be cancelled with 7 days written notice prior to dispatch.</li>
          </ul>

          <h2 style={h2s} id="s7">7. Intellectual Property</h2>
          <p style={s}>All content on this Website is the property of TechNexus or its licensors and is protected by applicable copyright and intellectual property law. You may not reproduce, distribute, or republish any content without prior written consent, except for personal or internal business reference use or sharing a link to this Website.</p>
          <p style={s}>Product logos and brand marks displayed remain the property of their respective owners and are used for identification purposes only.</p>

          <h2 style={h2s} id="s8">8. Limitation of Liability</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>TechNexus provides this Website and its content "as is" without warranties of any kind.</li>
            <li style={li}>TechNexus is not liable for any indirect, incidental, or consequential loss arising from your use of this Website or reliance on its content.</li>
            <li style={li}>TechNexus's total liability in connection with any order shall not exceed the value of that order.</li>
            <li style={li}>TechNexus is not liable for any loss arising from supplier delays, product discontinuation, customs detention, or force majeure events.</li>
          </ul>

          <h2 style={h2s} id="s9">9. Third-Party Links and Services</h2>
          <p style={s}>This Website contains links to third-party services including WhatsApp (Meta Platforms) and references to MANePS and PPDA. TechNexus is not responsible for the content, privacy practices, or availability of any third-party website or service.</p>

          <h2 style={h2s} id="s10">10. Privacy</h2>
          <p style={s}>Our collection and use of personal data is governed by our Privacy Policy, which forms part of these Terms of Service.</p>

          <h2 style={h2s} id="s11">11. Governing Law and Disputes</h2>
          <p style={s}>These Terms are governed by the laws of the Republic of Malawi. Any dispute shall be subject to the exclusive jurisdiction of the courts of Malawi. Where both parties agree, disputes may first be referred to mediation before formal legal proceedings.</p>

          <h2 style={h2s} id="s12">12. Changes to These Terms</h2>
          <p style={s}>TechNexus reserves the right to update these Terms at any time. Changes will be posted to this page with an updated date. Continued use of the Website after changes are posted constitutes acceptance of the revised Terms.</p>

          <h2 style={h2s} id="s13">13. Contact</h2>
          <div style={{ background: "var(--fl-neutral-2)", border: "1px solid " + BORDER, borderRadius: "8px", padding: "20px", fontSize: "14px", color: MUTED, lineHeight: 2 }}>
            <strong style={{ color: TEXT }}>TechNexus</strong><br />
            Blantyre, Malawi · BRN: A6SNWQY<br />
            <a href="tel:+265889941700" style={{ color: ACCENT }}>+265 889 941 700</a> · <a href="tel:+265995753326" style={{ color: ACCENT }}>+265 995 753 326</a><br />
            <a href="mailto:info@technexusmw.com" style={{ color: ACCENT }}>info@technexusmw.com</a><br />
            <a href="https://wa.me/265889941700" target="_blank" rel="noopener" style={{ color: ACCENT }}>WhatsApp</a>
          </div>

        </div>
      </div>
    </div>
  );
}
