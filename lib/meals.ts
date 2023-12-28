import sql from 'better-sqlite3';

const db = sql('meals.db');

// export const getMeals = () => db.prepare('SELECT * FROM meals').all();

// converted to async per demo purposes
export const getMeals = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Throwing error sample (triggers Error page)
  // throw new Error('Loading data failed...');

  return db.prepare('SELECT * FROM meals').all();
};

export const getMeal = (slug: string) =>
  // (...=?).get(...) protects against sql injection attacks
  db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
