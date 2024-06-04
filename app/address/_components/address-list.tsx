import { Address } from '@/app/_repositories/Address';
import {
  Box,
  Grid,
  IconButton,
  Link,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
type Props = {
  address: Address[];
};

export default function AddressList(props: Props) {
  const addressList = props.address;
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid
              item
              xs={12}
              style={{
                borderRadius: 10,
                margin: 10,
                padding: 10,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant='h4'>Address List</Typography>
              <Link href={'/address/create'}>
                <IconButton>
                  <TextIncreaseIcon />
                </IconButton>
              </Link>
            </Grid>
            <Grid item xs={12} style={{ borderRadius: 10, margin: 10, padding: 10 }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell align='right'>Address</TableCell>
                      <TableCell align='right'>Phone</TableCell>
                      <TableCell align='right'>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {addressList.map((address) => (
                      <TableRow
                        key={address.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component='th' scope='address'>
                          {address.id}
                        </TableCell>
                        <TableCell align='right'>{address.address}</TableCell>
                        <TableCell align='right'>{address.createdAt.toDateString()}</TableCell>
                        <TableCell align='right'>
                          <Link href={`/address/edit/${address.id}`}>
                            <IconButton aria-label='edit'>
                              <EditIcon />
                            </IconButton>
                          </Link>
                          <IconButton aria-label='delete'>
                            <ClearIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
