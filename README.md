# SoundHub 🔊

Selamat datang di SoundHub! Sebuah web aplikasi penjelajah soundboard yang modern, elegan, dan responsif. Dibuat untuk menjelajahi ribuan suara dari MyInstants dengan antarmuka yang bersih dan kaya fitur. Proyek ini dibangun menggunakan Vue 3 dan Tailwind CSS.

### ✨ Screenshot

![SoundHub Screenshot](screenshot/sound-hub.png)

---

## 🚀 Fitur Utama

-   **Berbagai Kategori Suara**: Menampilkan suara dari kategori Trending (Indonesia), Terbaru (Recent), dan Terbaik (Best).
-   **Pencarian Real-time**: Cari suara favoritmu dengan cepat dan mudah.
-   **Desain Kartu Interaktif**: Setiap suara disajikan dalam bentuk kartu yang informatif dengan desain yang konsisten.
-   **Aksi Cepat**: Setiap kartu dilengkapi dengan tombol:
    -   ▶️ **Play**: Putar suara langsung dari kartu.
    -   📥 **Download**: Unduh file MP3 suara dengan sekali klik.
    -   🔗 **Salin Link**: Salin URL MP3 ke clipboard.
-   **Detail Suara**: Tampilkan detail lengkap suara (deskripsi, tags, uploader) dalam bentuk *modal* (popup) yang elegan.
-   **Desain Modern & Responsif**: Didesain dengan Tailwind CSS untuk tampilan yang optimal di berbagai perangkat, dari desktop hingga mobile.
-   **Tema Gelap**: Tampilan tema gelap yang nyaman di mata dengan latar belakang gradien animasi.

---

## 💻 Teknologi yang Digunakan

-   **Frontend**: Vue 3 (Composition API)
-   **Styling**: Tailwind CSS
-   **Routing**: Vue Router
-   **Ikon**: Heroicons
-   **Build Tool**: Vite

---

## 🔗 API

Proyek ini sepenuhnya bergantung pada data yang disediakan oleh **[MyInstants REST API](https://github.com/abdipr/myinstants-api)** yang dibuat oleh **[abdipr](https://github.com/abdipr)**. Terima kasih banyak telah menyediakan API yang luar biasa ini!

---

## 🛠️ Instalasi & Setup Lokal

Ingin menjalankan proyek ini di komputermu? Ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/ofikur/soundboard-hub.git

2.  **Masuk ke direktori proyek:**
    ```bash
    cd soundboard-hub
    ```

3.  **Install semua dependensi:**
    ```bash
    npm install
    ```

4.  **Jalankan server development:**
    ```bash
    npm run dev
    ```
    Aplikasi akan berjalan di `http://localhost:5173`.

### ⚙️ Konfigurasi Penting: CORS Proxy

Proyek ini menggunakan **Vite Proxy** untuk mengatasi masalah CORS saat melakukan fetch ke API MyInstants dari `localhost`. Konfigurasi ini terdapat di file `vite.config.js`:

```javascript
// vite.config.js
server: {
  proxy: {
    '/api': {
      target: '[https://myinstants-api.vercel.app](https://myinstants-api.vercel.app)',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  }
}
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **Lisensi MIT**.