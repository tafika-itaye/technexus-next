import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TechNexus — Catalogo de Material Medico",
  description: "Catalogo de material medico. EPI, diagnostico, mobiliario hospitalar, farmaceuticos. SADC. Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/pt/medical-supplies",
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
const WA = "https://wa.me/265889941700?text=Ola%20TechNexus%2C%20gostaria%20de%20um%20orcamento%20para%3A%0A";

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div style={{ borderLeft: "4px solid var(--fl-blue)", paddingLeft: "16px", marginBottom: sub ? "6px" : "20px" }}>
      <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>{title}</h2>
      {sub && <p style={{ fontSize: "13px", color: MUTED, margin: "4px 0 0" }}>{sub}</p>}
    </div>
  );
}

function QuoteBtn({ name, price }: { name: string; price: string }) {
  const wa = WA + encodeURIComponent(name) + "%0APreco%3A%20" + encodeURIComponent(price);
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
            <th style={TH}>Produto</th>
            <th style={TH}>Embalagem</th>
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
  ["Mascara Cirurgica 3 Camadas","1x50","MK 5,120","$2.96"],
  ["Mascara KN95","1x1","MK 590","$0.33"],
  ["Mascara N95","1x1","MK 787","$0.45"],
  ["Mascara NIOSH N95","1x20","MK 31,507","$18.17"],
  ["Mascara KN95 com Filtro","1x10","MK 5,907","$3.41"],
  ["Mascara FFP2","1x20","MK 15,754","$9.09"],
];
const respiratory: [string,string,string,string][] = [
  ["Mascara de Nebulizacao","1x1","MK 3,938","$2.28"],
  ["Mascara de Oxigenio Simples","1x1","MK 3,938","$2.28"],
  ["Mascara de Oxigenio com Reservatorio","1x1","MK 3,938","$2.28"],
];
const gloves: [string,string,string,string][] = [
  ["Luvas de Nitrilo","1x100","MK 13,785","$7.95"],
  ["Luvas de Exame","1x100","MK 13,785","$7.95"],
  ["Luvas Plasticas / Descartaveis","1x100","MK 1,969","$1.13"],
  ["Luvas Cirurgicas","1x50 pares","MK 33,476","$19.30"],
  ["Luvas Ginecologicas","1x25 pares","MK 47,261","$27.26"],
];
const syringes: [string,string,string,string][] = [
  ["Seringas Insulina 1ml + Agulhas","1x100","MK 20,677","$11.92"],
  ["Seringas LUER LOCK 5ml + Agulhas","1x100","MK 21,662","$12.50"],
  ["Seringas LUER LOCK 10/20/50ml","varias","MK 23,631","$13.63"],
  ["Seringas LUER SLIP 3ml + Agulhas","1x100","MK 20,677","$11.92"],
  ["Seringas LUER SLIP 5ml e 10ml","1x100","MK 19,692","$11.35"],
  ["Bisturi #11","1x100","MK 17,723","$10.22"],
  ["Bisturi #15","1x100","MK 17,723","$10.22"],
  ["Bisturi #20","1x100","MK 17,723","$10.22"],
];
const disinfectants: [string,string,string,string][] = [
  ["Gel Alcoolico 70% 100ml","1x1","MK 2,364","$1.36"],
  ["Alcool Etilico 70% 100ml","1x1","MK 2,364","$1.36"],
  ["Alcool Etilico 70% 250ml","1x1","MK 5,120","$2.96"],
  ["Alcool Etilico 70% 500ml","1x1","MK 7,876","$4.54"],
  ["Alcool Etilico 70% 1000ml","1x1","MK 10,830","$6.25"],
  ["Alcool Etilico 70% 5L","1x1","MK 35,445","$20.45"],
  ["Gel Alcoolico 70% 5L","1x1","MK 39,385","$22.71"],
  ["Gel de Ecografia 5L","1x1","MK 39,385","$22.71"],
];
const diagnostics: [string,string,string,string][] = [
  ["Estetoscopio Profissional","1x1","MK 15,754","$9.09"],
  ["Estetoscopio Duplo Profissional","1x1","MK 17,723","$10.22"],
  ["Esfigmomanometro Digital","1x1","MK 51,200","$29.52"],
  ["Kit Estetoscopio e Esfigmo.","1x1","MK 47,261","$27.26"],
  ["Otoscopio","1x1","MK 118,153","$68.14"],
  ["Oximetro de Pulso Digital","1x1","MK 27,569","$15.89"],
  ["Termometro Digital","1x1","MK 5,120","$2.96"],
];
const monitoring: [string,string,string,string][] = [
  ["Termometro de Mercurio","1x1","MK 3,938","$2.28"],
  ["Termometro Infravermelhos","1x1","MK 23,631","$13.63"],
  ["Relogio de Bolso","1x1","MK 5,907","$3.41"],
  ["Lanterna de Exame","1x1","MK 7,876","$4.54"],
  ["Torniquete","1x1","MK 5,907","$3.41"],
  ["Fluxometro de Oxigenio","1x1","MK 78,768","$45.43"],
  ["Ressuscitador Ambu Ped. e Adulto","1x1","MK 118,153","$68.14"],
  ["Medidor de Pico de Fluxo","1x1","MK 27,569","$15.89"],
  ["Medidor de Pico de Fluxo Ped.","1x1","MK 51,200","$29.52"],
  ["Canula Nasal de Oxigenio","1x1","MK 2,954","$1.70"],
  ["Estetoscopio Fetal","1x1","MK 11,815","$6.82"],
  ["Infantometro","1x1","MK 82,707","$47.69"],
  ["Organizador Semanal de Comprimidos Tipo 1","1x1","MK 5,907","$3.41"],
  ["Organizador Semanal de Comprimidos Tipo 2","1x1","MK 2,756","$1.59"],
  ["Copo de Colheita de Urina 60ml","1x1","MK 590","$0.33"],
  ["Nebulizador","1x1","MK 98,461","$56.78"],
  ["Kit de Primeiros Socorros","1x1","MK 27,569","$15.89"],
  ["Caixa Cadeia de Frio com Termometro","1x1","MK 157,538","$90.86"],
];
const labCotton: [string,string,string,string][] = [
  ["Seladora de Bolsas de Esterilizacao","1x1","MK 492,305","$283.91"],
  ["Saco de Gelo","1x1","MK 3,938","$2.28"],
  ["Tubos de Vacuo Amarelos 4ml","1x100","MK 43,323","$24.98"],
  ["Suporte para Tubos de Laboratorio","1x1","MK 24,615","$14.20"],
  ["Tubos de Vacuo Roxos 4ml","1x100","MK 33,476","$19.30"],
  ["Bolas de Algodao 50g","1x100","MK 3,938","$2.28"],
  ["Fio de Sutura 75cm","1x1","MK 51,200","$29.52"],
  ["Fio de Sutura 90cm","1x1","MK 63,016","$36.34"],
  ["Rolo de Algodao Absorvente 50g","1x1","MK 1,969","$1.13"],
  ["Rolo de Algodao Absorvente 100g","1x1","MK 3,151","$1.81"],
  ["Rolo de Algodao Absorvente 500g","1x1","MK 9,846","$5.68"],
  ["Gaze Nao Esteril 5x5cm","1x100","MK 3,938","$2.28"],
  ["Gaze Nao Esteril 7.5x7.5cm","1x100","MK 6,302","$3.64"],
  ["Gaze Esteril 10x10cm","1x50","MK 15,360","$8.86"],
  ["Gaze Nao Esteril 10x10cm","1x100","MK 8,271","$4.77"],
  ["Ligadura de Gaze 7.5cm x 5m","1x12","MK 3,938","$2.28"],
  ["Ligadura de Gaze 10cm x 5m","1x12","MK 6,302","$3.64"],
  ["Adesivo de Oxido de Zinco 2.5cm x 5m","1x1","MK 1,969","$1.13"],
  ["Adesivo de Oxido de Zinco 5cm x 5m","1x1","MK 2,364","$1.36"],
  ["Adesivo de Oxido de Zinco 7.5cm x 5m","1x1","MK 2,954","$1.70"],
  ["Pensos Transparentes","1x100","MK 3,938","$2.28"],
  ["Toucas Descartaveis","1x100","MK 9,846","$5.68"],
  ["Fralda Absorvente Descartavel","1x10","MK 17,723","$10.22"],
  ["Campo Cirurgico","1x50","MK 27,569","$15.89"],
  ["Saco de Colheita de Urina","1x1","MK 1,969","$1.13"],
  ["Fato Impermeavel","1x1","MK 11,815","$6.82"],
  ["Kit Cirurgico (Casaco e Calcas)","1x1","MK 35,445","$20.45"],
  ["Bata Descartavel para Visitas","1x1","MK 3,151","$1.81"],
  ["Avental Branco Descartavel","1x100","MK 18,511","$10.67"],
  ["Oculos de Proteccao","1x1","MK 3,938","$2.28"],
  ["Caixa para Cortantes / Incineracao","1x1","MK 2,756","$1.59"],
  ["Modelo de Esqueleto Humano","1x1","MK 1,063,379","$613.25"],
  ["Rolo de Esterilizacao 100x200mm","1x1","MK 59,076","$34.07"],
  ["Rolo de Esterilizacao 250x50mm","1x1","MK 63,016","$36.34"],
  ["Rolo de Esterilizacao 150x200mm","1x1","MK 78,768","$45.43"],
  ["Rolo de Esterilizacao 250x200mm","1x1","MK 118,153","$68.14"],
];
const furniture: [string,string,string,string][] = [
  ["Banco de Dois Degraus para Mesa de Exame","1x1","MK 157,538","$90.86"],
  ["Cadeira de Banho e Higiene","1x1","MK 275,691","$158.99"],
  ["Armario de Cabeceira","1x1","MK 275,691","$158.99"],
  ["Mesa de Instrumentos Mayo","1x1","MK 236,306","$136.27"],
  ["Berco Hospitalar","1x1","MK 433,228","$249.85"],
  ["Almofada","1x1","MK 39,385","$22.71"],
  ["Colchao Anti-Escaras","1x1","MK 177,229","$102.21"],
  ["Colchao","1x1","MK 315,075","$181.70"],
  ["Marquesa de Massagem / Tratamento","1x1","MK 472,613","$272.56"],
  ["Mesa Ginecologica","1x1","MK 590,766","$340.69"],
  ["Mesa de Observacao e Exame","1x1","MK 551,381","$317.99"],
  ["Cama Hospitalar Articulada","1x1","MK 708,920","$408.83"],
  ["Cama Hospitalar","1x1","MK 630,150","$363.41"],
  ["Tina de Esterilizacao 23cm","1x1","MK 98,461","$56.78"],
  ["Tina de Esterilizacao 26cm","1x1","MK 108,308","$62.47"],
  ["Tina de Esterilizacao 30cm","1x1","MK 118,153","$68.14"],
  ["Balanca Digital Pediatrica (plana)","1x1","MK 118,153","$68.14"],
  ["Balanca Digital Pediatrica (sentada)","1x1","MK 196,922","$113.56"],
  ["Balanca de Casa de Banho para Adulto","1x1","MK 47,261","$27.26"],
  ["Balanca Manual com Altimetro","1x1","MK 472,613","$272.56"],
  ["Balanca Mecanica com Altimetro","1x1","MK 551,381","$317.99"],
  ["Balanca Electronica com Altimetro","1x1","MK 551,381","$317.99"],
  ["Cadeira de Rodas Electrica","1x1","MK 2,166,142","$1,249.22"],
  ["Cadeira de Rodas para Adulto","1x1","MK 393,845","$227.13"],
  ["Arrastadeira com Tampa","1x1","MK 98,461","$56.78"],
  ["Urinol Plastico","1x1","MK 39,385","$22.71"],
  ["Especulo Vaginal Tamanho L","1x1","MK 47,261","$27.26"],
  ["Martelo de Reflexos","1x1","MK 11,815","$6.82"],
];
const mobility: [string,string,string,string][] = [
  ["Andarilho Standard","1x1","MK 86,646","$49.97"],
  ["Bengala Standard","1x1","MK 15,754","$9.09"],
  ["Muletas","1x2","MK 86,646","$49.97"],
  ["Bengala com Assento","1x1","MK 35,445","$20.45"],
  ["Bengala Quadripede","1x1","MK 31,507","$18.17"],
  ["Bengala Quadripede Inox","1x1","MK 35,445","$20.45"],
  ["Bengala Dobravel","1x1","MK 19,692","$11.35"],
];
const pharma: [string,string,string,string][] = [
  ["AQUAFEN PLUS — Gel Diclofenac","1x1","MK 5,317","$3.06"],
  ["IBUWIN-100 — Susp. Ibuprofeno","1x1","MK 4,096","$2.36"],
  ["FEM-RED XT — Ferro + Acido Folico","1x10","MK 4,016","$2.32"],
  ["VOLIGESIC PLUS — Paracetamol","10x10","MK 6,341","$3.65"],
  ["SCOTRIZOL — Cotrimoxazol","100ml","MK 4,016","$2.32"],
  ["SCONAZ — Fluconazol 150mg","1x1","MK 2,639","$1.52"],
  ["IBUWIN-400mg — Ibuprofeno","10x10","MK 6,853","$3.96"],
  ["SCORT — Inj. Triancinolona","1x1","MK 12,879","$7.42"],
  ["GLUSCOT — Metformina 500mg","10x10","MK 8,507","$4.90"],
  ["Teste Rapido Malaria (25)","1x25","MK 78,768","$45.43"],
  ["Teste Rapido VIH (50)","1x50","MK 97,279","$56.10"],
  ["VIGROSE-BLUE — Sildenafil","1x4","MK 3,938","$2.28"],
  ["INFUMOX — Susp. Amoxicilina","100ml","MK 4,135","$2.38"],
  ["FEBREX PLUS — Anti-Gripal","2x10","MK 2,088","$1.20"],
  ["SALBUTAMOL-NC — Salbutamol","100ml","MK 2,364","$1.36"],
  ["ERYTHROMEX — Eritromicina","10x10","MK 31,114","$17.94"],
  ["CIPROFITAB — Ciprofloxacina","10x10","MK 20,874","$12.04"],
];

