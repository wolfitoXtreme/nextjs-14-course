'use server';

import { redirect } from 'next/navigation';

import { TMealItemForm } from '@/types';

import { saveMeal } from './meals';

export const shareMeal = async (formData: FormData) => {
  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('creator'),
    creator_email: formData.get('creator_email'),
  } as TMealItemForm;

  // eslint-disable-next-line no-console
  console.log('saved meal:', { meal }); // will log in the terminal 'use server'

  await saveMeal(meal);
  redirect('/meals');
};
