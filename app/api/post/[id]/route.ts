import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { Post } from '@prisma/client';
import { PostRepository } from '@/app/_repositories/Post';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const post: Post = await request.json();
    const updatedPost = await PostRepository.update(params.id, post);
    return NextResponse.json(updatedPost);
  } catch (e) {
    //return NextResponse.next({ status: 500 });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
