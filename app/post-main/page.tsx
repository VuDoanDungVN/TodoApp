import React from 'react';
import CreatePost from './_components/create-post';
import { PostRepository } from '../_repositories/Post';

export default async function CreatePostPages() {
  const posts = await PostRepository.findMany();

  return (
    <div>
      <CreatePost post={posts} />
    </div>
  );
}
