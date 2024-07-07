import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Layout } from './components';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'ReachOut Web - Gerenciamento de Anúncios',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-sans">
      <body className={poppins.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
