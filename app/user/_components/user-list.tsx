'use client';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserWithPersonalAndAddress } from '@/app/_repositories/User';
import { Alert, Grid, IconButton, Link, Typography } from '@mui/material';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import { useRouter } from 'next/navigation';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
type Props = {
  users: UserWithPersonalAndAddress[];
};

export default function UserList(props: Props) {
  const router = useRouter();
  const userList = props.users;
  const [alert, setAlert] = React.useState(false);
  const hanldDeleteUser = async (id: string) => {
    try {
      const response = await fetch(`/api/user/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      setAlert(true);
      router.refresh();
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  return (
    <TableContainer component={Paper}>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h6' style={{ margin: '10px 0px' }}>
          Danh sách User
        </Typography>
        <Link href={'/user/create'}>
          <IconButton>
            <TextIncreaseIcon />
          </IconButton>
        </Link>
      </Grid>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align='left'>Tên</TableCell>
            <TableCell align='left'>Email</TableCell>
            <TableCell align='left'>Địa chỉ</TableCell>
            <TableCell align='left'>Password</TableCell>
            <TableCell align='left'>Personal</TableCell>
            <TableCell align='left'>Role</TableCell>
            <TableCell align='left'>Sửa</TableCell>
            <TableCell align='left'>Xóa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user, index) => {
            return (
              <TableRow key={user.id}>
                <TableCell>{++index}</TableCell>
                <TableCell align='left'>{user.name}</TableCell>
                <TableCell align='left'>{user.email}</TableCell>
                <TableCell align='left'>{user.address?.address}</TableCell>
                <TableCell align='left'>{user.password}</TableCell>
                <TableCell>{user.personalInformation?.bio}</TableCell>
                <TableCell>{user.role.name}</TableCell>
                <TableCell>
                  <Link href={`/user/edit/${user.id}`}>Sửa</Link>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => hanldDeleteUser(user.id)}>
                    <ClearIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Alert
        icon={<CheckIcon fontSize='inherit' />}
        severity='success'
        style={{ display: alert ? 'block' : 'none', width: '100%', margin: '10px 0px' }}
      >
        Đã xóa user thành công!
      </Alert>
    </TableContainer>
  );
}
