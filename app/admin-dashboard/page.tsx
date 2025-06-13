import { Suspense, lazy } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Nunito_Sans, Creepster, Jolly_Lodger } from "next/font/google";
import {
  StarIcon,
  ShoppingCartIcon,
  UsersIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/solid";
import prisma from "../lib/prisma";

//Font yang digunakan
const jollyLodger = Jolly_Lodger({
  weight: "400",
  subsets: ["latin"],
});

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// --- Skeleton Components ---
function CardSkeleton() {
  return (
    <div className="bg-[#B9BFC7] p-4 rounded-lg flex flex-col gap-2 animate-pulse">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 bg-gray-300 rounded" />
        <div className="h-5 w-24 bg-gray-300 rounded" />
      </div>
      <div className="h-8 w-20 bg-gray-300 rounded my-2" />
      <div className="h-3 w-16 bg-gray-200 rounded" />
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="bg-[#B9BFC7] p-6 rounded-lg mb-6 items-start mx-auto ml-8 mt-10 animate-pulse">
      <div className="h-10 w-56 bg-gray-300 rounded mb-4" />
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              {[...Array(5)].map((_, i) => (
                <th key={i} className="pb-3">
                  <div className="h-4 w-20 bg-gray-200 rounded" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i}>
                {[...Array(5)].map((_, j) => (
                  <td key={j} className="p-2">
                    <div className="h-4 w-20 bg-gray-100 rounded" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProdukUnggulanSkeleton() {
  return (
    <div className="bg-[#B9BFC7] p-6 rounded-lg mb-6 items-start mx-auto ml-8 mt-10 animate-pulse">
      <div className="h-10 w-56 bg-gray-300 rounded mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded shadow">
            <div className="h-32 w-full bg-gray-300 rounded" />
            <div className="h-5 w-24 bg-gray-200 rounded mt-2" />
            <div className="h-4 w-20 bg-gray-200 rounded mt-2" />
            <div className="h-3 w-16 bg-gray-100 rounded mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Data Fetching ---
async function getRatingToko() {
  // Loading
  await new Promise((res) => setTimeout(res, 1000));
  const rating = await prisma.rating_toko.findFirst({
    orderBy: { created_at: "desc" },
  });
  return rating?.nilai != null ? Number(rating.nilai).toFixed(1) : "-";
}

async function getTotalPenjualan() {
  // Loading
  await new Promise((res) => setTimeout(res, 2000));
  const penjualanAggregate = await prisma.penjualan.aggregate({
    _sum: { total: true },
  });
  return penjualanAggregate._sum.total || 0;
}

async function getPelangganBaru() {
  // Loading
  await new Promise((res) => setTimeout(res, 3000));
  return prisma.pelanggan.count();
}

async function getTotalProduk() {
  // Loading
  await new Promise((res) => setTimeout(res, 4000));
  return prisma.produk.count();
}

async function getPenjualanTerakhir() {
  // Loading
  await new Promise((res) => setTimeout(res, 5000));
  return prisma.penjualan.findMany({
    orderBy: { tanggal: "desc" },
    take: 5,
    include: {
      produk: true,
      pelanggan: true,
    },
  });
}

type ProdukWithPenjualan = {
  id: string;
  nama: string;
  harga: number;
  gambar_url: string;
  stok: number;
  status: string;
  penjualan: { jumlah: number }[];
};

type ProdukUnggulan = ProdukWithPenjualan & {
  jumlahTerjual: number;
};

async function getProdukUnggulan(): Promise<ProdukUnggulan[]> {
  // Loading
  await new Promise((res) => setTimeout(res, 6000));

  const semuaProduk = await prisma.produk.findMany({
    include: {
      penjualan: true,
    },
  });

  const produkDenganJumlah: ProdukUnggulan[] = semuaProduk.map((p: ProdukWithPenjualan) => ({
  ...p,
  jumlahTerjual: p.penjualan.reduce(
    (acc: number, curr: { jumlah: number }) => acc + curr.jumlah,
    0
  ),
}));


  return produkDenganJumlah
    .sort((a: ProdukUnggulan, b: ProdukUnggulan) => b.jumlahTerjual - a.jumlahTerjual)
    .slice(0, 4);
}

// SVG Icon
const DashboardIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="22" height="22" fill="url(#pattern0_277_833)" />
    <defs>
      <pattern
        id="pattern0_277_833"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_277_833" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_277_833"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvUlEQVR4nO2du2tUQRSHN4Kv3vjEQgsTLRSViIXgI7EQRVFRROOjEkEbH9E2hYilqAmCjZUgCIJ/gBofMRbaxWeE1IuFJohaxE9GJriuu0nW7J05N/P7YLsQztzvzpnJnNmTQkEIIYQQQgghhBBCiAQBlgOHgXPAhTp8TgBtwMw6xDYL2Op/Zz1iO+vH2lywBDANOAq8JTuGgG5g/n/EtxC4AQxnGN8b4Ih7Ftk85YkPdi7whHAMAbtqiG93xiLK6QEas33qY8v4SHhG3Ns4gfiO+Z8NzUBwKT5NhZwZ5XwHWsaIbz3wg3g8Cpq+/NsXmxdAQ4XYGoDe2MEB7SGFuEXMApsrxNaKDfpDyViBHa5WiK8LOzSFEOK2d1borRBfH3Y4FELIeewwWCG+QezQEUJIJ3YoVoiviB06JQQJiUlRM0QpqxaUslDKikpRKcv+trdIYinLFWWs8ExCoBk7XEleiLHDxU0SYidtPa9y/J7WGlJSoHLlylh8A9ZWiS09IX7gjb5cGZoRN0PHiCtNISVSXLkyFJ+BHePElK6QkvTVDrzOcGBfgOvuYsUE4klbSNnDaPJyOoDLk/x0Asd9SXZGDTFIiCWQEFsgIbZAQv56GLOBNW4nBOyb5GcvsMHdzZWQ2t/KFuAu8DWj3cor4NREFvekZ4j7mgBwE/gZaIDvgZXjxJSmEJ+eYhyfDAMbJeRfIbeJxydgSZUXJb0ZAmyLPVLgnoT8EeKOvi2wOvkZAiwOuIiPx0UJgQPYoaeCkBglgWqcDrF+nMEOAxXie4wd9ocQYv2y9SVs4NL6Ignh99GNBZ5mLiMPM8QB3I8dmGt4UAhBToQs9X88xuJWEBl5EeJwd7YCNw0Y5aFr41EIRV6EONxBJPAu4G2Y7lrKzckJcQDTgZPAy4xicLPwjttMFGKQNyGlAAt80WtPHQpo24FVQdPTVBMyJZEQY0iIMfIqhKnaUS5vQpjqHeXyJIQUOsrlRQipdJTLgxBS6ihnXQipdZTLgZBWEusoZ11IF4l1lLMupI/EOspZFzKIHdRRjtSukuZghhSxg4QgIVEpaoYoZdWCUhYJpizrHeUGSWzba6E101gd5ax8d8VxMIQQ6x3lrmGHZZkLyUFHuS2kdLhovaOcw6WyJNJVHjrKOYB1/t8ixeJB8Pq61Y5yo/hLBzFKuB+AOYUYWOwoVwqw0zc/Czkz4siw2lGuHGCeL1plKabfrRnV1rSkO8qN05elzf/OzjrE1+HHGmZrK4QQQgghhBBCCCFEwRa/AM0jURkUbLn/AAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

const ProdukIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" fill="url(#pattern0_240_640)" />
    <defs>
      <pattern
        id="pattern0_240_640"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_240_640" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_240_640"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8UlEQVR4nO3dP05UURxH8UESSqRmBdJLLZ0k0LoKIwWFEmPcAC7BSEKwYQVa6A4IAf+sQSnB2OkhLxkJQWBelHvny53zSV477/7uSd57M5nMDAaSJEmSJEmSVAswDSwDm8BbYNeD3eFedHvyELhTK8Yi8BmN8gm4XzrGEvBz5FL0R7dXD0rFmAOOzk6lvr4Dd0sEedl7CbroRYkg+3+dRn3tlQjyo/fpddFJiSD6DwYJY5AwBgljkDAGmYAgfoDIv+/BjQeRJElSacC6j8GMetRdrxmkO6GuV++9h0F6MUgYg4QxSBiDhDFIGIOEMUiY5oJ8ANaARzd8dK/5scL6mwqyCUwVXP8U8KrwDM0E+QbMVJhhZvhF6FKaCfKu4hzvC87RTJAvFef4WnCOZoJ0VirMsEpZTQU5Bh4D8wXWPg886b6RXniGpoK0wCBhDBLGIGEMEsYgYQwSxiBhDBLGIGEMEsYgYQwSxiBhDBLGIGEMEsYgYQwSxiBhDBLGIGEMEsYgYQwSxiBhDBLGIGEMEsYgkxzkzbinvQVe1wzyfNzT3gIbNYMsAL/HPXGwX8C9akGGUbp/JNPltqvGGAaZBQ6vWNAkO+j2pnqQc1F2vHydXaa2xxbjknvKM2BrAn8ccwt4Wv2eIUmSJEmSJEmDc04B501RY10BTYwAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

const PenggunaIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="18" height="18" fill="url(#pattern0_213_1879)" />
    <defs>
      <pattern
        id="pattern0_213_1879"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_213_1879" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_213_1879"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const PesananIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="26" height="26" fill="url(#pattern0_213_1880)" />
    <defs>
      <pattern
        id="pattern0_213_1880"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_213_1880" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_213_1880"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEUElEQVR4nO2dX6gVRRzHt79WpoaRWYFQQeCDJAmRIaLmi1kvGeRD+JBglAZJ5FURu74kSvpQgUQPcaWiUClExLiiUuBD+FJYUiGIiGSJUdkfb9YnBie46c6cc+/ZnfPbM98P7NvMzm/mc/bs7szsTFEIIYQQQgghhBBCCCFKAa4CHgJeAPp65FgFLAZubZR2YCbwBb3Ln8Am4PrCOsBCH3AO7DctBbgD+Jm82FRYBXiN/PgDmFhYBPiGPHmqykacAcz3xyzg3tH+L0buHUeAwR44zgXqt7pKIQdLCvgV2AHMHuG5QswpegDK28rRn6KQ/3BiJrR5LglJIMTxNTC5jXNJSCIhjsPAmBbnkpCEQhx9Lc4lIYmF/ASMjZxLQqoEuAmY26If6olIfgmpA2AS8GOgdd+I5JOQugDeCbTuR5E8ElIX7mUn0LoHI3kkpC4kpEtv6iEk5EokxBgSYgwJMYaEGENCjCEhxmiikKFAnrcMTHLrq+A4HqjfWqtCviJPnrQqZAv58Ttwm1Uh95Ef79UuowMhK8mP74EbrQr5nDxZYFWIm8+V40S5l6wKCaGJcp0iIb3xYqgrpC4k5Ep0hRhDQowhIcaQEGNIiDEkxBgSYgwJMYaEGENCjCEhxpAQY0iIMSTEGE0UcjHTiXLrrAo5RZ48Y1XIdvLkbqtC7gf+Ji921i5jtEJ8vnXkw8l2FuXpqhCf90XgN3qbw8CUJDJ8o74SCORQm/nv9Ovc7jAwwW2womMvsA141K1LXL+F/zeoWwC5jC+TBiIuASwKCHHrKo5TOyUGmBr5/3w2dTzikpTvIlPw71IjJQZ4NXKVHAXuSR1T1rhPtVosHX4e2Aw8CNzc7XizwC0SHBEiUvX2DhNyNbDbFyy6LcRLGe+/ghIWhHgpNwDvBgLKnf7kQoZtY/Q0cKLbLWCM7ggZJmYMsATY5Z+0cqe/sIK/atzOOg8A70eCdsOfy4HHgA2RL3bxw6XzKzoWRoaW/wHe9t1ES1osKn00UobN9zHgs4iM8SX7lgwF0m+oMKZHIo28ouTHtTPSh1f/AgFVApwJVGZ5IP2uQPoPKozp+UAZP5R1oQPTIgKnFk0issPO4yNcrGZfhTGtCZRxJJB+XETIzKJJ+CHNtm96wKeB9AMVxrQ0UMb5su4eYF5EiM17RQjgk0BF3A18xmVpn4tUvLI9nYCHI+UMANcNS3u7G4ALpP3F9J6FZfinqBBD/p6xNXJlVP5f7bt+3HBBiGPAm36t+9AGBI4Pi6YB3AKcpTMO1BDXejpnVtFE3KNkB5W+AEyvIaaxHfYuNO/quOxZfrR9XstqjGv6KHsVjrW7S51ZgGvdxi8jvDKWJojLbSd+eoRzr9JMhEuB75L4tkWlB90U1IQxTfaz8f+KxOQWKnu5cU9V7QBc43YMBTa6N3D/aDzgRyK79ubrxSzzfVl7gI+B190eW24vrm7FJYQQQgghig74F/120S12iesgAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

const TimIcon = () => (
  <svg
    width="21"
    height="13"
    viewBox="0 0 21 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.57812 1.76562C3.38021 0.963542 4.35417 0.5625 5.5 0.5625C6.64583 0.5625 7.61979 0.963542 8.42188 1.76562C9.22396 2.56771 9.625 3.54167 9.625 4.6875C9.625 6.09115 9.05208 7.20833 7.90625 8.03906C8.96615 8.55469 9.76823 9.29948 10.3125 10.2734C10.8568 9.29948 11.6589 8.55469 12.7188 8.03906C11.5729 7.20833 11 6.09115 11 4.6875C11 3.54167 11.401 2.56771 12.2031 1.76562C13.0052 0.963542 13.9792 0.5625 15.125 0.5625C16.2708 0.5625 17.2448 0.963542 18.0469 1.76562C18.849 2.56771 19.25 3.54167 19.25 4.6875C19.25 6.09115 18.6771 7.20833 17.5312 8.03906C18.4766 8.4974 19.2214 9.17057 19.7656 10.0586C20.3385 10.918 20.625 11.8776 20.625 12.9375H19.25C19.25 11.7917 18.849 10.8177 18.0469 10.0156C17.2448 9.21354 16.2708 8.8125 15.125 8.8125C13.9792 8.8125 13.0052 9.21354 12.2031 10.0156C11.401 10.8177 11 11.7917 11 12.9375H9.625C9.625 11.7917 9.22396 10.8177 8.42188 10.0156C7.61979 9.21354 6.64583 8.8125 5.5 8.8125C4.35417 8.8125 3.38021 9.21354 2.57812 10.0156C1.77604 10.8177 1.375 11.7917 1.375 12.9375H0C0 11.8776 0.272135 10.918 0.816406 10.0586C1.38932 9.17057 2.14844 8.4974 3.09375 8.03906C1.94792 7.20833 1.375 6.09115 1.375 4.6875C1.375 3.54167 1.77604 2.56771 2.57812 1.76562ZM7.43359 2.75391C6.91797 2.20964 6.27344 1.9375 5.5 1.9375C4.72656 1.9375 4.06771 2.20964 3.52344 2.75391C3.00781 3.26953 2.75 3.91406 2.75 4.6875C2.75 5.46094 3.00781 6.11979 3.52344 6.66406C4.06771 7.17969 4.72656 7.4375 5.5 7.4375C6.27344 7.4375 6.91797 7.17969 7.43359 6.66406C7.97786 6.11979 8.25 5.46094 8.25 4.6875C8.25 3.91406 7.97786 3.26953 7.43359 2.75391ZM17.0586 2.75391C16.543 2.20964 15.8984 1.9375 15.125 1.9375C14.3516 1.9375 13.6927 2.20964 13.1484 2.75391C12.6328 3.26953 12.375 3.91406 12.375 4.6875C12.375 5.46094 12.6328 6.11979 13.1484 6.66406C13.6927 7.17969 14.3516 7.4375 15.125 7.4375C15.8984 7.4375 16.543 7.17969 17.0586 6.66406C17.6029 6.11979 17.875 5.46094 17.875 4.6875C17.875 3.91406 17.6029 3.26953 17.0586 2.75391Z"
      fill="white"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.06641 0.8125H7.625H10.375H10.9336L11.0625 1.37109L11.4492 3.39062C12.0794 3.64844 12.6667 4.00651 13.2109 4.46484L15.2305 3.77734L15.7891 3.60547L16.0469 4.07812L17.4219 6.48438L17.6797 6.95703L17.293 7.34375L15.7461 8.67578C15.832 9.19141 15.875 9.54948 15.875 9.75C15.875 9.95052 15.832 10.3086 15.7461 10.8242L17.293 12.1562L17.6797 12.543L17.4219 13.0156L16.0469 15.4219L15.7891 15.8945L15.2305 15.7227L13.2109 15.0352C12.6667 15.4935 12.0794 15.8516 11.4492 16.1094L11.0625 18.1289L10.9336 18.6875H10.375H7.625H7.06641L6.9375 18.1289L6.55078 16.1094C5.92057 15.8516 5.33333 15.4935 4.78906 15.0352L2.76953 15.7227L2.21094 15.8945L1.95312 15.4219L0.578125 13.0156L0.320312 12.543L0.707031 12.1562L2.25391 10.8242C2.16797 10.3086 2.125 9.95052 2.125 9.75C2.125 9.54948 2.16797 9.19141 2.25391 8.67578L0.707031 7.34375L0.320312 6.95703L0.578125 6.48438L1.95312 4.07812L2.21094 3.60547L2.76953 3.77734L4.78906 4.46484C5.33333 4.00651 5.92057 3.64844 6.55078 3.39062L6.9375 1.37109L7.06641 0.8125ZM8.18359 2.1875L7.83984 3.99219L7.75391 4.37891L7.36719 4.50781C6.59375 4.76562 5.90625 5.16667 5.30469 5.71094L4.96094 5.96875L4.61719 5.88281L2.85547 5.28125L2.03906 6.65625L3.41406 7.85938L3.75781 8.11719L3.62891 8.54688C3.54297 8.91927 3.5 9.32031 3.5 9.75C3.5 10.1797 3.54297 10.5807 3.62891 10.9531L3.75781 11.3828L3.41406 11.6406L2.03906 12.8438L2.85547 14.2188L4.61719 13.6172L4.96094 13.5312L5.30469 13.7891C5.90625 14.3333 6.59375 14.7344 7.36719 14.9922L7.75391 15.1211L7.83984 15.5078L8.18359 17.3125H9.81641L10.1602 15.5078L10.2461 15.1211L10.6328 14.9922C11.4062 14.7344 12.0938 14.3333 12.6953 13.7891L13.0391 13.5312L13.3828 13.6172L15.1445 14.2188L15.9609 12.8438L14.5859 11.6406L14.2852 11.3828L14.3711 10.9531C14.457 10.5807 14.5 10.1797 14.5 9.75C14.5 9.32031 14.457 8.91927 14.3711 8.54688L14.2422 8.11719L14.5859 7.85938L15.9609 6.65625L15.1445 5.28125L13.3828 5.88281L13.0391 5.96875L12.6953 5.71094C12.0938 5.16667 11.4062 4.76562 10.6328 4.50781L10.2461 4.37891L10.1602 3.99219L9.81641 2.1875H8.18359ZM6.55078 7.34375C7.23828 6.65625 8.05469 6.3125 9 6.3125C9.94531 6.3125 10.7474 6.65625 11.4062 7.34375C12.0938 8.0026 12.4375 8.80469 12.4375 9.75C12.4375 10.6953 12.0938 11.5117 11.4062 12.1992C10.7474 12.8581 9.94531 13.1875 9 13.1875C8.05469 13.1875 7.23828 12.8581 6.55078 12.1992C5.89193 11.5117 5.5625 10.6953 5.5625 9.75C5.5625 8.80469 5.89193 8.0026 6.55078 7.34375ZM10.4609 8.28906C10.0599 7.88802 9.57292 7.6875 9 7.6875C8.42708 7.6875 7.9401 7.88802 7.53906 8.28906C7.13802 8.6901 6.9375 9.17708 6.9375 9.75C6.9375 10.3229 7.13802 10.8099 7.53906 11.2109C7.9401 11.612 8.42708 11.8125 9 11.8125C9.57292 11.8125 10.0599 11.612 10.4609 11.2109C10.862 10.8099 11.0625 10.3229 11.0625 9.75C11.0625 9.17708 10.862 8.6901 10.4609 8.28906Z"
      fill="white"
    />
  </svg>
);

// --- komponen wrap suspensenya ---
async function MetrikCards() {
  const [ratingNilai, totalPenjualan, pelangganBaru, totalProduk] =
    await Promise.all([
      getRatingToko(),
      getTotalPenjualan(),
      getPelangganBaru(),
      getTotalProduk(),
    ]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-8">
      <div className="bg-[#B9BFC7] p-4 rounded-lg flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <StarIcon className="h-6 w-6 text-black" />
          <h3 className={`text-lg text-red-500 ${creepster.className}`}>
            Rating Toko
          </h3>
        </div>
        <p className="text-2xl font-bold text-red-600">{ratingNilai}</p>
        <p className={`text-xs text-gray-500 mt-1 ${nunitoSans.className}`}>
          dari bulan lalu
        </p>
      </div>
      <div className="bg-[#B9BFC7] p-4 rounded-lg flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <ShoppingCartIcon className="h-6 w-6 text-black" />
          <h3 className={`text-lg text-red-500 ${creepster.className}`}>
            Total Penjualan
          </h3>
        </div>
        <p className="text-2xl font-bold text-red-600">
          Rp {totalPenjualan.toLocaleString("id-ID")}
        </p>
        <p className={`text-xs text-gray-500 mt-1 ${nunitoSans.className}`}>
          dari bulan lalu
        </p>
      </div>
      <div className="bg-[#B9BFC7] p-4 rounded-lg flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <UsersIcon className="h-6 w-6 text-black" />
          <h3 className={`text-lg text-red-500 ${creepster.className}`}>
            Pelanggan Baru
          </h3>
        </div>
        <p className="text-2xl font-bold text-red-600">{pelangganBaru}</p>
        <p className={`text-xs text-gray-500 mt-1 ${nunitoSans.className}`}>
          dari bulan lalu
        </p>
      </div>
      <div className="bg-[#B9BFC7] p-4 rounded-lg flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <ArchiveBoxIcon className="h-6 w-6 text-black" />
          <h3 className={`text-lg text-red-500 ${creepster.className}`}>
            Total Produk
          </h3>
        </div>
        <p className="text-2xl font-bold text-red-600">{totalProduk}</p>
        <p className={`text-xs text-gray-500 mt-1 ${nunitoSans.className}`}>
          dari bulan lalu
        </p>
      </div>
    </div>
  );
}

async function PenjualanTerakhirTable() {
  const penjualanTerakhir = await getPenjualanTerakhir();
  return (
    <div className="bg-[#B9BFC7] p-6 rounded-lg mb-6 items-start mx-auto ml-8 mt-10">
      <h3 className={`text-5xl text-red-900 mb-4 ${jollyLodger.className}`}>
        Penjualan Terakhir
      </h3>
      <div className="overflow-x-auto">
        <table className={`w-full text-left ${nunitoSans.className}`}>
          <thead>
            <tr className="border-b border-gray-400 text-gray-900">
              <th className="pb-3 pl-4 pr-2 w-1/4">Produk</th>
              <th className="pb-3 px-2 w-1/5">Pembeli</th>
              <th className="pb-3 px-2 w-1/5">Jumlah</th>
              <th className="pb-3 px-2 w-1/5">Status</th>
              <th className="pb-3 pr-4 text-center w-1/5">Total</th>
            </tr>
          </thead>
          <tbody>
            {penjualanTerakhir.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-2">{p.produk.nama}</td>
                <td className="p-2">{p.pelanggan.nama}</td>
                <td className="p-2">{p.jumlah}</td>
                <td className="p-2">{p.status}</td>
                <td className="p-2">Rp {p.total.toLocaleString("id-ID")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

async function ProdukUnggulanGrid() {
  const produkUnggulan = await getProdukUnggulan();
  return (
    <div className="bg-[#B9BFC7] p-6 rounded-lg mb-6 items-start mx-auto ml-8 mt-10">
      <h3
        className={`text-5xl text-red-900 font-bold mb-4 ${jollyLodger.className}`}
      >
        Produk Unggulan
      </h3>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${nunitoSans.className}`}
      >
        {produkUnggulan.map((p) => (
          <div key={p.id} className="bg-gray-100 p-4 rounded shadow">
            <Image
              src={
                p.gambar_url.startsWith("http")
                  ? p.gambar_url
                  : `/${p.gambar_url}`
              }
              alt={p.nama}
              width={400}
              height={200}
              className="rounded h-32 w-full object-cover"
            />
            <h4 className="text-lg font-bold mt-2">{p.nama}</h4>
            <p className="text-sm">Rp {p.harga.toLocaleString("id-ID")}</p>
            <p className="text-xs text-gray-500">{p.jumlahTerjual} terjual</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Main Page ---
export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-[#1e2a3e]">
      {/* Left Sidebar */}
      <div className="w-56 bg-[#65181b] shadow-sm flex flex-col fixed h-full">
        <div className="p-4">
          <h1 className={`text-4xl ${jollyLodger.className} mb-4 text-white`}>
            <span className="text-blue-400">Haunted</span>
            <span className="text-red-500">Hollow</span>
          </h1>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          <div className="flex items-center px-4 py-3 bg-gray-800 text-white rounded">
            <a href="/admin-dashboard" className="flex items-center w-full">
              <div className="mr-3">
                <DashboardIcon />
              </div>
              <span>Dashboard</span>
            </a>
          </div>

          <div className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#6a2c27] rounded">
            <a href="/admin-produk" className="flex items-center w-full">
              <div className="mr-3">
                <ProdukIcon />
              </div>
              <span>Produk</span>
            </a>
          </div>

          <div className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#6a2c27] rounded">
            <a href="/admin-pengguna" className="flex items-center w-full">
              <div className="mr-3">
                <PenggunaIcon />
              </div>
              <span>Pengguna</span>
            </a>
          </div>

          <div className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#6a2c27] rounded">
            <a href="admin-pesanan" className="flex items-center w-full">
              <div className="mr-3">
                <PesananIcon />
              </div>
              <span>Pesanan</span>
            </a>
          </div>

          <div className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#6a2c27] rounded">
            <a href="/admin-tim" className="flex items-center w-full">
              <div className="mr-3">
                <TimIcon />
              </div>
              <span>Tim</span>
            </a>
          </div>

          <div className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#6a2c27] rounded">
            <a href="/admin-pengaturan" className="flex items-center w-full">
              <div className="mr-3">
                <SettingsIcon />
              </div>
              <span>Akun</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 pl-56 p-6 ">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-[#1b2838] border-b border-gray-700">
          <div className="flex items-center w-full">
            <h1
              className={`text-5xl text-red-600 tracking-wider mr-auto ${creepster.className} mb-4`}
              style={{ WebkitTextStroke: "0.5px white" }}
            >
              DASHBOARD
            </h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded bg-gray-200 text-white border border-gray-600 focus:outline-none"
              />
              <svg
                className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </div>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-8">
              {[...Array(4)].map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <MetrikCards />
        </Suspense>
        <Suspense fallback={<TableSkeleton />}>
          <PenjualanTerakhirTable />
        </Suspense>
        <Suspense fallback={<ProdukUnggulanSkeleton />}>
          <ProdukUnggulanGrid />
        </Suspense>
      </div>
    </div>
  );
}