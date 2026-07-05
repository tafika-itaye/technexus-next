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
  { name: "Bridge Only",              setup: "MWK 350,000",       monthly: "MWK 75,000",        popular: false },
  { name: "Mobile POS Starter",       setup: "MWK 850,000",       monthly: "MWK 95,000",        popular: false },
  { name: "Counter POS Business",     setup: "MWK 1,875,000",     monthly: "MWK 190,000",       popular: true  },
  { name: "Retail Pro",               setup: "MWK 3,450,000",     monthly: "MWK 315,000",       popular: false },
  { name: "Multi-Branch / Enterprise", setup: "From MWK 5,600,000", monthly: "From MWK 500,000", popular: false },
];

const STR: Record<EisLang, {
  heroTitle1: string; heroTitle2: string; heroSub: string; ctaConsult: string; ctaCompare: string;
  trust: string[];
  pricingEyebrow: string; pricingTitle: string; askUs: string;
  setupFee: string; monthlyLabel: string; perMonth: string; mostPopular: string; whatsIncluded: string;
  enquirePlan: string; customQuote: string;
  integrations: string; integrationsNote: string;
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
    heroTitle1: "EIS Compliance, POS,",
    heroTitle2: "and Accounting, ",
    heroSub: "Connect your business to MRA EIS within 72 hours. Keep your current system or deploy a full counter POS with Sage and QuickBooks sync built in.",
    ctaConsult: "Book EIS Consultation",
    ctaCompare: "Compare Packages",
    trust: ["72-hr onboarding", "MRA-signed QR receipts", "Sage & QuickBooks sync", "Blantyre-based support"],
    pricingEyebrow: "Pricing",
    pricingTitle: "EIS + POS + Accounting.\nOne rate card.",
    askUs: "Not sure which plan? Ask us",
    setupFee: "Setup fee", monthlyLabel: "Monthly", perMonth: "/ mo", mostPopular: "Most Popular", whatsIncluded: "What's included",
    enquirePlan: "Enquire about this plan", customQuote: "Request a custom quote",
    integrations: "Accounting integrations", integrationsNote: "Available on Counter POS Business and above.",
    perks: [
      ["10% annual discount", "Pay monthly fees annually and save 10%."],
      ["72-hr onboarding", "Bridge-only clients live within 1 to 3 business days."],
      ["No lock-in surprises", "Clear pricing from day one. No hidden integration fees."],
      ["Malawi-first", "Blantyre-based team. No offshore queues. Same-day response."],
    ],
    valueEyebrow: "More than EIS compliance",
    valueTitle: "A retail operations platform built on compliance.",
    valueBody: "TechNexus EIS is not just a fiscal receipt printer. It is a full-stack retail and compliance platform that keeps your business trading, your stock accurate, and your MRA records clean.",
    pillars: [
      { title: "MRA-certified fiscal receipts", body: "Every sale carries a digitally signed MRA QR receipt. Your compliance is provable and audit-ready from day one." },
      { title: "Stock protection before sale", body: "Sales are blocked when stock runs out. No over-selling, no correction headaches, no MRA discrepancy risk." },
      { title: "Offline receipts for allowed transactions", body: "Power cuts and network drops do not stop your trading. Queued submissions sync automatically when connectivity resumes." },
      { title: "Sage and QuickBooks accounting sync", body: "Counter POS Business and above sync live with Sage Business Cloud Accounting and QuickBooks Online." },
      { title: "Manager dashboards and audit trail", body: "Full transaction history with MRA invoice numbers. Voids, returns, and credit notes tracked and audit-ready." },
      { title: "Local Malawi onboarding and support", body: "Blantyre-based team. Same-day response. MRA updates handled automatically. You trade; we keep you compliant." },
    ],
    howEyebrow: "Onboarding", howTitle: "You're live in five steps.",
    steps: [
      { step: "01", title: "Enquire", body: "Fill the form or message us. We confirm your requirements the same day." },
      { step: "02", title: "Assess", body: "We review your current setup and recommend bridge-only or full POS." },
      { step: "03", title: "Register", body: "We register your POS with MRA and activate each terminal." },
      { step: "04", title: "Go Live", body: "On-site setup. First MRA-signed QR receipt printed. Staff trained." },
      { step: "05", title: "Monitor", body: "Live monitoring from day one. MRA updates applied automatically." },
    ],
    faqEyebrow: "FAQ", faqTitle: "Common questions",
    faqSub: "Can't find what you need? Message us on WhatsApp and we'll respond the same day.",
    faqAsk: "Ask on WhatsApp", faqWa: "Hi%20TechNexus%2C%20I%20have%20a%20question%20about%20EIS",
    faqs: [
      { q: "Do I need to buy new hardware?", a: "Not always. If you already have a POS or accounting system, the Bridge Only plan connects it to MRA EIS without hardware changes. If you need a full POS terminal, we supply and configure it as part of the Mobile POS, Counter POS, or Retail Pro packages." },
      { q: "What happens when the internet goes down?", a: "The system queues all transactions locally and submits them to MRA when connectivity resumes. You keep trading without interruption. MRA allows a defined offline window and our system handles the sync automatically." },
      { q: "How long does MRA registration take?", a: "Bridge-only clients are typically live within 1 to 3 business days. Counter and Retail POS installations take 3 to 5 days depending on the number of terminals. We handle MRA registration and device activation on your behalf." },
      { q: "Can I keep my existing POS or accounting software?", a: "Yes. The Bridge Only plan is designed exactly for this. We integrate with common systems used in Malawi including QuickBooks and Sage. We assess your system before recommending the right plan." },
      { q: "What does the monthly fee cover?", a: "Ongoing monitoring, same-day support, and all MRA update handling. When MRA releases firmware or compliance updates, we apply them at no extra charge. The monthly fee is fixed with no hidden integration costs." },
      { q: "Does the Counter POS Business plan really sync with QuickBooks and Sage?", a: "Yes. Counter POS Business and above include live two-way sync with Sage Business Cloud Accounting and QuickBooks Online, including MRA invoice ID and QR write-back so your accounting records match MRA records precisely." },
    ],
    contactEyebrow: "Get started", contactTitle: "Book your EIS consultation.",
    contactBody: "We confirm your requirements the same day you reach out. No obligation. No boilerplate sales calls. Just a direct conversation about what your business needs.",
    infoLabels: { wa: "WhatsApp", email: "Email", loc: "Location", web: "Website" },
    mraTitle: "MRA Certified",
    mraBody: "TechNexus is a certified fiscal device integrator under the MRA EIS framework. Your compliance is backed by an accredited local partner.",
    mraCred: "View credentials", mraDownload: "↓ Download MRA Certificate (PDF)",
    verifyCert: "Verify certificate →", proudlyMw: "Proudly Malawian",
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
      { desc: "For businesses with an existing POS or accounting system that only need MRA EIS connectivity.",
        features: ["MRA EIS bridge","Terminal activation support","Online invoice submission","QR receipt support","Basic monitoring","Email support"] },
      { desc: "For small shops, mobile sellers, food service, and market traders.",
        features: ["Mobile / tablet POS","MRA fiscal receipts","Product catalogue","Basic stock tracking","Offline receipt support for allowed sales","Receipt print support","Standard onboarding"] },
      { desc: "For shops, pharmacies, general dealers, and counter-based retail.",
        features: ["Full counter POS","MRA online and offline sales handling","Signed QR receipts","Stock protection, prevents over-selling","Cashier and manager user roles","Inventory dashboard","Customer display support","Sage Business Cloud Accounting sync","QuickBooks Online sync","MRA invoice ID and QR write-back","Failed invoice monitoring","Priority setup"] },
      { desc: "For wholesalers, multi-department stores, and high-volume retail.",
        features: ["Everything in Counter POS Business","Advanced inventory controls","Low-stock alerts","Supplier and cost tracking","Returns and credit notes","Customer purchase history","Branch-level reports","Stock drift alerts against MRA","Accountant / month-end export pack","Priority support"] },
      { desc: "For multi-branch operators, groups, and custom deployments.",
        features: ["Multi-branch rollout","Multi-terminal management","Consolidated reporting","Dedicated onboarding manager","Custom accounting integration","Custom workflows","SLA support","Field deployment planning","Staff training","Data cleanup and migration"] },
    ],
  },

  pt: {
    heroTitle1: "Conformidade EIS, POS",
    heroTitle2: "e Contabilidade, ",
    heroSub: "Ligue o seu negocio ao EIS da MRA em 72 horas. Mantenha o seu sistema actual ou instale um POS de balcao completo com sincronizacao Sage e QuickBooks integrada.",
    ctaConsult: "Marcar Consulta EIS",
    ctaCompare: "Comparar Pacotes",
    trust: ["Integracao em 72h", "Recibos QR assinados pela MRA", "Sincronizacao Sage & QuickBooks", "Suporte a partir de Blantyre"],
    pricingEyebrow: "Precos",
    pricingTitle: "EIS + POS + Contabilidade.\nUma unica tabela de precos.",
    askUs: "Nao sabe qual plano? Pergunte-nos",
    setupFee: "Taxa de instalacao", monthlyLabel: "Mensalidade", perMonth: "/ mes", mostPopular: "Mais Popular", whatsIncluded: "O que esta incluido",
    enquirePlan: "Informar-me sobre este plano", customQuote: "Solicitar orcamento personalizado",
    integrations: "Integracoes contabilisticas", integrationsNote: "Disponivel no Counter POS Business e superiores.",
    perks: [
      ["10% de desconto anual", "Pague as mensalidades anualmente e poupe 10%."],
      ["Integracao em 72h", "Clientes bridge activos em 1 a 3 dias uteis."],
      ["Sem surpresas de fidelizacao", "Precos claros desde o primeiro dia. Sem taxas de integracao ocultas."],
      ["Malawi primeiro", "Equipa em Blantyre. Sem filas offshore. Resposta no mesmo dia."],
    ],
    valueEyebrow: "Mais do que conformidade EIS",
    valueTitle: "Uma plataforma de operacoes de retalho construida sobre a conformidade.",
    valueBody: "O TechNexus EIS nao e apenas uma impressora de recibos fiscais. E uma plataforma completa de retalho e conformidade que mantem o seu negocio a vender, o seu stock exacto e os seus registos MRA limpos.",
    pillars: [
      { title: "Recibos fiscais certificados pela MRA", body: "Cada venda tem um recibo QR da MRA assinado digitalmente. A sua conformidade e comprovavel e pronta para auditoria desde o primeiro dia." },
      { title: "Proteccao de stock antes da venda", body: "As vendas sao bloqueadas quando o stock acaba. Sem sobre-venda, sem dores de cabeca com correccoes, sem risco de discrepancias na MRA." },
      { title: "Recibos offline para transaccoes permitidas", body: "Cortes de energia e falhas de rede nao param o seu negocio. As submissoes em fila sincronizam automaticamente quando a ligacao volta." },
      { title: "Sincronizacao contabilistica Sage e QuickBooks", body: "Counter POS Business e superiores sincronizam em tempo real com Sage Business Cloud Accounting e QuickBooks Online." },
      { title: "Paineis de gestao e trilho de auditoria", body: "Historico completo de transaccoes com numeros de factura da MRA. Anulacoes, devolucoes e notas de credito registadas e prontas para auditoria." },
      { title: "Integracao e suporte local no Malawi", body: "Equipa em Blantyre. Resposta no mesmo dia. Actualizacoes da MRA tratadas automaticamente. Voce vende; nos mantemos a conformidade." },
    ],
    howEyebrow: "Integracao", howTitle: "Esta activo em cinco passos.",
    steps: [
      { step: "01", title: "Contacte", body: "Preencha o formulario ou envie mensagem. Confirmamos os requisitos no mesmo dia." },
      { step: "02", title: "Avaliacao", body: "Analisamos o seu sistema actual e recomendamos bridge ou POS completo." },
      { step: "03", title: "Registo", body: "Registamos o seu POS na MRA e activamos cada terminal." },
      { step: "04", title: "Arranque", body: "Instalacao no local. Primeiro recibo QR assinado pela MRA impresso. Equipa formada." },
      { step: "05", title: "Monitorizacao", body: "Monitorizacao em tempo real desde o primeiro dia. Actualizacoes da MRA aplicadas automaticamente." },
    ],
    faqEyebrow: "FAQ", faqTitle: "Perguntas frequentes",
    faqSub: "Nao encontra o que precisa? Envie-nos mensagem no WhatsApp e respondemos no mesmo dia.",
    faqAsk: "Perguntar no WhatsApp", faqWa: "Ola%20TechNexus%2C%20tenho%20uma%20pergunta%20sobre%20o%20EIS",
    faqs: [
      { q: "Preciso de comprar hardware novo?", a: "Nem sempre. Se ja tem um POS ou sistema contabilistico, o plano Bridge Only liga-o ao EIS da MRA sem alteracoes de hardware. Se precisa de um terminal POS completo, fornecemos e configuramos como parte dos pacotes Mobile POS, Counter POS ou Retail Pro." },
      { q: "O que acontece quando a internet falha?", a: "O sistema coloca todas as transaccoes em fila local e submete-as a MRA quando a ligacao volta. Continua a vender sem interrupcao. A MRA permite uma janela offline definida e o nosso sistema trata da sincronizacao automaticamente." },
      { q: "Quanto tempo demora o registo na MRA?", a: "Clientes bridge estao normalmente activos em 1 a 3 dias uteis. Instalacoes Counter e Retail POS demoram 3 a 5 dias, dependendo do numero de terminais. Tratamos do registo na MRA e da activacao dos dispositivos por si." },
      { q: "Posso manter o meu POS ou software contabilistico actual?", a: "Sim. O plano Bridge Only foi desenhado exactamente para isso. Integramos com os sistemas comuns no Malawi, incluindo QuickBooks e Sage. Avaliamos o seu sistema antes de recomendar o plano certo." },
      { q: "O que cobre a mensalidade?", a: "Monitorizacao continua, suporte no mesmo dia e todas as actualizacoes da MRA. Quando a MRA lanca actualizacoes de firmware ou conformidade, aplicamo-las sem custo extra. A mensalidade e fixa, sem custos de integracao ocultos." },
      { q: "O plano Counter POS Business sincroniza mesmo com QuickBooks e Sage?", a: "Sim. Counter POS Business e superiores incluem sincronizacao bidireccional em tempo real com Sage Business Cloud Accounting e QuickBooks Online, incluindo o ID de factura da MRA e o write-back do QR, para que os seus registos contabilisticos correspondam exactamente aos da MRA." },
    ],
    contactEyebrow: "Comece agora", contactTitle: "Marque a sua consulta EIS.",
    contactBody: "Confirmamos os seus requisitos no mesmo dia em que nos contacta. Sem compromisso. Sem chamadas de vendas ensaiadas. Apenas uma conversa directa sobre o que o seu negocio precisa.",
    infoLabels: { wa: "WhatsApp", email: "Email", loc: "Localizacao", web: "Website" },
    mraTitle: "Certificado MRA",
    mraBody: "A TechNexus e um integrador de dispositivos fiscais certificado no ambito do EIS da MRA. A sua conformidade e apoiada por um parceiro local acreditado.",
    mraCred: "Ver credenciais", mraDownload: "↓ Descarregar Certificado MRA (PDF)",
    verifyCert: "Verificar certificado →", proudlyMw: "Orgulhosamente Malawiano",
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
      { desc: "Para empresas com POS ou sistema contabilistico existente que apenas precisam de ligacao ao EIS da MRA.",
        features: ["Bridge EIS da MRA","Suporte de activacao de terminais","Submissao de facturas online","Suporte de recibos QR","Monitorizacao basica","Suporte por email"] },
      { desc: "Para pequenas lojas, vendedores moveis, restauracao e comerciantes de mercado.",
        features: ["POS movel / tablet","Recibos fiscais da MRA","Catalogo de produtos","Controlo basico de stock","Recibos offline para vendas permitidas","Suporte de impressao de recibos","Integracao standard"] },
      { desc: "Para lojas, farmacias, comerciantes gerais e retalho de balcao.",
        features: ["POS de balcao completo","Gestao de vendas online e offline da MRA","Recibos QR assinados","Proteccao de stock, evita sobre-venda","Perfis de caixa e gestor","Painel de inventario","Suporte de ecra para cliente","Sincronizacao Sage Business Cloud Accounting","Sincronizacao QuickBooks Online","Write-back de ID de factura e QR da MRA","Monitorizacao de facturas falhadas","Instalacao prioritaria"] },
      { desc: "Para grossistas, lojas multi-departamento e retalho de alto volume.",
        features: ["Tudo do Counter POS Business","Controlos avancados de inventario","Alertas de stock baixo","Controlo de fornecedores e custos","Devolucoes e notas de credito","Historico de compras de clientes","Relatorios por filial","Alertas de desvio de stock face a MRA","Pacote de exportacao para contabilista / fim de mes","Suporte prioritario"] },
      { desc: "Para operadores multi-filial, grupos e implementacoes personalizadas.",
        features: ["Implementacao multi-filial","Gestao multi-terminal","Relatorios consolidados","Gestor de integracao dedicado","Integracao contabilistica personalizada","Fluxos de trabalho personalizados","Suporte com SLA","Planeamento de implementacao no terreno","Formacao de equipas","Limpeza e migracao de dados"] },
    ],
  },

  ny: {
    heroTitle1: "Compliance ya EIS, POS,",
    heroTitle2: "ndi Accounting, ",
    heroSub: "Lumikizani bizinesi yanu ku EIS ya MRA mkati mwa maola 72. Sungani sisitimu yanu ya tsopano kapena ikani POS yathunthu yokhala ndi Sage ndi QuickBooks sync.",
    ctaConsult: "Pemphani Uphungu wa EIS",
    ctaCompare: "Yerekezerani Mapulani",
    trust: ["Kuyamba mu maola 72", "Ma risiti a QR osainidwa ndi MRA", "Sage & QuickBooks sync", "Thandizo kuchokera ku Blantyre"],
    pricingEyebrow: "Mitengo",
    pricingTitle: "EIS + POS + Accounting.\nMndandanda umodzi wa mitengo.",
    askUs: "Simukudziwa pulani yoyenera? Tifunseni",
    setupFee: "Mtengo woyambira", monthlyLabel: "Pamwezi", perMonth: "/ mwezi", mostPopular: "Yotchuka Kwambiri", whatsIncluded: "Zomwe zili mkati",
    enquirePlan: "Funsani za pulani iyi", customQuote: "Pemphani mtengo wapadera",
    integrations: "Kugwirizana ndi accounting", integrationsNote: "Zilipo pa Counter POS Business ndi zapamwamba.",
    perks: [
      ["Kuchotsera 10% pachaka", "Lipirani zamwezi pachaka ndipo musunge 10%."],
      ["Kuyamba mu maola 72", "Makasitomala a bridge amayamba mu masiku 1 mpaka 3 a ntchito."],
      ["Palibe zodabwitsa", "Mitengo yomveka kuyambira tsiku loyamba. Palibe zolipiritsa zobisika."],
      ["Malawi poyamba", "Gulu la ku Blantyre. Palibe mizere ya kunja. Kuyankha tsiku lomwelo."],
    ],
    valueEyebrow: "Kuposa compliance ya EIS",
    valueTitle: "Nsanja ya ntchito za malonda yomangidwa pa compliance.",
    valueBody: "TechNexus EIS si makina osindikiza ma risiti okha. Ndi nsanja yathunthu ya malonda ndi compliance yomwe imasunga bizinesi yanu ikugulitsa, katundu wanu ali wolondola, ndi zolemba zanu za MRA zili zoyera.",
    pillars: [
      { title: "Ma risiti otsimikiziridwa ndi MRA", body: "Kugulitsa kulikonse kumakhala ndi risiti ya QR ya MRA yosainidwa. Compliance yanu ndi yotsimikizika kuyambira tsiku loyamba." },
      { title: "Chitetezo cha katundu musanagulitse", body: "Kugulitsa kumaletsedwa katundu akatha. Palibe kugulitsa kopitilira, palibe mavuto a kukonza, palibe chiopsezo cha kusiyana ndi MRA." },
      { title: "Ma risiti a offline pa malonda ololedwa", body: "Kuzimitsa magetsi ndi kusowa kwa intaneti sizimayimitsa malonda anu. Zotumizidwa zimasungidwa ndi kutumizidwa zokha intaneti ikabwerera." },
      { title: "Sage ndi QuickBooks accounting sync", body: "Counter POS Business ndi zapamwamba zimagwirizana nthawi yomweyo ndi Sage Business Cloud Accounting ndi QuickBooks Online." },
      { title: "Ma dashboard a manejala ndi mbiri ya kafukufuku", body: "Mbiri yathunthu ya malonda ndi manambala a invoice a MRA. Zochotsedwa, zobwezedwa, ndi ma credit note zimalembedwa ndi kukonzedwa." },
      { title: "Kuyambitsa ndi thandizo la m'Malawi", body: "Gulu la ku Blantyre. Kuyankha tsiku lomwelo. Zosintha za MRA zimachitika zokha. Inu gulitsani; ife timakusungani mu compliance." },
    ],
    howEyebrow: "Kuyambitsa", howTitle: "Mumayamba mu njira zisanu.",
    steps: [
      { step: "01", title: "Funsani", body: "Lembani fomu kapena titumizireni uthenga. Timatsimikizira zofuna zanu tsiku lomwelo." },
      { step: "02", title: "Kuwunika", body: "Timawunika sisitimu yanu ya tsopano ndi kulangiza bridge kapena POS yathunthu." },
      { step: "03", title: "Kulembetsa", body: "Timalembetsa POS yanu ku MRA ndi kuyambitsa terminal iliyonse." },
      { step: "04", title: "Kuyamba", body: "Kuikamo pa malo. Risiti yoyamba ya QR yosainidwa ndi MRA yasindikizidwa. Ogwira ntchito aphunzitsidwa." },
      { step: "05", title: "Kuyanganira", body: "Kuyanganira kwa nthawi yomweyo kuyambira tsiku loyamba. Zosintha za MRA zimachitika zokha." },
    ],
    faqEyebrow: "Mafunso", faqTitle: "Mafunso ofunsidwa kawirikawiri",
    faqSub: "Simukupeza zomwe mukufuna? Titumizireni uthenga pa WhatsApp ndipo tikuyankhani tsiku lomwelo.",
    faqAsk: "Funsani pa WhatsApp", faqWa: "Moni%20TechNexus%2C%20ndili%20ndi%20funso%20la%20EIS",
    faqs: [
      { q: "Kodi ndiyenera kugula hardware yatsopano?", a: "Osati nthawi zonse. Ngati muli kale ndi POS kapena sisitimu ya accounting, pulani ya Bridge Only imailumikiza ku EIS ya MRA popanda kusintha hardware. Ngati mukufuna terminal yathunthu ya POS, timapereka ndi kukonza monga gawo la mapulani a Mobile POS, Counter POS, kapena Retail Pro." },
      { q: "Chimachitika ndi chiyani intaneti ikasowa?", a: "Sisitimu imasunga malonda onse mu mzere wa mkati ndi kuwatumiza ku MRA intaneti ikabwerera. Mumapitiriza kugulitsa popanda kuyimitsidwa. MRA imalola nthawi ya offline yodziwika ndipo sisitimu yathu imayendetsa sync yokha." },
      { q: "Kulembetsa ku MRA kumatenga nthawi yayitali bwanji?", a: "Makasitomala a bridge amayamba mu masiku 1 mpaka 3 a ntchito. Kuika kwa Counter ndi Retail POS kumatenga masiku 3 mpaka 5 kutengera chiwerengero cha ma terminal. Timayendetsa kulembetsa ku MRA ndi kuyambitsa zipangizo m'malo mwanu." },
      { q: "Kodi ndingasunge POS kapena software ya accounting yanga?", a: "Inde. Pulani ya Bridge Only inapangidwira izi. Timagwirizana ndi masisitimu odziwika mu Malawi kuphatikiza QuickBooks ndi Sage. Timawunika sisitimu yanu tisanalangize pulani yoyenera." },
      { q: "Mtengo wa pamwezi umakwirira chiyani?", a: "Kuyanganira kosalekeza, thandizo la tsiku lomwelo, ndi kusintha konse kwa MRA. MRA ikatulutsa zosintha za firmware kapena compliance, timaziyika popanda malipiro owonjezera. Mtengo wa pamwezi ndi wokhazikika popanda zolipiritsa zobisika." },
      { q: "Kodi pulani ya Counter POS Business imagwirizanadi ndi QuickBooks ndi Sage?", a: "Inde. Counter POS Business ndi zapamwamba zimaphatikiza sync ya mbali ziwiri ndi Sage Business Cloud Accounting ndi QuickBooks Online, kuphatikiza MRA invoice ID ndi QR write-back kuti zolemba zanu za accounting zigwirizane ndendende ndi za MRA." },
    ],
    contactEyebrow: "Yambani", contactTitle: "Pemphani uphungu wanu wa EIS.",
    contactBody: "Timatsimikizira zofuna zanu tsiku lomwe mwatilumikizana. Popanda udindo. Popanda mafoni a malonda okonzedwa. Kungoyankhulana mwachindunji za zomwe bizinesi yanu ikufuna.",
    infoLabels: { wa: "WhatsApp", email: "Imelo", loc: "Malo", web: "Webusaiti" },
    mraTitle: "Otsimikiziridwa ndi MRA",
    mraBody: "TechNexus ndi wolumikizitsa zipangizo za msonkho wotsimikiziridwa pansi pa dongosolo la EIS la MRA. Compliance yanu ikuthandizidwa ndi mnzanu wovomerezeka wa m'deralo.",
    mraCred: "Onani umboni", mraDownload: "↓ Tsitsani Satifiketi ya MRA (PDF)",
    verifyCert: "Tsimikizani satifiketi →", proudlyMw: "Wa Malawi Monyadira",
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
      { desc: "Kwa mabizinesi omwe ali kale ndi POS kapena sisitimu ya accounting omwe akufuna kulumikizana ndi EIS ya MRA kokha.",
        features: ["Bridge ya EIS ya MRA","Thandizo la kuyambitsa terminal","Kutumiza ma invoice pa intaneti","Thandizo la ma risiti a QR","Kuyanganira koyambirira","Thandizo pa imelo"] },
      { desc: "Kwa masitolo ang'onoang'ono, ogulitsa oyenda, malo odyera, ndi ogulitsa pa msika.",
        features: ["POS ya foni / tablet","Ma risiti a msonkho a MRA","Mndandanda wa zinthu","Kutsatira katundu koyambirira","Ma risiti a offline pa malonda ololedwa","Thandizo la kusindikiza ma risiti","Kuyambitsa kwa nthawi zonse"] },
      { desc: "Kwa masitolo, ma famase, ogulitsa zosiyanasiyana, ndi malonda a pa kaunta.",
        features: ["POS yathunthu ya pa kaunta","Kuyendetsa malonda a online ndi offline a MRA","Ma risiti a QR osainidwa","Chitetezo cha katundu, chimaletsa kugulitsa kopitilira","Maudindo a wolandira ndalama ndi manejala","Dashboard ya katundu","Thandizo la sikirini ya kasitomala","Sage Business Cloud Accounting sync","QuickBooks Online sync","MRA invoice ID ndi QR write-back","Kuyanganira ma invoice olephera","Kuikamo mwachangu"] },
      { desc: "Kwa ogulitsa ambiri, masitolo a madipatimenti angapo, ndi malonda ochuluka.",
        features: ["Zonse za Counter POS Business","Kuwongolera katundu kwapamwamba","Zidziwitso za katundu wochepa","Kutsatira ogulitsa ndi mitengo","Zobwezedwa ndi ma credit note","Mbiri ya zogula za makasitomala","Malipoti a nthambi iliyonse","Zidziwitso za kusiyana kwa katundu ndi MRA","Phukusi la accountant / kutha kwa mwezi","Thandizo lofulumira"] },
      { desc: "Kwa oyendetsa nthambi zambiri, magulu, ndi kuikamo kwapadera.",
        features: ["Kuyambitsa nthambi zambiri","Kuyendetsa ma terminal ambiri","Malipoti ophatikizidwa","Manejala wa kuyambitsa wapadera","Kugwirizana kwa accounting kwapadera","Njira za ntchito zapadera","Thandizo la SLA","Kukonzekera kuikamo pa malo","Maphunziro a ogwira ntchito","Kuyeretsa ndi kusamutsa data"] },
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
const eyebrow: React.CSSProperties     = { fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: G, marginBottom: "12px" };
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
    wa: encodeURIComponent(`Hi TechNexus, I want to enquire about the ${meta.name} EIS plan`),
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
      <section style={{ background: INK, padding: "120px 32px 96px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: G }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(27,127,58,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ ...container, position: "relative" }}>
          <h1 style={{
            fontFamily: "var(--font-syne, 'Inter', system-ui, sans-serif)",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
            color: WHITE,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            maxWidth: "780px",
            marginBottom: "24px",
          }}>
            {t.heroTitle1}<br />
            {t.heroTitle2}<span style={{ color: G }}>{lang === "pt" ? "numa unica plataforma." : lang === "ny" ? "mu nsanja imodzi." : "in one platform."}</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#9CA3AF", maxWidth: "560px", lineHeight: 1.7, marginBottom: "40px", fontWeight: 400 }}>
            {t.heroSub}
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: G, color: WHITE, fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "7px", textDecoration: "none", letterSpacing: "-0.01em" }}>
              {t.ctaConsult}
            </a>
            <a href="#pricing" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "#D1D5DB", fontWeight: 500, fontSize: "15px", padding: "14px 28px", borderRadius: "7px", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none" }}>
              {t.ctaCompare}
            </a>
          </div>
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginTop: "56px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {t.trust.map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7.2l3 3 6-6" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontSize: "13px", color: "#9CA3AF", fontWeight: 400 }}>{item}</span>
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
                    <div style={{ fontSize: "20px", fontWeight: 800, color: plan.popular ? G : INK, letterSpacing: "-0.02em", marginBottom: "10px" }}>{plan.setup}</div>
                    <div style={{ borderTop: `1px solid ${plan.popular ? "rgba(27,127,58,0.2)" : BDR}`, paddingTop: "10px" }}>
                      <div style={{ fontSize: "11px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{t.monthlyLabel}</div>
                      <div style={{ fontSize: "16px", fontWeight: 700, color: plan.popular ? G : BODY }}>{plan.monthly} {t.perMonth}</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "0 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
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

          <div style={{ marginTop: "36px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", padding: "20px 24px", background: LIGHT, borderRadius: "10px", border: `1px solid ${BDR}` }}>
            <div style={{ fontSize: "12px", fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" as const }}>{t.integrations}</div>
            <div style={{ width: "1px", height: "20px", background: BDR }} />
            {["Sage Business Cloud Accounting", "QuickBooks Online"].map(name => (
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
                  { label: t.infoLabels.loc, val: "Blantyre, Malawi" },
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
