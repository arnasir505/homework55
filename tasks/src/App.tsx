import { useState } from 'react';
import './App.css';
import { Item } from './types';
import Card from './components/Card';
import Form from './components/Form';
import TotalCost from './components/TotalCost';

function App() {
  const [item, setItem] = useState({
    title: '',
    cost: '',
  });

  const [items, setItems] = useState<Item[]>([
    { title: 'Milk', cost: 20, id: Math.random() },
    { title: 'Eggs', cost: 40, id: Math.random() },
    { title: 'Cheese', cost: 50, id: Math.random() },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setItems((prevState) => {
      const newItem: Item = {
        ...item,
        cost: parseFloat(item.cost),
        id: Math.random(),
      };
      return [...prevState, newItem];
    });

    setItem({ title: '', cost: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const removeItem = (id: number) => {
    setItems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const itemsEl = items.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        cost={item.cost}
        id={item.id}
        removeItem={removeItem}
      />
    );
  });

  const totalCost = items.reduce((acc, item) => {
    return acc + item.cost;
  }, 0);

  return (
    <div className='container mt-5'>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        item={item}
      />
      <hr />
      {itemsEl}
      <hr />
      <TotalCost totalCost={totalCost} />
    </div>
  );
}

export default App;
