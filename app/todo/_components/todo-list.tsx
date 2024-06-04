'use client';
import React, { useEffect, useState } from 'react';
import {
  Typography,
  Grid,
  Button,
  TextField,
  Select,
  FormControl,
  Box,
  Alert,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Accordion from '@mui/material/Accordion';
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
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Task } from '@/app/_repositories/Task';
import { useRouter } from 'next/navigation';
import CheckIcon from '@mui/icons-material/Check';

type Props = {
  task: Task[];
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function TodoList(props: Props) {
  const tasks = props.task;
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Hàm này sẽ lấy ra task cần sửa và hiển thị dialog
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  // State cho form chỉnh sửa
  const [editTask, setEditTask] = useState({
    id: '',
    title: '',
    description: '',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  // Hàm này sẽ lấy ra task cần sửa và hiển thị dialog
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  // Hàm này sẽ lấy ra task cần sửa và hiển thị dialog
  const handleEditTask = (taskId: string | null) => {
    const selectedTask = tasks.find((task) => task.id === taskId);
    if (selectedTask) {
      setEditTask({
        id: selectedTask.id,
        title: selectedTask.title,
        description: selectedTask.description || '',
        completed: selectedTask.completed,
        createdAt: selectedTask.createdAt,
        updatedAt: selectedTask.updatedAt,
      });
      setSelectedTaskId(taskId);
      handleClickOpenDialogTodoList();
    }
  };

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

  const [openDialogTodoList, setOpenDialogTodoList] = useState(false);

  const handleClickOpenDialogTodoList = () => {
    setOpenDialogTodoList(true);
  };

  const handleCloseDialogTodoList = () => {
    setOpenDialogTodoList(false);
  };

  const [alert, setAlert] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const [deleteDialog, setDeleteDialog] = useState(false);
  const handleDeleteDialogOpen = () => {
    setDeleteDialog(true);
  };
  const handleDeleteDialogClose = () => {
    setDeleteDialog(false);
  };
  const textStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: isHover ? '#e40d0d' : '#bdbdbd',
    fontSize: '15px',
    transition: 'color 0.3s',
    cursor: 'pointer',
    margin: '15px 0px 15px 15px',
    backgroundColor: '#fff',
    width: '100%',
  };

  // Hàm này sẽ cập nhật task mới khi người dùng nhập dữ liệu vào input Create
  const handleChange = (e: any) => {
    const updatedTask = {
      ...task,
      [e.target.name]: e.target.value,
    };
    setTask(updatedTask);
  };

  // Hàm này sẽ cập nhật task mới khi người dùng nhập dữ liệu vào input Edit
  const handleChangeEditTask = (e: any) => {
    const updatedEditTask = {
      ...editTask,
      [e.target.name]: e.target.value,
    };
    setEditTask(updatedEditTask);
  };
  // Hàm này sẽ tạo ID duy nhất cho task mới không bị trùng với các task khác
  const generateUniqueId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };
  // Hàm này sẽ gửi request POST tạo task mới
  const handleSubmit = async () => {
    // Kiểm tra xem task có rỗng không
    if (!task.title.trim()) {
      // Task rỗng, không tạo task
      setAlert('Vui lòng nhập tiêu đề Task');
      return;
    }

    const newTask = {
      ...task,
      id: generateUniqueId(), // Tạo ID duy nhất cho task mới
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        setAlert('Đã tạo Task thành công');
        router.push('/todo');
        router.refresh();
        // Đặt lại trạng thái task
        setTask({
          id: '',
          title: '',
          description: '',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      } else {
        console.error('Failed to create task');
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };
  const handleUpdateTask = async (taskId: string) => {
    try {
      const response = await fetch(`/api/task-edit/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editTask),
      });

      if (response.ok) {
        setAlert('Đã sửa Task thành công');
        setSelectedTaskId(null);
        handleCloseDialogTodoList();
        router.push('/todo');
        router.refresh();
      } else {
        console.error('Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task-delete/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
      }
      setDeleteDialog(false);
      setAlertMessage('Đã xóa Task');
      setAlertMessage('');
      router.push('/todo');
      router.refresh();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ margin: '30px 0px' }}>
          <Typography variant='h4' component='h1' gutterBottom>
            Today Task
          </Typography>
          <Typography style={{ color: '#bdbdbd', fontSize: '13px', margin: '10px 0px' }}>
            <CheckCircleOutlineIcon style={{ fontSize: '13px' }} /> Today Task
          </Typography>
          <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {tasks && tasks.length > 0 ? (
                  tasks.map((task, index) => (
                    <Grid item xs={12} key={task.id}>
                      <Grid item xs={12} style={textStyles}>
                        <Box style={{ width: '100%' }}>
                          <Accordion
                            expanded={expanded === task.id}
                            onChange={handleChangeAccordion(task.id)}
                          >
                            <AccordionSummary
                              aria-controls={`${task.id}-content`}
                              id={`${task.id}-header`}
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                backgroundColor: '#f5f5f5',
                              }}
                            >
                              <Grid container spacing={2}>
                                <Grid item xs={12}>
                                  <Typography style={{ fontSize: '12px', fontWeight: 600 }}>
                                    {++index} : {task.title}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Grid container spacing={2}>
                                <Grid item xs={6}>
                                  <Typography
                                    style={{
                                      fontSize: '12px',
                                      fontWeight: 600,
                                      margin: '10px 0px',
                                    }}
                                  >
                                    Content :
                                  </Typography>
                                  <Typography style={{ fontSize: '12px', color: '#3c3c3c' }}>
                                    {task.description}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid container spacing={2}>
                                <Grid item xs={6}>
                                  <Typography
                                    style={{
                                      fontSize: '12px',
                                      fontWeight: 600,
                                      margin: '10px 0px',
                                    }}
                                  >
                                    Date :
                                  </Typography>
                                  <Typography style={{ fontSize: '12px', color: '#3c3c3c' }}>
                                    {task.createdAt.toDateString()}
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography
                                    style={{
                                      fontSize: '12px',
                                      fontWeight: 600,
                                      margin: '10px 0px',
                                    }}
                                  >
                                    Complete:
                                  </Typography>
                                  <Typography style={{ fontSize: '12px' }}>
                                    {task.completed ? 'Completed' : 'Not Completed'}
                                  </Typography>
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  style={{ display: 'flex', justifyContent: 'flex-end' }}
                                >
                                  <Button
                                    style={{
                                      fontSize: '11px',
                                      padding: '5px 15px',
                                    }}
                                    color='primary'
                                    onClick={() => handleEditTask(task.id)}
                                  >
                                    <EditIcon style={{ fontSize: '20px', margin: '0px 5px' }} />{' '}
                                    Edit
                                  </Button>
                                  <Button
                                    style={{
                                      fontSize: '11px',
                                      padding: '5px 15px',
                                    }}
                                    color='error'
                                    onCanPlay={() => setSelectedTaskId(task.id)}
                                    onClick={() => {
                                      handleDeleteTask(task.id);
                                    }}
                                  >
                                    <ClearIcon style={{ fontSize: '20px', margin: '0px 5px' }} />{' '}
                                    Delete
                                  </Button>
                                </Grid>
                              </Grid>
                            </AccordionDetails>
                          </Accordion>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                      ></Grid>
                    </Grid>
                  ))
                ) : (
                  <Typography style={textStyles}>Bạn chưa tạo Task nào cả?</Typography>
                )}
                <form style={{ width: '100%' }}>
                  <Grid item xs={12} style={textStyles}>
                    <Accordion style={{ width: '100%' }} expanded={isAccordionExpanded}>
                      <AccordionSummary
                        aria-controls='panel1-content'
                        id='panel1-header'
                        onClick={handleOpenAccord}
                        sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
                      >
                        <AddIcon style={{ color: '#e40d0d', margin: '0px 5px' }} />
                        <Typography
                          style={{
                            fontSize: '12px',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                          }}
                        >
                          Add task
                        </Typography>
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
                          inputProps={{
                            style: { fontSize: '15px' }, // change this to the desired font size
                          }}
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
                          inputProps={{
                            style: { fontSize: '15px' }, // change this to the desired font size
                          }}
                        />
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
                          <span style={{ padding: '2px 10px', fontSize: '11px' }}>Upgrade</span>
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
                          <MenuItem
                            onClick={handleClose}
                            style={{ width: '250px', fontSize: '13px' }}
                          >
                            <ListItemIcon>
                              <LabelIcon fontSize='small' />
                            </ListItemIcon>
                            Labels
                          </MenuItem>
                          <MenuItem
                            onClick={handleClose}
                            style={{ width: '250px', fontSize: '13px' }}
                          >
                            <ListItemIcon>
                              <FmdGoodOutlinedIcon fontSize='small' />
                            </ListItemIcon>
                            Location
                          </MenuItem>
                          <MenuItem
                            onClick={handleClose}
                            style={{ width: '250px', fontSize: '13px' }}
                          >
                            <ListItemIcon>
                              <ExtensionIcon fontSize='small' />
                            </ListItemIcon>
                            Logout
                          </MenuItem>
                          <MenuItem
                            onClick={handleClose}
                            style={{ width: '250px', fontSize: '13px' }}
                          >
                            Edit task actions
                          </MenuItem>
                        </Menu>
                      </AccordionDetails>
                      <Divider />
                      <Grid container>
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
          {/* Dialog */}
          <Dialog
            open={openDialogTodoList}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDialogTodoList}
            aria-describedby='alert-dialog-slide-description'
          >
            <Grid item xs={12} style={textStyles}>
              <Accordion style={{ width: '100%' }} expanded={isAccordionExpanded}>
                <AccordionSummary
                  aria-controls='panel1-content'
                  id='panel1-header'
                  onClick={handleOpenAccord}
                  sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
                >
                  <AddIcon style={{ color: '#e40d0d', margin: '0px 5px' }} />
                  <Typography
                    style={{
                      fontSize: '12px',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    Add task
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField
                    id='standard-basic'
                    placeholder='Add task...'
                    variant='standard'
                    name='title'
                    value={editTask.title}
                    onChange={handleChangeEditTask}
                    sx={{
                      '& fieldset': { border: '0.5px solid #e1e4e7' },
                      outline: 'none',
                      padding: '5px 0px',
                    }}
                    fullWidth
                    inputProps={{
                      style: { fontSize: '12px' }, // change this to the desired font size
                    }}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <TextField
                    id='standard-basic'
                    placeholder='Description...'
                    variant='standard'
                    name='description'
                    value={editTask.description}
                    onChange={handleChangeEditTask}
                    sx={{
                      '& fieldset': { border: '0.5px solid #e1e4e7' },
                      outline: 'none',
                      padding: '5px 0px',
                    }}
                    fullWidth
                    inputProps={{
                      style: { fontSize: '12px' }, // change this to the desired font size
                    }}
                  />
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
                    <span style={{ padding: '2px 10px', fontSize: '11px' }}>Upgrade</span>
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
                <Grid container>
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
                        onClick={handleCloseDialogTodoList}
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
                        onClick={() =>
                          selectedTaskId ? handleUpdateTask(selectedTaskId) : handleSubmit()
                        }
                      >
                        Add task
                      </Button>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Accordion>
            </Grid>
          </Dialog>
          {alert && <Alert severity='success'>Đã sửa Task thành công</Alert>}
          {alertMessage && <Alert severity='success'>Đã xóa Task</Alert>}
        </Grid>
      </Grid>
    </div>
  );
}
