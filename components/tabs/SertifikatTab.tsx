// components/tabs/SertifikatTab.tsx: PDF certificate list with type filtering

import { useState } from "react";
import { sections, type LinkItem } from "@/data/links";

const sertifikatSection = sections.find((s) => s.id === "certificates");

// ─── PDF Certificate Card ─────────────────────────────────────
function CertCard({
  label,
  description,
  url,
  type,
  workMode,
  issuer,
  category,
  index,
}: {
  label: string;
  description?: string;
  url: string;
  type?: "nasional" | "internasional";
  workMode?: "individu" | "team";
  issuer?: string;
  category?: 'seminar' | 'lomba' | 'course' | 'bootcamp';
  index: number;
}) {
  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case "lomba":
        return {
          bg: "rgba(234,179,8,0.06)",
          border: "1px solid rgba(234,179,8,0.15)",
          color: "#fde047",
        };
      case "course":
        return {
          bg: "rgba(16,185,129,0.06)",
          border: "1px solid rgba(16,185,129,0.15)",
          color: "#6ee7b7",
        };
      case "bootcamp":
        return {
          bg: "rgba(219,39,119,0.06)",
          border: "1px solid rgba(219,39,119,0.15)",
          color: "#fbcfe8",
        };
      case "seminar":
      default:
        return {
          bg: "rgba(14,165,233,0.06)",
          border: "1px solid rgba(14,165,233,0.15)",
          color: "#7dd3fc",
        };
    }
  };

  const catStyles = category ? getCategoryStyles(category) : null;
  const isGoogle = issuer?.toLowerCase().includes("google");

  return (
    <a
      href={url}
      id={`cert-card-${index + 1}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}, buka PDF di tab baru`}
      className="group flex items-start gap-4 w-full p-4 rounded-xl transition-all duration-150 active:scale-[0.97]"
      style={{
        background: "rgba(13,13,13,0.72)",
        border: "1px solid rgba(255,255,255,0.06)",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {/* Brand logo or PDF icon block */}
      <div
        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5 animate-fade-in"
        style={{
          background: isGoogle ? "rgba(255,255,255,0.04)" : "rgba(239,68,68,0.08)",
          border: isGoogle ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(239,68,68,0.15)",
        }}
        aria-hidden="true"
      >
        {isGoogle ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(252,165,165,0.7)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="12" y2="17" />
          </svg>
        )}
      </div>

      {/* Text container */}
      <div className="flex-1 min-w-0">
        {/* Baris 1: Issuer & Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-xs font-bold tracking-wide" style={{ color: "rgba(255,255,255,0.85)" }}>
            {issuer ?? "Sertifikat Resmi"}
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
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
            {category && catStyles && (
              <span
                className="text-[8px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full animate-fade-in"
                style={{
                  background: catStyles.bg,
                  border: catStyles.border,
                  color: catStyles.color,
                }}
              >
                {category}
              </span>
            )}
          </div>
        </div>

        {/* Baris 2: Judul Sertifikat (label) */}
        <h3 className="text-sm font-semibold mt-1.5" style={{ color: "#f4f4f6" }}>
          {label}
        </h3>

        {/* Baris 3: Deskripsi singkat */}
        {description && (
          <p
            className="text-[11px] mt-1 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {description}
          </p>
        )}

        {/* Baris 4: Action Link */}
        <div className="flex items-center gap-1 mt-2.5 text-[10px] font-medium transition-colors" style={{ color: "rgba(252,165,165,0.8)" }}>
          <span>Buka PDF · Tab Baru</span>
          <svg
            width="11"
            height="11"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="opacity-60 transition-transform group-hover:translate-x-0.5"
          >
            <path d="M5.5 2.5H2.5C1.948 2.5 1.5 2.948 1.5 3.5V11.5C1.5 12.052 1.948 12.5 2.5 12.5H10.5C11.052 12.5 11.5 12.052 11.5 11.5V8.5M8.5 1.5H12.5M12.5 1.5V5.5M12.5 1.5L6 8" />
          </svg>
        </div>
      </div>
    </a>
  );
}

