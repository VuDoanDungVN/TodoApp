import { Box, Breadcrumbs, Grid, Link, Paper, Typography } from '@mui/material';
import React from 'react';
import { Post } from '@/app/_repositories/Post';
import RecentPost from '@/app/post-main/_components/recent-post';
import NewsPost from '@/app/post-main/_components/news';
import TrendingPost from '@/app/post-main/_components/trending';
import { PostRepository } from '@/app/_repositories/Post';

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
export default async function Home(props: Props) {
  const posts = await PostRepository.findMany();
  return (
    <Box>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={3}>
          <Grid item xs={12} style={{ borderRadius: 10, margin: 10, padding: 10 }}>
            {/**Đây là phần hiển thị Recent Post */}
            <RecentPost />
          </Grid>
          <Grid item xs={12} style={{ borderRadius: 10, margin: 10, padding: 10 }}>
            {/**Đây là phần hiển thị News Post */}
            <NewsPost />
          </Grid>
        </Grid>
        {/**Đây là phần hiển thị Post */}
        <Grid item xs={9}>
          <TrendingPost posts={posts} />
        </Grid>
      </Grid>
    </Box>
  );
}
