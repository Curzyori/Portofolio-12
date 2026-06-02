// components/tabs/SertifikatTab.tsx — PDF certificate list with type filtering

import { useState } from "react";
import { sections } from "@/data/links";

const sertifikatSection = sections.find((s) => s.id === "certificates");

// ─── PDF Certificate Card ─────────────────────────────────────
function CertCard({
  label,
  description,
  url,
  type,
  workMode,
  index,
}: {
  label: string;
  description?: string;
  url: string;
  type?: "nasional" | "internasional";
  workMode?: "individu" | "team";
  index: number;
}) {
  return (
    <a
      href={url}
      id={`cert-card-${index + 1}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}, buka PDF di tab baru`}
      className="group flex items-center gap-3.5 w-full p-4 rounded-xl transition-all duration-150 active:scale-[0.97]"
      style={{
        background: "rgba(13,13,13,0.72)",
        border: "1px solid rgba(255,255,255,0.06)",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {/* PDF icon block */}
      <div
        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
        style={{
          background: "rgba(239,68,68,0.08)",
          border: "1px solid rgba(239,68,68,0.15)",
        }}
        aria-hidden="true"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(252,165,165,0.7)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="12" y2="17" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p
            className="text-sm font-medium truncate"
            style={{ color: "#f4f4f6" }}
          >
            {label}
          </p>
          {type && (
            <span
              className="text-[8px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full animate-fade-in"
              style={{
                background: type === "nasional" ? "rgba(255,255,255,0.04)" : "rgba(239,68,68,0.06)",
                border: type === "nasional" ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(239,68,68,0.12)",
                color: type === "nasional" ? "rgba(255,255,255,0.4)" : "#fca5a5",
              }}
            >
              {type}
            </span>
          )}
          {workMode && (
            <span
              className="text-[8px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full animate-fade-in"
              style={{
                background: workMode === "individu" ? "rgba(255,255,255,0.04)" : "rgba(94,106,210,0.08)",
                border: workMode === "individu" ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(94,106,210,0.15)",
                color: workMode === "individu" ? "rgba(255,255,255,0.4)" : "#818cf8",
              }}
            >
              {workMode}
            </span>
          )}
        </div>
        <p
          className="text-[11px] mt-0.5"
          style={{ color: "rgba(255,255,255,0.28)" }}
        >
          {description ?? "Buka PDF · Tab Baru"}
        </p>
      </div>

      {/* External arrow */}
      <svg
        width="13"
        height="13"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="flex-shrink-0 opacity-25 group-hover:opacity-50 transition-opacity duration-150"
      >
        <path d="M5.5 2.5H2.5C1.948 2.5 1.5 2.948 1.5 3.5V11.5C1.5 12.052 1.948 12.5 2.5 12.5H10.5C11.052 12.5 11.5 12.052 11.5 11.5V8.5M8.5 1.5H12.5M12.5 1.5V5.5M12.5 1.5L6 8" />
      </svg>
    </a>
  );
}

// ─── SertifikatTab ────────────────────────────────────────────
export default function SertifikatTab() {
  const [filter, setFilter] = useState<"all" | "nasional" | "internasional" | "individu" | "team">("all");

  if (!sertifikatSection || sertifikatSection.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>
          Belum ada sertifikat.
        </p>
        <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.15)" }}>
          Tambahkan PDF di <code style={{ fontFamily: "monospace" }}>public/certificates/</code>
        </p>
      </div>
    );
  }

  const displayedItems = sertifikatSection.items.filter((item) => {
    if (filter === "nasional") return item.type === "nasional";
    if (filter === "internasional") return item.type === "internasional";
    if (filter === "individu") return item.workMode === "individu";
    if (filter === "team") return item.workMode === "team";
    return true;
  });

  return (
    <div>
      <h2 className="sr-only">Sertifikat</h2>

      {/* UI Filter Bar */}
      <div
        className="flex overflow-x-auto whitespace-nowrap scrollbar-none gap-2 mb-5 pb-1"
        role="group"
        aria-label="Filter sertifikat"
      >
        <button
          onClick={() => setFilter("all")}
          className="flex-1 md:flex-none min-w-[70px] flex-shrink-0 flex items-center justify-center text-xs font-medium rounded-xl transition-all duration-150 active:scale-[0.97]"
          style={{
            height: "44px", // Safe touch target
            paddingLeft: "16px",
            paddingRight: "16px",
            background: filter === "all" ? "rgba(255,255,255,0.08)" : "rgba(13,13,13,0.72)",
            border: filter === "all" ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.06)",
            color: filter === "all" ? "#f4f4f6" : "rgba(255,255,255,0.56)",
            cursor: "pointer",
          }}
        >
          All
        </button>
        <button
          onClick={() => setFilter("nasional")}
          className="flex-1 md:flex-none min-w-[90px] flex-shrink-0 flex items-center justify-center text-xs font-medium rounded-xl transition-all duration-150 active:scale-[0.97]"
          style={{
            height: "44px", // Safe touch target
            paddingLeft: "16px",
            paddingRight: "16px",
            background: filter === "nasional" ? "rgba(239,68,68,0.06)" : "rgba(13,13,13,0.72)",
            border: filter === "nasional" ? "1px solid rgba(239,68,68,0.25)" : "1px solid rgba(255,255,255,0.06)",
            color: filter === "nasional" ? "#fca5a5" : "rgba(255,255,255,0.56)",
            cursor: "pointer",
          }}
        >
          Nasional
        </button>
        <button
          onClick={() => setFilter("internasional")}
          className="flex-1 md:flex-none min-w-[110px] flex-shrink-0 flex items-center justify-center text-xs font-medium rounded-xl transition-all duration-150 active:scale-[0.97]"
          style={{
            height: "44px", // Safe touch target
            paddingLeft: "16px",
            paddingRight: "16px",
            background: filter === "internasional" ? "rgba(239,68,68,0.06)" : "rgba(13,13,13,0.72)",
            border: filter === "internasional" ? "1px solid rgba(239,68,68,0.25)" : "1px solid rgba(255,255,255,0.06)",
            color: filter === "internasional" ? "#fca5a5" : "rgba(255,255,255,0.56)",
            cursor: "pointer",
          }}
        >
          Internasional
        </button>
        <button
          onClick={() => setFilter("individu")}
          className="flex-1 md:flex-none min-w-[90px] flex-shrink-0 flex items-center justify-center text-xs font-medium rounded-xl transition-all duration-150 active:scale-[0.97]"
          style={{
            height: "44px", // Safe touch target
            paddingLeft: "16px",
            paddingRight: "16px",
            background: filter === "individu" ? "rgba(255,255,255,0.08)" : "rgba(13,13,13,0.72)",
            border: filter === "individu" ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.06)",
            color: filter === "individu" ? "#f4f4f6" : "rgba(255,255,255,0.56)",
            cursor: "pointer",
          }}
        >
          Individu
        </button>
        <button
          onClick={() => setFilter("team")}
          className="flex-1 md:flex-none min-w-[80px] flex-shrink-0 flex items-center justify-center text-xs font-medium rounded-xl transition-all duration-150 active:scale-[0.97]"
          style={{
            height: "44px", // Safe touch target
            paddingLeft: "16px",
            paddingRight: "16px",
            background: filter === "team" ? "rgba(94,106,210,0.08)" : "rgba(13,13,13,0.72)",
            border: filter === "team" ? "1px solid rgba(94,106,210,0.25)" : "1px solid rgba(255,255,255,0.06)",
            color: filter === "team" ? "#818cf8" : "rgba(255,255,255,0.56)",
            cursor: "pointer",
          }}
        >
          Team
        </button>
      </div>

      {/* Count info */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          {filter === "all" ? "File PDF" : `Sertifikat ${filter}`}
        </p>
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.15)",
            color: "rgba(252,165,165,0.7)",
          }}
        >
          {displayedItems.length} {displayedItems.length === 1 ? "file" : "files"}
        </span>
      </div>

      {displayedItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}
            aria-hidden="true"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>
            Tidak ada sertifikat {filter}.
          </p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.15)" }}>
            Kategori ini belum terisi.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5" role="list" aria-label="Daftar sertifikat">
          {displayedItems.map((item) => (
            <div key={item.id} role="listitem">
              <CertCard
                label={item.label}
                description={item.description}
                url={item.url}
                type={item.type}
                workMode={item.workMode}
                index={sertifikatSection.items.indexOf(item)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Footer note */}
      <p
        className="text-center text-[10px] mt-6"
        style={{ color: "rgba(255,255,255,0.15)" }}
      >
        PDF terbuka di tab baru perangkat kamu.
      </p>
    </div>
  );
}
