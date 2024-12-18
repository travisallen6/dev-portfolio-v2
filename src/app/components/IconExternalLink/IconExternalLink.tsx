import applyStyles from '../../utils/apply-styles';
import styles from './IconExternalLink.module.css';

interface IconExternalLinkProps {
  href: string;
  className?: string;
  Icon: () => React.ReactNode;
}

export default function IconExternalLink({
  href,
  Icon,
  className = '',
}: IconExternalLinkProps) {
  const combinedClassName = applyStyles({
    [styles.iconexternallink]: true,
    [className]: !!className,
  });

  return (
    <a
      className={combinedClassName}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
    </a>
  );
}

IconExternalLink.defaultProps = {
  className: '',
};
