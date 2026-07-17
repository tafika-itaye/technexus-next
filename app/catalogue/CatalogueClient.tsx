"use client";
import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    title: "Enterprise & ISP Routers",
    desc: "Mikrotik Cloud Core and RouterBOARD for ISPs, data centres and enterprise edge.",
    products: [
      { sku: "MT-CCR2116-12G-4S+", title: "Mikrotik CCR2116-12G-4S+ Cloud Core Router", specs: "16GB RAM · 13x GbE · 4x SFP+ · RouterOS L6", mwk: "MK 3,103,860", usd: "$1,790", img: "/images/networking/routers/mikrotik_ccr2116-12g-4s+.jpg" },
      { sku: "MT-CCR2216-1G-12XS-2XQ", title: "Mikrotik CCR2216 Cloud Core Router", specs: "12x SFP28 · 2x QSFP28 · 100G throughput · L6", mwk: "MK 7,092,060", usd: "$4,090", img: "/images/networking/routers/mikrotik_ccr2216.jpg" },
      { sku: "MT-CCR2004-16G-2S+", title: "Mikrotik CCR2004-16G-2S+ Cloud Core Router", specs: "16x GbE · 2x SFP+ · RouterOS L5", mwk: "MK 1,144,440", usd: "$660", img: "/images/networking/routers/mikrotik_ccr2004-16g.jpg" },
      { sku: "MT-CCR2004-1G-12S+2XS", title: "Mikrotik CCR2004-12S+2XS Aggregation Router", specs: "12x SFP+ · 2x SFP28 · 25G uplink · L6", mwk: "MK 1,265,820", usd: "$730", img: "/images/networking/routers/mikrotik_ccr2004-12sfp.jpg" },
      { sku: "MT-RB5009UPR+S+IN", title: "Mikrotik RB5009UPR+S+IN PoE Router", specs: "7x GbE · 2.5G · SFP+ · PoE-in/out · desktop", mwk: "MK 710,940", usd: "$410", img: "/images/networking/routers/mikrotik_rb5009upr.jpg" },
      { sku: "MT-RB5009UG+S+IN", title: "Mikrotik RB5009UG+S+IN Router", specs: "7x GbE · 2.5G · SFP+ · desktop", mwk: "MK 589,560", usd: "$340", img: "/images/networking/routers/mikrotik_rb5009ug.jpg" },
      { sku: "MT-RB4011iGS+RM", title: "Mikrotik RB4011iGS+RM Rackmount Router", specs: "10x GbE · 1x SFP+ · 1U rackmount", mwk: "MK 502,860", usd: "$290", img: "/images/networking/routers/mikrotik_rb4011.jpg" },
      { sku: "MT-RB1100DX4", title: "Mikrotik RB1100AHx4 Dude Edition", specs: "13x GbE · 1U rackmount · Dude server preinstalled", mwk: "MK 728,280", usd: "$420", img: "/images/networking/routers/mikrotik_rb1100dx4.jpg" },
      { sku: "MT-L009UIGS-RM", title: "Mikrotik L009UiGS-RM Rackmount Router", specs: "8x GbE · 2.5G · SFP · 1U rackmount", mwk: "MK 433,500", usd: "$250", img: "/images/networking/routers/mikrotik_l009uigs.jpg" },
    ],
  },
  {
    title: "Managed Switches",
    desc: "Layer-2/3 managed switches — gigabit, 10G/40G aggregation and PoE distribution.",
    products: [
      { sku: "MT-CRS354-48G-4S+2Q+RM", title: "Mikrotik CRS354-48G Managed Switch", specs: "48x GbE · 4x SFP+ · 2x QSFP+ · Layer 3 · Rack", mwk: "MK 1,491,240", usd: "$860", img: "/images/networking/switches/mikrotik_crs354-48g-4s+2q+rm.jpg" },
      { sku: "MT-CRS354-48P-4S+2Q+RM", title: "Mikrotik CRS354-48P PoE Switch", specs: "48x GbE PoE · 4x SFP+ · 2x QSFP+ · Layer 3 · Rack", mwk: "MK 2,202,180", usd: "$1,270", img: "/images/networking/switches/mikrotik_crs354-48p.jpg" },
      { sku: "MT-CRS328-24P-4S+RM", title: "Mikrotik CRS328-24P PoE Switch", specs: "24x GbE PoE+ · 4x SFP+ · Managed · Rack", mwk: "MK 1,248,480", usd: "$720", img: "/images/networking/switches/mikrotik_crs328-24p-4s+rm.jpg" },
      { sku: "MT-CRS326-24G-2S+RM", title: "Mikrotik CRS326-24G Managed Switch", specs: "24x GbE · 2x SFP+ · Layer 2/3 · Rack", mwk: "MK 728,280", usd: "$420", img: "/images/networking/switches/mikrotik_crs326-24g-2s+rm.jpg" },
      { sku: "MT-CRS326-24S+2Q+RM", title: "Mikrotik CRS326-24S+2Q+ Aggregation Switch", specs: "24x SFP+ 10G · 2x QSFP+ 40G · L3 · Rack", mwk: "MK 1,109,760", usd: "$640", img: "/images/networking/switches/mikrotik_crs326-24sfp.jpg" },
      { sku: "MT-CRS318-16P-2S+OUT", title: "Mikrotik CRS318-16P NetPower Outdoor Switch", specs: "16x GbE PoE · 2x SFP+ · IP55 outdoor", mwk: "MK 1,005,720", usd: "$580", img: "/images/networking/switches/mikrotik_crs318-outdoor.jpg" },
      { sku: "MT-CRS112-8P-4S-IN", title: "Mikrotik CRS112-8P-4S Smart Switch", specs: "8x GbE PoE · 4x SFP · desktop", mwk: "MK 485,520", usd: "$280", img: "/images/networking/switches/mikrotik_crs112-8p.jpg" },
    ],
  },
  {
    title: "SFP+ Transceivers",
    desc: "10G fibre and copper modules for your Mikrotik, HP, Dell or Cisco switches.",
    products: [
      { sku: "MT-S+85DLC03D", title: "Mikrotik S+85DLC03D SFP+ Transceiver", specs: "10GBASE-SR · 850nm multi-mode · 300m reach · LC", mwk: "MK 86,700", usd: "$50", img: "/images/networking/transceivers/mikrotik_s+85dlc03d.jpg" },
      { sku: "MT-S+RJ10", title: "Mikrotik S+RJ10 SFP+ Copper Module", specs: "10G RJ45 · Cat6a · 30m reach", mwk: "MK 173,400", usd: "$100", img: "/images/networking/transceivers/mikrotik_s+rj10.jpg" },
    ],
  },
  {
    title: "Professional Monitors",
    desc: "Lenovo ThinkVision ultrawide and ASUS ProArt colour-accurate displays for offices, finance teams and creators.",
    products: [
      { sku: "64AEGAT1UK", title: "Lenovo ThinkVision T34WD-40 34\" Curved", specs: "34\" WQHD 3440x1440 · VA · 120Hz · USB-C · 1500R curve", mwk: "MK 1,213,800", usd: "$700", img: "/images/monitors/lenovo_thinkvision_t34wd-40.jpg" },
      { sku: "64ADGAT1UK", title: "Lenovo ThinkVision P34WD-40 34\" Curved", specs: "34\" WQHD · IPS · USB-C docking · Daisy-chain · P-series", mwk: "MK 1,942,080", usd: "$1,120", img: "/images/monitors/lenovo_thinkvision_p34wd-40.jpg" },
      { sku: "ASU-PA248QV", title: "ASUS ProArt PA248QV", specs: "24.1\" WUXGA · IPS · 75Hz · 100% sRGB · Calman Verified", mwk: "MK 502,860", usd: "$290", img: "/images/monitors/asus_proart_pa248qv.jpg" },
      { sku: "ASU-PA278QV", title: "ASUS ProArt PA278QV", specs: "27\" QHD · IPS · 75Hz · 100% sRGB · Calman Verified", mwk: "MK 693,600", usd: "$400", img: "/images/monitors/asus_proart_pa278qv.jpg" },
      { sku: "ASU-PA27JCV", title: "ASUS ProArt PA27JCV 5K", specs: "27\" 5K 5120x2880 · IPS · 99% DCI-P3 · USB-C PD 96W", mwk: "MK 1,907,400", usd: "$1,100", img: "/images/monitors/asus_proart_pa27jcv.jpg" },
    ],
  },
  {
    title: "Business Laptops",
    desc: "HP ProBook, HP OmniBook and ASUS VivoBook — new-generation notebooks from entry level to premium OLED.",
    products: [
      { sku: "ASU-VB-X1504-C5", title: "ASUS VivoBook X1504VA", specs: "Core 5 120U 8GB/512GB · 15.6\" FHD · DOS", mwk: "MK 1,161,780", usd: "$670", img: "/images/laptops/asus_vivobook_x1504va.jpg" },
      { sku: "ASU-VB-X1404-C5", title: "ASUS VivoBook X1404VA", specs: "Core 5 120U 8GB/512GB · 14\" FHD · Win 11", mwk: "MK 1,265,820", usd: "$730", img: "/images/laptops/asus_vivobook_x1404va.jpg" },
      { sku: "ASU-VB-F1504-C5", title: "ASUS VivoBook F1504VAP", specs: "Core 5 120U 16GB/512GB · 15.6\" FHD · Win 11", mwk: "MK 1,335,180", usd: "$770", img: "/images/laptops/asus_vivobook_f1504vap.jpg" },
      { sku: "ASU-VB-A1504-I7", title: "ASUS VivoBook A1504VA", specs: "i7-1335U 8GB/512GB · 15.6\" FHD · FPR · BL · DOS", mwk: "MK 1,387,200", usd: "$800", img: "/images/laptops/asus_vivobook_a1504va.jpg" },
      { sku: "HP-PB440-G11", title: "HP ProBook 440 G11", specs: "Ultra 5 125U 8GB/512GB · 14\" WUXGA · FPR · BL · DOS + Bag", mwk: "MK 1,629,960", usd: "$940", img: "/images/laptops/hp_probook_440_g11.jpg" },
      { sku: "HP-PB460-G11", title: "HP ProBook 460 G11", specs: "Ultra 7 155U 8GB/512GB · 16\" WUXGA · FPR · BL · DOS + Bag", mwk: "MK 1,994,100", usd: "$1,150", img: "/images/laptops/hp_probook_460_g11.jpg" },
      { sku: "HP-OB3-16-U5", title: "HP OmniBook 3 16", specs: "Ultra 5 225U 16GB/512GB · 16\" WUXGA Touch · Win 11", mwk: "MK 1,577,940", usd: "$910", img: "/images/laptops/hp_omnibook_3_16.jpg" },
      { sku: "HP-OBUF-14-U7", title: "HP OmniBook Ultra Flip 14 2-in-1", specs: "Ultra 7 258V 32GB/1TB · 14\" 3K OLED Touch · Pen · Win 11", mwk: "MK 3,450,660", usd: "$1,990", img: "/images/laptops/hp_omnibook_ultra_flip_14.jpg" },
    ],
  },
  {
    title: "Business Desktops & All-in-Ones",
    desc: "HP Elite Tower and Dell Pro AIO — 14th-gen and Core Ultra desktops for offices, schools and institutions.",
    products: [
      { sku: "HP-800G9-I5", title: "HP Elite Tower 800 G9", specs: "i5-14500 16GB DDR5/512GB NVMe · DOS · KB+Mouse · 1yr", mwk: "MK 1,890,060", usd: "$1,090", img: "/images/desktops/tower/hp_elite_tower_800_g9.jpg" },
      { sku: "HP-800G9-I7", title: "HP Elite Tower 800 G9", specs: "i7-14700 16GB DDR5/512GB NVMe · DOS · KB+Mouse · 1yr", mwk: "MK 2,236,860", usd: "$1,290", img: "/images/desktops/tower/hp_elite_tower_800_g9.jpg" },
      { sku: "DEL-AIO24-U7-DOS", title: "Dell Pro 24 AIO Plus QB24250", specs: "Ultra 7 265 32GB/1TB · 24\" FHD Touch · DOS", mwk: "MK 3,034,500", usd: "$1,750", img: "/images/desktops/aio/dell_pro_24_aio_plus.jpg" },
      { sku: "DEL-AIO24-U7-W11", title: "Dell Pro 24 AIO Plus QB24250", specs: "Ultra 7 265 32GB/1TB · 24\" FHD Touch · Win 11", mwk: "MK 3,207,900", usd: "$1,850", img: "/images/desktops/aio/dell_pro_24_aio_plus.jpg" },
      { sku: "DEL-AIO24-U9-W11P", title: "Dell Pro 24 AIO Plus QB24250", specs: "Ultra 9 285 16GB/1TB · 24\" FHD Touch · Win 11 Pro", mwk: "MK 3,381,300", usd: "$1,950", img: "/images/desktops/aio/dell_pro_24_aio_plus.jpg" },
    ],
  },
  {
    title: "Workstation Graphics",
    desc: "NVIDIA RTX Ada professional GPUs for GIS, CAD, rendering and AI — universities, NGOs and engineering firms.",
    products: [
      { sku: "VCNRTXA400-SB", title: "PNY NVIDIA RTX A400", specs: "4GB GDDR6 · Low profile · 4x mDP · Entry workstation", mwk: "MK 364,140", usd: "$210", img: "/images/gpus/pny_rtx_a400.jpg" },
      { sku: "VCNRTX2000ADA-SB", title: "PNY NVIDIA RTX 2000 Ada", specs: "16GB GDDR6 ECC · 2,816 CUDA · Low profile · 4x mDP", mwk: "MK 1,699,320", usd: "$980", img: "/images/gpus/pny_rtx_2000_ada.jpg" },
      { sku: "VCNRTX4500ADA-SB", title: "PNY NVIDIA RTX 4500 Ada", specs: "24GB GDDR6 ECC · 7,680 CUDA · 4x DP · CAD/AI workstation", mwk: "MK 4,924,560", usd: "$2,840", img: "/images/gpus/pny_rtx_4500_ada.jpg" },
      { sku: "VCNRTX5000ADA-SB", title: "PNY NVIDIA RTX 5000 Ada", specs: "32GB GDDR6 ECC · 12,800 CUDA · 4x DP · Rendering/AI", mwk: "MK 9,363,600", usd: "$5,400", img: "/images/gpus/pny_rtx_5000_ada.jpg" },
    ],
  },
  {
    title: "Projection & Presentation",
    desc: "Laser projectors for lecture halls, conference rooms and auditoriums.",
    products: [
      { sku: "EPS-L790U", title: "Epson PowerLite L790U", specs: "7,300 lumens · WUXGA · Laser 3LCD · 30,000hr · Wi-Fi/LAN/HDBaseT", mwk: "MK 9,519,660", usd: "$5,490", img: "/images/projectors/epson_powerlite_l790u.jpg" },
    ],
  },
];

