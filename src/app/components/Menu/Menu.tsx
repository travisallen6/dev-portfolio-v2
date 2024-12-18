'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Menu.module.css';
import MenuOpenIcon from '../icons/MenuOpenIcon';
import MenuCloseIcon from '../icons/MenuCloseIcon';
import { getInternalNavigationItems } from '../../common/config';
import MenuLink from '../MenuLink/MenuLink';

export default function Menu() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const menuNavClassName = isSideNavOpen
    ? `${styles.menu__nav} ${styles.menu__nav_open}`
    : styles.menu__nav;

  const currentPathname = usePathname();

  return (
    <>
      <button
        className={styles.menu__btn_open}
        type="button"
        onClick={() => setIsSideNavOpen(true)}
      >
        <MenuOpenIcon />
      </button>
      {isSideNavOpen && <div className={styles.menu__overlay} />}
      <nav className={menuNavClassName}>
        <button
          className={styles.menu__btn_close}
          type="button"
          onClick={() => setIsSideNavOpen(false)}
        >
          <MenuCloseIcon />
        </button>
        <ul>
          {getInternalNavigationItems(currentPathname).map(
            ({ href, text, icon }) => (
              <MenuLink
                key={href}
                href={href}
                text={text}
                icon={icon}
                closeMenu={() => setIsSideNavOpen(false)}
              />
            )
          )}
        </ul>
      </nav>
    </>
  );
}
