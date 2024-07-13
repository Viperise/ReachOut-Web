'use client';

const Navbar = ({ title }: { title: string }) => {
  return (
    <nav className="bg-white border-gray-200 rounded shadow pb-6">
      <div className="container flex justify-between items-center mx-auto ml-8">
        <div className="flex"></div>
        <div className="flex pt-5 flex-row items-center gap-4 mr-4 ml-auto pr-4 pl-4 rounded bg-slate-100 dark:bg-slate-700 dark:text-white "></div>
      </div>
    </nav>
  );
};

export default Navbar;
