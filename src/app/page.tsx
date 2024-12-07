import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>{`Hi! I'm Travis Allen`}</h1>
        <p className={styles.description}>
          {`I'm a backend and full stack software engineer`}
        </p>
      </main>
      <footer className={styles.footer}>Built with ❤️ by Travis Allen</footer>
    </div>
  );
}
