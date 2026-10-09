import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TechNexus — Montagem de Desktop Personalizado",
  description: "TechNexus montagem de desktop personalizado. Intel i5, Windows 11 Pro. Blantyre, Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/pt/computer-assembly",
    languages: {
      "en": "https://www.technexusmw.com/computer-assembly",
      "pt": "https://www.technexusmw.com/pt/computer-assembly",
      "ny": "https://www.technexusmw.com/ny/computer-assembly",
      "x-default": "https://www.technexusmw.com/computer-assembly",
    },
  },
};


const components = [
  { num: 1, part: "CPU", spec: "Intel Core i5-12400 (6 nucleos, 12 threads, 4,4GHz Turbo)", mwk: "MK 483,800", usd: "$279", img: "/images/pc-parts/intel-core-i5-12400.jpg" },
  { num: 2, part: "Motherboard", spec: "H610M · LGA1700 · DDR4 · PCIe 4.0 · M.2 NVMe", mwk: "MK 241,000", usd: "$139", img: "/images/pc-parts/asus-prime-h610m.jpg" },
  { num: 3, part: "RAM", spec: "8GB DDR4-3200 (1x8GB, expansível a 32GB)", mwk: "MK 76,300", usd: "$44", img: "/images/pc-parts/kingston-fury-beast-ddr4.jpg" },
  { num: 4, part: "Armazenamento", spec: "256GB NVMe SSD (M.2 PCIe 3.0, ~3.000MB/s leitura)", mwk: "MK 76,300", usd: "$44", img: "/images/pc-parts/kingston-nv2-nvme.jpg" },
  { num: 5, part: "Caixa", spec: "Mid-tower ATX · 2x USB 3.0 frontal · Ventilação em malha", mwk: "MK 137,000", usd: "$79", img: "/images/pc-parts/cooler-master-q300l.jpg" },
  { num: 6, part: "PSU", spec: "550W 80+ Bronze certificado · Semi-modular", mwk: "MK 156,100", usd: "$90", img: "/images/pc-parts/corsair-cv550-psu.jpg" },
  { num: 7, part: "GPU", spec: "Intel UHD 730 (integrada) — suficiente para escritório/web", mwk: "—", usd: "—", img: "/images/pc-parts/intel-uhd-graphics.jpg" },
  { num: 8, part: "Teclado & Rato", spec: "Teclado USB completo + rato optico", mwk: "MK 34,700", usd: "$20", img: "/images/pc-parts/logitech-mk120-combo.jpg" },
  { num: 9, part: "Rato", spec: "USB com fio optico", mwk: "MK 10,400", usd: "$6", img: "/images/pc-parts/logitech-b100-mouse.jpg" },
  { num: 10, part: "Cabo de Rede", spec: "Ethernet Cat6 2m", mwk: "MK 3,500", usd: "$2", img: "/images/pc-parts/cat6-ethernet-cable.jpg" },
  { num: 11, part: "Cabo de Alimentação", spec: "Cabo IEC C13 1,5m", mwk: "MK 3,500", usd: "$2", img: "/images/pc-parts/iec-c13-power-cable.jpg" },
  { num: 12, part: "Pasta Termica", spec: "Composto termico CPU", mwk: "MK 10,400", usd: "$6", img: "/images/pc-parts/arctic-mx4-paste.jpg" },
  { num: 13, part: "Cooler CPU", spec: "Stock Intel / torre básica", mwk: "MK 34,700", usd: "$20", img: "/images/pc-parts/intel-laminar-rm1-cooler.jpg" },
  { num: 14, part: "Licença SO", spec: "Windows 11 Pro OEM (volume)", mwk: "MK 78,000", usd: "$45", img: "/images/pc-parts/windows-11-pro.jpg" },
  { num: 15, part: "Protector de Sobretensao", spec: "Regua de 4 tomadas com protecção", mwk: "MK 27,700", usd: "$16", img: "/images/pc-parts/apc-surge-protector.jpg" },
  { num: 16, part: "Montagem & QA", spec: "Construção, teste, instalação SO, burn-in", mwk: "MK 69,400", usd: "$40", img: "/images/pc-parts/assembly-service.jpg" },
];

