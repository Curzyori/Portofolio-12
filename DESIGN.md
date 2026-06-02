# design.md — Terminal Glass Blueprint

> Dokumen referensi desain resmi untuk Curzy Link Hub (Portofolio-12).
> Stack: Next.js 16 · Tailwind CSS v4 · TypeScript · Vercel

---

## Konsep: Terminal Glass

**Terminal Glass** adalah sistem desain dark-only yang menggabungkan:

- **Raycast** — near-black canvas, Inter + ss03, surface ladder sebagai elevasi, zero drop-shadow
- **Linear** — lavender-blue accent hemat, hairline border, negative letter-spacing
- **Glassmorphism** — `backdrop-blur + rgba background` pada elemen focal point (profile card)
- **Apple** — `active:scale-[0.97]` press feedback, pill shapes, whitespace sebagai pedestal

Filosofi inti: **Satu momen warna**. Gradient accent hanya muncul sekali di hero, tidak berulang.

---

## Palet Warna

```css
/* Canvas & Surface */
--canvas:          #07080a;   /* Raycast near-black — bukan pure black */
--surface-1:       #0d0d0d;   /* Card background */
--surface-2:       #101111;   /* Elevated / hover state */

/* Hairlines */
--hairline:        #242728;                    /* Opaque border */
--hairline-soft:   rgba(255, 255, 255, 0.06);  /* Subtle border (most used) */
--hairline-strong: rgba(255, 255, 255, 0.14);  /* Emphasis border */

/* Text */
--ink:   #f4f4f6;   /* Primary text */
--body:  #cdcdcd;   /* Body text */
--mute:  #9c9c9d;   /* Secondary / caption */
--ash:   #6a6b6c;   /* Disabled / placeholder */

/* Accent — Lavender Indigo (Linear-inspired) */
--accent:        #5e6ad2;                   /* Base accent */
--accent-hover:  #818cf8;                   /* Hover / icon accent */
--accent-soft:   rgba(94, 106, 210, 0.12);  /* Soft background tint */
--accent-border: rgba(94, 106, 210, 0.28);  /* Accent card border */

/* Glass */
--glass-bg:      rgba(13, 13, 13, 0.72);    /* Card background */
--glass-border:  rgba(255, 255, 255, 0.07); /* Card border */

/* Hero gradient */
--hero-start: rgba(94, 106, 210, 0.20);
--hero-end:   rgba(129, 140, 248, 0.06);
```

---

## Tipografi

| Element        | Font   | Weight | Size   | Tracking  |
|----------------|--------|--------|--------|-----------|
| Display / H1   | Inter  | 600    | 20px   | -0.3px    |
| Body           | Inter  | 400    | 14px   | 0         |
| Caption / meta | Inter  | 400    | 11px   | 0         |
| Label (ALL CAPS)| Inter | 500    | 10px   | +0.12em   |
| Tab label      | Inter  | 400/600| 9.5px  | +0.02em   |
| Badge          | Inter  | 600    | 10px   | 0         |

**Font Feature Settings (wajib di body):**

```css
font-feature-settings: "calt", "kern", "liga", "ss03";
/* ss03 = Raycast signature — alternate lowercase 'g' glyph */
```

---

## Spacing System

Mengikuti Tailwind v4 default 4px base:

| Token   | Value  | Penggunaan             |
|---------|--------|------------------------|
| `gap-2` | 8px    | Antar icon–teks        |
| `gap-3` | 12px   | Antar elemen dalam card|
| `p-4`   | 16px   | Padding card utama     |
| `p-6`   | 24px   | Padding profile card   |
| `space-y-2.5` | 10px | Jarak antar link card |
| `mt-8`  | 32px   | Jarak antar section    |

---

## Border Radius

| Element         | Value  | Tailwind Class   |
|-----------------|--------|------------------|
| Profile card    | 16px   | `rounded-2xl`    |
| Link card       | 12px   | `rounded-xl`     |
| Project card    | 12px   | `rounded-xl`     |
| Icon block      | 10px   | `rounded-lg` / `rounded-xl` |
| Badge / pill    | 9999px | `rounded-full`   |
| Avatar          | 9999px | `rounded-full`   |

---

## Elevasi (Surface Ladder)

Tidak menggunakan `box-shadow`. Elevasi diciptakan murni dari warna:

| Level    | Background                 | Border                       |
|----------|----------------------------|------------------------------|
| Canvas   | `#07080a`                  | —                            |
| Surface  | `rgba(13,13,13,0.72)`      | `rgba(255,255,255,0.07)`     |
| Elevated | `rgba(20,21,22,0.85)`      | `rgba(255,255,255,0.10)`     |
| Glass    | `rgba(13,13,13,0.72)` + `backdrop-blur(24px)` | `rgba(255,255,255,0.07)` |

---

## Animasi & Interaksi

| Interaksi    | Implementasi                                | Durasi  |
|--------------|---------------------------------------------|---------|
| Press (tap)  | `active:scale-[0.97]`                       | 75ms    |
| Hover        | `hover:bg-[surface-elevated]`               | 150ms   |
| Icon hover   | `group-hover:opacity-50`                    | 150ms   |
| Arrow shift  | `group-hover:translate-x-0.5`               | 150ms   |
| Tab switch   | `transition-transform duration-150`         | 150ms   |
| All easing   | `ease-out` default                          | —       |

**Reduced motion:** Semua animasi dinonaktifkan via `@media (prefers-reduced-motion: reduce)` di `globals.css`.

---

## Touch & Accessibility Standards

