import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { TaskRepository } from '@/app/_repositories/Task';

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const deleteTask = await TaskRepository.deleteTask(params.id);
    return NextResponse.json(deleteTask);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
