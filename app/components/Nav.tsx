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

function getLang(pathname: string): "en" | "pt" {
  return pathname.startsWith("/pt") ? "pt" : "en";
}

function getBasePath(pathname: string): string {
  if (pathname.startsWith("/pt")) return pathname.slice(3) || "/";
  return pathname;
}

function buildLink(base: string, lang: "en" | "pt"): string {
  const b = base === "/" ? "" : base;
  return lang === "pt" ? `/pt${b}` : base;
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const lang = getLang(pathname);
  const base = getBasePath(pathname);

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
        <Link href={lang === "pt" ? "/pt" : "/"} style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
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
          {/* Language selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "2px", border: "1px solid var(--fl-neutral-60)", borderRadius: "6px", overflow: "hidden", fontSize: "12px", fontWeight: 600 }}>
            <Link
              href={buildLink(base, "en")}
              style={{
                padding: "4px 9px",
                textDecoration: "none",
                background: lang === "en" ? "var(--accent)" : "transparent",
                color: lang === "en" ? "#fff" : "var(--fl-neutral-40)",
                borderRight: "1px solid var(--fl-neutral-60)",
              }}
            >
              EN
            </Link>
            <Link
              href={buildLink(base, "pt")}
              style={{
                padding: "4px 9px",
                textDecoration: "none",
                background: lang === "pt" ? "var(--accent)" : "transparent",
                color: lang === "pt" ? "#fff" : "var(--fl-neutral-40)",
                borderRight: "1px solid var(--fl-neutral-60)",
              }}
            >
              PT
            </Link>
            <span
              title="Chichewa — Coming Soon"
              style={{
                padding: "4px 9px",
                color: "var(--fl-neutral-60)",
                cursor: "not-allowed",
                userSelect: "none",
              }}
            >
              NY
            </span>
          </div>

          <a href="tel:+265889941700" className="nav-phone" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--fl-neutral-40)", fontSize: "13px", textDecoration: "none", border: "1px solid var(--fl-neutral-60)", borderRadius: "6px", padding: "4px 10px" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.58 4.5 2 2 0 0 1 3.55 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
            +265 889 941 700
          </a>
          <a href="https://wa.me/265889941700" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#25D366", fontSize: "13px", fontWeight: 600, textDecoration: "none", border: "1px solid #25D366", borderRadius: "6px", padding: "4px 10px" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.115 1.535 5.845L.057 23.704a.5.5 0 0 0 .614.666l6.062-1.594A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.518-5.166-1.42l-.37-.218-3.83 1.006 1.022-3.724-.24-.386A9.943 9.943 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            WhatsApp
          </a>
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
            const resolvedHref = lang === "pt" ? `/pt${href === "/" ? "" : href}` : href;
            const active = pathname === resolvedHref || (resolvedHref !== "/" && resolvedHref !== "/pt" && pathname.startsWith(resolvedHref));
            return (
              <Link
                key={href}
                href={resolvedHref}
                className={`nav-item${active ? " nav-item-active" : ""}`}
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
