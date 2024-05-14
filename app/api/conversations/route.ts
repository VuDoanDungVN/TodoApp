import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import type { Conversation } from '@/app/_repositories/Conversation';
import { ConversationRepository } from '@/app/_repositories/Conversation';

//Hàm Post này để tạo mới một user
export async function POST(request: NextRequest) {
  try {
    const conversations: Conversation = await request.json();
    const createdConversation = ConversationRepository.create(conversations);
    return NextResponse.json(createdConversation);
  } catch (e) {
    //return NextResponse.next({ status: 500 });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
