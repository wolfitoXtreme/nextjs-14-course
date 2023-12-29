'use client';
import { useFormState } from 'react-dom';

import { shareMeal } from '@/lib/actions';

import ImagePicker from '@/components/Meals/ImagePicker';
import MealsFormSubmit from '@/components/Meals/MealsFormSubmit';

import styles from './page.module.scss';

const ShareMealPage: React.FC = () => {
  // ---
  // moved out to '@/lib/actions' (Might conflict with 'use client' and not ideal to have inside a component)
  // ---
  // const shareMeal = async (formData: FormData) => {
  //   'use server';

  //   const meal = {
  //     title: formData.get('title'),
  //     image: formData.get('image'),
  //     summary: formData.get('summary'),
  //     instructions: formData.get('instructions'),
  //     creator: formData.get('creator'),
  //     creator_email: formData.get('creator_email'),
  //   };

  //   // eslint-disable-next-line no-console
  //   console.log('saved meal:', { meal }); // will log in the terminal 'use server'
  // };

  // will handle the form submission in the form action (shareMeal)
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={formAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="creator">Your name</label>
              <input type="text" id="creator" name="creator" required />
            </p>
            <p>
              <label htmlFor="creator_email">Your email</label>
              <input
                type="email"
                id="creator_email"
                name="creator_email"
                required
              />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required></textarea>
          </p>
          <ImagePicker label="your image" name="image" />
          <p>{state.message}</p>
          <p className={styles.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
