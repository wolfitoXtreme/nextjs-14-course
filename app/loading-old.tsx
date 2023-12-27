// deprecated by renaming (loading.tsx -> loading-old.tsx) for this project in favour
// of using suspense
import styles from './loading.module.scss';

export default function Loading() {
  return <p className={styles.loading}>Fetching data, please wait...</p>;
}
