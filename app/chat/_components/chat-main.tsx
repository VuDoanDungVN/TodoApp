import { Box, Grid } from '@mui/material';
import React from 'react';
import ChatList from './chat-list';
import ChatContent from './chat-content';
import { UserRepository } from '@/app/_repositories/User';
import { ConversationRepository } from '@/app/_repositories/Conversation';
export default async function ChatMain() {
  const user = await UserRepository.findMany();
  const conversations = await ConversationRepository.findMany();
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <ChatList conversations={conversations} user={user} />
          </Grid>
          <Grid item xs={12} md={9}>
            <ChatContent />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
