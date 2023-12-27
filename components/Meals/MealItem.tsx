import Image from 'next/image';
import Link from 'next/link';

import { TMealItem } from '@/types';

import styles from './MealItem.module.scss';

const MealItem = ({ title, slug, image, summary, creator }: TMealItem) => (
  <article className={styles.meal}>
    <header>
      <div className={styles.image}>
        {/*
          Whenever images are loaded dynamically "width" and "height" must be provided to the NextJs
          Image component, however using the fill prop can overcome this problem whenever the
          dimensions are not known.
        */}
        <Image src={image} alt={title} fill />
      </div>
      <div className={styles['header-text']}>
        <h2>{title}</h2>
        <p>by {creator}</p>
      </div>
    </header>
    <div className={styles.content}>
      <p className={styles.summary}>{summary}</p>
      <div className={styles.actions}>
        <Link href={`/meals/${slug}`}>View Details</Link>
      </div>
    </div>
  </article>
);

export default MealItem;
