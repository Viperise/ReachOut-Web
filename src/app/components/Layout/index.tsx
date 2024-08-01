'use client';
import { usePathname } from 'next/navigation';
import Footer from './footer';
import Sidebar from './sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname === '/login') return <>{children}</>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar title="ReachOut" /> */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="ml-4 pt-4 flex-1 flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
