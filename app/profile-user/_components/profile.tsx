import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
export default function profileMain() {
  return (
    <Box style={{ width: '100%' }}>
      <Grid container xs={12} style={{ backgroundColor: '#fff', width: '100%', height: '90vh' }}>
        <Grid item xs={12} style={{ padding: '20px' }}>
          <Typography style={{ padding: '15px 0px', fontSize: '1.5rem', color: '#325381' }}>
            My profile
          </Typography>
          <Paper elevation={2} style={{ margin: '30px 0px' }}>
            <Stack direction='row' spacing={2}>
              <Avatar
                style={{
                  width: '100px',
                  height: '100px',
                  margin: '20px',
                  boxShadow: '0 0 5px #ccc',
                }}
                alt='Remy Sharp'
                src='/images/img/user.jpg'
              />
            </Stack>
          </Paper>
          <Paper elevation={2}>
            <Stack direction='row' spacing={2}>
              <Grid item sx={{ width: '100%' }}>
                <TextField id='outlined-basic' label='Outlined' variant='outlined' />
                <TextField id='outlined-basic' label='Outlined' variant='outlined' />
              </Grid>
              <Grid></Grid>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
