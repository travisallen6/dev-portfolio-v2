import Image from 'next/image';
import styles from './Portrait.module.css';

export default function Portrait() {
  return (
    <div className={styles.portrait__frame}>
      <Image
        src="/travis-allen-digital-portrait.png"
        alt="Portrait of Travis Allen"
        width={350}
        height={350}
      />
    </div>
  );
}
