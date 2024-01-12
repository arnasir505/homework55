import meatImg from './assets/meat.png';
import cheeseImg from './assets/cheese.png';
import baconImg from './assets/bacon.png';
import saladImg from './assets/salad.jpg';
import { Ingredient } from './types';

export const IngredientsData: Ingredient[] = [
  { name: 'Salad', price: 10, image: saladImg },
  { name: 'Bacon', price: 60, image: baconImg },
  { name: 'Cheese', price: 50, image: cheeseImg },
  { name: 'Meat', price: 80, image: meatImg },
];

export const basePrice = 30;
