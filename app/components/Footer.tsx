"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const COPY = {
  en: { rights: "All rights reserved.", privacy: "Privacy", terms: "Terms", credentials: "Credentials", cert: "MRA Certificate" },
  pt: { rights: "Todos os direitos reservados.", privacy: "Privacidade", terms: "Termos", credentials: "Credenciais", cert: "Certificado MRA" },
  ny: { rights: "Ufulu wonse ndi wosungidwa.", privacy: "Chinsinsi", terms: "Malamulo", credentials: "Umboni", cert: "Satifiketi ya MRA" },
};

export default function Footer() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/pt") ? "pt" : pathname.startsWith("/ny") ? "ny" : "en";
  const t = COPY[lang];
  const prefix = lang === "en" ? "" : `/${lang}`;

  return (
    <footer style={{ background: "var(--fl-neutral-90)", borderTop: "1px solid #2a2a2a", padding: "32px 40px", marginTop: "auto" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
        <div style={{ fontSize: "13px", color: "var(--fl-neutral-40)" }}>
          &copy; 2026 TechNexus MW. {t.rights} Lilongwe and nationwide, Malawi.
        </div>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {[
            { href: `${prefix}/privacy`,     label: t.privacy },
            { href: `${prefix}/terms`,       label: t.terms },
            { href: `${prefix}/credentials`, label: t.credentials },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{ fontSize: "13px", color: "var(--fl-neutral-40)", textDecoration: "none" }}
            >
              {label}
            </Link>
          ))}
          <a
            href="/certificates/technexus-mra-eis-certificate.pdf"
            download
            style={{ fontSize: "13px", color: "var(--fl-neutral-40)", textDecoration: "none" }}
          >
            {t.cert}
          </a>
        </div>
        <div style={{ fontSize: "12px", color: "var(--fl-neutral-60)" }}>
          PPDA Registered &nbsp;|&nbsp; BRN.A6SNWQY &nbsp;|&nbsp; MRA Compliant
        </div>
      </div>
    </footer>
  );
}
