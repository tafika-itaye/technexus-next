import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidade — TechNexus",
  description: "Como a TechNexus recolhe, utiliza e protege os seus dados pessoais.",
  alternates: {
    canonical: "https://www.technexusmw.com/pt/privacy",
    languages: {
      "en": "https://www.technexusmw.com/privacy",
      "pt": "https://www.technexusmw.com/pt/privacy",
      "ny": "https://www.technexusmw.com/ny/privacy",
    },
  },
};

const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const ACCENT = "var(--fl-blue)";

const s: React.CSSProperties = { fontSize: "14px", color: MUTED, lineHeight: 1.8, marginBottom: "12px" };
const h2s: React.CSSProperties = { fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, margin: "36px 0 12px", paddingTop: "8px", borderTop: "1px solid var(--fl-neutral-8)" };
const li: React.CSSProperties = { fontSize: "14px", color: MUTED, lineHeight: 1.8, marginBottom: "6px" };

export default function PtPrivacyPage() {
  return (
    <div style={{ background: "var(--fl-neutral-2)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 40px" }}>
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "48px" }}>

          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, color: TEXT, letterSpacing: "-0.02em", marginBottom: "8px" }}>Politica de Privacidade</h1>
          <p style={{ fontSize: "13px", color: MUTED, marginBottom: "24px" }}>Data de entrada em vigor: 1 de Abril de 2026 · Última actualização: Abril de 2026 · Versão 1.0</p>

          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "32px" }}>
            {["Conforme RGPD","Praticas HIPAA (Serviços Linguisticos)","Dados Nunca Vendidos","Analytics: IP Anonimizado"].map(b => (
              <span key={b} style={{ background: "rgba(0,120,212,0.1)", border: "1px solid rgba(0,120,212,0.3)", borderRadius: "999px", padding: "4px 14px", fontSize: "12px", color: ACCENT, fontWeight: 600 }}>{b}</span>
            ))}
          </div>

          <h2 style={h2s} id="s1">1. Quem Somos</h2>
          <p style={s}>A TechNexus ("nos", "nosso") e uma empresa registada na Republica do Malawi (BRN: A6SNWQY). Fornecemos hardware ICT, montagem de PCs por medida, serviços de desenvolvimento de software, serviços linguisticos e de tradução, e equipamento médico a empresas, entidades governamentais e parceiros de desenvolvimento em toda a África Austral e Oriental.</p>
          <p style={s}>Esta Politica de Privacidade explica como a TechNexus recolhe, utiliza, armazena e protege dados pessoais quando visita www.technexusmw.com ou nos envia um pedido de informação.</p>

          <h2 style={h2s} id="s2">2. Que Dados Recolhemos</h2>
          <p style={s}>Recolhemos apenas os dados minimos necessários para responder ao seu pedido ou prestar os nossos serviços:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Dados do formulário de contacto:</strong> Nome, nome da organização, endereco de email ou número de WhatsApp, serviço seleccionado e conteudo da mensagem — submetidos voluntariamente através dos nossos formulários.</li>
            <li style={li}><strong>Dados de Serviços Linguisticos:</strong> Para projectos de tradução, transcrição ou interpretação, podemos tratar documentos de origem que contenham informação pessoal ou sensível pertencente a sua organização ou aos seus beneficiarios.</li>
            <li style={li}><strong>Dados analiticos:</strong> Dados de utilização anonimos via Google Analytics (GA4) com anonimização de IP activada. Nenhuma informação pessoalmente identificável e enviada ao Google Analytics.</li>
            <li style={li}><strong>Dados técnicos:</strong> Registos de acesso standard de servidor/CDN retidos pelo nosso fornecedor de infraestrutura (GitHub Pages / Cloudflare) — não recolhidos nem armazenados directamente pela TechNexus.</li>
          </ul>
          <p style={s}>Não utilizamos cookies para rastreamento, publicidade ou definição de perfis. Não operamos redes de publicidade nem sistemas de retargeting.</p>

          <h2 style={h2s} id="s3">3. Como Utilizamos os Seus Dados</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>Para responder ao seu pedido via WhatsApp ou email.</li>
            <li style={li}>Para preparar cotações, submissoes de concursos ou propostas de serviços que tenha solicitado.</li>
            <li style={li}>Para prestar serviços linguisticos contratados, incluindo tradução e transcrição.</li>
            <li style={li}>Para compreender a utilização agregada do site através de analytics anonimizados e melhorar o nosso website.</li>
            <li style={li}>Para cumprir obrigações legais ao abrigo da lei do Malawi.</li>
          </ul>
          <p style={s}>Nunca utilizaremos os seus dados para marketing não solicitado, nunca os venderemos a terceiros, nem os utilizaremos para definição de perfis ou decisoes automatizadas.</p>

          <h2 style={h2s} id="s4">4. Base Legal para o Tratamento (RGPD)</h2>
          <p style={s}>Se estiver localizado na UE, EEE ou Reino Unido, tratamos os seus dados pessoais com as seguintes bases legais:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Interesses legitimos (Art. 6(1)(f)):</strong> Responder a pedidos comerciais que iniciou.</li>
            <li style={li}><strong>Execução de contrato (Art. 6(1)(b)):</strong> Tratamento de dados necessários para prestar serviços que contratou connosco.</li>
            <li style={li}><strong>Obrigação legal (Art. 6(1)(c)):</strong> Cumprimento da legislação financeira e fiscal aplicável do Malawi.</li>
            <li style={li}><strong>Consentimento (Art. 6(1)(a)):</strong> Para cookies analiticos, quando o consentimento tenha sido obtido.</li>
          </ul>

          <h2 style={h2s} id="s5">5. Cookies e Analytics</h2>
          <p style={s}>Este website utiliza o Google Analytics 4 (GA4) com anonimização de IP activada. Nenhuma funcionalidade de publicidade ou audiencias de remarketing esta activada. Pode optar por não participar em qualquer momento através do Google Analytics Opt-out Browser Add-on. Não definimos outros cookies, pixels de rastreamento ou fingerprinting.</p>

          <h2 style={h2s} id="s6">6. Serviços Linguisticos e Tratamento com Praticas HIPAA</h2>
          <p style={s}>Alguns projectos podem envolver documentos ou gravações contendo informação de saúde protegida (PHI), registos de pacientes, documentos legais ou outros dados pessoais sensíveis. Para tais projectos aplicamos as seguintes salvaguardas:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>Os materiais de origem são tratados apenas pelos profissionais linguisticos designados, vinculados por confidencialidade.</li>
            <li style={li}>Os ficheiros são transferidos através de canais seguros e encriptados.</li>
            <li style={li}>Os produtos finais e materiais de origem são eliminados no prazo de 30 dias após a conclusao do projecto, salvo pedido escrito em contrario do cliente.</li>
            <li style={li}>Não retemos, copiamos nem sublicenciamos conteudo do cliente para além do projecto contratado.</li>
            <li style={li}>Clientes em industrias reguladas são encorajados a celebrar um Acordo de Tratamento de Dados (DPA) antes do início do projecto.</li>
          </ul>
          <p style={{ ...s, fontStyle: "italic" }}>Nota: A TechNexus esta sediada no Malawi e não e uma Covered Entity ou Business Associate dos EUA ao abrigo da HIPAA. A nossa designação "praticas HIPAA" significa que aplicamos padrões equivalentes de tratamento de dados como prática profissional.</p>

          <h2 style={h2s} id="s7">7. Partilha de Dados e Terceiros</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>WhatsApp (Meta Platforms):</strong> As submissoes de pedidos são enviadas para o nosso número de WhatsApp empresarial e tratadas ao abrigo da politica de privacidade do WhatsApp. Você inicia esta transferência voluntariamente.</li>
            <li style={li}><strong>Google Analytics (Google LLC):</strong> Dados de utilização anonimizados conforme descrito na Secção 5.</li>
            <li style={li}><strong>GitHub / Cloudflare:</strong> Os nossos fornecedores de infraestrutura do website. Podem tratar registos de acesso standard. Não lhes transmitimos dados de pedidos.</li>
          </ul>
          <p style={s}>Não partilhamos dados pessoais com quaisquer outros terceiros, anunciantes ou corretores de dados.</p>

          <h2 style={h2s} id="s8">8. Retenção de Dados</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Dados de pedidos:</strong> Retidos na nossa conta WhatsApp empresarial por até 2 anos, depois eliminados.</li>
            <li style={li}><strong>Ficheiros de projectos de Serviços Linguisticos:</strong> Eliminados no prazo de 30 dias após a conclusao do projecto, salvo acordo escrito em contrario.</li>
            <li style={li}><strong>Dados analiticos:</strong> A retenção de dados do Google Analytics esta definida para 14 meses.</li>
            <li style={li}><strong>Registos de infraestrutura:</strong> Geridos pelo GitHub/Cloudflare de acordo com as suas próprias politicas de retenção (tipicamente 30 dias).</li>
          </ul>

          <h2 style={h2s} id="s9">9. Os Seus Direitos</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Direito de acesso:</strong> Solicitar uma copia dos dados pessoais que detemos sobre si.</li>
            <li style={li}><strong>Direito de rectificação:</strong> Solicitar a correcção de dados inexactos.</li>
            <li style={li}><strong>Direito ao apagamento:</strong> Solicitar a eliminação dos seus dados quando nenhuma obrigação legal exigir a retenção.</li>
            <li style={li}><strong>Direito a limitação do tratamento:</strong> Solicitar que limitemos a forma como utilizamos os seus dados.</li>
            <li style={li}><strong>Direito a portabilidade dos dados:</strong> Receber os seus dados num formato estruturado e legível por máquina.</li>
            <li style={li}><strong>Direito de oposição:</strong> Opor-se ao tratamento baseado em interesses legitimos.</li>
            <li style={li}><strong>Direito de retirar o consentimento:</strong> Quando o tratamento se baseia no consentimento, retira-lo em qualquer momento.</li>
          </ul>
          <p style={s}>Para exercer qualquer destes direitos, contacte-nos através dos detalhes na Secção 14. Responderemos no prazo de 30 dias sem custos.</p>

          <h2 style={h2s} id="s10">10. Transferencias Internacionais</h2>
          <p style={s}>A TechNexus opera a partir do Malawi. Os dados submetidos através dos nossos formulários são recebidos e tratados no Malawi. Quando utiliza o Google Analytics ou o WhatsApp, os seus dados podem ser transferidos para servidores nos Estados Unidos ou noutros países, regidos pelas politicas de privacidade da Google e da Meta respectivamente.</p>

          <h2 style={h2s} id="s11">11. Seguranca</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>HTTPS obrigatório em todas as ligações com HSTS preloading.</li>
            <li style={li}>Cabecalhos Content Security Policy (CSP) para mitigar riscos de cross-site scripting.</li>
            <li style={li}>X-Frame-Options definido como DENY para prevenir clickjacking.</li>
            <li style={li}>Sem base de dados no servidor — este website e um site estatico sem armazenamento de dados no back-end.</li>
          </ul>
          <p style={s}>Nenhum método de transmissao pela internet e 100% seguro. Mantemos salvaguardas comercialmente razoáveis.</p>

          <h2 style={h2s} id="s12">12. Privacidade de Menores</h2>
          <p style={s}>O nosso website e serviços são dirigidos exclusivamente a empresas e profissionais. Não recolhemos conscientemente dados pessoais de menores de 18 anos.</p>

          <h2 style={h2s} id="s13">13. Alterações a Esta Politica</h2>
          <p style={s}>Podemos actualizar esta Politica de Privacidade periodicamente. Quando o fizermos, actualizaremos a data de "Última actualização" no topo desta página. A utilização continuada do website após as alterações constitui aceitação da politica actualizada.</p>

          <h2 style={h2s} id="s14">14. Contacte-nos</h2>
          <p style={s}>Para questoes relacionadas com privacidade, pedidos de titulares de dados ou para solicitar um Acordo de Tratamento de Dados:</p>
          <div style={{ background: "var(--fl-neutral-2)", border: "1px solid " + BORDER, borderRadius: "8px", padding: "20px", fontSize: "14px", color: MUTED, lineHeight: 2 }}>
            <strong style={{ color: TEXT }}>TechNexus</strong><br />
            Blantyre, Malawi · BRN: A6SNWQY<br />
            <a href="tel:+265889941700" style={{ color: ACCENT }}>+265 889 941 700</a> · <a href="tel:+265881879831" style={{ color: ACCENT }}>+265 881 879 831</a><br />
            <a href="mailto:info@technexusmw.com" style={{ color: ACCENT }}>info@technexusmw.com</a><br />
            <a href="https://wa.me/265889941700" target="_blank" rel="noopener" style={{ color: ACCENT }}>WhatsApp</a>
          </div>
          <p style={{ ...s, marginTop: "20px", fontSize: "12px" }}>Se estiver localizado na UE/EEE e considerar que não respondemos a sua preocupação, tem o direito de apresentar uma reclamação junto da sua autoridade local de protecção de dados.</p>

        </div>
      </div>
    </div>
  );
}
