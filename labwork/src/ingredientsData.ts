import pattyImg from './assets/patty.jpg';
import cheeseImg from './assets/cheese.jpg';
import baconImg from './assets/bacon.jpg';
import lettuceImg from './assets/lettuce.jpg';
import { Ingredient } from './types';

export const IngredientsData: Ingredient[] = [
  { name: 'patty', price: 80, image: pattyImg },
  { name: 'cheese', price: 50, image: cheeseImg },
  { name: 'bacon', price: 60, image: baconImg },
  { name: 'lettuce', price: 10, image: lettuceImg },
];