import { ICONS } from '@app/utils/constants/icons';
import { navItems, sideBarItems } from '@app/utils/constants/navigationItems';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const currentNavItem = sideBarItems.find((item) => item.path === pathname);
  const currentTitle = currentNavItem ? currentNavItem.title : 'Home';

  return (
    <NextNavbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="block sm:hidden"
          icon={<ICONS.menu size={'md'} />}
        />

        <NavbarBrand>
          <p className="text-[1.5rem] font-semibold text-primary-500">{currentTitle}</p>
        </NavbarBrand>

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
              className={classNames('w-full mt-8 text-black text-lg', pathname === path && 'text-primary-500')}
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
