import applyStyles from '../../utils/apply-styles';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function Section({
  children,
  title = '',
  className = '',
  id,
}: SectionProps) {
  const combinedClassName = applyStyles({
    [styles.section__container]: true,
    [className || '']: !!className,
  });

  return (
    <section className={combinedClassName} id={id}>
      {title && <h1 className={styles.section__title}>{title}</h1>}
      {children}
    </section>
  );
}

Section.defaultProps = {
  title: '',
  className: '',
};
