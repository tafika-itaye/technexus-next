import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TechNexus Scripts — Servicos Linguisticos & Consultoria",
  description: "TechNexus Scripts — traducao, transcricao, consultoria de concursos e registo de empresas. Blantyre, Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/pt/language-services",
    languages: {
      "en": "https://www.technexusmw.com/language-services",
      "pt": "https://www.technexusmw.com/pt/language-services",
      "ny": "https://www.technexusmw.com/ny/language-services",
    },
  },
};

const langServices = [
  { name: "Traducao de Documentos", langs: "EN↔PT, EN↔NY, EN↔SW", unit: "por pagina (250 palavras)", mwk: "MK 17.340", usd: "$10", wa: "Traducao%20de%20Documentos%0APreco%3A%20%2410" },
  { name: "Traducao Certificada", langs: "EN↔PT, EN↔NY", unit: "por pagina (250 palavras)", mwk: "MK 26.010", usd: "$15", wa: "Traducao%20Certificada%0APreco%3A%20%2415" },
  { name: "Transcricao Audio", langs: "EN, PT, NY, SW", unit: "por hora de audio", mwk: "MK 86.700", usd: "$50", wa: "Transcricao%20Audio%0APreco%3A%20%2450" },
  { name: "Transcricao + Traducao", langs: "EN↔PT, EN↔NY", unit: "por hora de audio", mwk: "MK 138.720", usd: "$80", wa: "Transcricao%20%2B%20Traducao%0APreco%3A%20%2480" },
  { name: "Legendagem / Legendas", langs: "EN, PT, NY, SW", unit: "por minuto de video", mwk: "MK 8.670", usd: "$5", wa: "Legendagem%0APreco%3A%20%245" },
  { name: "Interpretacao Consecutiva", langs: "EN↔PT, EN↔NY", unit: "por hora", mwk: "MK 121.380", usd: "$70", wa: "Interpretacao%20Consecutiva%0APreco%3A%20%2470" },
  { name: "Interpretacao de Conferencia", langs: "EN↔PT, EN↔NY", unit: "por meio dia", mwk: "MK 346.800", usd: "$200", wa: "Interpretacao%20de%20Conferencia%0APreco%3A%20%24200" },
  { name: "Formacao Linguistica", langs: "EN, PT, NY, SW", unit: "por hora (grupo)", mwk: "MK 69.360", usd: "$40", wa: "Formacao%20Linguistica%0APreco%3A%20%2440" },
  { name: "Revisao e Edicao", langs: "EN, PT", unit: "por pagina", mwk: "MK 8.670", usd: "$5", wa: "Revisao%20e%20Edicao%0APreco%3A%20%245" },
  { name: "Localizacao Website / App", langs: "EN↔PT, EN↔NY", unit: "orcamento personalizado", mwk: "a partir de MK 346.800", usd: "a partir de $200", wa: "Localizacao%20Website%20App%0APreco%3A%20a%20partir%20de%20%24200" },
];

const tenderServices = [
  { name: "Registo de Pre-Qualificacao", desc: "Formularios de registo de fornecedores, perfis de empresa, documentos de conformidade", mwk: "MK 100.000" },
  { name: "Resposta a Concurso Simples", desc: "Concursos por cotacao, RFQs, documentos de proposta simples", mwk: "MK 200.000" },
  { name: "Resposta a Concurso Complexo", desc: "Propostas completas, propostas tecnicas e financeiras, declaracoes metodologicas, RFPs", mwk: "MK 450.000" },
  { name: "Revisao de Conformidade", desc: "Verificar documentos concluidos quanto a erros, campos em falta, lacunas de conformidade", mwk: "MK 75.000" },
  { name: "Traducao de Documentos de Concurso", desc: "Traduzir documentos de concurso: Ingles, Portugues, Chichewa, Swahili", mwk: "MK 7.000/pagina" },
];

const localReg = [
  { name: "Registo MSME / Nome Comercial", desc: "Registar nome comercial ou MSME com MBRS", mwk: "MK 50.000" },
  { name: "Constituicao de Empresa", desc: "Registo de Sociedade por Quotas com MBRS. Memorando, estatutos, alocacao de accoes", mwk: "MK 150.000" },
  { name: "Registo TPIN", desc: "NIF do contribuinte com Autoridade Tributaria do Malawi. Necessario para conformidade fiscal e procurement", mwk: "MK 30.000" },
  { name: "Registo IVA MRA", desc: "Registo de IVA para empresas que excedam o limiar de volume de negocios da MRA", mwk: "MK 50.000" },
  { name: "Registo de Fornecedor PPDA", desc: "Registar como fornecedor no portal da Autoridade de Procurement e Alienacao de Activos Publicos", mwk: "MK 80.000" },
  { name: "Registo MANePS", desc: "Sistema Nacional de Procurement Electronico do Malawi — necessario para concursos governamentais", mwk: "MK 80.000" },
  { name: "Licenciamento TEVETA / Sectorial", desc: "Licenciamento pela Autoridade de Educacao e Formacao Tecnica, Empresarial e Vocacional", mwk: "MK 100.000" },
  { name: "Relatorios Anuais e Revisao de Conformidade", desc: "Preparar e submeter relatorios anuais da empresa, rever estado de conformidade em todos os registos", mwk: "MK 60.000" },
];

