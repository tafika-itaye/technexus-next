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
    title: "Business Laptops",
    desc: "Lenovo ThinkPad and HP ProBook — warranty-backed business-class notebooks.",
    products: [
      { sku: "LEN-TP-E14-C5", title: "Lenovo ThinkPad E14", specs: "Core 5 210H 16GB/512GB · 14\" · DOS", mwk: "MK 1,629,960", usd: "$940", img: "/images/laptops/lenovo_thinkpad_e14_gen6_core5.jpg" },
      { sku: "LEN-TP-E14-U7", title: "Lenovo ThinkPad E14", specs: "Ultra 7-155H 16GB/512GB · 14\" · WUXGA · DOS", mwk: "MK 1,924,740", usd: "$1,110", img: "/images/laptops/lenovo_thinkpad_e14_ultra7.jpg" },
      { sku: "LEN-TP-E16-R7", title: "Lenovo ThinkPad E16", specs: "AMD R7-7735HS 16GB/512GB · 16\" · WUXGA IPS · FPR · BL · DOS", mwk: "MK 1,647,300", usd: "$950", img: "/images/laptops/lenovo_thinkpad_e16_ryzen7.jpg" },
      { sku: "HP-PB440-G11", title: "HP ProBook 440 G11", specs: "Ultra 5 125U 16GB/512GB · 14\" · FHD · FPR · BL · DOS", mwk: "MK 1,803,360", usd: "$1,040", img: "/images/laptops/hp_probook_440_g11.jpg" },
    ],
  },
  {
    title: "Business Desktops — Tower",
    desc: "Full-size towers for offices, labs and control rooms.",
    products: [
      { sku: "LEN-TC-NEO50T-I3", title: "Lenovo ThinkCentre neo 50t Gen5", specs: "i3-14100 8GB/512GB · DOS +KB/Mouse", mwk: "MK 1,196,460", usd: "$690", img: "/images/desktops/tower/lenovo_neo_50t.jpg" },
      { sku: "LEN-TC-NEO50T-I5", title: "Lenovo ThinkCentre neo 50t Gen5", specs: "i5-13400 8GB/512GB · DOS", mwk: "MK 1,387,200", usd: "$800", img: "/images/desktops/tower/lenovo_neo_50t.jpg" },
      { sku: "LEN-TC-M70T-I7", title: "Lenovo ThinkCentre M70t TWR", specs: "i7-14700 8GB/512GB · DOS", mwk: "MK 1,768,680", usd: "$1,020", img: "/images/desktops/tower/lenovo_m70t.jpg" },
      { sku: "HP-290-G9-I5", title: "HP 290 G9 Tower", specs: "Core i5-14400 8GB/512GB No-DVD · DOS", mwk: "MK 1,439,220", usd: "$830", img: "/images/desktops/tower/hp_290_g9.jpg" },
      { sku: "HP-290-G9-I7", title: "HP 290 G9 Tower", specs: "Core i7-14700 8GB/512GB · DOS", mwk: "MK 1,803,360", usd: "$1,040", img: "/images/desktops/tower/hp_290_g9.jpg" },
      { sku: "DEL-7020-I3", title: "Dell OptiPlex 7020", specs: "i3-14th Gen 8GB/512GB · DOS", mwk: "MK 1,352,520", usd: "$780", img: "/images/desktops/tower/dell_optiplex_7020.jpg" },
    ],
  },
  {
    title: "Business Desktops — Small Form Factor",
    desc: "Space-efficient SFF desktops for dense office deployments.",
    products: [
      { sku: "LEN-TC-NEO50S-I3", title: "Lenovo ThinkCentre neo 50s SFF Gen4", specs: "i3-13100 4GB/256GB · DOS", mwk: "MK 1,005,720", usd: "$580", img: "/images/desktops/sff/lenovo_neo_50s.jpg" },
      { sku: "LEN-TC-M70S-I5", title: "Lenovo ThinkCentre M70s SFF", specs: "i5-14400 8GB/512GB · DOS", mwk: "MK 1,473,900", usd: "$850", img: "/images/desktops/sff/lenovo_m70s.jpg" },
      { sku: "HP-400-SFF-I7", title: "HP Pro 400 G9 SFF", specs: "i7-14700 8GB/512GB · DOS 3yr", mwk: "MK 2,080,800", usd: "$1,200", img: "/images/desktops/sff/hp_pro_400_g9_sff.jpg" },
      { sku: "HP-800-G9-SFF-I7", title: "HP EliteDesk 800 G9 SFF i7 14th-gen", specs: "16GB/512GB · Win 11 Home", mwk: "MK 2,358,240", usd: "$1,360", img: "/images/desktops/sff/hp_elitedesk_800_g9_sff.jpg" },
      { sku: "DEL-QCT1250-I5", title: "Dell OptiPlex QCT1250", specs: "i5-14th Gen 8GB/512GB · DOS", mwk: "MK 1,491,240", usd: "$860", img: "/images/desktops/sff/dell_optiplex_7020_sff.jpg" },
    ],
  },
  {
    title: "Business Desktops — Mini PC",
    desc: "Compact Mini/Tiny PCs for signage, reception and hot-desk setups.",
    products: [
      { sku: "LEN-TC-NEO30S-I5", title: "Lenovo ThinkCentre neo 30s Gen5", specs: "i5-13420H 8GB/512GB · DOS", mwk: "MK 1,161,780", usd: "$670", img: "/images/desktops/mini/lenovo_neo_30s.jpg" },
      { sku: "DEL-MINI-U5", title: "Dell OptiPlex Mini Pro QCM1250", specs: "Ultra 5 235T 8GB/512GB BT/WiFi · DOS", mwk: "MK 1,525,920", usd: "$880", img: "/images/desktops/mini/dell_optiplex_mini.jpg" },
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
      <div style={{ background: "var(--fl-neutral-90)", padding: "64px 40px 48px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
          IT Catalogue
        </h1>
        <p style={{ color: "#999", fontSize: "15px", maxWidth: "640px", margin: "0 auto 24px", lineHeight: 1.7 }}>
          Enterprise networking from Mikrotik and business-class laptops and desktops from HP, Lenovo and Dell.
          All pricing includes Dubai to Malawi air freight.
        </p>
        <div style={{ display: "inline-block", background: "rgba(0,120,212,0.15)", border: "1px solid var(--fl-blue)", borderRadius: "999px", padding: "6px 20px", color: "var(--fl-blue)", fontSize: "13px", marginBottom: "28px" }}>
          Rate: 1 USD = MK 1,734 · March 2026 · Contact for formal quotations
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
        <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "12px" }} loading="lazy" />
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



