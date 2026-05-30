"use client";
import Link from "next/link";
import { useState } from "react";

const features = [
  { title: "Compliance Certainty", body: "We connect you to MRA EIS with no gaps and no penalties. Every sale is digitally signed and submitted in real time. MRA-signed QR receipts on every transaction." },
  { title: "Business Continuity", body: "Keep your existing POS or accounting system. Our bridge connects it to EIS with no disruption to your workflow. Bridge-only or full POS — we advise you on the right fit." },
  { title: "Offline-Ready", body: "Power cuts and network drops do not stop your trading. Our system queues submissions and syncs when connectivity resumes. Built for Malawian conditions." },
  { title: "Peace of Mind", body: "Blantyre-based. Same-day response. Ongoing monitoring. MRA updates handled automatically. You trade; we keep you compliant." },
  { title: "MRA Certified", body: "TechNexus is a certified fiscal device integrator under the MRA EIS framework. Your compliance is backed by an accredited local partner." },
  { title: "Reporting & Audit Trail", body: "Full transaction history with MRA invoice numbers. Credit notes, voids, and returns tracked correctly. Audit-ready records from day one." },
];

const steps = [
  { num: "01", title: "Enquire", body: "Fill the form below. We confirm your requirements the same day." },
  { num: "02", title: "Assess", body: "We review your current system and recommend bridge-only or full POS." },
  { num: "03", title: "Register", body: "We register your POS with MRA and activate each terminal." },
  { num: "04", title: "Go Live", body: "On-site setup. First MRA-signed QR receipt printed. Staff trained." },
  { num: "05", title: "Monitor", body: "We monitor from day one. MRA updates applied automatically." },
];

const plans = [
  { name: "Bridge Only", setup: "MWK 120,000", monthly: "MWK 35,000", desc: "For businesses with an existing POS or accounting system. We connect it to MRA EIS with no hardware changes.", cta: "Enquire", wa: "Hi%2C%20I%20want%20to%20enquire%20about%20the%20Bridge%20Only%20plan", featured: false },
  { name: "Mobile POS Starter", setup: "MWK 450,000", monthly: "MWK 50,000", desc: "Ideal for small retail, food service, and market traders. Full EIS-compliant POS software on a mobile device.", cta: "Enquire", wa: "Hi%2C%20I%20want%20to%20enquire%20about%20the%20Mobile%20POS%20Starter%20plan", featured: false },
  { name: "Counter POS Business", setup: "MWK 750,000", monthly: "MWK 70,000", desc: "For shops, pharmacies, and general trade. Counter-mounted hardware with full inventory, sales, and EIS submission built in.", cta: "Enquire", wa: "Hi%2C%20I%20want%20to%20enquire%20about%20the%20Counter%20POS%20Business%20plan", featured: true },
  { name: "Retail Pro", setup: "MWK 1,250,000", monthly: "MWK 110,000", desc: "For wholesalers, multi-department stores, and high-volume retail. Multi-terminal, advanced reporting, full audit trail.", cta: "Enquire", wa: "Hi%2C%20I%20want%20to%20enquire%20about%20the%20Retail%20Pro%20plan", featured: false },
  { name: "Multi-Branch / Enterprise", setup: "From MWK 1,500,000", monthly: "MWK 150,000 - 300,000", desc: "Custom multi-branch deployment. Site visit required. Dedicated onboarding, custom integration, and priority support.", cta: "Request site visit", wa: "Hi%2C%20I%20want%20to%20request%20a%20site%20visit%20for%20a%20multi-branch%20EIS%20deployment", featured: false },
];

