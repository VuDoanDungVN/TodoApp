import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
export default function RecentPost() {
  return (
    <Box>
      <Grid container xs={12}>
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
                <Grid container xs={12}>
                  <Typography style={{ fontSize: 11 }}>Read more</Typography>
                  <ArrowRightAltIcon style={{ fontSize: 20 }} />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
