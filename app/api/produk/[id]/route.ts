import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// const prisma = new PrismaClient();

// app/api/produk/[id]/route.ts
export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "ID tidak ditemukan di URL" }, { status: 400 });
  }

  try {
    const produk = await prisma.produk.findUnique({ where: { id } });

    if (!produk) {
      return NextResponse.json({ error: "Produk tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(produk);
  } catch (error) {
    console.error("Error ambil produk:", error);
    return NextResponse.json({ error: "Gagal mengambil data produk" }, { status: 500 });
  }
}




// PUT /api/produk/[id]
export async function PUT(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "ID tidak ditemukan di URL" }, { status: 400 });
  }

  try {
    const formData = await req.formData();
    const nama = formData.get("nama") as string;
    const hargaStr = formData.get("harga") as string;
    const stokStr = formData.get("stok") as string;
    const status = formData.get("status") as string;

    if (!nama || !hargaStr || !stokStr || !status) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    const harga = parseInt(hargaStr);
    const stok = parseInt(stokStr);

    if (isNaN(harga) || isNaN(stok)) {
      return NextResponse.json({ error: "Harga dan stok harus angka" }, { status: 400 });
    }

    const gambarFile = formData.get("gambar") as File | null;
    const gambarLama = formData.get("gambarLama") as string | null;

    let gambar_url = "";

    if (gambarFile && gambarFile.name) {
      gambar_url = gambarFile.name;
    } else if (gambarLama) {
      gambar_url = gambarLama;
    } else {
      gambar_url = "";
    }

    const updated = await prisma.produk.update({
      where: { id },
      data: { nama, harga, stok, status, gambar_url },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Gagal update produk:", error);
    return NextResponse.json({ error: "Gagal update produk" }, { status: 500 });
  }
}


// DELETE produk berdasarkan ID
export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  if (!id) {
    return NextResponse.json({ error: "ID tidak ditemukan" }, { status: 400 });
  }

  try {
    await prisma.produk.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Produk berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Gagal menghapus produk" }, { status: 500 });
  }
}

