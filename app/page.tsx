import Link from 'next/link';

import Header from '@/components/Header';

export default function Home() {
  // will log only in the terminal as is executed in the server an d not in the client.
  // eslint-disable-next-line no-console
  console.log('Executing...');

  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
