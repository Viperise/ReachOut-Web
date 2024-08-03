'use client';

import { navItems } from '@app/utils/constants/navItems';
import { colors } from '@nextui-org/react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MenuItem, Sidebar as ProSidebar, sidebarClasses } from 'react-pro-sidebar';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <ProSidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: colors.white,
        },
      }}
      className="h-full flex-col bg-white hidden sm:block"
    >
      <div className="flex items-center justify-start p-4">
        <p className="text-lg">
          Reach<strong className="text-red-800">Out</strong>
        </p>
      </div>
      <Menu>
        {navItems.map(({ title, path, icon: Icon }, index) => (
          <MenuItem
            key={index}
            icon={<Icon />}
            className={classNames(
              'rounded-l-[0.1rem] border-solid',
              pathname === path
                ? 'border-l-[0.3rem] border-l-red-800 text-red-800'
                : 'border-l-transparent text-[#595959]',
            )}
            component={<Link href={path} />}
            aria-current={pathname === path ? 'page' : undefined}
          >
            {title}
          </MenuItem>
        ))}
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
