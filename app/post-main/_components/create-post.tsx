'use client';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
  MenuItem,
  Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { User } from '@/app/_repositories/User';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
type Props = {
  user: User[];
};

export default function CreatePost(props: Props) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    userId: '',
    description: '',
    slug: '',
    thumbnail: null as unknown as File | string,
  });
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

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Hàm xử lý thay đổi cho trường input file ảnh và import ảnh
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Xử lý thay đổi cho trường input file
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileName = file.name;
      const thumbnailPath = `/images/thumnail/${fileName}`;
      setFormData({
        ...formData,
        thumbnail: thumbnailPath, // Gán đường dẫn theo yêu cầu của bạn
      });
    }
  };

  const handleSubmit = async () => {
    const formDataWithFile = new FormData();
    formDataWithFile.append('title', formData.title);
    formDataWithFile.append('content', formData.content);
    formDataWithFile.append('userId', formData.userId);
    formDataWithFile.append('description', formData.description);
    formDataWithFile.append('slug', formData.slug);
    formDataWithFile.append('thumbnail', formData.thumbnail);
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlert(true);
        console.log('Đã viết bài thành công!');
        router.push('/home');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const [alert, setAlert] = useState(false);

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h6'>Create Post</Typography>
          </Grid>
          {/* Thêm trường input file cho người dùng chọn ảnh */}
          <Grid item xs={10}>
            <Typography variant='h6'>Thêm ảnh thumnail :</Typography>
            <input name='thumbnail' type='file' accept='image/*' onChange={handleImageChange} />
            {formData.thumbnail instanceof File && (
              <Image
                src={URL.createObjectURL(formData.thumbnail)}
                alt='image'
                width={200}
                height={200}
                style={{ maxWidth: '100%', marginTop: '10px', margin: '10px' }}
              />
            )}
          </Grid>
          <Grid item xs={10}>
            <TextField
              id='title'
              name='title'
              label='Tiêu đề'
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={formData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              id='content'
              name='content'
              label='Nội dung bài viết'
              multiline
              rows={4}
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={formData.content}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              id='description'
              name='description'
              label='Mô tả bài viết'
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              id='slug'
              name='slug'
              label='Đường dẫn link '
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={formData.slug}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={10}>
            <FormControl>
              <InputLabel>Chọn tác giả :</InputLabel>
              <Select
                name='userId'
                value={formData.userId}
                onChange={handleChange}
                sx={{ m: 1, width: '300px' }}
              >
                {users?.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={10}>
            <Button variant='contained' onClick={handleSubmit}>
              Create Post
            </Button>
          </Grid>
        </Grid>
      </form>
      <Alert
        icon={<CheckIcon fontSize='inherit' />}
        severity='success'
        style={{ display: alert ? 'block' : 'none' }}
      >
        Đã post bài viết lên trang chủ!
      </Alert>
    </Box>
  );
}
