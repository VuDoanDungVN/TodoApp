'use client';
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import 'dayjs/locale/ja';
import { SessionProvider } from 'next-auth/react';
import MainMenu from '@/app/_components/Menu';
import AccountInfo from './AccountInfo';
import { useSession } from 'next-auth/react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Footer from './footer';
const cssMainComponent = {
  flexGrow: 1,
  overflow: 'auto',
  margin: '70px 10px 10px 10px',
  borderRadius: 2,
  height: '91vh',
};
// Width of the drawer
const drawerWidth: number = 240;
// Interface for AppBarProps
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
// Styling for AppBar
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#fff',
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
// Styling for Drawer
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
// Creating MUI theme
const mdTheme = createTheme({});

// Type for LayoutProps
type LayoutProps = Required<{
  readonly children: React.ReactNode;
}>;

// Layout component
export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const { data: session, status } = useSession();
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />

        {/* AppBar */}
        <AppBar position='absolute' open={open}>
          <Toolbar>
            {/* Menu Icon */}
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
              <MenuIcon style={{ color: '#322C2B' }} />
            </IconButton>
            {/* Account Info */}
            <SessionProvider>
              <AccountInfo />
            </SessionProvider>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Drawer variant='permanent' open={open}>
          <Toolbar>
            <Grid container spacing={0}>
              {/* Logo */}
              <Grid item xs={6}>
                <Image src='/logo.png' alt='Logo' width={100} height={40} />
              </Grid>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {/* Close Drawer Icon */}
                <IconButton onClick={toggleDrawer} style={{ width: '40px', height: '40px' }}>
                  <ChevronLeftIcon style={{ color: '#322C2B' }} />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
          {/**Dấu gạch ở menu */}
          <Divider style={{ color: '#ccc' }} />
          {/* Main Menu */}
          <List component='nav' style={{ height: '100vh' }}>
            <MainMenu />
            {/**Đoạn này là nơi phân vùng cho menu đoạn 2 */}
            {/* {secondaryMenu} */}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>

        {/* Content */}

        <Box component='main' sx={cssMainComponent}>
          {session ? (
            children
          ) : (
            <Alert severity='error' style={{ display: 'flex', justifyContent: 'center' }}>
              <AlertTitle>Thông báo</AlertTitle>
              Bạn cần phải đăng nhập để sử dụng chức năng này!
            </Alert>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
