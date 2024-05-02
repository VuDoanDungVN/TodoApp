'use client';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
const Footer = () => {
  return (
    <footer>
      <Typography
        variant='body2'
        color='text.secondary'
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Link
          color='inherit'
          href='https://codingdung.com'
          style={{ position: 'absolute', bottom: 10, color: '' }}
        >
          © {new Date().getFullYear()} Github, Inc. Dung
        </Link>
      </Typography>
    </footer>
  );
};
export default Footer;
