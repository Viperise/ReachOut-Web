'use client';

import { navItems } from '@app/utils/constants/navItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MenuItem, Sidebar as ProSidebar } from 'react-pro-sidebar';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <ProSidebar breakPoint="md" className="h-full flex flex-col">
      <div>
        <div className="flex items-center justify-center p-4">
          <span className="text-xl font-medium">ReachOut</span>
        </div>
      </div>
      <div>
        <Menu>
          {navItems.map((menu, index) => (
            <MenuItem
              key={index}
              icon={<menu.icon />}
              className={`rounded-l-[0.1rem] ${
                pathname === menu.path
                  ? 'border-l-[0.3rem] border-l-blue-400 text-blue-400'
                  : 'border-l-transparent text-gray-700 hover:text-white'
              } border-solid ${menu.gap ? 'mt-auto' : ''}`}
              component={<Link href={menu.path} />}
            >
              {menu.title}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </ProSidebar>
  );
};

export default Sidebar;
