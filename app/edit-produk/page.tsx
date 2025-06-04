"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const EditProduk: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [formData, setFormData] = useState({
    namaProduk: "",
    harga: "",
    stok: 0,
    status: true,
    gambar: null as File | null,
    gambarLama: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const res = await fetch(`/api/produk/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);

        setFormData({
          namaProduk: data.nama,
          harga: String(data.harga),
          stok: data.stok,
          status: data.status === "Aktif", // di useEffect
          gambar: null,
          gambarLama: data.gambar_url,
        });
      } catch (err: any) {
        setError(err.message);
      }
    };

    if (id) fetchProduk();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "stok" ? parseInt(value) : value,
    });
  };

  const toggleStatus = () => {
    setFormData({ ...formData, status: !formData.status });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, gambar: e.target.files[0] });
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.namaProduk || !formData.harga || formData.stok < 0) {
    setError("Semua kolom wajib diisi!");
    return;
  }

  try {
    const data = new FormData();
    data.append("nama", formData.namaProduk);
    data.append("harga", formData.harga);
    data.append("stok", String(formData.stok));
    data.append("status", formData.status ? "Aktif" : "Nonaktif"); // saat submit
    data.append("gambarLama", formData.gambarLama);

    if (formData.gambar) {
      data.append("gambar", formData.gambar);
    }

    const res = await fetch(`/api/produk/${id}`, {
      method: "PUT",
      body: data,
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Gagal memperbarui produk");
    }

    setSuccess("Produk berhasil diupdate!");
    setTimeout(() => router.push("/admin-produk"), 1500);
  } catch (err: any) {
    setError(err.message || "Terjadi kesalahan saat update produk");
  }
};


  return (
    <div className="flex min-h-screen bg-[#1e2a3e]">
      <div className="flex-1 bg-gray-50 flex justify-center items-center">
        <div className="bg-gray-200 rounded-lg shadow-sm p-20 max-w-6xl w-full" style={{ maxHeight: "100vh", overflowY: "auto" }}>
          <div className="rounded px-6 py-2 bg-[#1f3447] text-white p-4 text-center text-2xl font-bold mb-8">
            EDIT PRODUK
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Nama Produk</label>
                  <input type="text" name="namaProduk" value={formData.namaProduk} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Harga (Rp)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">Rp</span>
                    </div>
                    <input type="text" name="harga" value={formData.harga} onChange={handleInputChange} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg" />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Stok</label>
                  <input type="number" name="stok" value={formData.stok} onChange={handleInputChange} className="w-40 h-10 px-3 border border-gray-300 rounded-lg" />
                  <span className="ml-2 text-base">pcs</span>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Status</label>
                  <div className={`relative inline-block w-12 h-6 rounded-full cursor-pointer ${formData.status ? "bg-green-500" : "bg-gray-300"}`} onClick={toggleStatus}>
                    <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${formData.status ? "translate-x-6" : ""}`} />
                  </div>
                  <span className="ml-3 text-sm text-gray-700">{formData.status ? "Aktif" : "Nonaktif"}</span>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Gambar Produk</label>
                  <input type="file" accept="image/*" onChange={handleFileChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                  {formData.gambar && <p className="text-sm text-gray-700 mt-2">Gambar: {formData.gambar.name}</p>}
                  {!formData.gambar && formData.gambarLama && (
                    <p className="text-sm text-gray-700 mt-2">Gambar sebelumnya: {formData.gambarLama}</p>
                  )}
                </div>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

            <div className="border-t border-gray-200 pt-6 mt-8 flex justify-end space-x-4">
              <a href="/admin-produk" className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Batal
              </a>
              <button type="submit" className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-blue-700">
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduk;
