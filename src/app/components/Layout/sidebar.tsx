'use client';

import { sideBarItems } from '@app/utils/constants/navigationItems';
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
      className="h-full flex-col hidden sm:block"
    >
      <div className="flex items-center justify-center p-4">
        <p className="text-[1.2rem] font-semibold">
          Reach<strong className="text-primary-500">Out</strong>
        </p>
      </div>
      <Menu>
        {sideBarItems.map(({ title, path, icon: Icon }, index) => (
          <MenuItem
            key={index}
            icon={<Icon />}
            className={classNames(
              'rounded-l-[0.1rem] border-solid',
              pathname === path ? 'border-l-[0.3rem] border-l-primary-500 text-primary-500' : 'border-l-transparent',
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
