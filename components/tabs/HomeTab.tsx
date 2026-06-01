// components/tabs/HomeTab.tsx — Profile card premium + bio intro

import { profile } from "@/data/links";

// ─── Avatar Placeholder ────────────────────────────────────────
function AvatarPlaceholder() {
  return (
    <div
      className="relative flex-shrink-0"
      aria-hidden="true"
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
      {/* Avatar circle */}
      <div
        className="relative w-24 h-24 rounded-full flex items-center justify-center text-3xl font-semibold"
        style={{
          background: "linear-gradient(135deg, #1a1b2e 0%, #0f1011 100%)",
          border: "2.5px solid transparent",
          backgroundClip: "padding-box",
          zIndex: 1,
          color: "#818cf8",
          // Subtle inner glow
          boxShadow: "inset 0 0 20px rgba(94,106,210,0.15)",
        }}
      >
        Y
      </div>
    </div>
  );
}

// ─── Stat badge (for visual interest on home) ─────────────────
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

// ─── Social quick-links ────────────────────────────────────────
const quickLinks = [
  { label: "GitHub", url: "https://github.com/curzy", icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )},
  { label: "LinkedIn", url: "https://linkedin.com/in/yukenvelino", icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )},
];

// ─── HomeTab ──────────────────────────────────────────────────
export default function HomeTab() {
  return (
    <div className="space-y-4">

      {/* ── Profile Card Premium ── */}
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

            {/* Bio */}
            <p
              className="text-sm leading-relaxed max-w-[280px]"
              style={{ color: "#9c9c9d" }}
            >
              {profile.bio}
            </p>

            {/* Quick social links */}
            <div className="flex items-center gap-2 pt-1">
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
            <StatBadge value="12" label="Projects" />
            <div style={{ width: "1px", height: "28px", background: "rgba(255,255,255,0.06)" }} />
            <StatBadge value="3+" label="Sertifikat" />
            <div style={{ width: "1px", height: "28px", background: "rgba(255,255,255,0.06)" }} />
            <StatBadge value="2026" label="Angkatan" />
          </div>
        </div>
      </div>

      {/* ── Domain badge ── */}
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

      {/* ── Stack info ── */}
      <div
        className="rounded-xl p-4"
        style={{
          background: "rgba(13,13,13,0.5)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <p
          className="text-[10px] font-medium tracking-[0.12em] uppercase mb-3"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
