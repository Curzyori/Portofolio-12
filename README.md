# Curzy: Premium Mobile Link Hub & Portfolio

> Curzy adalah template premium mobile-first link hub dan portofolio developer bergaya **Terminal Glass**.
> Demo live: [portofolio-12.curzy.dev](https://portofolio-12.curzy.dev/) · Kode sumber terbuka dengan Lisensi MIT.

---

## Masalah (Problem)

Bagi seorang developer, layanan link hub gratisan seperti Linktree atau Lynk sering kali memiliki fitur yang terbatas dan tidak memiliki estetika atau karakter khas seorang developer. 

Di sisi lain, membangun situs portofolio full-stack tradisional dari nol sering kali membutuhkan usaha pemeliharaan database, penyiapan API yang kompleks, serta biaya sewa server bulanan. Kendala-kendala administratif ini sering kali membuat pengembang malas untuk menyelesaikan dan memperbarui portofolio mereka sendiri.

## Solusi (Solution)

**Curzy** hadir sebagai solusi: sebuah premium mobile-first link hub yang 100% static tanpa backend atau API. 

Situs ini sangat ringan, memuat halaman secara instan, dan membutuhkan biaya perawatan nol rupiah (zero maintenance). Meskipun sepenuhnya statis, Curzy tetap menyajikan pengalaman interaktif tinggi layaknya aplikasi mobile native berkat optimasi state React lokal yang cepat dan responsif.

## Fitur Utama (Features)

* **100% Mobile-First Responsive Design:** Dioptimalkan secara khusus untuk menjamin kenyamanan navigasi bagi lebih dari 70% pengunjung yang menggunakan layar HP.
* **Premium Terminal Glass UI Theme:** Tema visual gelap kelas atas yang terinspirasi dari detail antarmuka produk seperti Raycast, Linear, dan Apple.
* **5-Tabs Navigation System:** Navigasi 5 tab lengkap (Home, Bisnis, Projects, Sertifikat, Contact) menggunakan state management lokal yang halus.
* **Dynamic Content Filter:** Filter pencarian lokal "All vs Fav" pada tab Projects serta filter skala "All vs Nasional vs Internasional" pada tab Sertifikat.
* **Consistency Index Numbering:** Indeks nomor urut proyek (seperti #01 sampai #12) tetap terkunci rapi sesuai urutan aslinya meskipun data sedang difilter.
* **Graceful Empty State:** Penanganan tampilan kosong yang bersih dan informatif untuk kategori filter yang belum memiliki aset.
* **Aksesibilitas & SEO Friendly:** Lolos pengujian Next.js static prerender dengan optimasi struktur HTML semantik, akses keyboard, serta tag meta SEO lengkap.

---

## Tech Stack & Alasan Pemilihan

### 1. Next.js (App Router)
* **Alasan:** Digunakan untuk mem-prerender halaman menjadi Static Content. Hal ini membuat waktu muat halaman berada di bawah 1 detik dan memaksimalkan optimasi mesin pencari (SEO) tanpa memerlukan server dinamis saat dijalankan.

### 2. Tailwind CSS
* **Alasan:** Memungkinkan implementasi token desain visual bergaya "Terminal Glass" (seperti hairline border halus, grid layout, dan backdrop blur) secara cepat, konsisten, dan sangat efisien dalam ukuran bundel akhir.

### 3. TypeScript
* **Alasan:** Menjamin tipe data link, project, dan sertifikat aman dari kesalahan pengetikan atau struktur properti yang tidak sesuai selama proses kompilasi produksi.

---

## Panduan Memulai (Getting Started)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini secara lokal di komputer Anda:

### Prasyarat
Pastikan Anda sudah menginstal Node.js (versi 18 ke atas) dan npm di perangkat Anda.

### 1. Klon Repositori
```bash
git clone https://github.com/Curzyori/Portofolio-12.git
cd Portofolio-12
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Jalankan Server Pengembangan
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

### Single Source of Truth: Cara Kustomisasi

Proyek ini dirancang agar mudah digunakan kembali oleh developer lain. Anda **tidak perlu mengubah kode komponen antarmuka (UI)** sama sekali. 

Untuk menyesuaikan isi data profil, tautan bisnis, daftar proyek, hingga PDF sertifikat, Anda **cukup mengubah isi data** pada file:
```
data/links.ts
```
Ubah properti objek di dalam file tersebut sesuai dengan informasi pribadi Anda, simpan file, dan Next.js akan memperbarui halaman secara otomatis.

---

## Lisensi (MIT License)

Proyek ini dilisensikan di bawah **MIT License** (Lisensi MIT). Kode sumber ini sepenuhnya terbuka (open source), bebas digunakan, dimodifikasi, dan didistribusikan untuk keperluan pribadi maupun komersial.

```text
MIT License

Copyright (c) 2026 Yuken Velino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
