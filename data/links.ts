// ============================================================
// data/links.ts: Semua data link hardcoded di sini.
// Edit file ini untuk mengupdate konten tanpa menyentuh UI.
// ============================================================

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon?: string; // emoji fallback, tapi kita pakai SVG inline
  description?: string;
  isExternal?: boolean;
  isFavorite?: boolean;
  type?: "nasional" | "internasional";
  workMode?: "individu" | "team";
  issuer?: string;
  date?: string;
  category?: 'seminar' | 'lomba' | 'course' | 'bootcamp';
}

export interface ProjectLink {
  type: 'repo' | 'web' | 'download';
  url: string;
}

export interface ProjectItem {
  id: string;
  projectNumber: string;
  label: string;
  description: string;
  isFavorite: boolean;
  tags: string[];
  links: ProjectLink[];
}

export type SectionItem = LinkItem | ProjectItem;

export interface LinkSection {
  id: string;
  title: string;
  items: SectionItem[];
}

// === Profil ===
export const profile = {
  name: "Yuken Velino",
  username: "@curzy.my.id",
  bio: "Full Stack Developer · Building things from Project 1 to 12.",
  avatarUrl: "/avatar.jpg", // taruh foto di public/avatar.jpg
  domain: "curzy.my.id",
};

// === Sections ===
export const sections: LinkSection[] = [
  {
    id: "bisnis",
    title: "Bisnis",
    items: [
      {
        id: "whatsapp",
        label: "WhatsApp Bisnis",
        description: "Hubungi untuk kolaborasi",
        url: "https://wa.me/6285141495185",
        isExternal: true,
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        description: "Yuken Velino · Professional Profile",
        url: "https://www.linkedin.com/in/curzy/",
        isExternal: true,
      },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    items: [
      {
        id: "zafkiel-arcade",
        projectNumber: "#01",
        label: "Zafkiel Arcade: Emperor of Time",
        description: "Survival game bertema Gothic-Crimson dengan mekanika manipulasi waktu berbasis arsitektur Modular Monolith.",
        isFavorite: false,
        tags: ["React", "Express", "SQLite", "Game"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/Zafkiel-Arcade-1" }]
      },
      {
        id: "c-dashboard",
        projectNumber: "#02",
        label: "C Dashboard",
        description: "Real-time command center pemantau vitalitas hardware Linux Ubuntu yang disinkronisasikan via WebSockets.",
        isFavorite: false,
        tags: ["React", "Node.js", "Socket.io", "SysInfo"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/C-Dashboard-2" }]
      },
      {
        id: "curzy-vitality",
        projectNumber: "#03",
        label: "Curzy Vitality",
        description: "Sistem Life OS pelacak produktivitas pengembang berbasis background daemon Sentinel dan analisis kebugaran.",
        isFavorite: false,
        tags: ["React", "SQLite3", "PM2", "Life OS"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/Curzy-Vitality-3" }]
      },
      {
        id: "c-flow",
        projectNumber: "#04",
        label: "C Flow",
        description: "Premium local music hub dengan antarmuka penuh glassmorphism dan sirkuit pengorganisasian metadata audio otomatis.",
        isFavorite: false,
        tags: ["React", "Express", "Metadata", "Audio"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/C-Flow-4" }]
      },
      {
        id: "c-math",
        projectNumber: "#05",
        label: "C Math",
        description: "Precision-engineered calculator dan mesin analisis finansial untuk optimalisasi margin profit serta kalkulator DCA.",
        isFavorite: false,
        tags: ["React", "Vite", "Mathjs", "Finance"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/C-Math-5" }]
      },
      {
        id: "c-story",
        projectNumber: "#06",
        label: "C-Story",
        description: "Interactive storytelling engine berbasis Astro dengan penanganan HUD glassmorphic dan retensi sesi lokal.",
        isFavorite: false,
        tags: ["Astro", "TypeScript", "Tailwind", "Engine"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/C-Story-6" }]
      },
      {
        id: "4-mate",
        projectNumber: "#07",
        label: "4 Mate",
        description: "Multi-platform media downloader bebas iklan dengan sirkuit forced-download memanfaatkan keunggulan Vercel Edge Runtime.",
        isFavorite: true,
        tags: ["Next.js 16", "Edge Runtime", "Scraping", "Web App"],
        links: [
          { type: "web", url: "https://4mate.curzy.my.id" },
          { type: "repo", url: "https://github.com/Curzyori/4-Mate-7" }
        ]
      },
      {
        id: "c-vault",
        projectNumber: "#08",
        label: "C Vault",
        description: "Intelligence nexus dan pustaka desentralisasi dokumen intelijen berbasis otentikasi clearance tingkat berlapis.",
        isFavorite: false,
        tags: ["Astro 6", "Tailwind 4", "Markdown", "Security"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/C-Vault-8" }]
      },
      {
        id: "check-ip",
        projectNumber: "#09",
        label: "Check IP",
        description: "Terminal-styled web tools instan pendeteksi alamat IP publik, koordinat lokasi geografis, dan informasi ISP penyeedia jaringan.",
        isFavorite: false,
        tags: ["Next.js 14", "TypeScript", "API Geolocation", "Tools"],
        links: [
          { type: "web", url: "https://checkip.curzy.my.id" },
          { type: "repo", url: "https://github.com/Curzyori/Check-IP-9" }
        ]
      },
      {
        id: "float-volume",
        projectNumber: "#10",
        label: "Float Volume",
        description: "Aplikasi kontrol volume melayang bebas iklan untuk Android dengan pendekatan Material Design 3 dan Prestige-Safe Stealth Aesthetic.",
        isFavorite: true,
        tags: ["Kotlin", "Jetpack Compose", "Overlay API", "Android App"],
        links: [
          { type: "download", url: "https://github.com/Curzyori/Float-Volume-10/tree/main/version" },
          { type: "repo", url: "https://github.com/Curzyori/Float-Volume-10" }
        ]
      },
      {
        id: "c-lync",
        projectNumber: "#11",
        label: "C-Lync",
        description: "SaaS otomatisasi WhatsApp berbasis Google AI Gemini dengan manajemen multi-tenant beraliran arsitektur Unified Monolith.",
        isFavorite: true,
        tags: ["React", "Supabase RLS", "Gemini API Pro", "SaaS Utama"],
        links: [
          { type: "web", url: "https://c-lync-266408539680.asia-southeast1.run.app" }
        ]
      },
      {
        id: "curzy-portfolio",
        projectNumber: "#12",
        label: "Curzy Portfolio",
        description: "Template premium mobile-first link hub dan portfolio developer statis dengan integrasi filter hierarki bertingkat.",
        isFavorite: true,
        tags: ["Next.js 16", "TypeScript", "Terminal Glass", "Portfolio Hub"],
        links: [
          { type: "web", url: "https://curzy.my.id" },
          { type: "repo", url: "https://github.com/Curzyori/Portofolio-12" }
        ]
      }
    ]
  },
  {
    id: "certificates",
    title: "Sertifikat",
    items: [
      {
        id: "google-ai",
        label: "Google AI Professional Certificate",
        issuer: "Google & Coursera",
        description: "Spesialisasi Profesional dari Google. Diselesaikan dalam waktu sekitar 1 bulan dengan intensitas belajar 2 jam per minggu. Mencakup 7 modul utama: AI Fundamentals, Brainstorming & Planning, Research & Insights, Writing & Communication, Content Creation, Data Analysis, hingga App Building.",
        url: "/certificates/google-ai.pdf",
        isExternal: true,
        type: "internasional",
        workMode: "individu",
        date: "2026-05-22",
        category: "course",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    items: [
      {
        id: "email",
        label: "Email",
        description: "yukenvelino11@gmail.com",
        url: "mailto:yukenvelino11@gmail.com",
        isExternal: true,
      },
      {
        id: "whatsapp-personal",
        label: "WhatsApp",
        description: "Chat langsung",
        url: "https://wa.me/6285141495185",
        isExternal: true,
      },
      {
        id: "github",
        label: "GitHub",
        description: "@Curzyori",
        url: "https://github.com/Curzyori",
        isExternal: true,
      },
      {
        id: "threads",
        label: "Threads",
        description: "@curzyori",
        url: "https://www.threads.com/@curzyori",
        isExternal: true,
      },
      {
        id: "instagram",
        label: "Instagram",
        description: "@curzyori",
        url: "https://www.instagram.com/curzyori",
        isExternal: true,
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        description: "Yuken Velino",
        url: "https://www.linkedin.com/in/curzy/",
        isExternal: true,
      },
      {
        id: "youtube",
        label: "YouTube",
        description: "@Curzys",
        url: "https://youtube.com/@Curzys",
        isExternal: true,
      },
    ],
  },
];
