import React from 'react';
import CreatePost from '@/app/post-main/_components/create-post';
import { UserRepository } from '@/app/_repositories/User';
export default async function PostListPage() {
  const users = await UserRepository.findMany();
  return (
    <>
      <CreatePost user={users} />
    </>
  );
}
