import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Helper untuk ambil ID dari URL
function getIdFromUrl(req: NextRequest): string | null {
  const parts = req.nextUrl.pathname.split('/');
  return parts[parts.length - 1] || null;
}

// GET /api/produk/[id]
export async function GET(req: NextRequest) {
  const id = getIdFromUrl(req);
  if (!id) return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });

  try {
    const produk = await prisma.produk.findUnique({ where: { id } });

    if (!produk) {
      return NextResponse.json({ error: 'Produk tidak ditemukan' }, { status: 404 });
    }

    return NextResponse.json(produk);
  } catch (error: any) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Gagal mengambil data produk' }, { status: 500 });
  }
}

// PUT /api/produk/[id]
export async function PUT(req: NextRequest) {
  const id = getIdFromUrl(req);
  if (!id) return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });

  try {
    const formData = await req.formData();

    const nama = formData.get('nama') as string;
    const harga = parseInt(formData.get('harga') as string);
    const stok = parseInt(formData.get('stok') as string);
    const status = formData.get('status') as string;
    const gambarFile = formData.get('gambar') as File | null;
    const gambarLama = formData.get('gambarLama') as string | null;

    if (!nama || isNaN(harga) || isNaN(stok) || !status) {
      return NextResponse.json({ error: 'Field tidak lengkap atau tidak valid' }, { status: 400 });
    }

    const gambar_url = gambarFile?.name || gambarLama || '';

    const updated = await prisma.produk.update({
      where: { id },
      data: { nama, harga, stok, status, gambar_url },
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    console.error('PUT error:', error);
    return NextResponse.json({ error: 'Gagal update produk' }, { status: 500 });
  }
}

// DELETE /api/produk/[id]
export async function DELETE(req: NextRequest) {
  const id = getIdFromUrl(req);
  if (!id) return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });

  try {
    await prisma.produk.delete({ where: { id } });
    return NextResponse.json({ message: 'Produk berhasil dihapus' });
  } catch (error: any) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: 'Gagal menghapus produk' }, { status: 500 });
  }
}
