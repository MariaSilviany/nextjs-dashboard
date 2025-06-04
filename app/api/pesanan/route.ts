import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const nama = formData.get("nama")?.toString();
    const produk_id = formData.get("produk_id")?.toString();
    const jumlah = formData.get("jumlah")?.toString();
    const status = formData.get("status")?.toString();

    if (!nama || !produk_id || !jumlah || !status) {
      return NextResponse.json({ error: "Semua field wajib diisi" }, { status: 400 });
    }

    // Ambil produk dan harga untuk hitung total
    const produk = await prisma.produk.findUnique({
      where: { id: produk_id },
    });

    if (!produk) {
      return NextResponse.json({ error: "Produk tidak ditemukan" }, { status: 404 });
    }

    const total = produk.harga * parseInt(jumlah);

    const pesananBaru = await prisma.pesanan.create({
      data: {
        nama,
        produk_id,
        total,
        status,
      },
    });

    return NextResponse.json(pesananBaru, { status: 201 });
  } catch (error) {
    console.error("Gagal tambah pesanan:", error);
    return NextResponse.json({ error: "Terjadi kesalahan saat menambah pesanan" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const pesanan = await prisma.pesanan.findMany({
      include: {
        produk: true, // join produk
      },
      orderBy: {
        tanggal: 'desc',
      },
    });

    return NextResponse.json(pesanan, { status: 200 });
  } catch (error) {
    console.error("Gagal mengambil pesanan:", error);
    return NextResponse.json({ error: "Terjadi kesalahan saat mengambil pesanan" }, { status: 500 });
  }
}
