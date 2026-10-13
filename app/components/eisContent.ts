export type EisLang = "en" | "pt" | "ny";

type PlanCopy = { desc: string; features: string[] };

export type EisStrings = {
  heroTitle1: string; heroTitle2: string; heroSub: string; ctaConsult: string; ctaCompare: string; heroImgAlt: string;
  trust: string[];
  pricingEyebrow: string; pricingTitle: string; pricingLede: string; askUs: string;
  setupFee: string; monthlyLabel: string; perMonth: string; mostPopular: string; whatsIncluded: string;
  enquirePlan: string; customQuote: string;
  integrations: string; integrationsNote: string; integrationsTitle: string; integrationsLede: string; hardwareNote: string; setupNote: string; addonsTitle: string; addonsLede: string; addons: [string, string][]; mbTitle: string; mbDesc: string; hardwareTitle: string; hardwareShots: [string, string, string];
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
};

export const STR: Record<EisLang, EisStrings> = {
  en: {
    heroTitle1: "Stay compliant.",
    heroTitle2: "Keep trading.",
    heroSub: "MRA-certified POS and integration for Malawi businesses. Take a ready-to-trade till, or keep the system you run and we connect it to MRA. QR receipts, stock control, offline support, accounting sync. Hardware supplied, quoted separately.",
    ctaConsult: "Book an Assessment",
    ctaCompare: "Compare Packages",
    heroImgAlt: "Two shop owners behind the counter of their grocery store",
    trust: ["MRA-certified POS and bridge", "POS and stock control", "Accounting sync", "Lilongwe and Blantyre support"],
    pricingEyebrow: "MRA-certified EIS + POS solution",
    pricingTitle: "Choose the setup\nthat fits the client.",
    askUs: "Book a compliance and systems assessment",
    setupFee: "Setup fee", monthlyLabel: "Monthly", perMonth: "/ mo", mostPopular: "Most Popular", whatsIncluded: "What's included",
    enquirePlan: "Enquire about this plan", customQuote: "Request a custom quote",
    integrations: "Accounting sync", integrationsNote: "Sage, QuickBooks, Pastel, Odoo and ERP integration are scoped after assessment.",
    integrationsTitle: "Integration specialists", integrationsLede: "Keep your system. We make it MRA-compliant.",
    hardwareNote: "Hardware quoted separately", setupNote: "*Setup depends on the complexity of your existing system.",
    hardwareTitle: "Hardware we supply", hardwareShots: ["Tablet POS", "Counter terminal", "Receipt printer"],
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
    ctaConsult: "Marcar Avaliação",
    ctaCompare: "Comparar Pacotes",
    heroImgAlt: "Dois donos de loja ao balcão da sua mercearia",
    trust: ["POS e bridge certificados pela MRA", "POS e controlo de stock", "Sincronização contabilística", "Suporte em Lilongwe e Blantyre"],
    pricingEyebrow: "Solução EIS + POS certificada pela MRA",
    pricingTitle: "Escolha a configuração\ncerta para o cliente.",
    askUs: "Marcar avaliação de conformidade e sistemas",
    setupFee: "Taxa de instalação", monthlyLabel: "Mensalidade", perMonth: "/ mês", mostPopular: "Mais Popular", whatsIncluded: "O que está incluído",
    enquirePlan: "Informar-me sobre este plano", customQuote: "Solicitar orçamento personalizado",
    integrations: "Sincronização contabilística", integrationsNote: "Sage, QuickBooks, Pastel, Odoo e integrações ERP são definidas depois da avaliação.",
    integrationsTitle: "Especialistas em integração", integrationsLede: "Mantenha o seu sistema. Nós tornamo-lo conforme com a MRA.",
    hardwareNote: "Hardware orçamentado à parte", setupNote: "*A instalação depende da complexidade do seu sistema.",
    hardwareTitle: "Hardware que fornecemos", hardwareShots: ["POS em tablet", "Terminal de balcão", "Impressora de recibos"],
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
    valueEyebrow: "Conformidade | POS | Inventário | Sincronização contabilística",
    valueTitle: "Mantenha a conformidade. Trabalhe com controlo.",
    valueBody: "Um sistema, uma equipa local responsável.",
    pillars: [
      { title: "Recibos certificados pela MRA", body: "Evidência de recibo QR e registos de submissão prontos para auditoria." },
      { title: "Protecção de stock", body: "Bloqueie vendas quando o stock não está disponível e acompanhe movimentos." },
      { title: "Suporte offline", body: "Coloque vendas permitidas em fila quando a conectividade falha e sincronize depois." },
      { title: "Sincronização contabilística", body: "Integração com Sage, QuickBooks, Pastel, Odoo ou ERP." },
    ],
    howEyebrow: "Melhor primeiro passo", howTitle: "Comece com o pacote certo.",
    steps: [
      { step: "01", title: "Contacte", body: "Preencha o formulário ou envie mensagem. Respondemos no mesmo dia." },
      { step: "02", title: "Avaliação", body: "Revemos o POS, contabilidade e stock actuais, depois recomendamos um pacote." },
      { step: "03", title: "Arranque", body: "Activamos a bridge EIS, formamos a equipa e mantemos monitorização e suporte." },
    ],
    faqEyebrow: "FAQ", faqTitle: "Perguntas frequentes",
    faqSub: "Não encontra o que precisa? Envie-nos mensagem no WhatsApp e respondemos no mesmo dia.",
    faqAsk: "Perguntar no WhatsApp", faqWa: "Ol%C3%A1%20TechNexus%2C%20tenho%20uma%20pergunta%20sobre%20o%20EIS",
    faqs: [
      { q: "Fornecem o hardware?", a: "Sim. Fornecemos terminais POS, ecrãs para o cliente, gavetas de dinheiro e impressoras, orçamentados à parte do software. A opção Bridge não precisa de hardware novo, liga o sistema que já usa." },
      { q: "Posso manter o meu POS ou software contabilístico actual?", a: "Sim. O plano EIS Bridge & Integration é para empresas que já têm POS ou sistema contabilístico e precisam de ligação EIS da MRA, recibos QR, registos de submissão e monitorização." },
      { q: "O que acontece quando a internet falha?", a: "Vendas permitidas podem ficar em fila local e sincronizar depois quando a conectividade voltar, para que a empresa continue a vender dentro do processo offline suportado." },
      { q: "O que cobre a mensalidade?", a: "Monitorização, acompanhamento de suporte e os serviços de software do pacote escolhido. Migração de dados, integração contabilística e fluxos personalizados são definidos separadamente." },
    ],
    contactEyebrow: "Comece agora", contactTitle: "Marque a sua consulta EIS.",
    contactBody: "Fale-nos da sua configuração actual e recomendamos o pacote certo no mesmo dia.",
    infoLabels: { wa: "WhatsApp", email: "Email", loc: "Localização", web: "Website" },
    mraTitle: "Certificado MRA",
    mraBody: "A TechNexus fornece uma solução de software EIS certificada pela MRA, apoiada por uma equipa local responsável.",
    mraCred: "Ver credenciais", mraDownload: "↓ Descarregar Certificado MRA (PDF)",
    verifyCert: "Verificar certificado", proudlyMw: "Orgulhosamente Malawiano",
    formTitle: "Solicitar uma consulta",
    fBiz: "Nome da empresa", fBizPh: "Nome do seu negócio",
    fContact: "Pessoa de contacto", fContactPh: "O seu nome",
    fPhone: "Telefone / WhatsApp",
    fPlan: "Plano de interesse", fPlanPh: "Seleccione um plano (opcional)", fNotSure: "Ainda não sei",
    fNotes: "Notas", fNotesPh: "Breve descrição da sua configuração actual (opcional)",
    fSend: "Enviar via WhatsApp",
    fPrivacy1: "Os seus dados são utilizados apenas para responder a este pedido. Não partilhamos a sua informação com terceiros.",
    fPrivacyLink: "Política de Privacidade", privacyHref: "/pt/privacy", credentialsHref: "/pt/credentials",
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
    heroImgAlt: "Eni ake a sitolo awiri ku counter ya golosale yawo",
    trust: ["POS ndi bridge yotsimikiziridwa ndi MRA", "POS ndi stock control", "Accounting sync", "Thandizo ku Lilongwe ndi Blantyre"],
    pricingEyebrow: "Solushoni ya EIS + POS yotsimikiziridwa ndi MRA",
    pricingTitle: "Sankhani setup\nyoyenera client.",
    askUs: "Book compliance ndi systems assessment",
    setupFee: "Mtengo woyambira", monthlyLabel: "Pamwezi", perMonth: "/ mwezi", mostPopular: "Yotchuka Kwambiri", whatsIncluded: "Zomwe zili mkati",
    enquirePlan: "Funsani za pulani iyi", customQuote: "Pemphani mtengo wapadera",
    integrations: "Accounting sync", integrationsNote: "Sage, QuickBooks, Pastel, Odoo ndi ERP integration zimawunikidwa pambuyo pa assessment.",
    integrationsTitle: "Akatswiri a integration", integrationsLede: "Sungani sisitimu yanu. Timayipanga kuti igwirizane ndi MRA.",
    hardwareNote: "Hardware quoted separately", setupNote: "*Setup imatengera complexity ya sisitimu yanu.",
    hardwareTitle: "Hardware yomwe timapereka", hardwareShots: ["Tablet POS", "Counter terminal", "Printer ya ma risiti"],
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
