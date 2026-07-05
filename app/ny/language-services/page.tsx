import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TechNexus Scripts — Ntchito za Zinenero & Uphungu",
  description: "TechNexus Scripts — kumasulira, kulemba, uphungu wa ma tender ndi kulembetsa bizinesi. Blantyre, Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/ny/language-services",
    languages: {
      "en": "https://www.technexusmw.com/language-services",
      "pt": "https://www.technexusmw.com/pt/language-services",
      "ny": "https://www.technexusmw.com/ny/language-services",
    },
  },
};

const langServices = [
  { name: "Kumasulira Madokumento", langs: "EN↔PT, EN↔NY, EN↔SW", unit: "pa tsamba (mawu 250)", mwk: "MK 17.340", usd: "$10", wa: "Kumasulira%20Madokumento%0AMtengo%3A%20%2410" },
  { name: "Kumasulira Kovomerezeka", langs: "EN↔PT, EN↔NY", unit: "pa tsamba (mawu 250)", mwk: "MK 26.010", usd: "$15", wa: "Kumasulira%20Kovomerezeka%0AMtengo%3A%20%2415" },
  { name: "Kulemba Mawu Ochokera pa Audio", langs: "EN, PT, NY, SW", unit: "pa ola ya audio", mwk: "MK 86.700", usd: "$50", wa: "Kulemba%20Audio%0AMtengo%3A%20%2450" },
  { name: "Kulemba + Kumasulira", langs: "EN↔PT, EN↔NY", unit: "pa ola ya audio", mwk: "MK 138.720", usd: "$80", wa: "Kulemba%20Ndi%20Kumasulira%0AMtengo%3A%20%2480" },
  { name: "Subtitulo / Malembo a Kanema", langs: "EN, PT, NY, SW", unit: "pa mphindi ya video", mwk: "MK 8.670", usd: "$5", wa: "Subtitulo%0AMtengo%3A%20%245" },
  { name: "Kutanthauzira Kamodzi Kamodzi", langs: "EN↔PT, EN↔NY", unit: "pa ola", mwk: "MK 121.380", usd: "$70", wa: "Kutanthauzira%20Kamodzi%0AMtengo%3A%20%2470" },
  { name: "Kutanthauzira pa Msonkhano", langs: "EN↔PT, EN↔NY", unit: "pa hafu ya tsiku", mwk: "MK 346.800", usd: "$200", wa: "Kutanthauzira%20Msonkhano%0AMtengo%3A%20%24200" },
  { name: "Maphunziro a Chilankhulo", langs: "EN, PT, NY, SW", unit: "pa ola (gulu)", mwk: "MK 69.360", usd: "$40", wa: "Maphunziro%20Chilankhulo%0AMtengo%3A%20%2440" },
  { name: "Kuwerenga ndi Kukonza", langs: "EN, PT", unit: "pa tsamba", mwk: "MK 8.670", usd: "$5", wa: "Kuwerenga%20Kukonza%0AMtengo%3A%20%245" },
  { name: "Kumasulira Website / App", langs: "EN↔PT, EN↔NY", unit: "mtengo wosankhanidwa", mwk: "kuyambira MK 346.800", usd: "kuyambira $200", wa: "Kumasulira%20Website%0AMtengo%3A%20kuyambira%20%24200" },
];

const tenderServices = [
  { name: "Kulembetsa Koyamba kwa Pre-Qualification", desc: "Mafomulo a kulembetsa ogulitsa, mawonekedwe a kampani, madokumento a kutsatira malamulo", mwk: "MK 100.000" },
  { name: "Kuyankha Tender Wokhonsa", desc: "Ma tender a mtengo, RFQ, madokumento osavuta a mapulo", mwk: "MK 200.000" },
  { name: "Kuyankha Tender Wovuta", desc: "Mapulo akuluakulu, mapulo azaukadaulo ndi azachuma, RFP", mwk: "MK 450.000" },
  { name: "Kuwunika kwa Kutsatira Malamulo", desc: "Kuwunika madokumento womaliza kuti apeze zolakwika, mafunde opanda, zosoweka", mwk: "MK 75.000" },
  { name: "Kumasulira Madokumento a Tender", desc: "Kumasulira madokumento a tender: Chingerezi, Chiputukezi, Chichewa, Kiswahili", mwk: "MK 7.000/tsamba" },
];

