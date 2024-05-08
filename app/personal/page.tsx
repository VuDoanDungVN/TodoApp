import { Box } from '@mui/material';
import React from 'react';
import PersonalInformationList from './_components/personal-list';
import { PersonalInformationRepository } from '../_repositories/PersonalInformation';
export default async function PersonalInformationPage() {
  const personals = await PersonalInformationRepository.findMany();
  return (
    <Box>
      <PersonalInformationList personalInformations={personals} />
    </Box>
  );
}
