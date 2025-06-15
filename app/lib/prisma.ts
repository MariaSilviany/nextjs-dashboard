import { PrismaClient } from "@prisma";
import { LatestInvoice } from "./definitions";
import { formatCurrency } from "./utils";

const prisma = new PrismaClient();

export async function fetchRevenuePrisma() {
  try {
    const data = await prisma.pendapatan.findMany();
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchLatestInvoicesPrisma() {
  try {
    const data = await prisma.penjualan.findMany({
      take: 5,
      orderBy: {
        tanggal: "desc", // sesuaikan dengan field yg ada di penjualan
      },
    });

    const latestInvoices = data.map((invoice) => ({
      amount: formatCurrency(invoice.total),
      id: invoice.id,
    })) as unknown as LatestInvoice[];

    return latestInvoices;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}

export async function fetchCardDataPrisma() {
  try {
    const penjualanCountPromise = prisma.penjualan.count();
    const pelangganCountPromise = prisma.pelanggan.count();

    // karena Prisma belum support groupBy() di model yang tidak valid tanpa schema eksplisit,
    // kita ambil semua penjualan dan hitung statusnya manual
    const allPenjualan = await prisma.penjualan.findMany();

    const paid = allPenjualan
      .filter((p) => p.status === "Selesai")
      .reduce((sum, p) => sum + p.total, 0);

    const pending = allPenjualan
      .filter((p) => p.status === "Proses" || p.status === "Dikirim")
      .reduce((sum, p) => sum + p.total, 0);

    const [jumlahPenjualan, jumlahPelanggan] = await Promise.all([
      penjualanCountPromise,
      pelangganCountPromise,
    ]);

    return {
      numberOfCustomers: jumlahPelanggan,
      numberOfInvoices: jumlahPenjualan,
      totalPaidInvoices: formatCurrency(paid),
      totalPendingInvoices: formatCurrency(pending),
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}

export default prisma;
