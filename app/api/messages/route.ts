import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import type { Message } from '@/app/_repositories/Message';
import { MessageRepository } from '@/app/_repositories/Message';

//Hàm Post này để tạo mới một user
export async function POST(request: NextRequest) {
  try {
    const message: Message = await request.json();
    const createdMessage = MessageRepository.create(message);
    return NextResponse.json(createdMessage);
  } catch (e) {
    //return NextResponse.next({ status: 500 });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
