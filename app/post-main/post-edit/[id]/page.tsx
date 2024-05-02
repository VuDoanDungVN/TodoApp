import React from 'react';
import EditPost from '@/app/post-main/_components/edit-post';
import { PostRepository } from '@/app/_repositories/Post';
import { UserRepository } from '@/app/_repositories/User';
type Props = {
  id: string;
};
export default async function EditPostPages({ params }: { params: Props }) {
  const posts = await PostRepository.findUnique(params.id);
  const users = await UserRepository.findMany();
  return (
    <>
      <EditPost post={posts} user={users} />
    </>
  );
}
