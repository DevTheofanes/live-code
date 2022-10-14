// import { example } from './seeders';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
//   await prisma.example.createMany({
//     data: example,
//     skipDuplicates: true,
//   });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
