const BG = "var(--fl-neutral-2)";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const ACCENT = "var(--fl-blue)";
const TH: React.CSSProperties = { padding: "10px 16px", textAlign: "left" as const, fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", color: MUTED, borderBottom: "1px solid var(--fl-neutral-8)", background: "var(--fl-neutral-4)" };
const TD: React.CSSProperties = { padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid var(--fl-neutral-8)", color: TEXT };
const WA = "https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0A";

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div style={{ borderLeft: "4px solid var(--fl-blue)", paddingLeft: "16px", marginBottom: sub ? "6px" : "20px" }}>
      <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>{title}</h2>
      {sub && <p style={{ fontSize: "13px", color: MUTED, margin: "4px 0 0" }}>{sub}</p>}
    </div>
  );
}

function QuoteBtn({ name, price }: { name: string; price: string }) {
  const wa = WA + encodeURIComponent(name) + "%0APrice%3A%20" + encodeURIComponent(price);
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
            <th style={TH}>Product</th>
            <th style={TH}>Pack</th>
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
  ["Surgical Mask 3-Layer","1x50","MK 5,120","$2.96"],
  ["KN95 Mask","1x1","MK 590","$0.33"],
  ["N95 Mask","1x1","MK 787","$0.45"],
  ["NIOSH N95 Mask","1x20","MK 31,507","$18.17"],
  ["KN95 Mask with Filter","1x10","MK 5,907","$3.41"],
  ["FFP2 Mask","1x20","MK 15,754","$9.09"],
];
const respiratory: [string,string,string,string][] = [
  ["Nebulization Mask","1x1","MK 3,938","$2.28"],
  ["Simple Oxygen Mask","1x1","MK 3,938","$2.28"],
  ["Oxygen Mask with Reservoir","1x1","MK 3,938","$2.28"],
];
const gloves: [string,string,string,string][] = [
  ["Nitrile Gloves","1x100","MK 13,785","$7.95"],
  ["Examination Gloves","1x100","MK 13,785","$7.95"],
  ["Plastic / Disposable Gloves","1x100","MK 1,969","$1.13"],
  ["Surgical Gloves","1x50 pairs","MK 33,476","$19.30"],
  ["Gynaecological Gloves","1x25 pairs","MK 47,261","$27.26"],
];
const syringes: [string,string,string,string][] = [
  ["Insulin Syringes 1ml + Needles","1x100","MK 20,677","$11.92"],
  ["LUER LOCK Syringes 5ml + Needles","1x100","MK 21,662","$12.50"],
  ["LUER LOCK Syringes 10/20/50ml","various","MK 23,631","$13.63"],
  ["LUER SLIP Syringes 3ml + Needles","1x100","MK 20,677","$11.92"],
  ["LUER SLIP Syringes 5ml and 10ml","1x100","MK 19,692","$11.35"],
  ["Scalpel Blade #11","1x100","MK 17,723","$10.22"],
  ["Scalpel Blade #15","1x100","MK 17,723","$10.22"],
  ["Scalpel Blade #20","1x100","MK 17,723","$10.22"],
];
const disinfectants: [string,string,string,string][] = [
  ["Alcohol Gel 70% 100ml","1x1","MK 2,364","$1.36"],
  ["Ethyl Alcohol 70% 100ml","1x1","MK 2,364","$1.36"],
  ["Ethyl Alcohol 70% 250ml","1x1","MK 5,120","$2.96"],
  ["Ethyl Alcohol 70% 500ml","1x1","MK 7,876","$4.54"],
  ["Ethyl Alcohol 70% 1000ml","1x1","MK 10,830","$6.25"],
  ["Ethyl Alcohol 70% 5L","1x1","MK 35,445","$20.45"],
  ["Alcohol Gel 70% 5L","1x1","MK 39,385","$22.71"],
  ["Ecographer Gel 5L","1x1","MK 39,385","$22.71"],
];
const diagnostics: [string,string,string,string][] = [
  ["Professional Stethoscope","1x1","MK 15,754","$9.09"],
  ["Dual Professional Stethoscope","1x1","MK 17,723","$10.22"],
  ["Digital Sphygmomanometer","1x1","MK 51,200","$29.52"],
  ["Stethoscope and Sphygmo. Set","1x1","MK 47,261","$27.26"],
  ["Otoscope","1x1","MK 118,153","$68.14"],
  ["Finger Pulse Oximeter","1x1","MK 27,569","$15.89"],
  ["Digital Thermometer","1x1","MK 5,120","$2.96"],
];
const monitoring: [string,string,string,string][] = [
  ["Mercury Thermometer","1x1","MK 3,938","$2.28"],
  ["Infrared Thermometer","1x1","MK 23,631","$13.63"],
  ["Pocket Watch","1x1","MK 5,907","$3.41"],
  ["Examination Pen Torch","1x1","MK 7,876","$4.54"],
  ["Tourniquet","1x1","MK 5,907","$3.41"],
  ["Oxygen Flow Meter","1x1","MK 78,768","$45.43"],
  ["Paediatric and Adult Ambu Resus.","1x1","MK 118,153","$68.14"],
  ["Peak Flow Meter","1x1","MK 27,569","$15.89"],
  ["Paediatric Peak Flow Meter","1x1","MK 51,200","$29.52"],
  ["Nasal Oxygen Cannula","1x1","MK 2,954","$1.70"],
  ["Foetal Stethoscope","1x1","MK 11,815","$6.82"],
  ["Infantometer","1x1","MK 82,707","$47.69"],
  ["Weekly Pill Organiser Type 1","1x1","MK 5,907","$3.41"],
  ["Weekly Pill Organiser Type 2","1x1","MK 2,756","$1.59"],
  ["Urine Collection Cup 60ml","1x1","MK 590","$0.33"],
  ["Nebuliser","1x1","MK 98,461","$56.78"],
  ["First Aid Kit","1x1","MK 27,569","$15.89"],
  ["Cold Chain Box with Thermometer","1x1","MK 157,538","$90.86"],
];

