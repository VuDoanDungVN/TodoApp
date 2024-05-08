import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Avatar, Box, Typography } from '@mui/material';

export default function NavbarMenu() {
  const [open, setOpen] = React.useState(false);
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const { data: session, status } = useSession();
  const handleClick = () => {
    setOpen(!open);
  };
  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 350,
          bgcolor: 'background.paper',
        }}
        component='nav'
        aria-labelledby='nested-list-subheader'
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <Typography style={{ position: 'relative' }}>
              {session?.user.image ? (
                <Avatar alt='Remy Sharp' src={session?.user.image} />
              ) : (
                <AccountCircleIcon style={{ width: 40, height: 40 }} />
              )}
            </Typography>
          </ListItemIcon>
          <ListItemText primary={`${session?.user?.name}`} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 3 }} href='/post-main'>
              <ListItemIcon>
                <PermContactCalendarIcon />
              </ListItemIcon>
              <ListItemText primary='Viết bài' />
            </ListItemButton>
          </List>
        </Collapse>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 3 }} href='/user'>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary='User' />
          </ListItemButton>
        </List>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 3 }} href='/personal'>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary='Personal' />
          </ListItemButton>
        </List>
      </List>
    </>
  );
}
