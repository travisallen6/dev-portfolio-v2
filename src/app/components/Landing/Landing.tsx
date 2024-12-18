import ButtonLink from '../ButtonLink/ButtonLink';
import Portrait from '../Portrait/Portrait';
import styles from './Landing.module.css';

export default function Landing() {
  return (
    <section
      id="landing"
      className={styles.landing}
      data-testid="landing-section"
    >
      <div className={styles.landing__intro}>
        <h1 className={styles.landing__title}>{`Hi! I'm Travis Allen`}</h1>
        <p className={styles.landing__description}>
          {`I'm an full-stack / backend engineer with a passion for clean code, scalable systems, and seamless user experiences.`}
        </p>
        <ButtonLink
          href="/projects"
          text="Check out my projects!"
          type="outline"
        />
      </div>
      <div className={styles.landing__portrait}>
        <Portrait />
      </div>
    </section>
  );
}
