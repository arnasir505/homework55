import React from 'react';

interface TotalPriceProps {
  totalPrice: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ totalPrice }) => {
  return <h3 className='totalPrice'>Total price: {totalPrice}</h3>;
};

export default TotalPrice;
