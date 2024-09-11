import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
  const [input, setInput] = useState();
  console.log(input);
  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text: input.trim(), completed: false });
    setInput('');
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
