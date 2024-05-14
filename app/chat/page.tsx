import { Box, Grid } from '@mui/material';
import React from 'react';
import ChatList from '@/app/chat/_components/chat-list';
import { UserRepository } from '@/app/_repositories/User';
import { ConversationRepository } from '@/app/_repositories/Conversation';
import { MessageRepository } from '@/app/_repositories/Message';

export default async function ChatMain() {
  const user = await UserRepository.findMany();
  const conversations = await ConversationRepository.findMany();
  const messages = await MessageRepository.findMany();
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ChatList messages={messages} conversations={conversations} user={user} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
