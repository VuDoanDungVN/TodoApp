import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UserWithPersonalAndAddress } from '@/app/_repositories/User';
import { Conversation } from '@/app/_repositories/Conversation';

type Props = {
  user: UserWithPersonalAndAddress[];
  conversations: Conversation[];
};

export default function ChatList(props: Props) {
  const users = props.user;
  const conversation = props.conversations;
  return (
    <Box>
      <Grid container spacing={2}>
        {users?.map((user) => (
          <Grid item xs={12} md={12} key={user.id}>
            <Card sx={{ minWidth: 275, margin: '5px 0px' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                  {user.name}
                </Typography>
                <Typography sx={{ fontSize: 13, color: '#bdbdbd' }} component='div'>
                  {user.email}
                </Typography>
                <Typography sx={{ fontSize: 13, color: '#bdbdbd' }} component='div'>
                  {user.conversations?.map((conversation) => (
                    <div key={conversation.id}>
                      {conversation.messages?.map((message) => (
                        <div key={message.id}>{message.content}</div>
                      ))}
                    </div>
                  ))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