const allProducts = categories.flatMap(c => c.products.map(p => ({ ...p, category: c.title })));

export default function CataloguePage() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? allProducts.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.sku.toLowerCase().includes(query.toLowerCase()) ||
        p.specs.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : null;

  const BORDER = "var(--fl-neutral-8)";
  const MUTED = "#595959";

  return (
    <div style={{ background: "var(--fl-neutral-2)", minHeight: "100vh" }}>

      {/* HERO */}
      <div style={{ background: "var(--fl-neutral-90)", padding: "64px 40px 48px", textAlign: "center", backgroundImage: "linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url(/index_main/server_rack_1-1200.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
          IT Catalogue
        </h1>
        <p style={{ color: "#999", fontSize: "15px", maxWidth: "640px", margin: "0 auto 24px", lineHeight: 1.7 }}>
          Enterprise networking from Mikrotik, business laptops and desktops from HP, Dell and ASUS,
          plus professional monitors, workstation graphics and laser projection. All pricing includes Dubai to Malawi air freight.
        </p>
        <div style={{ display: "inline-block", fontSize: "13px", fontWeight: 700, color: "var(--fl-blue)", letterSpacing: "0.03em", marginBottom: "28px" }}>
          Rate: 1 USD = MK 1,734 · July 2026 · Contact for formal quotations
        </div>
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ width: "100%", padding: "12px 20px", borderRadius: "8px", border: "1px solid #2a2a3a", background: "#1a1a2e", color: "#fff", fontSize: "15px", outline: "none" }}
          />
          {query && (
            <div style={{ marginTop: "8px", color: "#999", fontSize: "13px" }}>
              {filtered?.length ?? 0} of {allProducts.length} products match
            </div>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 40px" }}>
        {filtered ? (
          <>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, marginBottom: "24px", color: "var(--fl-neutral-90)" }}>
              Search results
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
              {filtered.map(p => <ProductCard key={p.sku} p={p} />)}
            </div>
          </>
        ) : (
          categories.map(cat => (
            <div key={cat.title} style={{ marginBottom: "56px" }}>
              <div style={{ marginBottom: "24px" }}>
                <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "22px", fontWeight: 700, color: "var(--fl-neutral-90)", marginBottom: "4px" }}>{cat.title}</h2>
                <p style={{ fontSize: "14px", color: MUTED }}>{cat.desc}</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
                {cat.products.map(p => <ProductCard key={p.sku} p={p} />)}
              </div>
            </div>
          ))
        )}

        {/* VOLUME / INSTITUTIONAL BANNER */}
        <div style={{ marginTop: "16px", background: "var(--fl-neutral-90)", borderRadius: "8px", padding: "32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <div style={{ maxWidth: "640px" }}>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>Volume & Institutional Orders</h3>
            <p style={{ fontSize: "13px", color: "#999", lineHeight: 1.6, margin: 0 }}>
              Schools, government, NGOs and enterprise: custom desktop fleets built to spec with tiered volume discounts up to 12%, QA stress testing and deployment-ready Windows 11 Pro.
            </p>
          </div>
          <Link href="/computer-assembly" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "var(--fl-blue)", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
            View Volume Pricing
          </Link>
        </div>
      </div>

    </div>
  );
}

