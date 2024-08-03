'use client';
import { usePathname } from 'next/navigation';
import Footer from './footer';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname === '/login') return <>{children}</>;

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 p-2">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
