import { prisma } from '@/app/_utils/prismaSingleton';
import type { Prisma } from '@prisma/client';

export type Post = Exclude<Prisma.PromiseReturnType<typeof PostRepository.findUnique>, null>;

export namespace PostRepository {
  export async function findMany() {
    return await prisma.post.findMany({
      take: 4,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: true,
      },
    });
  }

  export async function findUnique(id: string) {
    return await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
  }
}
