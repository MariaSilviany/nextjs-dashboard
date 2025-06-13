import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // gunakan default import dari prisma.ts

export async function DELETE(req: NextRequest) {
  // Ambil ID dari URL path
  const id = req.nextUrl.pathname.split("/").pop();

  // Validasi ID harus UUID
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!id || !uuidRegex.test(id)) {
    return NextResponse.json(
      { error: "ID tidak valid (bukan UUID)" },
      { status: 400 }
    );
  }

  try {
    const deletedPesanan = await prisma.pesanan.delete({
      where: { id },
    });

    return NextResponse.json({
      message: "Pesanan berhasil dihapus",
      pesanan: deletedPesanan,
    });
  } catch (error: any) {
    console.error("Gagal menghapus pesanan:", error);

    // Prisma error: record tidak ditemukan
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Pesanan tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Terjadi kesalahan pada server" },
      { status: 500 }
    );
  }
}
