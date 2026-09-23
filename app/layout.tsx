import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SynHosting | Premium hosting for Minecraft, Discord & Telegram',
  description: 'Powerful hosting infrastructure for gaming communities and bot businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
