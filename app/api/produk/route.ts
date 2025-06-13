import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try { 
    const formData = await req.formData();

    const nama = formData.get("nama")?.toString();
    const harga = formData.get("harga")?.toString();
    const stok = formData.get("stok")?.toString();
    const status = formData.get("status")?.toString();
    const gambar = formData.get("gambar") as File;

    if (!nama || !harga || !stok || !status || !gambar) {
      return NextResponse.json({ error: "Semua field wajib diisi" }, { status: 400 });
    }

    const bytes = await gambar.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${uuidv4()}-${gambar.name}`;
    const filePath = path.join(process.cwd(), "public", fileName); // simpan langsung di public/
    await writeFile(filePath, buffer);

    const produkBaru = await prisma.produk.create({
      data: {
        nama,
        harga: parseInt(harga),
        stok: parseInt(stok),
        status,
        gambar_url: `/${fileName}`, 
      },
    });

    return NextResponse.json(produkBaru, { status: 201 });
  } catch (error) {
    console.error("Gagal tambah produk:", error);
    return NextResponse.json({ error: "Terjadi kesalahan saat menambah produk" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const produk = await prisma.produk.findMany(); // Ambil semua produk dari database
    return NextResponse.json(produk, { status: 200 });
  } catch (error) {
    console.error("Gagal mengambil produk:", error);
    return NextResponse.json({ error: "Terjadi kesalahan saat mengambil produk" }, { status: 500 });
  }
}
