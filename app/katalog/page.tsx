"use client";

import Image from "next/image";
import Link from "next/link";
import { Jolly_Lodger } from "next/font/google";
import { Creepster } from "next/font/google";
import { Nosifer } from 'next/font/google';
import { useState } from "react";

const nosifer = Nosifer({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

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
  const products = [
    { name: "Kafan Arwah Kelam", price: "Rp100.000", img: "/kat1.png" },
    { name: "Lampu Hias Gantung", price: "Rp120.000", img: "/kat2.png" },
    { name: "Kotak Musik Berhantu", price: "Rp90.000", img: "/kat5.png" },
    { name: "Lilin Aroma Misterius", price: "Rp66.000", img: "/kat3.png" },
    { name: "Kalung Perak Anti Kutukan", price: "Rp150.000", img: "/kat4.png" },
    { name: "Patung Pemujaan Kuno", price: "Rp150.000", img: "/produk3.png" },
    { name: "Topeng Hantu Horor", price: "Rp80.000", img: "/produk2.png" },
    { name: "Boneka Seram", price: "Rp66.000", img: "/produk4.png" },
    { name: "Lukisan", price: "Rp90.000", img: "/lukisan.jpg" },
    { name: "Cermin", price: "Rp50.000", img: "/cermin.jpg" },
    { name: "Bola Berapi", price: "Rp450.000", img: "/bol1.jpg" },
  ];

  // Tambahkan State Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-gray-800 max-w-7xl mx-auto rounded-lg mt-4 z-50">
        <h1 className={`text-4xl font-bold drop-shadow-lg ${jollyLodger.className}`}>
          <span className="text-blue-500">Haunted</span>
          <span className="text-red-500">Hollow</span>
        </h1>
        <div className={`flex space-x-8 ${jollyLodger.className}`}>
          <Link href="/" className="text-white text-2xl">Beranda</Link>
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
      </nav>

      {/* Limited Edition Section */}
      <section className="relative w-full bg-gray-900 text-white pt-32 pb-16">
        <div className="w-full max-w-7xl mx-auto"
          style={{
            backgroundImage: "url('/latar.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
          <div className="flex items-center py-12 px-8">
            {/* Left Image */}
            <div className="w-1/4 flex-shrink-0 pl-8">
              <img src="/patung.png" alt="Eclipsed Divinity Statue" className="w-full h-auto object-contain" />
            </div>

            {/* Right Content */}
            <div className="w-3/4 pl-12 pr-8">
              <h2 className={`text-3xl text-gray-100 ${jollyLodger.className} mb-1 text-left`}>
                LIMITED EDITION
              </h2>
              <h1 className={`text-5xl text-gray-100 ${nosifer.className} mb-3 text-left`}>
                <span className="text-blue-500">ECLIPSED</span>
                <span className="text-white"> DIVINITY</span>
              </h1>
              <h2 className={`text-2xl text-gray-100 ${jollyLodger.className} mb-4 text-left`}>
                premium style
              </h2>

              <p className="mt-4 text-left text-gray-200 max-w-2xl">
                Sosok dewa yang terpecah, terperangkap di antara kemuliaan dan kutukan abadi.
                Keindahan emasnya retak, menyisakan bayangan yang mengintai. Sebuah karya
                yang menggoda sekaligus mengerikan.
              </p>
              <div className="flex justify-start mt-6">
                <button
                  className={`rounded px-6 py-2 bg-red-800 text-white text-lg hover:bg-red-700 transition duration-300 shadow-lg ${creepster.className}`}
                  style={{ WebkitTextStroke: "1px black" }}
                >
                  Beli Sekarang!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR SALE section */}
      <div className="w-full max-w-7xl mx-auto px-4 mb-8">
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <h2 className={`mx-4 text-3xl text-white ${creepster.className}`}>Daftar Produk</h2>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>

      {/* Produk Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems.map((product, i) => (
            <div key={i} className="bg-gray-300 rounded overflow-hidden shadow-md">
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-2 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-700 mb-2">{product.price}</p>
                {product.name === "Kafan Arwah Kelam" && (
                  <Link href="/detailproduk">
                    <button className="bg-blue-800 hover:bg-red-700 text-white px-4 py-1 rounded text-sm">
                      Detail Produk
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 text-white'}`}
          >
            « Prev
          </button>
          <span className="text-white">
            Halaman {currentPage} dari {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 text-white'}`}
          >
            Next »
          </button>
        </div>
      </div>

      {/* button beli */}
      <div className="flex justify-center mb-16">
        <button className={`bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded ${jollyLodger.className} text-xl`}>
          Beli Sekarang
        </button>
      </div>

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
        </div>
      </footer>
    </div>
  );
}
