import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const pesanan = await prisma.pesanan.findMany({
      include: {
        produk: true, // ambil data produk terkait
      },
      orderBy: {
        tanggal: "desc", // supaya terbaru dulu
      },
    });
    return NextResponse.json(pesanan);
  } catch (error) {
    console.error("Error fetching pesanan:", error);
    return NextResponse.json({ error: "Gagal mengambil pesanan" }, { status: 500 });
  }
}


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

    // ✅ Validasi UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(produk_id)) {
      return NextResponse.json(
        { error: 'produk_id is not a valid UUID' },
        { status: 400 }
      );
    }

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