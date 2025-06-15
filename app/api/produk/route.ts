import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import cloudinary from "@/lib/cloudinary";
import { IncomingForm, File } from "formidable";
import { Readable } from "stream";

// Nonaktifkan body parser bawaan Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper: Baca stream file menjadi buffer
async function bufferFromReadable(readable: Readable): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  for await (const chunk of readable) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

// GET semua produk
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("limit") || "10");

    const skip = (page - 1) * pageSize;

    const [data, total] = await Promise.all([
      prisma.produk.findMany({
        skip,
        take: pageSize,
        orderBy: { nama: "asc" },
      }),
      prisma.produk.count(),
    ]);

    return NextResponse.json({ data, total });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Gagal mengambil data produk" }, { status: 500 });
  }
}

// POST (tambah produk baru)
export async function POST(req: NextRequest) {
  try {
    const form = new IncomingForm({ multiples: false });

    const { fields, files }: { fields: any; files: { gambar?: File } } = await new Promise(
      (resolve, reject) => {
        form.parse(req as any, (err, fields, files) => {
          if (err) reject(err);
          else resolve({ fields, files });
        });
      }
    );

    const { nama, harga, stok, status } = fields;
    const gambar = files.gambar;

    let imageUrl = "";

    if (gambar && gambar.filepath) {
      const fileStream = Readable.from(gambar.filepath);
      const fileBuffer = await bufferFromReadable(fileStream);

      const uploaded = await new Promise<{ secure_url: string }>((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            resource_type: "image",
            folder: "produk",
            public_id: `${uuidv4()}-${gambar.originalFilename?.split(".")[0]}`,
          },
          (error, result) => {
            if (error || !result) reject(error);
            else resolve(result);
          }
        ).end(fileBuffer);
      });

      imageUrl = uploaded.secure_url;
    }

    const newProduk = await prisma.produk.create({
      data: {
        nama,
        harga: parseInt(harga),
        stok: parseInt(stok),
        status,
        gambar_url: imageUrl,
      },
    });

    return NextResponse.json({ data: newProduk }, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Gagal menambahkan produk" }, { status: 500 });
  }
}
