import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Layout from './components/Layout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'ReachOut Web - Gerenciamento de Anúncios',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-sans">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
