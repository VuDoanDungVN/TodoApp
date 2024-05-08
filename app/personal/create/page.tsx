import React from 'react';
import PersonalCreate from '../_components/personal-create';
import { Box } from '@mui/material';
import { UserRepository } from '@/app/_repositories/User';
export default async function PersonalCreatePages() {
  const users = await UserRepository.findMany();
  return (
    <>
      <Box>
        <PersonalCreate user={users} />
      </Box>
    </>
  );
}
