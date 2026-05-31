"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/",                     label: "Home" },
  { href: "/catalogue",            label: "IT Catalogue" },
  { href: "/computer-assembly",    label: "PC Assembly" },
  { href: "/language-services",    label: "Language Services" },
  { href: "/medical-supplies",     label: "Medical Supplies" },
  { href: "/software-development", label: "Software Dev" },
  { href: "/eis",                  label: "EIS Compliance" },
  { href: "/credentials",          label: "Credentials" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: "var(--fl-neutral-90)", borderBottom: "3px solid var(--accent)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: "56px", gap: "24px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <Image
            src="/Products_logos/technexuslogo1.webp"
            alt="TechNexus logo"
            width={52}
            height={52}
            priority
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>TechNexus</div>
            <div style={{ fontSize: "11px", color: "var(--fl-neutral-40)", textTransform: "uppercase", letterSpacing: "0.06em" }}>IT Solutions &amp; Equipment Supply</div>
          </div>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="tel:+265889941700" style={{ color: "var(--fl-neutral-40)", fontSize: "13px", textDecoration: "none" }}>+265 889 941 700</a>
          <a href="https://wa.me/265889941700" target="_blank" rel="noopener" style={{ color: "#25D366", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>WhatsApp</a>
        </div>
      </div>

      <nav aria-label="Main navigation">
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          style={{ display: "none" }}
          className="ham-btn"
        >
          <span />
        </button>
        <div style={{ display: "flex", flexWrap: "wrap", padding: "0 32px", gap: "2px" }}>
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                style={{
                  color: active ? "var(--accent)" : "var(--fl-neutral-30)",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.03em",
                  padding: "9px 14px",
                  textDecoration: "none",
                  borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
                  transition: "color 0.15s",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
