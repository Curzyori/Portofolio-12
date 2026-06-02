// components/tabs/HomeTab.tsx: Profile card premium + bio intro

import { profile, sections } from "@/data/links";

// Avatar Placeholder
function AvatarPlaceholder() {
  return (
    <div
      className="relative flex-shrink-0 w-24 h-24"
    >
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(135deg, #5e6ad2, #818cf8)",
          padding: "2px",
          borderRadius: "9999px",
        }}
      />
      {/* Avatar Image container */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #1a1b2e 0%, #0f1011 100%)",
          border: "2.5px solid transparent",
          backgroundClip: "padding-box",
          zIndex: 1,
          boxShadow: "inset 0 0 20px rgba(94,106,210,0.15)",
        }}
      >
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
}

// Stat badge (for visual interest on home)
function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex flex-col items-center gap-0.5 px-4"
    >
      <span
        className="text-lg font-semibold"
        style={{ color: "#f4f4f6", fontFeatureSettings: '"tnum"' }}
      >
        {value}
      </span>
      <span
        className="text-[10px] tracking-wide uppercase"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        {label}
      </span>
    </div>
  );
}

// Social quick-links
const quickLinks = [
  { label: "GitHub", url: "https://github.com/Curzyori", icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )},
  { label: "LinkedIn", url: "https://www.linkedin.com/in/curzy/", icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )},
];

