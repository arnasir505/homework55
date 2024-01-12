import { useState } from 'react';
import './App.css';
import { IngredientsData, basePrice } from './data';
import { Ingredient } from './types';
import IngredientComp from './components/IngredientComp';
import Burger from './components/Burger';
import TotalPrice from './components/TotalPrice';

function App() {
  const [ingredients, setIngredients] = useState([
    { name: 'Salad', count: 0 },
    { name: 'Bacon', count: 0 },
    { name: 'Cheese', count: 0 },
    { name: 'Meat', count: 0 },
  ]);

  const addItem = (ingredientParam: Ingredient) => {
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

  const removeItem = (name: string) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if (ingredient.name === name) {
          return { ...ingredient, count: 0 };
        } else {
          return ingredient;
        }
      });
    });
  };

  const ingredientsEl = IngredientsData.map((ingredient, index) => {
    const currentIngredient = ingredients[index];
    return (
      <IngredientComp
        key={ingredient.name}
        ingredient={ingredient}
        addItem={addItem}
        count={currentIngredient.count}
        removeItem={removeItem}
      />
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
        <Burger burgerParts={burgerParts} />
        <TotalPrice totalPrice={totalPrice} />
      </div>
    </>
  );
}

export default App;
