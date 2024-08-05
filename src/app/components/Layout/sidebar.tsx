'use client';

import { sideBarItems } from '@app/utils/constants/navigationItems';
import { colors } from '@nextui-org/react';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <aside className="min-w-64 py-4 h-full hidden sm:block border-r border-r-default-200">
      <div className="flex items-center justify-center p-2">
        <h1 className="text-[1.4rem] font-semibold text-black dark:text-white">
          Reach<strong className="text-primary-600 dark:text-primary-200">Out</strong>
        </h1>
      </div>
      <nav className="flex flex-col gap-4">
        {sideBarItems.map(({ title, path, icon: Icon }) => {
          const isActive = pathname === path;
          const activeClasses =
            'border-l-5 border-l-primary-600 dark:border-l-primary-200 text-primary-600 dark:text-primary-200';
          const hoverClasses = 'hover:opacity-70 transition-opacity duration-100';

          return (
            <Link
              key={path}
              className={classNames(
                'rounded-l-sm border-solid p-3',
                isActive ? activeClasses : 'border-l-transparent',
                hoverClasses,
              )}
              aria-current={isActive ? 'page' : undefined}
              href={path}
            >
              <div className="flex flex-row items-center gap-1 mx-2">
                <Icon size={20} className={isActive ? 'text-primary-600 dark:text-primary-200' : ''} />
                <p
                  className={classNames(
                    isActive ? 'text-primary-600 dark:text-primary-200' : '',
                    theme === 'dark' ? colors.black : colors.white,
                  )}
                >
                  {title}
                </p>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
