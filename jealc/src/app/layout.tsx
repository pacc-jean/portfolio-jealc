import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'jealc | portfolio',
  description: 'Hello, Check Out My Full Stack Developer Portfolio.',
  openGraph: {
    title: 'jealc | portfolio',
    description: 'Check out my full stack dev portfolio — clean code, sleek UI, and solid vibes.',
    url: 'https://jealc.vercel.app',
    siteName: 'jealc | portfolio',
    images: [
      {
        url: 'https://jealc.vercel.app/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'jealc portfolio preview image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'jealc | portfolio',
    description: 'Full Stack Developer. Portfolio loaded. Come see what’s cooking.',
    images: ['https://jealc.vercel.app/avatar.jpg'],
    creator: '@plaidpeanuts',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Full Favicon Pack */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Optional fallback */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {children}
        <Analytics mode="production" />
      </body>
    </html>
  );
}
