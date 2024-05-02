'use client';
import {
  Badge,
  Box,
  IconButton,
  Grid,
  Link,
  Paper,
  Typography,
  CircularProgress,
  Fade,
} from '@mui/material';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Post } from '@/app/_repositories/Post';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useRouter } from 'next/navigation';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
type Props = {
  post: Post[];
};

export default function PostList(props: Props) {
  const router = useRouter();
  const posts = props.post;
  const [alert, setAlert] = useState(false);
  const hanldDeletePost = async (id: string) => {
    try {
      const response = await fetch(`/api/post-delete/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      setAlert(true);
      router.refresh();
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  // Tạo hiệu ứng khi xóa bài viết
  const [query, setQuery] = React.useState('idle');
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');
    timerRef.current = setTimeout(() => {
      setQuery('success');
    }, 2000);
  };
  return (
    <Box>
      <Grid container style={{ padding: '10px' }}>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h6' style={{ margin: '10px 0px' }}>
            Danh sách bài viết
          </Typography>
          <Link href={'/post-main/post-create'}>
            <IconButton>
              <TextIncreaseIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell style={{ height: '100px', width: '100px' }} align='left'>
                    Tiêu đề
                  </TableCell>
                  <TableCell style={{ height: '100px', width: '300px' }} align='left'>
                    Description
                  </TableCell>
                  <TableCell style={{ height: '100px', width: '500px' }} align='left'>
                    Content
                  </TableCell>
                  <TableCell style={{ height: '100px' }} align='right'>
                    Ngày đăng
                  </TableCell>
                  <TableCell style={{ height: '100px' }} align='right'>
                    Like
                  </TableCell>
                  <TableCell style={{ width: '20px' }} align='right'>
                    Edit
                  </TableCell>
                  <TableCell style={{ width: '20px' }} align='right'>
                    Xóa
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((postList) => (
                  <TableRow
                    key={postList.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell style={{ height: '100px' }} component='th' scope='row' align='left'>
                      {postList.title}
                    </TableCell>
                    <TableCell style={{ height: '100px' }} align='left'>
                      {postList.description}
                    </TableCell>
                    <TableCell style={{ height: '100px', width: '500px' }} align='left'>
                      {postList.content}
                    </TableCell>
                    <TableCell style={{ height: '100px' }} align='right'>
                      {postList.publishedAt.toDateString()}
                    </TableCell>
                    <TableCell style={{ height: '100px' }} align='right'>
                      {postList.likes}
                    </TableCell>

                    <TableCell style={{ width: '20px' }} align='right'>
                      <Link href={`/post-main/post-edit/${postList.id}`}>
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                      </Link>
                    </TableCell>
                    <TableCell style={{ width: '20px' }} align='right'>
                      <IconButton onClick={() => hanldDeletePost(postList.id)}>
                        <ClearIcon onClick={handleClickQuery} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} style={{ alignContent: 'center', alignItems: 'center' }}>
          {query === 'success' ? (
            <Alert
              icon={<CheckIcon fontSize='inherit' />}
              severity='success'
              style={{ display: alert ? 'block' : 'none', width: '100%', margin: '10px 0px' }}
            >
              Đã xóa bài viết thành công!
            </Alert>
          ) : (
            <Fade
              in={query === 'progress'}
              style={{
                transitionDelay: query === 'progress' ? '800ms' : '0ms',
                alignItems: 'center',
              }}
              unmountOnExit
            >
              <CircularProgress />
            </Fade>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
