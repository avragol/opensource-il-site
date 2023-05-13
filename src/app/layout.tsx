import Head from 'next/head';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className='w-screen overflow-x-hidden bg-gradient-to-b from-gradientfrom to-gradientto font-["Rubik"] text-white'>
        {children}
      </body>
      <Analytics />
    </html>
  );
}