const labCotton: [string,string,string,string][] = [
  ["Sterilisation Pouch Sealer","1x1","MK 492,305","$283.91"],
  ["Ice Pack Bag","1x1","MK 3,938","$2.28"],
  ["Yellow Vacuum Blood Tubes 4ml","1x100","MK 43,323","$24.98"],
  ["Laboratory Tube Rack","1x1","MK 24,615","$14.20"],
  ["Purple Vacuum Blood Tubes 4ml","1x100","MK 33,476","$19.30"],
  ["Cotton Balls 50g","1x100","MK 3,938","$2.28"],
  ["Suture Thread 75cm","1x1","MK 51,200","$29.52"],
  ["Suture Thread 90cm","1x1","MK 63,016","$36.34"],
  ["Absorbent Cotton Roll 50g","1x1","MK 1,969","$1.13"],
  ["Absorbent Cotton Roll 100g","1x1","MK 3,151","$1.81"],
  ["Absorbent Cotton Roll 500g","1x1","MK 9,846","$5.68"],
  ["Non-Sterile Gauze 5x5cm","1x100","MK 3,938","$2.28"],
  ["Non-Sterile Gauze 7.5x7.5cm","1x100","MK 6,302","$3.64"],
  ["Sterile Gauze 10x10cm","1x50","MK 15,360","$8.86"],
  ["Non-Sterile Gauze 10x10cm","1x100","MK 8,271","$4.77"],
  ["Gauze Bandage 7.5cm x 5m","1x12","MK 3,938","$2.28"],
  ["Gauze Bandage 10cm x 5m","1x12","MK 6,302","$3.64"],
  ["Zinc Oxide Tape 2.5cm x 5m","1x1","MK 1,969","$1.13"],
  ["Zinc Oxide Tape 5cm x 5m","1x1","MK 2,364","$1.36"],
  ["Zinc Oxide Tape 7.5cm x 5m","1x1","MK 2,954","$1.70"],
  ["Transparent Plasters","1x100","MK 3,938","$2.28"],
  ["Disposable Caps / Bonnets","1x100","MK 9,846","$5.68"],
  ["Disposable Absorbent Underpad","1x10","MK 17,723","$10.22"],
  ["Surgical Drape Sheet","1x50","MK 27,569","$15.89"],
  ["Urine Collection Bag","1x1","MK 1,969","$1.13"],
  ["Waterproof Coverall","1x1","MK 11,815","$6.82"],
  ["Scrub Set (Top and Trousers)","1x1","MK 35,445","$20.45"],
  ["Disposable Visitor Gown","1x1","MK 3,151","$1.81"],
  ["Disposable White Apron","1x100","MK 18,511","$10.67"],
  ["Safety Goggles","1x1","MK 3,938","$2.28"],
  ["Sharps / Incineration Box","1x1","MK 2,756","$1.59"],
  ["Human Skeleton Model","1x1","MK 1,063,379","$613.25"],
  ["Sterilisation Reel 100x200mm","1x1","MK 59,076","$34.07"],
  ["Sterilisation Reel 250x50mm","1x1","MK 63,016","$36.34"],
  ["Sterilisation Reel 150x200mm","1x1","MK 78,768","$45.43"],
  ["Sterilisation Reel 250x200mm","1x1","MK 118,153","$68.14"],
];
const furniture: [string,string,string,string][] = [
  ["Step Stool for Exam Table","1x1","MK 157,538","$90.86"],
  ["Bath and Hygiene Chair","1x1","MK 275,691","$158.99"],
  ["Bedside Cabinet","1x1","MK 275,691","$158.99"],
  ["Mayo Instrument Table","1x1","MK 236,306","$136.27"],
  ["Hospital Baby Cot","1x1","MK 433,228","$249.85"],
  ["Pillow","1x1","MK 39,385","$22.71"],
  ["Anti-Bedsore Mattress","1x1","MK 177,229","$102.21"],
  ["Mattress","1x1","MK 315,075","$181.70"],
  ["Massage / Treatment Table","1x1","MK 472,613","$272.56"],
  ["Gynaecological Exam Table","1x1","MK 590,766","$340.69"],
  ["Observation Exam Table","1x1","MK 551,381","$317.99"],
  ["Articulated Hospital Bed","1x1","MK 708,920","$408.83"],
  ["Hospital Bed","1x1","MK 630,150","$363.41"],
  ["Sterilisation Pot 23cm","1x1","MK 98,461","$56.78"],
  ["Sterilisation Pot 26cm","1x1","MK 108,308","$62.47"],
  ["Sterilisation Pot 30cm","1x1","MK 118,153","$68.14"],
  ["Paediatric Digital Scale (flat)","1x1","MK 118,153","$68.14"],
  ["Paediatric Digital Scale (seated)","1x1","MK 196,922","$113.56"],
  ["Adult Bathroom Scale","1x1","MK 47,261","$27.26"],
  ["Manual Scale with Altimeter","1x1","MK 472,613","$272.56"],
  ["Mechanical Scale with Altimeter","1x1","MK 551,381","$317.99"],
  ["Electronic Scale with Altimeter","1x1","MK 551,381","$317.99"],
  ["Electric Wheelchair","1x1","MK 2,166,142","$1,249.22"],
  ["Adult Wheelchair","1x1","MK 393,845","$227.13"],
  ["Bedpan with Lid","1x1","MK 98,461","$56.78"],
  ["Plastic Urinal","1x1","MK 39,385","$22.71"],
  ["Vaginal Speculum Size L","1x1","MK 47,261","$27.26"],
  ["Reflex Hammer","1x1","MK 11,815","$6.82"],
];
const mobility: [string,string,string,string][] = [
  ["Standard Walker","1x1","MK 86,646","$49.97"],
  ["Standard Walking Cane","1x1","MK 15,754","$9.09"],
  ["Crutches","1x2","MK 86,646","$49.97"],
  ["Seat Cane","1x1","MK 35,445","$20.45"],
  ["Quadripod Cane","1x1","MK 31,507","$18.17"],
  ["Quadripod Cane Inox","1x1","MK 35,445","$20.45"],
  ["Folding Walking Cane","1x1","MK 19,692","$11.35"],
];
const pharma: [string,string,string,string][] = [
  ["AQUAFEN PLUS — Diclofenac Gel","1x1","MK 5,317","$3.06"],
  ["IBUWIN-100 — Ibuprofen Susp.","1x1","MK 4,096","$2.36"],
  ["FEM-RED XT — Ferrous + Folic","1x10","MK 4,016","$2.32"],
  ["VOLIGESIC PLUS — Paracetamol","10x10","MK 6,341","$3.65"],
  ["SCOTRIZOL — Cotrimoxazole","100ml","MK 4,016","$2.32"],
  ["SCONAZ — Fluconazole 150mg","1x1","MK 2,639","$1.52"],
  ["IBUWIN-400mg — Ibuprofen","10x10","MK 6,853","$3.96"],
  ["SCORT — Triamcinolone Inj.","1x1","MK 12,879","$7.42"],
  ["GLUSCOT — Metformin 500mg","10x10","MK 8,507","$4.90"],
  ["Malaria Rapid Test (25)","1x25","MK 78,768","$45.43"],
  ["HIV Rapid Test (50)","1x50","MK 97,279","$56.10"],
  ["VIGROSE-BLUE — Sildenafil","1x4","MK 3,938","$2.28"],
  ["INFUMOX — Amoxicillin Susp.","100ml","MK 4,135","$2.38"],
  ["FEBREX PLUS — Anti-Flu","2x10","MK 2,088","$1.20"],
  ["SALBUTAMOL-NC — Salbutamol","100ml","MK 2,364","$1.36"],
  ["ERYTHROMEX — Erythromycin","10x10","MK 31,114","$17.94"],
  ["CIPROFITAB — Ciprofloxacin","10x10","MK 20,874","$12.04"],
];

