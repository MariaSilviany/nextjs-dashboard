/*
  Warnings:

  - You are about to drop the `customers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `invoices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `revenue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "customers";

-- DropTable
DROP TABLE "invoices";

-- DropTable
DROP TABLE "revenue";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "produk" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "nama" VARCHAR(255) NOT NULL,
    "harga" INTEGER NOT NULL,
    "gambar_url" VARCHAR(255) NOT NULL,
    "stok" INTEGER NOT NULL DEFAULT 0,
    "status" VARCHAR(50) NOT NULL,

    CONSTRAINT "produk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pelanggan" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "nama" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "alamat" TEXT NOT NULL,
    "telepon" VARCHAR(20) NOT NULL,

    CONSTRAINT "pelanggan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "penjualan" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "pelanggan_id" UUID NOT NULL,
    "produk_id" UUID NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "tanggal" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "penjualan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pendapatan" (
    "bulan" VARCHAR(7) NOT NULL,
    "pendapatan" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "rating_toko" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "nilai" DOUBLE PRECISION NOT NULL,
    "bulan" VARCHAR(7) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rating_toko_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "nama" VARCHAR(255) NOT NULL,
    "role" VARCHAR(20) NOT NULL DEFAULT 'admin',
    "email" VARCHAR(255) NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "tanggal" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pesanan" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "nama" VARCHAR(255) NOT NULL,
    "produk_id" UUID NOT NULL,
    "total" INTEGER NOT NULL,
    "tanggal" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" VARCHAR(50) NOT NULL,

    CONSTRAINT "pesanan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pelanggan_email_key" ON "pelanggan"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pendapatan_bulan_key" ON "pendapatan"("bulan");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "penjualan" ADD CONSTRAINT "penjualan_pelanggan_id_fkey" FOREIGN KEY ("pelanggan_id") REFERENCES "pelanggan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penjualan" ADD CONSTRAINT "penjualan_produk_id_fkey" FOREIGN KEY ("produk_id") REFERENCES "produk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pesanan" ADD CONSTRAINT "pesanan_produk_id_fkey" FOREIGN KEY ("produk_id") REFERENCES "produk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
