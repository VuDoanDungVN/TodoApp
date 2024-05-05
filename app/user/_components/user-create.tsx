'use client';
import { Address } from '@/app/_repositories/Address';
import { PersonalInformation } from '@/app/_repositories/PersonalInformation';
import { Role } from '@/app/_repositories/Role';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';

type Props = {
  personal: PersonalInformation[];
  role: Role[];
};

export default function CreateUser(props: Props) {
  const personals = props.personal;
  const roles = props.role;

  const [fromDataUser, setFormDataUser] = React.useState({
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const hanldChange = (e: any) => {
    setFormDataUser({
      ...fromDataUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fromDataUser),
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      alert('Create user success');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  return (
    <Box>
      <h1>Create User</h1>
      <Grid container>
        <Grid item xs={12}>
          <h2>Form</h2>
          <Grid item xs={12}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <label htmlFor='name'>Name</label>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type='text'
                      id='name'
                      value={fromDataUser.name}
                      name='name'
                      fullWidth
                      onChange={hanldChange}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <label htmlFor='firstName'>First Name</label>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type='text'
                      id='firstName'
                      value={fromDataUser.firstName}
                      name='firstName'
                      fullWidth
                      onChange={hanldChange}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <label htmlFor='lastName'>Last Name</label>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type='text'
                      id='lastName'
                      value={fromDataUser.lastName}
                      name='lastName'
                      fullWidth
                      onChange={hanldChange}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor='email'>Email</label>
                  <TextField
                    type='email'
                    id='email'
                    name='email'
                    value={fromDataUser.email}
                    fullWidth
                    onChange={hanldChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor='password'>Password</label>
                  <TextField
                    type='password'
                    id='password'
                    name='password'
                    fullWidth
                    value={fromDataUser.password}
                    onChange={hanldChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor='roleId'>Personnal</label>
                  <Select name='roleId' fullWidth onChange={hanldChange}>
                    {personals?.map((personal) => (
                      <MenuItem key={personal.id} value={personal.id}>
                        {personal.bio}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor='role'>Role</label>
                  <Select name='role' fullWidth onChange={hanldChange}>
                    {roles?.map((role) => (
                      <MenuItem key={role.id} value={role.id}>
                        {role.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <Button variant='outlined' onClick={handleSubmit}>
                    Đăng ký
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
