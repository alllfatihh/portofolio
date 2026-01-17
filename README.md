# Portfolio Website

Portfolio website modern dan responsif dengan desain minimalis ala Type8 Studio. Dibuat untuk menampilkan project-project dan pengalaman profesional Anda.

## ✨ Fitur

- 🎨 Desain minimalis dan modern (inspirasi Type8 Studio)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Animasi smooth dan interaktif
- ⚡ Performance optimized
- 🎯 SEO friendly
- ♿ Accessible dan user-friendly
- 🎭 Counter animation untuk statistik
- 🌊 Parallax effects

## 📁 Struktur File

```
portofolio/
├── index.html      # Struktur HTML utama
├── styles.css      # Styling dan desain
├── script.js       # JavaScript untuk interaktivitas
└── README.md       # Dokumentasi
```

## 🚀 Cara Menggunakan

1. **Clone atau download repository ini**

2. **Jalankan dengan local server** (disarankan):
   ```bash
   # Menggunakan Python
   python3 -m http.server 8000
   
   # Menggunakan Node.js (http-server)
   npx http-server -p 8000
   
   # Menggunakan PHP
   php -S localhost:8000
   ```

3. Buka browser dan akses `http://localhost:8000`

## 🎨 Kustomisasi

### 1. Mengubah Informasi Pribadi

#### Nama dan Brand
Edit di `index.html`:
- **Brand di navbar**: Ganti `MZF` dengan inisial atau nama Anda
- **Hero title**: Ganti nama di hero section
- **Footer**: Ganti nama di footer

#### About Section
Edit section `#about` di `index.html`:
- Ubah deskripsi tentang Anda
- Sesuaikan statistik (Projects, Clients, Years)

#### Contact Information
Edit section `#contact` di `index.html`:
- Ganti email: `your.email@example.com`
- Update link social media (GitHub, LinkedIn, Instagram)

### 2. Menambahkan/Mengedit Projects

Edit array `projects` di file `script.js`:

```javascript
const projects = [
    {
        id: 1,
        title: "Nama Project Anda",
        description: "Deskripsi lengkap tentang project Anda",
        tags: ["React", "Node.js", "MongoDB"], // Teknologi yang digunakan
        image: "🛒", // Emoji atau icon (bisa diganti dengan URL gambar)
        demoUrl: "https://your-demo-url.com", // URL demo project
        githubUrl: "https://github.com/username/repo" // URL repository GitHub
    },
    // Tambahkan project lain di sini
];
```

**Tips:**
- Untuk menggunakan gambar, ganti emoji dengan URL: `image: "https://example.com/image.jpg"`
- Jika tidak ada demo, biarkan `demoUrl: "#"`
- Jika project private, biarkan `githubUrl: "#"`

### 3. Mengubah Warna Tema

Edit variabel CSS di `styles.css` (baris awal):

```css
:root {
    --primary-color: #000000;      /* Warna utama (hitam) */
    --secondary-color: #ffffff;     /* Warna sekunder (putih) */
    --accent-color: #666666;        /* Warna aksen (abu-abu) */
    --text-color: #1a1a1a;          /* Warna teks utama */
    --text-light: #666666;          /* Warna teks sekunder */
    --bg-color: #ffffff;            /* Background utama */
    --bg-light: #fafafa;            /* Background sekunder */
    --bg-dark: #000000;             /* Background gelap */
    --border-color: #e5e5e5;        /* Warna border */
}
```

### 4. Mengubah Font

Font saat ini menggunakan:
- **Space Grotesk** untuk heading
- **Inter** untuk body text

Untuk mengubah font, edit di `index.html` (baris 11) dan `styles.css` (di bagian `body` dan `.hero-title`).

### 5. Mengubah Meta Tags

Edit di `index.html` (bagian `<head>`):
```html
<meta name="description" content="Deskripsi portfolio Anda">
<title>Nama Anda - Portfolio</title>
```

## 📱 Responsive Design

Website sudah fully responsive dengan breakpoints:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🎯 SEO Optimization

- Meta description sudah diset
- Semantic HTML structure
- Alt text untuk images (jika menggunakan gambar)
- Clean URL structure

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur website
- **CSS3** - Styling dengan CSS Variables
- **Vanilla JavaScript (ES6+)** - Interaktivitas
- **Google Fonts** - Typography (Inter & Space Grotesk)

## 📝 Checklist Kustomisasi

Sebelum deploy, pastikan Anda sudah:

- [ ] Mengganti nama dan brand di navbar
- [ ] Mengupdate hero section dengan nama Anda
- [ ] Mengedit about section dengan informasi pribadi
- [ ] Menyesuaikan statistik (Projects, Clients, Years)
- [ ] Menambahkan/mengedit projects di `script.js`
- [ ] Mengupdate informasi kontak (email, social media)
- [ ] Mengubah meta description dan title
- [ ] Mengganti nama di footer
- [ ] Menambahkan link GitHub/LinkedIn/Instagram yang valid
- [ ] Test di berbagai device (mobile, tablet, desktop)

## 🚀 Deploy

Anda bisa deploy website ini ke berbagai platform:

- **Netlify**: Drag & drop folder atau connect GitHub
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Push ke GitHub dan enable Pages
- **Cloudflare Pages**: Connect GitHub repository

## 📄 Lisensi

Bebas digunakan untuk keperluan pribadi atau komersial.

## 💡 Tips

1. **Gunakan gambar berkualitas tinggi** untuk project images
2. **Update projects secara berkala** dengan project terbaru
3. **Test di berbagai browser** sebelum deploy
4. **Optimize images** sebelum upload untuk performa lebih baik
5. **Backup file** sebelum melakukan perubahan besar

---

**Selamat menggunakan portfolio website Anda! 🎉**

Jika ada pertanyaan atau butuh bantuan, silakan buat issue di repository ini.
