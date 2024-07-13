'use client';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar title="ReachOut" />
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