export default function PtMedicalSuppliesPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      <div style={{ position: "relative", background: "var(--fl-neutral-90)", minHeight: "280px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden" }}>
        <img src="/index_main/medical_equipment_1.webp" alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.35 }} loading="eager" />
        <div style={{ position: "relative", zIndex: 1, padding: "64px 24px 48px" }}>
          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.8rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Catalogo de Material Medico
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", maxWidth: "640px", margin: "0 auto 20px", lineHeight: 1.7 }}>
            Equipamento de saude, consumiveis e farmaceuticos provenientes de parceiros SADC verificados. Ao servico do Malawi, Zambia, Mocambique e Africa do Sul.
          </p>
          <div style={{ display: "inline-block", background: "rgba(0,120,212,0.25)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "#90caf9", fontSize: "13px" }}>
            Taxa: 1 USD = MK 1,734 · Marco 2026 · Contacte para orcamentos formais
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>

        <SectionHead title="Equipamento de Proteccao — Mascaras" sub="Mascaras de proteccao certificadas para uso clinico e institucional." />
        <ProdTable rows={masks} />

        <SectionHead title="Dispositivos Respiratorios" sub="Suporte respiratorio para oxigenoterapia e nebulizacao." />
        <ProdTable rows={respiratory} />

        <SectionHead title="Luvas" sub="Luvas de exame, cirurgicas e descartaveis." />
        <ProdTable rows={gloves} />

        <SectionHead title="Seringas e Bisturis" />
        <ProdTable rows={syringes} />

        <SectionHead title="Desinfectantes e Alcool" />
        <ProdTable rows={disinfectants} />

        <SectionHead title="Instrumentos de Diagnostico" />
        <ProdTable rows={diagnostics} />

        <SectionHead title="Dispositivos de Monitorizacao" />
        <ProdTable rows={monitoring} />

        <SectionHead title="Laboratorio e Algodao" />
        <ProdTable rows={labCotton} />

        <SectionHead title="Mobiliario Hospitalar e Balancas" />
        <ProdTable rows={furniture} />

        <SectionHead title="Auxiliares de Mobilidade" />
        <ProdTable rows={mobility} />

        <SectionHead title="Medicamentos e Farmaceuticos" />
        <ProdTable rows={pharma} />

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid var(--fl-blue)", borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Informacao de Encomenda</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7, marginBottom: "20px" }}>Todo o material medico e adquirido atraves de parceiros grossistas verificados. Precos sob consulta para encomendas institucionais e a granel. Descontos disponiveis para hospitais, clinicas, ONGs e programas de saude governamentais. Contacte a TechNexus para orcamentos formais e acordos de cadeia de fornecimento.</p>
          <a href="https://wa.me/265889941700?text=Ola%20TechNexus%2C%20gostaria%20de%20um%20orcamento%20da%20pagina%20Material%20Medico." target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Pedir Orcamento
          </a>
        </div>

      </div>
    </div>
  );
}

