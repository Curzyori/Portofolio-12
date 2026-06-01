// components/tabs/BisnisTab.tsx — Professional/business links

import LinkCard from "@/components/LinkCard";
import { sections } from "@/data/links";

const bisnisSection = sections.find((s) => s.id === "bisnis");

// ─── Header info card ─────────────────────────────────────────
function BisnisHeader() {
  return (
    <div
      className="rounded-xl p-4 mb-4"
      style={{
        background: "rgba(94,106,210,0.07)",
        border: "1px solid rgba(94,106,210,0.15)",
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(94,106,210,0.15)" }}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(129,140,248,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        </div>
        <div>
          <p
            className="text-sm font-medium"
            style={{ color: "#c7d2fe" }}
          >
            Open for opportunities
          </p>
          <p
            className="text-xs mt-0.5 leading-relaxed"
            style={{ color: "rgba(199,210,254,0.5)" }}
          >
            Tersedia untuk kolaborasi, freelance, dan proyek baru.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── BisnisTab ────────────────────────────────────────────────
export default function BisnisTab() {
  if (!bisnisSection) return null;

  return (
    <div>
      <h2 className="sr-only">Bisnis &amp; Profesional</h2>

      <BisnisHeader />

      <div className="space-y-2.5" role="list">
        {bisnisSection.items.map((item) => (
          <div key={item.id} role="listitem">
            <LinkCard item={item} variant="accent" />
          </div>
        ))}
      </div>
    </div>
  );
}
