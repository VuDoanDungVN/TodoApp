import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { Post } from '@prisma/client';
import { PostRepository } from '@/app/_repositories/Post';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const postId = params.id;
    const post: Post = await request.json();
    const updatedPost = await PostRepository.update(postId, post);
    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

//Sau khi tạo xong API tiến hành tạo một form từ Component để tạo bài viết mới.
