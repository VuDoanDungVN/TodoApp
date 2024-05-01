'use client';
import { Categories } from '@/app/_repositories/Category';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
  MenuItem,
  Button,
  SelectChangeEvent,
  Alert,
  AlertProps,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Post } from '@/app/_repositories/Post';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import { User } from '@/app/_repositories/User';
import { title } from 'process';
type Props = {
  user: User[];
};

interface PostObject {
  title: string;
  content: string;
  description: string;
  slug: string;
  userId: string;
  thumbnail: string;
}

export default function CreatePost(props: Props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    userId: '',
    description: '',
    slug: '',
    thumbnail: '',
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
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Post created successfully');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h6'>Create Post</Typography>
          </Grid>
          {/* Thêm trường input file cho người dùng chọn ảnh */}
          <Grid item xs={12}>
            <input name='thumbnail' type='file' accept='thumnail/*' onChange={handleImageChange} />
            {/* Hiển thị ảnh được chọn */}
            {formData.thumbnail && (
              <img
                src={formData.thumbnail}
                alt='Selected'
                style={{ maxWidth: '10%', marginTop: '10px' }}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='title'
              name='title'
              label='Title'
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={formData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='content'
              name='content'
              label='Content'
              multiline
              rows={4}
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={formData.content}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='description'
              name='description'
              label='Description'
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='slug'
              name='slug'
              label='Slug'
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={formData.slug}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel>User</InputLabel>
              <Select name='userId' value={formData.userId} onChange={handleChange}>
                {users?.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' onClick={handleSubmit}>
              Create Post
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
