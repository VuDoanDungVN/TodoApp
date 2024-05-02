import React from 'react';
import PostList from './_components/post-list';
import { PostRepository } from '@/app/_repositories/Post';

export default async function CreatePostPages() {
  const postList = await PostRepository.findMany();
  return (
    <>
      <PostList post={postList} />
    </>
  );
}
