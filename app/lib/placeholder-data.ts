// seed-data.js - Data untuk aplikasi toko horor
// Data ini akan digunakan untuk mengisi database

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    nama: 'Admin',
    email: 'admin@horor-shop.com',
    password: '123456',
    role: 'admin'
  },
];

const pelanggan = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    nama: 'Katharina',
    email: 'katharina@email.com',
    alamat: 'Jl. Hantu No. 13, Jakarta Selatan',
    telepon: '081234567890'
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    nama: 'John',
    email: 'john@email.com',
    alamat: 'Jl. Pocong No. 7, Bandung',
    telepon: '081234567891'
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    nama: 'Lusia',
    email: 'lusia@email.com',
    alamat: 'Jl. Kuntilanak No. 9, Surabaya',
    telepon: '081234567892'
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    nama: 'Michael',
    email: 'michael@email.com',
    alamat: 'Jl. Tuyul No. 21, Yogyakarta',
    telepon: '081234567893'
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    nama: 'Sarah',
    email: 'sarah@email.com',
    alamat: 'Jl. Genderuwo No. 5, Semarang',
    telepon: '081234567894'
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    nama: 'Anton',
    email: 'anton@email.com',
    alamat: 'Jl. Sundel Bolong No. 3, Malang',
    telepon: '081234567895'
  },
];

const produk = [
  {
    id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    nama: 'Lilin Aroma Misterius',
    harga: 66000,
    deskripsi: 'Lilin aromaterapi dengan aroma misterius yang dapat menciptakan suasana mistis dan menenangkan.',
    gambar_url: '/products/lilin-aroma-misterius.jpg',
    kategori: 'Dekorasi',
    stok: 50,
    terjual: 2300
  },
  {
    id: 'fd105551-0f0d-4a9f-bc41-c559c8a17257',
    nama: 'Topeng Hantu Horor',
    harga: 75000,
    deskripsi: 'Topeng dengan desain hantu yang menyeramkan, cocok untuk kostum Halloween atau dekorasi.',
    gambar_url: '/products/topeng-hantu-horor.jpg',
    kategori: 'Kostum',
    stok: 30,
    terjual: 2500
  },
  {
    id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
    nama: 'Patung Pemujaan Kuno',
    harga: 150000,
    deskripsi: 'Replika patung pemujaan kuno dengan detail yang halus, memberikan nuansa mistis pada ruangan.',
    gambar_url: '/products/patung-pemujaan-kuno.jpg',
    kategori: 'Dekorasi',
    stok: 15,
    terjual: 2500
  },
  {
    id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
    nama: 'Boneka Seram',
    harga: 120000,
    deskripsi: 'Boneka dengan tampilan menyeramkan yang terinspirasi dari film-film horor klasik.',
    gambar_url: '/products/boneka-seram.jpg',
    kategori: 'Mainan',
    stok: 25,
    terjual: 2500
  },
];

const penjualan = [
  {
    id: 'INV-2023-0001',
    pelanggan_id: pelanggan[0].id, // Katharina
    produk_id: produk[0].id,       // Lilin Aroma Misterius
    jumlah: 3,
    total: 198000,                 // 66000 x 3
    status: 'Dikirim',
    tanggal: '2023-04-15T10:30:00Z'
  },
  {
    id: 'INV-2023-0002',
    pelanggan_id: pelanggan[1].id, // John
    produk_id: produk[0].id,       // Lilin Aroma Misterius
    jumlah: 1,
    total: 66000,                  // 66000 x 1
    status: 'Proses',
    tanggal: '2023-04-16T14:45:00Z'
  },
  {
    id: 'INV-2023-0003',
    pelanggan_id: pelanggan[2].id, // Lusia
    produk_id: produk[3].id,       // Boneka Seram
    jumlah: 2,
    total: 132000,                 // 66000 x 2
    status: 'Selesai',
    tanggal: '2023-04-14T09:15:00Z'
  },
  {
    id: 'INV-2023-0004',
    pelanggan_id: pelanggan[3].id, // Michael
    produk_id: produk[1].id,       // Topeng Hantu Horor
    jumlah: 2,
    total: 150000,                 // 75000 x 2
    status: 'Dikirim',
    tanggal: '2023-04-13T16:20:00Z'
  },
  {
    id: 'INV-2023-0005',
    pelanggan_id: pelanggan[4].id, // Sarah
    produk_id: produk[2].id,       // Patung Pemujaan Kuno
    jumlah: 1,
    total: 150000,                 // 150000 x 1
    status: 'Selesai',
    tanggal: '2023-04-12T11:00:00Z'
  },
];

const pendapatan = [
  { bulan: '2023-01', pendapatan: 5000000 },
  { bulan: '2023-02', pendapatan: 6200000 },
  { bulan: '2023-03', pendapatan: 7500000 },
  { bulan: '2023-04', pendapatan: 1300000 }, // Total penjualan yang ditampilkan: Rp 1.3M
];

const rating_toko = [
  { 
    id: '7f8d2fa0-d16c-4594-ac77-8b5d58bae7a5',
    nilai: 4.7,      // Rating toko: 4.7
    bulan: '2023-03',
    created_at: '2023-03-31T23:59:59Z'
  }
];

const pesanan = [
  {
    id_pesanan: 'PSN001',
    id_pelanggan: pelanggan[0].id,
    produk: 'Topeng Hantu Horor(1 Pcs)',
    total: 80000,
    tanggal: '2024-03-01T11:32:00',
    status: 'Sedang Diproses',
  },
  {
    id_pesanan: 'PSN002',
    id_pelanggan: pelanggan[1].id,
    produk: 'Topeng Hantu Horor(1 Pcs), Lilin Aroma Misterius(1 Pcs)',
    total: 146000,
    tanggal: '2024-09-06T14:32:00',
    status: 'Menunggu Pembayaran',
  },
  {
    id_pesanan: 'PSN003',
    id_pelanggan: pelanggan[2].id,
    produk: 'Boneka Seram (1 Pcs), Lilin Aroma Misterius(3 Pcs)',
    total: 132000,
    tanggal: '2024-09-25T10:22:00',
    status: 'Menunggu Pembayaran',
  },
  {
    id_pesanan: 'PSN004',
    id_pelanggan: pelanggan[3].id,
    produk: 'Karilan Arwah Kela (1 Pcs), Lampu Hias gantung(1 Pcs)',
    total: 220000,
    tanggal: '2024-04-30T08:46:00',
    status: 'Sedang Diproses',
  },
];

export { users, pelanggan, produk, penjualan, pendapatan, rating_toko, pesanan };