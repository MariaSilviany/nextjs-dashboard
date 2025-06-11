import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(
  req: NextRequest,
  context: { params: Record<string, string> } // GANTI DI SINI
) {
  const id = context.params.id;

  // Validasi UUID
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(id)) {
    return NextResponse.json({ error: "ID tidak valid (bukan UUID)" }, { status: 400 });
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
    return NextResponse.json({ error: "Terjadi kesalahan saat menghapus pesanan" }, { status: 500 });
  }
}
