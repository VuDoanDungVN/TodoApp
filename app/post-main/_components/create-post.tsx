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
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Post } from '@/app/_repositories/Post';
import { useRouter } from 'next/navigation'; // Sửa từ next/navigation thành next/router
import { useSession, signIn, signOut } from 'next-auth/react';
import { User } from '@/app/_repositories/User';
type Props = {
  post: Post[];
  user: User[];
};

interface PostObject {
  title: string;
  content: string;
  description: string;
  slug: string;
  userId: string;
}

export default function CreatePost(props: Props) {
  const { data: session, status } = useSession();
  const users = props.user;
  const posts = props.post;
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState(''); // Sử dụng state mới để lưu trữ giá trị category được chọn
  const [user, setUser] = useState('');
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postData: PostObject = {
      title: title,
      content: content,
      description: description,
      slug: slug,
      userId: session?.user.id as string,
    };

    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        router.push('/post-main');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h6'>Create Post</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='title'
              label='Title'
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='content'
              label='Content'
              multiline
              rows={4}
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='description'
              label='Description'
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='slug'
              label='Slug'
              sx={{ m: 1, width: '100%' }}
              variant='outlined'
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Select label='user' required defaultValue={users ? users : ''}>
              {user?.map((user) => {
                return (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' color='primary' type='submit'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
