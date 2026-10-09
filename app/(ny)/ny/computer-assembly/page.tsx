import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TechNexus — Kupanga Desikutopu Mwamsonkho",
  description: "TechNexus kupanga desikutopu mwamsonkho. Intel i5, Windows 11 Pro. Blantyre, Malawi.",
  alternates: {
    canonical: "https://www.technexusmw.com/ny/computer-assembly",
    languages: {
      "en": "https://www.technexusmw.com/computer-assembly",
      "pt": "https://www.technexusmw.com/pt/computer-assembly",
      "ny": "https://www.technexusmw.com/ny/computer-assembly",
    },
  },
};

const components = [
  { num: 1, part: "CPU", spec: "Intel Core i5-12400 (6 nuclei, 12 threads, 4.4GHz Turbo)", mwk: "MK 483,800", usd: "$279", img: "/images/pc-parts/intel-core-i5-12400.jpg" },
  { num: 2, part: "Motherboard", spec: "H610M · LGA1700 · DDR4 · PCIe 4.0 · M.2 NVMe", mwk: "MK 241,000", usd: "$139", img: "/images/pc-parts/asus-prime-h610m.jpg" },
  { num: 3, part: "RAM", spec: "8GB DDR4-3200 (1x8GB, ingathe kukula mpaka 32GB)", mwk: "MK 76,300", usd: "$44", img: "/images/pc-parts/kingston-fury-beast-ddr4.jpg" },
  { num: 4, part: "Kusungira", spec: "256GB NVMe SSD (M.2 PCIe 3.0, ~3,000MB/s kuwerenga)", mwk: "MK 76,300", usd: "$44", img: "/images/pc-parts/kingston-nv2-nvme.jpg" },
  { num: 5, part: "Bokosi", spec: "Mid-tower ATX · 2x USB 3.0 kutsogolo · Mpweya wa mesh", mwk: "MK 137,000", usd: "$79", img: "/images/pc-parts/cooler-master-q300l.jpg" },
  { num: 6, part: "PSU", spec: "550W 80+ Bronze · Semi-modular", mwk: "MK 156,100", usd: "$90", img: "/images/pc-parts/corsair-cv550-psu.jpg" },
  { num: 7, part: "GPU", spec: "Intel UHD 730 (yophatikizidwa) — yokwanira ofesi/web", mwk: "—", usd: "—", img: "/images/pc-parts/intel-uhd-graphics.jpg" },
  { num: 8, part: "Kibodi & Mawudo", spec: "USB kibodi yayikulu + mawudo wa optical", mwk: "MK 34,700", usd: "$20", img: "/images/pc-parts/logitech-mk120-combo.jpg" },
  { num: 9, part: "Mawudo", spec: "USB wired optical", mwk: "MK 10,400", usd: "$6", img: "/images/pc-parts/logitech-b100-mouse.jpg" },
  { num: 10, part: "Kebo ya Netiweki", spec: "Cat6 Ethernet 2m", mwk: "MK 3,500", usd: "$2", img: "/images/pc-parts/cat6-ethernet-cable.jpg" },
  { num: 11, part: "Kebo ya Mawilo", spec: "IEC C13 Power Cord 1.5m", mwk: "MK 3,500", usd: "$2", img: "/images/pc-parts/iec-c13-power-cable.jpg" },
  { num: 12, part: "Thermal Paste", spec: "CPU thermal compound", mwk: "MK 10,400", usd: "$6", img: "/images/pc-parts/arctic-mx4-paste.jpg" },
  { num: 13, part: "CPU Cooler", spec: "Intel stock / basic tower", mwk: "MK 34,700", usd: "$20", img: "/images/pc-parts/intel-laminar-rm1-cooler.jpg" },
  { num: 14, part: "Layisensi ya OS", spec: "Windows 11 Pro OEM (volume)", mwk: "MK 78,000", usd: "$45", img: "/images/pc-parts/windows-11-pro.jpg" },
  { num: 15, part: "Chitetezero cha Magetsi", spec: "Regula ya 4 ndi chitetezero", mwk: "MK 27,700", usd: "$16", img: "/images/pc-parts/apc-surge-protector.jpg" },
  { num: 16, part: "Kupanga & QA", spec: "Kumanga, kuyesa, kukhazikitsa OS, burn-in", mwk: "MK 69,400", usd: "$40", img: "/images/pc-parts/assembly-service.jpg" },
];