function ProductCard({ p }: { p: { sku: string; title: string; specs: string; mwk: string; usd: string; img: string } }) {
  const waText = encodeURIComponent("Hi TechNexus, I would like a quote for:\n" + p.title + "\nSKU: " + p.sku + "\nPrice: " + p.usd);
  const waHref = "https://wa.me/265889941700?text=" + waText;
  return (
    <div style={{ background: "#fff", borderRadius: "8px", border: "1px solid var(--fl-neutral-8)", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "var(--shadow-2)" }}>
      <div style={{ height: "160px", overflow: "hidden", background: "var(--fl-neutral-4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={p.img} alt={p.title} width={200} height={200} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "12px" }} loading="lazy" />
      </div>
      <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", color: "#999", textTransform: "uppercase", marginBottom: "4px" }}>{p.sku}</div>
        <div style={{ fontFamily: "var(--font-syne)", fontSize: "14px", fontWeight: 700, color: "var(--fl-neutral-90)", marginBottom: "6px", lineHeight: 1.3 }}>{p.title}</div>
        <div style={{ fontSize: "12px", color: "#595959", lineHeight: 1.5, flex: 1, marginBottom: "12px" }}>{p.specs}</div>
        <div style={{ marginBottom: "4px" }}>
          <span style={{ fontFamily: "var(--font-syne)", fontSize: "15px", fontWeight: 700, color: "var(--fl-blue)" }}>{p.mwk}</span>
        </div>
        <div style={{ fontSize: "12px", color: "#999", marginBottom: "12px" }}>{p.usd}</div>
        <a href={waHref} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "9px 14px", background: "#25D366", color: "#fff", borderRadius: "6px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
          Get Quote
        </a>
      </div>
    </div>
  );
}




