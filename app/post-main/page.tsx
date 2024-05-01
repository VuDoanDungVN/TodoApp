import React from 'react';
import CreatePost from './_components/create-post';
import { UserRepository } from '../_repositories/User';

export default async function CreatePostPages() {
  const user = await UserRepository.findMany();

  return (
    <div>
      <CreatePost user={user} />
    </div>
  );
}
