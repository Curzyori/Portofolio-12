// components/LinkHub.tsx — Client wrapper with tab state
// page.tsx (server) renders this so metadata export tetap di server component.

"use client";

import { useState } from "react";
import TabBar, { type TabId } from "@/components/TabBar";
import HomeTab        from "@/components/tabs/HomeTab";
import BisnisTab      from "@/components/tabs/BisnisTab";
import ProjectsTab    from "@/components/tabs/ProjectsTab";
import SertifikatTab  from "@/components/tabs/SertifikatTab";
import ContactTab     from "@/components/tabs/ContactTab";

// ─── Tab panel renderer ───────────────────────────────────────
function TabPanel({
  id,
  activeTab,
  children,
}: {
  id: TabId;
  activeTab: TabId;
  children: React.ReactNode;
}) {
  const isActive = id === activeTab;
  return (
    <div
      id={`tabpanel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-btn-${id}`}
      hidden={!isActive}
      tabIndex={0}
    >
      {isActive && children}
    </div>
  );
}

// ─── LinkHub ──────────────────────────────────────────────────
export default function LinkHub() {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        style={{ background: "#5e6ad2", color: "#fff" }}
      >
        Skip to content
      </a>

      {/* Outer wrapper */}
      <div className="relative min-h-dvh overflow-hidden">

        {/* ── Hero glow — static, sekali di paling atas ── */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          aria-hidden="true"
          style={{
            height: "320px",
            background: "radial-gradient(ellipse 90% 70% at 50% -5%, rgba(94,106,210,0.18) 0%, rgba(129,140,248,0.06) 55%, transparent 80%)",
            zIndex: 0,
          }}
        />

        {/* ── Content column ── */}
        <main
          id="main-content"
          className="relative mx-auto px-4 pt-10"
          style={{
            maxWidth: "440px",
            /*
             * pb accounts for:
             * - tab bar height (56px)
             * - safe-area-inset-bottom
             * - extra breathing room (16px)
             */
            paddingBottom: "calc(56px + env(safe-area-inset-bottom, 0px) + 16px)",
            zIndex: 1,
          }}
        >
          {/* ── Tab panels ── */}
          <TabPanel id="home"       activeTab={activeTab}><HomeTab /></TabPanel>
          <TabPanel id="bisnis"     activeTab={activeTab}><BisnisTab /></TabPanel>
          <TabPanel id="projects"   activeTab={activeTab}><ProjectsTab /></TabPanel>
          <TabPanel id="sertifikat" activeTab={activeTab}><SertifikatTab /></TabPanel>
          <TabPanel id="contact"    activeTab={activeTab}><ContactTab /></TabPanel>
        </main>
      </div>

      {/* ── Fixed bottom tab bar ── */}
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  );
}
