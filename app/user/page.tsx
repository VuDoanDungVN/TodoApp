import { UserRepository } from '@/app/_repositories/User';
import UserList from '@/app/user/_components/user-list';

export default async function UserPage() {
  const user = await UserRepository.findMany();
  return (
    <>
      <UserList users={user} />
    </>
  );
}
