'use client';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User } from '@/app/_repositories/User';
import { Department } from '@/app/_repositories/Department';
import { Role } from '@/app/_repositories/Role';

type Props = {
  users: User[];
  departments: Department[] | null;
  roles: Role[] | null;
};

export default function UserList(props: Props) {
  const userList = props.users;
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align='right'>Tên</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>Role</TableCell>
            <TableCell align='right'>Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList?.map((user, index) => {
            return (
              <TableRow key={user.id}>
                <TableCell>{++index}</TableCell>
                <TableCell component='th' scope='row'>
                  {user.id}
                </TableCell>
                <TableCell align='right'>{user.name}</TableCell>
                <TableCell align='right'>{user.email}</TableCell>
                <TableCell align='right'>{user.name}</TableCell>
                <TableCell align='right'>{user.email}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
