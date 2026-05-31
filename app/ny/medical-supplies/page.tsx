import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TechNexus — Zinthu za Chipatala",
  description: "Zinthu za chipatala. EPI, kuyeza, fanicha ya chipatala, mankhwala. SADC. Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/ny/medical-supplies",
    languages: {
      "en": "https://www.technexusmw.com/medical-supplies",
      "pt": "https://www.technexusmw.com/pt/medical-supplies",
      "ny": "https://www.technexusmw.com/ny/medical-supplies",
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

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div style={{ borderLeft: "4px solid var(--fl-blue)", paddingLeft: "16px", marginBottom: sub ? "6px" : "20px" }}>
      <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>{title}</h2>
      {sub && <p style={{ fontSize: "13px", color: MUTED, margin: "4px 0 0" }}>{sub}</p>}
    </div>
  );
}

function QuoteBtn({ name, price }: { name: string; price: string }) {
  const wa = WA + encodeURIComponent(name) + "%0AMtengo%3A%20" + encodeURIComponent(price);
  return (
    <a href={wa} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" as const }}>
      Quote
    </a>
  );
}

function ProdTable({ rows }: { rows: [string, string, string, string][] }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "36px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "400px" }}>
        <thead>
          <tr>
            <th style={TH}>Chinthu</th>
            <th style={TH}>Phukusi</th>
            <th style={TH}>MWK</th>
            <th style={TH}>USD</th>
            <th style={TH}>Quote</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, pack, mwk, usd], i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
              <td style={{ ...TD, fontWeight: 600 }}>{name}</td>
              <td style={{ ...TD, color: MUTED }}>{pack}</td>
              <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{mwk}</td>
              <td style={{ ...TD, color: MUTED }}>{usd}</td>
              <td style={TD}><QuoteBtn name={name} price={usd} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const masks: [string,string,string,string][] = [
  ["Masiki Opaleshoni 3 Zigawo","1x50","MK 5,120","$2.96"],
  ["Masiki KN95","1x1","MK 590","$0.33"],
  ["Masiki N95","1x1","MK 787","$0.45"],
  ["Masiki NIOSH N95","1x20","MK 31,507","$18.17"],
  ["Masiki KN95 ndi Chosefa","1x10","MK 5,907","$3.41"],
  ["Masiki FFP2","1x20","MK 15,754","$9.09"],
];
const respiratory: [string,string,string,string][] = [
  ["Masiki a Nebulization","1x1","MK 3,938","$2.28"],
  ["Masiki a Okisijeni Wosavuta","1x1","MK 3,938","$2.28"],
  ["Masiki a Okisijeni ndi Reservoir","1x1","MK 3,938","$2.28"],
];
const gloves: [string,string,string,string][] = [
  ["Migonjera ya Nitrile","1x100","MK 13,785","$7.95"],
  ["Migonjera ya Kuyeza","1x100","MK 13,785","$7.95"],
  ["Migonjera ya Pulasitiki / Yomalizidwa","1x100","MK 1,969","$1.13"],
  ["Migonjera ya Opaleshoni","1x50 pairs","MK 33,476","$19.30"],
  ["Migonjera ya Ginecologia","1x25 pairs","MK 47,261","$27.26"],
];
const syringes: [string,string,string,string][] = [
  ["Ma Injekishoni Insulina 1ml + Ziphichoni","1x100","MK 20,677","$11.92"],
  ["Ma Injekishoni LUER LOCK 5ml + Ziphichoni","1x100","MK 21,662","$12.50"],
  ["Ma Injekishoni LUER LOCK 10/20/50ml","osiyanasiyana","MK 23,631","$13.63"],
  ["Ma Injekishoni LUER SLIP 3ml + Ziphichoni","1x100","MK 20,677","$11.92"],
  ["Ma Injekishoni LUER SLIP 5ml ndi 10ml","1x100","MK 19,692","$11.35"],
  ["Zinganga #11","1x100","MK 17,723","$10.22"],
  ["Zinganga #15","1x100","MK 17,723","$10.22"],
  ["Zinganga #20","1x100","MK 17,723","$10.22"],
];
const disinfectants: [string,string,string,string][] = [
  ["Gel Alkoholi 70% 100ml","1x1","MK 2,364","$1.36"],
  ["Alkoholi Ethyl 70% 100ml","1x1","MK 2,364","$1.36"],
  ["Alkoholi Ethyl 70% 250ml","1x1","MK 5,120","$2.96"],
  ["Alkoholi Ethyl 70% 500ml","1x1","MK 7,876","$4.54"],
  ["Alkoholi Ethyl 70% 1000ml","1x1","MK 10,830","$6.25"],
  ["Alkoholi Ethyl 70% 5L","1x1","MK 35,445","$20.45"],
  ["Gel Alkoholi 70% 5L","1x1","MK 39,385","$22.71"],
  ["Gel ya Echografia 5L","1x1","MK 39,385","$22.71"],
];
const diagnostics: [string,string,string,string][] = [
  ["Stetoskopu wa Chipatala","1x1","MK 15,754","$9.09"],
  ["Stetoskopu Wachiwiri wa Chipatala","1x1","MK 17,723","$10.22"],
  ["Malo Oyezera Magazi Digito","1x1","MK 51,200","$29.52"],
  ["Seti ya Stetoskopu ndi Sfigmo.","1x1","MK 47,261","$27.26"],
  ["Otoskopu","1x1","MK 118,153","$68.14"],
  ["Oximeter ya Mala Digito","1x1","MK 27,569","$15.89"],
  ["Thermometa Digito","1x1","MK 5,120","$2.96"],
];
const monitoring: [string,string,string,string][] = [
  ["Thermometa ya Mercury","1x1","MK 3,938","$2.28"],
  ["Thermometa Infrared","1x1","MK 23,631","$13.63"],
  ["Wachi wa Phukusi","1x1","MK 5,907","$3.41"],
  ["Nyale ya Kuyeza","1x1","MK 7,876","$4.54"],
  ["Tourniquet","1x1","MK 5,907","$3.41"],
  ["Flowmeter ya Okisijeni","1x1","MK 78,768","$45.43"],
  ["Resuscitator Ambu Mwana ndi Mkulu","1x1","MK 118,153","$68.14"],
  ["Peak Flow Meter","1x1","MK 27,569","$15.89"],
  ["Peak Flow Meter ya Mwana","1x1","MK 51,200","$29.52"],
  ["Kanula ya Okisijeni ya Mphuno","1x1","MK 2,954","$1.70"],
  ["Stetoskopu ya Mwana Wobadwa","1x1","MK 11,815","$6.82"],
  ["Infantometer","1x1","MK 82,707","$47.69"],
  ["Chosungira Mankhwala a Sabata Mtundu 1","1x1","MK 5,907","$3.41"],
  ["Chosungira Mankhwala a Sabata Mtundu 2","1x1","MK 2,756","$1.59"],
  ["Kapu Yogwirira Mkodzo 60ml","1x1","MK 590","$0.33"],
  ["Nebulizer","1x1","MK 98,461","$56.78"],
  ["Seti ya Chithandizo Choyamba","1x1","MK 27,569","$15.89"],
  ["Bokosi la Cold Chain ndi Thermometa","1x1","MK 157,538","$90.86"],
];
const labCotton: [string,string,string,string][] = [
  ["Chosindika Mabegi a Sterilization","1x1","MK 492,305","$283.91"],
  ["Thumba la Ice","1x1","MK 3,938","$2.28"],
  ["Matubu a Vacuum Akuda 4ml","1x100","MK 43,323","$24.98"],
  ["Choika Matubu a Laboretori","1x1","MK 24,615","$14.20"],
  ["Matubu a Vacuum Afiira 4ml","1x100","MK 33,476","$19.30"],
  ["Mipira ya Thonje 50g","1x100","MK 3,938","$2.28"],
  ["Chingwe Chosira 75cm","1x1","MK 51,200","$29.52"],
  ["Chingwe Chosira 90cm","1x1","MK 63,016","$36.34"],
  ["Rulo ya Thonje Yomwa 50g","1x1","MK 1,969","$1.13"],
  ["Rulo ya Thonje Yomwa 100g","1x1","MK 3,151","$1.81"],
  ["Rulo ya Thonje Yomwa 500g","1x1","MK 9,846","$5.68"],
  ["Gauze Yosasindikizidwa 5x5cm","1x100","MK 3,938","$2.28"],
  ["Gauze Yosasindikizidwa 7.5x7.5cm","1x100","MK 6,302","$3.64"],
  ["Gauze Yosindikizidwa 10x10cm","1x50","MK 15,360","$8.86"],
  ["Gauze Yosasindikizidwa 10x10cm","1x100","MK 8,271","$4.77"],
  ["Bendiji ya Gauze 7.5cm x 5m","1x12","MK 3,938","$2.28"],
  ["Bendiji ya Gauze 10cm x 5m","1x12","MK 6,302","$3.64"],
  ["Tepi ya Zinc Oxide 2.5cm x 5m","1x1","MK 1,969","$1.13"],
  ["Tepi ya Zinc Oxide 5cm x 5m","1x1","MK 2,364","$1.36"],
  ["Tepi ya Zinc Oxide 7.5cm x 5m","1x1","MK 2,954","$1.70"],
  ["Mapasta Owonekera","1x100","MK 3,938","$2.28"],
  ["Mahatchi Oyumba Yomalizidwa","1x100","MK 9,846","$5.68"],
  ["Nappies Yomwa Yomalizidwa","1x10","MK 17,723","$10.22"],
  ["Chiwalo cha Opaleshoni","1x50","MK 27,569","$15.89"],
  ["Thumba Yogwirira Mkodzo","1x1","MK 1,969","$1.13"],
  ["Chovala Chosapitilira Madzi","1x1","MK 11,815","$6.82"],
  ["Seti ya Opaleshoni (Jekete ndi Slacks)","1x1","MK 35,445","$20.45"],
  ["Koti Yomalizidwa ya Alendo","1x1","MK 3,151","$1.81"],
  ["Epron Yoyera Yomalizidwa","1x100","MK 18,511","$10.67"],
  ["Maso Otetezera","1x1","MK 3,938","$2.28"],
  ["Bokosi la Zida Zodulidwa / Kuotcha","1x1","MK 2,756","$1.59"],
  ["Chifanizo cha Mafupa a Munthu","1x1","MK 1,063,379","$613.25"],
  ["Rulo ya Sterilization 100x200mm","1x1","MK 59,076","$34.07"],
  ["Rulo ya Sterilization 250x50mm","1x1","MK 63,016","$36.34"],
  ["Rulo ya Sterilization 150x200mm","1x1","MK 78,768","$45.43"],
  ["Rulo ya Sterilization 250x200mm","1x1","MK 118,153","$68.14"],
];
const furniture: [string,string,string,string][] = [
  ["Gulu la Zisanduku Ziwiri la Tebulo la Kuyeza","1x1","MK 157,538","$90.86"],
  ["Mpando wa Kusambitsa ndi Kukonza","1x1","MK 275,691","$158.99"],
  ["Kabati la Pafupi ndi Bedi","1x1","MK 275,691","$158.99"],
  ["Tebulo la Zida za Mayo","1x1","MK 236,306","$136.27"],
  ["Bedi la Chipatala la Mwana","1x1","MK 433,228","$249.85"],
  ["Mpando wa Kumwetulira","1x1","MK 39,385","$22.71"],
  ["Matress Yoteteza Zilonda","1x1","MK 177,229","$102.21"],
  ["Matress","1x1","MK 315,075","$181.70"],
  ["Tebulo la Masaji / Chithandizo","1x1","MK 472,613","$272.56"],
  ["Tebulo la Ginecologia","1x1","MK 590,766","$340.69"],
  ["Tebulo la Kuyeza ndi Kufufuza","1x1","MK 551,381","$317.99"],
  ["Bedi la Chipatala Losintha","1x1","MK 708,920","$408.83"],
  ["Bedi la Chipatala","1x1","MK 630,150","$363.41"],
  ["Beseni la Sterilization 23cm","1x1","MK 98,461","$56.78"],
  ["Beseni la Sterilization 26cm","1x1","MK 108,308","$62.47"],
  ["Beseni la Sterilization 30cm","1x1","MK 118,153","$68.14"],
  ["Sikelo Digito ya Mwana (yokanama)","1x1","MK 118,153","$68.14"],
  ["Sikelo Digito ya Mwana (yokhala)","1x1","MK 196,922","$113.56"],
  ["Sikelo ya Nyumba ya Bafa ya Mkulu","1x1","MK 47,261","$27.26"],
  ["Sikelo ya Dzanja ndi Chiyeso cha Kutalika","1x1","MK 472,613","$272.56"],
  ["Sikelo ya Makina ndi Chiyeso cha Kutalika","1x1","MK 551,381","$317.99"],
  ["Sikelo ya Magetsi ndi Chiyeso cha Kutalika","1x1","MK 551,381","$317.99"],
  ["Chea Choweta Magetsi","1x1","MK 2,166,142","$1,249.22"],
  ["Chea Choweta ya Mkulu","1x1","MK 393,845","$227.13"],
  ["Beseni la Kugona ndi Chofumba","1x1","MK 98,461","$56.78"],
  ["Chomwa Mkodzo Chapulasitiki","1x1","MK 39,385","$22.71"],
  ["Speculum ya Chiberekero Kukulu","1x1","MK 47,261","$27.26"],
  ["Nyundo ya Kuyeza Zoweledwa","1x1","MK 11,815","$6.82"],
];
const mobility: [string,string,string,string][] = [
  ["Walker Standard","1x1","MK 86,646","$49.97"],
  ["Ndodo Standard","1x1","MK 15,754","$9.09"],
  ["Malata","1x2","MK 86,646","$49.97"],
  ["Ndodo ndi Mpando","1x1","MK 35,445","$20.45"],
  ["Ndodo ya Magulu Anayi","1x1","MK 31,507","$18.17"],
  ["Ndodo ya Magulu Anayi Inox","1x1","MK 35,445","$20.45"],
  ["Ndodo Yogonjoka","1x1","MK 19,692","$11.35"],
];
const pharma: [string,string,string,string][] = [
  ["AQUAFEN PLUS — Gel Diclofenac","1x1","MK 5,317","$3.06"],
  ["IBUWIN-100 — Susp. Ibuprofen","1x1","MK 4,096","$2.36"],
  ["FEM-RED XT — Chitsulo + Folate","1x10","MK 4,016","$2.32"],
  ["VOLIGESIC PLUS — Paracetamol","10x10","MK 6,341","$3.65"],
  ["SCOTRIZOL — Cotrimoxazole","100ml","MK 4,016","$2.32"],
  ["SCONAZ — Fluconazole 150mg","1x1","MK 2,639","$1.52"],
  ["IBUWIN-400mg — Ibuprofen","10x10","MK 6,853","$3.96"],
  ["SCORT — Inj. Triamcinolone","1x1","MK 12,879","$7.42"],
  ["GLUSCOT — Metformin 500mg","10x10","MK 8,507","$4.90"],
  ["Kuyeza Malaria Msanga (25)","1x25","MK 78,768","$45.43"],
  ["Kuyeza HIV Msanga (50)","1x50","MK 97,279","$56.10"],
  ["VIGROSE-BLUE — Sildenafil","1x4","MK 3,938","$2.28"],
  ["INFUMOX — Susp. Amoxicillin","100ml","MK 4,135","$2.38"],
  ["FEBREX PLUS — Mankhwala a Mafua","2x10","MK 2,088","$1.20"],
  ["SALBUTAMOL-NC — Salbutamol","100ml","MK 2,364","$1.36"],
  ["ERYTHROMEX — Erythromycin","10x10","MK 31,114","$17.94"],
  ["CIPROFITAB — Ciprofloxacin","10x10","MK 20,874","$12.04"],
];

