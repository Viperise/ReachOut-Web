'use client';
import { useState } from 'react';

import Link from 'next/link';
import { FaBuysellads, FaHome } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';
import { HiOfficeBuilding } from 'react-icons/hi';
import { MdMenu } from 'react-icons/md';
import { SiOpenaccess } from 'react-icons/si';

import { usePathname } from 'next/navigation';
import HamburgerButton from './HamburgerButton';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const Menus = [
    { title: 'Dashboard', path: '/dashboard', src: <FaHome /> },
    { title: 'Estabelecimentos', path: '/establishment', src: <HiOfficeBuilding /> },
    { title: 'Clientes Parceiros', path: '/key-clients', src: <FaUsers /> },
    {
      title: 'Anúncios',
      path: 'postings',
      src: <FaBuysellads />,
    },
    { title: 'Sair', path: '/login', src: <SiOpenaccess />, gap: 'true' },
  ];

  return (
    <>
      <div className={`${open ? 'w-64' : 'w-fit'} hidden sm:block relative h-screen duration-300 bg-white p-5 shadow`}>
        <MdMenu
          className={`${!open && 'rotate-180 left-8'} absolute text-2xl bg-white rounded-full cursor-pointer right-4 `}
          onClick={() => setOpen(!open)}
        />
        <Link href="/">
          <div className={`flex ${open && 'gap-x-4'} items-center`}>
            {open && <span className="text-xl font-medium whitespace-nowrap">ReachOut</span>}
          </div>
        </Link>

        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <Link href={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:border-l-4 hover:border-l-blue-300
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${pathname === menu.path && 'bg-blue-200 text-blue-400'}`}
              >
                <span className="text-2xl">{menu.src}</span>
                <span className={`${!open && 'hidden'} origin-left duration-300 hover:block`}>{menu.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link href={menu.path} key={index} onClick={() => setMobileMenu(false)}>
              <span
                className={` ${
                  pathname === menu.path && 'bg-gray-200 dark:bg-gray-700'
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
