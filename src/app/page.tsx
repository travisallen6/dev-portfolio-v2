import Landing from './components/Landing/Landing';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Landing />
      </main>
      <footer className={styles.footer}>Built with ❤️ by Travis Allen</footer>
    </div>
  );
}
