import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop(); // ambil ID dari URL path

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
  } catch (error) {
    console.error("Gagal menghapus pesanan:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat menghapus pesanan" },
      { status: 500 }
    );
  }
}
