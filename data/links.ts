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
  status?: "CLOSE" | "OPEN" | "MAINTENANCE" | "COMING SOON";
  year?: string;
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
  username: "@Curzyori",
  role: "Full-Stack Developer | Informatics Student | Automation Enthusiast",
  tagline: "Building Digital Solutions 🚀 | Automating Everything I Can ⚙️ | Learning Never Stops 📚",
  philosophy: "Hasil Adalah Segalanya",
  avatarUrl: "/avatar.jpg",
  domain: "curzy.my.id",
  techStack: {
    languages: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
    frontend: ["React", "Next.js", "Vite", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Supabase", "MySQL"],
    devops: ["Vercel", "Cloudflare", "Nginx", "Git", "Linux Ubuntu", "Antigravity IDE", "Obsidian", "Resend", "GitHub"],
  },
};

// === Sections ===
export const sections: LinkSection[] = [
  {
    id: "bisnis",
    title: "Bisnis",
    items: [
      {
        id: "curzy-cloud",
        label: "Curzy Cloud",
        url: "https://www.whatsapp.com/channel/0029Vb0n6QmFsn0df3zW6o3v",
        icon: "fa-cloud",
        description: "Layanan Game Server Hosting (Minecraft Java/Bedrock) dan script custom automation yang beroperasi penuh pada periode 2024 - 2026. Platform ini memanfaatkan arsitektur Pterodactyl Panel, integrasi database Supabase Realtime, serta otomatisasi payment gateway berbasis Crypto (USDT BEP-20). Saat ini proyek telah selesai diarsipkan, dan seluruh aktivitas komunitas dialihkan ke Saluran WhatsApp resmi.",
        isExternal: true,
        isFavorite: true,
        type: "internasional",
        workMode: "individu",
        status: "CLOSE",
        year: "2024 - 2026",
      },
      {
        id: "curzy-market",
        label: "Curzy Market (Coming Soon)",
        url: "https://github.com/Curzyori",
        icon: "fa-shopping-bag",
        description: "Global digital marketplace and development agency disiapkan eksklusif dengan payment gateway berbasis Web3/Crypto (tanpa fiat/metode lokal). Menjadi pusat distribusi aset digital premium seperti Automation Scripts, CLI tools, Template Website, aplikasi Premium (Free Trial & Premium dari 50 Projects Challenge), hingga layanan komersial komputasi seperti Joki Tugas Engineering dan Jasa Pembuatan Website Kustom (Buy Custom Website).",
        isExternal: true,
        isFavorite: false,
        type: "internasional",
        workMode: "individu",
        status: "COMING SOON",
        year: "2026",
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
        label: "Zafkiel Arcade",
        description: "Survival game bertema Gothic-Crimson dengan mekanika manipulasi waktu berbasis arsitektur Modular Monolith.",
        isFavorite: false,
        tags: ["React", "Express", "Node.js", "Game"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/Zafkiel-Arcade-1" }]
      },
      {
        id: "c-dashboard",
        projectNumber: "#02",
        label: "C Dashboard",
        description: "Real-time command center pemantau vitalitas hardware Linux Ubuntu yang disinkronisasikan via WebSockets.",
        isFavorite: false,
        tags: ["React", "Node.js", "Linux", "Git"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/C-Dashboard-2" }]
      },
      {
        id: "curzy-vitality",
        projectNumber: "#03",
        label: "Curzy Vitality",
        description: "Sistem Life OS pelacak produktivitas pengembang berbasis background daemon Sentinel dan analisis kebugaran.",
        isFavorite: false,
        tags: ["React", "Node.js", "Tailwind CSS", "Life OS"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/Curzy-Vitality-3" }]
      },
      {
        id: "c-flow",
        projectNumber: "#04",
        label: "C Flow",
        description: "Premium local music hub dengan antarmuka penuh glassmorphism dan sirkuit pengorganisasian metadata audio otomatis.",
        isFavorite: false,
        tags: ["React", "Express", "JavaScript", "Audio"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/C-Flow-4" }]
      },
      {
        id: "c-math",
        projectNumber: "#05",
        label: "C Math",
        description: "Precision-engineered calculator dan mesin analisis finansial untuk optimalisasi margin profit serta kalkulator DCA.",
        isFavorite: false,
        tags: ["React", "Vite", "JavaScript", "Finance"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/C-Math-5" }]
      },
      {
        id: "c-story",
        projectNumber: "#06",
        label: "C Story",
        description: "Interactive storytelling engine berbasis TypeScript dengan penanganan HUD glassmorphic dan retensi sesi lokal.",
        isFavorite: false,
        tags: ["React", "TypeScript", "Tailwind CSS", "Engine"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/C-Story-6" }]
      },
      {
        id: "4-mate",
        projectNumber: "#07",
        label: "4 Mate",
        description: "Multi-platform media downloader bebas iklan dengan sirkuit forced-download memanfaatkan keunggulan Vercel Edge Runtime.",
        isFavorite: true,
        tags: ["Next.js", "TypeScript", "Vercel", "Web App"],
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
        tags: ["Next.js", "Tailwind CSS", "Markdown", "Security"],
        links: [{ type: "repo", url: "https://github.com/Curzyori/C-Vault-8" }]
      },
      {
        id: "check-ip",
        projectNumber: "#09",
        label: "Check IP",
        description: "Terminal-styled web tools instan pendeteksi alamat IP publik, koordinat lokasi geografis, dan informasi ISP penyeedia jaringan.",
        isFavorite: false,
        tags: ["Next.js", "TypeScript", "Git", "Tools"],
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
        tags: ["Linux", "Git", "Android App"],
        links: [
          { type: "download", url: "https://github.com/Curzyori/Float-Volume-10/tree/main/version" },
          { type: "repo", url: "https://github.com/Curzyori/Float-Volume-10" }
        ]
      },
      {
        id: "c-lync",
        projectNumber: "#11",
        label: "C Lync",
        description: "Aplikasi web manajemen dan otomatisasi pesan atau grup WhatsApp. Dilengkapi fitur asisten cerdas berbasis Google AI Gemini untuk merangkum obrolan panjang (chat overload) secara otomatis dan asinkron.",
        isFavorite: true,
        tags: ["React", "TypeScript", "Supabase", "SaaS Utama"],
        links: [
          { type: "web", url: "https://c-lync-266408539680.asia-southeast1.run.app" }
        ]
      },
      {
        id: "curzy-portfolio",
        projectNumber: "#12",
        label: "Portfolio",
        description: "Template premium mobile-first link hub dan portfolio developer statis dengan integrasi filter hierarki bertingkat.",
        isFavorite: true,
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Portfolio Hub"],
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
