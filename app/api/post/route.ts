import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { Post } from '@prisma/client';
import { PostRepository } from '@/app/_repositories/Post';

export async function POST(request: NextRequest) {
  try {
    const post: Post = await request.json();
    const createPost = PostRepository.create(post);
    return NextResponse.json(createPost);
  } catch (e) {
    //return NextResponse.next({ status: 500 });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

//Sau khi tạo xong API tiến hành tạo một form từ Component để tạo bài viết mới.
