import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDailyTodoContext } from '../../context/DailyTodoContext';

export default function AddTodo() {
  const { handleAdd } = useDailyTodoContext();
  const [input, setInput] = useState('');
  const onAdd = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    handleAdd({ id: uuidv4(), text: input.trim(), done: false });
    setInput('');
  };

  return (
    <form onSubmit={onAdd}>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