const crossBorderReg = [
  { country: "Zambia", name: "Registo PACRA", desc: "Agencia de Registo de Patentes e Empresas — pesquisa, reserva e registo de nome de empresa", mwk: "MK 200.000" },
  { country: "Zambia", name: "TPIN / Registo Fiscal ZRA", desc: "Registo de contribuinte da Autoridade Tributaria da Zambia para operar na Zambia", mwk: "MK 100.000" },
  { country: "Mocambique", name: "Registo CPPME / NUIT", desc: "Registo comercial no CPPME e numero fiscal (NUIT) na AT-Mocambique. Inclui preparacao de documentos em Portugues", mwk: "MK 250.000" },
  { country: "Mocambique", name: "Alvara Comercial", desc: "Licenca comercial municipal. Necessaria para operacoes formais em Mocambique", mwk: "MK 150.000" },
  { country: "Africa do Sul", name: "Registo CIPC", desc: "Registo na Comissao de Empresas e Propriedade Intelectual. Empresa privada (Pty Ltd) ou NPC", mwk: "MK 300.000" },
  { country: "Africa do Sul", name: "Numero Fiscal SARS", desc: "Registo no Servico de Receitas da Africa do Sul para imposto sobre o rendimento e IVA", mwk: "MK 120.000" },
  { country: "Multi-pais", name: "Pacote Completo de Registo", desc: "Registo de empresa, numero fiscal e licenca de operacao num unico pais. Inclui toda a traducao de documentos e coordenacao de agentes", mwk: "MK 400.000" },
];

const langPairs = [
  { pair: "Ingles para/de Portugues", body: "Documentos, contratos, correspondencia, registos medicos, instrumentos juridicos. Clientes diplomaticos e institucionais." },
  { pair: "Ingles para/de Chichewa", body: "Saude comunitaria, comunicacoes governamentais, materiais educativos, documentacao de trabalho de campo de ONGs." },
  { pair: "Ingles para/de Swahili", body: "Comercio transfronteirico, comunicacoes de ONGs da Africa Oriental, media e radiodifusao." },
  { pair: "Portugues para/de Chichewa", body: "Corredor Malawi-Mocambique: documentacao fronteiriça, acordos comerciais, materiais consulares." },
];

