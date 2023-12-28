import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals';
import { TMealItem } from '@/types';

import styles from './page.module.scss';

const MealDetails = ({ params, params: { mealSlug } }: PageProps) => {
  // eslint-disable-next-line no-console
  console.log({ params });

  const meal = getMeal(mealSlug) as TMealItem;

  if (!meal) {
    notFound();
  }

  const { title, image, summary, instructions, creator, creator_email } = meal;
  const instructionsFormatted = instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} priority fill alt={title} />
        </div>
        <div className={styles['header-text']}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        {/* <pre>
          {mealSlug} - {JSON.stringify(params, null, 2)}
        </pre> */}
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: instructionsFormatted }}></p>
      </main>
    </>
  );
};

export default MealDetails;