const volume = [
  { qty: "1 - 4 Zinthu", disc: "Standard", mwk: "MK 1,442,700", usd: "$832", wa: "1-4%20Zinthu%20Desktop%0AMtengo%3A%20%24832" },
  { qty: "5 - 9 Zinthu", disc: "-5%", mwk: "MK 1,369,900", usd: "$790", wa: "5-9%20Zinthu%20Desktop%0AMtengo%3A%20%24790" },
  { qty: "10 - 24 Zinthu", disc: "-8%", mwk: "MK 1,326,500", usd: "$765", wa: "10-24%20Zinthu%20Desktop%0AMtengo%3A%20%24765" },
  { qty: "25+ Zinthu", disc: "-12%", mwk: "MK 1,269,300", usd: "$732", wa: "25%2B%20Zinthu%20Desktop%0AMtengo%3A%20%24732" },
];

const upgrades = [
  { part: "RAM", change: "8GB kupita 16GB DDR4", add: "+$44", img: "/images/pc-parts/kingston-fury-beast-ddr4.jpg" },
  { part: "Kusungira", change: "256GB kupita 512GB NVMe", add: "+$25", img: "/images/pc-parts/kingston-nv2-nvme.jpg" },
  { part: "Kusungira", change: "256GB kupita 1TB NVMe", add: "+$80", img: "/images/pc-parts/kingston-nv2-nvme.jpg" },
  { part: "Monita", change: "21.5\" kupita 24\" FHD IPS", add: "+$50", img: "/images/pc-parts/hp-m24f-monitor.jpg" },
  { part: "WiFi", change: "Wonjezani PCIe WiFi 6 card", add: "+$30", img: "/images/pc-parts/tplink-archer-tx3000e.jpg" },
  { part: "UPS", change: "Wonjezani APC Back-UPS 750VA", add: "+$115", img: "/images/pc-parts/apc-backups-750va.jpg" },
];

const included = [
  { title: "Kupanga Mwachilungamo", body: "Kumangidwa ndi othandizira olembedwa. Kusintha ma cable, thermal paste, kukhazikitsa BIOS bwino." },
  { title: "Kuyesa kwa QA", body: "Burn-in ya maola 4, kuyesa kwa memory, kuona za storage, kuyesa kwa kutentha." },
  { title: "Wokonzeka Kugwiritsa Ntchito", body: "Windows 11 Pro wokhazikiitsidwa, wovomerezedwa ndi wosintha. Loza ndikugwira ntchito." },
  { title: "Malamulo Ochuluka", body: "Ma sukulu, boma, ma NGO, ma kliniki, makampani. Ma spec osintha pa 10+ zinthu." },
];

