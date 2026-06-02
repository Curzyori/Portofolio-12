# Context Project: Portofolio-12 (Curzy Link Hub)

## 1. Identitas & Ringkasan Project
- **Owner:** Yuken Velino
- **Domain Resmi:** curzy.my.id
- **Repository GitHub:** Curzyori/Portofolio-12
- **Konsep:** Premium mobile-first link hub dan personal portfolio (70% dioptimasi untuk mobile browser). Menggunakan tema visual **Terminal Glass** yang diinspirasi dari Apple, Linear, dan Raycast.
- **Arsitektur:** 100% Static Frontend / Jamstack. Tanpa database eksternal dan tanpa API (Zero maintenance cost, load < 1 detik).

## 2. Single Source of Truth (Data Management)
Semua konten yang tampil di website dikendalikan penuh secara terpusat pada satu file data lokal:
- 📂 `src/data/links.ts`
Jika ingin mengubah link, menambahkan project, atau mengubah file PDF sertifikat, pengembang cukup memperbarui data array pada file ini tanpa perlu menyentuh kode komponen UI.

---

## 3. Flow Structure & Antarmuka (5-Tabs Navigation)
Aplikasi menggunakan sistem navigasi *fixed bottom bar* berbasis React `useState` lokal yang membagi konten menjadi 5 tampilan utama:

```mermaid
graph TD
    A[LinkHub Wrapper] --> B[Fixed Bottom TabBar]
    A --> C[Dynamic Tab Content]
    C -->|Tab 1| D[HomeTab: Profile Card Glass + Summary + Tech Stack]
    C -->|Tab 2| E[BisnisTab: Status Kerja + Tautan Bisnis Pro]
    C -->|Tab 3| F[ProjectsTab: Grid 2-Kolom + Filter All/Fav]
    C -->|Tab 4| G[SertifikatTab: Daftar Dokumen PDF + Filter Skala & Kategori Kerja]
    C -->|Tab 5| H[ContactTab: Direct Link Hijau/Indigo WA & Email]