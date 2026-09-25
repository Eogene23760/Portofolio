# 🚀 Panduan Deploy ke Vercel

Website ini dibangun dengan **Next.js + TypeScript + Tailwind CSS** dan siap di-deploy ke **Vercel** (gratis).

---

## Langkah 1 — Push kode ke GitHub

Kalau belum punya repo di GitHub:

1. Buat repository baru di https://github.com/new (misalnya nama: `portfolio`). **Jangan** centang "Add README" agar tetap kosong.
2. Dari folder project ini, jalankan:

```bash
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<username-kamu>/portfolio.git
git push -u origin main
```

> Ganti `<username-kamu>` dengan username GitHub-mu.

---

## Langkah 2 — Connect ke Vercel

1. Buka https://vercel.com dan **Sign up / Log in** (paling mudah pakai akun GitHub).
2. Klik **"Add New…" → "Project"**.
3. Pilih repository `portfolio` dari daftar (izinkan Vercel akses GitHub bila diminta).
4. Vercel otomatis mendeteksi ini project **Next.js** — semua setting sudah benar secara default:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output: otomatis
5. Klik **"Deploy"**.

Tunggu ~1 menit. Selesai! 🎉 Website akan live di URL seperti:
`https://portfolio-xxxx.vercel.app`

---

## Langkah 3 — Update otomatis

Setiap kali kamu `git push` ke branch `main`, Vercel **otomatis build & deploy ulang**. Tidak perlu klik apa-apa lagi.

```bash
git add .
git commit -m "Update content"
git push
```

---

## Cara Mengganti Konten

Semua konten ada di **`src/data/site.ts`** — edit di sana tanpa menyentuh kode komponen:

- **Identitas & sosial** → objek `site`
- **Teks About** → objek `about`
- **Proyek UI/UX** → array `projects`
- **Foto galeri** → array `photos`

### Mengganti gambar placeholder dengan foto asli
Saat ini semua gambar masih **placeholder**. Untuk memakai foto asli:

1. Simpan file gambar ke folder `public/` (mis. `public/photos/photo-1.jpg`).
2. Ganti komponen `<Placeholder />` dengan `<Image />` dari `next/image`, contoh:

```tsx
import Image from "next/image";

<Image src="/photos/photo-1.jpg" alt="Street shot" width={800} height={800} />
```

Beri tahu saya kalau mau dibantu menyambungkan foto asli — tinggal kirim filenya.

---

## (Opsional) Domain Sendiri

Di dashboard Vercel → project → **Settings → Domains**, kamu bisa menambahkan domain kustom (mis. `paskaliseogene.com`) dan mengikuti instruksi DNS-nya.

---

## Ringkasan Perintah

| Aksi | Perintah |
|---|---|
| Jalankan lokal | `npm run dev` → buka http://localhost:3000 |
| Build produksi | `npm run build` |
| Cek lint | `npm run lint` |
