import { prisma } from '@/app/_utils/prismaSingleton';
import type { Prisma } from '@prisma/client';

export type Task = Exclude<Prisma.PromiseReturnType<typeof TaskRepository.findUnique>, null>;

export namespace TaskRepository {
  export async function findMany() {
    return await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: true,
      },
    });
  }

  export async function findUnique(id: string) {
    return await prisma.task.findUnique({
      where: {
        id: id,
      },
    });
  }

  export async function create(task: Task) {
    return await prisma.task.create({
      data: {
        ...task,
      },
    });
  }

  export async function update(id: string, task: Task) {
    return await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        title: task.title,
        description: task.description,
        userId: task.userId,
      },
    });
  }

  export async function deleteTask(id: string) {
    return await prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}
