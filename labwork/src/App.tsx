import { useState } from 'react';
import './App.css';
import { IngredientsData, basePrice } from './data';
import { Ingredient } from './types';
import trashIcon from './assets/ic-trash.png';

function App() {
  const [ingredients, setIngredients] = useState([
    { name: 'Salad', count: 0 },
    { name: 'Bacon', count: 0 },
    { name: 'Cheese', count: 0 },
    { name: 'Meat', count: 0 },
  ]);

  const handleClick = (ingredientParam: Ingredient) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if (ingredient.name === ingredientParam.name) {
          return { ...ingredient, count: ingredient.count + 1 };
        } else {
          return ingredient;
        }
      });
    });
  };

  const ingredientsEl = IngredientsData.map((ingredient, index) => {
    const currentIngredient = ingredients[index];
    return (
      <div key={ingredient.name} className='ingredient'>
        <button type='button' onClick={() => handleClick(ingredient)}>
          <img src={ingredient.image} alt='ingr' className='ingredientImg' />
        </button>
        <span className='ingr-name'>{ingredient.name}</span>
        <div className='count-wrap'>
          <span>{currentIngredient.count}</span>
          <button type='button' className='trash-btn'>
            <img src={trashIcon} alt='trash' className='trash' />
          </button>
        </div>
      </div>
    );
  });

  const burgerParts = ingredients.map((ingred) => {
    const newBurgerParts = [];
    for (let i = 0; i < ingred.count; i++) {
      newBurgerParts.push(
        <div className={ingred.name} key={Math.random()}></div>
      );
    }
    return newBurgerParts;
  });

  const totalPrice = IngredientsData.reduce((acc, ingred, index) => {
    return acc + ingred.price * ingredients[index].count;
  }, basePrice);

  return (
    <>
      <div className='ingredientsWrap'>{ingredientsEl}</div>
      <div className='burgerWrap'>
        <div className='Burger'>
          <div className='BreadTop'>
            <div className='Seeds1'></div>
            <div className='Seeds2'></div>
          </div>
          {burgerParts}
          <div className='BreadBottom'></div>
        </div>
        <h3 className='totalPrice'>Total price: {totalPrice}</h3>
      </div>
    </>
  );
}

export default App;
