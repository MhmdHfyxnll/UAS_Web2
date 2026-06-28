# TASKS.md

# UAS Pemrograman Web 2 - E-Inventory

## Project Overview

Membangun aplikasi **Sistem Manajemen Inventaris Barang (E-Inventory)** menggunakan arsitektur terpisah (Decoupled Architecture):

* Backend: CodeIgniter 4 REST API
* Frontend: VueJS 3 SPA
* Database: MySQL/MariaDB
* UI: TailwindCSS
* HTTP Client: Axios

---

# Progress Checklist

## 1. Backend API (CodeIgniter 4)

### Authentication

* [ ] Membuat endpoint login
* [ ] Menghasilkan token autentikasi
* [ ] Mengembalikan response JSON
* [ ] Membuat Auth Filter
* [ ] Mendaftarkan Auth Filter pada Config/Filters.php
* [ ] Menguji endpoint tanpa token menghasilkan HTTP 401

### CORS

* [ ] Membuat CORS Filter
* [ ] Mengizinkan request dari frontend VueJS
* [ ] Menambahkan Access-Control-Allow-Origin
* [ ] Menambahkan Access-Control-Allow-Headers
* [ ] Menambahkan Access-Control-Allow-Methods

---

## 2. Database

### Tabel Kategori

* [ ] Membuat tabel kategori
* [ ] Primary Key id
* [ ] Field nama_kategori

### Tabel Supplier

* [ ] Membuat tabel supplier
* [ ] Primary Key id
* [ ] Field nama_supplier
* [ ] Field alamat
* [ ] Field telepon

### Tabel Barang

* [ ] Membuat tabel barang
* [ ] Primary Key id
* [ ] Foreign Key kategori_id
* [ ] Foreign Key supplier_id
* [ ] Field nama_barang
* [ ] Field stok
* [ ] Field harga

### Relasi

* [ ] kategori → barang
* [ ] supplier → barang

---

## 3. API CRUD Kategori

### Endpoint

* [ ] GET /api/categories
* [ ] GET /api/categories/{id}
* [ ] POST /api/categories
* [ ] PUT /api/categories/{id}
* [ ] DELETE /api/categories/{id}

### Testing

* [ ] GET berhasil
* [ ] POST berhasil
* [ ] PUT berhasil
* [ ] DELETE berhasil

---

## 4. API CRUD Supplier

### Endpoint

* [ ] GET /api/supplier
* [ ] GET /api/supplier/{id}
* [ ] POST /api/supplier
* [ ] PUT /api/supplier/{id}
* [ ] DELETE /api/supplier/{id}

### Testing

* [ ] GET berhasil
* [ ] POST berhasil
* [ ] PUT berhasil
* [ ] DELETE berhasil

---

## 5. API CRUD Barang

### Endpoint

* [ ] GET /api/barang
* [ ] GET /api/barang/{id}
* [ ] POST /api/barang
* [ ] PUT /api/barang/{id}
* [ ] DELETE /api/barang/{id}

### Testing

* [ ] GET berhasil
* [ ] POST berhasil
* [ ] PUT berhasil
* [ ] DELETE berhasil

---

# Frontend SPA (VueJS 3)

## 6. Routing

### Public Route

* [ ] Login
* [ ] Landing Page

### Protected Route

* [ ] Dashboard
* [ ] Kategori
* [ ] Supplier
* [ ] Barang

### Navigation Guard

* [ ] Menambahkan meta.requiresAuth
* [ ] Membuat router.beforeEach()
* [ ] Redirect ke login jika token tidak ada

---

## 7. Axios Configuration

### Request Interceptor

* [ ] Mengambil token dari localStorage
* [ ] Menambahkan Authorization Bearer Token

### Response Interceptor

* [ ] Menangani HTTP 401
* [ ] Menampilkan alert sesi berakhir
* [ ] Menghapus token
* [ ] Redirect ke login

---

## 8. Halaman Login

* [ ] Form username
* [ ] Form password
* [ ] Tombol login
* [ ] Integrasi API login
* [ ] Simpan token ke localStorage
* [ ] Redirect ke dashboard

---

## 9. Dashboard

* [ ] Total kategori
* [ ] Total supplier
* [ ] Total barang
* [ ] Mengambil data dari API
* [ ] Menggunakan TailwindCSS

---

## 10. Manajemen Kategori

### Tabel Data

* [ ] Menampilkan daftar kategori

### Tambah Data

* [ ] Modal tambah kategori
* [ ] Integrasi API POST
* [ ] Refresh data otomatis

### Edit Data

* [ ] Modal edit kategori
* [ ] Integrasi API PUT

### Hapus Data

* [ ] Konfirmasi hapus
* [ ] Integrasi API DELETE

---

## 11. Manajemen Supplier

### Tabel Data

* [ ] Menampilkan daftar supplier

### Tambah Data

* [ ] Modal tambah supplier

### Edit Data

* [ ] Modal edit supplier

### Hapus Data

* [ ] Hapus supplier

---

## 12. Manajemen Barang

### Tabel Data

* [ ] Menampilkan daftar barang

### Tambah Data

* [ ] Modal tambah barang
* [ ] Dropdown kategori
* [ ] Dropdown supplier

### Edit Data

* [ ] Modal edit barang

### Hapus Data

* [ ] Hapus barang

---

# UI TailwindCSS

## Layout

* [ ] Navbar
* [ ] Sidebar
* [ ] Dashboard Cards

## Form

* [ ] Input
* [ ] Select
* [ ] Button

## Data

* [ ] Tabel responsif
* [ ] Modal tambah/edit
* [ ] Alert sukses/error

---

# Pengujian

## Backend

* [ ] Uji seluruh endpoint dengan Postman
* [ ] Screenshot HTTP 401 Unauthorized
* [ ] Screenshot response sukses

## Frontend

* [ ] Login berhasil
* [ ] Logout berhasil
* [ ] Navigation Guard berjalan
* [ ] CRUD kategori berjalan
* [ ] CRUD supplier berjalan
* [ ] CRUD barang berjalan

---

# Dokumentasi README

* [ ] Judul proyek
* [ ] Deskripsi proyek
* [ ] Screenshot ERD/database
* [ ] Screenshot Login
* [ ] Screenshot Dashboard
* [ ] Screenshot CRUD Kategori
* [ ] Screenshot CRUD Supplier
* [ ] Screenshot CRUD Barang
* [ ] Screenshot Error 401
* [ ] Cara instalasi backend
* [ ] Cara instalasi frontend
* [ ] Link GitHub
* [ ] Link Video Presentasi

---

# Final Submission

* [ ] Push backend-api ke GitHub
* [ ] Push frontend-spa ke GitHub
* [ ] README lengkap
* [ ] Video presentasi maksimal 7 menit
* [ ] Upload video ke YouTube
* [ ] Submit Google Form UAS
