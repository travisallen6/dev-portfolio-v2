import type { Metadata } from 'next';
import './globals.css';

import { Kanit, Inter } from 'next/font/google';

const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['latin-ext'],
  weight: ['100'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin-ext'],
  weight: ['100', '900'],
});

export const metadata: Metadata = {
  title: 'Travis Allen - Backend and Full Stack Software Engineer',
  description: 'The software engineering portfolio of Travis Allen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
