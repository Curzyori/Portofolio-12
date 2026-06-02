// components/tabs/ContactTab.tsx: Direct action contact links
// No backend. Pure static: WhatsApp, Email, GitHub.

import { profile, sections, type LinkItem } from "@/data/links";

const contactSection = sections.find((s) => s.id === "contact");

// ─── Contact method cards ─────────────────────────────────────
type ContactVariant = "whatsapp" | "email" | "github" | "threads" | "instagram" | "linkedin" | "youtube" | "default";

function ContactCard({
  label,
  description,
  url,
  id,
  variant = "default",
}: {
  label: string;
  description?: string;
  url: string;
  id: string;
  variant?: ContactVariant;
}) {
  const variantStyles: Record<ContactVariant, { bg: string; border: string; iconBg: string; iconColor: string }> = {
    whatsapp: {
      bg:        "rgba(34,197,94,0.06)",
      border:    "rgba(34,197,94,0.18)",
      iconBg:    "rgba(34,197,94,0.1)",
      iconColor: "rgba(134,239,172,0.85)",
    },
    email: {
      bg:        "rgba(94,106,210,0.06)",
      border:    "rgba(94,106,210,0.18)",
      iconBg:    "rgba(94,106,210,0.1)",
      iconColor: "rgba(129,140,248,0.85)",
    },
    github: {
      bg:        "rgba(255,255,255,0.04)",
      border:    "rgba(255,255,255,0.08)",
      iconBg:    "rgba(255,255,255,0.06)",
      iconColor: "rgba(255,255,255,0.5)",
    },
    threads: {
      bg:        "rgba(255,255,255,0.03)",
      border:    "rgba(255,255,255,0.08)",
      iconBg:    "rgba(255,255,255,0.05)",
      iconColor: "rgba(255,255,255,0.9)",
    },
    instagram: {
      bg:        "rgba(225,48,108,0.06)",
      border:    "rgba(225,48,108,0.18)",
      iconBg:    "rgba(225,48,108,0.1)",
      iconColor: "rgba(253,104,223,0.85)",
    },
    linkedin: {
      bg:        "rgba(10,102,194,0.06)",
      border:    "rgba(10,102,194,0.18)",
      iconBg:    "rgba(10,102,194,0.1)",
      iconColor: "rgba(114,191,255,0.85)",
    },
    youtube: {
      bg:        "rgba(239,68,68,0.06)",
      border:    "rgba(239,68,68,0.18)",
      iconBg:    "rgba(239,68,68,0.1)",
      iconColor: "rgba(252,165,165,0.85)",
    },
    default: {
      bg:        "rgba(13,13,13,0.72)",
      border:    "rgba(255,255,255,0.06)",
      iconBg:    "rgba(255,255,255,0.05)",
      iconColor: "rgba(255,255,255,0.4)",
    },
  };

  const styles = variantStyles[variant];

  const isWhatsApp  = id.includes("whatsapp");
  const isEmail     = id.includes("email");
  const isGithub    = id.includes("github");
  const isThreads   = id.includes("threads");
  const isInstagram = id.includes("instagram");
  const isLinkedIn  = id.includes("linkedin");
  const isYouTube   = id.includes("youtube");

  return (
    <a
      href={url}
      id={`contact-link-${id}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — ${description}`}
      className="group flex items-center gap-4 w-full p-4 rounded-xl transition-all duration-150 active:scale-[0.97]"
      style={{
        background: styles.bg,
        border: `1px solid ${styles.border}`,
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {/* Icon block */}
      <div
        className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ background: styles.iconBg }}
        aria-hidden="true"
      >
        {isWhatsApp && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill={styles.iconColor} aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
        {isEmail && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        )}
        {isGithub && (
          <svg width="20" height="20" viewBox="0 0 16 16" fill={styles.iconColor} aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        )}
        {isThreads && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill={styles.iconColor} aria-hidden="true">
            <path d="M14.28 10.36a3.29 3.29 0 0 0-.61-.91 3.51 3.51 0 0 0-1.32-.82 4.8 4.8 0 0 0-3.32.17 3.5 3.5 0 0 0-1.89 2.05 4.54 4.54 0 0 0-.25 1.5 4.6 4.6 0 0 0 1.25 3.19 4.31 4.31 0 0 0 3.25 1.26 4.9 4.9 0 0 0 3.32-.88c1-.8 1.46-1.92 1.46-3.36v-.5a5.57 5.57 0 0 0-5.56-5.56 5.51 5.51 0 0 0-5.5 5.56 5.61 5.61 0 0 0 1.66 4.09 5.89 5.89 0 0 0 4.19 1.66c1 0 1.95-.27 2.76-.79a.9.9 0 1 0-.96-1.52c-.54.34-1.17.51-1.8.51a4.11 4.11 0 0 1-2.92-1.16A3.94 3.94 0 0 1 8 13.66a3.78 3.78 0 0 1 3.8-3.76 3.77 3.77 0 0 1 3.76 3.76v.5c0 .76-.23 1.34-.69 1.73a2.31 2.31 0 0 1-1.56.55 2.11 2.11 0 0 1-1.63-.69 3.08 3.08 0 0 1-.58-2c0-.52.12-.97.35-1.35a1.86 1.86 0 0 1 1.05-.83.84.84 0 0 1 .49-.04 1 1 0 0 1 .63.48c.17.29.26.65.26 1.07V13a.9.9 0 0 0 1.8 0v-.69a2.82 2.82 0 0 0-.79-2.14 2.87 2.87 0 0 0-1.81-.8 2.66 2.66 0 0 0-1.74.52 3.65 3.65 0 0 0-1.07 1.67 4.7 4.7 0 0 0-.3 1.7c0 1 .28 1.8.84 2.4a2.76 2.76 0 0 0 2.06.89 4.1 4.1 0 0 0 2.77-1c.84-.71 1.25-1.72 1.25-3.01v-.5c0-4.17-3.39-7.56-7.56-7.56A7.51 7.51 0 0 0 4.22 13a7.61 7.61 0 0 0 2.27 5.56A7.89 7.89 0 0 0 12 20.82c1.37 0 2.67-.36 3.78-1.05a.9.9 0 1 0-.96-1.52A6.09 6.09 0 0 1 12 19a5.9 5.9 0 0 1-4.27-1.71A5.82 5.82 0 0 1 6 13a5.77 5.77 0 0 1 5.76-5.76c3.18 0 5.76 2.58 5.76 5.76v.5c0 1.95-.71 3.49-2.13 4.59a5.86 5.86 0 0 1-3.69 1.21c-2.31 0-4.22-.75-5.56-2.19A6.38 6.38 0 0 1 5 13c0-1 .18-1.95.54-2.82a5.32 5.32 0 0 1 1.56-2.22 5.16 5.16 0 0 1 2.37-1.25 5.5 5.5 0 0 1 3.01.1c.96.34 1.76.92 2.35 1.7a.9.9 0 0 0 1.45-1.15z" />
          </svg>
        )}
        {isInstagram && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        )}
        {isLinkedIn && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        )}
        {isYouTube && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill={styles.iconColor} aria-hidden="true">
            <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        )}
        {!isWhatsApp && !isEmail && !isGithub && !isThreads && !isInstagram && !isLinkedIn && !isYouTube && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </div>

      {/* Text content */}
      <div className="flex-1 min-w-0">
        <p
          className="text-sm font-medium"
          style={{ color: "#f4f4f6" }}
        >
          {label}
        </p>
        <p
          className="text-[11px] mt-0.5 truncate"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          {description}
        </p>
      </div>

      {/* Action indicator */}
      <div
        className="flex-shrink-0 opacity-30 group-hover:opacity-60 transition-opacity duration-150"
        aria-hidden="true"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5.5 2.5H2.5C1.948 2.5 1.5 2.948 1.5 3.5V11.5C1.5 12.052 1.948 12.5 2.5 12.5H10.5C11.052 12.5 11.5 12.052 11.5 11.5V8.5M8.5 1.5H12.5M12.5 1.5V5.5M12.5 1.5L6 8" />
        </svg>
      </div>
    </a>
  );
}