const faqs = [
  { q: "Do I need to buy new hardware?", a: "Not always. If you already have a POS or accounting system, the Bridge Only plan connects it to MRA EIS with no hardware changes. If you need a full POS terminal, we supply and configure it as part of the Mobile POS, Counter POS, or Retail Pro packages." },
  { q: "What happens when the internet goes down?", a: "The system queues all transactions locally and submits them to MRA when connectivity resumes. You keep trading without interruption. MRA allows a defined offline window and our system handles the sync automatically." },
  { q: "How long does MRA registration take?", a: "Bridge-only clients are typically live within 1 to 3 business days. Counter and Retail POS installations take 3 to 5 days depending on the number of terminals. We handle the MRA registration and device activation on your behalf." },
  { q: "Can I keep my existing POS or accounting software?", a: "Yes. The Bridge Only plan is designed exactly for this. We integrate with common systems used in Malawi including Pastel, QuickBooks, and custom setups. We assess your system before recommending the right plan." },
  { q: "What does the monthly fee cover?", a: "Ongoing monitoring, same-day support, and all MRA update handling. When MRA releases firmware or compliance updates, we apply them at no extra charge. The monthly fee is fixed with no hidden integration costs." },
  { q: "What if I have multiple branches?", a: "The Multi-Branch plan covers deployments across multiple sites. We do a site visit, assess each location, and provide a custom quote. Each branch gets its own MRA-registered terminals and is monitored centrally." },
];

const G = "#2ecc71";
const DIM = "#1a7a43";
const BG = "#0a0f0d";
const SURF = "#111a14";
const SURF2 = "#192119";
const BORDER = "#1f2e22";
const TEXT = "#e8f0e9";
const MUTED = "#7a9480";
const TEXTDIM = "#4a6050";

