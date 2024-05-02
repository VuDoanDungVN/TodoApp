import * as React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
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

export default function NavbarMenu() {
  const [open, setOpen] = React.useState(true);
  const { data: session, status } = useSession();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
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
        <ListItemIcon style={{ paddingLeft: '5px' }}>
          <div style={{ position: 'relative', width: '30px', height: '30px' }}>
            {session?.user.image ? (
              <Image
                src={session?.user.image}
                alt='User'
                layout='fill'
                objectFit='cover'
                style={{ borderRadius: '50%' }}
              />
            ) : (
              <AccountBoxIcon />
            )}
          </div>
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
    </List>
  );
}
