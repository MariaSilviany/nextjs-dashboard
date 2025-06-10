"use client";

import Image from "next/image";
import Link from "next/link";
import { Jolly_Lodger, Creepster } from "next/font/google";
import { useState } from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Nosifer } from 'next/font/google';

const nosifer = Nosifer({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

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

// ContactPage Component
export default function ContactPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, email, subject, message });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-gray-800 max-w-7xl mx-auto rounded-lg mt-4 z-50">
        <h1 className={`text-4xl font-bold drop-shadow-lg ${jollyLodger.className}`}>
          <span className="text-blue-500">Haunted</span>
          <span className="text-red-500">Hollow</span>
        </h1>
        <div className={`flex space-x-8 ${jollyLodger.className}`}> {/* Adjusted spacing */}
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

      {/* Hero Banner */}
      <div className="relative w-full h-64">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('/awal.png')",
          filter: "brightness(0.4)"
        }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={`text-5xl font-bold text-red-600 ${nosifer.className}`} 
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
            CONTACT US
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-slate-800 text-white flex-grow py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Ingin tahu lebih banyak tentang produk dan layanan kami? Kirimkan pesan, dan 
              tim kami yang tersembunyi dalam kegelapan akan segera merespons.
            </p>
          </div>

          {/* Contact Form and Info */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-700 p-3 rounded-full">
                  <MapPinIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Alamat</h3>
                  <p>Jl. Kegelapan No. 666, Kota Bayangan</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-slate-700 p-3 rounded-full mt-20">
                  <PhoneIcon className="h-6 w-6 text-white " />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 mt-20">Telepon</h3>
                  <p>No. HP: +62 890 9878 5627</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-slate-700 p-3 rounded-full mt-20">
                  <EnvelopeIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 mt-20">Alamat Email</h3>
                  <p>hauntedhollow@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-slate-700 p-6 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1">Username</label>
                  <input
                    type="text"
                    placeholder="Masukkan Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 rounded bg-slate-200 border border-slate-600 text-white"
                  />
                </div>

                <div>
                  <label className="block mb-1">Alamat Email</label>
                  <input
                    type="email"
                    placeholder="Masukkan Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded bg-slate-200 border border-slate-600 text-white"
                  />
                </div>

                <div>
                  <label className="block mb-1">Subjek</label>
                  <input
                    type="text"
                    placeholder="Masukkan Subjek"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-3 rounded bg-slate-200 border border-slate-600 text-white"
                  />
                </div>

                <div>
                  <label className="block mb-1">Pesan</label>
                  <textarea
                    placeholder="Tulis Pesan..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded bg-slate-200 border border-slate-600 text-white h-32"
                  />
                </div>

                <button
                    type="submit"
                    className="bg-red-900 hover:bg-red-800 text-white font-bold py-3 px-6 rounded border border-yellow-500 transition-all duration-300"
                    >
                    Kirim
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-slate-700 p-4 rounded-lg text-center transition-transform hover:scale-105">
              <PhoneIcon className="h-8 w-8 mx-auto mb-2 text-white" />
              <p className="font-bold text-lg">+62 890 9878 5627</p>
              <p className="text-yellow-400 text-sm italic">Jangan angkat jika ada suara berbisik di seberang</p>
            </div>

            <div className="bg-slate-700 p-4 rounded-lg text-center transition-transform hover:scale-105">
              <EnvelopeIcon className="h-8 w-8 mx-auto mb-2 text-white" />
              <p className="font-bold text-lg">hauntedhollow@gmail.com</p>
              <p className="text-yellow-400 text-sm italic">Balas dengan hati-hati, kadang ada pesan dari yang tak terlihat</p>
            </div>

            <div className="bg-slate-700 p-4 rounded-lg text-center transition-transform hover:scale-105">
              <MapPinIcon className="h-8 w-8 mx-auto mb-2 text-white" />
              <p className="font-bold text-lg">Jl. Kegelapan No. 666, Kota Bayangan</p>
              <p className="text-yellow-400 text-sm italic">Jika sampai, jangan menoleh ke belakang</p>
            </div>
          </div>
        </div>
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