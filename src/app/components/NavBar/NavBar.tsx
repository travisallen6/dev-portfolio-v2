'use client';

import { usePathname } from 'next/navigation';
import {
  externalNavigationItems,
  getInternalNavigationItems,
} from '../../common/config';
import Menu from '../Menu/Menu';
import NavLink from '../NavLink/NavLink';
import IconExternalLink from '../IconExternalLink/IconExternalLink';
import styles from './NavBar.module.css';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar__container}>
      <div className={styles.navbar__left}>
        <Menu />
      </div>
      <div className={styles.navbar__right}>
        <ul className={styles.navbar__items}>
          {getInternalNavigationItems(pathname).map(({ href, text }) => (
            <li key={href}>
              <NavLink href={href}>{text}</NavLink>
            </li>
          ))}
        </ul>
        <ul className={styles.navbar__icons}>
          {externalNavigationItems.map(({ href, icon: Icon }) => (
            <li key={href}>
              <IconExternalLink href={href} Icon={Icon} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
