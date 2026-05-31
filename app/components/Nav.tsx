"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tn-theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-color-scheme", "dark");
    }
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-color-scheme", next ? "dark" : "light");
    localStorage.setItem("tn-theme", next ? "dark" : "light");
  }

  return (
    <header style={{ background: "var(--fl-neutral-90)", borderBottom: "3px solid var(--accent)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: "56px", gap: "16px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <Image
            src="/Products_logos/technexuslogo1.webp"
            alt="TechNexus logo"
            width={44}
            height={44}
            priority
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>TechNexus</div>
            <div style={{ fontSize: "10px", color: "var(--fl-neutral-40)", textTransform: "uppercase", letterSpacing: "0.06em" }}>IT Solutions &amp; Equipment Supply</div>
          </div>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="tel:+265889941700" className="nav-phone" style={{ color: "var(--fl-neutral-40)", fontSize: "13px", textDecoration: "none" }}>+265 889 941 700</a>
          <a href="https://wa.me/265889941700" target="_blank" rel="noopener" style={{ color: "#25D366", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>WhatsApp</a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{ background: "none", border: "1px solid var(--fl-neutral-60)", borderRadius: "6px", color: "var(--fl-neutral-40)", fontSize: "13px", padding: "4px 10px", cursor: "pointer", lineHeight: 1 }}
          >
            {dark ? "Light" : "Dark"}
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="ham-btn"
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px", padding: "6px" }}
          >
            <span style={{ display: "block", width: "22px", height: "2px", background: open ? "transparent" : "#fff", transition: "all 0.2s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "2px", background: "#fff", transition: "all 0.2s", transform: open ? "rotate(45deg)" : "none", marginTop: open ? "-7px" : "0" }} />
            <span style={{ display: "block", width: "22px", height: "2px", background: open ? "transparent" : "#fff", transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </div>

      <nav aria-label="Main navigation">
        <div className={`nav-links${open ? " nav-open" : ""}`}>
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                style={{
                  color: active ? "var(--accent)" : "var(--fl-neutral-30, #ccc)",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.03em",
                  padding: "9px 14px",
                  textDecoration: "none",
                  borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
                  transition: "color 0.15s",
                  display: "block",
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
