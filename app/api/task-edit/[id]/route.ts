import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { Task } from '@prisma/client';
import { TaskRepository } from '@/app/_repositories/Task';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const taskId = params.id;
    const task: Task = await request.json();
    const updatedTask = await TaskRepository.update(taskId, task);
    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
