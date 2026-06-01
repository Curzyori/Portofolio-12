// components/TabBar.tsx — Fixed bottom navigation, 5 tabs
// Mobile-first. Icon + label. Safe area aware. Touch target ≥ 44px.

"use client";

export type TabId = "home" | "bisnis" | "projects" | "sertifikat" | "contact";

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// ─── SVG Icons (inline, no dependency) ───────────────────────
const HomeIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={filled ? 0 : 1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {filled ? (
      <path fill="currentColor" d="M10.707 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 18 11h-1v9a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-9H6a1 1 0 0 1-.707-1.707l7-7z" />
    ) : (
      <>
        <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.552 5.448 21 6 21H9M19 10L21 12M19 10V20C19 20.552 18.552 21 18 21H15M9 21V15C9 14.448 9.448 14 10 14H14C14.552 14 15 14.448 15 15V21M9 21H15" />
      </>
    )}
  </svg>
);

const BriefcaseIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={filled ? 0 : 1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {filled ? (
      <path fill="currentColor" d="M6 5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h2a2 2 0 0 1 2 2v3.57A22.95 22.95 0 0 1 12 13a22.95 22.95 0 0 1-10-2.43V8a2 2 0 0 1 2-2h2V5zm8-1H10a1 1 0 0 0-1 1v1h6V5a1 1 0 0 0-1-1zM2 14.07V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.93A24.95 24.95 0 0 1 12 15c-3.515 0-6.847-.724-9.998-2z" />
    ) : (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    )}
  </svg>
);

const CodeIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={filled ? 0 : 1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {filled ? (
      <path fill="currentColor" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clipRule="evenodd" fillRule="evenodd" />
    ) : (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    )}
  </svg>
);

const DocumentIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={filled ? 0 : 1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {filled ? (
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4 4a2 2 0 0 1 2-2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm9 1.5V9h3.5L13 5.5zM8 13a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1zm0 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z" />
    ) : (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </>
    )}
  </svg>
);

const MessageIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={filled ? 0 : 1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {filled ? (
      <path fill="currentColor" d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7l-5 4V4z" />
    ) : (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </>
    )}
  </svg>
);

// ─── Tab config ───────────────────────────────────────────────
const TABS: Tab[] = [
  { id: "home",       label: "Home",       icon: null },
  { id: "bisnis",     label: "Bisnis",     icon: null },
  { id: "projects",   label: "Projects",   icon: null },
  { id: "sertifikat", label: "Sertifikat", icon: null },
  { id: "contact",    label: "Contact",    icon: null },
];

// ─── TabBar Component ─────────────────────────────────────────
interface TabBarProps {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
}

export default function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <nav
      aria-label="Navigasi utama"
      role="navigation"
      className="fixed bottom-0 inset-x-0 z-50"
      style={{
        background: "rgba(7, 8, 10, 0.88)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        /* Safe area for iPhone notch / gesture bar */
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="flex items-stretch">
        {TABS.map(({ id, label }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              id={`tab-btn-${id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${id}`}
              onClick={() => onTabChange(id)}
              /* Min touch target: full width / 5 × 56px height > 44px ✓ */
              className="flex-1 flex flex-col items-center justify-center gap-1 pt-2.5 pb-2.5 relative transition-all duration-150 active:scale-95"
              style={{
                minHeight: "56px",
                color: isActive ? "#818cf8" : "rgba(255,255,255,0.32)",
                WebkitTapHighlightColor: "transparent",
                cursor: "pointer",
                border: "none",
                background: "none",
                outline: "none",
              }}
            >
              {/* Active indicator pill at top */}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
                  style={{
                    width: "24px",
                    background: "linear-gradient(90deg, #5e6ad2, #818cf8)",
                    boxShadow: "0 0 8px rgba(94,106,210,0.6)",
                  }}
                />
              )}

              {/* Icon */}
              <span aria-hidden="true" className="transition-transform duration-150" style={{ transform: isActive ? "scale(1.1)" : "scale(1)" }}>
                {id === "home"       && <HomeIcon filled={isActive} />}
                {id === "bisnis"     && <BriefcaseIcon filled={isActive} />}
                {id === "projects"   && <CodeIcon filled={isActive} />}
                {id === "sertifikat" && <DocumentIcon filled={isActive} />}
                {id === "contact"    && <MessageIcon filled={isActive} />}
              </span>

              {/* Label */}
              <span
                className="transition-all duration-150 leading-none"
                style={{
                  fontSize: "9.5px",
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: "0.02em",
                  color: isActive ? "#818cf8" : "rgba(255,255,255,0.32)",
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
