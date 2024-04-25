import { UserRepository } from '@/app/_repositories/User';
import UserList from '@/app/user/_components/user-list';
import { RoleRepository } from '../_repositories/Role';
import { PersonalInformationRepository } from '../_repositories/PersonalInformation';
import { AddressRepository } from '../_repositories/Address';

export default async function UserPage() {
  const user = await UserRepository.findMany();
  const personalInformation = await PersonalInformationRepository.findMany();
  const address = await AddressRepository.findMany();
  const role = await RoleRepository.findMany();
  return (
    <>
      <UserList
        users={user}
        addresss={address}
        personalInformation={personalInformation}
        roles={role}
      />
    </>
  );
}
