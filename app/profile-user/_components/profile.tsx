'use client';
import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { UserWithPersonalAndAddress } from '@/app/_repositories/User';
import { useSession } from 'next-auth/react';
type Props = {
  user: UserWithPersonalAndAddress[] | null;
};

export default function profileMain(props: Props) {
  const { data: session } = useSession();
  const userList = props.user;
  return (
    <Box style={{ maxHeight: '99vh' }}>
      <Grid container xs={12} style={{ backgroundColor: '#fff', maxWidth: 'auto' }}>
        <Grid item xs={3}>
          <Button
            variant='outlined'
            style={{
              width: '90%',
              margin: '88px 10px 0px 10px',
              padding: '10px',
              border: '0.5px solid #f0f2f5',
              fontSize: '1rem',
            }}
          >
            My profile
          </Button>
        </Grid>
        <Grid item xs={9} style={{ padding: '10px' }}>
          {/**Đây là phần thông tin bao gổm avatar, tên, địa chỉ */}
          <Typography style={{ padding: '15px 0px', fontSize: '1.5rem', color: '#325381' }}>
            My profile
          </Typography>
          <Paper elevation={0} style={{ margin: '10px 0px', border: '0.5px solid #f0f2f5' }}>
            <Stack direction='row'>
              <Grid
                container
                xs={12}
                spacing={2}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <Grid
                  item
                  xs={2}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Avatar
                    style={{
                      width: '100px',
                      height: '100px',
                      margin: '20px',
                      boxShadow: '0 0 5px #ccc',
                      border: '1px solid #f0f2f5',
                    }}
                    alt='Remy Sharp'
                    src='/images/img/user.jpg'
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography style={{ fontSize: '1rem', color: '#325381', fontWeight: 600 }}>
                    {session && session.user.name}
                  </Typography>
                  <Typography style={{ fontSize: '1rem', color: '#d4d4d4' }}>
                    {session && session.user.email}
                  </Typography>
                  <Typography style={{ fontSize: '1rem', color: '#d4d4d4' }}>
                    {session && session.user.refreshToken}
                  </Typography>
                </Grid>
                <Grid item xs={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant='outlined'
                    style={{ color: '#d4d4d4', border: '0.5px solid #d4d4d4' }}
                  >
                    <EditIcon /> Edit
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Paper>

          {/**Đây là phần Personal information */}
          <Paper elevation={0} style={{ margin: '10px 0px', border: '0.5px solid #f0f2f5' }}>
            <Stack direction='row' style={{ display: 'block' }}>
              <Grid item xs={12} style={{ width: '100%' }}>
                <Typography style={{ fontSize: '1.5rem', color: '#325381', margin: '15px' }}>
                  Personal information
                </Typography>
              </Grid>
              {/**Thông tin cá nhân */}

              <Grid
                container
                xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '15px',
                }}
                key={session?.user.id}
              >
                <Grid item xs={4}>
                  <Typography style={{ padding: '5px 0px', fontSize: '1rem', color: '#d4d4d4' }}>
                    First Name
                  </Typography>
                  <Typography style={{ padding: '5px 0px', fontSize: '1rem', color: '#d4d4d4' }}>
                    {session && session.user.name}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography style={{ padding: '15px px', fontSize: '1rem', color: '#d4d4d4' }}>
                    Last Name
                  </Typography>
                  <Typography style={{ padding: '15px px', fontSize: '1rem', color: '#d4d4d4' }}>
                    {session && session.user.name}
                  </Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant='outlined'
                    style={{ color: '#d4d4d4', border: '0.5px solid #d4d4d4' }}
                  >
                    <EditIcon /> Edit
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                }}
              >
                <Grid item xs={4}>
                  <Typography style={{ padding: '5px 0px', fontSize: '1rem', color: '#d4d4d4' }}>
                    Email address
                  </Typography>
                  <Typography style={{ padding: '5px 0px', fontSize: '1rem', color: '#d4d4d4' }}>
                    {session && session.user.email}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography style={{ padding: '15px px', fontSize: '1rem', color: '#d4d4d4' }}>
                    Phone
                  </Typography>
                  <Typography style={{ padding: '15px px', fontSize: '1rem', color: '#d4d4d4' }}>
                    {userList && userList[0].PersonalInformation?.phoneNumber}
                  </Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}></Grid>
              </Grid>
              <Grid
                container
                xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                }}
              >
                <Grid item xs={12}>
                  <Typography style={{ padding: '5px 0px', fontSize: '1rem', color: '#d4d4d4' }}>
                    Bio
                  </Typography>
                  <Typography style={{ padding: '5px 0px', fontSize: '1rem', color: '#d4d4d4' }}>
                    {userList && userList[0].PersonalInformation?.bio}
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
          </Paper>

          {/**Đây là phần Address */}
          <Paper elevation={0} style={{ border: '0.5px solid #f0f2f5' }}>
            <Stack direction='row' style={{ display: 'block' }}>
              <Grid item xs={12} style={{ width: '100%' }}>
                <Typography style={{ fontSize: '1.5rem', color: '#325381', margin: '15px' }}>
                  Address
                </Typography>
              </Grid>
              <Grid
                container
                xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                }}
              >
                <Grid item xs={4}>
                  <Typography style={{ padding: '5px 0px', fontSize: '1rem', color: '#d4d4d4' }}>
                    Country
                  </Typography>
                  <Typography style={{ padding: '5px 0px', fontSize: '1rem', color: '#d4d4d4' }}>
                    United States of America
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography style={{ padding: '15px px', fontSize: '1rem', color: '#d4d4d4' }}>
                    City/State
                  </Typography>
                  <Typography style={{ padding: '15px px', fontSize: '1rem', color: '#d4d4d4' }}>
                    California, USA
                  </Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant='outlined'
                    style={{ color: '#d4d4d4', border: '0.5px solid #d4d4d4' }}
                  >
                    <EditIcon /> Edit
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '15px',
                }}
              >
                <Grid item xs={4}>
                  <Typography style={{ padding: '5px 0px', fontSize: '1rem', color: '#d4d4d4' }}>
                    Postal Code
                  </Typography>
                  <Typography style={{ padding: '5px 0px', fontSize: '1rem', color: '#d4d4d4' }}>
                    ERT 62574
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography style={{ padding: '15px px', fontSize: '1rem', color: '#d4d4d4' }}>
                    TAX ID
                  </Typography>
                  <Typography style={{ padding: '15px px', fontSize: '1rem', color: '#d4d4d4' }}>
                    AS564175869
                  </Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}></Grid>
              </Grid>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
