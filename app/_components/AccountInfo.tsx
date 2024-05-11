'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Button from '@mui/material/Button';
import { Box, Divider, Grid, TextField, Typography } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
import SettingsIcon from '@mui/icons-material/Settings';
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
    <>
      <Box style={{ width: '100%' }}>
        <Grid container spacing={1}>
          {/* <Grid
            item
            xs={7}
            sx={{ flex: '1', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
          >
            <Breadcrumbs aria-label='breadcrumb' style={{ color: '#325381' }}>
              <Link underline='hover' color='black' href='/'>
                <IconButton>
                  <HomeIcon style={{ color: '#325381' }} />
                </IconButton>
              </Link>
              <Typography color='black'>Trang chủ</Typography>
            </Breadcrumbs>
          </Grid> */}

          <Grid
            xs={12}
            item
            sx={{ flex: '1', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
          >
            <Tooltip title='Cài đặt'>
              <IconButton>
                <SettingsIcon style={{ color: '#ccc' }} />
              </IconButton>
            </Tooltip>
            <Tooltip title='Thông báo'>
              <IconButton>
                <Badge badgeContent={2} color='error'>
                  <NotificationsIcon style={{ color: '#ccc' }} />
                </Badge>
              </IconButton>
            </Tooltip>
            {session ? (
              <Stack direction='row' spacing={2}>
                <IconButton
                  color='inherit'
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  {session?.user.image ? (
                    <Avatar
                      alt='User name'
                      src={session?.user.image}
                      style={{ width: 30, height: 30, color: '#cccccc' }}
                    />
                  ) : (
                    <Avatar alt={session?.user.name || 'User name'} />
                  )}
                </IconButton>

                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  style={{ color: '#325381' }}
                >
                  <MenuItem onClick={handleClose} style={{ fontSize: '14px' }}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose} style={{ fontSize: '14px' }}>
                    My account
                  </MenuItem>

                  <MenuItem onClick={handleClose} style={{ fontSize: '14px' }}>
                    <Link
                      onClick={handleSingOut}
                      color='secondary'
                      style={{ textDecoration: 'none', color: '#d32f2f' }}
                    >
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
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AccountInfo;
