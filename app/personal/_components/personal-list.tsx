import { Box, Button, Grid, IconButton, Link, Typography } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import { PersonalInformation } from '@/app/_repositories/PersonalInformation';

type Props = {
  personalInformations: PersonalInformation[];
};

export default function PersonalInformationList(props: Props) {
  const personals = props.personalInformations;
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h6' style={{ margin: '10px 0px' }}>
            Danh sách Personal Information
          </Typography>
          <Link href={'/personal/create'}>
            <IconButton>
              <TextIncreaseIcon />
            </IconButton>
          </Link>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Box}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>STT</TableCell>
                  <TableCell>Bio</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              {personals.map((personal, index) => (
                <TableBody key={personal.id}>
                  <TableRow>
                    <TableCell>{++index}</TableCell>
                    <TableCell>{personal.bio}</TableCell>
                    <TableCell>{personal.phoneNumber}</TableCell>
                    <TableCell>
                      <Button variant='contained' color='info'>
                        Sửa
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant='contained' color='error'>
                        Xóa
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
