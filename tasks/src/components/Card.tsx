import React from 'react';

interface CardProps {
  title: string;
  cost: number;
  id: number;
  removeItem: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ title, cost, id, removeItem }) => {
  return (
    <div className='card mb-3'>
      <div className='card-body d-flex justify-content-between align-items-center'>
        <span>{title}</span>
        <div>
          <span className='fw-bold pe-3'>{cost} KGS</span>
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => removeItem(id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
