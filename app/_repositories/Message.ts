import { prisma } from '@/app/_utils/prismaSingleton';
import type { Prisma } from '@prisma/client';

export type Message = Exclude<Prisma.PromiseReturnType<typeof MessageRepository.findUnique>, null>;

export namespace MessageRepository {
  export async function findMany() {
    return await prisma.message.findMany({
      include: {
        conversation: true,
        user: true,
      },
    });
  }

  export async function findUnique(id: string) {
    return await prisma.message.findUnique({
      include: {
        conversation: true,
        user: true,
      },
      where: {
        id: id,
      },
    });
  }

  export async function create(message: Message) {
    return await prisma.message.create({
      data: {
        content: message.content,
        conversationId: message.conversationId,
        userId: message.userId,
      },
    });
  }
}
