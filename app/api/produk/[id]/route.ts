import { NextResponse } from 'next/server'
import prisma from '@/app/lib/prisma'

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const formData = await req.formData();

  try {
    const nama = formData.get("nama") as string;
    const harga = parseInt(formData.get("harga") as string);
    const stok = parseInt(formData.get("stok") as string);
    const status = formData.get("status") as string;

    // Gambar
    const gambar = formData.get("gambar") as File | null;
    const gambar_url = gambar && gambar.name !== "" ? gambar.name : formData.get("gambarLama") as string;

    const updated = await prisma.produk.update({
      where: { id },
      data: { nama, harga, stok, status, gambar_url },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error("Gagal update produk:", err);
    return NextResponse.json({ error: "Gagal update produk" }, { status: 500 });
  }
}



// GET /api/produk/[id]
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = params.id

  try {
    const produk = await prisma.produk.findUnique({
      where: { id },
    })

    if (!produk) {
      return NextResponse.json({ error: 'Produk tidak ditemukan' }, { status: 404 })
    }

    return NextResponse.json(produk)
  } catch (err) {
    console.error('Gagal ambil produk:', err)
    return NextResponse.json({ error: 'Gagal ambil produk' }, { status: 500 })
  }
}
