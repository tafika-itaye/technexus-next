"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const WA_NUMBER = "265889941700";

const COPY = {
  en: {
    title: "TechNexus",
    subtitle: "Typically replies in minutes",
    greeting: "Hi! How can we help? Type your message below and we'll reply on WhatsApp.",
    placeholder: "Type a message…",
    send: "Send on WhatsApp",
    open: "Chat with us",
    note: "Opens WhatsApp in a new tab — this page stays open.",
  },
  pt: {
    title: "TechNexus",
    subtitle: "Normalmente responde em minutos",
    greeting: "Ola! Como podemos ajudar? Escreva a sua mensagem abaixo e responderemos no WhatsApp.",
    placeholder: "Escreva uma mensagem…",
    send: "Enviar no WhatsApp",
    open: "Fale connosco",
    note: "Abre o WhatsApp num novo separador — esta pagina permanece aberta.",
  },
  ny: {
    title: "TechNexus",
    subtitle: "Timayankha msanga",
    greeting: "Moni! Tingakuthandizeni bwanji? Lembani uthenga wanu pansipa, tikuyankhani pa WhatsApp.",
    placeholder: "Lembani uthenga…",
    send: "Tumizani pa WhatsApp",
    open: "Lankhulani nafe",
    note: "Imatsegula WhatsApp mu tabu yatsopano — tsamba lino limakhalabe lotseguka.",
  },
};

function getLang(pathname: string): "en" | "pt" | "ny" {
  if (pathname.startsWith("/pt")) return "pt";
  if (pathname.startsWith("/ny")) return "ny";
  return "en";
}

const WaGlyph = ({ size = 26, color = "#fff" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.115 1.535 5.845L.057 23.704a.5.5 0 0 0 .614.666l6.062-1.594A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.518-5.166-1.42l-.37-.218-3.83 1.006 1.022-3.724-.24-.386A9.943 9.943 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export default function WhatsAppChat() {
  const pathname = usePathname();
  const lang = getLang(pathname);
  const t = COPY[lang];

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Intercept every wa.me link on the site: open the on-site composer
  // (prefilled with the link's message) instead of leaving the page.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href*='wa.me']") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (panelRef.current?.contains(anchor)) return; // widget's own link
      e.preventDefault();
      try {
        const url = new URL(anchor.href);
        const text = url.searchParams.get("text") || "";
        setMsg(text);
      } catch {
        setMsg("");
      }
      setOpen(true);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function send() {
    const text = msg.trim();
    if (!text) return;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <>
      {/* PANEL */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label={t.open}
          className="wa-panel"
          style={{
            position: "fixed", bottom: "96px", right: "24px", zIndex: 10000,
            width: "min(360px, calc(100vw - 32px))",
            borderRadius: "16px", overflow: "hidden",
            boxShadow: "0 12px 48px rgba(0,0,0,0.35)",
            background: "#ECE5DD",
            display: "flex", flexDirection: "column",
            animation: "wa-pop .18s ease-out",
          }}
        >
          {/* Header */}
          <div style={{ background: "#075E54", padding: "14px 16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <WaGlyph size={22} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "15px", lineHeight: 1.2 }}>{t.title}</div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#25D366", display: "inline-block" }} />
                {t.subtitle}
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{ background: "none", border: "none", color: "#fff", fontSize: "22px", cursor: "pointer", padding: "4px 8px", lineHeight: 1 }}
            >
              ×
            </button>
          </div>

          {/* Conversation area */}
          <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "10px", maxHeight: "300px", overflowY: "auto" }}>
            <div style={{ alignSelf: "flex-start", maxWidth: "85%", background: "#fff", borderRadius: "0 10px 10px 10px", padding: "10px 14px", fontSize: "13.5px", color: "#111", lineHeight: 1.55, boxShadow: "0 1px 1px rgba(0,0,0,0.08)" }}>
              {t.greeting}
            </div>
          </div>

          {/* Composer */}
          <div style={{ padding: "12px", background: "#F0F0F0", borderTop: "1px solid #ddd" }}>
            <textarea
              ref={inputRef}
              value={msg}
              onChange={e => setMsg(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder={t.placeholder}
              rows={2}
              style={{ width: "100%", border: "1px solid #ccc", borderRadius: "10px", padding: "10px 12px", fontSize: "14px", fontFamily: "inherit", resize: "none", outline: "none", background: "#fff", color: "#111", boxSizing: "border-box" }}
            />
            <button
              onClick={send}
              disabled={!msg.trim()}
              style={{
                marginTop: "8px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                background: msg.trim() ? "#25D366" : "#a8d9bc", color: "#fff", border: "none", borderRadius: "10px",
                padding: "11px 16px", fontSize: "14px", fontWeight: 700, cursor: msg.trim() ? "pointer" : "default",
                transition: "background .15s",
              }}
            >
              <WaGlyph size={16} />
              {t.send}
            </button>
            <p style={{ margin: "8px 0 0", fontSize: "10.5px", color: "#666", textAlign: "center" }}>{t.note}</p>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={t.open}
        aria-expanded={open}
        className="wa-fab"
        style={{
          position: "fixed", bottom: "28px", right: "28px", zIndex: 9999,
          background: "#25D366", borderRadius: "50%", width: "56px", height: "56px",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.28)", border: "none", cursor: "pointer",
          transition: "transform .15s ease",
        }}
      >
        {open ? (
          <span style={{ color: "#fff", fontSize: "26px", lineHeight: 1 }} aria-hidden="true">×</span>
        ) : (
          <WaGlyph size={30} />
        )}
      </button>

      <style>{`
        @keyframes wa-pop { from { opacity: 0; transform: translateY(12px) scale(.97); } to { opacity: 1; transform: none; } }
        .wa-fab:hover { transform: scale(1.06); }
        @media (max-width: 768px) { .wa-panel { bottom: 84px !important; right: 16px !important; } }
        @media (prefers-reduced-motion: reduce) { .wa-panel { animation: none !important; } .wa-fab { transition: none !important; } }
      `}</style>
    </>
  );
}
