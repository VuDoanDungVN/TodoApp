import { Box, Breadcrumbs, Grid, Link, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentBankIcon from '@mui/icons-material/CommentBank';
import ShareIcon from '@mui/icons-material/Share';
import { Post } from '@/app/_repositories/Post';

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
export default function Home(props: Props) {
  const posts = props.posts;
  return (
    <Box>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={3}>
          <Grid item xs={12} style={{ borderRadius: 10, margin: 10, padding: 10 }}>
            <Typography variant='h6'>Recent Post</Typography>
            <Grid item xs={12}>
              {/* This is a sample card, you can replace this with your own card */}
              <Paper sx={cssPaperCard} variant='outlined'>
                <Grid container xs={12}>
                  <Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src='/images/img/image-1.jpg'
                      width={60}
                      height={60}
                      alt={'Title'}
                      style={{ borderRadius: 5 }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography style={{ fontSize: 11 }}>
                      Mobile app design trends 2024, comprehensive collection.
                    </Typography>
                    <Grid
                      container
                      xs={12}
                      style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                    >
                      <Typography style={{ fontSize: 11 }}>Read more</Typography>
                      <ArrowRightAltIcon style={{ fontSize: 20 }} />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              {/* This is a sample card, you can replace this with your own card */}
              <Paper sx={cssPaperCard} variant='outlined'>
                <Grid container xs={12}>
                  <Grid
                    item
                    xs={3}
                    style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}
                  >
                    <Image
                      src='/images/img/image-2.jpg'
                      width={60}
                      height={60}
                      alt={'Title'}
                      style={{ borderRadius: 5 }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography style={{ fontSize: 11 }}>
                      Mobile app design trends 2024, comprehensive collection.
                    </Typography>
                    <Grid
                      container
                      xs={12}
                      style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                    >
                      <Typography style={{ fontSize: 11 }}>Read more</Typography>
                      <ArrowRightAltIcon style={{ fontSize: 20 }} />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              {/* This is a sample card, you can replace this with your own card */}
              <Paper sx={cssPaperCard} variant='outlined'>
                <Grid container xs={12}>
                  <Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src='/images/img/image-3.jpg'
                      width={60}
                      height={60}
                      alt={'Title'}
                      style={{ borderRadius: 5 }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography style={{ fontSize: 11 }}>
                      Mobile app design trends 2024, comprehensive collection.
                    </Typography>
                    <Grid
                      container
                      xs={12}
                      style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                    >
                      <Typography style={{ fontSize: 11 }}>Read more</Typography>
                      <ArrowRightAltIcon style={{ fontSize: 20 }} />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ borderRadius: 10, margin: 10, padding: 10 }}>
            <Typography variant='h6'>News</Typography>
            <Grid item xs={12}>
              {/* This is a sample card, you can replace this with your own card */}
              <Paper sx={cssPaperCard} variant='outlined'>
                <Grid container xs={12}>
                  <Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src='/images/img/image-1.jpg'
                      width={60}
                      height={60}
                      alt={'Title'}
                      style={{ borderRadius: 5 }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography style={{ fontSize: 11 }}>
                      Mobile app design trends 2024, comprehensive collection.
                    </Typography>
                    <Grid
                      container
                      xs={12}
                      style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                    >
                      <Typography style={{ fontSize: 11 }}>Read more</Typography>
                      <ArrowRightAltIcon style={{ fontSize: 20 }} />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              {/* This is a sample card, you can replace this with your own card */}
              <Paper sx={cssPaperCard} variant='outlined'>
                <Grid container xs={12}>
                  <Grid
                    item
                    xs={3}
                    style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}
                  >
                    <Image
                      src='/images/img/image-2.jpg'
                      width={60}
                      height={60}
                      alt={'Title'}
                      style={{ borderRadius: 5 }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography style={{ fontSize: 11 }}>
                      Mobile app design trends 2024, comprehensive collection.
                    </Typography>
                    <Grid
                      container
                      xs={12}
                      style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                    >
                      <Typography style={{ fontSize: 11 }}>Read more</Typography>
                      <ArrowRightAltIcon style={{ fontSize: 20 }} />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              {/* This is a sample card, you can replace this with your own card */}
              <Paper sx={cssPaperCard} variant='outlined'>
                <Grid container xs={12}>
                  <Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src='/images/img/image-3.jpg'
                      width={60}
                      height={60}
                      alt={'Title'}
                      style={{ borderRadius: 5 }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography style={{ fontSize: 11 }}>
                      Mobile app design trends 2024, comprehensive collection.
                    </Typography>
                    <Grid
                      container
                      xs={12}
                      style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                    >
                      <Typography style={{ fontSize: 11 }}>Read more</Typography>
                      <ArrowRightAltIcon style={{ fontSize: 20 }} />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/**Đây là phần hiển thị Post */}
        <Grid item xs={9}>
          <Grid item xs={12} style={{ borderRadius: 10, margin: 10, padding: 10 }}>
            <Grid container xs={12}>
              <Typography variant='h6'>Trending</Typography>
              <Grid
                item
                xs={12}
                style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}
              >
                {posts?.map((post) => (
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
                            height: 200,
                          }}
                        >
                          <Image
                            src={post?.thumbnail || 'default_thumbnail.png'}
                            alt={'Title'}
                            layout='fill'
                            objectFit='cover'
                            style={{ borderRadius: 5, position: 'absolute' }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Breadcrumbs
                            aria-label='breadcrumb'
                            style={{ fontSize: '12px', margin: '10px 0px' }}
                          >
                            <Link underline='hover' color='inherit' href='/'>
                              News
                            </Link>
                            <Link
                              underline='hover'
                              color='inherit'
                              href='/material-ui/getting-started/installation/'
                            >
                              Thế giới
                            </Link>
                            <Typography color='text.primary' style={{ fontSize: '12px' }}>
                              Chính trị
                            </Typography>
                          </Breadcrumbs>
                        </Grid>
                        <Grid item xs={12}>
                          <Link underline='hover' color='inherit' href='/'>
                            <Typography
                              style={{ fontSize: 13, maxHeight: '40px', minHeight: '40px' }}
                            >
                              <strong>{post.title}</strong>
                            </Typography>
                          </Link>
                          <Typography
                            style={{
                              fontSize: '12px',
                              margin: '10px 0px',
                              color: '#bdbdbd',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {post.description}
                          </Typography>
                          <Grid container xs={12}>
                            <Grid
                              item
                              xs={6}
                              style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                            >
                              <Typography style={{ fontSize: 11 }}>
                                {'Ngày ' +
                                  post?.createdAt.toLocaleDateString('vi-VN', { day: '2-digit' }) +
                                  ' Tháng ' +
                                  post?.createdAt.toLocaleDateString('vi-VN', {
                                    month: '2-digit',
                                  }) +
                                  ' Năm ' +
                                  post?.createdAt.toLocaleDateString('vi-VN', { year: 'numeric' })}
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
                              <Typography style={{ fontSize: 10 }}>
                                <ThumbUpIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                              </Typography>
                              <Typography style={{ fontSize: 10 }}>
                                <CommentBankIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                              </Typography>
                              <Typography style={{ fontSize: 10 }}>
                                <ShareIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                              </Typography>
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
        </Grid>
      </Grid>
    </Box>
  );
}
