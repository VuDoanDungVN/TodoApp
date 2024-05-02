'use client';
import { Badge, Box, IconButton, Grid, Link, Paper, Typography } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Post } from '@/app/_repositories/Post';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
type Props = {
  post: Post[];
};

export default function PostList(props: Props) {
  const posts = props.post;

  return (
    <Box>
      <Grid container style={{ padding: '10px' }}>
        <Typography variant='h6' style={{ margin: '10px 0px' }}>
          Danh sách bài viết
        </Typography>
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
                      <IconButton>
                        <ClearIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
