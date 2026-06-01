// components/tabs/ProjectsTab.tsx — Projects 1–12, grid of numbered cards with filter

import { useState } from "react";
import { sections } from "@/data/links";

const projectsSection = sections.find((s) => s.id === "projects");

// ─── Single Project Card ──────────────────────────────────────
function ProjectCard({
  label,
  description,
  url,
  index,
}: {
  label: string;
  description?: string;
  url: string;
  index: number;
}) {
  return (
    <a
      href={url}
      id={`project-card-${index + 1}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — ${description ?? "GitHub Repository"}`}
      className="group relative flex flex-col justify-between rounded-xl p-4 transition-all duration-150 active:scale-[0.96]"
      style={{
        background: "rgba(13,13,13,0.72)",
        border: "1px solid rgba(255,255,255,0.06)",
        minHeight: "84px",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      {/* Number badge */}
      <span
        className="absolute top-3 right-3 text-[10px] font-semibold tabular-nums"
        style={{
          color: "rgba(94,106,210,0.6)",
          fontFeatureSettings: '"tnum"',
        }}
        aria-hidden="true"
      >
        #{String(index + 1).padStart(2, "0")}
      </span>

      {/* Label */}
      <p
        className="text-sm font-medium leading-snug pr-8"
        style={{ color: "#f4f4f6" }}
      >
        {label}
      </p>

      {/* Footer row */}
      <div className="flex items-center justify-between mt-2.5">
        <span
          className="text-[10px] font-medium tracking-wide"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          {description}
        </span>
        {/* GitHub icon */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
          className="opacity-25 group-hover:opacity-50 transition-opacity duration-150 flex-shrink-0"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </div>

      {/* Hover/active left accent line */}
      <div
        className="absolute left-0 top-3 bottom-3 w-[2px] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, #5e6ad2, #818cf8)" }}
      />
    </a>
  );
}

// ─── ProjectsTab ──────────────────────────────────────────────
export default function ProjectsTab() {
  const [filter, setFilter] = useState<"all" | "fav">("all");

  if (!projectsSection) return null;

  const displayedItems = projectsSection.items.filter((item) => {
    if (filter === "fav") return item.isFavorite;
    return true;
  });

  return (
    <div>
      <h2 className="sr-only">Projects</h2>

      {/* UI Filter Bar */}
      <div className="flex gap-2.5 mb-5" role="group" aria-label="Filter project">
        <button
          onClick={() => setFilter("all")}
          className="flex-1 flex items-center justify-center text-xs font-medium rounded-xl transition-all duration-150 active:scale-[0.97]"
          style={{
            height: "44px", // Safe touch target
            background: filter === "all" ? "rgba(255,255,255,0.08)" : "rgba(13,13,13,0.72)",
            border: filter === "all" ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.06)",
            color: filter === "all" ? "#f4f4f6" : "rgba(255,255,255,0.56)",
            cursor: "pointer",
          }}
        >
          All Projects
        </button>
        <button
          onClick={() => setFilter("fav")}
          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium rounded-xl transition-all duration-150 active:scale-[0.97]"
          style={{
            height: "44px", // Safe touch target
            background: filter === "fav" ? "rgba(94,106,210,0.12)" : "rgba(13,13,13,0.72)",
            border: filter === "fav" ? "1px solid rgba(94,106,210,0.3)" : "1px solid rgba(255,255,255,0.06)",
            color: filter === "fav" ? "#818cf8" : "rgba(255,255,255,0.56)",
            cursor: "pointer",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill={filter === "fav" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Fav Projects
        </button>
      </div>

      {/* Count badge */}
      <div className="flex items-center justify-between mb-4">
        <p
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          {filter === "all" ? "GitHub repositories" : "Featured repositories"}
        </p>
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: filter === "fav" ? "rgba(94,106,210,0.12)" : "rgba(255,255,255,0.04)",
            border: filter === "fav" ? "1px solid rgba(94,106,210,0.2)" : "1px solid rgba(255,255,255,0.06)",
            color: filter === "fav" ? "#818cf8" : "rgba(255,255,255,0.4)",
          }}
        >
          {displayedItems.length} repos
        </span>
      </div>

      {/* 2-column grid on mobile, single col preserved via responsive */}
      <div
        className="grid gap-2.5"
        style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
        role="list"
        aria-label="Daftar project"
      >
        {displayedItems.map((item) => (
          <div key={item.id} role="listitem">
            <ProjectCard
              label={item.label}
              description={item.description}
              url={item.url}
              index={projectsSection.items.indexOf(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
