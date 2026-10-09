import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Serviço — TechNexus",
  description: "Termos de serviço do website e serviços da TechNexus.",
  alternates: {
    canonical: "https://www.technexusmw.com/pt/terms",
    languages: {
      "en": "https://www.technexusmw.com/terms",
      "pt": "https://www.technexusmw.com/pt/terms",
      "ny": "https://www.technexusmw.com/ny/terms",
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

export default function PtTermsPage() {
  return (
    <div style={{ background: "var(--fl-neutral-2)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 40px" }}>
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "48px" }}>

          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, color: TEXT, letterSpacing: "-0.02em", marginBottom: "8px" }}>Termos de Serviço</h1>
          <p style={{ fontSize: "13px", color: MUTED, marginBottom: "32px" }}>Data de entrada em vigor: 1 de Abril de 2026 · Última actualização: Abril de 2026 · Versão 1.0</p>

          <h2 style={h2s} id="s1">1. Definições</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>"TechNexus"</strong>, "nos", "nosso" refere-se a TechNexus, registada na Republica do Malawi (BRN: A6SNWQY), Blantyre.</li>
            <li style={li}><strong>"Website"</strong> refere-se a www.technexusmw.com e a todas as suas páginas e subcaminhos.</li>
            <li style={li}><strong>"Utilizador"</strong>, "você", "seu" refere-se a qualquer individuo ou organização que aceda ao Website ou contrate a TechNexus para bens ou serviços.</li>
            <li style={li}><strong>"Serviços"</strong> refere-se a todos os bens e serviços oferecidos pela TechNexus, incluindo fornecimento de hardware ICT, montagem de PCs por medida, desenvolvimento de software, serviços linguisticos e de tradução, e fornecimento de equipamento médico.</li>
            <li style={li}><strong>"Cotação"</strong> refere-se a qualquer estimativa de preço ou proposta escrita fornecida pela TechNexus.</li>
          </ul>

          <h2 style={h2s} id="s2">2. Aceitação dos Termos</h2>
          <p style={s}>Ao aceder ou utilizar este Website, submeter um pedido ou efectuar uma encomenda a TechNexus, concorda em ficar vinculado a estes Termos de Serviço e a nossa Politica de Privacidade. Se não concordar, por favor não utilize este Website nem contrate os nossos serviços.</p>

          <h2 style={h2s} id="s3">3. Utilização Deste Website</h2>
          <p style={s}>Concorda em utilizar este Website apenas para fins licitos. Não deve:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>Utilizar ferramentas automatizadas para extrair ou recolher conteudo sem autorização escrita.</li>
            <li style={li}>Tentar obter acesso não autorizado a qualquer parte do Website ou da sua infraestrutura.</li>
            <li style={li}>Transmitir conteudo prejudicial, ofensivo ou enganoso através de qualquer formulário de contacto.</li>
            <li style={li}>Deturpar a sua identidade ou autoridade ao submeter pedidos de aquisição.</li>
          </ul>

          <h2 style={h2s} id="s4">4. Produtos e Serviços</h2>
          <p style={s}>Todas as listagens de produtos, descrições de serviços e catalogos neste Website são apenas para fins informativos e não constituem uma oferta vinculativa. A disponibilidade de stock, especificações e âmbito dos serviços estão sujeitos a alterações sem aviso previo.</p>
          <p style={s}>A TechNexus adquire produtos de fornecedores verificados no Malawi, China, África do Sul e EAU. Para serviços linguisticos, o âmbito, o formato do produto final e o prazo de entrega serão acordados por escrito antes do início.</p>

          <h2 style={h2s} id="s5">5. Cotações e Preços</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>Todos os preços apresentados neste Website são meramente indicativos e sujeitos a alterações sem aviso previo.</li>
            <li style={li}>Os preços excluem IVA a 17,5% salvo indicação explicita em contrario.</li>
            <li style={li}>Quando são apresentados preços em USD, o equivalente em MWK e calculado a taxa de cambio em vigor na data da facturação.</li>
            <li style={li}>Uma cotação formal e vinculativa e valida por 30 dias a partir da data de emissao, salvo indicação em contrario.</li>
            <li style={li}>A TechNexus reserva-se o direito de rever uma cotação se os preços dos fornecedores, taxas de cambio ou direitos de importação se alterarem materialmente entre a cotação e a confirmação da encomenda.</li>
          </ul>

          <h2 style={h2s} id="s6">6. Encomendas, Pagamento e Entrega</h2>
          <p style={s}>Uma encomenda so e confirmada após a recepção de uma ordem de compra escrita ou acordo assinado e, quando exigido, um pagamento adiantado.</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Condições de pagamento:</strong> Conforme acordado na cotação. As condições standard para novos clientes são 50% de deposito na confirmação da encomenda, saldo na entrega.</li>
            <li style={li}><strong>Entrega:</strong> O risco dos bens passa para o comprador na entrega no endereco acordado. A TechNexus não e responsável por atrasos causados pela alfandega, logística de terceiros ou circunstancias fora do nosso controlo.</li>
            <li style={li}><strong>Cancelamentos:</strong> Encomendas de bens adquiridos especificamente para o cliente não podem ser canceladas após a colocação de uma ordem de compra ao fornecedor. Artigos de stock standard podem ser cancelados com 7 dias de aviso escrito antes do envio.</li>
          </ul>

          <h2 style={h2s} id="s7">7. Propriedade Intelectual</h2>
          <p style={s}>Todo o conteudo deste Website e propriedade da TechNexus ou dos seus licenciadores e esta protegido pela legislação aplicável de direitos de autor e propriedade intelectual. Não pode reproduzir, distribuir ou republicar qualquer conteudo sem consentimento previo por escrito, excepto para uso de referência pessoal ou empresarial interno ou partilha de um link para este Website.</p>
          <p style={s}>Os logotipos de produtos e marcas apresentados permanecem propriedade dos respectivos proprietarios e são utilizados apenas para fins de identificação.</p>

          <h2 style={h2s} id="s8">8. Limitação de Responsabilidade</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>A TechNexus fornece este Website e o seu conteudo "tal como esta", sem garantias de qualquer tipo.</li>
            <li style={li}>A TechNexus não e responsável por quaisquer perdas indirectas, incidentais ou consequentes decorrentes da utilização deste Website ou da confianca no seu conteudo.</li>
            <li style={li}>A responsabilidade total da TechNexus relativamente a qualquer encomenda não excedera o valor dessa encomenda.</li>
            <li style={li}>A TechNexus não e responsável por perdas decorrentes de atrasos de fornecedores, descontinuação de produtos, retenção alfandegaria ou eventos de forca maior.</li>
          </ul>

          <h2 style={h2s} id="s9">9. Links e Serviços de Terceiros</h2>
          <p style={s}>Este Website contem links para serviços de terceiros, incluindo o WhatsApp (Meta Platforms), e referências ao MANePS e a PPDA. A TechNexus não e responsável pelo conteudo, praticas de privacidade ou disponibilidade de qualquer website ou serviço de terceiros.</p>

          <h2 style={h2s} id="s10">10. Privacidade</h2>
          <p style={s}>A nossa recolha e utilização de dados pessoais e regida pela nossa Politica de Privacidade, que faz parte integrante destes Termos de Serviço.</p>

          <h2 style={h2s} id="s11">11. Lei Aplicável e Litigios</h2>
          <p style={s}>Estes Termos são regidos pelas leis da Republica do Malawi. Qualquer litigio ficara sujeito a jurisdição exclusiva dos tribunais do Malawi. Quando ambas as partes concordarem, os litigios podem primeiro ser submetidos a mediação antes de procedimentos legais formais.</p>

          <h2 style={h2s} id="s12">12. Alterações a Estes Termos</h2>
          <p style={s}>A TechNexus reserva-se o direito de actualizar estes Termos em qualquer momento. As alterações serão publicadas nesta página com uma data actualizada. A utilização continuada do Website após a publicação das alterações constitui aceitação dos Termos revistos.</p>

          <h2 style={h2s} id="s13">13. Contacto</h2>
          <div style={{ background: "var(--fl-neutral-2)", border: "1px solid " + BORDER, borderRadius: "8px", padding: "20px", fontSize: "14px", color: MUTED, lineHeight: 2 }}>
            <strong style={{ color: TEXT }}>TechNexus</strong><br />
            Blantyre, Malawi · BRN: A6SNWQY<br />
            <a href="tel:+265889941700" style={{ color: ACCENT }}>+265 889 941 700</a> · <a href="tel:+265881879831" style={{ color: ACCENT }}>+265 881 879 831</a><br />
            <a href="mailto:info@technexusmw.com" style={{ color: ACCENT }}>info@technexusmw.com</a><br />
            <a href="https://wa.me/265889941700" target="_blank" rel="noopener" style={{ color: ACCENT }}>WhatsApp</a>
          </div>

        </div>
      </div>
    </div>
  );
}
