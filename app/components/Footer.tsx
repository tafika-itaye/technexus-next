import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--fl-neutral-90)", borderTop: "1px solid #2a2a2a", padding: "32px 40px", marginTop: "auto" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
        <div style={{ fontSize: "13px", color: "var(--fl-neutral-40)" }}>
          &copy; 2026 TechNexus MW. All rights reserved. Blantyre, Malawi.
        </div>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {[
            { href: "/privacy",     label: "Privacy" },
            { href: "/terms",       label: "Terms" },
            { href: "/credentials", label: "Credentials" },
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
            MRA Certificate
          </a>
        </div>
        <div style={{ fontSize: "12px", color: "var(--fl-neutral-60)" }}>
          PPDA Registered &nbsp;|&nbsp; BRN.A6SNWQY &nbsp;|&nbsp; MRA Compliant
        </div>
      </div>
    </footer>
  );
}
