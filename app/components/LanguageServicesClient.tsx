import CountryFlag from "./CountryFlag";
import { RATES, PRICED, foreign, type PricedId } from "./pricing";

export type LsLang = "en" | "pt" | "ny";

type PricedLabel = { name: string; langs: string; unit: string };
type Row3 = { name: string; desc: string; mwk: string };
type CrossRow = { key: string; country: string; name: string; desc: string; mwk: string };
type Card = { title: string; body: string };
type Pair = { pair: string; body: string };

type Dict = {
  heroTitle: string;
  heroSub: string;
  tagline: string;
  pricingTitle: string;
  pricingNote: string;
  currencyNote: string;
  certifiedNote: string;
  colService: string;
  colLangs: string;
  colUnit: string;
  colQuote: string;
  services: Record<PricedId, PricedLabel>;
  fromWord: string;
  numSep: string;
  personalTitle: string;
  personalLines: string[];
  pairsTitle: string;
  pairs: Pair[];
  sectorsTitle: string;
  sectors: Card[];
  diploTitle: string;
  diploBody: string;
  tenderTitle: string;
  tenderSub: string;
  tenderIntro: string;
  colDesc: string;
  colFromMwk: string;
  colCountry: string;
  tender: Row3[];
  regTitle: string;
  regIntro: string;
  localRegTitle: string;
  localReg: Row3[];
  crossTitle: string;
  crossIntro: string;
  cross: CrossRow[];
  crossNoteTitle: string;
  crossNoteBody: string;
  howTitle: string;
  howBody: string;
  howExtra: string;
  cta: string;
  waBase: string;
  quoteLabel: string;
};

