import { prisma } from '@/app/_utils/prismaSingleton';
import type { Prisma } from '@prisma/client';

export type Address = Exclude<Prisma.PromiseReturnType<typeof AddressRepository.findUnique>, null>;

export namespace AddressRepository {
  export async function findMany() {
    return await prisma.address.findMany({
      include: {
        user: true,
      },
    });
  }

  export async function findUnique(id: string) {
    return await prisma.address.findUnique({
      where: {
        id: id,
      },
    });
  }

  export async function create(address: Address) {
    const createAddress = await prisma.address.create({
      data: address,
    });
    return createAddress;
  }
}
