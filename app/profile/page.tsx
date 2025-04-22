import Image from "next/image";
import Link from "next/link";
import { Jolly_Lodger } from "next/font/google";
import { Creepster } from "next/font/google";
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

export default function Home() {
  const teamMembers = [
    {
      role: <span className={`text-2xl text-red-600 ${nosifer.className}`} style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>CEO</span>,
      name: "Arzetty Cellini Parhusip",
      description:
        "Mengarahkan visi dan strategi Haunted Hollow agar tetap menjadi toko mistis paling ikonik.",
      image: "/zety.jpg",
    },
    {
      role: <span className={`text-2xl text-red-600 ${nosifer.className}`} style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>CFO</span>,
      name: "Maria Silviany Cahya Serang",
      description:
        "Mengelola keuangan toko dengan cermat, memastikan setiap transaksi tetap misterius namun menguntungkan.",
      image: "/cipy.jpg",
    },
    {
      role: <span className={`text-2xl text-red-600 ${nosifer.className}`} style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>CTO</span>,
      name: "Valeria Fevayosa br Ginting",
      description:
        "Bertanggung jawab atas teknologi dan sistem keamanan untuk menjaga aura mistis toko tetap hidup.",
      image: "/vale.jpg",
    },
  ];

  return (
    <div className=""> {/* Add padding to avoid content overlap */}
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

      {/* Profil Toko */}
      <section className="bg-gray-900 py-16 px-4 relative mt-24" style={{ backgroundImage: "url('/HairCre.png')" }}>
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

      {/* Team Section */}
      <main className="w-full min-h-screen bg-gray-900 flex flex-col items-center py-10 px-4">
        <header className="mb-8 text-center mt-20">
          <h1 className={`text-6xl text-blue-500 text-center ${jollyLodger.className} mb-4`} style={{ WebkitTextStroke: "0.5px white" }}>
            <span className="text-blue-400 mr-4">Tim</span> {/* Menambahkan margin-right untuk "Tim" */}
            <span className="text-blue-400">Haunted</span>
            <span className="text-red-500">Hollow</span>
          </h1>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-400 bg-opacity-80 text-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center min-h-[350px]"
            >
              <h2 className="text-xl font-bold text-red-500 mb-2">{member.role}</h2>
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl font-semibold mb-2  ${jollyLodger.className}`}> {member.name} </h3>
              <p className="text-gray-700 text-center">{member.description}</p>
            </div>
          ))}
        </section>
      </main>

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