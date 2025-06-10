"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Jolly_Lodger, Creepster } from "next/font/google";

const jollyLodger = Jolly_Lodger({ weight: "400", subsets: ["latin"], display: "swap" });
const creepster = Creepster({ weight: "400", subsets: ["latin"], display: "swap" });

const TambahPesanan: React.FC = () => {
  const [status, setStatus] = useState('Sedang Diproses');
  const [tanggal, setTanggal] = useState(new Date().toISOString().split('T')[0]);
  const [namaPelanggan, setNamaPelanggan] = useState('');
  const [produk, setProduk] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [produkList, setProdukList] = useState<any[]>([]);
  const [message, setMessage] = useState('');

  // Ambil daftar produk
  useEffect(() => {
    fetch("/api/produk")
      .then((res) => res.json())
      .then((data) => setProdukList(data))
      .catch((err) => console.error("Gagal ambil produk:", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!namaPelanggan || !produk || !jumlah || !status) {
      setMessage("Semua field harus diisi.");
      return;
    }

    const formData = new FormData();
    formData.append("nama", namaPelanggan);
    formData.append("produk_id", produk);
    formData.append("jumlah", jumlah);
    formData.append("status", status);

    try {
      const response = await fetch("/api/pesanan", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) {
        setMessage(result.error || "Gagal menyimpan pesanan.");
      } else {
        setMessage("Pesanan berhasil disimpan!");
        setTimeout(() => {
          window.location.href = "/admin-pesanan";
        }, 1500);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Terjadi kesalahan saat mengirim data.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#1e2a3e]">
      <div className="w-56 bg-[#65181b] shadow-sm flex flex-col fixed h-full">
        <div className="p-4">
          <h1 className={`text-4xl ${jollyLodger.className} mb-4 text-white`}>
            <span className="text-blue-400">Haunted</span>
            <span className="text-red-500">Hollow</span>
          </h1>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1"></nav>
      </div>

      <div className="flex-1 bg-gray-50 flex justify-center items-center ml-56">
        <div className="bg-gray-200 rounded-lg shadow-sm p-20 max-w-6xl w-full">
          <div className={`rounded px-6 py-2 bg-[#1f3447] text-white text-center text-2xl font-bold mb-8 ${creepster.className}`}>
            TAMBAH PESANAN
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Nama Pelanggan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={namaPelanggan}
                    onChange={(e) => setNamaPelanggan(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Masukkan nama pelanggan"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Produk <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={produk}
                    onChange={(e) => setProduk(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    required
                  >
                    <option value="">-- Pilih Produk --</option>
                    {produkList.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.nama}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Jumlah <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={jumlah}
                    onChange={(e) => setJumlah(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="0"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  >
                    <option value="Sedang Diproses">Sedang Diproses</option>
                    <option value="Menunggu Pembayaran">Menunggu Pembayaran</option>
                    <option value="Dibatalkan">Dibatalkan</option>
                    <option value="Selesai">Selesai</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-8 flex justify-end space-x-4">
              <Link
                href="/admin-pesanan"
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Batal
              </Link>
              <button
                type="submit"
                className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-red-700"
              >
                Simpan Pesanan
              </button>
            </div>
          </form>
          {message && <div className="mt-4 text-red-500">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default TambahPesanan;
