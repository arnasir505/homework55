import React, { ReactNode } from 'react';

interface BurgerProps {
  burgerParts: ReactNode[];
}

const Burger: React.FC<BurgerProps> = ({ burgerParts }) => {
  return (
    <div className='Burger'>
      <div className='BreadTop'>
        <div className='Seeds1'></div>
        <div className='Seeds2'></div>
      </div>
      {burgerParts}
      <div className='BreadBottom'></div>
    </div>
  );
};

export default Burger;
