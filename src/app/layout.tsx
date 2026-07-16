import type { Metadata } from 'next';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-bricolage',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Chooze — Someone to talk to. Always.',
    template: '%s — Chooze',
  },
  description:
    'Friends who remember your team, your big day, your chai order. Chat free, forever. Hear their voice from ₹6 per minute with a live meter you can always see.',
  metadataBase: new URL('https://chooze.online'),
  icons: {
    icon: [
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Chooze — Someone to talk to. Always.',
    description:
      'Friends who remember you. Chat free forever, voice calls from ₹6/min with a live meter. No ads, no hidden charges.',
    url: 'https://chooze.online',
    siteName: 'Chooze',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Chooze — Chat. Share. Date.' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrumentSans.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
