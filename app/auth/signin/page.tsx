'use client';

import React, { useRef, useState } from 'react';
import { signIn, getCsrfToken, getProviders } from 'next-auth/react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
//CSS
const cssBody = { backgroundColor: '#fff' };
const cssCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '15px 15px 0px 0px',
};
const cssButton = { display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 2, mt: 2 };
const cssContainer = { height: { sm: 'auto', md: '100vh' } };
const cssBoxCenter = { justifyContent: 'center', alignItems: 'center', margin: '0 auto' };
const font16 = { fontSize: 16, color: '#325381', marginBottom: '10px' };
const cssIcon = { m: 2, color: '#98A9C0', fontSize: 30 };

const cssBoxLogin = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F4F4F4',
  borderRadius: 4,
  border: '1px solid #D4D4D4',
  maxWidth: '500px',
  margin: '0 auto',
};

const cssBackgroundImage = {
  backgroundImage: `url('/images/bg.png')`, // Thay đường dẫn tới ảnh của bạn ở đây
  backgroundSize: 'full',
  backgroundPosition: 'center',
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
        setError('ID社員番号またはパスワードが正しくありません。');
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
      <Box sx={{ ...cssBody, ...cssBackgroundImage }}>
        <form noValidate>
          <Grid container alignItems='center' sx={cssContainer}>
            <Box sx={cssBoxCenter}>
              <Box sx={cssBoxLogin}>
                <Grid item xs={12}>
                  <Grid container spacing={2} style={{ padding: 20 }}>
                    <Grid item xs={12} sx={{ height: 50, mb: 1 }}>
                      <Typography variant='h4' sx={{ color: '#325381', textAlign: 'center' }}>
                        Login
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel id='email'>
                        <Typography sx={font16} style={{ marginBottom: '10px' }}>
                          Email :
                        </Typography>
                      </FormLabel>
                      <Paper sx={{ display: 'flex', alignItems: 'center' }}>
                        <PersonIcon sx={cssIcon} />
                        {/* <Divider orientation='vertical' flexItem /> */}
                        <InputBase
                          sx={{ ml: 1, flex: 1, p: 1 }}
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
                        <Typography sx={font16}>Password :</Typography>
                      </FormLabel>
                      <Paper sx={{ display: 'flex', alignItems: 'center' }}>
                        <LockIcon sx={cssIcon} />
                        {/* <Divider orientation='vertical' flexItem /> */}
                        <InputBase
                          sx={{ ml: 1, flex: 1, p: 1 }}
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
                        <VisibilityOffIcon sx={cssIcon} />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sx={cssButton}>
                      <Button
                        variant='contained'
                        onClick={onSubmit}
                        sx={{ backgroundColor: '#325381', padding: '10px 50px' }}
                      >
                        Login
                      </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ height: 50, mb: 1 }}>
                      {error && <Alert severity='error'>{error}</Alert>}
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
