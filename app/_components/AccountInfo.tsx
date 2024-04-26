'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Button from '@mui/material/Button';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
const AccountInfo = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const handleSingOut = async () => {
    await signOut();
    router.push('/auth/signin');
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box style={{ width: '100%' }}>
      <Grid container spacing={1} justifyContent='space-between' alignItems='center'>
        <Grid item xs={7} sx={{ flex: '1' }}>
          <Breadcrumbs aria-label='breadcrumb' style={{ color: '#fff' }}>
            <Link underline='hover' color='white' href='/#'>
              <IconButton>
                <HomeIcon style={{ color: '#fff' }} />
              </IconButton>
            </Link>
            <Typography color='white'>Trang chủ</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ flex: '1', display: 'flex', justifyContent: 'flex-end', paddingRight: '10px' }}
        >
          {/**Tìm kiếm */}
          <FormControl sx={{ width: '100%' }}>
            <OutlinedInput
              id='outlined-adornment-amount'
              placeholder='Tìm kiếm tại đây...'
              style={{
                width: '100%',
                height: 40,
                color: '#3d3d44',
                backgroundColor: '#fff',
              }}
            />
          </FormControl>
        </Grid>
        <Grid
          xs={1}
          item
          sx={{ flex: '1', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
        >
          {session ? (
            <Stack direction='row' spacing={2}>
              <IconButton
                color='inherit'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Avatar alt='Vu dung' src='/images/img/user.jpg' />
              </IconButton>

              <Menu id='basic-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link onClick={handleSingOut} color='secondary'>
                    Đăng xuất
                  </Link>
                </MenuItem>
              </Menu>
            </Stack>
          ) : (
            <MenuItem onClick={handleClose}>
              <Link href='/auth/signin' color='secondary' style={{ textDecoration: 'none' }}>
                Đăng nhập
              </Link>
            </MenuItem>
          )}
          <IconButton color='inherit'>
            <Badge badgeContent={2} color='error'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountInfo;
