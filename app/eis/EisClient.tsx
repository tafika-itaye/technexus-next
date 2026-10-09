"use client";

import Link from "next/link";
import { useState } from "react";

const G     = "#1B7F3A";
const GL    = "#E8F5EE";
const INK   = "#0D1117";
const BODY  = "#374151";
const MUTED = "#6B7280";
const LIGHT = "#F3F4F6";
const WHITE = "#FFFFFF";
const BDR   = "#E5E7EB";
const BDR2  = "#D1D5DB";

export type EisLang = "en" | "pt" | "ny";

type PlanCopy = { desc: string; features: string[] };

/* Canonical pricing — single source of truth for all languages */
const PLAN_META = [
  { name: "Tablet POS",                setup: "MWK 350,000",        monthly: "MWK 60,000",        popular: false, hardware: true,  note: false },
  { name: "Retail Kiosk POS",          setup: "MWK 600,000",        monthly: "MWK 75,000",        popular: true,  hardware: true,  note: false },
  { name: "EIS Bridge & Integration",  setup: "From MWK 500,000",   monthly: "MWK 75,000",        popular: false, hardware: false, note: true  },
];

const MB = { setup: "From MWK 5,600,000", monthly: "From MWK 500,000" };

const STR: Record<EisLang, {
  heroTitle1: string; heroTitle2: string; heroSub: string; ctaConsult: string; ctaCompare: string;
  trust: string[];
  pricingEyebrow: string; pricingTitle: string; pricingLede: string; askUs: string;
  setupFee: string; monthlyLabel: string; perMonth: string; mostPopular: string; whatsIncluded: string;
  enquirePlan: string; customQuote: string;
  integrations: string; integrationsNote: string; integrationsTitle: string; integrationsLede: string; hardwareNote: string; setupNote: string; addonsTitle: string; addonsLede: string; addons: [string, string][]; mbTitle: string; mbDesc: string;
  perks: [string, string][];
  valueEyebrow: string; valueTitle: string; valueBody: string;
  pillars: { title: string; body: string }[];
  howEyebrow: string; howTitle: string;
  steps: { step: string; title: string; body: string }[];
  faqEyebrow: string; faqTitle: string; faqSub: string; faqAsk: string; faqWa: string;
  faqs: { q: string; a: string }[];
  contactEyebrow: string; contactTitle: string; contactBody: string;
  infoLabels: { wa: string; email: string; loc: string; web: string };
  mraTitle: string; mraBody: string; mraCred: string; mraDownload: string;
  verifyCert: string; proudlyMw: string;
  formTitle: string; fBiz: string; fBizPh: string; fContact: string; fContactPh: string;
  fPhone: string; fPlan: string; fPlanPh: string; fNotSure: string; fNotes: string; fNotesPh: string;
  fSend: string; fPrivacy1: string; fPrivacyLink: string; privacyHref: string; credentialsHref: string;
  plans: PlanCopy[];
}> = {
  en: {
    heroTitle1: "Stay compliant.",
    heroTitle2: "Keep trading.",
    heroSub: "MRA-certified POS and integration for Malawi businesses. Take a ready-to-trade till, or keep the system you run and we connect it to MRA. QR receipts, stock control, offline support, accounting sync. Hardware supplied, quoted separately.",
    ctaConsult: "Book an Assessment",
    ctaCompare: "Compare Packages",
    trust: ["MRA-certified POS and bridge", "POS and stock control", "Accounting sync", "Lilongwe and Blantyre support"],
    pricingEyebrow: "MRA-certified EIS + POS solution",
    pricingTitle: "Choose the setup\nthat fits the client.",
    askUs: "Book a compliance and systems assessment",
    setupFee: "Setup fee", monthlyLabel: "Monthly", perMonth: "/ mo", mostPopular: "Most Popular", whatsIncluded: "What's included",
    enquirePlan: "Enquire about this plan", customQuote: "Request a custom quote",
    integrations: "Accounting sync", integrationsNote: "Sage, QuickBooks, Pastel, Odoo and ERP integration are scoped after assessment.",
    integrationsTitle: "Integration specialists", integrationsLede: "Keep your system. We make it MRA-compliant.",
    hardwareNote: "Hardware quoted separately", setupNote: "*Setup depends on the complexity of your existing system.",
    pricingLede: "Two ways to get compliant: take an MRA-ready till, or connect the system you already run. Hardware is quoted separately.",
    addonsTitle: "Optional services", addonsLede: "Charged separately, quoted on request.",
    mbTitle: "Multi-Branch / Enterprise", mbDesc: "Running several sites or need custom integration? We scope a multi-branch rollout with accounting sync and SLA support.",
    addons: [
      ["EIS portal registration", "We register your business on the MRA EIS portal."],
      ["Barcode and product registration", "Product barcodes and catalogue set up for your stock."],
      ["Tax counsel", "General tax and compliance guidance for your business."],
    ],
    perks: [
      ["We supply the hardware too", "POS terminals, customer displays, cash drawers and printers, quoted separately."],
      ["Lilongwe and Blantyre onboarding", "On-site setup and training, with support across Malawi."],
    ],
    valueEyebrow: "Compliance | POS | Inventory | Accounting sync",
    valueTitle: "Stay compliant. Run with control.",
    valueBody: "One system, one accountable local team.",
    pillars: [
      { title: "MRA-certified receipts", body: "QR receipt evidence and audit-ready submission records." },
      { title: "Stock protection", body: "Block sales when stock is unavailable and track movement." },
      { title: "Offline support", body: "Queue allowed sales when connectivity fails and sync later." },
      { title: "Accounting sync", body: "Sage, QuickBooks, Pastel, Odoo or ERP integration." },
    ],
    howEyebrow: "Best first step", howTitle: "Start with the right package.",
    steps: [
      { step: "01", title: "Enquire", body: "Fill the form or message us. We respond the same day." },
      { step: "02", title: "Assess", body: "We review your current POS, accounting and stock setup, then recommend a package." },
      { step: "03", title: "Go live", body: "We activate the EIS bridge, train staff and stay on for monitoring and support." },
    ],
    faqEyebrow: "FAQ", faqTitle: "Common questions",
    faqSub: "Can't find what you need? Message us on WhatsApp and we'll respond the same day.",
    faqAsk: "Ask on WhatsApp", faqWa: "Hi%20TechNexus%2C%20I%20have%20a%20question%20about%20EIS",
    faqs: [
      { q: "Do you supply the hardware?", a: "Yes. We supply POS terminals, customer-facing displays, cash drawers and printers, quoted separately from the software. The Bridge option needs no new hardware, it connects the system you already run." },
      { q: "Can I keep my existing POS or accounting software?", a: "Yes. EIS Bridge & Integration is for businesses that already have a POS or accounting system and need MRA EIS connectivity, QR receipts, submission records and monitoring." },
      { q: "What happens when the internet goes down?", a: "Allowed sales can queue locally and sync later when connectivity returns, so the business can keep trading within the supported offline process." },
      { q: "What does the monthly fee cover?", a: "Monitoring, support follow-up and the software services attached to the selected package. Data migration, accounting integration and custom workflows are scoped separately." },
    ],
    contactEyebrow: "Get started", contactTitle: "Book your EIS consultation.",
    contactBody: "Tell us about your current setup and we'll recommend the right package the same day.",
    infoLabels: { wa: "WhatsApp", email: "Email", loc: "Location", web: "Website" },
    mraTitle: "MRA Certified",
    mraBody: "TechNexus provides an MRA-certified EIS compliant software solution backed by an accountable local team.",
    mraCred: "View credentials", mraDownload: "↓ Download MRA Certificate (PDF)",
    verifyCert: "Verify certificate", proudlyMw: "Proudly Malawian",
    formTitle: "Request a consultation",
    fBiz: "Business name", fBizPh: "Your business name",
    fContact: "Contact person", fContactPh: "Your name",
    fPhone: "Phone / WhatsApp",
    fPlan: "Plan of interest", fPlanPh: "Select a plan (optional)", fNotSure: "Not sure yet",
    fNotes: "Notes", fNotesPh: "Brief description of your current setup (optional)",
    fSend: "Send via WhatsApp",
    fPrivacy1: "Your details are used only to respond to this enquiry. We do not share your information with third parties.",
    fPrivacyLink: "Privacy Policy", privacyHref: "/privacy", credentialsHref: "/credentials",
    plans: [
      { desc: "An MRA-ready till on an Android tablet. For small shops, counters and sellers on the move. Hardware quoted separately.",
        features: ["Full POS on a tablet","MRA EIS receipts with QR","Stock and sales reports","Offline queue","Android app on Play Store, coming soon"] },
      { desc: "A front-shop till: all-in-one touch terminal with a customer display and cash drawer. Hardware quoted separately.",
        features: ["All-in-one touch terminal","Customer display and cash drawer","Stock protection and cashier roles","MRA EIS receipts with QR","Accounting sync"] },
      { desc: "Keep your current POS or accounting system. We connect it to MRA EIS. Sage, QuickBooks, Pastel, Odoo or custom.",
        features: ["Connects your existing system","MRA EIS submission and QR receipts","Sage, QuickBooks, Pastel, Odoo, custom","Monitoring and support"] },
    ],
  },

  pt: {
    heroTitle1: "Mantenha a conformidade.",
    heroTitle2: "Continue a vender.",
    heroSub: "POS e integração certificados pela MRA para empresas no Malawi. Leve uma caixa pronta a vender, ou mantenha o sistema que já tem e nós ligamo-lo à MRA. Recibos QR, controlo de stock, suporte offline, sincronização contabilística. Hardware fornecido, orçamentado à parte.",
    ctaConsult: "Marcar Avaliacao",
    ctaCompare: "Comparar Pacotes",
    trust: ["POS e bridge certificados pela MRA", "POS e controlo de stock", "Sincronização contabilística", "Suporte em Lilongwe e Blantyre"],
    pricingEyebrow: "Solucao EIS + POS certificada pela MRA",
    pricingTitle: "Escolha a configuracao\ncerta para o cliente.",
    askUs: "Marcar avaliacao de conformidade e sistemas",
    setupFee: "Taxa de instalacao", monthlyLabel: "Mensalidade", perMonth: "/ mes", mostPopular: "Mais Popular", whatsIncluded: "O que esta incluido",
    enquirePlan: "Informar-me sobre este plano", customQuote: "Solicitar orcamento personalizado",
    integrations: "Sincronização contabilística", integrationsNote: "Sage, QuickBooks, Pastel, Odoo e integrações ERP são definidas depois da avaliação.",
    integrationsTitle: "Especialistas em integração", integrationsLede: "Mantenha o seu sistema. Nós tornamo-lo conforme com a MRA.",
    hardwareNote: "Hardware orçamentado à parte", setupNote: "*A instalação depende da complexidade do seu sistema.",
    pricingLede: "Duas formas de ficar conforme: leve uma caixa pronta para a MRA, ou ligue o sistema que já usa. O hardware é orçamentado à parte.",
    addonsTitle: "Serviços opcionais", addonsLede: "Cobrados à parte, orçamentados a pedido.",
    mbTitle: "Multi-filial / Empresa", mbDesc: "Tem várias lojas ou precisa de integração personalizada? Definimos um rollout multi-filial com sincronização contabilística e suporte SLA.",
    addons: [
      ["Registo no portal EIS", "Registamos a sua empresa no portal EIS da MRA."],
      ["Registo de códigos de barras e produtos", "Códigos de barras e catálogo de produtos configurados para o seu stock."],
      ["Aconselhamento fiscal", "Orientação geral de impostos e conformidade para o seu negócio."],
    ],
    perks: [
      ["Também fornecemos o hardware", "Terminais POS, ecrãs para o cliente, gavetas de dinheiro e impressoras, orçamentados à parte."],
      ["Instalação em Lilongwe e Blantyre", "Instalação e formação no local, com suporte em todo o Malawi."],
    ],
    valueEyebrow: "Conformidade | POS | Inventario | Sincronizacao contabilistica",
    valueTitle: "Mantenha a conformidade. Trabalhe com controlo.",
    valueBody: "Um sistema, uma equipa local responsavel.",
    pillars: [
      { title: "Recibos certificados pela MRA", body: "Evidencia de recibo QR e registos de submissao prontos para auditoria." },
      { title: "Proteccao de stock", body: "Bloqueie vendas quando o stock nao esta disponivel e acompanhe movimentos." },
      { title: "Suporte offline", body: "Coloque vendas permitidas em fila quando a conectividade falha e sincronize depois." },
      { title: "Sincronizacao contabilistica", body: "Integracao com Sage, QuickBooks, Pastel, Odoo ou ERP." },
    ],
    howEyebrow: "Melhor primeiro passo", howTitle: "Comece com o pacote certo.",
    steps: [
      { step: "01", title: "Contacte", body: "Preencha o formulario ou envie mensagem. Respondemos no mesmo dia." },
      { step: "02", title: "Avaliacao", body: "Revemos o POS, contabilidade e stock actuais, depois recomendamos um pacote." },
      { step: "03", title: "Arranque", body: "Activamos a bridge EIS, formamos a equipa e mantemos monitorizacao e suporte." },
    ],
    faqEyebrow: "FAQ", faqTitle: "Perguntas frequentes",
    faqSub: "Nao encontra o que precisa? Envie-nos mensagem no WhatsApp e respondemos no mesmo dia.",
    faqAsk: "Perguntar no WhatsApp", faqWa: "Ola%20TechNexus%2C%20tenho%20uma%20pergunta%20sobre%20o%20EIS",
    faqs: [
      { q: "Fornecem o hardware?", a: "Sim. Fornecemos terminais POS, ecrãs para o cliente, gavetas de dinheiro e impressoras, orçamentados à parte do software. A opção Bridge não precisa de hardware novo, liga o sistema que já usa." },
      { q: "Posso manter o meu POS ou software contabilístico actual?", a: "Sim. O plano EIS Bridge & Integration é para empresas que já têm POS ou sistema contabilístico e precisam de ligação EIS da MRA, recibos QR, registos de submissão e monitorização." },
      { q: "O que acontece quando a internet falha?", a: "Vendas permitidas podem ficar em fila local e sincronizar depois quando a conectividade voltar, para que a empresa continue a vender dentro do processo offline suportado." },
      { q: "O que cobre a mensalidade?", a: "Monitorizacao, acompanhamento de suporte e os servicos de software do pacote escolhido. Migracao de dados, integracao contabilistica e fluxos personalizados sao definidos separadamente." },
    ],
    contactEyebrow: "Comece agora", contactTitle: "Marque a sua consulta EIS.",
    contactBody: "Fale-nos da sua configuracao actual e recomendamos o pacote certo no mesmo dia.",
    infoLabels: { wa: "WhatsApp", email: "Email", loc: "Localizacao", web: "Website" },
    mraTitle: "Certificado MRA",
    mraBody: "A TechNexus fornece uma solucao de software EIS certificada pela MRA, apoiada por uma equipa local responsavel.",
    mraCred: "Ver credenciais", mraDownload: "↓ Descarregar Certificado MRA (PDF)",
    verifyCert: "Verificar certificado", proudlyMw: "Orgulhosamente Malawiano",
    formTitle: "Solicitar uma consulta",
    fBiz: "Nome da empresa", fBizPh: "Nome do seu negocio",
    fContact: "Pessoa de contacto", fContactPh: "O seu nome",
    fPhone: "Telefone / WhatsApp",
    fPlan: "Plano de interesse", fPlanPh: "Seleccione um plano (opcional)", fNotSure: "Ainda nao sei",
    fNotes: "Notas", fNotesPh: "Breve descricao da sua configuracao actual (opcional)",
    fSend: "Enviar via WhatsApp",
    fPrivacy1: "Os seus dados sao utilizados apenas para responder a este pedido. Nao partilhamos a sua informacao com terceiros.",
    fPrivacyLink: "Politica de Privacidade", privacyHref: "/pt/privacy", credentialsHref: "/pt/credentials",
    plans: [
      { desc: "Uma caixa pronta para a MRA num tablet Android. Para lojas pequenas, balcões e vendedores em movimento. Hardware orçamentado à parte.",
        features: ["POS completo num tablet","Recibos EIS da MRA com QR","Stock e relatórios de vendas","Fila offline","Aplicação Android na Play Store, em breve"] },
      { desc: "Uma caixa de loja: terminal táctil tudo-em-um com ecrã para o cliente e gaveta de dinheiro. Hardware orçamentado à parte.",
        features: ["Terminal táctil tudo-em-um","Ecrã para o cliente e gaveta de dinheiro","Protecção de stock e perfis de caixa","Recibos EIS da MRA com QR","Sincronização contabilística"] },
      { desc: "Mantenha o seu POS ou sistema contabilístico actual. Nós ligamo-lo ao EIS da MRA. Sage, QuickBooks, Pastel, Odoo ou personalizado.",
        features: ["Liga o seu sistema existente","Submissão EIS da MRA e recibos QR","Sage, QuickBooks, Pastel, Odoo, personalizado","Monitorização e suporte"] },
    ],
  },

  ny: {
    heroTitle1: "Khalani mu compliance.",
    heroTitle2: "Pitirizani kugulitsa.",
    heroSub: "POS ndi integration yotsimikiziridwa ndi MRA kwa mabizinesi a ku Malawi. Tengani till yokonzeka kugulitsa, kapena sungani sisitimu yomwe muli nayo ndipo timayilumikiza ku MRA. Ma risiti a QR, stock control, offline support, accounting sync. Hardware timapereka, quoted separately.",
    ctaConsult: "Pemphani Assessment",
    ctaCompare: "Yerekezerani Mapulani",
    trust: ["POS ndi bridge yotsimikiziridwa ndi MRA", "POS ndi stock control", "Accounting sync", "Thandizo ku Lilongwe ndi Blantyre"],
    pricingEyebrow: "Solushoni ya EIS + POS yotsimikiziridwa ndi MRA",
    pricingTitle: "Sankhani setup\nyoyenera client.",
    askUs: "Book compliance ndi systems assessment",
    setupFee: "Mtengo woyambira", monthlyLabel: "Pamwezi", perMonth: "/ mwezi", mostPopular: "Yotchuka Kwambiri", whatsIncluded: "Zomwe zili mkati",
    enquirePlan: "Funsani za pulani iyi", customQuote: "Pemphani mtengo wapadera",
    integrations: "Accounting sync", integrationsNote: "Sage, QuickBooks, Pastel, Odoo ndi ERP integration zimawunikidwa pambuyo pa assessment.",
    integrationsTitle: "Akatswiri a integration", integrationsLede: "Sungani sisitimu yanu. Timayipanga kuti igwirizane ndi MRA.",
    hardwareNote: "Hardware quoted separately", setupNote: "*Setup imatengera complexity ya sisitimu yanu.",
    pricingLede: "Njira ziwiri zokhalira compliant: tengani till yokonzeka ya MRA, kapena lumikizani sisitimu yomwe mukugwiritsa kale ntchito. Hardware quoted separately.",
    addonsTitle: "Ntchito zowonjezera", addonsLede: "Zimalipiritsidwa padera, quoted pa pempho.",
    mbTitle: "Multi-Branch / Enterprise", mbDesc: "Muli ndi malo angapo kapena mukufuna custom integration? Timakonza multi-branch rollout ndi accounting sync ndi SLA support.",
    addons: [
      ["Registration pa EIS portal", "Timalembetsa bizinesi yanu pa MRA EIS portal."],
      ["Barcode ndi product registration", "Ma barcode a zinthu ndi catalogue yokonzedwa ya stock yanu."],
      ["Tax counsel", "Uphungu wa misonkho ndi compliance ya bizinesi yanu."],
    ],
    perks: [
      ["Timaperekanso hardware", "POS terminals, customer displays, cash drawers ndi printers, quoted separately."],
      ["Onboarding ku Lilongwe ndi Blantyre", "Kuyika ndi training pa site, ndi support ku Malawi yonse."],
    ],
    valueEyebrow: "Compliance | POS | Inventory | Accounting sync",
    valueTitle: "Khalani mu compliance. Yendetsani ndi control.",
    valueBody: "Sisitimu imodzi, gulu limodzi la m'deralo.",
    pillars: [
      { title: "Ma risiti otsimikiziridwa ndi MRA", body: "QR receipt evidence ndi submission records zokonzeka audit." },
      { title: "Stock protection", body: "Letsani kugulitsa stock ikakhala kulibe ndipo track movement." },
      { title: "Offline support", body: "Sungani allowed sales intaneti ikalephera ndipo sync pambuyo pake." },
      { title: "Accounting sync", body: "Sage, QuickBooks, Pastel, Odoo kapena ERP integration." },
    ],
    howEyebrow: "Gawo loyamba labwino", howTitle: "Yambani ndi package yoyenera.",
    steps: [
      { step: "01", title: "Funsani", body: "Lembani fomu kapena titumizireni uthenga. Tikuyankhani tsiku lomwelo." },
      { step: "02", title: "Kuwunika", body: "Timawunika POS, accounting ndi stock zanu za tsopano, kenako timalangiza package." },
      { step: "03", title: "Kuyamba", body: "Timayambitsa EIS bridge, kuphunzitsa staff ndi kupitiriza monitoring ndi support." },
    ],
    faqEyebrow: "Mafunso", faqTitle: "Mafunso ofunsidwa kawirikawiri",
    faqSub: "Simukupeza zomwe mukufuna? Titumizireni uthenga pa WhatsApp ndipo tikuyankhani tsiku lomwelo.",
    faqAsk: "Funsani pa WhatsApp", faqWa: "Moni%20TechNexus%2C%20ndili%20ndi%20funso%20la%20EIS",
    faqs: [
      { q: "Kodi mumapereka hardware?", a: "Inde. Timapereka POS terminals, customer displays, cash drawers ndi printers, quoted separately ndi software. Bridge option sifuna hardware yatsopano, imangolumikiza sisitimu yomwe muli nayo kale." },
      { q: "Kodi ndingasunge POS kapena accounting software yanga?", a: "Inde. EIS Bridge & Integration ndi ya mabizinesi omwe ali kale ndi POS kapena accounting system ndipo akufuna MRA EIS connectivity, QR receipts, submission records ndi monitoring." },
      { q: "Chimachitika ndi chiyani intaneti ikasowa?", a: "Allowed sales zitha kusungidwa local ndi kusync pambuyo pake intaneti ikabwerera, kuti bizinesi ipitirize kugulitsa pa offline process yomwe imathandizidwa." },
      { q: "Mtengo wa pamwezi umakwirira chiyani?", a: "Monitoring, support follow-up ndi software services za package yosankhidwa. Data migration, accounting integration ndi custom workflows zimawunikidwa payokha." },
    ],
    contactEyebrow: "Yambani", contactTitle: "Pemphani uphungu wanu wa EIS.",
    contactBody: "Tiuzeni za sisitimu yanu ya tsopano ndipo tikulangizani package yoyenera tsiku lomwelo.",
    infoLabels: { wa: "WhatsApp", email: "Imelo", loc: "Malo", web: "Webusaiti" },
    mraTitle: "Otsimikiziridwa ndi MRA",
    mraBody: "TechNexus imapereka EIS compliant software solution yotsimikiziridwa ndi MRA, yothandizidwa ndi gulu la m'deralo.",
    mraCred: "Onani umboni", mraDownload: "↓ Tsitsani Satifiketi ya MRA (PDF)",
    verifyCert: "Tsimikizani satifiketi", proudlyMw: "Wa Malawi Monyadira",
    formTitle: "Pemphani uphungu",
    fBiz: "Dzina la bizinesi", fBizPh: "Dzina la bizinesi yanu",
    fContact: "Munthu wolumikizana naye", fContactPh: "Dzina lanu",
    fPhone: "Foni / WhatsApp",
    fPlan: "Pulani yomwe mukufuna", fPlanPh: "Sankhani pulani (si kofunikira)", fNotSure: "Sindikudziwa panobe",
    fNotes: "Zolemba", fNotesPh: "Fotokozani mwachidule sisitimu yanu ya tsopano (si kofunikira)",
    fSend: "Tumizani pa WhatsApp",
    fPrivacy1: "Zidziwitso zanu zimagwiritsidwa ntchito pokuyankhani nokha. Sitigawana zidziwitso zanu ndi ena.",
    fPrivacyLink: "Ndondomeko ya Chinsinsi", privacyHref: "/ny/privacy", credentialsHref: "/ny/credentials",
    plans: [
      { desc: "Till yokonzeka ya MRA pa tablet ya Android. Kwa masitolo ang'onoang'ono, ma counter ndi ogulitsa oyenda. Hardware quoted separately.",
        features: ["POS yonse pa tablet","MRA EIS receipts ndi QR","Stock ndi sales reports","Offline queue","Android app pa Play Store, ikubwera"] },
      { desc: "Till ya pa sitolo: all-in-one touch terminal ndi customer display ndi cash drawer. Hardware quoted separately.",
        features: ["All-in-one touch terminal","Customer display ndi cash drawer","Stock protection ndi cashier roles","MRA EIS receipts ndi QR","Accounting sync"] },
      { desc: "Sungani POS kapena accounting system yanu ya tsopano. Timayilumikiza ku MRA EIS. Sage, QuickBooks, Pastel, Odoo kapena custom.",
        features: ["Imalumikiza sisitimu yanu","MRA EIS submission ndi QR receipts","Sage, QuickBooks, Pastel, Odoo, custom","Monitoring ndi support"] },
    ],
  },
};

