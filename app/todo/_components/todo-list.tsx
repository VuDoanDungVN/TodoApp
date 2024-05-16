'use client';
import React, { useEffect, useState } from 'react';
import {
  Typography,
  Grid,
  Button,
  TextField,
  Paper,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Accordion from '@mui/material/Accordion';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import ClearIcon from '@mui/icons-material/Clear';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExtensionIcon from '@mui/icons-material/Extension';
import Tooltip from '@mui/material/Tooltip';
import LabelIcon from '@mui/icons-material/Label';
import Divider from '@mui/material/Divider';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Task } from '@/app/_repositories/Task';
import { User } from '@/app/_repositories/User';
import { useRouter } from 'next/navigation';
type Props = {
  task: Task[];
  user: User[];
};

export default function TodoList(props: Props) {
  const tasks = props.task;
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(true);
  const handleCancel = () => {
    setIsAccordionExpanded(false);
  };
  const handleOpenAccord = () => {
    setIsAccordionExpanded(true);
  };

  const textStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: isHover ? '#e40d0d' : '#bdbdbd',
    fontSize: '13px',
    transition: 'color 0.3s',
    cursor: 'pointer',
  };

  const [users, setUsers] = useState(props.user);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const [task, setTask] = useState({
    title: '',
    description: '',
    userId: '',
  });

  const handleChange = (e: any) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const newTask = new FormData();
    newTask.append('title', task.title);
    newTask.append('description', task.description);
    newTask.append('userId', task.userId);
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (response.ok) {
        console.log('Đã tạo Task thành công!');
        router.push('/todo');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ margin: '10px' }}>
          <Typography variant='h4' component='h1' gutterBottom>
            Today Task
          </Typography>
          <Typography style={{ color: '#bdbdbd', fontSize: '13px', margin: '10px 0px' }}>
            <CheckCircleOutlineIcon style={{ fontSize: '13px' }} /> Today Task
          </Typography>
          <Grid container spacing={0}>
            <Grid item xs={12} style={{ margin: '10px 0px' }}>
              <Paper
                elevation={0}
                style={{
                  padding: '20px',
                  backgroundColor: '#f2f3f5',
                  border: '0.5px solid #e1e4e7',
                }}
              >
                {tasks && tasks.length > 0 ? (
                  tasks.map((task) => (
                    <Grid container spacing={2} key={task.id}>
                      <Typography style={textStyles}>
                        <MoveToInboxIcon style={{ fontSize: '20px' }} />
                        {task.title}
                      </Typography>
                    </Grid>
                  ))
                ) : (
                  <Typography style={textStyles}>Bạn chưa tạo Task nào cả?</Typography>
                )}
              </Paper>
            </Grid>
            <form style={{ width: '100%' }}>
              <Grid item xs={12} style={textStyles}>
                <Accordion style={{ width: '100%' }} expanded={isAccordionExpanded}>
                  <AccordionSummary
                    aria-controls='panel1-content'
                    id='panel1-header'
                    onClick={handleOpenAccord}
                  >
                    <AddIcon style={{ color: '#e40d0d', margin: '0px 5px' }} />
                    <Typography style={textStyles}>Add task</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TextField
                      id='standard-basic'
                      placeholder='Add task...'
                      variant='standard'
                      name='title'
                      value={task.title}
                      onChange={handleChange}
                      sx={{
                        '& fieldset': { border: '0.5px solid #e1e4e7' },
                        outline: 'none',
                        padding: '5px 0px',
                      }}
                      fullWidth
                    />
                  </AccordionDetails>
                  <AccordionDetails>
                    <TextField
                      id='standard-basic'
                      placeholder='Description...'
                      variant='standard'
                      name='description'
                      value={task.description}
                      onChange={handleChange}
                      sx={{
                        '& fieldset': { border: '0.5px solid #e1e4e7' },
                        outline: 'none',
                        padding: '5px 0px',
                      }}
                      fullWidth
                    />
                  </AccordionDetails>
                  <AccordionDetails>
                    <FormControl style={{ width: '100%' }}>
                      <Select name='userId' value={task.userId} onChange={handleChange} fullWidth>
                        {users?.map((user) => (
                          <MenuItem key={user.id} value={user.id}>
                            {user.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </AccordionDetails>
                  <AccordionDetails
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <Button
                      variant='outlined'
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        color: '#3d893b',
                        fontSize: '11px',
                        alignItems: 'center',
                        padding: '5px 15px',
                      }}
                    >
                      <SubtitlesIcon style={{ fontSize: '20px', marginRight: '10px' }} />
                      <Typography
                        style={{
                          fontSize: '11px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignContent: 'center',
                        }}
                      >
                        Today
                      </Typography>
                      <ClearIcon style={{ fontSize: '15px', marginLeft: '10px' }} />
                    </Button>
                    <Button
                      variant='outlined'
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        fontSize: '11px',
                        alignItems: 'center',
                        padding: '5px 10px',
                      }}
                    >
                      <AssistantPhotoIcon style={{ fontSize: '20px', marginRight: '10px' }} />
                      <Typography
                        style={{
                          fontSize: '11px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignContent: 'center',
                        }}
                      >
                        Priority
                      </Typography>
                    </Button>
                    <Button
                      variant='outlined'
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        color: '#3d893b',
                        fontSize: '11px',
                        alignItems: 'center',
                        padding: '5px 15px',
                      }}
                    >
                      <AccessAlarmIcon style={{ fontSize: '20px', marginRight: '10px' }} />
                      <Typography
                        style={{
                          fontSize: '11px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignContent: 'center',
                        }}
                      >
                        Reminders
                      </Typography>
                      <Button variant='text' style={{ padding: '2px 10px', fontSize: '11px' }}>
                        Upgrade
                      </Button>
                    </Button>
                    <Tooltip title='More Actions'>
                      <Button
                        variant='outlined'
                        onClick={handleClick}
                        size='small'
                        sx={{ color: '#93a2b9' }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                      >
                        <MoreHorizIcon />
                      </Button>
                    </Tooltip>
                    <Menu
                      anchorEl={anchorEl}
                      id='account-menu'
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      style={{ marginTop: '5px', width: '250px' }}
                    >
                      <MenuItem onClick={handleClose} style={{ width: '250px', fontSize: '13px' }}>
                        <ListItemIcon>
                          <LabelIcon fontSize='small' />
                        </ListItemIcon>
                        Labels
                      </MenuItem>
                      <MenuItem onClick={handleClose} style={{ width: '250px', fontSize: '13px' }}>
                        <ListItemIcon>
                          <FmdGoodOutlinedIcon fontSize='small' />
                        </ListItemIcon>
                        Location
                      </MenuItem>
                      <MenuItem onClick={handleClose} style={{ width: '250px', fontSize: '13px' }}>
                        <ListItemIcon>
                          <ExtensionIcon fontSize='small' />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                      <MenuItem onClick={handleClose} style={{ width: '250px', fontSize: '13px' }}>
                        Edit task actions
                      </MenuItem>
                    </Menu>
                  </AccordionDetails>
                  <Divider />
                  <Grid container xs={12}>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Tooltip title='Cancel'>
                        <Button
                          variant='text'
                          sx={{
                            padding: '5px 15px',
                            fontSize: '11px',
                            margin: '10px 0px',
                            backgroundColor: '#f5f5f5',
                            ':hover': {
                              backgroundColor: '#e1e4e7',
                            },
                            color: '#474747',
                          }}
                          onClick={handleCancel}
                        >
                          Cancel
                        </Button>
                      </Tooltip>
                      <Tooltip title='Add task'>
                        <Button
                          variant='contained'
                          sx={{
                            padding: '5px 15px',
                            fontSize: '11px',
                            margin: '10px 15px',
                            backgroundColor: '#eda59e',
                            ':hover': {
                              backgroundColor: '#e40d0d',
                            },
                          }}
                          onClick={handleSubmit}
                        >
                          Add task
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Accordion>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
