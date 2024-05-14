'use client';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  FormControl,
  OutlinedInput,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { UserWithPersonalAndAddress } from '@/app/_repositories/User';
import { Conversation } from '@/app/_repositories/Conversation';
import { Message } from '@/app/_repositories/Message';
import { useRouter } from 'next/navigation';
type Props = {
  user: UserWithPersonalAndAddress[];
  conversations: Conversation[];
  messages: Message[];
};

export default function ChatList(props: Props) {
  const router = useRouter();
  const { user: users, conversations, messages } = props;
  const [selectedUser, setSelectedUser] = useState<UserWithPersonalAndAddress | null>(
    users?.[0] || null,
  );
  const [newMessage, setNewMessage] = useState<string>('');
  const [messageList, setMessageList] = useState<Message[]>(messages);

  const handleUserClick = (user: UserWithPersonalAndAddress) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    if (users.length > 0) {
      setSelectedUser(users[0]);
    }
  }, [users]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() === '' || !selectedUser) return;

    const conversation = conversations.find((con) => con.userId === selectedUser.id);
    if (!conversation) return;

    const newMessageObj = {
      userId: selectedUser.id,
      conversationId: conversation.id,
      content: newMessage,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Save the message to the database using Fetch API
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessageObj),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid item xs={3} style={{ margin: '5px' }}>
            <Grid container spacing={2}>
              {users?.map((user) => (
                <Grid item xs={12} key={user.id}>
                  <Card
                    sx={{ minWidth: 275, margin: '5px 0px', cursor: 'pointer' }}
                    onClick={() => handleUserClick(user)}
                  >
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                        {user.name}
                      </Typography>
                      <Typography sx={{ fontSize: 13, color: '#bdbdbd' }} component='div'>
                        {user.email}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={9} style={{ margin: '5px', height: '70vh' }}>
            {selectedUser && (
              <Card sx={{ margin: '5px 0px', height: '100%' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                    {selectedUser.name}
                  </Typography>
                  <Typography sx={{ fontSize: 13, color: '#bdbdbd' }} component='div'>
                    {selectedUser.email}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  {conversations
                    ?.filter((con) => con.userId === selectedUser.id)
                    .map((con) => (
                      <div key={con.id}>
                        {messageList
                          ?.filter((message) => message.conversationId === con.id)
                          .map((message) => (
                            <Typography
                              key={message.id}
                              sx={{ fontSize: 13, color: '#bdbdbd' }}
                              component='div'
                            >
                              {message.content}
                            </Typography>
                          ))}
                      </div>
                    ))}
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <FormControl sx={{ width: '100%' }} variant='outlined'>
            <OutlinedInput
              placeholder='Nhập tin nhắn của bạn...'
              value={newMessage}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button
            variant='contained'
            color='primary'
            style={{ margin: '10px 0px', float: 'right' }}
            onClick={handleSendMessage}
          >
            Gửi
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
