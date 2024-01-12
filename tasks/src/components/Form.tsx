import React from 'react';

interface FormProps {
  handleSubmit: React.FormEventHandler;
  handleChange: React.ChangeEventHandler;
  item: { title: string; cost: string };
}

const Form: React.FC<FormProps> = ({ handleSubmit, handleChange, item }) => {
  return (
    <form className='d-flex align-items-center' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-control'
        placeholder='Item name'
        name='title'
        value={item.title}
        onChange={handleChange}
        required
      />
      <input
        type='number'
        className='form-control mx-2'
        placeholder='Cost'
        name='cost'
        value={item.cost}
        onChange={handleChange}
        required
      />
      <span className='me-2 fw-bold'>KGS</span>
      <button type='submit' className='btn btn-primary'>
        Add
      </button>
    </form>
  );
};

export default Form;
