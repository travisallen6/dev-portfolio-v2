import {
  externalNavigationItems,
  internalNavigationItems,
} from '../../common/config';
import Menu from '../Menu/Menu';
import NavLink from '../NavLink/NavLink';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar__container}>
      <div className={styles.navbar__left}>
        <Menu />
      </div>
      <div className={styles.navbar__right}>
        <ul className={styles.navbar__items}>
          {internalNavigationItems.map(({ href, text }) => (
            <li key={href}>
              <NavLink href={href}>{text}</NavLink>
            </li>
          ))}
        </ul>
        <ul className={styles.navbar__icons}>
          {externalNavigationItems.map(({ href, icon: Icon }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