const STR: Record<LsLang, Dict> = {
  en: {
    heroTitle: "TechNexus Scripts — Language and Consulting Services",
    heroSub: "Professional translation, transcription, subtitling, interpretation, tender consulting, and business registration services. Serving diplomatic missions, NGOs, healthcare institutions and private clients across Southern and East Africa.",
    tagline: "English · Portuguese · Chichewa · Swahili · HIPAA/GDPR-aware",
    pricingTitle: "Language Services and Pricing",
    pricingNote: "All prices exclude 17.5% VAT. Volume and framework rates on request.",
    currencyNote: "Clients in Malawi are invoiced in kwacha. Other currencies are approximate equivalents at the rates of " + RATES.asOf + ".",
    certifiedNote: "Certified translation includes translation, revision, signature, stamp, one printed copy and a PDF.",
    colService: "Service",
    colLangs: "Languages",
    colUnit: "Unit",
    colQuote: "Quote",
    services: {
      docTranslation: { name: "Document Translation", langs: "EN↔PT, EN↔NY, EN↔SW", unit: "per page (250 words)" },
      certified: { name: "Certified Translation", langs: "EN↔PT, EN↔NY", unit: "per page (250 words)" },
      transcription: { name: "Audio Transcription", langs: "EN, PT, NY, SW", unit: "per audio hour" },
      transcriptionTranslation: { name: "Transcription + Translation", langs: "EN↔PT, EN↔NY", unit: "per audio hour" },
      subtitling: { name: "Subtitling / Captioning", langs: "EN, PT, NY, SW", unit: "per video minute" },
      consecutive: { name: "Consecutive Interpretation (on site or remote)", langs: "EN↔PT, EN↔NY", unit: "per hour" },
      conference: { name: "Conference Interpretation", langs: "EN↔PT, EN↔NY", unit: "per half day" },
      training: { name: "Language Training", langs: "EN, PT, NY, SW", unit: "per hour (group)" },
      proofreading: { name: "Proofreading and Editing", langs: "EN, PT", unit: "per page" },
      localisation: { name: "Website / App Localisation", langs: "EN↔PT, EN↔NY", unit: "custom quote" },
    },
    fromWord: "from ",
    numSep: ",",
    personalTitle: "Personal Documents",
    personalLines: [
      "Certified translation: MK 16,000 per page of 250 words.",
      "Minimum order: MK 30,000. Several documents fit in one order.",
      "Express, under 48 hours: +50%.",
      "Interpreting by call, by appointment: MK 30,000 per 15 minutes.",
      "For individuals and their own documents: certificates, medical reports, hospital invoices. Paid in advance.",
    ],
    pairsTitle: "Language Pairs",
    pairs: [
      { pair: "English to/from Portuguese", body: "Documents, contracts, correspondence, medical records, legal instruments. Diplomatic and institutional clients served." },
      { pair: "English to/from Chichewa", body: "Community health, government communications, educational materials, NGO fieldwork documentation." },
      { pair: "English to/from Swahili", body: "Cross-border trade, East Africa NGO communications, media and broadcast." },
      { pair: "Portuguese to/from Chichewa", body: "Malawi-Mozambique corridor: border documentation, business agreements, consular materials." },
    ],
    sectorsTitle: "Sectors Served",
    sectors: [
      { title: "Diplomatic Missions", body: "Consular correspondence, diplomatic notes, visa documentation, protocol materials. Discretion assured." },
      { title: "Healthcare", body: "Patient records, clinical trial documentation, medical device manuals. HIPAA-aware handling." },
      { title: "Legal and Compliance", body: "Contracts, affidavits, court documents, compliance frameworks. Certified translations available." },
      { title: "Corporate and NGO", body: "Annual reports, HR policy, project documentation, donor reports, board materials." },
      { title: "Procurement and Tenders", body: "Pre-qualification packs, tender responses, RFQ documents, compliance reviews. Fixed-price service." },
      { title: "Cross-Border Business", body: "Business registration, tax compliance, operating licences in Malawi, Zambia, Mozambique, and South Africa." },
      { title: "Media and Broadcast", body: "Subtitling for film, documentary, training video and e-learning content." },
      { title: "Education", body: "Curriculum materials, textbook localisation, training manuals, exam papers." },
    ],
    diploTitle: "Diplomatic Reference",
    diploBody: "The High Commission of the Republic of Mozambique, Lilongwe (February 2026) confirms that TechNexus has provided professional language services to the Mission over an extended period. The Mission commends TechNexus for its high standards of professionalism, accuracy, reliability and discretion.",
    tenderTitle: "Tender and Pre-Qualification Consulting",
    tenderSub: "Stop losing contracts to paperwork errors. Fixed-price service.",
    tenderIntro: "We complete your tender documents, pre-qualification forms, and bid responses with precision, in your language. Available in English, Portuguese, Chichewa, and Swahili.",
    colDesc: "Description",
    colFromMwk: "From (MWK)",
    colCountry: "Country",
    tender: [
      { name: "Pre-Qualification Registration", desc: "Supplier registration forms, company profiles, compliance docs", mwk: "MK 100,000" },
      { name: "Simple Tender Response", desc: "Quotation-based tenders, RFQs, straightforward bid documents", mwk: "MK 200,000" },
      { name: "Complex Tender Response", desc: "Full proposals, technical and financial bids, method statements, RFPs", mwk: "MK 450,000" },
      { name: "Compliance Review", desc: "Check completed docs for errors, missing fields, compliance gaps", mwk: "MK 75,000" },
      { name: "Tender Document Translation", desc: "Translate tender docs: English, Portuguese, Chichewa, Swahili", mwk: "Standard translation rate applies" },
    ],
    regTitle: "Business Registration and Compliance Consulting",
    regIntro: "We prepare and submit business registration, licensing, and compliance documents on your behalf. Local Malawi registrations and cross-border registrations for Zambia, Mozambique, and South Africa. We work with PPDA, MRA, TPIN, MANePS, and relevant foreign registries.",
    localRegTitle: "Local Registrations — Malawi",
    localReg: [
      { name: "MSME / Business Name Registration", desc: "Register sole trader or MSME business name with MBRS", mwk: "MK 50,000" },
      { name: "Company Incorporation", desc: "Private Limited Company registration with MBRS. Memorandum, articles, share allocation", mwk: "MK 150,000" },
      { name: "TPIN Registration", desc: "Taxpayer PIN with Malawi Revenue Authority. Required for tax compliance and procurement", mwk: "MK 30,000" },
      { name: "MRA VAT Registration", desc: "VAT registration for businesses exceeding the MRA turnover threshold", mwk: "MK 50,000" },
      { name: "PPDA Vendor Registration", desc: "Register as a supplier on the Public Procurement and Disposal of Assets Authority portal", mwk: "MK 80,000" },
      { name: "MANePS Registration", desc: "Malawi National Electronic Procurement System — required for government tenders", mwk: "MK 80,000" },
      { name: "TEVETA / Sector Licensing", desc: "Technical, Entrepreneurial and Vocational Education and Training Authority licensing", mwk: "MK 100,000" },
      { name: "Annual Returns & Compliance Review", desc: "Prepare and file annual company returns, review compliance status across all registrations", mwk: "MK 60,000" },
    ],
    crossTitle: "Cross-Border Registrations",
    crossIntro: "We coordinate with in-country agents in Zambia, Mozambique, and South Africa to handle registration processes remotely. Documents are prepared, translated where required, and submitted on your behalf.",
    cross: [
      { key: "Zambia", country: "Zambia", name: "PACRA Business Registration", desc: "Patents and Companies Registration Agency — company name search, reservation, and registration", mwk: "MK 200,000" },
      { key: "Zambia", country: "Zambia", name: "ZRA TPIN / Tax Registration", desc: "Zambia Revenue Authority taxpayer registration for doing business in Zambia", mwk: "MK 100,000" },
      { key: "Mozambique", country: "Mozambique", name: "CPPME / NUIT Registration", desc: "Commercial registration with CPPME and tax number (NUIT) with AT-Mocambique. Includes Portuguese document preparation", mwk: "MK 250,000" },
      { key: "Mozambique", country: "Mozambique", name: "License / Alvara Comercial", desc: "Municipal commercial operating licence. Required for formal business operations in Mozambique", mwk: "MK 150,000" },
      { key: "South Africa", country: "South Africa", name: "CIPC Company Registration", desc: "Companies and Intellectual Property Commission registration. Private company (Pty Ltd) or NPC", mwk: "MK 300,000" },
      { key: "South Africa", country: "South Africa", name: "SARS Tax Number", desc: "South African Revenue Service registration for income tax and VAT", mwk: "MK 120,000" },
      { key: "Multi-country", country: "Multi-country", name: "Full Registration Pack", desc: "Business registration, tax number, and operating licence in a single country. Includes all document translation and agent coordination", mwk: "MK 400,000" },
    ],
    crossNoteTitle: "Important Notes on Cross-Border Registrations",
    crossNoteBody: "Government filing fees, agent fees in the target country, and notarisation costs are charged separately at cost. We provide a full itemised quotation before any payment is required. Turnaround varies by country: Malawi 5-10 days, Zambia 10-15 days, Mozambique 15-25 days, South Africa 10-20 days. We maintain active agent relationships in all four countries.",
    howTitle: "How to Commission",
    howBody: "Send your source document or requirements via WhatsApp or email. We confirm scope, turnaround time, and issue a quotation within 24 hours. Standard turnaround: 1-3 business days per document; 5-25 business days for registration services. Rush service available for language work. Confidentiality agreement provided on request.",
    howExtra: "Send a photo of the document on WhatsApp. Quote in 24 hours.",
    cta: "Request a Quote",
    waBase: "https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0A",
    quoteLabel: "Quote",
  },

  pt: {
    heroTitle: "TechNexus Scripts — Serviços Linguísticos e Consultoria",
    heroSub: "Tradução, transcrição, legendagem, interpretação e formação linguística profissional. Ao serviço de missões diplomáticas, ONG, instituições de saúde e clientes privados em toda a África Austral e Oriental.",
    tagline: "Inglês · Português · Chichewa · Swahili · Conformidade HIPAA/RGPD",
    pricingTitle: "Serviços Linguísticos e Preços",
    pricingNote: "Preços excluem IVA de 17,5%. Tarifas por volume e acordos-quadro mediante pedido.",
    currencyNote: "Clientes no Malawi são facturados em kwachas. As outras moedas são equivalentes aproximados às taxas de " + RATES.asOfPt + ".",
    certifiedNote: "A tradução certificada inclui tradução, revisão, assinatura, carimbo, uma cópia impressa e um PDF.",
    colService: "Serviço",
    colLangs: "Línguas",
    colUnit: "Unidade",
    colQuote: "Orçamento",
    services: {
      docTranslation: { name: "Tradução de Documentos", langs: "EN↔PT, EN↔NY, EN↔SW", unit: "por página (250 palavras)" },
      certified: { name: "Tradução Certificada", langs: "EN↔PT, EN↔NY", unit: "por página (250 palavras)" },
      transcription: { name: "Transcrição de Áudio", langs: "EN, PT, NY, SW", unit: "por hora de áudio" },
      transcriptionTranslation: { name: "Transcrição + Tradução", langs: "EN↔PT, EN↔NY", unit: "por hora de áudio" },
      subtitling: { name: "Legendagem", langs: "EN, PT, NY, SW", unit: "por minuto de vídeo" },
      consecutive: { name: "Interpretação Consecutiva (presencial ou remota)", langs: "EN↔PT, EN↔NY", unit: "por hora" },
      conference: { name: "Interpretação de Conferência", langs: "EN↔PT, EN↔NY", unit: "por meio dia" },
      training: { name: "Formação Linguística", langs: "EN, PT, NY, SW", unit: "por hora (grupo)" },
      proofreading: { name: "Revisão e Edição", langs: "EN, PT", unit: "por página" },
      localisation: { name: "Localização Website / App", langs: "EN↔PT, EN↔NY", unit: "orçamento personalizado" },
    },
    fromWord: "a partir de ",
    numSep: ".",
    personalTitle: "Documentos Pessoais",
    personalLines: [
      "Tradução certificada de documentos pessoais: MK 16.000 por página de 250 palavras.",
      "Encomenda mínima: MK 30.000. Vários documentos cabem numa encomenda.",
      "Serviço urgente, menos de 48 horas: +50%.",
      "Interpretação por chamada, por marcação: MK 30.000 por 15 minutos.",
      "Para particulares e os seus próprios documentos: certidões, relatórios médicos, facturas hospitalares. Pagamento antecipado.",
    ],
    pairsTitle: "Pares Linguísticos",
    pairs: [
      { pair: "Inglês de/para Português", body: "Documentos, contratos, correspondência, registos médicos, instrumentos jurídicos. Clientes diplomáticos e institucionais." },
      { pair: "Inglês de/para Chichewa", body: "Saúde comunitária, comunicações governamentais, materiais educativos, documentação de trabalho de campo de ONG." },
      { pair: "Inglês de/para Swahili", body: "Comércio transfronteiriço, comunicações de ONG da África Oriental, media e radiodifusão." },
      { pair: "Português de/para Chichewa", body: "Corredor Malawi-Moçambique: documentação fronteiriça, acordos comerciais, materiais consulares." },
    ],
    sectorsTitle: "Sectores Servidos",
    sectors: [
      { title: "Missões Diplomáticas", body: "Correspondência consular, notas diplomáticas, documentação de vistos, materiais de protocolo. Discrição garantida." },
      { title: "Saúde", body: "Registos de pacientes, documentação de ensaios clínicos, manuais de dispositivos médicos. Manuseamento em conformidade com HIPAA." },
      { title: "Jurídico e Conformidade", body: "Contratos, declarações juradas, documentos judiciais, quadros de conformidade. Traduções certificadas disponíveis." },
      { title: "Empresarial e ONG", body: "Relatórios anuais, política de RH, documentação de projectos, relatórios de doadores, materiais de conselho." },
      { title: "Procurement e Concursos", body: "Pacotes de pré-qualificação, respostas a concursos, documentos RFQ, revisões de conformidade. Serviço a preço fixo." },
      { title: "Negócios Transfronteiriços", body: "Registo de empresas, conformidade fiscal, licenças de operação no Malawi, Zâmbia, Moçambique e África do Sul." },
      { title: "Media e Radiodifusão", body: "Legendagem para filmes, documentários, vídeos de formação e conteúdos de e-learning." },
      { title: "Educação", body: "Materiais curriculares, localização de manuais, manuais de formação, exames." },
    ],
    diploTitle: "Referência Diplomática",
    diploBody: "O Alto Comissariado da República de Moçambique, Lilongwe (Fevereiro de 2026) confirma que a TechNexus prestou serviços linguísticos profissionais à Missão durante um período prolongado. A Missão elogia a TechNexus pelos seus elevados padrões de profissionalismo, exactidão, fiabilidade e discrição.",
    tenderTitle: "Consultoria em Concursos e Pré-Qualificação",
    tenderSub: "Pare de perder contratos por erros de documentação. Serviço a preço fixo.",
    tenderIntro: "Preenchemos os seus documentos de concurso, formulários de pré-qualificação e respostas a propostas com precisão, no seu idioma. Disponível em Inglês, Português, Chichewa e Swahili.",
    colDesc: "Descrição",
    colFromMwk: "A partir de (MWK)",
    colCountry: "País",
    tender: [
      { name: "Registo de Pré-Qualificação", desc: "Formulários de registo de fornecedores, perfis de empresa, documentos de conformidade", mwk: "MK 100.000" },
      { name: "Resposta a Concurso Simples", desc: "Concursos por cotação, RFQs, documentos de proposta simples", mwk: "MK 200.000" },
      { name: "Resposta a Concurso Complexo", desc: "Propostas completas, propostas técnicas e financeiras, declarações metodológicas, RFPs", mwk: "MK 450.000" },
      { name: "Revisão de Conformidade", desc: "Verificar documentos concluídos quanto a erros, campos em falta, lacunas de conformidade", mwk: "MK 75.000" },
      { name: "Tradução de Documentos de Concurso", desc: "Traduzir documentos de concurso: Inglês, Português, Chichewa, Swahili", mwk: "Aplica-se a tarifa de tradução padrão." },
    ],
    regTitle: "Registo de Empresas e Consultoria de Conformidade",
    regIntro: "Preparamos e submetemos documentos de registo de empresas, licenciamento e conformidade em seu nome. Registos locais no Malawi e registos transfronteiriços para Zâmbia, Moçambique e África do Sul.",
    localRegTitle: "Registos Locais — Malawi",
    localReg: [
      { name: "Registo MSME / Nome Comercial", desc: "Registar nome comercial ou MSME com MBRS", mwk: "MK 50.000" },
      { name: "Constituição de Empresa", desc: "Registo de Sociedade por Quotas com MBRS. Memorando, estatutos, alocação de acções", mwk: "MK 150.000" },
      { name: "Registo TPIN", desc: "NIF do contribuinte com Autoridade Tributária do Malawi. Necessário para conformidade fiscal e procurement", mwk: "MK 30.000" },
      { name: "Registo IVA MRA", desc: "Registo de IVA para empresas que excedam o limiar de volume de negócios da MRA", mwk: "MK 50.000" },
      { name: "Registo de Fornecedor PPDA", desc: "Registar como fornecedor no portal da Autoridade de Procurement e Alienação de Activos Públicos", mwk: "MK 80.000" },
      { name: "Registo MANePS", desc: "Sistema Nacional de Procurement Electrónico do Malawi, necessário para concursos governamentais", mwk: "MK 80.000" },
      { name: "Licenciamento TEVETA / Sectorial", desc: "Licenciamento pela Autoridade de Educação e Formação Técnica, Empresarial e Vocacional", mwk: "MK 100.000" },
      { name: "Relatórios Anuais e Revisão de Conformidade", desc: "Preparar e submeter relatórios anuais da empresa, rever estado de conformidade em todos os registos", mwk: "MK 60.000" },
    ],
    crossTitle: "Registos Transfronteiriços",
    crossIntro: "Coordenamos com agentes locais na Zâmbia, Moçambique e África do Sul para gerir processos de registo remotamente. Os documentos são preparados, traduzidos quando necessário, e submetidos em seu nome.",
    cross: [
      { key: "Zambia", country: "Zâmbia", name: "Registo PACRA", desc: "Agência de Registo de Patentes e Empresas, pesquisa, reserva e registo de nome de empresa", mwk: "MK 200.000" },
      { key: "Zambia", country: "Zâmbia", name: "TPIN / Registo Fiscal ZRA", desc: "Registo de contribuinte da Autoridade Tributária da Zâmbia para operar na Zâmbia", mwk: "MK 100.000" },
      { key: "Mozambique", country: "Moçambique", name: "Registo CPPME / NUIT", desc: "Registo comercial no CPPME e número fiscal (NUIT) na AT-Moçambique. Inclui preparação de documentos em Português", mwk: "MK 250.000" },
      { key: "Mozambique", country: "Moçambique", name: "Alvará Comercial", desc: "Licença comercial municipal. Necessária para operações formais em Moçambique", mwk: "MK 150.000" },
      { key: "South Africa", country: "África do Sul", name: "Registo CIPC", desc: "Registo na Comissão de Empresas e Propriedade Intelectual. Empresa privada (Pty Ltd) ou NPC", mwk: "MK 300.000" },
      { key: "South Africa", country: "África do Sul", name: "Número Fiscal SARS", desc: "Registo no Serviço de Receitas da África do Sul para imposto sobre o rendimento e IVA", mwk: "MK 120.000" },
      { key: "Multi-country", country: "Multi-país", name: "Pacote Completo de Registo", desc: "Registo de empresa, número fiscal e licença de operação num único país. Inclui toda a tradução de documentos e coordenação de agentes", mwk: "MK 400.000" },
    ],
    crossNoteTitle: "Notas Importantes sobre Registos Transfronteiriços",
    crossNoteBody: "As taxas de registo governamentais, taxas de agentes no país de destino e custos de notarização são cobrados separadamente ao custo real. Fornecemos um orçamento detalhado antes de qualquer pagamento ser necessário. Os prazos variam por país: Malawi 5-10 dias, Zâmbia 10-15 dias, Moçambique 15-25 dias, África do Sul 10-20 dias.",
    howTitle: "Como Encomendar",
    howBody: "Envie o seu documento de origem ou requisitos via WhatsApp ou email. Confirmamos o âmbito, prazo de entrega e emitimos um orçamento em 24 horas. Prazo padrão: 1-3 dias úteis por documento; 5-25 dias úteis para serviços de registo. Serviço urgente disponível para trabalhos linguísticos. Acordo de confidencialidade disponível mediante pedido.",
    howExtra: "Envie uma foto do documento pelo WhatsApp. Orçamento em 24 horas.",
    cta: "Pedir orçamento",
    waBase: "https://wa.me/265889941700?text=Ola%20TechNexus%2C%20gostaria%20de%20um%20orcamento%20para%3A%0A",
    quoteLabel: "Orçamento",
  },

  ny: {
    heroTitle: "TechNexus Scripts — Ntchito za Zinenero ndi Uphungu",
    heroSub: "Kumasulira, kulemba, subtitulo, kutanthauzira ndi maphunziro a chilankhulo mwachilungamo. Ntchito ya mabungwe a zadiplomasiya, ma NGO, zaumoyo ndi makasitomala apacheka ku Afirika wa Kumwera ndi Kummawa.",
    tagline: "Chingerezi · Chiputukezi · Chichewa · Kiswahili · HIPAA/GDPR",
    pricingTitle: "Ntchito za Zinenero ndi Mitengo",
    pricingNote: "Mitengo siyikuphatikiza VAT ya 17.5%. Mitengo ya maoda ambiri ndi ya mapangano a framework imaperekedwa mukapempha.",
    currencyNote: "Makasitomala a ku Malawi amalandira ma invoice mu kwacha. Ndalama zina ndi ziwerengero zoyandikira malinga ndi mitengo ya pa " + RATES.asOfNy + ".",
    certifiedNote: "Kumasulira kovomerezeka kumaphatikiza kumasulira, kuwunikanso, siginecha, chidindo, kopi imodzi yosindikizidwa ndi PDF.",
    colService: "Ntchito",
    colLangs: "Zilankhulo",
    colUnit: "Muyeso",
    colQuote: "Quotation",
    services: {
      docTranslation: { name: "Kumasulira Madokumento", langs: "EN↔PT, EN↔NY, EN↔SW", unit: "pa tsamba (mawu 250)" },
      certified: { name: "Kumasulira Kovomerezeka", langs: "EN↔PT, EN↔NY", unit: "pa tsamba (mawu 250)" },
      transcription: { name: "Kulemba Mawu Ochokera pa Audio", langs: "EN, PT, NY, SW", unit: "pa ola ya audio" },
      transcriptionTranslation: { name: "Kulemba + Kumasulira", langs: "EN↔PT, EN↔NY", unit: "pa ola ya audio" },
      subtitling: { name: "Subtitulo / Malembo a Kanema", langs: "EN, PT, NY, SW", unit: "pa mphindi ya video" },
      consecutive: { name: "Kutanthauzira Kamodzi Kamodzi", langs: "EN↔PT, EN↔NY", unit: "pa ola" },
      conference: { name: "Kutanthauzira pa Msonkhano", langs: "EN↔PT, EN↔NY", unit: "pa hafu ya tsiku" },
      training: { name: "Maphunziro a Chilankhulo", langs: "EN, PT, NY, SW", unit: "pa ola (gulu)" },
      proofreading: { name: "Kuwerenga ndi Kukonza", langs: "EN, PT", unit: "pa tsamba" },
      localisation: { name: "Kumasulira Website / App", langs: "EN↔PT, EN↔NY", unit: "mtengo wosankhanidwa" },
    },
    fromWord: "kuyambira ",
    numSep: ".",
    personalTitle: "Madokumento a Paokha",
    personalLines: [
      "Kumasulira kovomerezeka: MK 16.000 pa tsamba la mawu 250.",
      "Oda yochepera: MK 30.000. Madokumento angapo angalowe mu oda imodzi.",
      "Mwachangu, mkati mwa maola 48: +50%.",
      "Kutanthauzira pa foni, mwa kukonzekera: MK 30.000 pa mphindi 15.",
      "Kwa anthu paokha ndi madokumento awo: ma satifiketi, malipoti a zaumoyo, ma invoice a chipatala. Kulipira patsogolo.",
    ],
    pairsTitle: "Zilankhulo Zomwe Timagwira Nazo",
    pairs: [
      { pair: "Chingerezi ndi Chiputukezi", body: "Madokumento, ma kontrakiti, makalata, zoyimba za zaumoyo, zamilandu. Makasitomala a zadiplomasiya ndi mabungwe." },
      { pair: "Chingerezi ndi Chichewa", body: "Zaumoyo za khomo, mafalidwe a boma, ziphunzitso, madokumento a ntchito ya bwalo ya ma NGO." },
      { pair: "Chingerezi ndi Kiswahili", body: "Malonda a mipaka, mafalidwe a ma NGO a Afirika wa Kummawa, midia ndi kufalitsa." },
      { pair: "Chiputukezi ndi Chichewa", body: "Njira ya Malawi-Mozambique: madokumento a malire, mgwirizano wa malonda, zinthu za konsuleti." },
    ],
    sectorsTitle: "Mbumba Yothandizidwa",
    sectors: [
      { title: "Mabungwe a Zadiplomasiya", body: "Makalata a konsuleti, malembo a zadiplomasiya, madokumento a viza, zinthu za protocol. Chinsinsi chitsimikizirika." },
      { title: "Zaumoyo", body: "Zolemba za odwala, madokumento a mayeso akliniki, mawunikiro a zipangizo zaumoyo. Kutsata HIPAA." },
      { title: "Zamalandu ndi Kutsatira Malamulo", body: "Ma kontrakiti, malumbiro, madokumento a koweruza, milapu ya kutsatira. Kumasulira kovomerezeka kulipo." },
      { title: "Bizinesi ndi ma NGO", body: "Malipoti a chaka, ndondomeko ya HR, madokumento a ntchito, malipoti a opatsa ndalama, zinthu za bungwe." },
      { title: "Procurement ndi Ma Tender", body: "Phukusi la pre-qualification, mayankho a ma tender, madokumento RFQ, kuwunika kutsatira. Ntchito ya mtengo wokhazikika." },
      { title: "Malonda a Mipaka", body: "Kulembetsa kampani, kutsatira msonkho, layisensi za ntchito ku Malawi, Zambia, Mozambique ndi South Africa." },
      { title: "Midia ndi Kufalitsa", body: "Subtitulo ya mafilimu, madokumento, makanema a maphunziro ndi zinthu za e-learning." },
      { title: "Maphunziro", body: "Ziphunzitso, kumasulira mabuku, mawunikiro a maphunziro, mayeso." },
    ],
    diploTitle: "Umboni wa Zamdule",
    diploBody: "High Commission ya Republic ya Mozambique, Lilongwe (February 2026) itsimikizira kuti TechNexus yaperekedwa ntchito zapamwamba ku Mission pa nthawi yayitali. Mission ikutamanda TechNexus chifukwa cha muyeso wake wapamwamba wa kukhala wachikumbu, kulondola, kukhala wodalirika ndi chinsinsi.",
    tenderTitle: "Upangiri wa Ma Tender ndi Pre-Qualification",
    tenderSub: "Lekani kutaya ma kontrakiti chifukwa cha zolakwika za mapepala. Mitengo yokhazikika.",
    tenderIntro: "Timadzaza madokumento anu a tender, mafomulo a pre-qualification ndi mayankho a mapulo mwadongosolo, m'chilankhulo chanu. Kulipo mu Chingerezi, Chiputukezi, Chichewa ndi Kiswahili.",
    colDesc: "Kufotokozera",
    colFromMwk: "Kuyambira (MWK)",
    colCountry: "Dziko",
    tender: [
      { name: "Kulembetsa Koyamba kwa Pre-Qualification", desc: "Mafomulo a kulembetsa ogulitsa, mawonekedwe a kampani, madokumento a kutsatira malamulo", mwk: "MK 100.000" },
      { name: "Kuyankha Tender Wokhonsa", desc: "Ma tender a mtengo, RFQ, madokumento osavuta a mapulo", mwk: "MK 200.000" },
      { name: "Kuyankha Tender Wovuta", desc: "Mapulo akuluakulu, mapulo azaukadaulo ndi azachuma, RFP", mwk: "MK 450.000" },
      { name: "Kuwunika kwa Kutsatira Malamulo", desc: "Kuwunika madokumento womaliza kuti apeze zolakwika, mafunde opanda, zosoweka", mwk: "MK 75.000" },
      { name: "Kumasulira Madokumento a Tender", desc: "Kumasulira madokumento a tender: Chingerezi, Chiputukezi, Chichewa, Kiswahili", mwk: "Mtengo wamba wa kumasulira umagwira ntchito." },
    ],
    regTitle: "Kulembetsa Bizinesi ndi Kutsatira Malamulo",
    regIntro: "Timakonzekera ndi kutumiza madokumento a kulembetsa bizinesi, layisensi ndi kutsatira malamulo m'malo mwanu. Kulembetsa kuno ku Malawi ndi kunja kwa dziko ku Zambia, Mozambique ndi South Africa.",
    localRegTitle: "Kulembetsa Kuno — Malawi",
    localReg: [
      { name: "Kulembetsa MSME / Dzina la Bizinesi", desc: "Kulembetsa dzina la bizinesi kapena MSME ndi MBRS", mwk: "MK 50.000" },
      { name: "Kukhazikitsa Kampani", desc: "Kulembetsa Limited Company ndi MBRS. Memorandum, ma statute, kugawana ma share", mwk: "MK 150.000" },
      { name: "Kulembetsa TPIN", desc: "Nambala ya msonkho ndi MRA. Yofunikira kwa kutsatira malamulo a msonkho ndi procurement", mwk: "MK 30.000" },
      { name: "Kulembetsa VAT ndi MRA", desc: "Kulembetsa VAT kwa makampani opitirira malire a MRA", mwk: "MK 50.000" },
      { name: "Kulembetsa Ogulitsa PPDA", desc: "Kulembetsa ngati ogulitsa pa portal ya PPDA", mwk: "MK 80.000" },
      { name: "Kulembetsa MANePS", desc: "Njira ya Malawi ya Procurement ya Magetsi — yofunikira pa ma tender a boma", mwk: "MK 80.000" },
      { name: "Layisensi ya TEVETA / Gawo", desc: "Kulembetsa ndi TEVETA kapena bungwe lina la gawo", mwk: "MK 100.000" },
      { name: "Malipoti a Chaka ndi Kuwunika Kutsatira", desc: "Kukonzekera ndi kutumiza malipoti a chaka, kuwunika kutsatira malamulo pa ma register onse", mwk: "MK 60.000" },
    ],
    crossTitle: "Kulembetsa Kunja kwa Dziko",
    crossIntro: "Timagwirizana ndi ma agent akudziko ku Zambia, Mozambique ndi South Africa kuyendetsa makampeni a kulembetsa kutali. Madokumento amakonzedwa, amasuliridwa pamafunikira, ndi kutumizidwa m'malo mwanu.",
    cross: [
      { key: "Zambia", country: "Zambia", name: "Kulembetsa PACRA", desc: "Patents and Companies Registration Agency — kufufuza, kusunga ndi kulembetsa dzina la kampani", mwk: "MK 200.000" },
      { key: "Zambia", country: "Zambia", name: "TPIN / Kulembetsa Msonkho ZRA", desc: "Kulembetsa msonkho ndi ZRA kuti mugwire ntchito ku Zambia", mwk: "MK 100.000" },
      { key: "Mozambique", country: "Mozambique", name: "Kulembetsa CPPME / NUIT", desc: "Kulembetsa bizinesi ku CPPME ndi nambala ya msonkho (NUIT). Kuphatikiza kukonzekera madokumento mu Chiputukezi", mwk: "MK 250.000" },
      { key: "Mozambique", country: "Mozambique", name: "Layisensi ya Bizinesi", desc: "Layisensi ya bizinesi ya mzinda. Yofunikira kwa ntchito zamlingo ku Mozambique", mwk: "MK 150.000" },
      { key: "South Africa", country: "South Africa", name: "Kulembetsa CIPC", desc: "Kulembetsa ndi Companies and Intellectual Property Commission. Private company (Pty Ltd) kapena NPC", mwk: "MK 300.000" },
      { key: "South Africa", country: "South Africa", name: "Nambala ya Msonkho SARS", desc: "Kulembetsa ndi SARS kwa msonkho wa ndalama ndi VAT", mwk: "MK 120.000" },
      { key: "Multi-country", country: "Maiko ambiri", name: "Phukusi Lonse la Kulembetsa", desc: "Kulembetsa kampani, nambala ya msonkho ndi layisensi ya ntchito m'dziko limodzi. Kuphatikiza kumasulira madokumento ndi kulumikizana ndi ma agent", mwk: "MK 400.000" },
    ],
    crossNoteTitle: "Zidziwitso Zofunikira pa Kulembetsa Kunja kwa Dziko",
    crossNoteBody: "Mitengo ya boma, ya ma agent akudziko ndi ya kutsimikizira madokumento imapatulidwa pa mtengo weniweni. Timapeleka quotation yoonekeratu usanachite cholipira chilichonse. Nthawi zosiyanasiyana pa dziko: Malawi masiku 5-10, Zambia 10-15, Mozambique 15-25, South Africa 10-20.",
    howTitle: "Momwe Mungalumikizanire",
    howBody: "Tumizani dokumento lanu la cholinga kapena zofunikira zanu kudzera pa WhatsApp kapena imelo. Titsimikizira kuchuluka kwa ntchito, nthawi yokwanirira, ndi kutumiza mtengo mu maola 24. Nthawi yotsatira: tsiku 1-3 la bizinesi pa dokumento; tsiku 5-25 la bizinesi pa ntchito za kulembetsa. Mgwirizano wa chinsinsi uperekedwa momufunira.",
    howExtra: "Tumizani chithunzi cha dokumento pa WhatsApp. Quotation mu maola 24.",
    cta: "Pemphani Quotation",
    waBase: "https://wa.me/265889941700?text=Moni%20TechNexus%2C%20ndikufuna%20quotation%20ya%3A%0A",
    quoteLabel: "Pemphani",
  },
};

