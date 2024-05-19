import '@/assets/styles/globals.scss';

import type { Metadata } from 'next';
import React from 'react';

import { UpperNav } from '@/widgets/UpperNav';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* <UpperNav /> */}
        </header>
        {children}
      </body>
    </html>
  );
}
