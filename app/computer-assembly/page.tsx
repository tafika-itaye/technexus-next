import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Custom PC Assembly | TechNexus",
  description: "Custom desktop PCs built to spec. Intel i5, Windows 11 Pro, QA-tested. Volume pricing for schools, government and enterprise in Malawi.",
}

import Link from "next/link";

const components = [
  { num: 1, part: "CPU", spec: "Intel Core i5-12400 (6-core, 12-thread, 4.4GHz Turbo)", mwk: "MK 483,800", usd: "$279", img: "/images/pc-parts/intel-core-i5-12400.jpg" },
  { num: 2, part: "Motherboard", spec: "H610M · LGA1700 · DDR4 · PCIe 4.0 · M.2 NVMe", mwk: "MK 241,000", usd: "$139", img: "/images/pc-parts/asus-prime-h610m.jpg" },
  { num: 3, part: "RAM", spec: "8GB DDR4-3200 (1x8GB, expandable to 32GB)", mwk: "MK 76,300", usd: "$44", img: "/images/pc-parts/kingston-fury-beast-ddr4.jpg" },
  { num: 4, part: "Storage", spec: "256GB NVMe SSD (M.2 PCIe 3.0, ~3,000MB/s read)", mwk: "MK 76,300", usd: "$44", img: "/images/pc-parts/kingston-nv2-nvme.jpg" },
  { num: 5, part: "Case", spec: "Mid-tower ATX · 2x USB 3.0 front · Mesh airflow", mwk: "MK 137,000", usd: "$79", img: "/images/pc-parts/cooler-master-q300l.jpg" },
  { num: 6, part: "PSU", spec: "550W 80+ Bronze certified · Semi-modular", mwk: "MK 156,100", usd: "$90", img: "/images/pc-parts/corsair-cv550-psu.jpg" },
  { num: 7, part: "GPU", spec: "Intel UHD 730 (integrated) — sufficient for office/web", mwk: "—", usd: "—", img: "/images/pc-parts/intel-uhd-graphics.jpg" },
  { num: 8, part: "Keyboard & Mouse", spec: "USB full-size keyboard + optical mouse", mwk: "MK 34,700", usd: "$20", img: "/images/pc-parts/logitech-mk120-combo.jpg" },
  { num: 9, part: "Mouse", spec: "USB Wired Optical", mwk: "MK 10,400", usd: "$6", img: "/images/pc-parts/logitech-b100-mouse.jpg" },
  { num: 10, part: "Network Cable", spec: "Cat6 Ethernet 2m", mwk: "MK 3,500", usd: "$2", img: "/images/pc-parts/cat6-ethernet-cable.jpg" },
  { num: 11, part: "Power Cable", spec: "IEC C13 Power Cord 1.5m", mwk: "MK 3,500", usd: "$2", img: "/images/pc-parts/iec-c13-power-cable.jpg" },
  { num: 12, part: "Thermal Paste", spec: "CPU Thermal Compound", mwk: "MK 10,400", usd: "$6", img: "/images/pc-parts/arctic-mx4-paste.jpg" },
  { num: 13, part: "CPU Cooler", spec: "Stock Intel / basic tower", mwk: "MK 34,700", usd: "$20", img: "/images/pc-parts/intel-laminar-rm1-cooler.jpg" },
  { num: 14, part: "OS License", spec: "Windows 11 Pro OEM (volume)", mwk: "MK 78,000", usd: "$45", img: "/images/pc-parts/windows-11-pro.jpg" },
  { num: 15, part: "Surge Protector", spec: "4-way surge strip", mwk: "MK 27,700", usd: "$16", img: "/images/pc-parts/apc-surge-protector.jpg" },
  { num: 16, part: "Assembly & QA", spec: "Build, test, OS install, burn-in", mwk: "MK 69,400", usd: "$40", img: "/images/pc-parts/assembly-service.jpg" },
];

const volume = [
  { qty: "1 - 4 Units", disc: "Standard", mwk: "MK 1,442,700", usd: "$832", wa: "1-4%20Units%20Desktop%20Build%0APrice%3A%20%24832" },
  { qty: "5 - 9 Units", disc: "-5%", mwk: "MK 1,369,900", usd: "$790", wa: "5-9%20Units%20Desktop%20Build%0APrice%3A%20%24790" },
  { qty: "10 - 24 Units", disc: "-8%", mwk: "MK 1,326,500", usd: "$765", wa: "10-24%20Units%20Desktop%20Build%0APrice%3A%20%24765" },
  { qty: "25+ Units", disc: "-12%", mwk: "MK 1,269,300", usd: "$732", wa: "25%2B%20Units%20Desktop%20Build%0APrice%3A%20%24732" },
];

