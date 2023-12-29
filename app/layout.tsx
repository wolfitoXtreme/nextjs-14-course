import type { Metadata } from 'next';

// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import { composeMetadata } from '@/utils';

import Header from '@/components/Header/Header';

import '@/styles/globals.scss';

export const metadata = (): Metadata => composeMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
