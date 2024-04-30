import { Box, Breadcrumbs, Grid, Link, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentBankIcon from '@mui/icons-material/CommentBank';
import ShareIcon from '@mui/icons-material/Share';
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
  cursor: 'pointer',
};
export default function Home() {
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
        <Grid item xs={9}>
          <Grid item xs={12} style={{ borderRadius: 10, margin: 10, padding: 10 }}>
            <Grid container xs={12}>
              <Grid
                item
                xs={12}
                style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}
              >
                <Grid item xs={3}>
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
                          src='/images/post/post-1.jpg'
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
                        <Typography style={{ fontSize: 13 }}>
                          <strong>Mobile app design trends 2024 comprehensive collection.</strong>
                        </Typography>
                        <Typography
                          style={{ fontSize: '12px', margin: '10px 0px', color: '#bdbdbd' }}
                        >
                          Mobile app design trends 2024 comprehensive collection.Mobile app design
                          trends 2024 comprehensive collection.
                        </Typography>
                        <Grid container xs={12}>
                          <Grid
                            item
                            xs={6}
                            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                          >
                            <Typography style={{ fontSize: 11 }}>
                              24 December | 7 min read
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
                            <Typography style={{ fontSize: 11 }}>
                              <ThumbUpIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                            </Typography>
                            <Typography style={{ fontSize: 11 }}>
                              <CommentBankIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                            </Typography>
                            <Typography style={{ fontSize: 11 }}>
                              <ShareIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
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
                          src='/images/post/post-1.jpg'
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
                        <Typography style={{ fontSize: 13 }}>
                          <strong>Mobile app design trends 2024 comprehensive collection.</strong>
                        </Typography>
                        <Typography
                          style={{ fontSize: '12px', margin: '10px 0px', color: '#bdbdbd' }}
                        >
                          Mobile app design trends 2024 comprehensive collection.Mobile app design
                          trends 2024 comprehensive collection.
                        </Typography>
                        <Grid container xs={12}>
                          <Grid
                            item
                            xs={6}
                            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                          >
                            <Typography style={{ fontSize: 11 }}>
                              24 December | 7 min read
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
                            <Typography style={{ fontSize: 11 }}>
                              <ThumbUpIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                            </Typography>
                            <Typography style={{ fontSize: 11 }}>
                              <CommentBankIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                            </Typography>
                            <Typography style={{ fontSize: 11 }}>
                              <ShareIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
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
                          src='/images/post/post-1.jpg'
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
                        <Typography style={{ fontSize: 13 }}>
                          <strong>Mobile app design trends 2024 comprehensive collection.</strong>
                        </Typography>
                        <Typography
                          style={{ fontSize: '12px', margin: '10px 0px', color: '#bdbdbd' }}
                        >
                          Mobile app design trends 2024 comprehensive collection.Mobile app design
                          trends 2024 comprehensive collection.
                        </Typography>
                        <Grid container xs={12}>
                          <Grid
                            item
                            xs={6}
                            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                          >
                            <Typography style={{ fontSize: 11 }}>
                              24 December | 7 min read
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
                            <Typography style={{ fontSize: 11 }}>
                              <ThumbUpIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                            </Typography>
                            <Typography style={{ fontSize: 11 }}>
                              <CommentBankIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                            </Typography>
                            <Typography style={{ fontSize: 11 }}>
                              <ShareIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
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
                          src='/images/post/post-1.jpg'
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
                        <Typography style={{ fontSize: 13 }}>
                          <strong>Mobile app design trends 2024 comprehensive collection.</strong>
                        </Typography>
                        <Typography
                          style={{ fontSize: '12px', margin: '10px 0px', color: '#bdbdbd' }}
                        >
                          Mobile app design trends 2024 comprehensive collection.Mobile app design
                          trends 2024 comprehensive collection.
                        </Typography>
                        <Grid container xs={12}>
                          <Grid
                            item
                            xs={6}
                            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                          >
                            <Typography style={{ fontSize: 11 }}>
                              24 December | 7 min read
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
                            <Typography style={{ fontSize: 11 }}>
                              <ThumbUpIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                            </Typography>
                            <Typography style={{ fontSize: 11 }}>
                              <CommentBankIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                            </Typography>
                            <Typography style={{ fontSize: 11 }}>
                              <ShareIcon style={{ color: '#bdbdbd', fontSize: '20px' }} />
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
