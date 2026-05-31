import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechNexus — Montagem de Desktop Personalizado",
  description: "TechNexus montagem de desktop personalizado. Intel i5, Windows 11 Pro. Blantyre, Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/pt/computer-assembly",
    languages: {
      "en": "https://www.technexusmw.com/computer-assembly",
      "pt": "https://www.technexusmw.com/pt/computer-assembly",
      "ny": "https://www.technexusmw.com/ny/computer-assembly",
    },
  },
};

export default function PTComputerAssemblyPage() {
  return (
    <>
      {/* PT nav strip */}
      <div style={{ background: "var(--surface-alt, #1a1a2e)", borderBottom: "1px solid var(--border)", padding: "6px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: ".82rem", flexWrap: "wrap", gap: "6px" }}>
        <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/pt">Inicio</a>
          <a href="/pt/catalogue">Catalogo IT</a>
          <a href="/pt/computer-assembly" style={{ fontWeight: 700, color: "var(--fl-blue, #4f8ef7)" }}>Montagem PC</a>
          <a href="/pt/language-services">Servicos Linguisticos</a>
          <a href="/pt/medical-supplies">Material Medico</a>
          <a href="/pt/software-development">Software</a>
          <a href="/pt/credentials">Credenciais</a>
        </nav>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="/computer-assembly">EN</a>
          <span style={{ fontWeight: 700, color: "var(--fl-blue, #4f8ef7)" }}>PT</span>
          <a href="/ny/computer-assembly">NY</a>
        </div>
      </div>

      <div className="hero">
        <h2>Montagem de Desktop Personalizado</h2>
        <p>Desktops para escritorio e educacao construidos por medida. Plataformas Intel i5, componentes de qualidade, Windows 11 Pro, montados e testados por tecnicos certificados. Precos de volume para escolas, governo e empresas.</p>
        <div className="pill">Taxa: 1 USD = MK 1.734 · Marco 2026 · 10+ unidades: especificacoes personalizadas disponiveis</div>
      </div>

      <div className="content">
        <div className="sh">
          <h2>Configuracao Desktop Padrao — Componentes</h2>
          <p className="sd">Especificacao base por unidade. Todos os componentes sao novos, provenientes de distribuidores verificados.</p>
        </div>
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", borderRadius: "var(--radius)" }}>
          <table style={{ minWidth: "520px" }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Componente</th>
                <th scope="col">Especificacao</th>
                <th scope="col">MWK</th>
                <th scope="col">USD</th>
                <th scope="col">Quote</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td className="pn">CPU</td><td>Intel Core i5-12400 (6 nucleos, 12 threads, 4,4GHz Turbo)</td><td className="mk">MK 483,800</td><td className="pr">$279</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0ACPU%0APrice%3A%20%24279" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>2</td><td className="pn">Motherboard</td><td>H610M · LGA1700 · DDR4 · PCIe 4.0 · M.2 NVMe</td><td className="mk">MK 241,000</td><td className="pr">$139</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0AMotherboard%0APrice%3A%20%24139" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>3</td><td className="pn">RAM</td><td>8GB DDR4-3200 (1x8GB, expansivel a 32GB)</td><td className="mk">MK 76,300</td><td className="pr">$44</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0ARAM%0APrice%3A%20%2444" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>4</td><td className="pn">Armazenamento</td><td>256GB NVMe SSD (M.2 PCIe 3.0, ~3.000MB/s leitura)</td><td className="mk">MK 76,300</td><td className="pr">$44</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0AArmazenamento%0APrice%3A%20%2444" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>5</td><td className="pn">Caixa</td><td>Mid-tower ATX · 2x USB 3.0 frontal · Ventilacao em malha</td><td className="mk">MK 137,000</td><td className="pr">$79</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0ACaixa%0APrice%3A%20%2479" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>6</td><td className="pn">PSU</td><td>550W 80+ Bronze certificado · Semi-modular</td><td className="mk">MK 156,100</td><td className="pr">$90</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0APSU%0APrice%3A%20%2490" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>7</td><td className="pn">GPU</td><td>Intel UHD 730 (integrada) — suficiente para escritorio/web</td><td className="mk">—</td><td className="pr">—</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0AGPU" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>8</td><td className="pn">Teclado &amp; Rato</td><td>Teclado USB completo + rato optico</td><td className="mk">MK 34,700</td><td className="pr">$20</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0ATeclado%20%26%20Rato%0APrice%3A%20%2420" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>9</td><td className="pn">Rato</td><td>USB com fio optico</td><td className="mk">MK 10,400</td><td className="pr">$6</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0ARato%0APrice%3A%20%246" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>10</td><td className="pn">Cabo de Rede</td><td>Ethernet Cat6 2m</td><td className="mk">MK 3,500</td><td className="pr">$2</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0ACabo%20de%20Rede%0APrice%3A%20%242" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>11</td><td className="pn">Cabo de Alimentacao</td><td>Cabo IEC C13 1,5m</td><td className="mk">MK 3,500</td><td className="pr">$2</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0ACabo%20de%20Alimentacao%0APrice%3A%20%242" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>12</td><td className="pn">Pasta Termica</td><td>Composto termico CPU</td><td className="mk">MK 10,400</td><td className="pr">$6</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0APasta%20Termica%0APrice%3A%20%246" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>13</td><td className="pn">Cooler CPU</td><td>Stock Intel / torre basica</td><td className="mk">MK 34,700</td><td className="pr">$20</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0ACooler%20CPU%0APrice%3A%20%2420" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>14</td><td className="pn">Licenca SO</td><td>Windows 11 Pro OEM (volume)</td><td className="mk">MK 78,000</td><td className="pr">$45</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0ALicenca%20SO%0APrice%3A%20%2445" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>15</td><td className="pn">Protector de Sobretensao</td><td>Regua de 4 tomadas com proteccao</td><td className="mk">MK 27,700</td><td className="pr">$16</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0AProtector%20de%20Sobretensao%0APrice%3A%20%2416" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>16</td><td className="pn">Montagem &amp; QA</td><td>Construcao, teste, instalacao SO, burn-in</td><td className="mk">MK 69,400</td><td className="pr">$40</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0AMontagem%20%26%20QA%0APrice%3A%20%2440" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr style={{ background: "rgba(240,160,48,.08)" }}>
                <td colSpan={3}><strong>TOTAL POR UNIDADE DESKTOP</strong></td>
                <td className="mk"><strong>MK 1,442,700</strong></td>
                <td className="pr"><strong>$832</strong></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sh"><h2>O Que Esta Incluido</h2></div>
        <div className="stack-grid">
          <div className="stack-item"><h4>Montagem Profissional</h4><p>Construido por tecnicos certificados. Gestao de cabos, pasta termica, configuracao completa de BIOS.</p></div>
          <div className="stack-item"><h4>Testes de Stress QA</h4><p>Burn-in de 4 horas, diagnostico de memoria, verificacao de saude do armazenamento, validacao termica.</p></div>
          <div className="stack-item"><h4>Pronto a Usar</h4><p>Windows 11 Pro pre-instalado, activado e actualizado. Liga e trabalha.</p></div>
          <div className="stack-item"><h4>Encomendas de Volume</h4><p>Escolas, governo, ONGs, clinicas, empresas. Especificacoes personalizadas para 10+ unidades.</p></div>
        </div>

        <div className="sh">
          <h2>Precos por Volume</h2>
          <p className="sd">Contacte-nos para orcamentos exactos em grandes encomendas.</p>
        </div>
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", borderRadius: "var(--radius)" }}>
          <table style={{ minWidth: "400px" }}>
            <thead>
              <tr>
                <th scope="col">Quantidade</th>
                <th scope="col">Desconto</th>
                <th scope="col">MWK / Unidade</th>
                <th scope="col">USD / Unidade</th>
                <th scope="col">Quote</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1 – 4 Unidades</td><td>Padrao</td><td className="mk">MK 1,442,700</td><td className="pr">$832</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%201-4%20Desktop%20Units%20%24832" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>5 – 9 Unidades</td><td>-5%</td><td className="mk">MK 1,369,900</td><td className="pr">$790</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%205-9%20Desktop%20Units%20%24790" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>10 – 24 Unidades</td><td>-8%</td><td className="mk">MK 1,326,500</td><td className="pr">$765</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%2010-24%20Desktop%20Units%20%24765" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td>25+ Unidades</td><td>-12%</td><td className="mk">MK 1,269,300</td><td className="pr">$732</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%2025%2B%20Desktop%20Units%20%24732" target="_blank" rel="noopener">Quote</a></td></tr>
            </tbody>
          </table>
        </div>

        <div className="sh">
          <h2>Opcoes de Personalizacao</h2>
          <p className="sd">Actualizacoes disponiveis mediante pedido.</p>
        </div>
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", borderRadius: "var(--radius)" }}>
          <table style={{ minWidth: "400px" }}>
            <thead>
              <tr>
                <th scope="col">Actualizacao</th>
                <th scope="col">De Para</th>
                <th scope="col">Acrescimo (USD)</th>
                <th scope="col">Quote</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="pn">RAM</td><td>8GB para 16GB DDR4</td><td className="pr">+$44</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20RAM%20upgrade%20%2B%2444" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">Armazenamento</td><td>256GB para 512GB NVMe</td><td className="pr">+$25</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Storage%20upgrade%20%2B%2425" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">Armazenamento</td><td>256GB para 1TB NVMe</td><td className="pr">+$80</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Storage%20upgrade%201TB%20%2B%2480" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">Monitor</td><td>21,5" para 24" FHD IPS</td><td className="pr">+$50</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20Monitor%20upgrade%20%2B%2450" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">WiFi</td><td>Adicionar placa PCIe WiFi 6</td><td className="pr">+$30</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20WiFi%206%20card%20%2B%2430" target="_blank" rel="noopener">Quote</a></td></tr>
              <tr><td className="pn">UPS</td><td>Adicionar APC Back-UPS 750VA</td><td className="pr">+$115</td><td><a className="wa-row-quote" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20quote%20for%3A%20UPS%20APC%20750VA%20%2B%24115" target="_blank" rel="noopener">Quote</a></td></tr>
            </tbody>
          </table>
        </div>

        <div className="compliance">
          <h3>Como Encomendar</h3>
          <p>WhatsApp ou e-mail com a sua quantidade, local de entrega e requisitos de especificacao personalizados. Confirmamos disponibilidade de stock, emitimos orcamento formal e acordamos prazo de entrega. Condicoes de pagamento disponiveis para instituicoes registadas e organismos governamentais.</p>
        </div>
      </div>

      <div className="quote-bar">
        <p><strong>Pronto para encomendar?</strong> Contacte-nos para um orcamento formal, precos de volume ou para organizar a entrega.</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a className="quote-bar-btn" href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20from%20the%20Montagem%20PC%20page." target="_blank" rel="noopener">Pedir Orcamento via WhatsApp</a>
        </div>
      </div>
    </>
  );
}
