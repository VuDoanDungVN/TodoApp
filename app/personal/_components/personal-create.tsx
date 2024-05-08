'use client';
import { Box, Button, Grid, MenuItem, Select } from '@mui/material';
import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';
import { User } from '@/app/_repositories/User';

type Props = {
  user: User[];
};

export default function PersonalCreate(props: Props) {
  const users = props.user;
  const router = useRouter();
  const [formDataPersonal, setFormDataPersonal] = React.useState({
    bio: '',
    phoneNumber: '',
    userId: '',
  });
  //Hàm sử lý thay đổi giá trị của input
  const handleChange = (e: any) => {
    setFormDataPersonal({
      ...formDataPersonal,
      [e.target.name]: e.target.value,
    });
  };

  //API hanldSubmit
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/personal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataPersonal),
      });
      if (!response.ok) {
        throw new Error('Failed to create personal');
      }
      alert('Create personal success');
      router.push('/personal');
    } catch (error) {
      console.error('Error creating personal:', error);
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <form>
          <TextField
            label='Nhập Bio'
            id='outlined-start-adornment'
            name='bio'
            sx={{ m: 1, width: '50%' }}
            value={formDataPersonal.bio}
            onChange={handleChange}
            InputProps={{
              startAdornment: <InputAdornment position='start'></InputAdornment>,
            }}
          />
          <TextField
            label='Nhập Phone Number'
            id='outlined-start-adornment'
            sx={{ m: 1, width: '50%' }}
            name='phoneNumber'
            value={formDataPersonal.phoneNumber}
            onChange={handleChange}
            InputProps={{
              startAdornment: <InputAdornment position='start'></InputAdornment>,
            }}
          />
          <Grid item xs={12}>
            <label htmlFor='user'>User</label>
            <Select name='userId' value={formDataPersonal.userId} fullWidth onChange={handleChange}>
              {users?.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleSubmit}>Tạo Personals</Button>
          </Grid>
        </form>
      </Box>
    </>
  );
}
