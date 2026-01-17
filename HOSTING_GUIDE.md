# Panduan Hosting Portfolio Website

Website portfolio ini adalah website statis (HTML, CSS, JavaScript) yang bisa di-hosting dengan mudah di berbagai platform gratis.

## Opsi Hosting Gratis Terbaik

### 1. **Vercel** (Paling Mudah & Recommended)
- **Website**: https://vercel.com
- **Cara**:
  1. Buat akun di Vercel (bisa pakai GitHub)
  2. Install Vercel CLI: `npm i -g vercel`
  3. Di folder project, jalankan: `vercel`
  4. Ikuti instruksi di terminal
  5. Website langsung online!

**Atau via GitHub:**
1. Push project ke GitHub repository
2. Login ke Vercel
3. Klik "New Project"
4. Import repository dari GitHub
5. Deploy otomatis!

### 2. **Netlify** (Sangat Mudah)
- **Website**: https://netlify.com
- **Cara**:
  1. Buat akun di Netlify
  2. Drag & drop folder project ke Netlify
  3. Atau connect dengan GitHub untuk auto-deploy
  4. Website langsung online!

### 3. **GitHub Pages** (Gratis & Terpercaya)
- **Website**: https://pages.github.com
- **Cara**:
  1. Buat repository di GitHub (misal: `portofolio`)
  2. Push semua file ke repository
  3. Buka Settings > Pages
  4. Pilih branch `main` dan folder `/ (root)`
  5. Website akan tersedia di: `https://username.github.io/portofolio`

### 4. **Cloudflare Pages** (Cepat & Gratis)
- **Website**: https://pages.cloudflare.com
- **Cara**:
  1. Buat akun Cloudflare
  2. Connect dengan GitHub
  3. Pilih repository
  4. Deploy otomatis!

## Persiapan Sebelum Hosting

### 1. Pastikan File Lengkap
Pastikan folder project berisi:
- `index.html`
- `styles.css`
- `script.js`
- File lain yang diperlukan

### 2. Test Lokal
Pastikan website berjalan dengan baik di localhost:
```bash
python3 -m http.server 8000
```
Buka `http://localhost:8000` dan test semua fitur.

### 3. Optimasi (Opsional)
- Minify CSS dan JavaScript untuk performa lebih baik
- Optimasi gambar jika ada
- Pastikan semua link external (CDN) masih berfungsi

## Langkah-Langkah Hosting dengan Vercel (Recommended)

### Via Command Line:
```bash
# Install Vercel CLI
npm install -g vercel

# Di folder project
cd /Users/muhammadzaidalfatih/portofolio

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (pilih akun)
# - Link to existing project? N
# - Project name? (nama project)
# - Directory? ./
# - Override settings? N
```

### Via GitHub:
1. **Buat Repository GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/portofolio.git
   git push -u origin main
   ```

2. **Deploy di Vercel:**
   - Login ke https://vercel.com
   - Klik "New Project"
   - Import repository dari GitHub
   - Klik "Deploy"
   - Website langsung online!

## Langkah-Langkah Hosting dengan Netlify

1. **Buat Akun**: https://app.netlify.com/signup
2. **Drag & Drop**:
   - Buka https://app.netlify.com/drop
   - Drag folder project ke halaman tersebut
   - Website langsung online!
3. **Atau via GitHub**:
   - Connect dengan GitHub
   - Pilih repository
   - Deploy otomatis

## Langkah-Langkah Hosting dengan GitHub Pages

1. **Buat Repository di GitHub**
2. **Push Project**:
   ```bash
   git init
   git add .
   git commit -m "Portfolio website"
   git remote add origin https://github.com/username/portofolio.git
   git push -u origin main
   ```
3. **Aktifkan GitHub Pages**:
   - Buka repository di GitHub
   - Settings > Pages
   - Source: Deploy from branch
   - Branch: `main` / `(root)`
   - Save
4. **Website akan tersedia di**: `https://username.github.io/portofolio`

## Custom Domain (Opsional)

Setelah hosting, Anda bisa menambahkan custom domain:
- Beli domain di Namecheap, GoDaddy, atau Cloudflare
- Tambahkan DNS records sesuai instruksi platform hosting
- Update domain di settings platform hosting

## Tips

1. **Auto-Deploy**: Gunakan GitHub + Vercel/Netlify untuk auto-deploy setiap push
2. **HTTPS**: Semua platform di atas sudah include HTTPS gratis
3. **CDN**: Vercel dan Netlify sudah include CDN global
4. **Analytics**: Tambahkan Google Analytics jika perlu tracking

## Troubleshooting

### Website tidak muncul:
- Pastikan file `index.html` ada di root folder
- Check console browser untuk error
- Pastikan semua path file benar (relative path)

### CSS/JS tidak load:
- Pastikan path file benar
- Check apakah file ada di server
- Pastikan tidak ada CORS issue

### 404 Error:
- Pastikan `index.html` ada
- Check routing di hosting platform

## Rekomendasi

**Untuk pemula**: Gunakan **Netlify** (drag & drop) atau **Vercel** (via GitHub)
**Untuk yang sudah familiar dengan Git**: Gunakan **GitHub Pages**
**Untuk performa terbaik**: Gunakan **Vercel** atau **Cloudflare Pages**

---

**Selamat! Website portfolio Anda siap di-hosting! 🚀**

