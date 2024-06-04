import { prisma } from '@/app/_utils/prismaSingleton';
import type { Prisma } from '@prisma/client';

export type Task = Exclude<Prisma.PromiseReturnType<typeof TaskRepository.findUnique>, null>;

export namespace TaskRepository {
  export async function findMany() {
    return await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc',
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
    const { updatedAt, ...taskWithoutUpdatedAt } = task;
    return await prisma.task.update({
      where: {
        id: id,
        updatedAt: updatedAt,
      },
      data: taskWithoutUpdatedAt,
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
