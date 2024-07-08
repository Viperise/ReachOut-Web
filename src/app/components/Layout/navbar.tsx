'use client';

const Navbar = ({ title }: { title: string }) => {
  return (
    <nav className="bg-white border-gray-200 rounded shadow">
      <div className="container flex justify-between items-center mx-auto pt-3">
        <div className="flex items-center mx-auto">
          <span className="text-xl font-medium whitespace-nowrap dark:text-white">{title}</span>
        </div>
        <div className="flex">
          <span>teste</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
