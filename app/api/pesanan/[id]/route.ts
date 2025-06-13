import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.pathname.split("/").pop();

  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!id || !uuidRegex.test(id)) {
    return NextResponse.json(
      { error: "ID tidak valid (bukan UUID)" },
      { status: 400 }
    );
  }

  try {
    const deleted = await prisma.pesanan.delete({
      where: { id },
    });

    return NextResponse.json({
      message: "Pesanan berhasil dihapus",
      pesanan: deleted,
    });
  } catch (error: any) {
    console.error("Gagal menghapus pesanan:", error);

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
