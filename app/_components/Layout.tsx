'use client';
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import 'dayjs/locale/ja';
import { SessionProvider } from 'next-auth/react';
import { mainMenu, secondaryMenu } from './Menu';
import AccountInfo from './AccountInfo';

function Copyright(props: any) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledIconButton = styled(IconButton)({
  borderRadius: '10px',
  margin: '10px',
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#322C2B',
  marginLeft: drawerWidth,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: 'none', // This line removes the shadow
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme({});

type LayoutProps = Required<{
  readonly children: React.ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <Toolbar
            sx={{
              pr: '24px',
            }}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <SessionProvider>
              <AccountInfo />
            </SessionProvider>
            <IconButton color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsIcon style={{ color: '#322C2B' }} />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Đây là nơi Navbar Menu */}
        <Drawer variant='permanent' open={open}>
          <Toolbar>
            <Grid container spacing={0}>
              {/*Logo */}
              <Grid item xs={6}>
                <img src='/logo.png' alt='Logo' width={100} height={40} />
              </Grid>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={toggleDrawer} style={{ width: '40px', height: '40px' }}>
                  <ChevronLeftIcon style={{ color: '#322C2B' }} />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
          <Divider />
          <List component='nav' style={{ height: '93vh' }}>
            {mainMenu}
            <Divider sx={{ my: 1 }} />
            {secondaryMenu}
          </List>
        </Drawer>
        {/* Đây là nơi Navbar Menu kết thúc*/}
      </Box>
    </ThemeProvider>
  );
}
