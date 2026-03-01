# CV Bangda Bertiga Karya — Company Profile Website

Website company profile profesional dibangun dengan **Next.js 15** + TypeScript + Tailwind CSS.

## 🚀 Cara Menjalankan

### Prasyarat
- **Node.js** versi 18 atau lebih baru → [Download di nodejs.org](https://nodejs.org)

### Langkah-langkah

```bash
# 1. Masuk folder project
cd bangda-bertiga-karya

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka **http://localhost:3000** di browser.

## 🖼️ Mengganti Logo

Logo di navbar dan footer menggunakan file `/public/favicon.ico`.

**Cara ganti logo:**
1. Siapkan file logo Anda (format: `.ico`, `.png`, atau `.svg`)
2. Rename menjadi `favicon.ico` (atau sesuaikan nama di `src/components/Logo.tsx`)
3. Letakkan di folder `/public/`
4. Refresh browser

Untuk format `.png` atau `.svg`, edit `src/components/Logo.tsx` baris `src`:
```tsx
<Image src="/logo.png" ... />  // ganti sesuai nama file Anda
```

## 📁 Struktur Project

```
bangda-bertiga-karya/
├── public/
│   └── favicon.ico          ← Ganti dengan logo Anda
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout + SEO + fonts
│   │   ├── page.tsx         # Halaman utama
│   │   └── globals.css      # Global styles + animasi
│   └── components/
│       ├── Logo.tsx         # Reusable logo component
│       ├── Navbar.tsx       # Sticky navbar + drawer mobile
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # Tentang perusahaan
│       ├── Services.tsx     # 3 pilar layanan
│       ├── WhyUs.tsx        # Keunggulan
│       ├── Contact.tsx      # Form kontak
│       └── Footer.tsx       # Footer
├── package.json
├── tailwind.config.ts
└── next.config.ts
```

## 🛠️ Build Production

```bash
npm run build
npm run start
```
