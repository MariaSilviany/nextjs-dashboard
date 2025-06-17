import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET: Ambil semua produk
export async function GET() {
  try {
    const produk = await prisma.produk.findMany({
      orderBy: { nama: "asc" },
      select: {
        id: true,
        nama: true,
        harga: true,
        stok: true,
        status: true,
        gambar_url: true,
      },
    });

    return NextResponse.json({ data: produk, total: produk.length });
  } catch (error) {
    console.error("❌ GET /api/produk error:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data produk" },
      { status: 500 }
    );
  }
}

// POST: Tambah produk baru
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nama, harga, stok, status, gambar_url } = body;

    // Validasi input
    if (!nama || !harga || !stok || !status || !gambar_url) {
      return NextResponse.json(
        { error: "Semua field wajib diisi." },
        { status: 400 }
      );
    }

    const produkBaru = await prisma.produk.create({
      data: {
        nama,
        harga: parseInt(harga),
        stok: parseInt(stok),
        status,
        gambar_url, // bisa berupa base64 atau path dari public/
      },
    });

    return NextResponse.json({ data: produkBaru }, { status: 201 });
  } catch (error) {
    console.error("❌ POST /api/produk error:", error);
    return NextResponse.json(
      { error: "Gagal menambahkan produk" },
      { status: 500 }
    );
  }
}