const BG = "var(--fl-neutral-2)";
const SURF = "#ffffff";
const BORDER = "var(--fl-neutral-8)";
const TEXT = "var(--fl-neutral-90)";
const MUTED = "#595959";
const ACCENT = "var(--fl-blue)";
const TH: React.CSSProperties = { padding: "10px 16px", textAlign: "left", fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", color: MUTED, borderBottom: "1px solid var(--fl-neutral-8)", background: "var(--fl-neutral-4)" };
const TD: React.CSSProperties = { padding: "10px 16px", fontSize: "13px", borderBottom: "1px solid var(--fl-neutral-8)", color: TEXT };

export default function NyComputerAssemblyPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      <div style={{ background: "var(--fl-neutral-90)", padding: "64px 40px 48px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
          Kupanga Desikutopu Mwamsonkho
        </h1>
        <p style={{ color: "#999", fontSize: "15px", maxWidth: "640px", margin: "0 auto 20px", lineHeight: 1.7 }}>
          Ma desktop a ofesi ndi maphunziro omangidwa mwamsonkho. Platform ya Intel i5, zinthu zabwino, Windows 11 Pro, omangidwa ndi oyesedwa ndi othandizira olembedwa. Mitengo ya kulamula ochuluka kwa ma sukulu, boma ndi makampani.
        </p>
        <div style={{ display: "inline-block", background: "rgba(0,120,212,0.15)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "var(--fl-blue)", fontSize: "13px" }}>
          Mtengo: 1 USD = MK 1,734 · Julayi 2026 · 10+ zinthu: ma spec osintha apezeka
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>
        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "6px" }}>Zinthu za Desikutopu Yodzaza — Zidziwitso za Zinthu</h2>
        <p style={{ fontSize: "14px", color: MUTED, marginBottom: "24px" }}>Zolondola za dizaini pa chinthu chilichonse. Zinthu zonse ndi zatsopano, zachokera kwa ogawira otsimikiziridwa.</p>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF }}>
            <thead>
              <tr>
                <th style={TH}>Chithunzi</th>
                <th style={TH}>#</th>
                <th style={TH}>Chinthu</th>
                <th style={TH}>Zidziwitso</th>
                <th style={TH}>MWK</th>
                <th style={TH}>USD</th>
              </tr>
            </thead>
            <tbody>
              {components.map((c, i) => (
                <tr key={c.num} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={TD}><img src={c.img} alt={c.part} width={48} height={48} style={{ width: "48px", height: "48px", objectFit: "contain" }} loading="lazy" /></td>
                  <td style={{ ...TD, color: MUTED }}>{c.num}</td>
                  <td style={{ ...TD, fontWeight: 600 }}>{c.part}</td>
                  <td style={{ ...TD, color: MUTED, fontSize: "12px" }}>{c.spec}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600, whiteSpace: "nowrap" as const }}>{c.mwk}</td>
                  <td style={{ ...TD, color: MUTED, whiteSpace: "nowrap" as const }}>{c.usd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "20px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Chomwe Chikaphatikizidwa</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {included.map(item => (
            <div key={item.title} style={{ background: SURF, border: "1px solid " + BORDER, borderRadius: "8px", padding: "20px" }}>
              <div style={{ fontFamily: "var(--font-syne)", fontSize: "14px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>{item.body}</div>
            </div>
          ))}
        </div>

        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "20px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Mitengo ya Kulamula Okulidwa Ambiri</h2>
          <p style={{ fontSize: "13px", color: MUTED, margin: "4px 0 0" }}>Tilankhuleni kwa mitengo yolondola ya malamulo akuluakulu.</p>
        </div>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "400px" }}>
            <thead>
              <tr>
                <th style={TH}>Kuchuluka</th>
                <th style={TH}>Kutsitsa</th>
                <th style={TH}>MWK / Chinthu</th>
                <th style={TH}>USD / Chinthu</th>
                <th style={TH}>Pemphani Mtengo</th>
              </tr>
            </thead>
            <tbody>
              {volume.map((v, i) => (
                <tr key={v.qty} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={{ ...TD, fontWeight: 600 }}>{v.qty}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{v.disc}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{v.mwk}</td>
                  <td style={{ ...TD, color: MUTED }}>{v.usd}</td>
                  <td style={TD}>
                    <a href={"https://wa.me/265889941700?text=Moni%20TechNexus%2C%20ndikufuna%20quotation%20ya%3A%0A" + v.wa} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" as const }}>
                      Pemphani
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ borderLeft: "4px solid " + ACCENT, paddingLeft: "16px", marginBottom: "20px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, color: TEXT, margin: 0 }}>Zosintha Zomwe Zingapangidwe</h2>
          <p style={{ fontSize: "13px", color: MUTED, margin: "4px 0 0" }}>Zowonjezeka zingapezeke momufunira.</p>
        </div>
        <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid " + BORDER, marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: SURF, minWidth: "400px" }}>
            <thead>
              <tr>
                <th style={TH}>Chithunzi</th>
                <th style={TH}>Kuwonjezeka</th>
                <th style={TH}>Kuchokera kupita</th>
                <th style={TH}>Kuwonjezeka (USD)</th>
                <th style={TH}>Pemphani Mtengo</th>
              </tr>
            </thead>
            <tbody>
              {upgrades.map((u, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? SURF : "var(--fl-neutral-2)" }}>
                  <td style={TD}><img src={u.img} alt={u.part} width={48} height={48} style={{ width: "48px", height: "48px", objectFit: "contain" }} loading="lazy" /></td>
                  <td style={{ ...TD, fontWeight: 600 }}>{u.part}</td>
                  <td style={{ ...TD, color: MUTED, fontSize: "12px" }}>{u.change}</td>
                  <td style={{ ...TD, color: ACCENT, fontWeight: 600 }}>{u.add}</td>
                  <td style={TD}>
                    <a href={"https://wa.me/265889941700?text=Moni%20TechNexus%2C%20ndikufuna%20quotation%20ya%3A%0AKuwonjezeka%3A%20" + encodeURIComponent(u.part + " " + u.change)} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" as const }}>
                      Pemphani
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: "var(--fl-neutral-90)", borderRadius: "8px", padding: "24px 28px", fontSize: "0.84rem", color: "#999", lineHeight: 1.65 }}>
          Momwe Mungalamule: WhatsApp kapena imelo ndi kuchuluka kwanu, malo operekedwa ndi zolondola zapadera. Titsimikizira zinthu zaposipo, tipelekezere mtengo wokhazikika ndi kulandira nthawi yopereka. Magwiro a ndalama apezeka kwa mabungwe olembedwa ndi maboma.
        </div>
      </div>

    </div>
  );
}

