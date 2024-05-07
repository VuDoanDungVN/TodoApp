import { prisma } from '@/app/_utils/prismaSingleton';
import type { Prisma } from '@prisma/client';

export type PersonalInformation = Exclude<
  Prisma.PromiseReturnType<typeof PersonalInformationRepository.findUnique>,
  null
>;

export namespace PersonalInformationRepository {
  export async function findMany() {
    return await prisma.personalInformation.findMany({
      include: {
        user: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  export async function findUnique(id: string) {
    return await prisma.personalInformation.findUnique({
      where: {
        id: id,
      },
    });
  }

  export async function create(personalInformation: PersonalInformation) {
    const createPersonalInformation = await prisma.personalInformation.create({
      data: personalInformation,
    });
    return createPersonalInformation;
  }
}
