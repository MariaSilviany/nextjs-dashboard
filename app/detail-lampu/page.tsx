import Image from "next/image";
import Link from "next/link";
import { Jolly_Lodger } from "next/font/google";
import { Creepster } from "next/font/google";
import { Nosifer } from "next/font/google";

const nosifer = Nosifer({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
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

export default function ProductDetail() {
  return (
    <div className="min-h-screen bg-gray-900 pt-[130px] font-sans">
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
          <Link href="/register">
            <button className={`px-4 py-2 rounded text-white text-2xl ${jollyLodger.className}`}>Register</button>
          </Link>
          <Link href="/login">
            <button className={`bg-blue-500 px-4 py-2 rounded text-white text-2xl ${jollyLodger.className}`}>Login</button>
          </Link>
        </div>
      </nav>

      {/* DETAIL PRODUK section*/}
      <div className="flex items-center justify-center w-full mb-12 mt-16">
          <div className="w-1/4 h-px bg-white"></div>
          <h2 className={`text-5xl text-white ${jollyLodger.className} mx-6`}>
            DETAIL PRODUK
          </h2>
          <div className="w-1/4 h-px bg-white"></div>
        </div>

      {/* Product Detail Layout */}
      <div className="bg-[#cbd5e1] text-black rounded-lg mx-auto my-8 p-8 max-w-5xl flex flex-col lg:flex-row gap-8">
        {/* Gambar & Button */}
        <div className="flex-shrink-0 flex flex-col items-center justify-start lg:w-1/2">
          <Image
            src="/kat2.png"
            alt="Lampu Hias Gantung"
            width={300}
            height={400}
            className="rounded"
          />
          <button
            className={`mt-6 rounded px-6 py-2 bg-red-800 text-white text-lg hover:bg-red-700 transition duration-300 shadow-lg ${creepster.className}`}
            style={{ WebkitTextStroke: "1px black" }}
          >
            Beli Sekarang!
          </button>
        </div>

        {/* Deskripsi */}
        <div className="lg:w-1/2">
          <h1 className={`text-4xl font-bold text-red-700 ${jollyLodger.className}`}>Lampu Hias Gantung</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className={`text-black text-xl ${nosifer.className}`}>Rp 120.000</span>
            <span className="bg-gray-300 font-bold text-white text-sm px-2 py-1 rounded">Sale Up To 30% Off</span>
          </div>
          <p className="mt-6 text-justify leading-relaxed italic">
            Menyatukan estetika gothic dengan ketenangan cahaya lembut, “Cahaya Arwah Senyap” adalah lampu hias gantung yang dirancang untuk menciptakan atmosfer reflektif, magis, dan kontemplatif. Menggantung tenang di tengah ruang, lampu ini menjadi perwujudan cahaya dalam kegelapan—menghidupkan simbolisme antara harapan dan misteri.
          </p>
          <p className="mt-4 text-justify leading-relaxed italic">
            Dengan siluet yang menyerupai lentera pemakaman kuno dan ornamen renda transparan bernuansa abu gelap serta putih pudar, lampu ini cocok sebagai titik fokus visual dalam pertunjukan seni, film bertema spiritual atau horor, serta dekorasi ruang pribadi bergaya gothic-metafisik.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2 italic">Spesifikasi Produk:</h2>
            <div className="text-left space-y-2 italic">
                <p>Material: Rangka besi ringan, kain renda premium, dan elemen kaca buram</p>
                <p>Warna:  Gradasi Monokrom (Putih kabut, Abu arang, Hitam pekat)</p>
                <p>Ukuran: Diameter 35 cm, tinggi 50 cm (dapat disesuaikan)</p>
                <p>Bonus: Gantungan rantai besi + remote kontrol intensitas cahaya</p>
                <p>Kegunaan: Dekorasi tematik, properti panggung/film, elemen interior untuk ruangan bernuansa mistis atau spiritual</p>
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
            <p>© 2025 | by HauntedHollow. All rights reserved</p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="#" aria-label="Facebook">{/* Facebook Icon */}</Link>
            <Link href="#" aria-label="Twitter">{/* Twitter Icon */}</Link>
            <Link href="#" aria-label="LinkedIn">{/* LinkedIn Icon */}</Link>
            <Link href="#" aria-label="Instagram">{/* Instagram Icon */}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
