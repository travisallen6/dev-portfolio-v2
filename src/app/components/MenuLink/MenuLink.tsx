import Link from 'next/link';
import styles from './MenuLink.module.css';
import { INavigationItem } from '../../common/types/config';

interface MenuLinkProps extends INavigationItem {
  closeMenu: () => void;
}

export default function MenuLink({
  href,
  icon: Icon,
  text,
  closeMenu,
}: MenuLinkProps) {
  return (
    <li className={styles.menulink}>
      <Link
        className={styles.menulink__link}
        href={href}
        onClick={() => closeMenu()}
      >
        <Icon />
        <span>{text}</span>
      </Link>
    </li>
  );
}