export default function EISPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bizName, setBizName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("");
  const [notes, setNotes] = useState("");

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    let t = "EIS Enquiry";
    if (bizName) t += "%0ABusiness: " + encodeURIComponent(bizName);
    if (contactName) t += "%0AContact: " + encodeURIComponent(contactName);
    if (phone) t += "%0APhone: " + encodeURIComponent(phone);
    if (plan) t += "%0APlan: " + encodeURIComponent(plan);
    if (notes) t += "%0ANotes: " + encodeURIComponent(notes);
    window.open("https://wa.me/265889941700?text=" + t, "_blank");
  }

  const sec: React.CSSProperties = { padding: "96px 32px", background: BG };
  const con: React.CSSProperties = { maxWidth: "1120px", margin: "0 auto" };
  const label: React.CSSProperties = { fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: G, marginBottom: "16px" };
  const secTitle: React.CSSProperties = { fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: "640px" };
  const inp: React.CSSProperties = { width: "100%", padding: "10px 14px", background: SURF2, border: "1px solid " + BORDER, borderRadius: "6px", color: TEXT, fontSize: "14px", outline: "none" };

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: "var(--font-body)" }}>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "120px 32px 80px", background: BG, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(46,204,113,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", background: SURF, border: "1px solid " + BORDER, borderRadius: "999px", fontSize: "13px", color: MUTED, marginBottom: "10px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: G, display: "inline-block" }} />
          MRA Electronic Invoicing System
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", background: SURF, border: "1px solid " + BORDER, borderRadius: "999px", fontSize: "12px", color: MUTED, marginBottom: "32px", opacity: 0.85 }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: G, display: "inline-block" }} />
          MRA Certified EIS Integrator &mdash; <Link href="/credentials" style={{ color: G, textDecoration: "underline", textUnderlineOffset: "3px" }}>View credentials</Link>
        </div>
        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "24px" }}>
          EIS Compliance.<br />
          <span style={{ color: G }}>Fast. Reliable. Local.</span>
        </h1>
        <p style={{ fontSize: "18px", color: MUTED, maxWidth: "560px", lineHeight: 1.7, marginBottom: "40px", fontWeight: 300 }}>
          Connect your VAT-registered business to MRA EIS within 72 hours.
          Keep your current system or deploy a full POS.
          Local Blantyre support on every plan.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20want%20to%20get%20EIS%20compliant" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: G, color: "#000", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "8px", textDecoration: "none" }}>
            Get compliant - 72 hrs
          </a>
          <a href="#pricing" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: G, fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "8px", border: "1px solid " + DIM, textDecoration: "none" }}>
            View pricing
          </a>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: SURF, borderTop: "1px solid " + BORDER, borderBottom: "1px solid " + BORDER, display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {[["72h","Typical onboarding time"],["MWK 0","Hidden costs"],["Same day","Support response"],["Local","Blantyre-based team"]].map(([v,l]) => (
          <div key={l} style={{ padding: "32px 24px", textAlign: "center", borderRight: "1px solid " + BORDER }}>
            <div style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(20px,3vw,32px)", fontWeight: 700, color: G, marginBottom: "6px" }}>{v}</div>
            <div style={{ fontSize: "12px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <section style={sec}>
        <div style={con}>
          <div style={label}>Why TechNexus</div>
          <h2 style={secTitle}>Built for Malawian businesses</h2>
          <p style={{ fontSize: "16px", color: MUTED, maxWidth: "560px", marginTop: "16px", fontWeight: 300 }}>
            We are MRA-certified and we have done this for businesses like yours. No offshore support queues. No guesswork.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: BORDER, marginTop: "64px", border: "1px solid " + BORDER, borderRadius: "12px", overflow: "hidden" }}>
            {features.map(f => (
              <div key={f.title} style={{ background: SURF, padding: "40px 32px" }}>
                <div style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>{f.title}</div>
                <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, fontWeight: 300 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ ...sec, background: SURF }}>
        <div style={con}>
          <div style={label}>How it works</div>
          <h2 style={secTitle}>From enquiry to compliant in five steps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1px", background: BORDER, marginTop: "64px", border: "1px solid " + BORDER, borderRadius: "12px", overflow: "hidden" }}>
            {steps.map(s => (
              <div key={s.num} style={{ background: BG, padding: "32px 24px" }}>
                <div style={{ fontFamily: "var(--font-syne)", fontSize: "28px", fontWeight: 800, color: DIM, marginBottom: "12px" }}>{s.num}</div>
                <div style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>{s.title}</div>
                <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6, fontWeight: 300 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={sec}>
        <div style={con}>
          <div style={label}>Pricing</div>
          <h2 style={secTitle}>No hidden costs</h2>
          <p style={{ fontSize: "14px", color: MUTED, marginTop: "12px" }}>Setup is once-off. Monthly fee covers monitoring, support, and all MRA update handling.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1px", background: BORDER, marginTop: "48px", border: "1px solid " + BORDER, borderRadius: "12px", overflow: "hidden" }}>
            {plans.map(p => (
              <div key={p.name} style={{ background: p.featured ? SURF2 : SURF, padding: "32px 24px", display: "flex", flexDirection: "column", position: "relative" }}>
                {p.featured && <div style={{ position: "absolute", top: "16px", right: "16px", background: G, color: "#000", fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "999px", letterSpacing: "0.06em" }}>Popular</div>}
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, marginBottom: "16px" }}>{p.name}</div>
                <div style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(18px,2vw,24px)", color: G, marginBottom: "4px" }}>{p.setup}</div>
                <div style={{ fontSize: "11px", color: TEXTDIM, marginBottom: "12px" }}>one-off setup</div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: TEXT, marginBottom: "4px" }}>{p.monthly} <span style={{ fontSize: "12px", color: TEXTDIM, fontWeight: 300 }}>/ month</span></div>
                <div style={{ fontSize: "11px", color: TEXTDIM, marginBottom: "20px" }}>monthly support</div>
                <p style={{ fontSize: "12px", color: MUTED, lineHeight: 1.6, fontWeight: 300, flexGrow: 1, marginBottom: "24px" }}>{p.desc}</p>
                <a href={"https://wa.me/265889941700?text=" + p.wa} target="_blank" rel="noopener" style={{ display: "block", textAlign: "center", padding: "10px 16px", borderRadius: "6px", fontSize: "13px", fontWeight: 600, textDecoration: "none", border: "1px solid " + DIM, color: G }}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: BORDER, marginTop: "1px", border: "1px solid " + BORDER, borderRadius: "0 0 12px 12px", overflow: "hidden" }}>
            {[["First 20 clients","First month of support free on any package."],["Annual prepay","10% discount on monthly fees when paid annually."],["72-hour onboarding","Bridge-only clients live within 1 to 3 business days."],["No lock-in surprises","Clear pricing from day one. No hidden integration fees."]].map(([t,b]) => (
              <div key={t} style={{ background: SURF2, padding: "24px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>{t}</div>
                <p style={{ fontSize: "12px", color: MUTED, lineHeight: 1.6 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ ...sec, background: SURF }}>
        <div style={con}>
          <div style={label}>FAQ</div>
          <h2 style={secTitle}>Common questions</h2>
          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "1px", background: BORDER, border: "1px solid " + BORDER, borderRadius: "12px", overflow: "hidden" }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: openFaq === i ? SURF2 : BG }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", padding: "20px 24px", fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 600, color: "#fff", cursor: "pointer", background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}>
                  {f.q}
                  <span style={{ fontSize: "20px", fontWeight: 300, color: G, marginLeft: "16px", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && (
                  <p style={{ padding: "0 24px 20px", fontSize: "14px", color: MUTED, lineHeight: 1.7, fontWeight: 300, maxWidth: "720px" }}>{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={sec}>
        <div style={con}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
            <div>
              <div style={label}>Get started</div>
              <h2 style={secTitle}>Talk to us today</h2>
              <p style={{ fontSize: "16px", color: MUTED, marginTop: "16px", fontWeight: 300 }}>
                We confirm your requirements the same day you reach out. No obligation. No boilerplate sales calls.
              </p>
              <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
                {[["WhatsApp","+265 889 941 700"],["Email","technexus_mw@proton.me"],["Location","Blantyre, Malawi"]].map(([lbl,val]) => (
                  <div key={lbl} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: SURF2, border: "1px solid " + BORDER, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: "11px", color: TEXTDIM, textTransform: "uppercase", letterSpacing: "0.08em" }}>{lbl}</div>
                      <div style={{ fontSize: "14px", color: TEXT, fontWeight: 500 }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form onSubmit={submitForm} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: MUTED, display: "block", marginBottom: "6px" }}>Business name</label>
                <input type="text" value={bizName} onChange={e => setBizName(e.target.value)} placeholder="Your business name" required style={inp} />
              </div>
              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: MUTED, display: "block", marginBottom: "6px" }}>Contact person</label>
                <input type="text" value={contactName} onChange={e => setContactName(e.target.value)} placeholder="Your name" required style={inp} />
              </div>
              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: MUTED, display: "block", marginBottom: "6px" }}>Phone / WhatsApp</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+265 ..." required style={inp} />
              </div>
              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: MUTED, display: "block", marginBottom: "6px" }}>Plan of interest</label>
                <select value={plan} onChange={e => setPlan(e.target.value)} style={{ ...inp }}>
                  <option value="">Select a plan</option>
                  <option>Bridge Only</option>
                  <option>Mobile POS Starter</option>
                  <option>Counter POS Business</option>
                  <option>Retail Pro</option>
                  <option>Multi-Branch / Enterprise</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: MUTED, display: "block", marginBottom: "6px" }}>Notes</label>
                <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Brief description of your current setup (optional)" rows={3} style={{ ...inp, resize: "vertical" }} />
              </div>
              <button type="submit" style={{ background: G, color: "#000", fontWeight: 700, fontSize: "14px", padding: "12px 24px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
                Send enquiry via WhatsApp
              </button>
              <p style={{ fontSize: "11px", color: TEXTDIM, lineHeight: 1.6, textAlign: "center" }}>
                Your details are used only to respond to this enquiry. We do not share your information with third parties.
                See our <Link href="/privacy" style={{ color: MUTED, textDecoration: "underline" }}>Privacy Policy</Link>.
              </p>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
