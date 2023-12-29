'use client';
import { useFormStatus } from 'react-dom';

const MealsFormSubmit = () => {
  const { pending } = useFormStatus(); // wil work only inside a Form component

  return (
    <button disabled={pending}>
      {pending ? 'Submitting..' : 'Share Meal'}
    </button>
  );
};

export default MealsFormSubmit;
