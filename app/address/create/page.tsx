import React from 'react';
import AddressCreate from '../_components/address-create';
import { AddressRepository } from '@/app/_repositories/Address';
import { UserRepository } from '@/app/_repositories/User';
export default async function AddressCreatePages() {
  const users = await UserRepository.findMany();
  return (
    <>
      <AddressCreate users={users} />
    </>
  );
}