- **Minimum touch target:** 44×44px (ui-ux-pro-max spec). Link card: ~52px tinggi, tab bar: 56px tinggi.
- **Focus ring:** `2px solid #5e6ad2, offset 2px`. Hanya muncul saat keyboard navigation (`:focus-visible`).
- **Skip link:** "Skip to content" — visually hidden kecuali saat focused via keyboard.
- **ARIA roles:** `role="tablist"` (TabBar), `role="tab"` (tab button), `role="tabpanel"` (content panel), `aria-selected`, `aria-controls`, `aria-labelledby`.
- **Semantic HTML:** Satu `<h1>` per halaman, heading hierarchy (h1 → h2 via `sr-only`), `<nav>`, `<main>`, `<footer>`.
- **`min-h-dvh`** bukan `100vh` — menyesuaikan dynamic viewport height browser mobile.
- **Safe area:** `env(safe-area-inset-bottom)` pada tab bar — iPhone gesture bar safe.
- **Zoom:** `user-scalable=no` TIDAK dipakai. User tetap bisa zoom (accessibility requirement).

---

## Struktur Komponen

```
app/
├── globals.css          ← CSS vars, Inter font, glass utility, base reset
├── layout.tsx           ← Root layout + SEO metadata (OG, Twitter, robots)
└── page.tsx             ← Server component: metadata export + render <LinkHub>

components/
├── LinkHub.tsx          ← Client wrapper (useState tab state)
├── TabBar.tsx           ← Fixed bottom navigation (5 tabs)
├── LinkCard.tsx         ← Generic link button (default & accent variant)
├── SectionLabel.tsx     ← Section divider label
└── tabs/
    ├── HomeTab.tsx      ← Profile card premium + stats + quick links
    ├── BisnisTab.tsx    ← Status card + bisnis link cards
    ├── ProjectsTab.tsx  ← 2-col grid, numbered project cards
    ├── SertifikatTab.tsx← PDF certificate cards + empty state
    └── ContactTab.tsx   ← Color-coded direct contact links

data/
└── links.ts             ← Semua konten hardcoded (SINGLE SOURCE OF TRUTH)

public/
├── avatar.jpg           ← Foto profil (taruh di sini)
├── favicon.ico
└── certificates/
    └── *.pdf            ← File sertifikat (taruh di sini)
```

---

## Tab Bar Spec

| Property         | Value                      |
|------------------|----------------------------|
| Position         | Fixed, bottom-0, inset-x-0 |
| Height           | 56px + safe-area-inset     |
| Background       | `rgba(7,8,10,0.88)` + `backdrop-blur(20px)` |
| Border           | `1px solid rgba(255,255,255,0.06)` top |
| Tab count        | 5 (Home, Bisnis, Projects, Sertifikat, Contact) |
| Active indicator | 24px pill at top, gradient `#5e6ad2 → #818cf8` |
| Icon size        | 20×20px |
| Label size       | 9.5px, weight 400 (inactive) / 600 (active) |
| Press animation  | `active:scale-95` |

---

## Filter Bar Spec

| Property         | Value                      |
|------------------|----------------------------|
| Position         | Relative, inline block preceding grids/lists |
| Height           | 44px (safe mobile touch-target) |
| Inactive Surface | `rgba(13,13,13,0.72)` dark canvas surface |
| Inactive Border  | `1px solid rgba(255,255,255,0.06)` hairline |
| Inactive Text    | `rgba(255,255,255,0.56)` muted ash |
| Active Surface   | `rgba(255,255,255,0.08)` or accent tint |
| Active Border    | `1px solid rgba(255,255,255,0.15)` or accent glow |
| Active Text      | `#f4f4f6` (bright) or `#818cf8`/`#fca5a5` (accent) |
| Press animation  | `active:scale-[0.97]` |

> [!NOTE]
> Pada tab Sertifikat, Filter Bar memiliki 5 opsi tombol (All, Nasional, Internasional, Individu, Team) dan menggunakan layout horizontal scrollable (`flex overflow-x-auto whitespace-nowrap scrollbar-none`) agar tetap presisi dan responsif di layar mobile.


---

## Aturan "Satu Momen Warna" (Raycast Principle)

1. Gradient accent **hanya satu** — di hero glow atas halaman.
2. Accent color `#5e6ad2` / `#818cf8` dipakai **sangat hemat**: tab active indicator, BisnisTab cards, beberapa icon.
3. **Tidak ada** gradient berulang di card, link, atau section.
4. **Tidak ada** drop shadow (`box-shadow`). Elevasi dari warna saja.
5. **Tidak ada** blur ganda — hanya profile card yang menggunakan `backdrop-filter`.

---

## Cara Update Konten

Semua data konten **hanya di `data/links.ts`**. Tidak perlu menyentuh komponen UI.

```typescript
// Ganti URL placeholder:
url: "https://wa.me/628XXXXXXXXX"
url: "https://linkedin.com/in/username-kamu"
url: "https://github.com/username/repo-name"

// Tambah project baru — tambah object ke section.items:
{ id: "project-13", label: "Project 13", description: "Deskripsi", url: "...", isExternal: true }

// Tambah sertifikat — taruh PDF di public/certificates/, tambah ke sections:
{ id: "cert-4", label: "Sertifikat 4", url: "/certificates/sertifikat-4.pdf", isExternal: true }
```

---

*Dokumen ini diperbarui terakhir: Juni 2026. Versi stack: Next.js 16.2.7, Tailwind CSS v4, React 19.*
