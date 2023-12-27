import { IMealsGrid } from '@/types';

import MealItem from './MealItem';

import styles from './MealsGrid.module.scss';

const MealsGrid: React.FC<IMealsGrid> = ({ meals }) => (
  <ul className={styles.meals}>
    {meals.map((meal, index) => (
      <li key={`${meal.id}-${index}`}>
        <MealItem {...meal} />
      </li>
    ))}
  </ul>
);

export default MealsGrid;
