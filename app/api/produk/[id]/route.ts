import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Definisikan tipe untuk params
interface Params {
  id: string;
}

// GET
export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { id } = params;

  try {
    const produk = await prisma.produk.findUnique({ where: { id } });

    if (!produk) {
      return NextResponse.json({ error: 'Produk tidak ditemukan' }, { status: 404 });
    }

    return NextResponse.json(produk);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Gagal mengambil data produk' }, { status: 500 });
  }
}

// PUT
export async function PUT(request: NextRequest, { params }: { params: Params }) {
  const { id } = params;

  try {
    const formData = await request.formData();
    const nama = formData.get('nama') as string;
    const harga = parseInt(formData.get('harga') as string);
    const stok = parseInt(formData.get('stok') as string);
    const status = formData.get('status') as string;
    const gambarFile = formData.get('gambar') as File | null;
    const gambarLama = formData.get('gambarLama') as string | null;

    const gambar_url = gambarFile?.name || gambarLama || '';

    const updated = await prisma.produk.update({
      where: { id },
      data: { nama, harga, stok, status, gambar_url },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ error: 'Gagal update produk' }, { status: 500 });
  }
}

// DELETE
export async function DELETE(request: NextRequest, { params }: { params: Params }) {
  const { id } = params;

  try {
    await prisma.produk.delete({ where: { id } });
    return NextResponse.json({ message: 'Produk berhasil dihapus' });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: 'Gagal menghapus produk' }, { status: 500 });
  }
}