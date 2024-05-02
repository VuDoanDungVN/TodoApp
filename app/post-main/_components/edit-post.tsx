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
import { Post } from '@/app/_repositories/Post';
type Props = {
  user: User[];
  post: Post | null;
};

export default function CreatePost({ user, post }: Props) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    userId: '',
    description: '',
    slug: '',
    thumbnail: null as unknown as File | string,
  });
  const [users, setUsers] = useState(user);

  useEffect(() => {
    if (post) {
      setFormData((prevData) => ({
        ...prevData,
        title: post.title || '',
        content: post.content || '',
        userId: post.userId || '',
        description: post.description || '',
        slug: post.slug || '',
        thumbnail: post.thumbnail || '',
      }));
    }
  }, [post]);

  const handleChange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`/api/post-edit/${post?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Bài viết đã được cập nhật thành công!');
        setAlert(true);
        router.push('/home');
      } else {
        console.error('Failed to update post');
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const [alert, setAlert] = useState(false);

  return (
    <>
      {formData && (
        <Grid container spacing={1}>
          <Grid item xs={12} style={{ display: 'block', padding: '10px 20px' }}>
            <Typography style={{ fontSize: '20px', margin: '10px 10px' }}>
              Chỉnh sửa bài viết :
            </Typography>
            <TextField
              id='title'
              name='title'
              label='Tiêu đề'
              sx={{ margin: '10px', width: '100%' }}
              variant='outlined'
              value={formData.title}
              onChange={handleChange}
            />
            <TextField
              id='content'
              name='content'
              label='Nội dung bài viết'
              multiline
              rows={4}
              sx={{ margin: '10px', width: '100%' }}
              variant='outlined'
              value={formData.content}
              onChange={handleChange}
            />
            <TextField
              id='description'
              name='description'
              label='Mô tả bài viết'
              sx={{ margin: '10px', width: '100%' }}
              variant='outlined'
              value={formData.description}
              onChange={handleChange}
            />
            <TextField
              id='slug'
              name='slug'
              label='Đường dẫn link '
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={formData.slug}
              onChange={handleChange}
            />
            <FormControl>
              <InputLabel>Chọn tác giả :</InputLabel>
              <Select
                name='userId'
                value={formData.userId}
                onChange={handleChange}
                sx={{ margin: '10px', width: '300px' }}
              >
                {users?.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Alert
              icon={<CheckIcon fontSize='inherit' />}
              severity='success'
              style={{ display: alert ? 'block' : 'none' }}
            >
              Đã sửa đổi bài viết thành công!
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              onClick={handleSubmit}
              style={{ margin: '10px 20px', width: '200px' }}
            >
              Sửa đổi
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}
