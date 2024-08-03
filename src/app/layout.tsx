import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Layout from './components/Layout';
import './globals.css';
import { Providers } from './providers';

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
      <link rel="icon" href="/assets/static/favicon.ico" sizes="any" />

      <body className={`${inter.className}`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
