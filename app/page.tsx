export default function Home() {
  // will log only in the terminal as is executed in the server an d not in the client.
  // eslint-disable-next-line no-console
  console.log('Executing...');

  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
    </main>
  );
}
