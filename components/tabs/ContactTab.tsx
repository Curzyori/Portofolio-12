// components/tabs/ContactTab.tsx — Direct action contact links
// No backend. Pure static: WhatsApp, Email, GitHub.

import { profile, sections } from "@/data/links";

const contactSection = sections.find((s) => s.id === "contact");

// ─── Contact method cards ─────────────────────────────────────
type ContactVariant = "whatsapp" | "email" | "github" | "default";

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
    default: {
      bg:        "rgba(13,13,13,0.72)",
      border:    "rgba(255,255,255,0.06)",
      iconBg:    "rgba(255,255,255,0.05)",
      iconColor: "rgba(255,255,255,0.4)",
    },
  };

  const styles = variantStyles[variant];

  const isWhatsApp = id.includes("whatsapp");
  const isEmail    = id.includes("email");
  const isGithub   = id.includes("github");

  return (
    <a
      href={url}
      id={`contact-link-${id}`}
      target={isEmail ? "_self" : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
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
        {!isWhatsApp && !isEmail && !isGithub && (
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
    if (id.includes("whatsapp")) return "whatsapp";
    if (id.includes("email"))    return "email";
    if (id.includes("github"))   return "github";
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
          {contactSection.items.map((item) => (
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
