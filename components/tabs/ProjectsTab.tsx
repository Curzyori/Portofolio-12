// components/tabs/ProjectsTab.tsx: Projects 1 to 12, grid of numbered cards with filter

import { useState } from "react";
import { sections, type ProjectItem } from "@/data/links";

const projectsSection = sections.find((s) => s.id === "projects");

const GlobeIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="8 12 12 16 16 12" />
    <line x1="12" y1="8" x2="12" y2="16" />
  </svg>
);

// === Single Project Card ===
function ProjectCard({
  item,
  index,
}: {
  item: ProjectItem;
  index: number;
}) {
  return (
    <div
      id={`project-card-${index + 1}`}
      className="group relative flex flex-col justify-between rounded-xl p-4 transition-all duration-150 bg-[rgba(13,13,13,0.72)] border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(20,21,22,0.85)] hover:border-[rgba(255,255,255,0.12)]"
      style={{
        minHeight: "180px",
      }}
    >
      {/* Hover/active left accent line */}
      <div
        className="absolute left-0 top-3 bottom-3 w-[2px] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, #5e6ad2, #818cf8)" }}
      />

      {/* Top Section */}
      <div>
        {/* Project number & Favorite */}
        <div className="flex justify-between items-center mb-1.5">
          <div>
            {item.isFavorite && (
              <span
                className="text-[9px] font-semibold tracking-wider text-[#818cf8] uppercase flex items-center gap-0.5"
                aria-hidden="true"
              >
                ★ Featured
              </span>
            )}
          </div>
          <span
            className="text-[10px] font-semibold tabular-nums"
            style={{
              color: "rgba(94,106,210,0.8)",
              fontFeatureSettings: '"tnum"',
            }}
          >
            {item.projectNumber}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-xs font-semibold leading-snug pr-4"
          style={{ color: "#f4f4f6" }}
        >
          {item.label}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[8px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p
          className="text-[10px] mt-2 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.32)" }}
        >
          {item.description}
        </p>
      </div>

      {/* Dynamic Links bar */}
      <div className="flex flex-col gap-1.5 mt-4">
        {item.links.map((link, idx) => {
          const isWeb = link.type === "web";
          const isRepo = link.type === "repo";
          const isDownload = link.type === "download";

          return (
            <a
              key={idx}
              href={link.url}
              id={`project-${item.id}-link-${link.type}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-[9px] font-semibold py-1.5 px-3 rounded-lg transition-all duration-150 active:scale-[0.97]"
              style={{
                background: isWeb ? "rgba(94,106,210,0.12)" : "rgba(255,255,255,0.03)",
                border: isWeb ? "1px solid rgba(94,106,210,0.25)" : "1px solid rgba(255,255,255,0.06)",
                color: isWeb ? "#818cf8" : "rgba(255,255,255,0.56)",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {isWeb && <GlobeIcon />}
              {isRepo && <GithubIcon />}
              {isDownload && <DownloadIcon />}
              <span>
                {isWeb && "Kunjungi Situs"}
                {isRepo && "Buka Kode"}
                {isDownload && "Unduh APK"}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

// === ProjectsTab ===
export default function ProjectsTab() {
  const [filter, setFilter] = useState<"all" | "fav">("all");

  if (!projectsSection) return null;

  const projectItems = [...projectsSection.items].sort((a, b) => {
    const numA = parseInt((a as ProjectItem).projectNumber.replace('#', ''));
    const numB = parseInt((b as ProjectItem).projectNumber.replace('#', ''));
    return numB - numA;
  }) as ProjectItem[];

  const displayedItems = projectItems.filter((item) => {
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
            border: filter === "fav" ? "1px solid rgba(94,106,210,0.25)" : "1px solid rgba(255,255,255,0.06)",
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
              item={item}
              index={projectItems.indexOf(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
