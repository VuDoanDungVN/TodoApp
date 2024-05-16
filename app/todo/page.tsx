import { Box, Grid } from '@mui/material';
import React from 'react';
import TodoList from './_components/todo-list';
import { TaskRepository } from '@/app/_repositories/Task';
import { UserRepository } from '@/app/_repositories/User';
export default async function TodoPages() {
  const tasks = await TaskRepository.findMany();
  const users = await UserRepository.findMany();
  return (
    <>
      <Box>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={12}>
            <TodoList task={tasks} user={users} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
