import type { Metadata } from "next";

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

type MedRow = { name: string; pack: string; mwk: string; usd: string; wa: string };

function MedTable({ rows }: { rows: MedRow[] }) {
  return (
    <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", borderRadius: "var(--radius)", marginBottom: "20px" }}>
      <table style={{ minWidth: "400px" }}>
        <thead>
          <tr>
            <th scope="col">Produto</th>
            <th scope="col">Embalagem</th>
            <th scope="col">MWK</th>
            <th scope="col">USD</th>
            <th scope="col">Quote</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="pn">{r.name}</td>
              <td>{r.pack}</td>
              <td className="mk">{r.mwk}</td>
              <td className="pr">{r.usd}</td>
              <td><a className="wa-row-quote" href={r.wa} target="_blank" rel="noopener">Quote</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const wa = (name: string, price: string) =>
  `https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20${encodeURIComponent(name)}%20${encodeURIComponent(price)}`;

const mascaras: MedRow[] = [
  { name: "Mascara Cirurgica 3 Camadas", pack: "1x50", mwk: "MK 5,120", usd: "$2.96", wa: wa("Mascara Cirurgica 3 Camadas", "$2.96") },
  { name: "Mascara KN95", pack: "1x1", mwk: "MK 590", usd: "$0.33", wa: wa("Mascara KN95", "$0.33") },
  { name: "Mascara N95", pack: "1x1", mwk: "MK 787", usd: "$0.45", wa: wa("Mascara N95", "$0.45") },
  { name: "Mascara NIOSH N95", pack: "1x20", mwk: "MK 31,507", usd: "$18.17", wa: wa("Mascara NIOSH N95", "$18.17") },
  { name: "Mascara KN95 com Filtro", pack: "1x10", mwk: "MK 5,907", usd: "$3.41", wa: wa("Mascara KN95 com Filtro", "$3.41") },
  { name: "Mascara FFP2", pack: "1x20", mwk: "MK 15,754", usd: "$9.09", wa: wa("Mascara FFP2", "$9.09") },
];

const respiratorios: MedRow[] = [
  { name: "Mascara de Nebulizacao", pack: "1x1", mwk: "MK 3,938", usd: "$2.28", wa: wa("Mascara de Nebulizacao", "$2.28") },
  { name: "Mascara de Oxigenio Simples", pack: "1x1", mwk: "MK 3,938", usd: "$2.28", wa: wa("Mascara de Oxigenio Simples", "$2.28") },
  { name: "Mascara de Oxigenio com Reservatorio", pack: "1x1", mwk: "MK 3,938", usd: "$2.28", wa: wa("Mascara de Oxigenio com Reservatorio", "$2.28") },
];

const luvas: MedRow[] = [
  { name: "Luvas de Nitrilo", pack: "1x100", mwk: "MK 13,785", usd: "$7.95", wa: wa("Luvas de Nitrilo", "$7.95") },
  { name: "Luvas de Exame", pack: "1x100", mwk: "MK 13,785", usd: "$7.95", wa: wa("Luvas de Exame", "$7.95") },
  { name: "Luvas Plasticas", pack: "1x100", mwk: "MK 1,969", usd: "$1.13", wa: wa("Luvas Plasticas", "$1.13") },
  { name: "Luvas Cirurgicas", pack: "1x50 pares", mwk: "MK 33,476", usd: "$19.30", wa: wa("Luvas Cirurgicas", "$19.30") },
  { name: "Luvas Ginecologicas", pack: "1x25 pares", mwk: "MK 47,261", usd: "$27.26", wa: wa("Luvas Ginecologicas", "$27.26") },
];

const seringas: MedRow[] = [
  { name: "Seringas Insulina 1ml + Agulhas", pack: "1x100", mwk: "MK 20,677", usd: "$11.92", wa: wa("Seringas Insulina 1ml + Agulhas", "$11.92") },
  { name: "Seringas LUER LOCK 5ml", pack: "1x100", mwk: "MK 21,662", usd: "$12.50", wa: wa("Seringas LUER LOCK 5ml", "$12.50") },
  { name: "Seringas LUER LOCK 10/20/50ml", pack: "various", mwk: "MK 23,631", usd: "$13.63", wa: wa("Seringas LUER LOCK 10/20/50ml", "$13.63") },
  { name: "Seringas LUER SLIP 3ml", pack: "1x100", mwk: "MK 20,677", usd: "$11.92", wa: wa("Seringas LUER SLIP 3ml", "$11.92") },
  { name: "Seringas LUER SLIP 5ml & 10ml", pack: "1x100", mwk: "MK 19,692", usd: "$11.35", wa: wa("Seringas LUER SLIP 5ml & 10ml", "$11.35") },
  { name: "Lamina Bisturi #11", pack: "1x100", mwk: "MK 17,723", usd: "$10.22", wa: wa("Lamina Bisturi #11", "$10.22") },
  { name: "Lamina Bisturi #15", pack: "1x100", mwk: "MK 17,723", usd: "$10.22", wa: wa("Lamina Bisturi #15", "$10.22") },
  { name: "Lamina Bisturi #20", pack: "1x100", mwk: "MK 17,723", usd: "$10.22", wa: wa("Lamina Bisturi #20", "$10.22") },
];

const desinfectantes: MedRow[] = [
  { name: "Gel Alcoolico 70% 100ml", pack: "1x1", mwk: "MK 2,364", usd: "$1.36", wa: wa("Gel Alcoolico 70% 100ml", "$1.36") },
  { name: "Alcool Etilico 70% 100ml", pack: "1x1", mwk: "MK 2,364", usd: "$1.36", wa: wa("Alcool Etilico 70% 100ml", "$1.36") },
  { name: "Alcool Etilico 70% 250ml", pack: "1x1", mwk: "MK 5,120", usd: "$2.96", wa: wa("Alcool Etilico 70% 250ml", "$2.96") },
  { name: "Alcool Etilico 70% 500ml", pack: "1x1", mwk: "MK 7,876", usd: "$4.54", wa: wa("Alcool Etilico 70% 500ml", "$4.54") },
  { name: "Alcool Etilico 70% 1000ml", pack: "1x1", mwk: "MK 10,830", usd: "$6.25", wa: wa("Alcool Etilico 70% 1000ml", "$6.25") },
  { name: "Alcool Etilico 70% 5L", pack: "1x1", mwk: "MK 35,445", usd: "$20.45", wa: wa("Alcool Etilico 70% 5L", "$20.45") },
  { name: "Gel Alcoolico 70% 5L", pack: "1x1", mwk: "MK 39,385", usd: "$22.71", wa: wa("Gel Alcoolico 70% 5L", "$22.71") },
  { name: "Gel para Ecografia 5L", pack: "1x1", mwk: "MK 39,385", usd: "$22.71", wa: wa("Gel para Ecografia 5L", "$22.71") },
];

const diagnostico: MedRow[] = [
  { name: "Estetoscopio Profissional", pack: "1x1", mwk: "MK 15,754", usd: "$9.09", wa: wa("Estetoscopio Profissional", "$9.09") },
  { name: "Estetoscopio Dual Profissional", pack: "1x1", mwk: "MK 17,723", usd: "$10.22", wa: wa("Estetoscopio Dual Profissional", "$10.22") },
  { name: "Esfigmomanometro Digital", pack: "1x1", mwk: "MK 51,200", usd: "$29.52", wa: wa("Esfigmomanometro Digital", "$29.52") },
  { name: "Kit Estetoscopio + Esfigmomanometro", pack: "1x1", mwk: "MK 47,261", usd: "$27.26", wa: wa("Kit Estetoscopio + Esfigmomanometro", "$27.26") },
  { name: "Otoscopio", pack: "1x1", mwk: "MK 118,153", usd: "$68.14", wa: wa("Otoscopio", "$68.14") },
  { name: "Oximetro de Pulso Digital", pack: "1x1", mwk: "MK 27,569", usd: "$15.89", wa: wa("Oximetro de Pulso Digital", "$15.89") },
  { name: "Termometro Digital", pack: "1x1", mwk: "MK 5,120", usd: "$2.96", wa: wa("Termometro Digital", "$2.96") },
];

const monitorizacao: MedRow[] = [
  { name: "Termometro de Mercurio", pack: "1x1", mwk: "MK 3,938", usd: "$2.28", wa: wa("Termometro de Mercurio", "$2.28") },
  { name: "Termometro Infravermelho", pack: "1x1", mwk: "MK 23,631", usd: "$13.63", wa: wa("Termometro Infravermelho", "$13.63") },
  { name: "Relogio de Bolso", pack: "1x1", mwk: "MK 5,907", usd: "$3.41", wa: wa("Relogio de Bolso", "$3.41") },
  { name: "Lanterna de Exame", pack: "1x1", mwk: "MK 7,876", usd: "$4.54", wa: wa("Lanterna de Exame", "$4.54") },
  { name: "Torniquete", pack: "1x1", mwk: "MK 5,907", usd: "$3.41", wa: wa("Torniquete", "$3.41") },
  { name: "Medidor de Fluxo de Oxigenio", pack: "1x1", mwk: "MK 78,768", usd: "$45.43", wa: wa("Medidor de Fluxo de Oxigenio", "$45.43") },
  { name: "Ressuscitador Ambu", pack: "1x1", mwk: "MK 118,153", usd: "$68.14", wa: wa("Ressuscitador Ambu", "$68.14") },
  { name: "Debito-Metrometro de Pico", pack: "1x1", mwk: "MK 27,569", usd: "$15.89", wa: wa("Debito-Metrometro de Pico", "$15.89") },
  { name: "Debito-Metrometro Pediatrico", pack: "1x1", mwk: "MK 51,200", usd: "$29.52", wa: wa("Debito-Metrometro Pediatrico", "$29.52") },
  { name: "Canula Nasal de Oxigenio", pack: "1x1", mwk: "MK 2,954", usd: "$1.70", wa: wa("Canula Nasal de Oxigenio", "$1.70") },
  { name: "Estetoscopio Fetal", pack: "1x1", mwk: "MK 11,815", usd: "$6.82", wa: wa("Estetoscopio Fetal", "$6.82") },
  { name: "Infantometro", pack: "1x1", mwk: "MK 82,707", usd: "$47.69", wa: wa("Infantometro", "$47.69") },
  { name: "Organizador Semanal Tipo 1", pack: "1x1", mwk: "MK 5,907", usd: "$3.41", wa: wa("Organizador Semanal Tipo 1", "$3.41") },
  { name: "Organizador Semanal Tipo 2", pack: "1x1", mwk: "MK 2,756", usd: "$1.59", wa: wa("Organizador Semanal Tipo 2", "$1.59") },
  { name: "Copo de Colheita de Urina 60ml", pack: "1x1", mwk: "MK 590", usd: "$0.33", wa: wa("Copo de Colheita de Urina 60ml", "$0.33") },
  { name: "Nebulizador", pack: "1x1", mwk: "MK 98,461", usd: "$56.78", wa: wa("Nebulizador", "$56.78") },
  { name: "Kit de Primeiros Socorros", pack: "1x1", mwk: "MK 27,569", usd: "$15.89", wa: wa("Kit de Primeiros Socorros", "$15.89") },
  { name: "Caixa de Cadeia de Frio", pack: "1x1", mwk: "MK 157,538", usd: "$90.86", wa: wa("Caixa de Cadeia de Frio", "$90.86") },
];

const laboratorio: MedRow[] = [
  { name: "Seladora de Embalagens", pack: "1x1", mwk: "MK 492,305", usd: "$283.91", wa: wa("Seladora de Embalagens", "$283.91") },
  { name: "Saco de Gelo", pack: "1x1", mwk: "MK 3,938", usd: "$2.28", wa: wa("Saco de Gelo", "$2.28") },
  { name: "Tubos de Sangue Amarelos", pack: "1x100", mwk: "MK 43,323", usd: "$24.98", wa: wa("Tubos de Sangue Amarelos", "$24.98") },
  { name: "Suporte de Tubos de Laboratorio", pack: "1x1", mwk: "MK 24,615", usd: "$14.20", wa: wa("Suporte de Tubos de Laboratorio", "$14.20") },
  { name: "Tubos de Sangue Roxos 4ml", pack: "1x100", mwk: "MK 33,476", usd: "$19.30", wa: wa("Tubos de Sangue Roxos 4ml", "$19.30") },
  { name: "Bolas de Algodao 50g", pack: "1x100", mwk: "MK 3,938", usd: "$2.28", wa: wa("Bolas de Algodao 50g", "$2.28") },
  { name: "Fio de Sutura 75cm", pack: "1x1", mwk: "MK 51,200", usd: "$29.52", wa: wa("Fio de Sutura 75cm", "$29.52") },
  { name: "Fio de Sutura 90cm", pack: "1x1", mwk: "MK 63,016", usd: "$36.34", wa: wa("Fio de Sutura 90cm", "$36.34") },
  { name: "Rolo de Algodao Absorvente 50g", pack: "1x1", mwk: "MK 1,969", usd: "$1.13", wa: wa("Rolo de Algodao Absorvente 50g", "$1.13") },
  { name: "Rolo de Algodao Absorvente 100g", pack: "1x1", mwk: "MK 3,151", usd: "$1.81", wa: wa("Rolo de Algodao Absorvente 100g", "$1.81") },
  { name: "Rolo de Algodao Absorvente 500g", pack: "1x1", mwk: "MK 9,846", usd: "$5.68", wa: wa("Rolo de Algodao Absorvente 500g", "$5.68") },
  { name: "Gaze Nao Esteril 5x5cm", pack: "1x100", mwk: "MK 3,938", usd: "$2.28", wa: wa("Gaze Nao Esteril 5x5cm", "$2.28") },
  { name: "Gaze Nao Esteril 7.5x7.5cm", pack: "1x100", mwk: "MK 6,302", usd: "$3.64", wa: wa("Gaze Nao Esteril 7.5x7.5cm", "$3.64") },
  { name: "Gaze Esteril 10x10cm", pack: "1x50", mwk: "MK 15,360", usd: "$8.86", wa: wa("Gaze Esteril 10x10cm", "$8.86") },
  { name: "Gaze Nao Esteril 10x10cm", pack: "1x100", mwk: "MK 8,271", usd: "$4.77", wa: wa("Gaze Nao Esteril 10x10cm", "$4.77") },
  { name: "Ligadura de Gaze 7.5cm", pack: "1x12", mwk: "MK 3,938", usd: "$2.28", wa: wa("Ligadura de Gaze 7.5cm", "$2.28") },
  { name: "Ligadura de Gaze 10cm", pack: "1x12", mwk: "MK 6,302", usd: "$3.64", wa: wa("Ligadura de Gaze 10cm", "$3.64") },
  { name: "Fita de Oxido de Zinco 2.5cm", pack: "1x1", mwk: "MK 1,969", usd: "$1.13", wa: wa("Fita de Oxido de Zinco 2.5cm", "$1.13") },
  { name: "Fita de Oxido de Zinco 5cm", pack: "1x1", mwk: "MK 2,364", usd: "$1.36", wa: wa("Fita de Oxido de Zinco 5cm", "$1.36") },
  { name: "Fita de Oxido de Zinco 7.5cm", pack: "1x1", mwk: "MK 2,954", usd: "$1.70", wa: wa("Fita de Oxido de Zinco 7.5cm", "$1.70") },
  { name: "Pensos Transparentes", pack: "1x100", mwk: "MK 3,938", usd: "$2.28", wa: wa("Pensos Transparentes", "$2.28") },
  { name: "Toucas Descartaveis", pack: "1x100", mwk: "MK 9,846", usd: "$5.68", wa: wa("Toucas Descartaveis", "$5.68") },
  { name: "Absorvente Descartavel", pack: "1x10", mwk: "MK 17,723", usd: "$10.22", wa: wa("Absorvente Descartavel", "$10.22") },
  { name: "Lencol Cirurgico", pack: "1x50", mwk: "MK 27,569", usd: "$15.89", wa: wa("Lencol Cirurgico", "$15.89") },
  { name: "Saco de Colheita de Urina", pack: "1x1", mwk: "MK 1,969", usd: "$1.13", wa: wa("Saco de Colheita de Urina", "$1.13") },
  { name: "Fato-Macaco Impermeavel", pack: "1x1", mwk: "MK 11,815", usd: "$6.82", wa: wa("Fato-Macaco Impermeavel", "$6.82") },
  { name: "Conjunto Scrub", pack: "1x1", mwk: "MK 35,445", usd: "$20.45", wa: wa("Conjunto Scrub", "$20.45") },
  { name: "Bata Descartavel de Visita", pack: "1x1", mwk: "MK 3,151", usd: "$1.81", wa: wa("Bata Descartavel de Visita", "$1.81") },
  { name: "Avental Branco Descartavel", pack: "1x100", mwk: "MK 18,511", usd: "$10.67", wa: wa("Avental Branco Descartavel", "$10.67") },
  { name: "Oculos de Seguranca", pack: "1x1", mwk: "MK 3,938", usd: "$2.28", wa: wa("Oculos de Seguranca", "$2.28") },
  { name: "Caixa de Residuos Cortantes", pack: "1x1", mwk: "MK 2,756", usd: "$1.59", wa: wa("Caixa de Residuos Cortantes", "$1.59") },
  { name: "Modelo de Esqueleto Humano", pack: "1x1", mwk: "MK 1,063,379", usd: "$613.25", wa: wa("Modelo de Esqueleto Humano", "$613.25") },
  { name: "Rolo de Esterilizacao 100x200mm", pack: "1x1", mwk: "MK 59,076", usd: "$34.07", wa: wa("Rolo de Esterilizacao 100x200mm", "$34.07") },
  { name: "Rolo de Esterilizacao 250x50mm", pack: "1x1", mwk: "MK 63,016", usd: "$36.34", wa: wa("Rolo de Esterilizacao 250x50mm", "$36.34") },
  { name: "Rolo de Esterilizacao 150x200mm", pack: "1x1", mwk: "MK 78,768", usd: "$45.43", wa: wa("Rolo de Esterilizacao 150x200mm", "$45.43") },
  { name: "Rolo de Esterilizacao 250x200mm", pack: "1x1", mwk: "MK 118,153", usd: "$68.14", wa: wa("Rolo de Esterilizacao 250x200mm", "$68.14") },
];

const mobiliario: MedRow[] = [
  { name: "Escadote para Mesa de Exame", pack: "1x1", mwk: "MK 157,538", usd: "$90.86", wa: wa("Escadote para Mesa de Exame", "$90.86") },
  { name: "Cadeira de Banho e Higiene", pack: "1x1", mwk: "MK 275,691", usd: "$158.99", wa: wa("Cadeira de Banho e Higiene", "$158.99") },
  { name: "Armario de Cabeceira", pack: "1x1", mwk: "MK 275,691", usd: "$158.99", wa: wa("Armario de Cabeceira", "$158.99") },
  { name: "Mesa Mayo", pack: "1x1", mwk: "MK 236,306", usd: "$136.27", wa: wa("Mesa Mayo", "$136.27") },
  { name: "Berco Hospitalar", pack: "1x1", mwk: "MK 433,228", usd: "$249.85", wa: wa("Berco Hospitalar", "$249.85") },
  { name: "Almofada", pack: "1x1", mwk: "MK 39,385", usd: "$22.71", wa: wa("Almofada", "$22.71") },
  { name: "Colchao Anti-Escaras", pack: "1x1", mwk: "MK 177,229", usd: "$102.21", wa: wa("Colchao Anti-Escaras", "$102.21") },
  { name: "Colchao", pack: "1x1", mwk: "MK 315,075", usd: "$181.70", wa: wa("Colchao", "$181.70") },
  { name: "Mesa de Massagem / Tratamento", pack: "1x1", mwk: "MK 472,613", usd: "$272.56", wa: wa("Mesa de Massagem / Tratamento", "$272.56") },
  { name: "Mesa de Exame Ginecologico", pack: "1x1", mwk: "MK 590,766", usd: "$340.69", wa: wa("Mesa de Exame Ginecologico", "$340.69") },
  { name: "Mesa de Observacao", pack: "1x1", mwk: "MK 551,381", usd: "$317.99", wa: wa("Mesa de Observacao", "$317.99") },
  { name: "Cama Hospitalar Articulada", pack: "1x1", mwk: "MK 708,920", usd: "$408.83", wa: wa("Cama Hospitalar Articulada", "$408.83") },
  { name: "Cama Hospitalar", pack: "1x1", mwk: "MK 630,150", usd: "$363.41", wa: wa("Cama Hospitalar", "$363.41") },
  { name: "Panela de Esterilizacao 23cm", pack: "1x1", mwk: "MK 98,461", usd: "$56.78", wa: wa("Panela de Esterilizacao 23cm", "$56.78") },
  { name: "Panela de Esterilizacao 26cm", pack: "1x1", mwk: "MK 108,308", usd: "$62.47", wa: wa("Panela de Esterilizacao 26cm", "$62.47") },
  { name: "Panela de Esterilizacao 30cm", pack: "1x1", mwk: "MK 118,153", usd: "$68.14", wa: wa("Panela de Esterilizacao 30cm", "$68.14") },
  { name: "Balanca Pediatrica Digital (plana)", pack: "1x1", mwk: "MK 118,153", usd: "$68.14", wa: wa("Balanca Pediatrica Digital plana", "$68.14") },
  { name: "Balanca Pediatrica Digital (sentada)", pack: "1x1", mwk: "MK 196,922", usd: "$113.56", wa: wa("Balanca Pediatrica Digital sentada", "$113.56") },
  { name: "Balanca de Adulto", pack: "1x1", mwk: "MK 47,261", usd: "$27.26", wa: wa("Balanca de Adulto", "$27.26") },
  { name: "Balanca Manual c/ Altimetro", pack: "1x1", mwk: "MK 472,613", usd: "$272.56", wa: wa("Balanca Manual c/ Altimetro", "$272.56") },
  { name: "Balanca Mecanica c/ Altimetro", pack: "1x1", mwk: "MK 551,381", usd: "$317.99", wa: wa("Balanca Mecanica c/ Altimetro", "$317.99") },
  { name: "Balanca Electronica c/ Altimetro", pack: "1x1", mwk: "MK 551,381", usd: "$317.99", wa: wa("Balanca Electronica c/ Altimetro", "$317.99") },
  { name: "Cadeira de Rodas Electrica", pack: "1x1", mwk: "MK 2,166,142", usd: "$1,249.22", wa: wa("Cadeira de Rodas Electrica", "$1249.22") },
  { name: "Cadeira de Rodas Adulto", pack: "1x1", mwk: "MK 393,845", usd: "$227.13", wa: wa("Cadeira de Rodas Adulto", "$227.13") },
  { name: "Arrastadeira com Tampa", pack: "1x1", mwk: "MK 98,461", usd: "$56.78", wa: wa("Arrastadeira com Tampa", "$56.78") },
  { name: "Urinol Plastico", pack: "1x1", mwk: "MK 39,385", usd: "$22.71", wa: wa("Urinol Plastico", "$22.71") },
  { name: "Especulo Vaginal Tam. L", pack: "1x1", mwk: "MK 47,261", usd: "$27.26", wa: wa("Especulo Vaginal Tam. L", "$27.26") },
  { name: "Martelo de Reflexos", pack: "1x1", mwk: "MK 11,815", usd: "$6.82", wa: wa("Martelo de Reflexos", "$6.82") },
];

const mobilidade: MedRow[] = [
  { name: "Andarilho Standard", pack: "1x1", mwk: "MK 86,646", usd: "$49.97", wa: wa("Andarilho Standard", "$49.97") },
  { name: "Bengala Standard", pack: "1x1", mwk: "MK 15,754", usd: "$9.09", wa: wa("Bengala Standard", "$9.09") },
  { name: "Muletas", pack: "1x2", mwk: "MK 86,646", usd: "$49.97", wa: wa("Muletas", "$49.97") },
  { name: "Bengala com Assento", pack: "1x1", mwk: "MK 35,445", usd: "$20.45", wa: wa("Bengala com Assento", "$20.45") },
  { name: "Bengala Quadripode", pack: "1x1", mwk: "MK 31,507", usd: "$18.17", wa: wa("Bengala Quadripode", "$18.17") },
  { name: "Bengala Quadripode Inox", pack: "1x1", mwk: "MK 35,445", usd: "$20.45", wa: wa("Bengala Quadripode Inox", "$20.45") },
  { name: "Bengala Dobravelzinco", pack: "1x1", mwk: "MK 19,692", usd: "$11.35", wa: wa("Bengala Dobravel", "$11.35") },
];

const medicamentos: MedRow[] = [
  { name: "AQUAFEN PLUS — Gel Diclofenac", pack: "1x1", mwk: "MK 5,317", usd: "$3.06", wa: wa("AQUAFEN PLUS Gel Diclofenac", "$3.06") },
  { name: "IBUWIN-100 — Suspensao Ibuprofeno", pack: "1x1", mwk: "MK 4,096", usd: "$2.36", wa: wa("IBUWIN-100 Suspensao Ibuprofeno", "$2.36") },
  { name: "FEM-RED XT — Ferroso + Acido Folico", pack: "1x10", mwk: "MK 4,016", usd: "$2.32", wa: wa("FEM-RED XT Ferroso Acido Folico", "$2.32") },
  { name: "VOLIGESIC PLUS — Paracetamol", pack: "10x10", mwk: "MK 6,341", usd: "$3.65", wa: wa("VOLIGESIC PLUS Paracetamol", "$3.65") },
  { name: "SCOTRIZOL — Cotrimoxazol", pack: "100ml", mwk: "MK 4,016", usd: "$2.32", wa: wa("SCOTRIZOL Cotrimoxazol", "$2.32") },
  { name: "SCONAZ — Fluconazole 150mg", pack: "1x1", mwk: "MK 2,639", usd: "$1.52", wa: wa("SCONAZ Fluconazole 150mg", "$1.52") },
  { name: "IBUWIN-400mg — Ibuprofeno", pack: "10x10", mwk: "MK 6,853", usd: "$3.96", wa: wa("IBUWIN-400mg Ibuprofeno", "$3.96") },
  { name: "SCORT — Triamcinolone Inj.", pack: "1x1", mwk: "MK 12,879", usd: "$7.42", wa: wa("SCORT Triamcinolone Inj.", "$7.42") },
  { name: "GLUSCOT — Metformina 500mg", pack: "10x10", mwk: "MK 8,507", usd: "$4.90", wa: wa("GLUSCOT Metformina 500mg", "$4.90") },
  { name: "Teste Rapido Malaria (25)", pack: "1x25", mwk: "MK 78,768", usd: "$45.43", wa: wa("Teste Rapido Malaria 25", "$45.43") },
  { name: "Teste Rapido HIV (50)", pack: "1x50", mwk: "MK 97,279", usd: "$56.10", wa: wa("Teste Rapido HIV 50", "$56.10") },
  { name: "VIGROSE-BLUE — Sildenafil", pack: "1x4", mwk: "MK 3,938", usd: "$2.28", wa: wa("VIGROSE-BLUE Sildenafil", "$2.28") },
  { name: "INFUMOX — Suspensao Amoxicilina", pack: "100ml", mwk: "MK 4,135", usd: "$2.38", wa: wa("INFUMOX Suspensao Amoxicilina", "$2.38") },
  { name: "FEBREX PLUS — Anti-Gripe", pack: "2x10", mwk: "MK 2,088", usd: "$1.20", wa: wa("FEBREX PLUS Anti-Gripe", "$1.20") },
  { name: "SALBUTAMOL-NC — Salbutamol", pack: "100ml", mwk: "MK 2,364", usd: "$1.36", wa: wa("SALBUTAMOL-NC Salbutamol", "$1.36") },
  { name: "ERYTHROMEX — Eritromicina", pack: "10x10", mwk: "MK 31,114", usd: "$17.94", wa: wa("ERYTHROMEX Eritromicina", "$17.94") },
  { name: "CIPROFITAB — Ciprofloxacina", pack: "10x10", mwk: "MK 20,874", usd: "$12.04", wa: wa("CIPROFITAB Ciprofloxacina", "$12.04") },
];

export default function PTMedicalSuppliesPage() {
  return (
    <>
      {/* PT nav strip */}
      <div style={{ background: "var(--surface-alt, #1a1a2e)", borderBottom: "1px solid var(--border)", padding: "6px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: ".82rem", flexWrap: "wrap", gap: "6px" }}>
        <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/pt">Inicio</a>
          <a href="/pt/catalogue">Catalogo IT</a>
          <a href="/pt/computer-assembly">Montagem PC</a>
          <a href="/pt/language-services">Servicos Linguisticos</a>
          <a href="/pt/medical-supplies" style={{ fontWeight: 700, color: "var(--fl-blue, #4f8ef7)" }}>Material Medico</a>
          <a href="/pt/software-development">Software</a>
          <a href="/pt/credentials">Credenciais</a>
        </nav>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="/medical-supplies">EN</a>
          <span style={{ fontWeight: 700, color: "var(--fl-blue, #4f8ef7)" }}>PT</span>
          <a href="/ny/medical-supplies">NY</a>
        </div>
      </div>

      <div className="hero">
        <h2>Catalogo de Material Medico</h2>
        <p>Equipamento de saude, consumiveis e farmaceuticos provenientes de parceiros SADC verificados. Ao servico do Malawi, Zambia, Mocambique e Africa do Sul.</p>
        <div className="pill">Taxa: 1 USD = MK 1.734 · Marco 2026 · Contacte para orcamentos formais</div>
      </div>

      <div className="content">
        <div className="sh"><h2>Equipamento de Proteccao -- Mascaras</h2><p className="sd">Mascaras de proteccao certificadas para uso clinico e institucional.</p></div>
        <MedTable rows={mascaras} />

        <div className="sh"><h2>Dispositivos Respiratorios</h2><p className="sd">Suporte respiratorio para oxigenoterapia e nebulizacao.</p></div>
        <MedTable rows={respiratorios} />

        <div className="sh"><h2>Luvas</h2><p className="sd">Luvas de exame, cirurgicas e descartaveis.</p></div>
        <MedTable rows={luvas} />

        <div className="sh"><h2>Seringas &amp; Bisturis</h2></div>
        <MedTable rows={seringas} />

        <div className="sh"><h2>Desinfectantes &amp; Alcool</h2></div>
        <MedTable rows={desinfectantes} />

        <div className="sh"><h2>Instrumentos de Diagnostico</h2></div>
        <MedTable rows={diagnostico} />

        <div className="sh"><h2>Dispositivos de Monitorizacao</h2></div>
        <MedTable rows={monitorizacao} />

        <div className="sh"><h2>Laboratorio &amp; Algodao</h2></div>
        <MedTable rows={laboratorio} />

        <div className="sh"><h2>Mobiliario Hospitalar &amp; Balancas</h2></div>
        <MedTable rows={mobiliario} />

        <div className="sh"><h2>Auxiliares de Mobilidade</h2></div>
        <MedTable rows={mobilidade} />

        <div className="sh"><h2>Medicamentos &amp; Farmaceuticos</h2></div>
        <MedTable rows={medicamentos} />

        <div className="compliance">
          <h3>Informacoes de Encomenda</h3>
          <p>Todo o material medico e proveniente de parceiros grossistas verificados. Precos mediante consulta para encomendas institucionais e a granel. Descontos disponiveis para hospitais, clinicas, ONGs e programas de saude governamentais.</p>
        </div>
      </div>

      <div className="quote-bar">
        <p><strong>Pronto para encomendar?</strong> Contacte-nos para um orcamento formal, precos de volume ou para organizar a entrega.</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a className="quote-bar-btn" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20from%20the%20Material%20Medico%20page." target="_blank" rel="noopener">Pedir Orcamento via WhatsApp</a>
        </div>
      </div>
    </>
  );
}
