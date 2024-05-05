import React from 'react';
import CreateUser from '../_components/user-create';
import { PersonalInformationRepository } from '@/app/_repositories/PersonalInformation';
import { RoleRepository } from '@/app/_repositories/Role';

export default async function CreateUserPage() {
  const personal = await PersonalInformationRepository.findMany();
  const role = await RoleRepository.findMany();
  return (
    <>
      <CreateUser personal={personal} role={role} />
    </>
  );
}
