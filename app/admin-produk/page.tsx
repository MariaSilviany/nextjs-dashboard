"use client";

import { Jolly_Lodger } from "next/font/google";
import { Creepster } from "next/font/google";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import SkeletonDaftarProduk from "../components/skeletonDaftarProduk";

const jollyLodger = Jolly_Lodger({ weight: "400", subsets: ["latin"], display: "swap" });
const creepster = Creepster({ weight: "400", subsets: ["latin"], display: "swap" });

interface Product {
  id: number;
  name: string;
  position: string;
  contact: string;
  status: string;
  image: string;
}

const HauntedHallowAdmin: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Lilin Aroma Misterius", position: "Rp66.000", contact: "50 Pcs", status: "Aktif", image: "/produk1.png" },
    { id: 2, name: "Topeng Hantu Horor", position: "Rp80.000", contact: "80 Pcs", status: "Aktif", image: "/produk2.png" },
    { id: 3, name: "Boneka Seram", position: "Rp66.000", contact: "30 Pcs", status: "Aktif", image: "/produk4.png" },
    { id: 4, name: "Kafan Arwah Kelam", position: "Rp100.000", contact: "48 Pcs", status: "Aktif", image: "/kat1.png" },
    { id: 5, name: "Lampu Hias gantung", position: "Rp120.000", contact: "20 Pcs", status: "Aktif", image: "/kat2.png" },
    { id: 6, name: "Patung Pemujaan Kuno", position: "Rp150.000", contact: "80 Pcs", status: "Aktif", image: "/produk3.png" },
    { id: 7, name: "Kotak Musik Berhantu", position: "Rp90.000", contact: "30 Pcs", status: "Aktif", image: "/kat5.png" },
  ];

  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setProductData(products);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen p-10 bg-[#1e2a3e] text-white">
      <h1 className={`text-5xl text-red-600 tracking-wider mb-10 ${creepster.className}`}>
        DAFTAR PRODUK
      </h1>

      <div className="bg-white rounded shadow-lg overflow-hidden text-black">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="p-4">Gambar</th>
              <th className="p-4">Nama</th>
              <th className="p-4">Harga</th>
              <th className="p-4">Stok</th>
              <th className="p-4">Status</th>
              <th className="p-4">Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6}><SkeletonDaftarProduk /></td>
              </tr>
            ) : (
              productData.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4">
                    <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
                      <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                    </div>
                  </td>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">{product.position}</td>
                  <td className="p-4">{product.contact}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-green-500 text-white font-medium rounded-full text-sm">
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Link href={`/edit-produk?id=${product.id}`} className="p-1 text-green-600 hover:text-green-800">
                        ✏
                      </Link>
                      <button className="p-1 text-red-600 hover:text-red-800">🗑</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HauntedHallowAdmin;