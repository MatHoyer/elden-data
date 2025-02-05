import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Elden Ring Tracker',
  description: 'A tracker for Elden Ring bosses and locations',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <link rel="icon" href="/eldenRing.png" />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
