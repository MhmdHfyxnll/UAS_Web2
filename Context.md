# CONTEXT

Saya sedang mengerjakan Ujian Akhir Semester (UAS) mata kuliah Pemrograman Web 2.

Tema proyek yang dipilih adalah:

**Sistem Manajemen Inventaris Barang (E-Inventory)**

Aplikasi harus menggunakan arsitektur Decoupled Architecture (Backend dan Frontend terpisah).

Struktur repository:

* backend-api/ → CodeIgniter 4 REST API
* frontend-spa/ → VueJS 3 SPA

Teknologi wajib:

Backend:

* CodeIgniter 4
* RESTful API
* MySQL/MariaDB
* Resource Controller
* Token Authentication
* CORS Filter

Frontend:

* VueJS 3
* Vue Router
* Axios
* TailwindCSS
* Single Page Application (SPA)

# DATABASE REQUIREMENTS

Minimal memiliki 3 tabel yang saling berelasi.

Gunakan tabel berikut:

1. kategori

* id
* nama_kategori

2. supplier

* id
* nama_supplier
* alamat
* telepon

3. barang

* id
* nama_barang
* kategori_id (FK)
* supplier_id (FK)
* stok
* harga

Relasi:

* kategori 1:N barang
* supplier 1:N barang

# BACKEND TASKS

Buat REST API lengkap menggunakan Resource Controller CI4.

Endpoint yang wajib tersedia:

Kategori:

* GET /api/categories
* GET /api/categories/{id}
* POST /api/categories
* PUT /api/categories/{id}
* DELETE /api/categories/{id}

Supplier:

* GET /api/supplier
* GET /api/supplier/{id}
* POST /api/supplier
* PUT /api/supplier/{id}
* DELETE /api/supplier/{id}

Barang:

* GET /api/barang
* GET /api/barang/{id}
* POST /api/barang
* PUT /api/barang/{id}
* DELETE /api/barang/{id}

Login:

* POST /api/login

Gunakan format JSON untuk semua request dan response.

# AUTHENTICATION REQUIREMENTS

Buat sistem login sederhana.

Ketentuan:

* Login mengembalikan token.
* Token disimpan di localStorage frontend.
* Endpoint POST, PUT, DELETE wajib diproteksi menggunakan Filter.
* Request tanpa Authorization Bearer Token harus menghasilkan HTTP 401 Unauthorized.
* Buat contoh filter AuthFilter.
* Daftarkan filter pada Config/Filters.php.

# CORS REQUIREMENTS

Buat CORS filter global yang mengizinkan frontend VueJS mengakses API.

Tambahkan:

* Access-Control-Allow-Origin
* Access-Control-Allow-Headers
* Access-Control-Allow-Methods

# FRONTEND TASKS

Gunakan VueJS 3 dan Vue Router.

Halaman yang harus dibuat:

1. Login
2. Dashboard
3. Data Kategori
4. Data Supplier
5. Data Barang

Gunakan SPA tanpa reload halaman.

# ROUTER REQUIREMENTS

Gunakan:

meta: {
requiresAuth: true
}

untuk:

* Dashboard
* Kategori
* Supplier
* Barang

Buat Navigation Guard:

router.beforeEach()

yang:

* Mengecek token di localStorage.
* Jika belum login redirect ke /login.
* Jika sudah login lanjut ke halaman.

# AXIOS REQUIREMENTS

Buat axios interceptor global.

Request Interceptor:

* Ambil token dari localStorage.
* Tambahkan Authorization Bearer Token otomatis.

Response Interceptor:

* Tangkap error 401.
* Tampilkan alert "Sesi login telah berakhir".
* Hapus token.
* Redirect ke halaman login.

# UI REQUIREMENTS

Gunakan TailwindCSS.

Seluruh halaman wajib menggunakan Tailwind utility classes.

Komponen:

* Navbar
* Sidebar
* Card dashboard
* Form input
* Modal tambah/edit
* Tabel data
* Tombol aksi

Jangan gunakan CSS tradisional jika bisa menggunakan Tailwind.

# DASHBOARD REQUIREMENTS

Tampilkan ringkasan:

* Total Kategori
* Total Supplier
* Total Barang

Data harus diambil dari API.

# CRUD REQUIREMENTS

Untuk:

* Kategori
* Supplier
* Barang

Implementasikan:

* List Data
* Tambah Data
* Edit Data
* Hapus Data

Gunakan modal form untuk tambah dan edit.

Setelah berhasil tambah/edit/hapus:

* Refresh data otomatis tanpa reload halaman.

# RULES

1. Jangan mengubah struktur folder yang sudah ada.
2. Jangan membuat framework selain CI4 dan VueJS.
3. Semua komunikasi data harus melalui Axios.
4. Semua response API menggunakan JSON.
5. Gunakan kode yang clean dan mudah dipahami mahasiswa.
6. Berikan kode lengkap, bukan pseudo-code.
7. Jika membuat file baru, tampilkan lokasi file.
8. Jika memodifikasi file, tampilkan isi file yang diperbarui secara lengkap.
9. Pastikan seluruh fitur sesuai dengan spesifikasi UAS.
10. Prioritaskan penyelesaian fitur yang masih belum berfungsi sebelum melakukan refactoring.
