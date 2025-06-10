"use client";

import Image from "next/image";
import Link from "next/link";
import { Jolly_Lodger } from "next/font/google";
import { Creepster } from "next/font/google";
import { useState } from 'react';
import { useRouter } from "next/navigation";

// Initialize the Jolly Lodger font
const jollyLodger = Jolly_Lodger({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


export default function Home() {
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();

  const user = {
    name: "Alip",
    email: "alipalay@gmail.com",
    image: "/demian.jpg", // ganti sesuai path gambar
  };
  return (
    <div className=""> {/* Add padding to avoid content overlap */}
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-gray-800 max-w-7xl mx-auto rounded-lg mt-4 z-50">
        <h1 className={`text-4xl font-bold drop-shadow-lg ${jollyLodger.className}`}>
          <span className="text-blue-500">Haunted</span>
          <span className="text-red-500">Hollow</span>
        </h1>
        <div className={`flex space-x-8 ${jollyLodger.className}`}> {/* Adjusted spacing */}
          <Link href="#" className="text-white text-2xl">Beranda</Link>
          <Link href="/katalog" className="text-white text-2xl">Katalog</Link>
          <Link href="/kontak" className="text-white text-2xl">Kontak</Link>
          <Link href="/profile" className="text-white text-2xl">Profil</Link>
        </div>
        <div className="space-x-2">
          <a href="/register">
            <button className={`px-4 py-2 rounded text-white text-2xl ${jollyLodger.className}`}>Register</button>
          </a>

          <a href="/login">
            <button className={`bg-blue-500 px-4 py-2 rounded text-white text-2xl ${jollyLodger.className}`}>Login</button>
          </a>
        </div>
        <div className="relative inline-block">
          <Image
            src={user.image}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full cursor-pointer border-2 border-white"
            onClick={() => setShowProfile(!showProfile)}
          />

          {showProfile && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 p-4 text-gray-800">
              {/* Tombol close (❌) */}
              <button
                onClick={() => setShowProfile(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
              >
                &times;
              </button>

              <div className="flex items-center space-x-4 mt-4">
                <Image
                  src={user.image}
                  alt="Profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  console.log('Logout logic here');
                  router.push('/login');
                }}
                className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Logout
              </button>

            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative text-center h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/awal.png')" }} // Ganti gambar kastil
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay gelap */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h2
            className={`text-9xl font-bold text-blue-400 ${jollyLodger.className} drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]`}
            style={{ WebkitTextStroke: "1px white" }}
          >
            Haunted
          </h2>
          <h2
            className={`text-9xl font-bold text-red-500 ${jollyLodger.className} drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]`}
            style={{ WebkitTextStroke: "1px white" }}
          >
            Hollow
          </h2>
          <p className={`mt-6 text-2xl text-gray-300 ${jollyLodger.className} px-4`}>
            Jangan terlalu lama menatap kegelapan, karena mungkin ada sesuatu yang balik menatapmu. 👀💀👻
          </p>
        </div>
      </header>

      {/* Produk Unggulan */}
      <section className="bg-gray-900 py-16 px-4 relative" style={{ backgroundImage: "url('/HairCre.png')" }}>
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className={`text-4xl font-bold text-red-500 text-center mb-12 ${creepster.className}`} style={{ WebkitTextStroke: "0.8px white" }}>
            PRODUK UNGGULAN
          </h2>

          {/* Product List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
            {/* Produk 1 */}
            <div className="rounded-xl overflow-hidden bg-red-700 shadow-lg transform transition duration-300 hover:scale-105 hover:-translate-y-3 hover:z-20 hover:shadow-2xl hover:shadow-red-500/50">
              <div className="relative p-4 bg-red-700 rounded-t-xl">
                <img
                  src="/produk1.png"
                  alt="Lilin Aroma Misterius"
                  className="h-28 w-full object-cover rounded-lg"
                />
                <span className="absolute top-2 right-2 bg-white text-black text-sm px-2 py-1 rounded-full">
                  <span className="text-yellow-500">★</span> 4
                </span>
              </div>
              <div className="py-3 px-2 text-left">
                <h3 className={`text-lg font-semibold text-white ${creepster.className}`}>Lilin Aroma Misterius</h3>
                <p className="text-sm text-white">Rp80.000</p>
              </div>
            </div>

            {/* Produk 2 */}
            <div className="rounded-xl overflow-hidden bg-red-700 shadow-lg transform transition duration-300 hover:scale-105 hover:-translate-y-3 hover:z-20 hover:shadow-2xl hover:shadow-red-500/50">
              <div className="relative p-4 bg-red-700 rounded-t-xl">
                <img
                  src="/produk2.png"
                  alt="Topeng Hantu Horor"
                  className="h-28 w-full object-cover rounded-lg"
                />
                <span className="absolute top-2 right-2 bg-white text-black text-sm px-2 py-1 rounded-full">
                  <span className="text-yellow-500">★</span> 4.5
                </span>
              </div>
              <div className="py-3 px-2 text-left">
                <h3 className={`text-lg font-semibold text-white ${creepster.className}`}>Topeng Hantu Horor</h3>
                <p className="text-sm text-white">Rp80.000</p>
              </div>
            </div>

            {/* Produk 3 */}
            <div className="rounded-xl overflow-hidden bg-red-700 shadow-lg transform transition duration-300 hover:scale-105 hover:-translate-y-3 hover:z-20 hover:shadow-2xl hover:shadow-red-500/50">
              <div className="relative p-4 bg-red-700 rounded-t-xl">
                <img
                  src="/produk3.png"
                  alt="Patung Pemujaan Kuno"
                  className="h-28 w-full object-cover rounded-lg"
                />
                <span className="absolute top-2 right-2 bg-white text-black text-sm px-2 py-1 rounded-full">
                  <span className="text-yellow-500">★</span> 5
                </span>
              </div>
              <div className="py-3 px-2 text-left">
                <h3 className={`text-lg font-semibold text-white ${creepster.className}`}>Patung Pemujaan Kuno</h3>
                <p className="text-sm text-white">Rp150.000</p>
              </div>
            </div>

            {/* Produk 4 */}
            <div className="rounded-xl overflow-hidden bg-red-700 shadow-lg transform transition duration-300 hover:scale-105 hover:-translate-y-3 hover:z-20 hover:shadow-2xl hover:shadow-red-500/50">
              <div className="relative p-4 bg-red-700 rounded-t-xl">
                <img
                  src="/produk4.png"
                  alt="Boneka Seram"
                  className="h-28 w-full object-cover rounded-lg"
                />
                <span className="absolute top-2 right-2 bg-white text-black text-sm px-2 py-1 rounded-full">
                  <span className="text-yellow-500">★</span> 4
                </span>
              </div>
              <div className="py-3 px-2 text-left">
                <h3 className={`text-lg font-semibold text-white ${creepster.className}`}>Boneka Seram</h3>
                <p className="text-sm text-white">Rp66.000</p>
              </div>
            </div>
          </div>

          <p className={`mt-16 text-5xl text-red-700 text-center break-words ${jollyLodger.className}`}>
            Yakin Gamau Beli Sekarang?!<br />
            Ambil koleksi horor pilihanmu dengan diskon hingga 30%<br />
            sebelum mereka menemukanmu lebih dulu…
          </p>

          {/* Tombol Beli Sekarang */}
          <div className="flex justify-center mt-8">
            <button
              className={`rounded-lg px-8 py-2 bg-blue-500 text-white text-lg hover:bg-blue-600 transition duration-300 shadow-lg ${creepster.className}`}
            >
              Beli Sekarang!
            </button>
          </div>
        </div>
      </section>

      {/* Testimoni pelanggan */}
      <section
        className="text-center bg-gray-900 py-16 px-4 relative"
        style={{ backgroundImage: "url('/testimoni-bg.png')" }}
      >
        <h2
          className={`text-4xl font-bold text-red-500 mb-8 ${creepster.className}`}
          style={{ WebkitTextStroke: "0.8px white" }}
        >
          TESTIMONI PELANGGAN
        </h2>
        <p
          className={`text-xl text-gray-200 mb-12 ${jollyLodger.className}`}
        >
          Jangan abaikan ini. Tuliskan sesuatu, atau bisikan itu akan terus menghantui telingamu 🤫
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-8">
          {/* Testimoni pelanggan1 */}
          <div className="bg-gray-700 rounded-lg p-8 shadow-lg relative">
            <span className="absolute top-4 right-4 text-yellow-500">★★★★★</span>
            <div className="flex flex-col items-start">
              <img
                src="/pesulap.jpg"
                alt="Pesulap Merah"
                className="h-20 w-20 rounded object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Pesulap Merah</h3>
              <p className="text-gray-300 mt-4 text-left text-lg">
                "Sejak meletakkan ini di kamar, aku merasa lebih nyaman. Bahkan suara-suara itu sudah tidak terdengar lagi."
              </p>
            </div>
          </div>
          {/* Testimoni pelanggan2 */}
          <div className="bg-gray-700 rounded-lg p-8 shadow-lg relative">
            <span className="absolute top-4 right-4 text-yellow-500">★★★★★</span>
            <div className="flex flex-col items-start">
              <img
                src="/sara.jpg"
                alt="Sara Wijayanto"
                className="h-20 w-20 rounded object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Sara Wijayanto</h3>
              <p className="text-gray-300 mt-4 text-left text-lg">
                "Setelah barang ini sampai, aku tidur lebih nyenyak. Tidak ada suara langkah lagi di lorong…"
              </p>
            </div>
          </div>
          {/* Testimoni pelanggan3 */}
          <div className="bg-gray-700 rounded-lg p-8 shadow-lg relative">
            <span className="absolute top-4 right-4 text-yellow-500">★★★★★</span>
            <div className="flex flex-col items-start">
              <img
                src="/demian.jpg"
                alt="Demian"
                className="h-20 w-20 rounded object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Demian</h3>
              <p className="text-gray-300 mt-4 text-left text-lg">
                "Aku kira cuma mitos, tapi setelah membeli ini, anjingku berhenti menggonggong ke arah kosong."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artikel */}
      <section
        className="text-center bg-gray-900 py-16 px-4 relative"
        style={{ backgroundImage: "url('/artikel-bg.png')" }} // Background 
      >
        <h2
          className={`text-4xl font-bold text-red-500 mb-12 ${creepster.className}`}
          style={{ WebkitTextStroke: "0.8px white" }}
        >
          ARTIKEL
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Artikel 1 */}
          <div className="flex flex-col">
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg mb-3">
              <img
                src="/artikel1.png"
                alt="Bisikan dari Kegelapan"
                className="w-full h-48 object-cover"
              />
            </div>
            <p className={`text-red-500 text-sm mb-1 text-left ${jollyLodger.className}`}>
              11 Jan 2025
            </p>
            <h3
              className={`text-lg font-semibold text-white mb-2 text-left ${jollyLodger.className}`}
            >
              Bisikan dari Kegelapan: Temukan Koleksi Horor di Haunted Hollow
            </h3>
            <p className="text-gray-300 text-sm mb-4 text-left">
              See how pivoting to Webflow changed one person's sales strategy and allowed him to attract...
            </p>
            <Link href="#" className="text-gray-100 hover:underline flex items-center text-left">
              Read More <span className="ml-2">→</span>
            </Link>
          </div>
          {/* Artikel 2 */}
          <div className="flex flex-col">
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg mb-3">
              <img
                src="/artikel2.png"
                alt="Dunia Lain Menanti"
                className="w-full h-48 object-cover"
              />
            </div>
            <p className={`text-red-500 text-sm mb-1 text-left ${jollyLodger.className}`}>
              17 Feb 2025
            </p>
            <h3
              className={`text-lg font-semibold text-white mb-2 text-left ${jollyLodger.className}`}
            >
              Dunia Kain Menanti di Haunted Hollow: Apakah Kamu Siap?
            </h3>
            <p className="text-gray-300 text-sm mb-4 text-left">
              See how pivoting to Webflow changed one person's sales strategy and allowed him to attract...
            </p>
            <Link href="#" className="text-gray-100 hover:underline flex items-center text-left">
              Read More <span className="ml-2">→</span>
            </Link>
          </div>
          {/* Artikel 3 */}
          <div className="flex flex-col">
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg mb-3">
              <img
                src="/artikel3.png"
                alt="Merinding di Haunted Hollown"
                className="w-full h-48 object-cover"
              />
            </div>
            <p className={`text-red-500 text-sm mb-1 text-left ${jollyLodger.className}`}>
              25 Mar 2025
            </p>
            <h3
              className={`text-lg font-semibold text-white mb-2 text-left ${jollyLodger.className}`}
            >
              Merinding di Haunted Hollow: Koleksi Horor yang Bikin Deg-degan
            </h3>
            <p className="text-gray-300 text-sm mb-4 text-left">
              See how pivoting to Webflow changed one person's sales strategy and allowed him to attract...
            </p>
            <Link href="#" className="text-gray-100 hover:underline flex items-center text-left">
              Read More <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Profil Toko */}
      <section className="bg-gray-900 py-16 px-4 relative" style={{ backgroundImage: "url('/HairCre.png')" }}>
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className={`text-4xl font-bold text-red-500 text-center mb-12 ${creepster.className}`} style={{ WebkitTextStroke: "0.8px white" }}>
            PROFIL TOKO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col">
              <div className="mb-8 text-center md:text-left">
                <h3 className={`text-6xl text-blue-500 text-center ${jollyLodger.className} mb-4`} style={{ WebkitTextStroke: "0.5px white" }}>
                  <span className="text-blue-400">Haunted</span>
                  <span className="text-red-500">Hollow</span>
                </h3>
              </div>

              <div className="text-gray-300 text-sm space-y-4">
                <p>
                  Sejak tahun 1986, Haunted Hollow telah menjadi lebih dari sekadar toko biasa. Berlokasi
                  di Jl. Kegelapan No. 13, Kota Bayangan tempat ini dibangun dengan suasana mending,
                  yang harus dilihat dengan mata sendiri untuk dipercaya. Banyak yang datang kesini termasuk
                  orang-orang biasa, tapi banyak juga mereka yang sudah wafat gelisah resah, sesekali
                  mengaku mendengar bisikan samar saat mengambil barang tertentu. Akhirnya, barang-
                  barang di toko ini terkadang berpindah tempat sendiri—sebuah kejutan yang sebagainya di
                  alam semesta. Di sini kita harus hilang takut, dan anak tangga dari keremanga yang
                  mengatumya.
                </p>
                <p>
                  Pemilik toko, Pak Rangga yang hobinya berburu barang antik, menghabiskan tahun-tahun
                  penyusuran hingga mengumpulkan banyak hal tiadadua yang unik-upieku. Konon, ia adalah
                  generasi kelima yang menjaga toko ini, dari deretan sebelumnya yang telah tiada atau yang
                  tercatat. Setiap malam sebelum tutup, lilin-lilin kecil dinyalakan di sudut ruangan sebagai
                  penghormatan, katanya, bagi heheia sajak kala eda yang lalu. Yang inda, Haunted Hollow
                  bukan hanya tempat berjualan di bising, ini mengubah dan bintangan-bintangan.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/profil1.png"
                alt="Haunted Hollow Store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="/produk4.png"
                alt="Haunted Dolls"
                className="w-64-auto rounded-lg"
              />
            </div>

            <div className="flex flex-col order-1 md:order-2">
              <h3 className={`text-6xl text-blue-400 ${jollyLodger.className} mb-4 text-center md:text-center`}>
                Produk
              </h3>

              <div className="text-gray-300 text-sm space-y-4">
                <p>
                  Di Haunted Hollow, setiap barang memiliki aura misterius. Lilin ritual
                  berkelap-kelip sendiri, buku usang terkadang menampilkan tulisan baru, dan
                  cermin antik dikabarkan memantulkan bayangan yang bukan milik
                  pembelinya. Teh herbal spesial di sini juga disebut-sebut membawa
                  peminumnya ke dalam mimpi yang terasa terlalu nyata.
                </p>
                <p>
                  Rak kayu tua menyimpan boneka dan topeng kayu yang sering
                  ditemukan berubah posisi tanpa ada yang menyentuhnya. Jam tua di sudut
                  toko terkadang berhenti di waktu yang sama setiap malam. Setiap produk
                  tampak biasa, tetapi mereka menyimpan sesuatu
                  sebuah bisikan, sebuah rahasia, atau mungkin sekadar menunggu pemilik barunya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 text-white py-12 px-4" style={{ backgroundImage: "linear-gradient(to bottom, #7f1d1d, #450a0a)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h3 className={`text-4xl ${jollyLodger.className} mb-4`}>
              <span className="text-blue-400">Haunted</span>
              <span className="text-red-500">Hollow</span>
            </h3>
          </div>

          <div className="flex justify-center space-x-16 mb-8">
            <Link href="#" className="text-white hover:text-blue-400 underline">Beranda</Link>
            <Link href="/katalog" className="text-white hover:text-blue-400 underline">Katalog</Link>
            <Link href="/kontak" className="text-white hover:text-blue-400 underline">Kontak</Link>
            <Link href="/profile" className="text-white hover:text-blue-400 underline">Profil</Link>
          </div>

          <div className="text-center text-sm mb-6">
            <p>© 2025 | by HauntedHollow. All right reserved</p>
          </div>

          <div className="flex justify-center space-x-4">
            <Link href="#" aria-label="Facebook">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

