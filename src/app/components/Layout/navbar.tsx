import { ICONS } from '@app/base/constants/icons';
import { navItems, routeTitles, sideBarItems } from '@app/base/constants/navigationItems';
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
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Adjust matching logic to handle dynamic routes
  const currentNavItem = routeTitles.find((item) => {
    // Handle exact match first
    if (pathname === item.path) return true;

    const dynamicPathPattern = item.path.replace(/:\w+/g, '[^/]+'); // Replace `:id` with a regex pattern
    const regex = new RegExp(`^${dynamicPathPattern}$`);
    return regex.test(pathname);
  });

  const currentTitle = currentNavItem ? currentNavItem.title : 'Home';

  console.log('pathhname: ', pathname);
  console.log(`CurrentNavItem: ${currentNavItem?.path}`);

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
              {navItems.map(({ key, label, path }) => (
                <DropdownItem
                  key={key}
                  color={key === 'logout' ? 'danger' : 'default'}
                  className={classNames({ 'text-danger': key === 'logout' })}
                  onClick={() => router.push(path)}
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