const nyLinks = [
  { href: "/ny", label: "Kunyumba" },
  { href: "/ny/catalogue", label: "Zinthu za IT" },
  { href: "/ny/computer-assembly", label: "Kupanga PC" },
  { href: "/ny/language-services", label: "Ntchito za Chilankhulo" },
  { href: "/ny/medical-supplies", label: "Zinthu za Chipatala" },
  { href: "/ny/software-development", label: "Software" },
  { href: "/ny/eis", label: "Compliance EIS" },
  { href: "/ny/credentials", label: "Umboni" },
];

export default function NyMedicalSuppliesPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      <div style={{ position: "relative", background: "var(--fl-neutral-90)", minHeight: "280px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden" }}>
        <img src="/index_main/medical_equipment_1.webp" alt="" aria-hidden="true" width={1100} height={280} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.35 }} loading="eager" />
        <div style={{ position: "relative", zIndex: 1, padding: "64px 24px 48px" }}>
          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.8rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Zinthu za Chipatala
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", maxWidth: "640px", margin: "0 auto 20px", lineHeight: 1.7 }}>
            Zida za zaumoyo, zinthu zomalizidwa ndi mankhwala ochokera kwa ogulitsa otsimikiziridwa a SADC. Tili ndi ntchito ku Malawi, Zambia, Mozambique ndi South Africa.
          </p>
          <div style={{ display: "inline-block", background: "rgba(0,120,212,0.25)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "#90caf9", fontSize: "13px" }}>
            Mtengo: 1 USD = MK 1,734 · Marichi 2026 · Lumikizanani kwa quotation yovomerezeka
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>

        <SectionHead title="Zida Zotetezera — Masiki" sub="Masiki azoteteza otsimikiziridwa kwa chipatala ndi mabungwe." />
        <ProdTable rows={masks} />

        <SectionHead title="Zipangizo Zotetezera Kupuma" sub="Thandizo la kupuma kwa okisijeni ndi nebulization." />
        <ProdTable rows={respiratory} />

        <SectionHead title="Migonjera ya Dzanja" sub="Migonjera ya kuyeza, opaleshoni ndi yomalizidwa." />
        <ProdTable rows={gloves} />

        <SectionHead title="Ma Injekishoni ndi Zinganga" />
        <ProdTable rows={syringes} />

        <SectionHead title="Zophetsa Tizilombo ndi Alkoholi" />
        <ProdTable rows={disinfectants} />

        <SectionHead title="Zida Zoyeza Matenda" />
        <ProdTable rows={diagnostics} />

        <SectionHead title="Zida Zoyang'anira" />
        <ProdTable rows={monitoring} />

        <SectionHead title="Laaboretori ndi Zida Zina" />
        <ProdTable rows={labCotton} />

        <SectionHead title="Fanicha ya Chipatala" />
        <ProdTable rows={furniture} />

        <SectionHead title="Zipangizo Zothandizira Kuyenda" />
        <ProdTable rows={mobility} />

        <SectionHead title="Mankhwala" />
        <ProdTable rows={pharma} />

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid var(--fl-blue)", borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Zidziwitso za Kulamula</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7, marginBottom: "20px" }}>Zinthu zonse za chipatala zichokera kwa ogulitsa otsimikiziridwa. Mitengo momufunira kwa malamulo a mabungwe ndi okulidwa ambiri. Kutsitsa kulikonse kumapezeka kwa zipatala, makiliniiki, mabungwe osapanga phindu ndi mapulogalamu a boma. Lumikizanani nafe kuti mupeze quotation yovomerezeka ndi mgwirizano wa bungwe lopezeretsa zinthu.</p>
          <a href="https://wa.me/265889941700?text=Muli%20bwanji%20TechNexus%2C%20ndikufuna%20quotation%20kuchokera%20ku%20peji%20ya%20Zinthu%20za%20Chipatala." target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Pemphani Quotation
          </a>
        </div>

      </div>
    </div>
  );
}

