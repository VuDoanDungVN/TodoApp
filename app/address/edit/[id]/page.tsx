import React from 'react';
import AddressEdit from '../../_components/address-edit';
import { AddressRepository } from '@/app/_repositories/Address';
import { UserRepository } from '@/app/_repositories/User';
type Props = {
  id: string;
};
export default async function AddressEditPages({ params }: { params: Props }) {
  const address = await AddressRepository.findUnique(params.id);
  const user = await UserRepository.findMany();
  return (
    <>
      <AddressEdit address={address} user={user} />
    </>
  );
}
