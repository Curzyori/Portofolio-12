// ============================================================
// data/links.ts — Semua data link hardcoded di sini.
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
}

export interface LinkSection {
  id: string;
  title: string;
  items: LinkItem[];
}

// ─── Profil ─────────────────────────────────────────────────
export const profile = {
  name: "Yuken Velino",
  username: "@curzy.my.id",
  bio: "Full Stack Developer · Building things from Project 1 to 12.",
  avatarUrl: "/avatar.jpg", // taruh foto di public/avatar.jpg
  domain: "curzy.my.id",
};

// ─── Sections ───────────────────────────────────────────────
export const sections: LinkSection[] = [
  {
    id: "bisnis",
    title: "Bisnis",
    items: [
      {
        id: "whatsapp",
        label: "WhatsApp Bisnis",
        description: "Hubungi untuk kolaborasi",
        url: "https://wa.me/62xxxxxxxx", // Ganti dengan nomor WA kamu
        isExternal: true,
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        description: "Yuken Velino · Professional Profile",
        url: "https://linkedin.com/in/yukenvelino", // Ganti dengan URL LinkedIn kamu
        isExternal: true,
      },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    items: [
      {
        id: "project-1",
        label: "Project 1",
        description: "GitHub Repository",
        url: "https://github.com/curzy/project-1", // Ganti dengan URL repo asli
        isExternal: true,
        isFavorite: false,
      },
      {
        id: "project-2",
        label: "Project 2",
        description: "GitHub Repository",
        url: "https://github.com/curzy/project-2",
        isExternal: true,
        isFavorite: false,
      },
      {
        id: "project-3",
        label: "Project 3",
        description: "GitHub Repository",
        url: "https://github.com/curzy/project-3",
        isExternal: true,
        isFavorite: false,
      },
      {
        id: "project-4",
        label: "Project 4",
        description: "GitHub Repository",
        url: "https://github.com/curzy/project-4",
        isExternal: true,
        isFavorite: false,
      },
      {
        id: "project-5",
        label: "Project 5",
        description: "GitHub Repository",
        url: "https://github.com/curzy/project-5",
        isExternal: true,
        isFavorite: false,
      },
      {
        id: "project-6",
        label: "Project 6",
        description: "GitHub Repository",
        url: "https://github.com/curzy/project-6",
        isExternal: true,
        isFavorite: false,
      },
      {
        id: "project-7",
        label: "Project 7",
        description: "GitHub Repository",
        url: "https://github.com/curzy/project-7",
        isExternal: true,
        isFavorite: false,
      },
      {
        id: "project-8",
        label: "Project 8",
        description: "GitHub Repository",
        url: "https://github.com/curzy/project-8",
        isExternal: true,
        isFavorite: false,
      },
      {
        id: "project-9",
        label: "Project 9",
        description: "GitHub Repository",
        url: "https://github.com/curzy/project-9",
        isExternal: true,
        isFavorite: false,
      },
      {
        id: "project-10",
        label: "Project 10",
        description: "GitHub Repository",
        url: "https://github.com/curzy/project-10",
        isExternal: true,
        isFavorite: true,
      },
      {
        id: "project-11",
        label: "Project 11",
        description: "GitHub Repository",
        url: "https://github.com/curzy/project-11",
        isExternal: true,
        isFavorite: true,
      },
      {
        id: "project-12",
        label: "Project 12 · Portofolio Hub",
        description: "This site — GitHub Repository",
        url: "https://github.com/curzy/portofolio-12",
        isExternal: true,
        isFavorite: true,
      },
    ],
  },
  {
    id: "certificates",
    title: "Sertifikat",
    items: [
      {
        id: "cert-1",
        label: "Sertifikat 1",
        description: "Buka PDF · Tab Baru",
        url: "/certificates/sertifikat-1.pdf", // taruh PDF di public/certificates/
        isExternal: true,
        type: "nasional",
        workMode: "individu",
      },
      {
        id: "cert-2",
        label: "Sertifikat 2",
        description: "Buka PDF · Tab Baru",
        url: "/certificates/sertifikat-2.pdf",
        isExternal: true,
        type: "internasional",
        workMode: "team",
      },
      {
        id: "cert-3",
        label: "Sertifikat 3",
        description: "Buka PDF · Tab Baru",
        url: "/certificates/sertifikat-3.pdf",
        isExternal: true,
        type: "internasional",
        workMode: "individu",
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
        description: "yuken@curzy.my.id", // Ganti dengan email kamu
        url: "mailto:yuken@curzy.my.id",
        isExternal: false,
      },
      {
        id: "whatsapp-personal",
        label: "WhatsApp",
        description: "Chat langsung",
        url: "https://wa.me/62xxxxxxxx", // Ganti dengan nomor WA
        isExternal: true,
      },
      {
        id: "github",
        label: "GitHub",
        description: "@curzy",
        url: "https://github.com/curzy", // Ganti dengan URL GitHub kamu
        isExternal: true,
      },
    ],
  },
];
