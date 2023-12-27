const MealDetails = ({ params, params: { slug } }: PageProps) => (
  <main>
    <h1>Meal Details... {slug}</h1>
    <pre>{JSON.stringify(params, null, 2)}</pre>
  </main>
);

export default MealDetails;