const localReg = [
  { name: "Kulembetsa MSME / Dzina la Bizinesi", desc: "Kulembetsa dzina la bizinesi kapena MSME ndi MBRS", mwk: "MK 50.000" },
  { name: "Kukhazikitsa Kampani", desc: "Kulembetsa Limited Company ndi MBRS. Memorandum, ma statute, kugawana ma share", mwk: "MK 150.000" },
  { name: "Kulembetsa TPIN", desc: "Nambala ya msonkho ndi MRA. Yofunikira kwa kutsatira malamulo a msonkho ndi procurement", mwk: "MK 30.000" },
  { name: "Kulembetsa VAT ndi MRA", desc: "Kulembetsa VAT kwa makampani opitirira malire a MRA", mwk: "MK 50.000" },
  { name: "Kulembetsa Ogulitsa PPDA", desc: "Kulembetsa ngati ogulitsa pa portal ya PPDA", mwk: "MK 80.000" },
  { name: "Kulembetsa MANePS", desc: "Njira ya Malawi ya Procurement ya Magetsi — yofunikira pa ma tender a boma", mwk: "MK 80.000" },
  { name: "Layisensi ya TEVETA / Gawo", desc: "Kulembetsa ndi TEVETA kapena bungwe lina la gawo", mwk: "MK 100.000" },
  { name: "Malipoti a Chaka ndi Kuwunika Kutsatira", desc: "Kukonzekera ndi kutumiza malipoti a chaka, kuwunika kutsatira malamulo pa ma register onse", mwk: "MK 60.000" },
];

const crossBorderReg = [
  { country: "Zambia", name: "Kulembetsa PACRA", desc: "Patents and Companies Registration Agency — kufufuza, kusunga ndi kulembetsa dzina la kampani", mwk: "MK 200.000" },
  { country: "Zambia", name: "TPIN / Kulembetsa Msonkho ZRA", desc: "Kulembetsa msonkho ndi ZRA kuti mugwire ntchito ku Zambia", mwk: "MK 100.000" },
  { country: "Mozambique", name: "Kulembetsa CPPME / NUIT", desc: "Kulembetsa bizinesi ku CPPME ndi nambala ya msonkho (NUIT). Kuphatikiza kukonzekera madokumento mu Chiputukezi", mwk: "MK 250.000" },
  { country: "Mozambique", name: "Layisensi ya Bizinesi", desc: "Layisensi ya bizinesi ya mzinda. Yofunikira kwa ntchito zamlingo ku Mozambique", mwk: "MK 150.000" },
  { country: "South Africa", name: "Kulembetsa CIPC", desc: "Kulembetsa ndi Companies and Intellectual Property Commission. Private company (Pty Ltd) kapena NPC", mwk: "MK 300.000" },
  { country: "South Africa", name: "Nambala ya Msonkho SARS", desc: "Kulembetsa ndi SARS kwa msonkho wa ndalama ndi VAT", mwk: "MK 120.000" },
  { country: "Maiko ambiri", name: "Phukusi Lonse la Kulembetsa", desc: "Kulembetsa kampani, nambala ya msonkho ndi layisensi ya ntchito m'dziko limodzi. Kuphatikiza kumasulira madokumento ndi kulumikizana ndi ma agent", mwk: "MK 400.000" },
];

const langPairs = [
  { pair: "Chingerezi ndi Chiputukezi", body: "Madokumento, ma kontrakiti, makalata, zoyimba za zaumoyo, zamilandu. Makasitomala a zadiplomasiya ndi mabungwe." },
  { pair: "Chingerezi ndi Chichewa", body: "Zaumoyo za khomo, mafalidwe a boma, ziphunzitso, madokumento a ntchito ya bwalo ya ma NGO." },
  { pair: "Chingerezi ndi Kiswahili", body: "Malonda a mipaka, mafalidwe a ma NGO a Africa Wschodnia, midia ndi kufalitsa." },
  { pair: "Chiputukezi ndi Chichewa", body: "Njira ya Malawi-Mozambique: madokumento a malire, mgwirizano wa malonda, zinthu za konsuleti." },
];

