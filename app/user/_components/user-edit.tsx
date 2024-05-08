'use client';
import { PersonalInformation } from '@/app/_repositories/PersonalInformation';
import { Role } from '@/app/_repositories/Role';
import { User } from '@/app/_repositories/User';
import { Box, Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
type Props = {
  personal: PersonalInformation[]; //Khi tạo mới user thì truyền vào dạng mảng để hiển thị danh sách personal để chọn
  role: Role[]; //Khi tạo mới user thì truyền vào dạng mảng để hiển thị danh sách role để chọn
  user: User | null; //Khi sửa user thì truyền vào như trên không thể để dạng mảng vì chỉ sửa một user.
  //Khi sửa user thì truyền vào user cần sửa để hiển thị dữ liệu cũ của user đó
  //Khi tạo mới user thì truyền vào null để hiển thị form rỗng để tạo mới user đó
  //Khi truyền vào user thì sẽ hiển thị dữ liệu cũ của user đó để sửa thông tin
};

export default function EditUser(props: Props) {
  const router = useRouter();
  const personals = props.personal; //Danh sách personal
  const roles = props.role; //Danh sách role
  const users = props.user; //User cần sửa

  //State này để lưu trữ thông tin của user cần sửa hoặc tạo mới
  const [fromDataUser, setFormDataUser] = React.useState({
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleId: '',
  });
  //Hàm useEffect này để lấy ra thông tin của user cần sửa và hiển thị lên form để sửa
  useEffect(() => {
    //Hàm này chạy khi component được render
    if (users) {
      //Nếu users tồn tại thì set giá trị của user cần sửa vào state fromDataUser
      setFormDataUser((prevData) => ({
        //Set giá trị của user cần sửa vào state fromDataUser
        ...prevData, //Giữ nguyên giá trị cũ của state fromDataUser
        name: users.name || '', //Set giá trị của user cần sửa vào state fromDataUser
        firstName: users.firstName || '',
        lastName: users.lastName || '',
        email: users.email || '',
        password: users.password || '',
        roleId: users.roleId || '',
      }));
    }
  }, [users]); //Khi users thay đổi thì chạy lại hàm useEffect này

  //Hàm này để xử lý sự kiện thay đổi giá trị của input trong form và cập nhật vào state fromDataUser
  //Khi thay đổi giá trị của input thì cập nhật giá trị mới vào state fromDataUser
  const hanldChange = (e: any) => {
    //Hàm này để xử lý sự kiện thay đổi giá trị của input trong form
    setFormDataUser({
      //Set giá trị mới vào state fromDataUser
      ...fromDataUser, //Giữ nguyên giá trị cũ của state fromDataUser
      [e.target.name]: e.target.value, //Set giá trị mới của input vào state fromDataUser
    });
  };
  //Hàm này để xử lý sự kiện khi click vào nút submit form
  //Khi click vào nút submit form thì gửi dữ liệu từ state fromDataUser lên server để cập nhật thông tin user
  const handleSubmit = async () => {
    try {
      const response = await fetch(`/api/user/${users?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fromDataUser),
      });
      if (!response.ok) {
        console.log('Đang cập nhật user');
        throw new Error('Failed to create user');
      }
      alert('Tạo user thành công');
      router.push('/user');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  return (
    <Box>
      <h1>Create User</h1>
      <Grid container>
        <Grid item xs={12}>
          <h2>Form</h2>
          <Grid item xs={12}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <label htmlFor='name'>Name</label>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type='text'
                      id='name'
                      value={fromDataUser.name}
                      name='name'
                      fullWidth
                      onChange={hanldChange}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <label htmlFor='firstName'>First Name</label>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type='text'
                      id='firstName'
                      value={fromDataUser.firstName}
                      name='firstName'
                      fullWidth
                      onChange={hanldChange}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <label htmlFor='lastName'>Last Name</label>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type='text'
                      id='lastName'
                      value={fromDataUser.lastName}
                      name='lastName'
                      fullWidth
                      onChange={hanldChange}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor='email'>Email</label>
                  <TextField
                    type='email'
                    id='email'
                    name='email'
                    value={fromDataUser.email}
                    fullWidth
                    onChange={hanldChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor='password'>Password</label>
                  <TextField
                    type='password'
                    id='password'
                    name='password'
                    fullWidth
                    value={fromDataUser.password}
                    onChange={hanldChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor='role'>Role</label>
                  <Select
                    name='roleId'
                    value={fromDataUser.roleId}
                    fullWidth
                    onChange={hanldChange}
                  >
                    {roles?.map((role) => (
                      <MenuItem key={role.id} value={role.id}>
                        {role.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <Button variant='outlined' onClick={handleSubmit}>
                    Sửa User
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
