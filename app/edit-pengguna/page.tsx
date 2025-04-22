"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const users = [
  {
    id: 1,
    name: "Rangga",
    role: "Owner",
    email: "rangga@gmial.com",
    status: "Aktif",
    joined: "jan 10",
    avatar: "/demian.jpg",
  },
  {
    id: 2,
    name: "Arzetty Cellini",
    role: "CEO",
    email: "zetty@gmail.com",
    status: "Aktif",
    joined: "Feb 23",
    avatar: "/zety.jpg",
  },
  {
    id: 3,
    name: "Maria Silviany",
    role: "CFO",
    email: "silvy@gmail.com",
    status: "Aktif",
    joined: "Feb 22",
    avatar: "/cipy.jpg",
  },
  {
    id: 4,
    name: "Valeria Ginting",
    role: "CTO",
    email: "vale@gmail.com",
    status: "Aktif",
    joined: "Feb 21",
    avatar: "/vale.jpg",
  },
  {
    id: 5,
    name: "Lala bulala",
    role: "Pelanggan",
    email: "lala@gmial.com",
    status: "Aktif",
    joined: "Mar 5",
    avatar: "/sara.jpg",
  },
  {
    id: 6,
    name: "Rina Putri",
    role: "Pelanggan",
    email: "rina@gmail.com",
    status: "Aktif",
    joined: "Mar 12",
    avatar: "pesulap.jpg",
  },
  {
    id: 7,
    name: "Joko Subianto",
    role: "Pelanggan",
    email: "joko@gmail.com",
    status: "Aktif",
    joined: "Mar 28",
    avatar: "demian.jpg",
  },
];

const EditPenggunaClient = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const user = users.find((u) => u.id === parseInt(id || "", 10));
  const [status, setStatus] = useState(user?.status === "Aktif");

  if (!user) {
    return <div className="text-white text-center mt-10">Pengguna tidak ditemukan</div>;
  }

  const toggleStatus = () => setStatus(!status);

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Edit Pengguna</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nama</label>
            <input
              type="text"
              defaultValue={user.name}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              defaultValue={user.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Role</label>
            <input
              type="text"
              defaultValue={user.role}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label className="block text-gray-700 font-medium">Status</label>
            <div
              onClick={toggleStatus}
              className={`w-12 h-6 flex items-center bg-${status ? "green" : "gray"}-400 rounded-full p-1 cursor-pointer`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                  status ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
            <span>{status ? "Aktif" : "Nonaktif"}</span>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Avatar</label>
            <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full object-cover" />
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t mt-6">
            <a
              href="/admin-pengguna"
              className="px-4 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-200"
            >
              Batal
            </a>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPenggunaClient;
