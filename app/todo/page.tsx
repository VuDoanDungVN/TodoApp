import { Box, Grid } from '@mui/material';
import React from 'react';
import TodoList from './_components/todo-list';
import { TaskRepository } from '@/app/_repositories/Task';
import { UserRepository } from '@/app/_repositories/User';
export default async function TodoPages() {
  const tasks = await TaskRepository.findMany();
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TodoList task={tasks} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
