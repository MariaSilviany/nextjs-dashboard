import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import { penjualan, pelanggan, pendapatan, pesanan, users, produk } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.nama}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedProduk() {
  await sql`
    CREATE TABLE IF NOT EXISTS produk (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      nama VARCHAR(255) NOT NULL,
      harga INT NOT NULL,
      deskripsi TEXT NOT NULL,
      gambar_url TEXT NOT NULL,
      kategori VARCHAR(100) NOT NULL,
      stok INT NOT NULL,
      terjual INT NOT NULL
    );
  `;

  const insertedProduk = await Promise.all(
    produk.map((item) => sql`
      INSERT INTO produk (id, nama, harga, deskripsi, gambar_url, kategori, stok, terjual)
      VALUES (${item.id}, ${item.nama}, ${item.harga}, ${item.deskripsi}, ${item.gambar_url}, ${item.kategori}, ${item.stok}, ${item.terjual})
      ON CONFLICT (id) DO NOTHING;
    `)
  );

  return insertedProduk;
}

async function seedPenjualan() {
  await sql`
    CREATE TABLE IF NOT EXISTS penjualan (
      id TEXT PRIMARY KEY,
      pelanggan_id UUID NOT NULL,
      produk_id UUID NOT NULL,
      jumlah INT NOT NULL,
      total INT NOT NULL,
      status VARCHAR(50) NOT NULL,
      tanggal TIMESTAMP NOT NULL
    );
  `;

  const insertedPenjualan = await Promise.all(
    penjualan.map((trx) => sql`
      INSERT INTO penjualan (id, pelanggan_id, produk_id, jumlah, total, status, tanggal)
      VALUES (${trx.id}, ${trx.pelanggan_id}, ${trx.produk_id}, ${trx.jumlah}, ${trx.total}, ${trx.status}, ${trx.tanggal})
      ON CONFLICT (id) DO NOTHING;
    `)
  );

  return insertedPenjualan;
}


async function seedPelanggan() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS pelanggan (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      nama VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      alamat TEXT NOT NULL,
      telepon VARCHAR(20) NOT NULL
    );
  `;

  const insertedPelanggan = await Promise.all(
    pelanggan.map(
      (customer) => sql`
        INSERT INTO pelanggan (id, nama, email, alamat, telepon)
        VALUES (${customer.id}, ${customer.nama}, ${customer.email}, ${customer.alamat}, ${customer.telepon})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedPelanggan;
}

async function seedPendapatan() {
  await sql`
    CREATE TABLE IF NOT EXISTS pendapatan (
      bulan VARCHAR(7) PRIMARY KEY,
      pendapatan INT NOT NULL
  );
  `;

  const insertedPendapatan= await Promise.all(
    pendapatan.map(
      (rev) => sql`
        INSERT INTO pendapatan (bulan, pendapatan)
        VALUES (${rev.bulan}, ${rev.pendapatan})
        ON CONFLICT (bulan) DO NOTHING;
      `,
    ),
  );

  return insertedPendapatan;
}

async function seedPesanan() {
  await sql`
    CREATE TABLE IF NOT EXISTS pesanan (
      id_pesanan VARCHAR(10) PRIMARY KEY,
      id_pelanggan UUID REFERENCES pelanggan(id),
      produk TEXT NOT NULL,
      total INTEGER NOT NULL,
      tanggal TIMESTAMP NOT NULL,
      status VARCHAR(50) NOT NULL
    );
  `;

  const insertedPesanan = await Promise.all(
    pesanan.map(
      (pdt) => sql`
        INSERT INTO pesanan (id_pesanan, id_pelanggan, produk, total, tanggal, status)
        VALUES (${pdt.id_pesanan}, ${pdt.id_pelanggan}, ${pdt.produk}, ${pdt.total}, ${pdt.tanggal}, ${pdt.status})
        ON CONFLICT (id_pesanan) DO NOTHING;
      `,
    ),
  );
  return insertedPesanan;
}

export async function GET() {
  try {
    const result = await sql.begin(async (sql) => {
      await seedUsers();
      await seedPelanggan();
      await seedProduk();
      await seedPenjualan();
      await seedPendapatan();
      await seedPesanan();
    });

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}