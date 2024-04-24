'use client';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer>
      <Typography variant='body2' color='text.secondary' align='center'>
        <Image src='/logo.png' alt='Logo' width={100} height={40} />{' '}
      </Typography>
      <Typography variant='body2' color='text.secondary' align='center'>
        <Link color='inherit' href='https://codingdung.com'>
          © {new Date().getFullYear()} Github, Inc. Dung
        </Link>{' '}
        {'.'}
      </Typography>
    </footer>
  );
};
export default Footer;
