import { prisma } from '@/app/_utils/prismaSingleton';
import type { Prisma } from '@prisma/client';

export type Conversation = Exclude<
  Prisma.PromiseReturnType<typeof ConversationRepository.findUnique>,
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

  export async function findUnique(id: string) {
    return await prisma.conversation.findUnique({
      where: {
        id: id,
      },
    });
  }

  export async function create(conversation: Conversation) {
    return await prisma.conversation.create({
      data: {
        ...conversation,
      },
    });
  }

  export async function update(id: string, conversation: Conversation) {
    const { updatedAt, ...conversationWithoutUpdatedAt } = conversation;
    return await prisma.conversation.update({
      where: {
        id: id,
        updatedAt: updatedAt,
      },
      data: conversationWithoutUpdatedAt,
    });
  }

  export async function deleteConversation(id: string) {
    return await prisma.conversation.delete({
      where: {
        id: id,
      },
    });
  }
}
