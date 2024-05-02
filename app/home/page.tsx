import React from 'react';
import Home from './_components/Home';
import { PostRepository } from '@/app/_repositories/Post';
export default async function page() {
  const posts = await PostRepository.findMany();
  return (
    <div>
      <Home posts={posts} />
    </div>
  );
}
