import Image from 'next/image';
import Link from 'next/link';

import NavigationLink from './NavigationLink';

import logoImg from '@/assets/logo.png';
import HeaderBkg from '@/assets/vector/header-bkg.svg';

import styles from './Header.module.scss';

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles['header-bkg']}>
      <HeaderBkg />
    </div>
    <Link href="/" className={styles.logo}>
      <Image src={logoImg} priority alt="A plate with food on it" />
      NextLevel Food
    </Link>
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavigationLink href="/meals">Browse Meals</NavigationLink>
        </li>
        <li>
          <NavigationLink href="/community">Foodies Community</NavigationLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
