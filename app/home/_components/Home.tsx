import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
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
                  <Grid item xs={2.5} style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src='/images/img/image-1.jpg'
                      width={60}
                      height={60}
                      alt={'Title'}
                      style={{ borderRadius: 5 }}
                    />
                  </Grid>
                  <Grid item xs={9.5}>
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
                  <Grid item xs={2.5} style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src='/images/img/image-2.jpg'
                      width={60}
                      height={60}
                      alt={'Title'}
                      style={{ borderRadius: 5 }}
                    />
                  </Grid>
                  <Grid item xs={9.5}>
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
                  <Grid item xs={2.5} style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src='/images/img/image-3.jpg'
                      width={60}
                      height={60}
                      alt={'Title'}
                      style={{ borderRadius: 5 }}
                    />
                  </Grid>
                  <Grid item xs={9.5}>
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
          Đây là 1
        </Grid>
      </Grid>
    </Box>
  );
}
