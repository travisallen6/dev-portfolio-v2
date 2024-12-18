import Link from 'next/link';
import styles from './ButtonLink.module.css';
import applyStyles from '../../utils/apply-styles';

interface ButtonLinkProps {
  href: string;
  text: string;
  type?: 'outline' | 'filled';
  color?: 'primary' | 'secondary';
}

export default function ButtonLink({
  href,
  text,
  type = 'filled',
  color = 'primary',
}: ButtonLinkProps) {
  const className = applyStyles({
    [styles.buttonlink]: true,
    [styles.buttonlink__outline]: type === 'outline',
    [styles.buttonlink__filled]: type === 'filled',
    [styles.buttonlink__primary]: color === 'primary',
    [styles.buttonlink__secondary]: color === 'secondary',
  });

  return (
    <Link className={className} href={href}>
      {text}
    </Link>
  );
}

ButtonLink.defaultProps = {
  type: 'filled',
  color: 'primary',
};
