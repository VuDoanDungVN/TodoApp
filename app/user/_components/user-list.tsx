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

type Props = {
  users: UserWithPersonalAndAddress[];
};

export default function UserList(props: Props) {
  const userList = props.users;
  return (
    <TableContainer component={Paper}>
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
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
