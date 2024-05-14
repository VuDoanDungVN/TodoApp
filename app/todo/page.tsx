import { Box, Grid } from '@mui/material';
import React from 'react';
import TodoList from './_components/todo-list';

export default function TodoPages() {
  return (
    <>
      <Box>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={3}>
            <TodoList />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
