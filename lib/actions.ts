'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { IShareMealAction, TMealItemForm } from '@/types';
import { isInvalidText } from '@/utils';

import { saveMeal } from './meals';

export const shareMeal: IShareMealAction = async (
  prevState,
  formData,
): Promise<{ message: string | null }> => {
  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('creator'),
    creator_email: formData.get('creator_email'),
  } as TMealItemForm;

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error('Invalid input');
    return {
      message: 'Invalid input',
    };
  }

  // eslint-disable-next-line no-console
  console.log('saved meal:', { meal }); // will log in the terminal 'use server'

  await saveMeal(meal);
  // revalidatePath('/meals', 'layout'); // Revalidates cash for a given path and nested paths on production
  revalidatePath('/meals'); // Revalidates cash for a given production for path on production
  redirect('/meals');
};
