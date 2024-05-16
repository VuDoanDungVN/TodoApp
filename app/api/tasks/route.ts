import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { Task } from '@/app/_repositories/Task';
import { TaskRepository } from '@/app/_repositories/Task';

//Hàm Post này để tạo mới một user
export async function POST(request: NextRequest) {
  try {
    const taskData: Task = await request.json();
    const createdTaskData = TaskRepository.create(taskData);
    return NextResponse.json(createdTaskData);
  } catch (e) {
    //return NextResponse.next({ status: 500 });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
