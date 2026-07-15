/* Small inline SVG country flags for the cross-border registration tables. */

function ZambiaFlag() {
  return (
    <svg viewBox="0 0 60 40" width="21" height="14" aria-hidden="true" style={{ display: "inline-block", borderRadius: "2px", boxShadow: "0 0 0 1px rgba(0,0,0,0.15)" }}>
      <rect width="60" height="40" fill="#198A00" />
      <rect x="39" y="14" width="7" height="26" fill="#DE2010" />
      <rect x="46" y="14" width="7" height="26" fill="#000000" />
      <rect x="53" y="14" width="7" height="26" fill="#EF7D00" />
      <path d="M49.5 4 L53 9 L55 6 L54 11 L46 11 L45 6 L47 9 Z" fill="#EF7D00" />
    </svg>
  );
}

function MozambiqueFlag() {
  return (
    <svg viewBox="0 0 60 40" width="21" height="14" aria-hidden="true" style={{ display: "inline-block", borderRadius: "2px", boxShadow: "0 0 0 1px rgba(0,0,0,0.15)" }}>
      <rect width="60" height="13" fill="#007168" />
      <rect y="13" width="60" height="2" fill="#FFFFFF" />
      <rect y="15" width="60" height="10" fill="#000000" />
      <rect y="25" width="60" height="2" fill="#FFFFFF" />
      <rect y="27" width="60" height="13" fill="#FCE100" />
      <path d="M0 0 L26 20 L0 40 Z" fill="#D21034" />
      <path d="M9 13.5 L11 19 L17 19 L12.2 22.6 L14 28 L9 24.6 L4 28 L5.8 22.6 L1 19 L7 19 Z" fill="#FCE100" />
    </svg>
  );
}

function SouthAfricaFlag() {
  return (
    <svg viewBox="0 0 60 40" width="21" height="14" aria-hidden="true" style={{ display: "inline-block", borderRadius: "2px", boxShadow: "0 0 0 1px rgba(0,0,0,0.15)" }}>
      <rect width="60" height="20" fill="#E03C31" />
      <rect y="20" width="60" height="20" fill="#001489" />
      <path d="M0 0 L24 20 L60 20 M0 40 L24 20" stroke="#FFFFFF" strokeWidth="13" fill="none" />
      <path d="M0 0 L24 20 L60 20 M0 40 L24 20" stroke="#007749" strokeWidth="8" fill="none" />
      <path d="M0 6 L17 20 L0 34 Z" fill="#FFB81C" />
      <path d="M0 10 L12 20 L0 30 Z" fill="#000000" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 40 40" width="14" height="14" aria-hidden="true" style={{ display: "inline-block" }}>
      <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="3" />
      <ellipse cx="20" cy="20" rx="8" ry="17" fill="none" stroke="currentColor" strokeWidth="3" />
      <line x1="3" y1="20" x2="37" y2="20" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export default function CountryFlag({ country }: { country: string }) {
  const c = country.toLowerCase();
  let flag: React.ReactNode;
  if (c.includes("zambia")) flag = <ZambiaFlag />;
  else if (c.includes("mozambique") || c.includes("mocambique") || c.includes("moçambique")) flag = <MozambiqueFlag />;
  else if (c.includes("south africa") || c.includes("africa do sul")) flag = <SouthAfricaFlag />;
  else flag = <GlobeIcon />;
  return <span style={{ display: "inline-flex", alignItems: "center", marginRight: "7px", verticalAlign: "-2px" }}>{flag}</span>;
}
