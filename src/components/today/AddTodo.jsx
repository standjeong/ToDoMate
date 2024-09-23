import styles from './AddTodo.module.css';
import { useState } from 'react';
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
    <form className={styles.form} onSubmit={onAdd}>
      <input
        className={styles.input}
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