const upgrades = [
  { part: "RAM", change: "8GB to 16GB DDR4", add: "+$44", img: "/images/pc-parts/kingston-fury-beast-ddr4.jpg" },
  { part: "Storage", change: "256GB to 512GB NVMe", add: "+$25", img: "/images/pc-parts/kingston-nv2-nvme.jpg" },
  { part: "Storage", change: "256GB to 1TB NVMe", add: "+$80", img: "/images/pc-parts/kingston-nv2-nvme.jpg" },
  { part: "Monitor", change: "21.5\" to 24\" FHD IPS", add: "+$50", img: "/images/pc-parts/hp-m24f-monitor.jpg" },
  { part: "WiFi", change: "Add PCIe WiFi 6 card", add: "+$30", img: "/images/pc-parts/tplink-archer-tx3000e.jpg" },
  { part: "UPS", change: "Add APC Back-UPS 750VA", add: "+$115", img: "/images/pc-parts/apc-backups-750va.jpg" },
];

const included = [
  { title: "Professional Assembly", body: "Hand-built by certified technicians. Cable management, thermal compound, full BIOS config." },
  { title: "QA Stress Testing", body: "4-hour burn-in, memory diagnostics, storage health check, thermal validation." },
  { title: "Ready to Deploy", body: "Windows 11 Pro pre-installed, activated, updated. Plug in and work." },
  { title: "Volume Orders", body: "Schools, government, NGOs, clinics, enterprise. Custom specs on 10+ units." },
];

const BG = "var(--fl-neutral-2)";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const ACCENT = "var(--fl-blue)";
const TH: React.CSSProperties = { padding: "10px 16px", textAlign: "left", fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", color: MUTED, borderBottom: "1px solid var(--fl-neutral-8)", background: "var(--fl-neutral-4)" };
const TD: React.CSSProperties = { padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid var(--fl-neutral-8)", color: TEXT };

export default function ComputerAssemblyPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

          {/* HERO */}
          <div style={{ position: "relative", padding: "64px 40px 48px", textAlign: "center", backgroundImage: "url(/circuit_board_hero.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.62)" }} />
            <div style={{ position: "relative" }}>
              <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
                Custom Desktop PC Assembly
              </h1>
              <p style={{ color: "#999", fontSize: "15px", maxWidth: "640px", margin: "0 auto 20px", lineHeight: 1.7 }}>
                Office and educational desktop PCs built to spec. Intel i5 platforms, quality components, Windows 11 Pro, assembled and QA-tested by certified technicians. Volume pricing for schools, government and enterprise.
              </p>
              <div style={{ display: "inline-block", fontSize: "13px", fontWeight: 700, color: "var(--fl-blue)", letterSpacing: "0.03em" }}>
                Rate: 1 USD = MK 1,734 · March 2026 · 10+ units: custom specs available
              </div>
            </div>
          </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>

        {/* COMPONENT TABLE */}
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Standard Desktop Build — Component Breakdown</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "24px" }}>Base specification per unit. All components are new, sourced from verified distributors.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF }}>
            <thead>
              <tr>
                <th style={TH}>Image</th>
                <th style={TH}>#</th>
                <th style={TH}>Component</th>
                <th style={TH}>Specification</th>
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
                <td colSpan={4} style={{ ...TD, fontWeight: 700 }}>TOTAL PER DESKTOP UNIT</td>
                <td style={{ ...TD, color: ACCENT, fontWeight: 700 }}>MK 1,442,700</td>
                <td style={{ ...TD, fontWeight: 700 }}>$832</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* INCLUDED */}
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "20px" }}>What is Included</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {included.map(i => (
            <div key={i.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{i.title}</h4>
              <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{i.body}</p>
            </div>
          ))}
        </div>

        {/* VOLUME PRICING */}
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Volume Pricing Tiers</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "20px" }}>Contact us for exact quotes on large orders.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF }}>
            <thead>
              <tr>
                <th style={TH}>Quantity</th>
                <th style={TH}>Discount</th>
                <th style={TH}>MWK / Unit</th>
                <th style={TH}>USD / Unit</th>
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
                    <a href={"https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20for%3A%0A" + v.wa} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none" }}>
                      Get Quote
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* UPGRADES */}
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Customisation Options</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "20px" }}>Upgrades available on request.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF }}>
            <thead>
              <tr>
                <th style={TH}>Image</th>
                <th style={TH}>Upgrade</th>
                <th style={TH}>Change</th>
                <th style={TH}>Add (USD)</th>
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
                    <a href={"https://wa.me/265889941700?text=Hi%20TechNexus%2C%20upgrade%20enquiry%3A%20" + encodeURIComponent(u.part + " " + u.change)} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none" }}>
                      Get Quote
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* HOW TO ORDER */}
        <div style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "32px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: TEXT, marginBottom: "12px" }}>How to Order</h3>
          <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, marginBottom: "20px" }}>
            WhatsApp or email with your quantity, delivery location and any custom spec requirements.
            We confirm stock availability, issue a formal quotation and agree delivery timeline.
            Payment terms available for registered institutions and government bodies.
          </p>
          <a href="https://wa.me/265889941700?text=Hi%20TechNexus%2C%20I%20would%20like%20a%20quote%20from%20the%20PC%20Assembly%20page." target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Request a Quote
          </a>
        </div>

      </div>
    </div>
  );
}

