import styles from './Chip.module.css';
import applyStyles from '../../utils/apply-styles';

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export default function Chip({ children, className = '' }: ChipProps) {
  return (
    <span
      className={applyStyles({ [styles.chip]: true, [className]: !!className })}
    >
      {children}
    </span>
  );
}

Chip.defaultProps = {
  className: '',
};
