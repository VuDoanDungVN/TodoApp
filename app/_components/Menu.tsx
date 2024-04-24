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
import { Typography } from '@mui/material';
import { signIn, signOut } from 'next-auth/react';

export const mainMenu = (
  <React.Fragment>
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
    {/* <Link href='/header-items-form' passHref>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary='Header Items Form' />
      </ListItemButton>
    </Link>
    <Link href='/header-items-list' passHref>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary='Header Items List' />
      </ListItemButton>
    </Link>
    <Link href='/revalidate-data' passHref>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary='Revalidate Data' />
      </ListItemButton>
    </Link>
    <Link href='/file-uploader' passHref>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='file-uploader' />
      </ListItemButton>
    </Link>
    <Link href='/camera-photo-uploader' passHref>
      <ListItemButton>
        <ListItemIcon>
          <CameraIcon />
        </ListItemIcon>
        <ListItemText primary='camera-photo-uploader' />
      </ListItemButton>
    </Link>
    <Link href='/qr-code-reader' passHref>
      <ListItemButton>
        <ListItemIcon>
          <QrCodeScannerIcon />
        </ListItemIcon>
        <ListItemText primary='qr-code-reader' />
      </ListItemButton>
    </Link>
    <Link href='/zxing-barcode-reader' passHref>
      <ListItemButton>
        <ListItemIcon>
          <QrCode2Icon />
        </ListItemIcon>
        <ListItemText primary='zxing-barcode-reader' />
      </ListItemButton>
    </Link>
    <Link href='/activereports' passHref>
      <ListItemButton>
        <ListItemIcon>
          <ReceiptLongIcon />
        </ListItemIcon>
        <ListItemText primary='ActiveReports' />
      </ListItemButton>
    </Link>
    <Link href='/leader-line' passHref>
      <ListItemButton>
        <ListItemIcon>
          <LineAxisIcon />
        </ListItemIcon>
        <ListItemText primary='LeaderLine' />
      </ListItemButton>
    </Link>
    <Link href='/pagination' passHref>
      <ListItemButton>
        <ListItemIcon>
          <LineAxisIcon />
        </ListItemIcon>
        <ListItemText primary='Pagination' />
      </ListItemButton>
    </Link> */}
  </React.Fragment>
);

export const secondaryMenu = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      Secondary Menu
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Secondary Menu 1' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Secondary Menu 2' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Secondary Menu 3' />
    </ListItemButton>
  </React.Fragment>
);
