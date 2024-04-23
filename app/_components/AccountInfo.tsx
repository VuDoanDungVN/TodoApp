'use client';

import React from 'react';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import PersonIcon from '@mui/icons-material/Person';

const AccountInfo = () => {
  const { data: session, status } = useSession();
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
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
        <Grid item>
          {session && (
            <Box>
              <p>Signed in as {session.user.name}</p>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountInfo;
