'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classNames from 'classnames';

import { IHeaderNavigationLink } from '@/types';

import styles from './NavigationLink.module.scss';

const HeaderNavigationLink: React.FC<IHeaderNavigationLink> = ({
  href,
  children,
}) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={classNames(styles.link, {
        [styles.active]: path.startsWith(href),
      })}>
      {children}
    </Link>
  );
};

export default HeaderNavigationLink;
