import { prisma } from '@/app/_utils/prismaSingleton';
import type { Prisma } from '@prisma/client';
import { Email } from '@prisma/client';

export type Mailer = Exclude<Prisma.PromiseReturnType<typeof MailerRepository.findUnique>, null>;

export namespace MailerRepository {
  export async function findMany() {
    return await prisma.email.findMany({});
  }

  export async function findUnique(id: string) {
    return await prisma.email.findUnique({
      where: {
        id: id,
      },
    });
  }

  export async function create(email: Mailer) {
    return await prisma.email.create({
      data: email,
    });
  }
}
