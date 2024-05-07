import React from 'react';
import EditUser from '../../_components/user-edit';
import { UserRepository } from '@/app/_repositories/User';
import { RoleRepository } from '@/app/_repositories/Role';
import { PersonalInformationRepository } from '@/app/_repositories/PersonalInformation';
type Props = {
  id: string;
};
export default async function EditUserPage({ params }: { params: Props }) {
  const user = await UserRepository.findUnique(params.id);
  const roles = await RoleRepository.findMany();
  const personals = await PersonalInformationRepository.findMany();
  return (
    <div>
      <EditUser user={user} personal={personals} role={roles} />
    </div>
  );
}
