import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

// const prisma = new PrismaClient();

// app/api/produk/[id]/route.ts
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const produk = await prisma.produk.findUnique({
      where: { id: params.id },
    });

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
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  try {
    const formData = await req.formData();

    // Ambil data dari form
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

    // Tangani gambar: file baru atau gambar lama (string)
    const gambarFile = formData.get("gambar") as File | null;
    const gambarLama = formData.get("gambarLama") as string | null;

    let gambar_url = "";

    if (gambarFile && gambarFile.name) {
      // TODO: upload gambarFile ke storage dan dapatkan URL-nya
      gambar_url = gambarFile.name;  // sementara pakai nama file saja
    } else if (gambarLama) {
      gambar_url = gambarLama;
    } else {
      gambar_url = "";
    }

    // Update produk di database
    const updated = await prisma.produk.update({
      where: { id },
      data: {
        nama,
        harga,
        stok,
        status,
        gambar_url,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Gagal update produk:", error);
    return NextResponse.json({ error: "Gagal update produk" }, { status: 500 });
  }
}



// DELETE /api/produk/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log("Mencoba menghapus produk dengan ID:", id);

  try {
    await prisma.$transaction([
      prisma.pesanan.deleteMany({ where: { produk_id: id } }),
      prisma.penjualan.deleteMany({ where: { produk_id: id } }),
      prisma.produk.delete({ where: { id } }),
    ]);

    return NextResponse.json({ message: "Produk dan relasinya berhasil dihapus" }, { status: 200 });
  } catch (error: any) {
    console.error("Gagal menghapus produk:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}