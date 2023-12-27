import Link from 'next/link';

import ImageSlider from '@/components/ImageSlider/ImageSlider';

import styles from './page.module.scss';

export default function Home() {
  // will log only in the terminal as is executed in the server an d not in the client.
  // eslint-disable-next-line no-console
  console.log('Executing...');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlider />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & shre food from all over the world.</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
