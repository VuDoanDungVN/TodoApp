'use client';
import { SessionProvider } from 'next-auth/react';
import './globals.css';

import Layout from '@/app/_components/Layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body style={{ width: '100%' }}>
        <SessionProvider>
          <Layout>{children}</Layout>
        </SessionProvider>
      </body>
    </html>
  );
}
