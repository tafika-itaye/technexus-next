import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Servico — TechNexus",
  description: "Termos de servico do website e servicos da TechNexus.",
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

          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, color: TEXT, letterSpacing: "-0.02em", marginBottom: "8px" }}>Termos de Servico</h1>
          <p style={{ fontSize: "13px", color: MUTED, marginBottom: "32px" }}>Data de entrada em vigor: 1 de Abril de 2026 · Ultima actualizacao: Abril de 2026 · Versao 1.0</p>

          <h2 style={h2s} id="s1">1. Definicoes</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>"TechNexus"</strong>, "nos", "nosso" refere-se a TechNexus, registada na Republica do Malawi (BRN: A6SNWQY), Blantyre.</li>
            <li style={li}><strong>"Website"</strong> refere-se a www.technexusmw.com e a todas as suas paginas e subcaminhos.</li>
            <li style={li}><strong>"Utilizador"</strong>, "voce", "seu" refere-se a qualquer individuo ou organizacao que aceda ao Website ou contrate a TechNexus para bens ou servicos.</li>
            <li style={li}><strong>"Servicos"</strong> refere-se a todos os bens e servicos oferecidos pela TechNexus, incluindo fornecimento de hardware ICT, montagem de PCs por medida, desenvolvimento de software, servicos linguisticos e de traducao, e fornecimento de equipamento medico.</li>
            <li style={li}><strong>"Cotacao"</strong> refere-se a qualquer estimativa de preco ou proposta escrita fornecida pela TechNexus.</li>
          </ul>

          <h2 style={h2s} id="s2">2. Aceitacao dos Termos</h2>
          <p style={s}>Ao aceder ou utilizar este Website, submeter um pedido ou efectuar uma encomenda a TechNexus, concorda em ficar vinculado a estes Termos de Servico e a nossa Politica de Privacidade. Se nao concordar, por favor nao utilize este Website nem contrate os nossos servicos.</p>

          <h2 style={h2s} id="s3">3. Utilizacao Deste Website</h2>
          <p style={s}>Concorda em utilizar este Website apenas para fins licitos. Nao deve:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>Utilizar ferramentas automatizadas para extrair ou recolher conteudo sem autorizacao escrita.</li>
            <li style={li}>Tentar obter acesso nao autorizado a qualquer parte do Website ou da sua infraestrutura.</li>
            <li style={li}>Transmitir conteudo prejudicial, ofensivo ou enganoso atraves de qualquer formulario de contacto.</li>
            <li style={li}>Deturpar a sua identidade ou autoridade ao submeter pedidos de aquisicao.</li>
          </ul>

          <h2 style={h2s} id="s4">4. Produtos e Servicos</h2>
          <p style={s}>Todas as listagens de produtos, descricoes de servicos e catalogos neste Website sao apenas para fins informativos e nao constituem uma oferta vinculativa. A disponibilidade de stock, especificacoes e ambito dos servicos estao sujeitos a alteracoes sem aviso previo.</p>
          <p style={s}>A TechNexus adquire produtos de fornecedores verificados no Malawi, China, Africa do Sul e EAU. Para servicos linguisticos, o ambito, o formato do produto final e o prazo de entrega serao acordados por escrito antes do inicio.</p>

          <h2 style={h2s} id="s5">5. Cotacoes e Precos</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>Todos os precos apresentados neste Website sao meramente indicativos e sujeitos a alteracoes sem aviso previo.</li>
            <li style={li}>Os precos excluem IVA a 17,5% salvo indicacao explicita em contrario.</li>
            <li style={li}>Quando sao apresentados precos em USD, o equivalente em MWK e calculado a taxa de cambio em vigor na data da facturacao.</li>
            <li style={li}>Uma cotacao formal e vinculativa e valida por 30 dias a partir da data de emissao, salvo indicacao em contrario.</li>
            <li style={li}>A TechNexus reserva-se o direito de rever uma cotacao se os precos dos fornecedores, taxas de cambio ou direitos de importacao se alterarem materialmente entre a cotacao e a confirmacao da encomenda.</li>
          </ul>

          <h2 style={h2s} id="s6">6. Encomendas, Pagamento e Entrega</h2>
          <p style={s}>Uma encomenda so e confirmada apos a recepcao de uma ordem de compra escrita ou acordo assinado e, quando exigido, um pagamento adiantado.</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}><strong>Condicoes de pagamento:</strong> Conforme acordado na cotacao. As condicoes standard para novos clientes sao 50% de deposito na confirmacao da encomenda, saldo na entrega.</li>
            <li style={li}><strong>Entrega:</strong> O risco dos bens passa para o comprador na entrega no endereco acordado. A TechNexus nao e responsavel por atrasos causados pela alfandega, logistica de terceiros ou circunstancias fora do nosso controlo.</li>
            <li style={li}><strong>Cancelamentos:</strong> Encomendas de bens adquiridos especificamente para o cliente nao podem ser canceladas apos a colocacao de uma ordem de compra ao fornecedor. Artigos de stock standard podem ser cancelados com 7 dias de aviso escrito antes do envio.</li>
          </ul>

          <h2 style={h2s} id="s7">7. Propriedade Intelectual</h2>
          <p style={s}>Todo o conteudo deste Website e propriedade da TechNexus ou dos seus licenciadores e esta protegido pela legislacao aplicavel de direitos de autor e propriedade intelectual. Nao pode reproduzir, distribuir ou republicar qualquer conteudo sem consentimento previo por escrito, excepto para uso de referencia pessoal ou empresarial interno ou partilha de um link para este Website.</p>
          <p style={s}>Os logotipos de produtos e marcas apresentados permanecem propriedade dos respectivos proprietarios e sao utilizados apenas para fins de identificacao.</p>

          <h2 style={h2s} id="s8">8. Limitacao de Responsabilidade</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li style={li}>A TechNexus fornece este Website e o seu conteudo "tal como esta", sem garantias de qualquer tipo.</li>
            <li style={li}>A TechNexus nao e responsavel por quaisquer perdas indirectas, incidentais ou consequentes decorrentes da utilizacao deste Website ou da confianca no seu conteudo.</li>
            <li style={li}>A responsabilidade total da TechNexus relativamente a qualquer encomenda nao excedera o valor dessa encomenda.</li>
            <li style={li}>A TechNexus nao e responsavel por perdas decorrentes de atrasos de fornecedores, descontinuacao de produtos, retencao alfandegaria ou eventos de forca maior.</li>
          </ul>

          <h2 style={h2s} id="s9">9. Links e Servicos de Terceiros</h2>
          <p style={s}>Este Website contem links para servicos de terceiros, incluindo o WhatsApp (Meta Platforms), e referencias ao MANePS e a PPDA. A TechNexus nao e responsavel pelo conteudo, praticas de privacidade ou disponibilidade de qualquer website ou servico de terceiros.</p>

          <h2 style={h2s} id="s10">10. Privacidade</h2>
          <p style={s}>A nossa recolha e utilizacao de dados pessoais e regida pela nossa Politica de Privacidade, que faz parte integrante destes Termos de Servico.</p>

          <h2 style={h2s} id="s11">11. Lei Aplicavel e Litigios</h2>
          <p style={s}>Estes Termos sao regidos pelas leis da Republica do Malawi. Qualquer litigio ficara sujeito a jurisdicao exclusiva dos tribunais do Malawi. Quando ambas as partes concordarem, os litigios podem primeiro ser submetidos a mediacao antes de procedimentos legais formais.</p>

          <h2 style={h2s} id="s12">12. Alteracoes a Estes Termos</h2>
          <p style={s}>A TechNexus reserva-se o direito de actualizar estes Termos em qualquer momento. As alteracoes serao publicadas nesta pagina com uma data actualizada. A utilizacao continuada do Website apos a publicacao das alteracoes constitui aceitacao dos Termos revistos.</p>

          <h2 style={h2s} id="s13">13. Contacto</h2>
          <div style={{ background: "var(--fl-neutral-2)", border: "1px solid " + BORDER, borderRadius: "8px", padding: "20px", fontSize: "14px", color: MUTED, lineHeight: 2 }}>
            <strong style={{ color: TEXT }}>TechNexus</strong><br />
            Blantyre, Malawi · BRN: A6SNWQY<br />
            <a href="tel:+265889941700" style={{ color: ACCENT }}>+265 889 941 700</a> · <a href="tel:+265995753326" style={{ color: ACCENT }}>+265 995 753 326</a><br />
            <a href="mailto:info@technexusmw.com" style={{ color: ACCENT }}>info@technexusmw.com</a><br />
            <a href="https://wa.me/265889941700" target="_blank" rel="noopener" style={{ color: ACCENT }}>WhatsApp</a>
          </div>

        </div>
      </div>
    </div>
  );
}
