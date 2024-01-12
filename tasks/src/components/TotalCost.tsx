import React from 'react';

interface TotalCostProps {
  totalCost: number;
}

const TotalCost: React.FC<TotalCostProps> = ({ totalCost }) => {
  return <h5 className='text-center'>Total: {totalCost} KGS</h5>;
};

export default TotalCost;
