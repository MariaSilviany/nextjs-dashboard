import bcrypt from 'bcryptjs'; 
import postgres from 'postgres';
import { invoices, customers, revenue, users } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET() {
  try {
    // Hapus data lama terlebih dahulu (opsional untuk seed ulang)
    await prisma.order.deleteMany()
    await prisma.product.deleteMany()
    await prisma.user.deleteMany()

    // Tambah produk unggulan
    await prisma.product.createMany({
      data: [
        {
          name: 'Lilin Aroma Misterius',
          price: 50000,
          imageUrl: '/img/lilin.jpg',
          soldCount: 2300,
          isFeatured: true,
        },
        {
          name: 'Topeng Hantu Horor',
          price: 75000,
          imageUrl: '/img/topeng.jpg',
          soldCount: 2300,
          isFeatured: true,
        },
        {
          name: 'Patung Pemujaan Kuno',
          price: 150000,
          imageUrl: '/img/patung.jpg',
          soldCount: 2300,
          isFeatured: true,
        },
        {
          name: 'Boneka Seram',
          price: 120000,
          imageUrl: '/img/boneka.jpg',
          soldCount: 2300,
          isFeatured: true,
        },
      ],
    })

    // Tambah pengguna
    const katharina = await prisma.user.create({
      data: { name: 'Katharina', email: 'katharina@example.com' },
    })
    const john = await prisma.user.create({
      data: { name: 'John', email: 'john@example.com' },
    })
    const lusia = await prisma.user.create({
      data: { name: 'Lusia', email: 'lusia@example.com' },
    })

    // Tambah pesanan
    const lilin = await prisma.product.findFirst({ where: { name: 'Lilin Aroma Misterius' } })
    const boneka = await prisma.product.findFirst({ where: { name: 'Boneka Seram' } })

    if (lilin && boneka) {
      await prisma.order.createMany({
        data: [
          {
            productId: lilin.id,
            userId: katharina.id,
            quantity: 3,
            status: 'DIKIRIM',
            total: 198000,
          },
          {
            productId: lilin.id,
            userId: john.id,
            quantity: 1,
            status: 'PROSES',
            total: 66000,
          },
          {
            productId: boneka.id,
            userId: lusia.id,
            quantity: 2,
            status: 'SELESAI',
            total: 132000,
          },
        ],
      })
    }

    return NextResponse.json({ message: 'Seed data berhasil dimasukkan!' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Gagal melakukan seed' }, { status: 500 })
  }
}