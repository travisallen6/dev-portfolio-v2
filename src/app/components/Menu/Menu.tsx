'use client';

import { useState } from 'react';
import styles from './Menu.module.css';
import MenuOpenIcon from '../icons/MenuOpenIcon';
import MenuCloseIcon from '../icons/MenuCloseIcon';
import { internalNavigationItems } from '../../common/config';
import MenuLink from '../MenuLink/MenuLink';

export default function Menu() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  const menuNavClassName = isSideNavOpen
    ? `${styles.menu__nav} ${styles.menu__nav_open}`
    : styles.menu__nav;

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
          {internalNavigationItems.map(({ href, text, icon }) => (
            <MenuLink
              key={href}
              href={href}
              text={text}
              icon={icon}
              closeMenu={() => setIsSideNavOpen(false)}
            />
          ))}
        </ul>
      </nav>
    </>
  );
}