const sectors = [
  { title: "Mabungwe a Zadiplomasiya", body: "Makalata a konsuleti, malembo a zadiplomasiya, madokumento a viza, zinthu za protocol. Chinsinsi chitsimikizirika." },
  { title: "Zaumoyo", body: "Zolemba za odwala, madokumento a mayeso akliniki, mawunikiro a zipangizo zaumoyo. Kutsata HIPAA." },
  { title: "Zamalandu ndi Kutsatira Malamulo", body: "Ma kontrakiti, malumbiro, madokumento a koweruza, milapu ya kutsatira. Kumasulira kovomerezeka kulipo." },
  { title: "Bizinesi ndi ma NGO", body: "Malipoti a chaka, ndondomeko ya HR, madokumento a ntchito, malipoti a opatsa ndalama, zinthu za bungwe." },
  { title: "Procurement ndi Ma Tender", body: "Phukusi la pre-qualification, mayankho a ma tender, madokumento RFQ, kuwunika kutsatira. Ntchito ya mtengo wokhazikika." },
  { title: "Malonda a Mipaka", body: "Kulembetsa kampani, kutsatira msonkho, layisensi za ntchito ku Malawi, Zambia, Mozambique ndi South Africa." },
  { title: "Midia ndi Kufalitsa", body: "Subtitulo ya mafilimu, madokumento, makanema a maphunziro ndi zinthu za e-learning." },
  { title: "Maphunziro", body: "Ziphunzitso, kumasulira mabuku, mawunikiro a maphunziro, mayeso." },
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

const WA_BASE = "https://wa.me/265889941700?text=Moni%20TechNexus%2C%20ndikufuna%20quotation%20ya%3A%0A";

function QuoteBtn({ text }: { text: string }) {
  return (
    <a href={WA_BASE + text} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" as const }}>
      Pemphani
    </a>
  );
}

export default function NyLanguageServicesPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      <div style={{ position: "relative", padding: "64px 40px 48px", textAlign: "center", backgroundImage: "url(/index_main/language_services_hero-1200.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative" }}>
          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
            TechNexus Scripts — Ntchito za Zinenero &amp; Uphungu
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", maxWidth: "680px", margin: "0 auto 20px", lineHeight: 1.7 }}>
            Kumasulira, kulemba, subtitulo, kutanthauzira ndi maphunziro a chilankhulo mwachilungamo. Ntchito ya mabungwe a zadiplomasiya, ma NGO, zaumoyo ndi makasitomala apacheka m'Africa Yekha ndi Yschodnia.
          </p>
          <div style={{ display: "inline-block", background: "rgba(0,120,212,0.25)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "#fff", fontSize: "13px" }}>
            Chingerezi · Chiputukezi · Chichewa · Kiswahili · HIPAA/GDPR
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Ntchito za Zinenero ndi Mitengo</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "24px" }}>Mitengo siyikuphatikiza VAT ya 17.5%. Kuchotsera kwa maoda ambiri kulipo.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "520px" }}>
            <thead>
              <tr>
                <th style={TH}>Ntchito</th>
                <th style={TH}>Zilankhulo</th>
                <th style={TH}>Muyeso</th>
                <th style={TH}>MWK</th>
                <th style={TH}>USD</th>
                <th style={TH}>Quotation</th>
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

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "20px" }}>Zilankhulo Zomwe Timagwira Nazo</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {langPairs.map(p => (
            <div key={p.pair} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{p.pair}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{p.body}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "20px" }}>Mbumba Yothandizidwa</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {sectors.map(s => (
            <div key={s.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{s.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid " + ACCENT, borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Umboni wa Zamdule</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>High Commission ya Republic ya Mozambique, Lilongwe (February 2026) itsimikizira kuti TechNexus yaperekedwa ntchito zapamwamba ku Mission pa nthawi yayitali. Mission ikutamanda TechNexus chifukwa cha muyeso wake wapamwamba wa kukhala wachikumbu, kulondola, kukhala wodalirika ndi chinsinsi.</p>
        </div>

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Upangiri wa Ma Tender ndi Pre-Qualification</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "8px" }}>Lekani kutaya ma kontrakiti chifukwa cha zolakwika za mapepala. Mitengo yokhazikika.</p>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px", lineHeight: 1.7 }}>Timadzaza madokumento anu a tender, mafomulo a pre-qualification ndi mayankho a mapulo mwadongosolo — m'chilankhulo chanu. Kulipo mu Chingerezi, Chiputukezi, Chichewa ndi Kiswahili.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "480px" }}>
            <thead>
              <tr>
                <th style={TH}>Ntchito</th>
                <th style={TH}>Kufotokozera</th>
                <th style={TH}>Kuyambira (MWK)</th>
                <th style={TH}>Quotation</th>
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

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Kulembetsa Bizinesi ndi Kutsatira Malamulo</h2>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px", lineHeight: 1.7 }}>Timakonzekera ndi kutumiza madokumento a kulembetsa bizinesi, layisensi ndi kutsatira malamulo m'malo mwanu. Kulembetsa kuno ku Malawi ndi kunja kwa dziko ku Zambia, Mozambique ndi South Africa.</p>

        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "17px", fontWeight: 700, color: TEAL, marginBottom: "16px" }}>Kulembetsa Kuno — Malawi</h3>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "32px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "480px" }}>
            <thead>
              <tr>
                <th style={TH}>Ntchito</th>
                <th style={TH}>Kufotokozera</th>
                <th style={TH}>Kuyambira (MWK)</th>
                <th style={TH}>Quotation</th>
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

        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "17px", fontWeight: 700, color: "#4CAF50", marginBottom: "8px" }}>Kulembetsa Kunja kwa Dziko</h3>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "16px", lineHeight: 1.7 }}>Timagwirizana ndi ma agent akudziko ku Zambia, Mozambique ndi South Africa kuyendetsa makampeni a kulembetsa kutali. Madokumento amakonzedwa, amasuliridwa pamafunikira, ndi kutumizidwa m'malo mwanu.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "520px" }}>
            <thead>
              <tr>
                <th style={TH}>Dziko</th>
                <th style={TH}>Ntchito</th>
                <th style={TH}>Kufotokozera</th>
                <th style={TH}>Kuyambira (MWK)</th>
                <th style={TH}>Quotation</th>
              </tr>
            </thead>
            <tbody>
              {crossBorderReg.map((s, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={{ ...TD, fontWeight: 700, color: s.country === "Maiko ambiri" ? MUTED : "var(--fl-amber)", whiteSpace: "nowrap" as const }}>{s.country}</td>
                  <td style={{ ...TD, fontWeight: 600 }}>{s.name}</td>
                  <td style={{ ...TD, color: MUTED, fontSize: "12px" }}>{s.desc}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{s.mwk}</td>
                  <td style={TD}><QuoteBtn text={encodeURIComponent(s.name)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid #4CAF50", borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Zidziwitso Zofunikira pa Kulembetsa Kunja kwa Dziko</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>Mitengo ya boma, ya ma agent akudziko ndi ya kutsimikizira madokumento imapatulidwa pa mtengo weniweni. Timapeleka quotation yoonekeratu usanachite cholipira chilichonse. Nthawi zosiyanasiyana pa dziko: Malawi masiku 5-10, Zambia 10-15, Mozambique 15-25, South Africa 10-20.</p>
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "32px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, marginBottom: "12px" }}>Momwe Mungalumikizanire</h3>
          <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, marginBottom: "20px" }}>
            Tumizani dokumento lanu la cholinga kapena zofunikira zanu kudzera pa WhatsApp kapena imelo. Titsimikizira kuchuluka kwa ntchito, nthawi yokwanirira, ndi kutumiza mtengo mu maola 24. Nthawi yotsatira: tsiku 1-3 la bizinesi pa dokumento; tsiku 5-25 la bizinesi pa ntchito za kulembetsa. Mgwirizano wa chinsinsi uperekedwa momufunira.
          </p>
          <a href="https://wa.me/265889941700?text=Moni%20TechNexus%2C%20ndikufuna%20quotation%20kuchokera%20ku%20tsamba%20la%20Ntchito%20za%20Zinenero." target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Pemphani Quotation
          </a>
        </div>

      </div>
    </div>
  );
}