const BG = "var(--fl-neutral-2)";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const ACCENT = "var(--fl-blue)";
const TEAL = "var(--fl-teal)";

const TH: React.CSSProperties = { padding: "10px 16px", textAlign: "left", fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", color: MUTED, borderBottom: "1px solid var(--fl-neutral-8)", background: "var(--fl-neutral-4)" };
const TD: React.CSSProperties = { padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid var(--fl-neutral-8)", color: TEXT };
const TNUM: React.CSSProperties = { ...TD, whiteSpace: "nowrap" as const };
const H2: React.CSSProperties = { fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" };
const scrollBox: React.CSSProperties = { overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" };

function group(n: number, sep: string): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

function QuoteBtn({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "6px 14px", minHeight: "44px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" as const }}>
      {label}
    </a>
  );
}

export default function LanguageServicesClient({ lang = "en" }: { lang?: LsLang }) {
  const t = STR[lang];
  const q = (label: string) => t.waBase + encodeURIComponent(label);

  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      {/* HERO */}
      <div style={{ position: "relative", overflow: "hidden", padding: "64px var(--page-pad) 48px", textAlign: "center", background: "#0a0a0a" }}>
        <img src="/index_main/language_services_hero-1200.webp" alt="" aria-hidden="true" fetchPriority="high" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative" }}>
          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
            {t.heroTitle}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", maxWidth: "680px", margin: "0 auto 20px", lineHeight: 1.7 }}>
            {t.heroSub}
          </p>
          <div style={{ display: "inline-block", fontSize: "13px", fontWeight: 700, color: "#fff", letterSpacing: "0.03em" }}>
            {t.tagline}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px var(--page-pad)" }}>

        {/* LANGUAGE SERVICES TABLE */}
        <h2 style={H2}>{t.pricingTitle}</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "24px" }}>{t.pricingNote}</p>
        <div className="ls-price-table" style={{ ...scrollBox, marginBottom: "12px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "820px" }}>
            <thead>
              <tr>
                <th scope="col" style={TH}>{t.colService}</th>
                <th scope="col" style={TH}>{t.colLangs}</th>
                <th scope="col" style={TH}>{t.colUnit}</th>
                <th scope="col" style={TH}>MWK</th>
                <th scope="col" style={TH}>USD</th>
                <th scope="col" style={TH}>MZN</th>
                <th scope="col" style={TH}>ZAR</th>
                <th scope="col" style={TH}>ZMW</th>
                <th scope="col" style={TH}>{t.colQuote}</th>
              </tr>
            </thead>
            <tbody>
              {PRICED.map((row, i) => {
                const label = t.services[row.id];
                const f = foreign(row.mwk);
                const pre = row.from ? t.fromWord : "";
                return (
                  <tr key={row.id} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                    <td style={{ ...TD, fontWeight: 600 }}>{label.name}</td>
                    <td style={{ ...TD, color: MUTED }}>{label.langs}</td>
                    <td style={{ ...TD, color: MUTED }}>{label.unit}</td>
                    <td style={{ ...TNUM, color: ACCENT, fontWeight: 600 }}>{pre}MK {group(row.mwk, t.numSep)}</td>
                    <td style={{ ...TNUM, color: MUTED }}>{pre}${group(f.USD, t.numSep)}</td>
                    <td style={{ ...TNUM, color: MUTED }}>{pre}{group(f.MZN, t.numSep)}</td>
                    <td style={{ ...TNUM, color: MUTED }}>{pre}{group(f.ZAR, t.numSep)}</td>
                    <td style={{ ...TNUM, color: MUTED }}>{pre}{group(f.ZMW, t.numSep)}</td>
                    <td style={TD}><QuoteBtn href={q(label.name)} label={t.quoteLabel} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="ls-price-cards" style={{ marginBottom: "12px" }}>
          {PRICED.map((row) => {
            const label = t.services[row.id];
            const f = foreign(row.mwk);
            const pre = row.from ? t.fromWord : "";
            return (
              <div key={row.id} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "14px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "6px" }}>
                  <div style={{ fontWeight: 600, fontSize: "14px", color: TEXT }}>{label.name}</div>
                  <QuoteBtn href={q(label.name)} label={t.quoteLabel} />
                </div>
                <div style={{ fontSize: "12px", color: MUTED, marginBottom: "10px" }}>{label.langs} · {label.unit}</div>
                <div style={{ fontSize: "18px", fontWeight: 700, color: ACCENT, marginBottom: "8px" }}>{pre}MK {group(row.mwk, t.numSep)}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 16px", fontSize: "12px", color: MUTED }}>
                  <div>USD {pre}${group(f.USD, t.numSep)}</div>
                  <div>MZN {pre}{group(f.MZN, t.numSep)}</div>
                  <div>ZAR {pre}{group(f.ZAR, t.numSep)}</div>
                  <div>ZMW {pre}{group(f.ZMW, t.numSep)}</div>
                </div>
              </div>
            );
          })}
        </div>

        <p style={{ fontSize: "12px", color: MUTED, lineHeight: 1.6, marginBottom: "4px" }}>{t.currencyNote}</p>
        <p style={{ fontSize: "12px", color: MUTED, lineHeight: 1.6, marginBottom: "40px" }}>{t.certifiedNote}</p>

        {/* PERSONAL DOCUMENTS */}
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid " + TEAL, borderRadius: "8px", padding: "24px", marginBottom: "48px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "12px" }}>{t.personalTitle}</h3>
          <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {t.personalLines.map((line, i) => (
              <li key={i} style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{line}</li>
            ))}
          </ul>
        </div>

        {/* LANGUAGE PAIRS */}
        <h2 style={{ ...H2, marginBottom: "20px" }}>{t.pairsTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {t.pairs.map(p => (
            <div key={p.pair} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{p.pair}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* SECTORS */}
        <h2 style={{ ...H2, marginBottom: "20px" }}>{t.sectorsTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {t.sectors.map(s => (
            <div key={s.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{s.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* DIPLOMATIC REFERENCE */}
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid " + ACCENT, borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>{t.diploTitle}</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>{t.diploBody}</p>
        </div>

        {/* TENDER CONSULTING */}
        <h2 style={H2}>{t.tenderTitle}</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "8px" }}>{t.tenderSub}</p>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px", lineHeight: 1.7 }}>{t.tenderIntro}</p>
        <div style={scrollBox}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "480px" }}>
            <thead>
              <tr>
                <th scope="col" style={TH}>{t.colService}</th>
                <th scope="col" style={TH}>{t.colDesc}</th>
                <th scope="col" style={TH}>{t.colFromMwk}</th>
                <th scope="col" style={TH}>{t.colQuote}</th>
              </tr>
            </thead>
            <tbody>
              {t.tender.map((s, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={{ ...TD, fontWeight: 600 }}>{s.name}</td>
                  <td style={{ ...TD, color: MUTED, fontSize: "12px" }}>{s.desc}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{s.mwk}</td>
                  <td style={TD}><QuoteBtn href={q(s.name)} label={t.quoteLabel} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* REGISTRATION */}
        <h2 style={H2}>{t.regTitle}</h2>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px", lineHeight: 1.7 }}>{t.regIntro}</p>

        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "17px", fontWeight: 700, color: TEAL, marginBottom: "16px" }}>{t.localRegTitle}</h3>
        <div style={{ ...scrollBox, marginBottom: "32px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "480px" }}>
            <thead>
              <tr>
                <th scope="col" style={TH}>{t.colService}</th>
                <th scope="col" style={TH}>{t.colDesc}</th>
                <th scope="col" style={TH}>{t.colFromMwk}</th>
                <th scope="col" style={TH}>{t.colQuote}</th>
              </tr>
            </thead>
            <tbody>
              {t.localReg.map((s, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={{ ...TD, fontWeight: 600 }}>{s.name}</td>
                  <td style={{ ...TD, color: MUTED, fontSize: "12px" }}>{s.desc}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{s.mwk}</td>
                  <td style={TD}><QuoteBtn href={q(s.name)} label={t.quoteLabel} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "17px", fontWeight: 700, color: "#4CAF50", marginBottom: "8px" }}>{t.crossTitle}</h3>
        <p style={{ fontSize: "13px", color: MUTED, marginBottom: "16px", lineHeight: 1.7 }}>{t.crossIntro}</p>
        <div style={{ ...scrollBox, marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "520px" }}>
            <thead>
              <tr>
                <th scope="col" style={TH}>{t.colCountry}</th>
                <th scope="col" style={TH}>{t.colService}</th>
                <th scope="col" style={TH}>{t.colDesc}</th>
                <th scope="col" style={TH}>{t.colFromMwk}</th>
                <th scope="col" style={TH}>{t.colQuote}</th>
              </tr>
            </thead>
            <tbody>
              {t.cross.map((s, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={{ ...TD, fontWeight: 700, color: s.key === "Multi-country" ? MUTED : "var(--fl-amber)", whiteSpace: "nowrap" as const }}><CountryFlag country={s.key} />{s.country}</td>
                  <td style={{ ...TD, fontWeight: 600 }}>{s.name}</td>
                  <td style={{ ...TD, color: MUTED, fontSize: "12px" }}>{s.desc}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{s.mwk}</td>
                  <td style={TD}><QuoteBtn href={q(s.name)} label={t.quoteLabel} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CROSS-BORDER NOTE */}
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderLeft: "4px solid #4CAF50", borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "10px" }}>{t.crossNoteTitle}</h3>
          <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>{t.crossNoteBody}</p>
        </div>

        {/* HOW TO COMMISSION */}
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "32px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, marginBottom: "12px" }}>{t.howTitle}</h3>
          <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, marginBottom: "12px" }}>{t.howBody}</p>
          <p style={{ fontSize: "14px", color: TEXT, fontWeight: 600, lineHeight: 1.7, marginBottom: "20px" }}>{t.howExtra}</p>
          <a href={q(t.cta)} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            {t.cta}
          </a>
        </div>

      </div>
    </div>
  );
}
