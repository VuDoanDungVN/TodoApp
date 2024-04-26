'use client';
import '@/app/globals.css';
import Layout from './_components/Layout';
import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentPage = usePathname();
  return (
    <html lang='en'>
      <body>
        {/* It is checking not to show layout on login screen.*/}
        {['/auth/signin'].includes(currentPage) && children}
        {!['/auth/signin'].includes(currentPage) && (
          <SessionProvider>
            <Layout>{children}</Layout>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
