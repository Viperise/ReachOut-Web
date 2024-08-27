import { useAuth } from '@/app/contexts/AuthContext';
import { ICONS } from '@/base/constants/icons';
import { navItems, routeTitles, sideBarItems } from '@/base/constants/navigationItems';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextNavbar,
  Switch,
} from '@nextui-org/react';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth();
  const pathname = usePathname();

  const onLogout = async () => {
    await logout();
  };

  const currentNavItem = routeTitles.find((item) => {
    if (typeof item.path === 'string' && pathname === item.path) return true;

    if (typeof item.path === 'function') {
      const dynamicPathPattern = item.path(123).replace(/\/\d+$/, '');

      const regex = new RegExp(`^${dynamicPathPattern}/\\d+$`);
      return regex.test(pathname);
    }

    return false;
  });
  const currentTitle = currentNavItem ? currentNavItem.title : 'Home';

  const { theme, setTheme } = useTheme();

  return (
    <NextNavbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="block sm:hidden"
          icon={<ICONS.menu size={'md'} />}
        />

        <NavbarBrand>
          <p className="text-[1.5rem] font-semibold text-primary-500 dark:text-primary-200">{currentTitle}</p>
        </NavbarBrand>

        <NavbarItem>
          <Switch
            checked={theme === 'purple-theme'}
            onChange={() => setTheme(theme === 'purple-theme' ? 'dark-purple-theme' : 'purple-theme')}
            color="primary"
            size="md"
            aria-label="Toggle dark mode"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? <ICONS.moon className={className} /> : <ICONS.sun className={className} />
            }
          />
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Avatar src="https://picsum.photos/200" className="cursor-pointer" size="md" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions">
              {navItems.map(({ key, label }) => (
                <DropdownItem
                  key={key}
                  color={key === 'logout' ? 'danger' : 'default'}
                  className={classNames({ 'text-danger': key === 'logout' })}
                  onClick={() => onLogout()}
                >
                  {label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {sideBarItems.map(({ title, path }, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className={classNames('w-full mt-8 text-black text-lg', pathname === path && 'text-primary-600')}
              href={path}
              size="lg"
              aria-current={pathname === path ? 'page' : undefined}
            >
              {title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  );
};

export default Navbar;
