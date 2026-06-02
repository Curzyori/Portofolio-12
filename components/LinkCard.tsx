// components/LinkCard.tsx
// Komponen link button dengan animasi press dan touch-friendly sizing.
// Semua link menggunakan <a> biasa — cocok untuk static site.

import { useState } from "react";
import type { LinkItem } from "@/data/links";

// ─── Icon SVGs ──────────────────────────────────────────────
// Menggunakan SVG inline agar tidak ada dependency icon library
const ExternalIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="flex-shrink-0 opacity-40"
  >
    <path
      d="M5.5 2.5H2.5C1.948 2.5 1.5 2.948 1.5 3.5V11.5C1.5 12.052 1.948 12.5 2.5 12.5H10.5C11.052 12.5 11.5 12.052 11.5 11.5V8.5M8.5 1.5H12.5M12.5 1.5V5.5M12.5 1.5L6 8"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InternalIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="flex-shrink-0 opacity-40"
  >
    <path
      d="M3 7H11M8 4L11 7L8 10"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Link type icons (digunakan untuk context visual) ────────
const GitHubIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="flex-shrink-0 opacity-60"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="flex-shrink-0 opacity-60"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="flex-shrink-0 opacity-60"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="flex-shrink-0 opacity-60"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const DocumentIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="flex-shrink-0 opacity-60"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const LinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="flex-shrink-0 opacity-60"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const CloudIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="flex-shrink-0 opacity-60"
  >
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="flex-shrink-0 opacity-60"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

// ─── Icon resolver ───────────────────────────────────────────
function resolveIcon(id: string, icon?: string) {
  if (icon === "fa-cloud") return <CloudIcon />;
  if (icon === "fa-shopping-bag") return <ShoppingBagIcon />;
  if (id.includes("whatsapp")) return <WhatsAppIcon />;
  if (id.includes("linkedin")) return <LinkedInIcon />;
  if (id.includes("github") || id.includes("project")) return <GitHubIcon />;
  if (id.includes("email")) return <EmailIcon />;
  if (id.includes("cert")) return <DocumentIcon />;
  return <LinkIcon />;
}

const statusStyles: Record<string, string> = {
  "CLOSE": "text-red-400 bg-red-500/10 border-red-500/20",
  "OPEN": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "MAINTENANCE": "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "COMING SOON": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
};

const ChevronIcon = ({ expanded }: { expanded: boolean }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── LinkCard Component ──────────────────────────────────────
interface LinkCardProps {
  item: LinkItem;
  variant?: "default" | "accent"; // accent = warna lavender untuk CTA utama
}

export default function LinkCard({ item, variant = "default" }: LinkCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isAccent = variant === "accent";

  return (
    <a
      href={item.url}
      id={`link-${item.id}`}
      target={item.isExternal ? "_blank" : "_self"}
      rel={item.isExternal ? "noopener noreferrer" : undefined}
      aria-label={`${item.label}${item.description ? ` — ${item.description}` : ""}`}
      className={[
        // Base layout — touch target min 52px tinggi (melebihi 44px req)
        "group flex items-center gap-3 w-full px-4 py-4",
        "rounded-xl border transition-all duration-150",
        "cursor-pointer select-none",
        // Press feedback (Apple + ui-ux-pro-max guideline)
        "active:scale-[0.97] active:duration-75",
        // Variant styles
        isAccent
          ? [
              "bg-[rgba(94,106,210,0.12)] border-[rgba(94,106,210,0.3)]",
              "hover:bg-[rgba(94,106,210,0.18)] hover:border-[rgba(94,106,210,0.45)]",
              "text-[#a5b0ff]",
            ].join(" ")
          : [
              "bg-[rgba(15,16,17,0.72)] border-[rgba(255,255,255,0.06)]",
              "hover:bg-[rgba(20,21,22,0.85)] hover:border-[rgba(255,255,255,0.1)]",
              "text-[#f4f4f6]",
            ].join(" "),
      ].join(" ")}
    >
      {/* Icon */}
      <span
        className={isAccent ? "text-[#818cf8]" : "text-[#f4f4f6]"}
        aria-hidden="true"
      >
        {resolveIcon(item.id, item.icon)}
      </span>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <p
            className={[
              "text-sm font-medium leading-snug truncate",
              isAccent ? "text-[#c7d2fe]" : "text-[#f4f4f6]",
            ].join(" ")}
          >
            {item.label}
          </p>
          {item.year && (
            <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded border border-gray-500/20 bg-gray-500/5 text-gray-400 leading-none tracking-wide">
              {item.year}
            </span>
          )}
          {item.status && (
            <span
              className={[
                "text-[9px] font-semibold px-1.5 py-0.5 rounded border leading-none uppercase tracking-wide",
                statusStyles[item.status] || "",
              ].join(" ")}
            >
              {item.status}
            </span>
          )}
        </div>
        {item.description && (
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="mt-1 flex items-start gap-1.5 cursor-pointer group/desc"
          >
            <p
              className={[
                "flex-1 text-[11px] leading-relaxed transition-all duration-300 ease-in-out whitespace-normal break-words",
                isExpanded ? "" : "line-clamp-2",
              ].join(" ")}
              style={{ color: isAccent ? "rgba(167,179,255,0.55)" : "rgba(255,255,255,0.32)" }}
            >
              {item.description}
            </p>
            <span
              className="flex-shrink-0 mt-0.5 p-0.5 rounded hover:bg-white/5 transition-colors"
              style={{ color: isAccent ? "rgba(167,179,255,0.65)" : "rgba(255,255,255,0.4)" }}
              aria-label={isExpanded ? "Collapse description" : "Expand description"}
            >
              <ChevronIcon expanded={isExpanded} />
            </span>
          </div>
        )}
      </div>

      {/* Arrow icon */}
      <span
        className={[
          "transition-transform duration-150 group-hover:translate-x-0.5",
          isAccent ? "text-[#818cf8]" : "text-[#f4f4f6]",
        ].join(" ")}
        aria-hidden="true"
      >
        {item.isExternal ? <ExternalIcon /> : <InternalIcon />}
      </span>
    </a>
  );
}