// ─── ContactTab ────────────────────────────────────────────────
export default function ContactTab() {
  const getVariant = (id: string): ContactVariant => {
    if (id.includes("whatsapp"))  return "whatsapp";
    if (id.includes("email"))     return "email";
    if (id.includes("github"))    return "github";
    if (id.includes("threads"))   return "threads";
    if (id.includes("instagram")) return "instagram";
    if (id.includes("linkedin"))  return "linkedin";
    if (id.includes("youtube"))   return "youtube";
    return "default";
  };

  return (
    <div>
      <h2 className="sr-only">Kontak</h2>

      {/* Greeting card */}
      <div
        className="rounded-xl p-5 mb-5 text-center"
        style={{
          background: "rgba(13,13,13,0.5)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <p
          className="text-base font-semibold"
          style={{ color: "#f4f4f6" }}
        >
          Hubungi Saya 👋
        </p>
        <p
          className="text-xs mt-1.5 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Pilih cara yang paling nyaman untuk kamu.{"\n"}
          Biasanya saya balas dalam 1×24 jam.
        </p>
      </div>

      {/* Contact links */}
      {contactSection && (
        <div className="space-y-2.5" role="list" aria-label="Metode kontak">
          {(contactSection.items as LinkItem[]).map((item) => (
            <div key={item.id} role="listitem">
              <ContactCard
                label={item.label}
                description={item.description}
                url={item.url}
                id={item.id}
                variant={getVariant(item.id)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Domain footer */}
      <p
        className="text-center text-[10px] mt-6"
        style={{ color: "rgba(255,255,255,0.15)" }}
      >
        {profile.domain}
      </p>
    </div>
  );
}