// ─── SertifikatTab ────────────────────────────────────────────
export default function SertifikatTab() {
  const [filter, setFilter] = useState<"all" | "nasional" | "internasional">("all");
  const [subFilter, setSubFilter] = useState<"all" | "individu" | "team">("all");

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

  const handleMainFilterChange = (newFilter: "all" | "nasional" | "internasional") => {
    setFilter(newFilter);
    if (newFilter === "all") {
      setSubFilter("all");
    }
  };

  const displayedItems = (sertifikatSection.items as LinkItem[]).filter((item) => {
    // Level 1: Skala Wilayah
    if (filter === "nasional" && item.type !== "nasional") return false;
    if (filter === "internasional" && item.type !== "internasional") return false;

    // Level 2: Kategori Kerja (Hanya jika Level 1 aktif)
    if (filter !== "all") {
      if (subFilter === "individu" && item.workMode !== "individu") return false;
      if (subFilter === "team" && item.workMode !== "team") return false;
    }

    return true;
  });

  const sortedItems = [...displayedItems].sort((a, b) => {
    const dateA = a.date ?? "";
    const dateB = b.date ?? "";
    return dateB.localeCompare(dateA);
  });

  return (
    <div>
      <h2 className="sr-only">Sertifikat</h2>

      {/* UI Filter Bar Level 1 (Utama) */}
      <div className="flex gap-2 mb-4" role="group" aria-label="Filter skala sertifikat">
        <button
          onClick={() => handleMainFilterChange("all")}
          className="flex-1 flex items-center justify-center text-xs font-medium rounded-xl transition-all duration-150 active:scale-[0.97]"
          style={{
            height: "44px", // Safe touch target
            background: filter === "all" ? "rgba(255,255,255,0.08)" : "rgba(13,13,13,0.72)",
            border: filter === "all" ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.06)",
            color: filter === "all" ? "#f4f4f6" : "rgba(255,255,255,0.56)",
            cursor: "pointer",
          }}
        >
          All
        </button>
        <button
          onClick={() => handleMainFilterChange("nasional")}
          className="flex-1 flex items-center justify-center text-xs font-medium rounded-xl transition-all duration-150 active:scale-[0.97]"
          style={{
            height: "44px", // Safe touch target
            background: filter === "nasional" ? "rgba(239,68,68,0.06)" : "rgba(13,13,13,0.72)",
            border: filter === "nasional" ? "1px solid rgba(239,68,68,0.25)" : "1px solid rgba(255,255,255,0.06)",
            color: filter === "nasional" ? "#fca5a5" : "rgba(255,255,255,0.56)",
            cursor: "pointer",
          }}
        >
          Nasional
        </button>
        <button
          onClick={() => handleMainFilterChange("internasional")}
          className="flex-1 flex items-center justify-center text-xs font-medium rounded-xl transition-all duration-150 active:scale-[0.97]"
          style={{
            height: "44px", // Safe touch target
            background: filter === "internasional" ? "rgba(239,68,68,0.06)" : "rgba(13,13,13,0.72)",
            border: filter === "internasional" ? "1px solid rgba(239,68,68,0.25)" : "1px solid rgba(255,255,255,0.06)",
            color: filter === "internasional" ? "#fca5a5" : "rgba(255,255,255,0.56)",
            cursor: "pointer",
          }}
        >
          Internasional
        </button>
      </div>

      {/* UI Filter Bar Level 2 (Sub-Filter Dinamis) */}
      {(filter === "nasional" || filter === "internasional") && (
        <div
          className="flex gap-1.5 mb-5 animate-fade-in"
          role="group"
          aria-label="Filter kategori kerja"
        >
          <button
            onClick={() => setSubFilter("all")}
            className="flex-1 flex items-center justify-center text-[10px] font-medium rounded-lg transition-all duration-150 active:scale-[0.97]"
            style={{
              height: "32px",
              background: subFilter === "all" ? "rgba(255,255,255,0.06)" : "rgba(13,13,13,0.4)",
              border: subFilter === "all" ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(255,255,255,0.04)",
              color: subFilter === "all" ? "#f4f4f6" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
            }}
          >
            All Mode
          </button>
          <button
            onClick={() => setSubFilter("individu")}
            className="flex-1 flex items-center justify-center text-[10px] font-medium rounded-lg transition-all duration-150 active:scale-[0.97]"
            style={{
              height: "32px",
              background: subFilter === "individu" ? "rgba(255,255,255,0.06)" : "rgba(13,13,13,0.4)",
              border: subFilter === "individu" ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(255,255,255,0.04)",
              color: subFilter === "individu" ? "#f4f4f6" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
            }}
          >
            Individu
          </button>
          <button
            onClick={() => setSubFilter("team")}
            className="flex-1 flex items-center justify-center text-[10px] font-medium rounded-lg transition-all duration-150 active:scale-[0.97]"
            style={{
              height: "32px",
              background: subFilter === "team" ? "rgba(94,106,210,0.06)" : "rgba(13,13,13,0.4)",
              border: subFilter === "team" ? "1px solid rgba(94,106,210,0.2)" : "1px solid rgba(255,255,255,0.04)",
              color: subFilter === "team" ? "#818cf8" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
            }}
          >
            Team
          </button>
        </div>
      )}

      {/* Count info */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs capitalize" style={{ color: "rgba(255,255,255,0.3)" }}>
          {filter === "all"
            ? "Semua Sertifikat"
            : `Sertifikat ${filter}${subFilter !== "all" ? ` (${subFilter})` : ""}`}
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
          <p className="text-sm capitalize" style={{ color: "rgba(255,255,255,0.25)" }}>
            Tidak ada sertifikat {filter}
            {subFilter !== "all" ? ` dengan kategori ${subFilter}` : ""}.
          </p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.15)" }}>
            Kategori ini belum terisi.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5" role="list" aria-label="Daftar sertifikat">
          {sortedItems.map((item) => (
            <div key={item.id} role="listitem">
              <CertCard
                label={item.label}
                description={item.description}
                url={item.url}
                type={item.type}
                workMode={item.workMode}
                issuer={item.issuer}
                category={item.category}
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
