import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'jealc | portfolio',
  description: 'Hello, Check Out My Full Stack Developer Portfolio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* Favicon stuff */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Open Graph Meta (for social previews) */}
        <meta property="og:title" content="jealc | Portfolio" />
        <meta property="og:description" content="Check out my full stack web dev portfolio — clean code, sleek UI, and solid vibes." />
        <meta property="og:image" content="https://jealc.vercel.app/avatar.jpg" /> 
        <meta property="og:url" content="https://jealc.vercel.app" /> 
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="jealc | Portfolio" />
        <meta name="twitter:description" content="Full Stack Developer. Portfolio loaded. Come see what's cooking." />
        <meta name="twitter:image" content="https://yourdomain.com/avatar.jpg" />
      </Head>
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {children}
        <Analytics mode="production" />
      </body>
    </html>
  );
}
