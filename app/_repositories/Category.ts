import { prisma } from '@/app/_utils/prismaSingleton';
import type { Prisma } from '@prisma/client';
export type Categories = Exclude<
  Prisma.PromiseReturnType<typeof CategoryRepository.findUnique>,
  null
>;
export namespace CategoryRepository {
  export async function findMany() {
    return await prisma.category.findMany({
      include: {
        Post: true,
      },
    });
  }
  export async function findUnique(id: string) {
    return await prisma.category.findUnique({
      where: {
        id: id,
      },
    });
  }
  export async function create(category: Categories) {
    const createdCategory = await prisma.category.create({
      data: category,
    });
    return createdCategory;
  }
}