const sectors = [
  { title: "Missoes Diplomaticas", body: "Correspondencia consular, notas diplomaticas, documentacao de vistos, materiais de protocolo. Discrição garantida." },
  { title: "Saude", body: "Registos de pacientes, documentacao de ensaios clinicos, manuais de dispositivos medicos. Manuseamento em conformidade com HIPAA." },
  { title: "Juridico e Conformidade", body: "Contratos, declaracoes juradas, documentos judiciais, quadros de conformidade. Traducoes certificadas disponiveis." },
  { title: "Empresarial e ONG", body: "Relatorios anuais, politica de RH, documentacao de projectos, relatorios de doadores, materiais de conselho." },
  { title: "Procurement e Concursos", body: "Pacotes de pre-qualificacao, respostas a concursos, documentos RFQ, revisoes de conformidade. Servico a preco fixo." },
  { title: "Negocios Transfronteiricos", body: "Registo de empresas, conformidade fiscal, licencas de operacao no Malawi, Zambia, Mocambique e Africa do Sul." },
  { title: "Media e Radiodifusao", body: "Legendagem para filmes, documentarios, videos de formacao e conteudos de e-learning." },
  { title: "Educacao", body: "Materiais curriculares, localizacao de manuais, manuais de formacao, exames." },
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

const WA_BASE = "https://wa.me/265889941700?text=Hi%20TechNexus%2C%20gostaria%20de%20um%20orcamento%20para%3A%0A";

function QuoteBtn({ text }: { text: string }) {
  return (
    <a href={WA_BASE + text} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" as const }}>
      Quote
    </a>
  );
}

export default function PTLanguageServicesPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      <div style={{ position: "relative", padding: "64px 40px 48px", textAlign: "center", backgroundImage: "url(/index_main/language_services_hero.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
          TechNexus Scripts — Servicos Linguisticos &amp; Consultoria
        </h1>
        <p style={{ color: "#999", fontSize: "15px", maxWidth: "680px", margin: "0 auto 20px", lineHeight: 1.7 }}>
          Traducao, transcricao, legendagem, interpretacao e formacao linguistica profissional. Ao servico de missoes diplomaticas, ONGs, instituicoes de saude e clientes privados em toda a Africa Austral e Oriental.
        </p>
        <div style={{ display: "inline-block", background: "rgba(0,120,212,0.15)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "var(--fl-blue)", fontSize: "13px" }}>
          Ingles · Portugues · Chichewa · Swahili · Conformidade HIPAA/RGPD
        </div>
      </div>

      </div>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Servicos Linguisticos e Precos</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "24px" }}>Precos excluem IVA de 17,5%. Descontos por volume disponiveis.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "520px" }}>
            <thead>
              <tr>
                <th style={TH}>Servico</th>
                <th style={TH}>Linguas</th>
                <th style={TH}>Unidade</th>
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

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "20px" }}>Pares Linguisticos</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {langPairs.map(p => (
            <div key={p.pair} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{p.pair}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{p.body}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "20px" }}>Sectores Servidos</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {sectors.map(s => (
            <div key={s.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{s.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid " + ACCENT, borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Referencia Diplomatica</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>O Alto Comissariado da Republica de Mocambique, Lilongwe (Fevereiro de 2026) confirma que a TechNexus prestou servicos linguisticos profissionais a Missao durante um periodo prolongado. A Missao elogia a TechNexus pelos seus elevados padroes de profissionalismo, exactidao, fiabilidade e discricao.</p>
        </div>

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Consultoria em Concursos e Pre-Qualificacao</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "8px" }}>Pare de perder contratos por erros de documentacao. Servico a preco fixo.</p>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px", lineHeight: 1.7 }}>Preenchemos os seus documentos de concurso, formularios de pre-qualificacao e respostas a propostas com precisao — no seu idioma. Disponivel em Ingles, Portugues, Chichewa e Swahili.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "480px" }}>
            <thead>
              <tr>
                <th style={TH}>Servico</th>
                <th style={TH}>Descricao</th>
                <th style={TH}>A partir de (MWK)</th>
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

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Registo de Empresas e Consultoria de Conformidade</h2>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px", lineHeight: 1.7 }}>Preparamos e submetemos documentos de registo de empresas, licenciamento e conformidade em seu nome. Registos locais no Malawi e registos transfronteiricos para Zambia, Mocambique e Africa do Sul.</p>

        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "17px", fontWeight: 700, color: TEAL, marginBottom: "16px" }}>Registos Locais — Malawi</h3>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "32px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "480px" }}>
            <thead>
              <tr>
                <th style={TH}>Servico</th>
                <th style={TH}>Descricao</th>
                <th style={TH}>A partir de (MWK)</th>
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

        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "17px", fontWeight: 700, color: "#4CAF50", marginBottom: "8px" }}>Registos Transfronteiricos</h3>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "16px", lineHeight: 1.7 }}>Coordenamos com agentes locais na Zambia, Mocambique e Africa do Sul para gerir processos de registo remotamente. Os documentos sao preparados, traduzidos quando necessario, e submetidos em seu nome.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "520px" }}>
            <thead>
              <tr>
                <th style={TH}>Pais</th>
                <th style={TH}>Servico</th>
                <th style={TH}>Descricao</th>
                <th style={TH}>A partir de (MWK)</th>
                <th style={TH}>Quote</th>
              </tr>
            </thead>
            <tbody>
              {crossBorderReg.map((s, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={{ ...TD, fontWeight: 700, color: s.country === "Multi-pais" ? MUTED : "var(--fl-amber)", whiteSpace: "nowrap" as const }}>{s.country}</td>
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
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>Notas Importantes sobre Registos Transfronteiricos</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>As taxas de registo governamentais, taxas de agentes no pais de destino e custos de notarizacao sao cobrados separadamente ao custo real. Fornecemos um orcamento detalhado antes de qualquer pagamento ser necessario. Os prazos variam por pais: Malawi 5-10 dias, Zambia 10-15 dias, Mocambique 15-25 dias, Africa do Sul 10-20 dias.</p>
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "32px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, marginBottom: "12px" }}>Como Encomendar</h3>
          <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, marginBottom: "20px" }}>
            Envie o seu documento de origem ou requisitos via WhatsApp ou email. Confirmamos o ambito, prazo de entrega e emitimos um orcamento em 24 horas. Prazo padrao: 1-3 dias uteis por documento; 5-25 dias uteis para servicos de registo. Servico urgente disponivel para trabalhos linguisticos. Acordo de confidencialidade disponivel mediante pedido.
          </p>
          <a href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20gostaria%20de%20um%20orcamento%20da%20pagina%20Servicos%20Linguisticos." target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Pedir Orcamento
          </a>
        </div>

      </div>
    </div>
  );
}



