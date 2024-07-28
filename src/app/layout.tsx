import Modal from '@/components/Modal';
import Navbar from '@/components/nav/Navbar';
import { cn } from '@/lib/utils';
import { SessionProvider } from 'next-auth/react';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Elden Ring Tracker',
  description: 'A tracker for Elden Ring bosses and locations',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body
        style={{
          backgroundImage: `url(https://images3.alphacoders.com/131/thumb-1920-1311863.jpeg)`,
          backgroundSize: 'fill',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
      >
        <SessionProvider>
          <Modal />
          <Navbar />
          <div className="flex justify-center">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
