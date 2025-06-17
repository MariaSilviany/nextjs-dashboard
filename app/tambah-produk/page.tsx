"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TambahProduk: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    namaProduk: "",
    harga: "",
    stok: 0,
    status: true,
    gambar: "", // bukan null atau File, tapi string
  });


  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null); // ✅ Tambahkan state success

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "stok" ? parseInt(value) : value,
    });
  };

  // Fungsi untuk menangani perubahan status
  const toggleStatus = () => {
    setFormData({
      ...formData,
      status: !formData.status,
    });
  };

  // Fungsi untuk menangani upload gambar
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        gambar: e.target.files[0],
      });
    }
  };

 
  // Fungsi untuk menyimpan produk
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (
    !formData.namaProduk ||
    !formData.harga ||
    formData.stok <= 0 ||
    !formData.gambar // Di sini `gambar` adalah string URL, bukan file
  ) {
    setError("Semua kolom wajib diisi!");
    return;
  }

  try {
    const res = await fetch("/api/produk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama: formData.namaProduk,
        harga: parseInt(formData.harga),
        stok: formData.stok,
        status: formData.status ? "Aktif" : "Nonaktif",
        gambar_url: formData.gambar, // gunakan sebagai URL gambar
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Gagal menyimpan produk");
    }

    // ✅ Reset form dan tampilkan pesan sukses
    setFormData({
      namaProduk: "",
      harga: "",
      stok: 0,
      status: true,
      gambar: "", // sekarang string, bukan file
    });
    setError(null);
    setSuccess("Produk berhasil ditambahkan!");

    // Redirect setelah berhasil
    setTimeout(() => {
      router.push("/admin-produk");
    }, 1500);

  } catch (err: any) {
    console.error(err);
    setError(err.message || "Terjadi kesalahan saat menyimpan produk");
  }
};

  return (
    <div className="flex min-h-screen bg-[#1e2a3e]">
      <div className="flex-1 bg-gray-50 flex justify-center items-center">
        <div
          className="bg-gray-200 rounded-lg shadow-sm p-20 max-w-6xl w-full"
          style={{ maxHeight: "100vh", overflowY: "auto" }}
        >
          <div className="rounded px-6 py-2 bg-[#1f3447] text-white p-4 text-center text-2xl font-bold mb-8">
            TAMBAH PRODUK
          </div>

          {/* Form Tambah Produk */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kolom Kiri */}
              <div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Nama Produk <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaProduk"
                    value={formData.namaProduk}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Masukkan nama produk"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Harga (Rp) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">Rp</span>
                    </div>
                    <input
                      type="text"
                      name="harga"
                      value={formData.harga}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Stok <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="stok"
                    value={formData.stok}
                    onChange={handleInputChange}
                    className="w-40 h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="0"
                    min="0"
                  />
                  <span className="ml-2 text-base">pcs</span>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Status
                  </label>
                  <div
                    className={`relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer ${
                      formData.status ? "bg-green-500" : "bg-gray-300"
                    }`}
                    onClick={toggleStatus}
                  >
                    <div
                      className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out transform ${
                        formData.status ? "translate-x-6" : ""
                      }`}
                    ></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-700">
                    {formData.status ? "Aktif" : "Nonaktif"}
                  </span>
                </div>
              </div>

              {/* Kolom Kanan */}
              <div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Gambar Produk <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    placeholder="Masukkan URL gambar (contoh: https://...)"
                    value={formData.gambar}
                    onChange={(e) =>
                      setFormData({ ...formData, gambar: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                  {formData.gambar && (
                    <p className="text-sm text-gray-700 mt-2">
                      Gambar: {formData.gambar.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Pesan Error atau Sukses */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

            {/* Tombol Aksi */}
            <div className="border-t border-gray-200 pt-6 mt-8 flex justify-end space-x-4">
              <a
                href="/admin-produk"
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Batal
              </a>
              <button
                type="submit"
                className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-red-700"
              >
                Simpan Produk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TambahProduk;