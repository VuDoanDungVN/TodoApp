import React from 'react';
import AddressList from './_components/address-list';
import { AddressRepository } from '../_repositories/Address';
export default async function AddressPages() {
  const address = await AddressRepository.findMany();
  return (
    <>
      <AddressList address={address} />
    </>
  );
}
