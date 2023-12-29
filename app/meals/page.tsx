import Link from 'next/link';

import MealsGrid from '@/components/Meals/MealsGrid';

import styles from './page.module.scss';

const MealsPage = () => (
  <>
    <header className={styles.header}>
      <h1>
        Delicious meal created <span className={styles.highlight}>by you</span>
      </h1>
      <p>
        Choose your favorite recipe and cook it yourself. It is easy and fun.
      </p>
      <p className={styles.cta}>
        <Link href="/meals/share">Share your favorite recipe.</Link>
      </p>
    </header>
    <main className={styles.main}>
      <MealsGrid meals={[]} />
    </main>
  </>
);

export default MealsPage;
