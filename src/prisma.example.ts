// Example to usage prisma
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({})

async function main() {
  const a = await prisma.post.create({
    data: {
      title: 'A test 1',
    },
  })

  const b = await prisma.post.create({
    data: {
      title: 'A test 2',
    },
  })

  const c = await prisma.post.findFirst({
    where: {
      title: {
        startsWith: 'A test',
      },
    },
    orderBy: {
      title: 'asc',
    },
    take: -1, // Reverse the list
  })

  const d = await prisma.post.findMany({
    where: {
      title: {
        startsWith: 'A test',
      },
    },
    orderBy: {
      title: 'asc',
    },
    take: -1, // Reverse the list
  })
}

main()