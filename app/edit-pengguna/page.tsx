"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Jolly_Lodger } from "next/font/google";
import { Creepster } from "next/font/google";

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

const EditProduk: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mock user data
  const users = [
    {
      id: 1,
      name: "Rangga",
      role: "Owner",
      email: "rangga@gmial.com",
      status: "Aktif",
      joined: "Jan 10",
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
      name: "Lala Bulala",
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
      avatar: "/pesulap.jpg",
    },
    {
      id: 7,
      name: "Joko Subianto",
      role: "Pelanggan",
      email: "joko@gmail.com",
      status: "Aktif",
      joined: "Mar 28",
      avatar: "/demian.jpg",
    },
  ];

  const [user, setUser] = useState<any>(null);
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      const foundUser = users.find((u) => u.id === parseInt(id as string, 10));
      if (foundUser) {
        setUser(foundUser);
        setStatus(foundUser.status === "Aktif");
      }
    }
  }, [id]);

  if (!user) {
    return <div className="text-white">Pengguna tidak ditemukan</div>;
  }

  const toggleStatus = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  // SVG Icons
  const DashboardIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="22" height="22" fill="url(#pattern0_277_833)" />
      <defs>
        <pattern id="pattern0_277_833" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_277_833" transform="scale(0.01)" />
        </pattern>
        <image id="image0_277_833" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvUlEQVR4nO2du2tUQRSHN4Kv3vjEQgsTLRSViIXgI7EQRVFRROOjEkEbH9E2hYilqAmCjZUgCIJ/gBofMRbaxWeE1IuFJohaxE9GJriuu0nW7J05N/P7YLsQztzvzpnJnNmTQkEIIYQQQgghhBBCiAQBlgOHgXPAhTp8TgBtwMw6xDYL2Op/Zz1iO+vH2lywBDANOAq8JTuGgG5g/n/EtxC4AQxnGN8b4Ih7Ftk85YkPdi7whHAMAbtqiG93xiLK6QEas33qY8v4SHhG3Ns4gfiO+Z8NzUBwKT5NhZwZ5XwHWsaIbz3wg3g8Cpq+/NsXmxdAQ4XYGoDe2MEB7SGFuEXMApsrxNaKDfpDyViBHa5WiK8LOzSFEOK2d1borRBfH3Y4FELIeewwWCG+QezQEUJIJ3YoVoiviB06JQQJiUlRM0QpqxaUslDKikpRKcv+trdIYinLFWWs8ExCoBk7XEleiLHDxU0SYidtPa9y/J7WGlJSoHLlylh8A9ZWiS09IX7gjb5cGZoRN0PHiCtNISVSXLkyFJ+BHePElK6QkvTVDrzOcGBfgOvuYsUE4klbSNnDaPJyOoDLk/x0Asd9SXZGDTFIiCWQEFsgIbZAQv56GLOBNW4nBOyb5GcvsMHdzZWQ2t/KFuAu8DWj3cor4NREFvekZ4j7mgBwE/gZaIDvgZXjxJSmEJ+eYhyfDAMbJeRfIbeJxydgSZUXJb0ZAmyLPVLgnoT8EeKOvi2wOvkZAiwOuIiPx0UJgQPYoaeCkBglgWqcDrF+nMEOAxXie4wd9ocQYv2y9SVs4NL6Ignh99GNBZ5mLiMPM8QB3I8dmGt4UAhBToQs9X88xuJWEBl5EeJwd7YCNw0Y5aFr41EIRV6EONxBJPAu4G2Y7lrKzckJcQDTgZPAy4xicLPwjttMFGKQNyGlAAt80WtPHQpo24FVQdPTVBMyJZEQY0iIMfIqhKnaUS5vQpjqHeXyJIQUOsrlRQipdJTLgxBS6ihnXQipdZTLgZBWEusoZ11IF4l1lLMupI/EOspZFzKIHdRRjtSukuZghhSxg4QgIVEpaoYoZdWCUhYJpizrHeUGSWzba6E101gd5ax8d8VxMIQQ6x3lrmGHZZkLyUFHuS2kdLhovaOcw6WyJNJVHjrKOYB1/t8ixeJB8Pq61Y5yo/hLBzFKuB+AOYUYWOwoVwqw0zc/Czkz4siw2lGuHGCeL1plKabfrRnV1rSkO8qN05elzf/OzjrE1+HHGmZrK4QQQgghhBBCCCFEwRa/AM0jURkUbLn/AAAAAElFTkSuQmCC" />
      </defs>
    </svg>
  );

  const ProdukIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill="url(#pattern0_240_640)" />
      <defs>
        <pattern id="pattern0_240_640" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_240_640" transform="scale(0.01)" />
        </pattern>
        <image id="image0_240_640" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvUlEQVR4nO2du2tUQRSHN4Kv3vjEQgsTLRSViIXgI7EQRVFRROOjEkEbH9E2hYilqAmCjZUgCIJ/gBofMRbaxWeE1IuFJohaxE9GJriuu0nW7J05N/P7YLsQztzvzpnJnNmTQkEIIYQQQgghhBBCiAQBlgOHgXPAhTp8TgBtwMw6xDYL2Op/Zz1iO+vH2lywBDANOAq8JTuGgG5g/n/EtxC4AQxnGN8b4Ih7Ftk85YkPdi7whHAMAbtqiG93xiLK6QEas33qY8v4SHhG3Ns4gfiO+Z8NzUBwKT5NhZwZ5XwHWsaIbz3wg3g8Cpq+/NsXmxdAQ4XYGoDe2MEB7SGFuEXMApsrxNaKDfpDyViBHa5WiK8LOzSFEOK2d1borRBfH3Y4FELIeewwWCG+QezQEUJIJ3YoVoiviB06JQQJiUlRM0QpqxaUslDKikpRKcv+trdIYinLFWWs8ExCoBk7XEleiLHDxU0SYidtPa9y/J7WGlJSoHLlylh8A9ZWiS09IX7gjb5cGZoRN0PHiCtNISVSXLkyFJ+BHePElK6QkvTVDrzOcGBfgOvuYsUE4klbSNnDaPJyOoDLk/x0Asd9SXZGDTFIiCWQEFsgIbZAQv56GLOBNW4nBOyb5GcvsMHdzZWQ2t/KFuAu8DWj3cor4NREFvekZ4j7mgBwE/gZaIDvgZXjxJSmEJ+eYhyfDAMbJeRfIbeJxydgSZUXJb0ZAmyLPVLgnoT8EeKOvi2wOvkZAiwOuIiPx0UJgQPYoaeCkBglgWqcDrF+nMEOAxXie4wd9ocQYv2y9SVs4NL6Ignh99GNBZ5mLiMPM8QB3I8dmGt4UAhBToQs9X88xuJWEBl5EeJwd7YCNw0Y5aFr41EIRV6EONxBJPAu4G2Y7lrKzckJcQDTgZPAy4xicLPwjttMFGKQNyGlAAt80WtPHQpo24FVQdPTVBMyJZEQY0iIMfIqhKnaUS5vQpjqHeXyJIQUOsrlRQipdJTLgxBS6ihnXQipdZTLgZBWEusoZ11IF4l1lLMupI/EOspZFzKIHdRRjtSukuZghhSxg4QgIVEpaoYoZdWCUhYJpizrHeUGSWzba6E101gd5ax8d8VxMIQQ6x3lrmGHZZkLyUFHuS2kdLhovaOcw6WyJNJVHjrKOYB1/t8ixeJB8Pq61Y5yo/hLBzFKuB+AOYUYWOwoVwqw0zc/Czkz4siw2lGuHGCeL1plKabfrRnV1rSkO8qN05elzf/OzjrE1+HHGmZrK4QQQgghhBBCCCFEwRa/AM0jURkUbLn/AAAAAElFTkSuQmCC" />
      </defs>
    </svg>
  );

  return (
    <div className="text-white">
      <h2 className={`text-2xl ${creepster.className}`}>Edit Produk</h2>
      <div>
        <h3 className={`text-lg ${jollyLodger.className}`}>Nama: {user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Status: {status ? "Aktif" : "Non-Aktif"}</p>
        <p>Joined: {user.joined}</p>
        <button
          onClick={toggleStatus}
          className="text-sm bg-blue-500 text-white px-4 py-2 rounded"
        >
          Toggle Status
        </button>
      </div>

      <div className="mt-6">
        <DashboardIcon />
        <ProdukIcon />
      </div>
    </div>
  );
};

export default EditProduk;
