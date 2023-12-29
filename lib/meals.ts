import sql from 'better-sqlite3';

const db = sql('meals.db');

// export const getMeals = () => db.prepare('SELECT * FROM meals').all();

// converted to async per demo purposes
export const getMeals = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  throw new Error('Loading data failed...');

  return db.prepare('SELECT * FROM meals').all();
};
