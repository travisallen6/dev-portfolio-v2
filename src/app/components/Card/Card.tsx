import applyStyles from '../../utils/apply-styles';
import styles from './Card.module.css';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className = '' }: CardProps) {
  const combinedClassName = applyStyles({
    [styles.card]: true,
    [className || '']: !!className,
  });
  return (
    <div className={combinedClassName}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Card.defaultProps = {
  title: '',
  className: '',
};
