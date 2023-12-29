import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

import { TMealItemForm } from '@/types';

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

export const saveMeal = async ({
  title,
  image,
  summary,
  instructions,
  creator,
  creator_email,
}: TMealItemForm) => {
  const { type: imageType } = image;
  const slug = slugify(title, { lower: true });
  const instructionsProcessed = xss(instructions);
  // eslint-disable-next-line no-console
  console.log('image type is: ', { imageType });
  const extension = image.name.split('.').pop();
  const imageFileName = `${slug}.${extension}`;

  // writting the image
  const stream = fs.createWriteStream(`public/images/${imageFileName}`);
  const bufferedImage = await image.arrayBuffer(); // buffer returns a promise always
  stream.write(Buffer.from(bufferedImage), error => {
    if (error) {
      throw new Error('Saving image failef!');
    }
  });

  const mealData = {
    slug,
    title,
    image: `/images/${imageFileName}`,
    summary,
    instructions: instructionsProcessed,
    creator,
    creator_email,
  };

  db.prepare(
    `
    INSERT INTO meals
    (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `,
  ).run(mealData);
};