function Check({ color = G }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
      <circle cx="8" cy="8" r="8" fill={color === G ? GL : "#F0FDF4"} />
      <path d="M4.5 8.2l2.2 2.2 4.5-4.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const sectionLight: React.CSSProperties = { padding: "96px 32px", background: WHITE };
const sectionAlt: React.CSSProperties   = { padding: "96px 32px", background: LIGHT };
const container: React.CSSProperties   = { maxWidth: "1160px", margin: "0 auto" };
const eyebrow: React.CSSProperties     = { fontSize: "14px", fontWeight: 600, color: G, marginBottom: "12px" };
const sectionTitle: React.CSSProperties = { fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 40px)", color: INK, lineHeight: 1.15, letterSpacing: "-0.02em" };
const bodyText: React.CSSProperties    = { fontSize: "15px", color: BODY, lineHeight: 1.7, fontWeight: 400 };
const inputStyle: React.CSSProperties  = { width: "100%", padding: "10px 14px", background: WHITE, border: "1px solid " + BDR2, borderRadius: "6px", color: INK, fontSize: "14px", outline: "none", boxSizing: "border-box" as const };

export default function EisClient({ lang = "en" }: { lang?: EisLang }) {
  const t = STR[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bizName, setBizName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [notes, setNotes] = useState("");

  const plans = PLAN_META.map((meta, i) => ({
    ...meta,
    desc: t.plans[i].desc,
    features: t.plans[i].features,
    wa: encodeURIComponent(`Hi TechNexus, I would like to enquire about the ${meta.name} package`),
  }));

  const [titleLine1, titleLine2] = t.pricingTitle.split("\n");

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    let msg = "EIS Consultation Request";
    if (bizName) msg += "\nBusiness: " + bizName;
    if (contactName) msg += "\nContact: " + contactName;
    if (phone) msg += "\nPhone: " + phone;
    if (selectedPlan) msg += "\nPlan: " + selectedPlan;
    if (notes) msg += "\nNotes: " + notes;
    window.open("https://wa.me/265889941700?text=" + encodeURIComponent(msg), "_blank");
  }

  return (
    <div style={{ background: WHITE, color: INK, fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>

      {/* HERO */}
      <section style={{ background: "#F6F8F7", padding: "120px 32px 96px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: G }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(27,127,58,0.08) 0%, rgba(27,127,58,0) 42%)", pointerEvents: "none" }} />
        <div style={{ ...container, position: "relative" }}>
          <div style={{ ...eyebrow, color: G, marginBottom: "20px" }}>{t.valueEyebrow}</div>
          <h1 style={{
            fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
            color: INK,
            lineHeight: 1.08,
            letterSpacing: 0,
            maxWidth: "780px",
            marginBottom: "24px",
          }}>
            {t.heroTitle1}<br />
            <span style={{ color: G }}>{t.heroTitle2}</span>
          </h1>
          <p style={{ fontSize: "18px", color: MUTED, maxWidth: "680px", lineHeight: 1.7, marginBottom: "40px", fontWeight: 400 }}>
            {t.heroSub}
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: G, color: WHITE, fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "7px", textDecoration: "none", letterSpacing: "-0.01em" }}>
              {t.ctaConsult}
            </a>
            <a href="#pricing" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: WHITE, color: INK, fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "7px", border: `1px solid ${BDR2}`, textDecoration: "none" }}>
              {t.ctaCompare}
            </a>
          </div>
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginTop: "56px", paddingTop: "40px", borderTop: `1px solid ${BDR}` }}>
            {t.trust.map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7.2l3 3 6-6" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontSize: "13px", color: BODY, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ ...sectionLight, paddingTop: "80px" }}>
        <div style={container}>
          <div style={{ marginBottom: "12px", ...eyebrow }}>{t.pricingEyebrow}</div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", gap: "16px" }}>
            <h2 style={{ ...sectionTitle, maxWidth: "500px" }}>
              {titleLine1}<br />{titleLine2}
            </h2>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GL, color: G, fontWeight: 600, fontSize: "14px", padding: "11px 22px", borderRadius: "7px", border: "1px solid rgba(27,127,58,0.25)", textDecoration: "none", whiteSpace: "nowrap" as const }}>
              {t.askUs}
            </a>
          </div>

          <p style={{ fontSize: "15px", color: BODY, lineHeight: 1.65, maxWidth: "720px", marginTop: "-24px", marginBottom: "40px" }}>{t.pricingLede}</p>

          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px", alignItems: "start" }}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: WHITE,
                  border: plan.popular ? `2px solid ${G}` : `1px solid ${BDR}`,
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: plan.popular ? "0 4px 24px rgba(27,127,58,0.12)" : "0 1px 4px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "4px", background: plan.popular ? G : BDR }} />
                <div style={{ padding: "24px 24px 20px" }}>
                  {plan.popular && (
                    <div style={{ display: "inline-block", background: G, color: WHITE, fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "4px", marginBottom: "12px" }}>
                      {t.mostPopular}
                    </div>
                  )}
                  <h3 style={{ fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)", fontSize: "17px", fontWeight: 700, color: INK, marginBottom: "6px" }}>{plan.name}</h3>
                  <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6, marginBottom: "20px", minHeight: "52px" }}>{plan.desc}</p>
                  <div style={{ padding: "16px", background: plan.popular ? GL : LIGHT, borderRadius: "8px", marginBottom: "0" }}>
                    <div style={{ fontSize: "11px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{t.setupFee}</div>
                    <div style={{ fontSize: "20px", fontWeight: 800, color: plan.popular ? G : INK, letterSpacing: "-0.02em", marginBottom: "10px" }}>{plan.setup}{plan.note ? "*" : ""}</div>
                    <div style={{ borderTop: `1px solid ${plan.popular ? "rgba(27,127,58,0.2)" : BDR}`, paddingTop: "10px" }}>
                      <div style={{ fontSize: "11px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{t.monthlyLabel}</div>
                      <div style={{ fontSize: "16px", fontWeight: 700, color: plan.popular ? G : BODY }}>{plan.monthly} {t.perMonth}</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "0 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  {plan.hardware && <div style={{ fontSize: "11px", fontWeight: 700, color: G, marginBottom: "10px" }}>{t.hardwareNote}</div>}
                  <div style={{ fontSize: "11px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px", marginTop: "4px" }}>{t.whatsIncluded}</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
                        <Check color={plan.popular ? G : "#6B7280"} />
                        <span style={{ fontSize: "13px", color: plan.popular ? BODY : MUTED, lineHeight: 1.55 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={"https://wa.me/265889941700?text=" + plan.wa}
                    target="_blank"
                    rel="noopener"
                    style={{
                      display: "block",
                      textAlign: "center",
                      marginTop: "24px",
                      padding: "12px 20px",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: 700,
                      textDecoration: "none",
                      background: plan.popular ? G : WHITE,
                      color: plan.popular ? WHITE : INK,
                      border: plan.popular ? "none" : `1px solid ${BDR2}`,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {plan.name === "Multi-Branch / Enterprise" ? t.customQuote : t.enquirePlan}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "20px", border: `1px solid ${BDR}`, borderRadius: "12px", background: LIGHT, padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 420px" }}>
              <h3 style={{ fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)", fontSize: "18px", fontWeight: 700, color: INK, marginBottom: "6px" }}>{t.mbTitle}</h3>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6, margin: "0 0 10px" }}>{t.mbDesc}</p>
              <div style={{ fontSize: "13px", fontWeight: 600, color: BODY }}>{t.setupFee}: {MB.setup} &middot; {t.monthlyLabel}: {MB.monthly} {t.perMonth}</div>
            </div>
            <a href={"https://wa.me/265889941700?text=" + encodeURIComponent("Hi TechNexus, I would like to enquire about the Multi-Branch / Enterprise package")} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: G, color: WHITE, fontWeight: 700, fontSize: "14px", padding: "12px 24px", borderRadius: "7px", textDecoration: "none", whiteSpace: "nowrap" as const }}>
              {t.customQuote}
            </a>
          </div>

          <p style={{ fontSize: "12px", color: MUTED, marginTop: "14px" }}>{t.setupNote}</p>

          <div style={{ marginTop: "56px", marginBottom: "20px" }}>
            <div style={eyebrow}>{t.integrationsTitle}</div>
            <h2 style={{ ...sectionTitle, fontSize: "clamp(22px, 3vw, 32px)", maxWidth: "640px" }}>{t.integrationsLede}</h2>
          </div>

          <div style={{ marginTop: "0", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", padding: "20px 24px", background: LIGHT, borderRadius: "10px", border: `1px solid ${BDR}` }}>
            <div style={{ fontSize: "12px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" as const }}>{t.integrations}</div>
            <div style={{ width: "1px", height: "20px", background: BDR }} />
            {["Sage", "QuickBooks", "Pastel", "Odoo", "ERP"].map(name => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: "7px", background: WHITE, border: `1px solid ${BDR}`, borderRadius: "6px", padding: "6px 14px" }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3 3 6-6" stroke={G} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontSize: "13px", fontWeight: 600, color: BODY }}>{name}</span>
              </div>
            ))}
            <span style={{ fontSize: "12px", color: MUTED }}>{t.integrationsNote}</span>
          </div>

          <div style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: BDR, border: `1px solid ${BDR}`, borderRadius: "10px", overflow: "hidden" }}>
            {t.perks.map(([pt1, pb]) => (
              <div key={pt1} style={{ background: WHITE, padding: "20px 22px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: INK, marginBottom: "4px" }}>{pt1}</div>
                <p style={{ fontSize: "12px", color: MUTED, lineHeight: 1.6, margin: 0 }}>{pb}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px" }}>
            <div style={eyebrow}>{t.addonsTitle}</div>
            <p style={{ fontSize: "13px", color: MUTED, marginBottom: "20px" }}>{t.addonsLede}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: BDR, border: `1px solid ${BDR}`, borderRadius: "10px", overflow: "hidden" }}>
              {t.addons.map(([an, ab]) => (
                <div key={an} style={{ background: WHITE, padding: "20px 22px" }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: INK, marginBottom: "4px" }}>{an}</div>
                  <p style={{ fontSize: "12px", color: MUTED, lineHeight: 1.6, margin: 0 }}>{ab}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section id="value" style={{ ...sectionAlt }}>
        <div style={container}>
          <div style={{ ...eyebrow }}>{t.valueEyebrow}</div>
          <h2 style={{ ...sectionTitle, maxWidth: "560px", marginBottom: "12px" }}>
            {t.valueTitle}
          </h2>
          <p style={{ ...bodyText, maxWidth: "560px", marginBottom: "56px" }}>
            {t.valueBody}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {t.pillars.map((p) => (
              <div key={p.title} style={{ background: WHITE, border: `1px solid ${BDR}`, borderRadius: "10px", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: GL, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.2l3.5 3.5 6.5-6.5" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: INK }}>{p.title}</div>
                <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.65, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ ...sectionLight }}>
        <div style={container}>
          <div style={{ ...eyebrow }}>{t.howEyebrow}</div>
          <h2 style={{ ...sectionTitle, marginBottom: "48px" }}>{t.howTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2px", background: BDR, border: `1px solid ${BDR}`, borderRadius: "12px", overflow: "hidden" }}>
            {t.steps.map((s) => (
              <div key={s.step} style={{ background: WHITE, padding: "28px 24px" }}>
                <div style={{ fontSize: "11px", fontWeight: 800, color: G, letterSpacing: "0.1em", marginBottom: "12px" }}>{s.step}</div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: INK, marginBottom: "8px" }}>{s.title}</div>
                <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ ...sectionAlt }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "start" }} className="faq-grid">
            <div>
              <div style={{ ...eyebrow }}>{t.faqEyebrow}</div>
              <h2 style={{ ...sectionTitle, marginBottom: "16px" }}>{t.faqTitle}</h2>
              <p style={{ ...bodyText, fontSize: "14px" }}>
                {t.faqSub}
              </p>
              <a href={"https://wa.me/265889941700?text=" + t.faqWa} target="_blank" rel="noopener" style={{ display: "inline-flex", marginTop: "20px", alignItems: "center", gap: "8px", background: G, color: WHITE, fontWeight: 700, fontSize: "13px", padding: "10px 20px", borderRadius: "7px", textDecoration: "none" }}>
                {t.faqAsk}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: BDR, border: `1px solid ${BDR}`, borderRadius: "12px", overflow: "hidden" }}>
              {t.faqs.map((f, i) => (
                <div key={i} style={{ background: openFaq === i ? GL : WHITE }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", padding: "20px 24px", fontFamily: "inherit", fontSize: "14px", fontWeight: 600, color: INK, cursor: "pointer", background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                  >
                    {f.q}
                    <span style={{ fontSize: "20px", fontWeight: 400, color: G, marginLeft: "16px", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>+</span>
                  </button>
                  {openFaq === i && (
                    <p style={{ padding: "0 24px 20px", fontSize: "14px", color: BODY, lineHeight: 1.7, fontWeight: 400, maxWidth: "640px", margin: 0 }}>{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ ...sectionLight, borderTop: `1px solid ${BDR}` }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "start" }} className="contact-grid">
            <div>
              <div style={{ ...eyebrow }}>{t.contactEyebrow}</div>
              <h2 style={{ ...sectionTitle, marginBottom: "16px" }}>{t.contactTitle}</h2>
              <p style={{ ...bodyText, marginBottom: "32px" }}>
                {t.contactBody}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: t.infoLabels.wa, val: "+265 889 941 700" },
                  { label: t.infoLabels.email, val: "technexus_mw@proton.me" },
                  { label: t.infoLabels.loc, val: "Lilongwe & Blantyre, Malawi" },
                  { label: t.infoLabels.web, val: "www.technexusmw.com" },
                ].map(({ label, val }) => (
                  <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: G, flexShrink: 0, marginTop: "6px" }} />
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                      <div style={{ fontSize: "14px", color: INK, fontWeight: 500 }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "36px", padding: "20px", background: LIGHT, borderRadius: "10px", border: `1px solid ${BDR}` }}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>{t.mraTitle}</div>
                <p style={{ fontSize: "13px", color: BODY, lineHeight: 1.6, margin: 0 }}>
                  {t.mraBody} <Link href={t.credentialsHref} style={{ color: G, textDecoration: "underline", textUnderlineOffset: "3px" }}>{t.mraCred}</Link>
                </p>
                <a
                  href="/certificates/technexus-mra-eis-certificate.pdf"
                  download
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", fontSize: "13px", fontWeight: 700, color: G, textDecoration: "none" }}
                >
                  {t.mraDownload}
                </a>
              </div>

              {/* Trust badges */}
              <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <a href={t.credentialsHref} style={{ flex: "1 1 160px", textDecoration: "none" }}>
                  <div style={{ padding: "20px", background: WHITE, borderRadius: "10px", border: `1px solid ${BDR}`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/badges/mra-eis-certified.svg" alt="MRA EIS Certified Integrator — TechNexus" width={120} height={120} loading="lazy" style={{ display: "block" }} />
                    <span style={{ fontSize: "11px", fontWeight: 700, color: BODY, letterSpacing: "0.04em", textAlign: "center" }}>{t.verifyCert}</span>
                  </div>
                </a>
                <a href="https://buymalawi.mw/" target="_blank" rel="noopener" style={{ flex: "1 1 160px", textDecoration: "none" }}>
                  <div style={{ padding: "20px", background: WHITE, borderRadius: "10px", border: `1px solid ${BDR}`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/badges/buy-malawian.svg" alt="Buy Malawian, Build Malawi — TechNexus is a verified member" width={120} height={120} loading="lazy" style={{ display: "block" }} />
                    <span style={{ fontSize: "11px", fontWeight: 700, color: BODY, letterSpacing: "0.04em", textAlign: "center" }}>{t.proudlyMw}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <div style={{ background: WHITE, border: `1px solid ${BDR}`, borderRadius: "12px", padding: "36px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)", fontSize: "18px", fontWeight: 700, color: INK, marginBottom: "24px" }}>{t.formTitle}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { label: t.fBiz, value: bizName, setter: setBizName, placeholder: t.fBizPh, type: "text" },
                    { label: t.fContact, value: contactName, setter: setContactName, placeholder: t.fContactPh, type: "text" },
                    { label: t.fPhone, value: phone, setter: setPhone, placeholder: "+265 ...", type: "tel" },
                  ].map(({ label, value, setter, placeholder, type }) => (
                    <div key={label}>
                      <label style={{ fontSize: "12px", fontWeight: 600, color: BODY, display: "block", marginBottom: "6px" }}>{label}</label>
                      <input
                        type={type}
                        value={value}
                        onChange={e => setter(e.target.value)}
                        placeholder={placeholder}
                        style={inputStyle}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: BODY, display: "block", marginBottom: "6px" }}>{t.fPlan}</label>
                    <select value={selectedPlan} onChange={e => setSelectedPlan(e.target.value)} style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="">{t.fPlanPh}</option>
                      {plans.map(p => <option key={p.name}>{p.name}</option>)}
                      <option>{t.fNotSure}</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: BODY, display: "block", marginBottom: "6px" }}>{t.fNotes}</label>
                    <textarea
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder={t.fNotesPh}
                      rows={3}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                  <button
                    onClick={submitForm}
                    style={{ background: G, color: WHITE, fontWeight: 700, fontSize: "15px", padding: "13px 24px", borderRadius: "7px", border: "none", cursor: "pointer", letterSpacing: "-0.01em" }}
                  >
                    {t.fSend}
                  </button>
                  <p style={{ fontSize: "11px", color: MUTED, lineHeight: 1.6, textAlign: "center", margin: 0 }}>
                    {t.fPrivacy1}{" "}
                    <Link href={t.privacyHref} style={{ color: G, textDecoration: "underline" }}>{t.fPrivacyLink}</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
        input:focus, select:focus, textarea:focus {
          border-color: #1B7F3A !important;
          box-shadow: 0 0 0 3px rgba(27,127,58,0.12);
        }
        a[href^="https://wa.me"]:hover { opacity: 0.88; }
      `}</style>
    </div>
  );
}
