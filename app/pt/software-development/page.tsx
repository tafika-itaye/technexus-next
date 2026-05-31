import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechNexus — Desenvolvimento de Software & Consultoria IT",
  description: "TechNexus desenvolvimento de software, aplicacoes web, sistemas empresariais. ASP.NET Core, Blazor. Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/pt/software-development",
    languages: {
      "en": "https://www.technexusmw.com/software-development",
      "pt": "https://www.technexusmw.com/pt/software-development",
      "ny": "https://www.technexusmw.com/ny/software-development",
    },
  },
};

export default function PTSoftwareDevelopmentPage() {
  return (
    <>
      {/* PT nav strip */}
      <div style={{ background: "var(--surface-alt, #1a1a2e)", borderBottom: "1px solid var(--border)", padding: "6px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: ".82rem", flexWrap: "wrap", gap: "6px" }}>
        <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/pt">Inicio</a>
          <a href="/pt/catalogue">Catalogo IT</a>
          <a href="/pt/computer-assembly">Montagem PC</a>
          <a href="/pt/language-services">Servicos Linguisticos</a>
          <a href="/pt/medical-supplies">Material Medico</a>
          <a href="/pt/software-development" style={{ fontWeight: 700, color: "var(--fl-blue, #4f8ef7)" }}>Software</a>
          <a href="/pt/credentials">Credenciais</a>
        </nav>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="/software-development">EN</a>
          <span style={{ fontWeight: 700, color: "var(--fl-blue, #4f8ef7)" }}>PT</span>
          <a href="/ny/software-development">NY</a>
        </div>
      </div>

      <div className="hero">
        <h2>Desenvolvimento de Software &amp; Consultoria IT</h2>
        <p>Aplicacoes empresariais personalizadas, sistemas web e plataformas digitais. Desenvolvido em C#, .NET Core, Blazor e PostgreSQL. Do conceito a implementacao.</p>
        <div className="pill">ASP.NET Core · Blazor · PostgreSQL · Azure · Full-Stack</div>
      </div>

      <div className="content">
        <div className="sh">
          <h2>Servicos de Desenvolvimento</h2>
          <p className="sd">Solucoes de software personalizadas que melhoram o funcionamento das organizacoes.</p>
        </div>
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", borderRadius: "var(--radius)" }}>
          <table style={{ minWidth: "520px" }}>
            <thead>
              <tr>
                <th scope="col">Servico</th>
                <th scope="col">Descricao</th>
                <th scope="col">A partir de (MWK)</th>
                <th scope="col">A partir de (USD)</th>
                <th scope="col">Quote</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pn" style={{ color: "var(--accent)" }}>Desenvolvimento de Software Empresarial</td>
                <td>Sistemas de missao critica -- equipa dedicada, SLA 24/7, auditorias de seguranca, conformidade, implementacoes em larga escala</td>
                <td className="mk">MK 26.010.000+</td>
                <td className="pr">$15,000+</td>
                <td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Desenvolvimento%20Software%20Empresarial%20%2415000%2B" target="_blank" rel="noopener">Quote</a></td>
              </tr>
              <tr>
                <td className="pn">Desenvolvimento de Software Personalizado</td>
                <td>Aplicacoes empresariais por medida -- ASP.NET Core, Blazor Server, PostgreSQL, cloud-native</td>
                <td className="mk">MK 7.000.000+</td>
                <td className="pr">$3,700+</td>
                <td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Software%20Personalizado%20%243700%2B" target="_blank" rel="noopener">Quote</a></td>
              </tr>
              <tr>
                <td className="pn">Desenvolvimento de Aplicacao Web</td>
                <td>Aplicacoes web responsivas, portais, dashboards, desenvolvimento de API</td>
                <td className="mk">MK 2.850.000+</td>
                <td className="pr">$1,500+</td>
                <td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Aplicacao%20Web%20%241500%2B" target="_blank" rel="noopener">Quote</a></td>
              </tr>
              <tr>
                <td className="pn">Desenvolvimento de App Movel</td>
                <td>Aplicacoes Android e multiplataforma</td>
                <td className="mk">MK 5.700.000+</td>
                <td className="pr">$3,000+</td>
                <td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20App%20Movel%20%243000%2B" target="_blank" rel="noopener">Quote</a></td>
              </tr>
              <tr>
                <td className="pn">Manutencao &amp; Suporte de Software</td>
                <td>Suporte continuo, correccao de erros, actualizacoes, resposta SLA</td>
                <td className="mk">MK 2.080.000+/mes</td>
                <td className="pr">$1,200+/mes</td>
                <td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Manutencao%20Suporte%20Software" target="_blank" rel="noopener">Quote</a></td>
              </tr>
              <tr>
                <td className="pn">Servicos Cloud &amp; Integracao</td>
                <td>Azure, DigitalOcean, on-premise. Migracao, implementacao, monitorizacao</td>
                <td className="mk">MK 3.800.000+</td>
                <td className="pr">$2,000+</td>
                <td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Cloud%20Integracao%20%242000%2B" target="_blank" rel="noopener">Quote</a></td>
              </tr>
              <tr>
                <td className="pn">Analise de Dados &amp; BI</td>
                <td>Dashboards de relatorios, acompanhamento de KPIs, suporte a decisao baseado em dados</td>
                <td className="mk">MK 2.850.000+</td>
                <td className="pr">$1,500+</td>
                <td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Analise%20Dados%20BI%20%241500%2B" target="_blank" rel="noopener">Quote</a></td>
              </tr>
              <tr>
                <td className="pn">Design UI/UX</td>
                <td>Pesquisa de utilizadores, wireframes, mockups, prototipos interactivos</td>
                <td className="mk">MK 1.900.000+</td>
                <td className="pr">$1,000+</td>
                <td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Design%20UI%20UX%20%241000%2B" target="_blank" rel="noopener">Quote</a></td>
              </tr>
              <tr>
                <td className="pn">Consultoria IT &amp; Gestao de Projectos</td>
                <td>Analise de requisitos, arquitectura, seleccao de fornecedores, supervisao de projectos</td>
                <td className="mk">Orcamento personalizado</td>
                <td className="pr">Personalizado</td>
                <td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Consultoria%20IT%20Gestao%20Projectos" target="_blank" rel="noopener">Quote</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sh"><h2>Stack Tecnologico</h2></div>
        <div className="stack-grid">
          <div className="stack-item"><h4>Backend</h4><p>ASP.NET Core 8, C#, Entity Framework Core, REST APIs</p></div>
          <div className="stack-item"><h4>Frontend</h4><p>Blazor Server, Razor Pages, HTML5/CSS3, JavaScript</p></div>
          <div className="stack-item"><h4>Base de Dados</h4><p>PostgreSQL 16, SQL Server, SQLite (movel)</p></div>
          <div className="stack-item"><h4>Cloud &amp; DevOps</h4><p>Microsoft Azure, DigitalOcean, Docker, Git, pipelines CI/CD</p></div>
          <div className="stack-item"><h4>Infraestrutura</h4><p>Windows Server 2022, Ubuntu Server, Nginx, IIS</p></div>
          <div className="stack-item"><h4>Seguranca</h4><p>ASP.NET Identity, autenticacao por funcoes, SSL/TLS, encriptacao em repouso</p></div>
        </div>

        <div className="sh">
          <h2>Capacidades para Saude &amp; Instituicoes</h2>
          <p className="sd">Experiencia directa na construcao de sistemas para operacoes hospitalares e instituicoes governamentais.</p>
        </div>
        <div className="stack-grid">
          <div className="stack-item"><h4>Operacoes Hospitalares</h4><p>Service desk e ticketing, gestao de SLA, rastreio de activos, encaminhamento automatico, relatorios departamentais.</p></div>
          <div className="stack-item"><h4>Conformidade &amp; Qualidade</h4><p>Gestao de politicas, controlo de versoes, atestacao de pessoal, relatorios de incidentes, exportacao COHSASA.</p></div>
          <div className="stack-item"><h4>Infraestrutura</h4><p>Projectos LAN/WAN, instalacao de sala de servidores, migracao para cloud, integracao de sistemas, sistemas POS.</p></div>
          <div className="stack-item"><h4>Sistemas de Procurement</h4><p>Monitorizacao de activos, gestao de inventario, gestao de fornecedores, relatorios de conformidade.</p></div>
        </div>

        <div className="sh"><h2>Equipa de Desenvolvimento</h2></div>
        <div className="team-grid">
          <div className="team-card"><div className="role">Fundador &amp; Director Geral</div><p>Mais de 15 anos de experiencia em desenvolvimento de software empresarial.</p></div>
          <div className="team-card"><div className="role">Programador Senior &amp; Arquitecto Tecnico</div><p>Engenheiro full-stack. Especialista em C#, .NET Core, Angular, React, Azure, CI/CD.</p></div>
          <div className="team-card"><div className="role">Analista de Negocios &amp; Sistemas</div><p>Certificado ISC2 CC. MSc em Sistemas de Informacao de Gestao. Especialista em ITSM, ERP, Power BI e analise de dados.</p></div>
          <div className="team-card"><div className="role">Gestora de Negocios &amp; Liaisons com Clientes</div><p>Responsavel pela gestao de contratos, conformidade de procurement, vendas e coordenacao de stakeholders.</p></div>
        </div>

        <div className="cred-box">
          <h3>Credenciais &amp; Registo</h3>
          <p>Totalmente registado no MANePS (Sistema Nacional de Procurement Electronico do Malawi). Todos os contratos conduzidos ao abrigo da Lei de Gestao das Financas Publicas (2022). Trilhas de auditoria completas em cada projecto. Disponivel para concursos publicos, contratos do sector privado e procurement de parceiros de desenvolvimento.</p>
        </div>

        <div className="cred-box">
          <h3>Referencia Diplomatica</h3>
          <p>O Alto Comissariado da Republica de Mocambique, Lilongwe (Fevereiro de 2026) confirma que a TechNexus prestou servicos profissionais a Missao durante um periodo prolongado. A Missao elogia a TechNexus pelos seus elevados padroes de profissionalismo, exactidao, fiabilidade e discrição.</p>
        </div>
      </div>

      <div className="quote-bar">
        <p><strong>Pronto para comecar?</strong> Contacte-nos para discutir o seu projecto e obter um orcamento formal.</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a className="quote-bar-btn" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20from%20the%20Software%20Dev%20page." target="_blank" rel="noopener">Pedir Orcamento via WhatsApp</a>
        </div>
      </div>
    </>
  );
}
