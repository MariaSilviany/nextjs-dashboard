import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// GET produk berdasarkan ID
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = context.params.id;
    const result = await sql`SELECT * FROM produk WHERE id = ${id};`;

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Produk tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ data: result.rows[0] });
  } catch (error: any) {
    return NextResponse.json({ error: "Gagal mengambil produk" }, { status: 500 });
  }
}

// PUT untuk update produk
export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = context.params.id;
    const body = await req.json();
    const {
      nama_produk,
      harga,
      stok,
      kategori,
      gambar,
      rating,
      in_stock,
    } = body;

    const result = await sql`
      UPDATE produk
      SET
        nama_produk = ${nama_produk},
        harga = ${harga},
        stok = ${stok},
        kategori = ${kategori},
        gambar = ${gambar},
        rating = ${rating},
        in_stock = ${in_stock}
      WHERE id = ${id}
      RETURNING *;
    `;

    return NextResponse.json({ data: result.rows[0] });
  } catch (error: any) {
    console.error("[PUT /api/produk/[id]] ERROR:", error.message || error);
    return NextResponse.json({ error: "Gagal mengupdate produk" }, { status: 500 });
  }
}

// DELETE produk berdasarkan ID
export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = context.params.id;
    await sql`DELETE FROM produk WHERE id = ${id};`;
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("[DELETE /api/produk/[id]] ERROR:", error.message || error);
    return NextResponse.json({ error: "Gagal menghapus produk" }, { status: 500 });
  }
}
