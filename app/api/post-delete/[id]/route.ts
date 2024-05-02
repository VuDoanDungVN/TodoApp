import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { Post } from '@prisma/client';
import { PostRepository } from '@/app/_repositories/Post';

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const deletedPost = await PostRepository.deletePost(params.id);
    return NextResponse.json(deletedPost);
  } catch (e) {
    //return NextResponse.next({ status: 500 });
    console.log(e);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
