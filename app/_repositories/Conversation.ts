import { prisma } from '@/app/_utils/prismaSingleton';
import type { Prisma } from '@prisma/client';

export type Conversation = Exclude<
  Prisma.PromiseReturnType<typeof ConversationRepository.findUniqueWithMessageAndUser>,
  null
>;

export namespace ConversationRepository {
  export async function findMany() {
    return await prisma.conversation.findMany({
      include: {
        messages: true,
        user: true,
      },
    });
  }

  export async function findUniqueWithMessageAndUser(id: string) {
    return await prisma.conversation.findUnique({
      include: {
        messages: true,
        user: true,
      },
      where: {
        id: id,
      },
    });
  }
  export async function create(conversation: Conversation) {
    return await prisma.conversation.create({
      data: {
        userId: conversation.userId,
      },
    });
  }
}
