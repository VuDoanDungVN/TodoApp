'use client';
import * as React from 'react';
import Link from 'next/link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PeopleIcon from '@mui/icons-material/People';
import Button from '@mui/material/Button';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import { Box, Typography } from '@mui/material';
import { signIn, signOut } from 'next-auth/react';

export default function MainMenu() {
  return (
    <Box>
      <Link href='/' passHref>
        <ListItemButton>
          <ListItemIcon>
            <Stack direction='row' spacing={2}>
              <IconButton color='inherit' style={{ width: '30px', height: '30px' }}>
                <Avatar alt='Vu dung' src='/images/img/user.jpg' />
              </IconButton>
            </Stack>
          </ListItemIcon>
          <Typography>Vũ Nhật Minh</Typography>
        </ListItemButton>
      </Link>
      <Link href='/user' passHref>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary='User' />
        </ListItemButton>
      </Link>
    </Box>
  );
}
