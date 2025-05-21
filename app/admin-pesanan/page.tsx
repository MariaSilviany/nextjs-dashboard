"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Jolly_Lodger, Creepster } from "next/font/google";
import SkeletonAdminPesanan from "../components/skeletonAdminPesanan"

const jollyLodger = Jolly_Lodger({ weight: "400", subsets: ["latin"], display: "swap" });
const creepster = Creepster({ weight: "400", subsets: ["latin"], display: "swap" });

interface Order {
  id: string;
  customer: string;
  products: string;
  total: string;
  date: string;
  status: string;
}

const AdminPesanan: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyData: Order[] = [
      { id: "PSN001", customer: "Khatarina", products: "Topeng Hantu Horor(1 Pcs)", total: "Rp80.000", date: "01-03-2024 11:32", status: "Sedang Diproses" },
      { id: "PSN002", customer: "John Ferry", products: "Topeng Hantu Horor(1 Pcs)\nLilin Aroma Misterius(1 Pcs)", total: "Rp146.000", date: "06-09-2024 14:32", status: "Menunggu Pembayaran" },
      { id: "PSN003", customer: "Lusia Nadia", products: "Boneka Seram (1 Pcs)\nLilin Aroma Misterius(3 Pcs)", total: "Rp132.000", date: "25-09-2024 10:22", status: "Menunggu Pembayaran" },
      { id: "PSN004", customer: "Maria Iata", products: "Karlan Arwah Kela (1 Pcs)\nLampu Hias gantung(1 Pcs)", total: "Rp220.000", date: "30-04-2024 08:46", status: "Sedang Diproses" },
      { id: "PSN005", customer: "Lea Ginara", products: "Lampu Hias gantung (1 Pcs)", total: "Rp120.000", date: "05-05-2024 16:05", status: "Dibatalkan" },
      { id: "PSN006", customer: "Valensia", products: "Patung Pemujaan Kuno (1 Pcs)\nBoneka Seram (1 Pcs)", total: "Rp166.000", date: "16-09-2024 13:05", status: "Selesai" },
      { id: "PAN007", customer: "Bagus Yogi", products: "Kotak Musik Berhantu (3 Pcs)", total: "Rp90.000", date: "04-06-2024 16:58", status: "Selesai" },
    ];

    setTimeout(() => {
      setOrders(dummyData);
      setLoading(false);
    }, 2000);
  }, []);

  const renderProducts = (productText: string) => {
    return productText.split("\n").map((item, i) => <div key={i}>{item}</div>);
  };

  const getStatusStyle = (status: string): string => {
    switch (status) {
      case "Menunggu Pembayaran": return "bg-yellow-300 text-yellow-800";
      case "Sedang Diproses": return "bg-blue-300 text-blue-800";
      case "Selesai": return "bg-green-300 text-green-800";
      case "Dibatalkan": return "bg-red-300 text-red-800";
      default: return "bg-gray-300 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-[#1e2a3e] p-8 text-white">
      <h1
        className={`text-5xl text-red-600 tracking-wider mb-10 ${creepster.className}}
        style={{ WebkitTextStroke: "0.5px white" }`}
      >
        DAFTAR PESANAN
      </h1>

      <div className="bg-white rounded shadow-lg overflow-hidden text-black">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="p-4">ID Pesanan</th>
              <th className="p-4">Nama Pelanggan</th>
              <th className="p-4">Produk</th>
              <th className="p-4">Total</th>
              <th className="p-4">Tanggal</th>
              <th className="p-4">Status</th>
              <th className="p-4">Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7}><SkeletonAdminPesanan /></td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4">{renderProducts(order.products)}</td>
                  <td className="p-4">{order.total}</td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(order.status)}`}>{order.status}</span>
                  </td>
                  <td className="p-4">
                    <button className="text-red-600 hover:text-red-800">🗑</button>
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

export default AdminPesanan;