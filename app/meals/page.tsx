import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

import { getMeals } from '@/lib/meals';
import { TMealItem } from '@/types';
import { composeMetadata } from '@/utils';

import MealsGrid from '@/components/Meals/MealsGrid';

import styles from './page.module.scss';

export const metadata = (): Metadata =>
  composeMetadata({ title: 'Browse delicious meals' });

const Meals = async () => {
  const meals = (await getMeals()) as TMealItem[];

  // eslint-disable-next-line no-console
  console.log('getting meals');

  return <MealsGrid meals={meals} />;
};
// is possible to turn components in to async functions because they are SSR components (NextJs)
// const MealsPage = async () => {
// const meals = (await getMeals()) as TMealItem[];
const MealsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meal created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favorite recipe.</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={
            <p className={styles.loading}>Fetching data, please wait...</p>
          }>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
