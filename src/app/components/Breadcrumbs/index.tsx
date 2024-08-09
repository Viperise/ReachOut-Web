import { BreadcrumbItem, Breadcrumbs as NextBreadcrumbs } from '@nextui-org/react';

interface BreadcrumbsProps {
  navItem: { name: string; href: string }[];
}

function Breadcrumbs({ navItem }: BreadcrumbsProps) {
  return (
    <NextBreadcrumbs>
      {navItem.map((item, index) => {
        return (
          <BreadcrumbItem key={index} href={item.href}>
            {item.name}
          </BreadcrumbItem>
        );
      })}
    </NextBreadcrumbs>
  );
}

export default Breadcrumbs;
