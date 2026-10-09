import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#fff", color: "#1A1A1A", fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", minHeight: "100vh", textAlign: "center", padding: "40px" }}>
          <div style={{ fontSize: "clamp(4rem,12vw,8rem)", fontWeight: 800, lineHeight: 1 }}>404</div>
          <h1 style={{ fontSize: "clamp(1.2rem,3vw,1.8rem)", fontWeight: 700, margin: "16px 0 8px" }}>Page Not Found</h1>
          <p style={{ fontSize: "14px", color: "#595959", marginBottom: "32px" }}>The page you are looking for does not exist or has been moved.</p>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "#0084E0", color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
