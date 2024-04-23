'use client';

import React from 'react';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
const AccountInfo = () => {
  const { data: session, status } = useSession();
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <IconButton color='inherit'>
            <HomeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  );
};

export default AccountInfo;

{
  /* <Grid container spacing={2} xs={12}>
<Grid item style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Grid item xs={6}>
    {session && (
      <Box>
        <p>Xin chào : {session.user.name}</p>
      </Box>
    )}
  </Grid>
  <Grid item xs={6}>
    <Button
      variant='contained'
      color='primary'
      startIcon={<PersonIcon />}
      onClick={() => {
        if (session) {
          signOut();
        } else {
          signIn();
        }
      }}
    >
      {session ? 'Sign out' : 'Sign in'}
    </Button>
  </Grid>
</Grid>
</Grid> */
}