// HomeTab
export default function HomeTab() {
  const projectCount = sections.find((s) => s.id === "projects")?.items.length || 0;
  const certCount = sections.find((s) => s.id === "certificates")?.items.length || 0;

  return (
    <div className="space-y-4">

      {/* Profile Card Premium */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "rgba(13,13,13,0.72)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
        }}
      >
        {/* Subtle inner gradient for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(94,106,210,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative p-6">
          {/* Avatar + name row */}
          <div className="flex flex-col items-center text-center space-y-3">
            <AvatarPlaceholder />

            <div>
              <h1
                className="text-xl font-semibold tracking-tight"
                style={{ color: "#f4f4f6" }}
              >
                {profile.name}
              </h1>
              <p
                className="text-xs mt-0.5 font-medium tracking-wide"
                style={{ color: "rgba(129,140,248,0.8)" }}
              >
                {profile.username}
              </p>
            </div>

            {/* Role & Bio Tagline */}
            <div className="flex flex-col items-center justify-center space-y-2 w-full text-center">
              <p
                className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase"
              >
                {profile.role}
              </p>
              <p
                className="text-xs leading-relaxed text-neutral-400 text-center max-w-xl mx-auto whitespace-normal break-words"
              >
                {profile.tagline}
              </p>
            </div>

            {/* Philosophy Terminal Output */}
            <div className="w-full flex items-center justify-center gap-1.5 mt-2 py-2 px-3 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] font-mono text-[10px] text-left">
              <span className="text-[#818cf8]">$</span>
              <span className="text-neutral-500">cat philosophy.txt</span>
              <span className="text-neutral-500">→</span>
              <span className="text-[#f4f4f6] font-semibold">"{profile.philosophy}"</span>
            </div>

            {/* Quick social links */}
            <div className="flex items-center gap-2 pt-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-150 active:scale-95"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div
            className="my-5"
            style={{ height: "1px", background: "rgba(255,255,255,0.05)" }}
          />

          {/* Stats row */}
          <div className="flex items-center justify-center">
            <StatBadge value={projectCount.toString()} label="Projects" />
            <div style={{ width: "1px", height: "28px", background: "rgba(255,255,255,0.06)" }} />
            <StatBadge value={`${certCount}+`} label="Sertifikat" />
            <div style={{ width: "1px", height: "28px", background: "rgba(255,255,255,0.06)" }} />
            <StatBadge value="2026" label="Angkatan" />
          </div>
        </div>
      </div>

      {/* Domain badge */}
      <div className="flex justify-center">
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(94,106,210,0.08)",
            border: "1px solid rgba(94,106,210,0.2)",
            color: "rgba(129,140,248,0.6)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.03em",
          }}
        >
          {/* Globe icon */}
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          {profile.domain}
        </div>
      </div>

      {/* System Information Matrix (Yaml-Style Dashboard) */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "rgba(13,13,13,0.72)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Terminal window header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#fca5a5]/70" />
            <span className="w-2 h-2 rounded-full bg-[#fde047]/70" />
            <span className="w-2 h-2 rounded-full bg-[#86efac]/70" />
          </div>
          <span className="text-[10px] font-mono text-neutral-500 font-medium">system_metrics.yaml</span>
          <div className="w-8" />
        </div>

        <div className="p-4 font-mono text-xs text-left leading-relaxed space-y-1.5">
          <div>
            <span className="text-[#818cf8]">age</span>:{" "}
            <span className="text-neutral-300">"18 Years Old"</span>
          </div>
          <div>
            <span className="text-[#818cf8]">location</span>:{" "}
            <span className="text-neutral-300">"Pontianak, West Kalimantan, Indonesia"</span>
          </div>
          <div className="flex items-start">
            <span className="text-[#818cf8] flex-shrink-0">institution</span>:{" "}
            <span className="text-neutral-300 ml-1">"Universitas Bina Sarana Informatika (UBSI)"</span>
          </div>
          <div>
            <span className="text-[#818cf8]">major</span>:{" "}
            <span className="text-neutral-300">"Sistem Informasi (Information Systems)"</span>
          </div>
          <div className="flex items-start">
            <span className="text-[#818cf8] flex-shrink-0">focus</span>:{" "}
            <span className="text-neutral-300 ml-1">"Full-Stack Development, Automation & AI Integration"</span>
          </div>
        </div>
      </div>

      {/* 50 Projects Challenge Metrics */}
      <div
        className="rounded-xl p-4"
        style={{
          background: "rgba(13,13,13,0.72)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono font-medium text-neutral-500 uppercase tracking-wider">
            50 Projects Challenge
          </span>
          <span className="text-[11px] font-mono font-semibold text-[#818cf8]">
            24% Completed
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 w-full rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] overflow-hidden mb-3.5">
          <div
            className="h-full rounded-full"
            style={{
              width: "24%",
              background: "linear-gradient(to right, #5e6ad2, #818cf8)",
            }}
          />
        </div>

        {/* Metrics Detail Grid */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
          <div className="p-2 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]">
            <div className="text-neutral-500 mb-0.5">PROGRESS</div>
            <div className="text-[#f4f4f6] font-semibold">12 / 50</div>
          </div>
          <div className="p-2 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]">
            <div className="text-neutral-500 mb-0.5">DEADLINE</div>
            <div className="text-[#f4f4f6] font-semibold">Sep 2026</div>
          </div>
          <div className="p-2 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]">
            <div className="text-neutral-500 mb-0.5">UPDATED</div>
            <div className="text-[#f4f4f6] font-semibold">2 Jun 2026</div>
          </div>
        </div>
      </div>

      {/* Curated Tech Stack Grid Layout */}
      <div
        className="rounded-xl p-4"
        style={{
          background: "rgba(13,13,13,0.5)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <p className="text-[10px] font-medium tracking-[0.12em] uppercase mb-4 text-neutral-500">
          Curated Tech Stack
        </p>

        <div className="grid grid-cols-2 gap-4 text-left">
          {/* Languages */}
          <div>
            <h4 className="text-[10px] font-mono font-medium text-[#818cf8] mb-2 uppercase tracking-wide">
              // Languages
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {profile.techStack?.languages.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-[10px] text-neutral-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h4 className="text-[10px] font-mono font-medium text-[#818cf8] mb-2 uppercase tracking-wide">
              // Frontend
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {profile.techStack?.frontend.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-[10px] text-neutral-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & DB */}
          <div>
            <h4 className="text-[10px] font-mono font-medium text-[#818cf8] mb-2 uppercase tracking-wide">
              // Backend & DB
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {profile.techStack?.backend.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-[10px] text-neutral-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div>
            <h4 className="text-[10px] font-mono font-medium text-[#818cf8] mb-2 uppercase tracking-wide">
              // DevOps & Tools
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {profile.techStack?.devops.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-[10px] text-neutral-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
