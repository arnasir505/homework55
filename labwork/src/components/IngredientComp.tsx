import React from 'react';
import trashIcon from '../assets/ic-trash.png';
import { Ingredient } from '../types';

interface IngredientCompProps {
  ingredient: Ingredient;
  count: number;
  addItem: (arg0: Ingredient) => void;
  removeItem: (name: string) => void;
}

const IngredientComp: React.FC<IngredientCompProps> = ({
  ingredient,
  addItem,
  count,
  removeItem,
}) => {
  return (
    <div className='ingredient'>
      <button type='button' onClick={() => addItem(ingredient)}>
        <img
          src={ingredient.image}
          alt='ingredient'
          className='ingredientImg'
        />
      </button>
      <span className='ingr-name'>{ingredient.name}</span>
      <div className='count-wrap'>
        <span>{count}</span>
        <button
          type='button'
          className='trash-btn'
          onClick={() => removeItem(ingredient.name)}
        >
          <img src={trashIcon} alt='trash' className='trash' />
        </button>
      </div>
    </div>
  );
};

export default IngredientComp;
