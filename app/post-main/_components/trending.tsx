'use client';
import { Badge, Box, Breadcrumbs, Grid, Link, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Rating from '@mui/material/Rating';
import { Post } from '@/app/_repositories/Post';
import IconButton from '@mui/material/IconButton';
import ClassIcon from '@mui/icons-material/Class';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
type Props = {
  posts: Post[];
};

// Styling for Paper
const cssPaperCard = {
  borderRadius: 2,
  margin: '5px 0px',
  padding: 1,
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#f2f2f2', // Change this to the color you want on hover
  },
  transition: 'background-color 0.3s',
};
export default function TrendingPost(props: Props) {
  const posts = props.posts;
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Box>
      <Grid item xs={12} style={{ borderRadius: 10, margin: 10, padding: 10 }}>
        <Grid container xs={12}>
          <Typography variant='h6'>Trending</Typography>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
            {posts.map((post) => (
              <Grid item xs={3} key={post.id}>
                <Paper sx={cssPaperCard} variant='outlined'>
                  <Grid container xs={12}>
                    <Grid
                      item
                      xs={12}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                        width: '100%',
                        height: 300,
                      }}
                    >
                      <Image
                        src={post?.thumbnail || 'default_thumbnail.png'}
                        alt={'Title'}
                        layout='fill'
                        objectFit='cover'
                        style={{ borderRadius: 5, position: 'absolute' }}
                      />
                      <Grid item xs={12}>
                        {/* Thêm biểu tượng của bạn ở đây */}
                        <IconButton
                          style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                          }}
                          aria-label='view'
                          size='small'
                        >
                          <ClassIcon style={{ color: '#325381' }} />
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Link underline='hover' color='inherit' href='/'>
                        <Rating
                          name='simple-controlled'
                          value={post.likes}
                          style={{ margin: '10px 0px' }}
                        />
                        <Typography
                          style={{
                            fontSize: 15,
                          }}
                        >
                          <strong>{post.title}</strong>
                        </Typography>
                      </Link>
                      <Grid container xs={12}>
                        <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                          <Typography style={{ fontSize: 11 }}>
                            {'Ngày update : ' + post?.createdAt.toLocaleDateString('vi-VN')}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            justifyContent: 'flex-end',
                          }}
                        >
                          <Checkbox
                            {...label}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite style={{ color: '#f00a0c' }} />}
                          />
                          <Checkbox
                            {...label}
                            icon={<BookmarkBorderIcon />}
                            checkedIcon={<BookmarkIcon style={{ color: '#faaf00' }} />}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