const volume = [
  { qty: "1 - 4 Unidades", disc: "Standard", mwk: "MK 1,442,700", usd: "$832", wa: "1-4%20Unidades%20Desktop%0APre%C3%A7o%3A%20%24832" },
  { qty: "5 - 9 Unidades", disc: "-5%", mwk: "MK 1,369,900", usd: "$790", wa: "5-9%20Unidades%20Desktop%0APre%C3%A7o%3A%20%24790" },
  { qty: "10 - 24 Unidades", disc: "-8%", mwk: "MK 1,326,500", usd: "$765", wa: "10-24%20Unidades%20Desktop%0APre%C3%A7o%3A%20%24765" },
  { qty: "25+ Unidades", disc: "-12%", mwk: "MK 1,269,300", usd: "$732", wa: "25%2B%20Unidades%20Desktop%0APre%C3%A7o%3A%20%24732" },
];

const upgrades = [
  { part: "RAM", change: "8GB para 16GB DDR4", add: "+$44", img: "/images/pc-parts/kingston-fury-beast-ddr4.jpg" },
  { part: "Armazenamento", change: "256GB para 512GB NVMe", add: "+$25", img: "/images/pc-parts/kingston-nv2-nvme.jpg" },
  { part: "Armazenamento", change: "256GB para 1TB NVMe", add: "+$80", img: "/images/pc-parts/kingston-nv2-nvme.jpg" },
  { part: "Monitor", change: "21,5\" para 24\" FHD IPS", add: "+$50", img: "/images/pc-parts/hp-m24f-monitor.jpg" },
  { part: "WiFi", change: "Adicionar placa PCIe WiFi 6", add: "+$30", img: "/images/pc-parts/tplink-archer-tx3000e.jpg" },
  { part: "UPS", change: "Adicionar APC Back-UPS 750VA", add: "+$115", img: "/images/pc-parts/apc-backups-750va.jpg" },
];

const included = [
  { title: "Montagem Profissional", body: "Construído por técnicos certificados. Gestão de cabos, pasta termica, configuração completa de BIOS." },
  { title: "Testes de Stress QA", body: "Burn-in de 4 horas, diagnóstico de memória, verificação de saúde do armazenamento, validação termica." },
  { title: "Pronto a Usar", body: "Windows 11 Pro pre-instalado, activado e actualizado. Liga e trabalha." },
  { title: "Encomendas de Volume", body: "Escolas, governo, ONGs, clinicas, empresas. Especificações personalizadas em 10+ unidades." },
];

