'use client';

import React, { useRef, useState } from 'react';
import { signIn, getCsrfToken, getProviders } from 'next-auth/react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';

//CSS
const cssBody = { backgroundColor: '#fff' };
const cssCenter = { display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 2 };
const cssButton = { display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 2, mt: 2 };
const cssContainer = { height: { sm: 'auto', md: '100vh' } };
const cssBoxCenter = { justifyContent: 'center', alignItems: 'center', margin: '0 auto' };
const font16 = { fontSize: 16, color: '#325381' };
const cssIcon = { m: 1, color: '#98A9C0' };

const cssBoxLogin = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F4F4F4',
  p: '20px;',
  borderRadius: 4,
  border: '1px solid #D4D4D4',
  maxWidth: '350px',
  margin: '0 auto',
};

//END CSS

const SignIn = () => {
  const email = useRef('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const callbackUrl = window.location.origin;
    try {
      const result = await signIn('credentials', {
        employeeId: email.current,
        password: password,
        redirect: false,
        callbackUrl,
      });

      if (result?.error) {
        setError('IDまたはパスワードが間違っています');
      } else {
        router.refresh();
        router.push(callbackUrl);
      }
    } catch (e) {
      // console.log('Login error:', 'login Fail', e);
    }
  };

  return (
    <div>
      <Box sx={cssBody}>
        <form noValidate>
          <Grid container alignItems='center' sx={cssContainer}>
            <Box sx={cssBoxCenter}>
              <Box sx={cssBoxLogin}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ height: 50, mb: 1 }}>
                      {error && <Alert severity='error'>{error}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                      <FormLabel id='email'>
                        <Typography sx={font16}>ユーザーID :</Typography>
                      </FormLabel>
                      <Paper sx={{ display: 'flex', alignItems: 'center' }}>
                        <PersonIcon sx={cssIcon} />
                        <Divider orientation='vertical' flexItem />
                        <InputBase
                          sx={{ ml: 1, flex: 1 }}
                          id='email'
                          name='email'
                          autoComplete='email'
                          inputProps={{
                            sx: {
                              '& input': {
                                backgroundColor: '#fff',
                              },
                            },
                          }}
                          onChange={(e) => (email.current = e.target.value)}
                        />
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel id='email'>
                        <Typography sx={font16}>パスワード :</Typography>
                      </FormLabel>
                      <Paper sx={{ display: 'flex', alignItems: 'center' }}>
                        <LockIcon sx={cssIcon} />
                        <Divider orientation='vertical' flexItem />
                        <InputBase
                          sx={{ ml: 1, flex: 1 }}
                          id='password'
                          name='password'
                          type='password'
                          inputProps={{
                            sx: {
                              '& input': {
                                backgroundColor: '#fff',
                              },
                            },
                          }}
                          onChange={(e) => setPassword(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              onSubmit(e);
                            }
                          }}
                        />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sx={cssButton}>
                      <Button
                        variant='contained'
                        onClick={onSubmit}
                        sx={{ backgroundColor: '#325381' }}
                      >
                        ログイン
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default SignIn;
