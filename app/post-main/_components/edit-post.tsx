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
import { Post } from '@/app/_repositories/Post';
type Props = {
  user: User[];
  post: Post | null;
};

export default function CreatePost({ user, post }: Props) {
  const router = useRouter();
  const [formData, setFormData] = useState<Post | null>(post);
  const [users, setUsers] = useState(user);
  const [posts, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (post) {
      setFormData(post);
    }
  }, [post]);

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
      const response = await fetch(`/api/post-edit/${post?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Bài viết đã được cập nhật thành công!');
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
    <Box>
      {formData && (
        <Grid>
          <Typography variant='h6'>Edit Post</Typography>
          <TextField
            id='title'
            name='title'
            label='Tiêu đề'
            sx={{ m: 1, width: '100%' }}
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
            sx={{ m: 1, width: '100%' }}
            variant='outlined'
            value={formData.content}
            onChange={handleChange}
          />
          <TextField
            id='description'
            name='description'
            label='Mô tả bài viết'
            sx={{ m: 1, width: '100%' }}
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
              sx={{ m: 1, width: '300px' }}
            >
              {users?.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant='contained' onClick={handleSubmit}>
            Create Post
          </Button>
        
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
