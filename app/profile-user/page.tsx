import React from 'react';
import ProfileUser from '@/app/profile-user/_components/profile';
import { UserRepository } from '../_repositories/User';
export default async function ProfileUserPage() {
  const user = await UserRepository.findMany();
  return <ProfileUser user={user} />;
}
