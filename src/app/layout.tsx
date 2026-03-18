import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: 'Chooze — Choose Your Perfect AI Companion',
    template: '%s — Chooze',
  },
  description:
    'Chooze is your gateway to meaningful conversations with AI-powered companions. Chat, call, and connect.',
  metadataBase: new URL('https://chooze.online'),
  openGraph: {
    title: 'Chooze — AI Companions',
    description: 'Choose your perfect AI companion. Chat, call, and connect.',
    url: 'https://chooze.online',
    siteName: 'Chooze',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