export default function MedicalSuppliesPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>
      <div style={{ background: "var(--fl-neutral-90)", padding: "64px 40px 48px", textAlign: "center", backgroundImage: "url(/index_main/medical_equipment_1.webp)", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
          Medical Supplies Catalogue
        </h1>
        <p style={{ color: "#999", fontSize: "15px", maxWidth: "640px", margin: "0 auto 20px", lineHeight: 1.7 }}>
          Healthcare equipment, consumables and pharmaceuticals sourced through verified SADC partners. Serving Malawi, Zambia, Mozambique and South Africa.
        </p>
        <div style={{ display: "inline-block", background: "rgba(0,120,212,0.15)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "var(--fl-blue)", fontSize: "13px" }}>
          Rate: 1 USD = MK 1,734 · March 2026 · Contact for formal quotations
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>

        <SectionHead title="Protective Equipment — Masks" sub="Certified protective masks for clinical and institutional use." />
        <ProdTable rows={masks} />

        <SectionHead title="Respiratory Masks and Devices" sub="Respiratory support for oxygen therapy and nebulisation." />
        <ProdTable rows={respiratory} />

        <SectionHead title="Gloves" sub="Examination, surgical and disposable gloves." />
        <ProdTable rows={gloves} />

        <SectionHead title="Syringes and Scalpels" />
        <ProdTable rows={syringes} />

        <SectionHead title="Disinfectants and Alcohol" />
        <ProdTable rows={disinfectants} />

        <SectionHead title="Diagnostic Instruments" />
        <ProdTable rows={diagnostics} />

        <SectionHead title="Monitoring Devices" />
        <ProdTable rows={monitoring} />

        <SectionHead title="Laboratory and Cotton" />
        <ProdTable rows={labCotton} />

        <SectionHead title="Hospital Furniture and Scales" />
        <ProdTable rows={furniture} />

        <SectionHead title="Mobility Aids" />
        <ProdTable rows={mobility} />

        <SectionHead title="Medicines and Pharmaceuticals" />
        <ProdTable rows={pharma} />

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid var(--fl-blue)", borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Ordering Information</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7, marginBottom: "20px" }}>All medical supplies are sourced through verified wholesale partners. Prices on application for institutional and bulk orders. Discounts available for hospitals, clinics, NGOs and government health programmes. Contact TechNexus for formal quotations and supply chain agreements.</p>
          <a href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20from%20the%20Medical%20Supplies%20page." target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Request a Quote
          </a>
        </div>

      </div>
    </div>
  );
}

