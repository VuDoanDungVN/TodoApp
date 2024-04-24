import { UserRepository } from '@/app/_repositories/User';
import UserList from '@/app/user/_components/user-list';
import { DepartmentRepository } from '../_repositories/Department';
import { RoleRepository } from '../_repositories/Role';

export default async function UserPage() {
  const user = await UserRepository.findMany();
  const department = await DepartmentRepository.findMany();
  const role = await RoleRepository.findMany();
  return (
    <>
      <UserList users={user} departments={department} roles={role} />
    </>
  );
}
