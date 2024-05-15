'use client';
import { Mailer } from '@/app/_repositories/mailer';
import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
type Props = {
  email: Mailer[];
};
export default function MailerMain(props: Props) {
  const email = props.email;
  const [from, setFrom] = React.useState({
    from: '',
    to: '',
    subject: '',
    content: '',
  });

  const handleChange = (e: any) => {
    setFrom({
      ...from,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('from', from.from);
    formData.append('to', from.to);
    formData.append('subject', from.subject);
    formData.append('content', from.content);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(from),
      });
      if (response.ok) {
        console.log('Đã gửi mail thành công!');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  return (
    <Container maxWidth='sm'>
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Form gửi mail
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label='Mail Gửi'
            type='email'
            name='from'
            value={from.from}
            onChange={handleChange}
            fullWidth
            margin='normal'
            required
          />
          <TextField
            label='Mail Nhận'
            type='email'
            name='to'
            value={from.to}
            onChange={handleChange}
            fullWidth
            margin='normal'
          />
          <TextField
            label='Nhập Tiêu Đề'
            type='text'
            name='subject'
            value={from.subject}
            onChange={handleChange}
            fullWidth
            margin='normal'
            required
          />
          <TextField
            label='Nhập link web cần gửi mail:'
            type='text'
            name='content'
            value={from.content}
            onChange={handleChange}
            fullWidth
            margin='normal'
            multiline
            rows={4}
            required
          />
          <Button type='submit' variant='contained' color='primary' sx={{ mt: 2 }}>
            Gửi mail
          </Button>
        </form>
      </Box>
    </Container>
  );
}
