'use client';
import { User } from '@/app/_repositories/User';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
  MenuItem,
  Button,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
//Bước 1: Tạo interface Props
type Props = {
  users: User[];
};
//Bước 2: Tạo component AddressCreate
export default function AddressCreate(props: Props) {
  const router = useRouter();
  //Bước 3: Tạo state formDataAddress và setFormDataAddress để lưu trữ dữ liệu nhập vào
  const [formDataAddress, setFormDataAddress] = useState({
    address: '',
    userId: '',
  });
  //Bước 4 : Tạo hàm xử lý UserChange lấy ra userId
  const [users, setUsers] = useState(props.users);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/address');
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

  //Bước 5: Tạo hàm handleChange để xử lý sự kiện thay đổi giá trị của input
  const handleChange = (e: any) => {
    setFormDataAddress({
      ...formDataAddress,
      [e.target.name]: e.target.value,
    });
  };
  //Bước 6: Tạo hàm handleSave để lưu dữ liệu vào database thông qua api
  const handleSave = async () => {
    const formDataAddressList = new FormData();
    formDataAddressList.append('address', formDataAddress.address);
    formDataAddressList.append('userId', formDataAddress.userId);
    try {
      const response = await fetch('/api/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataAddress),
      });

      if (response.ok) {
        setAlert(true);
        console.log('Đã tạo Address thành công!');
        router.push('/address');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  const [alert, setAlert] = useState(false);
  return (
    <>
      <Box>
        {/* Bước 7: Tạo form để nhập dữ liệu và bước 8 là tạo Api  */}
        <form onSubmit={handleSave}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h5'>Create Address</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='address'
                label='Address'
                name='address'
                variant='outlined'
                fullWidth
                value={formDataAddress.address} //Bước 9: Thêm value vào TextField
                onChange={handleChange} //Bước 10: Thêm hàm handleChange vào TextField
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel>Chọn tác giả :</InputLabel>
                <Select
                  name='userId'
                  value={formDataAddress.userId} //Bước 9: Thêm value vào TextField
                  onChange={handleChange} //Bước 10: Thêm hàm handleChange vào Select
                  sx={{ m: 1, width: '300px' }}
                >
                  {users?.map(
                    (
                      user, //Bước 11: Lấy ra userId
                    ) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.name}
                      </MenuItem>
                    ),
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' onClick={handleSave}>
                Tạo Address
              </Button>
            </Grid>
          </Grid>
        </form>
        <Alert
          icon={<CheckIcon fontSize='inherit' />}
          severity='success'
          style={{ display: alert ? 'block' : 'none' }}
        >
          Đã tạo Address!
        </Alert>
      </Box>
    </>
  );
}
