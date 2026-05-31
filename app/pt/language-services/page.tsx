import type { Metadata } from "next";

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

export default function PTLanguageServicesPage() {
  return (
    <>
      {/* PT nav strip */}
      <div style={{ background: "var(--surface-alt, #1a1a2e)", borderBottom: "1px solid var(--border)", padding: "6px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: ".82rem", flexWrap: "wrap", gap: "6px" }}>
        <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/pt">Inicio</a>
          <a href="/pt/catalogue">Catalogo IT</a>
          <a href="/pt/computer-assembly">Montagem PC</a>
          <a href="/pt/language-services" style={{ fontWeight: 700, color: "var(--fl-blue, #4f8ef7)" }}>Servicos Linguisticos</a>
          <a href="/pt/medical-supplies">Material Medico</a>
          <a href="/pt/software-development">Software</a>
          <a href="/pt/credentials">Credenciais</a>
        </nav>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="/language-services">EN</a>
          <span style={{ fontWeight: 700, color: "var(--fl-blue, #4f8ef7)" }}>PT</span>
          <a href="/ny/language-services">NY</a>
        </div>
      </div>

      <div className="hero">
        <h2>TechNexus Scripts — Servicos Linguisticos &amp; Consultoria</h2>
        <p>Traducao, transcricao, legendagem, interpretacao e formacao linguistica profissional. Ao servico de missoes diplomaticas, ONGs, instituicoes de saude e clientes privados em toda a Africa Austral e Oriental.</p>
        <div className="pill">Ingles · Portugues · Chichewa · Swahili · Conformidade HIPAA/RGPD</div>
      </div>

      <div className="content">
        <div className="sh">
          <h2>Servicos &amp; Precos</h2>
          <p className="sd">Todos os precos excluem IVA de 17,5%. Descontos por volume disponiveis.</p>
        </div>
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", borderRadius: "var(--radius)" }}>
          <table style={{ minWidth: "520px" }}>
            <thead>
              <tr>
                <th scope="col">Servico</th>
                <th scope="col">Idiomas</th>
                <th scope="col">Unidade</th>
                <th scope="col">MWK</th>
                <th scope="col">USD</th>
                <th scope="col">Quote</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="pn">Traducao de Documentos</td><td>EN PT NY SW</td><td>por pagina (250 palavras)</td><td className="mk">MK 17.340</td><td className="pr">$10</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Traducao%20de%20Documentos%20%2410" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">Traducao Certificada</td><td>EN PT NY</td><td>por pagina (250 palavras)</td><td className="mk">MK 26.010</td><td className="pr">$15</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Traducao%20Certificada%20%2415" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">Transcricao Audio</td><td>EN PT NY SW</td><td>por hora de audio</td><td className="mk">MK 86.700</td><td className="pr">$50</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Transcricao%20Audio%20%2450" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">Transcricao + Traducao</td><td>EN PT NY</td><td>por hora de audio</td><td className="mk">MK 138.720</td><td className="pr">$80</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Transcricao%20Traducao%20%2480" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">Legendagem / Captioning</td><td>EN PT NY SW</td><td>por minuto de video</td><td className="mk">MK 8.670</td><td className="pr">$5</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Legendagem%20%245" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">Interpretacao Consecutiva</td><td>EN PT NY</td><td>por hora</td><td className="mk">MK 121.380</td><td className="pr">$70</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Interpretacao%20Consecutiva%20%2470" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">Interpretacao de Conferencia</td><td>EN PT NY</td><td>por meio dia</td><td className="mk">MK 346.800</td><td className="pr">$200</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Interpretacao%20Conferencia%20%24200" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">Formacao Linguistica</td><td>EN PT NY SW</td><td>por hora (grupo)</td><td className="mk">MK 69.360</td><td className="pr">$40</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Formacao%20Linguistica%20%2440" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">Revisao &amp; Edicao</td><td>EN PT</td><td>por pagina</td><td className="mk">MK 8.670</td><td className="pr">$5</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Revisao%20Edicao%20%245" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">Localizacao de Website / App</td><td>EN PT NY</td><td>orcamento personalizado</td><td className="mk">a partir de MK 346.800</td><td className="pr">a partir de $200</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Localizacao%20Website%20App" target="_blank" rel="noopener">Quote</a></td></tr>
            </tbody>
          </table>
        </div>

        <div className="sh">
          <h2>Consultoria de Concursos e Pre-Qualificacao</h2>
          <p className="sd">Pare de perder contratos por erros de documentacao. Preco fixo.</p>
        </div>
        <p style={{ fontSize: ".84rem", color: "var(--muted)", marginBottom: "16px", lineHeight: 1.6 }}>Preenchemos os seus documentos de concurso, formularios de pre-qualificacao e respostas a licitacoes com precisao -- no seu idioma. Disponivel em Ingles, Portugues, Chichewa e Swahili.</p>
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", borderRadius: "var(--radius)", marginBottom: "16px" }}>
          <table style={{ minWidth: "480px" }}>
            <thead>
              <tr>
                <th scope="col">Servico</th>
                <th scope="col">Descricao</th>
                <th scope="col">A partir de (MWK)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Registo de Pre-Qualificacao</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Formularios de registo de fornecedor, perfis de empresa, documentos de conformidade</td><td>MK 100.000</td></tr>
              <tr><td>Resposta Simples a Concurso</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Concursos de cotacao, RFQs, documentos de licitacao simples</td><td>MK 200.000</td></tr>
              <tr><td>Resposta Complexa a Concurso</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Propostas completas, licitacoes tecnicas e financeiras, declaracoes de metodo, RFPs</td><td>MK 450.000</td></tr>
              <tr><td>Revisao de Conformidade</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Verificar erros, campos em falta e lacunas de conformidade</td><td>MK 75.000</td></tr>
              <tr><td>Traducao de Documentos de Concurso</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Traduzir documentos: Ingles, Portugues, Chichewa, Swahili</td><td>MK 7.000/pag.</td></tr>
            </tbody>
          </table>
        </div>

        <div className="sh">
          <h2>Registo de Empresas &amp; Consultoria de Conformidade</h2>
          <p className="sd">Registos locais e transfronteiricos. Tratamos da papelada.</p>
        </div>
        <p style={{ fontSize: ".84rem", color: "var(--muted)", marginBottom: "20px", lineHeight: 1.6 }}>Preparamos e submetemos documentos de registo de empresas, licenciamento e conformidade em seu nome. Registos locais no Malawi e registos transfronteiricos para a Zambia, Mocambique e Africa do Sul. Trabalhamos com PPDA, MRA, TPIN, MANePS e registos estrangeiros relevantes.</p>

        <div className="sh" style={{ marginTop: 0, borderLeftColor: "var(--teal)" }}>
          <h2>Registos Locais -- Malawi</h2>
        </div>
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", borderRadius: "var(--radius)", marginBottom: "20px" }}>
          <table style={{ minWidth: "480px" }}>
            <thead>
              <tr>
                <th scope="col">Servico</th>
                <th scope="col">Descricao</th>
                <th scope="col">A partir de (MWK)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Registo MSME / Nome Comercial</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Registo de nome comercial ou MSME no MBRS (antigo Registo Geral)</td><td>MK 50.000</td></tr>
              <tr><td>Constituicao de Empresa</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Registo de Sociedade por Quotas no MBRS. Memorando, estatutos, distribuicao de accoes</td><td>MK 150.000</td></tr>
              <tr><td>Registo TPIN</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>NIF de contribuinte na Autoridade Tributaria do Malawi (MRA). Obrigatorio para conformidade fiscal e procurement</td><td>MK 30.000</td></tr>
              <tr><td>Registo IVA na MRA</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Registo de IVA para empresas que ultrapassem o limite de volume de negocios da MRA</td><td>MK 50.000</td></tr>
              <tr><td>Registo de Fornecedor PPDA</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Registo como fornecedor no portal da Autoridade de Procurement Publico e Alienacao de Bens</td><td>MK 80.000</td></tr>
              <tr><td>Registo MANePS</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Sistema Nacional de Procurement Electronico do Malawi -- obrigatorio para concursos do Estado</td><td>MK 80.000</td></tr>
              <tr><td>Licenciamento TEVETA / Sectorial</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Licenciamento pela Autoridade de Educacao Tecnica, Empresarial e Vocacional para prestadores de formacao</td><td>MK 100.000</td></tr>
              <tr><td>Relatorio Anual &amp; Revisao de Conformidade</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Preparar e submeter relatorios anuais de empresa, rever o estado de conformidade em todos os registos</td><td>MK 60.000</td></tr>
            </tbody>
          </table>
        </div>

        <div className="sh" style={{ marginTop: 0, borderLeftColor: "#4CAF50" }}>
          <h2>Registos Transfronteiricos</h2>
        </div>
        <p style={{ fontSize: ".82rem", color: "var(--muted)", marginBottom: "16px", lineHeight: 1.6 }}>Coordenamos com agentes locais na Zambia, Mocambique e Africa do Sul para gerir os processos de registo remotamente. Os documentos sao preparados, traduzidos quando necessario, e submetidos em seu nome.</p>
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", borderRadius: "var(--radius)", marginBottom: "20px" }}>
          <table style={{ minWidth: "520px" }}>
            <thead>
              <tr>
                <th scope="col">Pais</th>
                <th scope="col">Servico</th>
                <th scope="col">Descricao</th>
                <th scope="col">A partir de (MWK)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ color: "var(--amber)", fontWeight: 700 }}>Zambia</td><td>Registo PACRA</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Agencia de Registo de Patentes e Empresas -- pesquisa, reserva e registo de nome comercial</td><td>MK 200.000</td></tr>
              <tr><td style={{ color: "var(--amber)", fontWeight: 700 }}>Zambia</td><td>TPIN / Registo Fiscal ZRA</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Registo fiscal na Autoridade Tributaria da Zambia para negocios na Zambia</td><td>MK 100.000</td></tr>
              <tr><td style={{ color: "var(--amber)", fontWeight: 700 }}>Mocambique</td><td>Registo CPPME / NUIT</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Registo comercial no CPPME e numero fiscal (NUIT) na AT-Mocambique. Inclui preparacao de documentos em Portugues</td><td>MK 250.000</td></tr>
              <tr><td style={{ color: "var(--amber)", fontWeight: 700 }}>Mocambique</td><td>Alvara Comercial</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Licenca comercial municipal. Obrigatoria para operar formalmente em Mocambique</td><td>MK 150.000</td></tr>
              <tr><td style={{ color: "var(--amber)", fontWeight: 700 }}>Africa do Sul</td><td>Registo CIPC</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Registo na Comissao de Empresas e Propriedade Intelectual. Empresa privada (Pty Ltd) ou NPC</td><td>MK 300.000</td></tr>
              <tr><td style={{ color: "var(--amber)", fontWeight: 700 }}>Africa do Sul</td><td>Numero Fiscal SARS</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Registo no Servico de Receitas da Africa do Sul para imposto sobre o rendimento e IVA</td><td>MK 120.000</td></tr>
              <tr><td style={{ color: "#aaa", fontWeight: 600 }}>Multi-pais</td><td>Pacote Completo de Registo</td><td style={{ color: "var(--muted)", fontSize: ".8rem" }}>Registo de empresa, numero fiscal e licenca comercial num unico pais. Inclui toda a traducao e coordenacao de agentes</td><td>MK 400.000</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cred-box" style={{ marginBottom: "28px" }}>
          <h3>Notas Importantes sobre Registos Transfronteiricos</h3>
          <p>As taxas governamentais, honorarios de agentes no pais de destino e custos de notarizacao sao cobrados separadamente ao custo real. Fornecemos um orcamento detalhado antes de qualquer pagamento. Prazos por pais: Malawi 5-10 dias, Zambia 10-15 dias, Mocambique 15-25 dias, Africa do Sul 10-20 dias.</p>
        </div>

        <div className="sh"><h2>Pares de Idiomas</h2></div>
        <div className="stack-grid">
          <div className="stack-item"><h4>Ingles e Portugues</h4><p>Documentos, contratos, correspondencia, registos medicos, instrumentos juridicos. Clientes diplomaticos e institucionais.</p></div>
          <div className="stack-item"><h4>Ingles e Chichewa</h4><p>Saude comunitaria, comunicacoes governamentais, materiais educativos, documentacao de trabalho de campo ONG.</p></div>
          <div className="stack-item"><h4>Ingles e Swahili</h4><p>Comercio transfronteirico, comunicacoes ONG na Africa Oriental, media e radiodifusao.</p></div>
          <div className="stack-item"><h4>Portugues e Chichewa</h4><p>Corredor Malawi-Mocambique: documentacao fronteirica, acordos comerciais, materiais consulares.</p></div>
        </div>

        <div className="sh"><h2>Sectores Servidos</h2></div>
        <div className="stack-grid">
          <div className="stack-item"><h4>Missoes Diplomaticas</h4><p>Correspondencia consular, notas diplomaticas, documentacao de vistos, materiais de protocolo. Discrição garantida.</p></div>
          <div className="stack-item"><h4>Saude</h4><p>Registos de doentes, documentacao de ensaios clinicos, manuais de dispositivos medicos. Tratamento HIPAA.</p></div>
          <div className="stack-item"><h4>Juridico &amp; Conformidade</h4><p>Contratos, declaracoes juradas, documentos judiciais, quadros de conformidade. Traducoes certificadas disponiveis.</p></div>
          <div className="stack-item"><h4>Empresas &amp; ONG</h4><p>Relatorios anuais, politica de RH, documentacao de projectos, relatorios de doadores, materiais para o conselho.</p></div>
          <div className="stack-item"><h4>Procurement &amp; Concursos</h4><p>Dossies de pre-qualificacao, respostas a concursos, documentos RFQ, revisoes de conformidade. Servico a preco fixo.</p></div>
          <div className="stack-item"><h4>Negocios Transfronteiricos</h4><p>Registo de empresas, conformidade fiscal, licencas comerciais no Malawi, Zambia, Mocambique e Africa do Sul.</p></div>
          <div className="stack-item"><h4>Media &amp; Radiodifusao</h4><p>Legendagem para cinema, documentarios, videos de formacao e conteudo e-learning.</p></div>
          <div className="stack-item"><h4>Educacao</h4><p>Materiais curriculares, localizacao de manuais, manuais de formacao, exames.</p></div>
        </div>

        <div className="cred-box">
          <h3>Referencia Diplomatica</h3>
          <p>O Alto Comissariado da Republica de Mocambique, Lilongwe (Fevereiro de 2026) confirma que a TechNexus prestou servicos linguisticos profissionais a Missao durante um periodo prolongado. A Missao elogia a TechNexus pelos seus elevados padroes de profissionalismo, exactidao, fiabilidade e discrição.</p>
        </div>

        <div className="cred-box">
          <h3>Como Encomendar</h3>
          <p>Envie o seu documento de origem ou requisitos via WhatsApp ou e-mail. Confirmamos o ambito, o prazo e emitimos um orcamento em 24 horas. Prazo normal: 1-3 dias uteis por documento; 5-25 dias uteis para servicos de registo. Servico urgente disponivel para trabalhos linguisticos. Acordo de confidencialidade mediante pedido.</p>
        </div>
      </div>

      <div className="quote-bar">
        <p><strong>Pronto para encomendar?</strong> Contacte-nos para um orcamento formal ou para discutir o seu projecto.</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a className="quote-bar-btn" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20from%20the%20Servicos%20Linguisticos%20page." target="_blank" rel="noopener">Pedir Orcamento via WhatsApp</a>
        </div>
      </div>
    </>
  );
}