const BG = "var(--fl-neutral-2)";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const ACCENT = "var(--fl-blue)";
const TH: React.CSSProperties = { padding: "10px 16px", textAlign: "left", fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", color: MUTED, borderBottom: "1px solid var(--fl-neutral-8)", background: "var(--fl-neutral-4)" };
const TD: React.CSSProperties = { padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid var(--fl-neutral-8)", color: TEXT };

export default function PtComputerAssemblyPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      <div style={{ background: "var(--fl-neutral-90)", padding: "64px 40px 48px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
          Montagem de Desktop Personalizado
        </h1>
        <p style={{ color: "#999", fontSize: "15px", maxWidth: "640px", margin: "0 auto 20px", lineHeight: 1.7 }}>
          Desktops para escritório e educação construídos por medida. Plataformas Intel i5, componentes de qualidade, Windows 11 Pro, montados e testados por técnicos certificados. Preços de volume para escolas, governo e empresas.
        </p>
        <div style={{ display: "inline-block", background: "rgba(0,120,212,0.15)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "var(--fl-blue)", fontSize: "13px" }}>
          Taxa: 1 USD = MK 1,734 · Julho 2026 · 10+ unidades: especificações personalizadas disponíveis
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Configuração Desktop Padrão — Componentes</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "24px" }}>Especificação base por unidade. Todos os componentes são novos, provenientes de distribuidores verificados.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF }}>
            <thead>
              <tr>
                <th style={TH}>Imagem</th>
                <th style={TH}>#</th>
                <th style={TH}>Componente</th>
                <th style={TH}>Especificação</th>
                <th style={TH}>MWK</th>
                <th style={TH}>USD</th>
              </tr>
            </thead>
            <tbody>
              {components.map(c => (
                <tr key={c.num} style={{ background: c.num % 2 === 0 ? "var(--fl-neutral-2)" : SURF }}>
                  <td style={TD}><img src={c.img} alt={c.part} width={40} height={40} style={{ objectFit: "contain", borderRadius: "4px" }} loading="lazy" /></td>
                  <td style={{ ...TD, color: MUTED }}>{c.num}</td>
                  <td style={{ ...TD, fontWeight: 600 }}>{c.part}</td>
                  <td style={TD}>{c.spec}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{c.mwk}</td>
                  <td style={{ ...TD, color: MUTED }}>{c.usd}</td>
                </tr>
              ))}
              <tr style={{ background: "rgba(0,120,212,0.06)" }}>
                <td colSpan={4} style={{ ...TD, fontWeight: 700 }}>TOTAL POR UNIDADE DESKTOP</td>
                <td style={{ ...TD, color: ACCENT, fontWeight: 700 }}>MK 1,442,700</td>
                <td style={{ ...TD, fontWeight: 700 }}>$832</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "20px" }}>O Que Esta Incluido</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {included.map(i => (
            <div key={i.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{i.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{i.body}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Preços por Volume</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "20px" }}>Contacte-nos para orcamentos exactos em grandes encomendas.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF }}>
            <thead>
              <tr>
                <th style={TH}>Quantidade</th>
                <th style={TH}>Desconto</th>
                <th style={TH}>MWK / Unidade</th>
                <th style={TH}>USD / Unidade</th>
                <th style={TH}>Quote</th>
              </tr>
            </thead>
            <tbody>
              {volume.map(v => (
                <tr key={v.qty}>
                  <td style={TD}>{v.qty}</td>
                  <td style={{ ...TD, color: "var(--fl-teal)", fontWeight: 600 }}>{v.disc}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{v.mwk}</td>
                  <td style={{ ...TD, color: MUTED }}>{v.usd}</td>
                  <td style={TD}>
                    <a href={"https://wa.me/265889941700?text=Ol%C3%A1%20TechNexus%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%3A%0A" + v.wa} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none" }}>
                      Pedir Quote
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Opções de Personalização</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "20px" }}>Actualizações disponíveis mediante pedido.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF }}>
            <thead>
              <tr>
                <th style={TH}>Imagem</th>
                <th style={TH}>Actualização</th>
                <th style={TH}>Alteração</th>
                <th style={TH}>Adicional (USD)</th>
                <th style={TH}>Quote</th>
              </tr>
            </thead>
            <tbody>
              {upgrades.map((u, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={TD}><img src={u.img} alt={u.part} width={40} height={40} style={{ objectFit: "contain" }} loading="lazy" /></td>
                  <td style={{ ...TD, fontWeight: 600 }}>{u.part}</td>
                  <td style={TD}>{u.change}</td>
                  <td style={{ ...TD, color: "var(--fl-teal)", fontWeight: 600 }}>{u.add}</td>
                  <td style={TD}>
                    <a href={"https://wa.me/265889941700?text=Ol%C3%A1%20TechNexus%2C%20actualiza%C3%A7%C3%A3o%3A%20" + encodeURIComponent(u.part + " " + u.change)} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none" }}>
                      Pedir Quote
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "32px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, marginBottom: "12px" }}>Como Encomendar</h3>
          <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, marginBottom: "20px" }}>
            Envie via WhatsApp ou email a quantidade, localização de entrega e quaisquer requisitos de especificação personalizada. Confirmamos disponibilidade de stock, emitimos orcamento formal e acordamos prazo de entrega. Condições de pagamento disponíveis para instituições registadas e organismos governamentais.
          </p>
          <a href="https://wa.me/265889941700?text=Ol%C3%A1%20TechNexus%2C%20gostaria%20de%20um%20or%C3%A7amento%20da%20p%C3%A1gina%20Montagem%20PC." target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Pedir Orcamento
          </a>
        </div>

      </div>
    </div>
  );
}

