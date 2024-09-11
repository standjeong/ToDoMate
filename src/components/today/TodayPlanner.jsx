import { useState } from 'react';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoList from './TodoList';

export default function TodayPlanner() {
  const [todos, setTodos] = useState('');
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <section>
      <Header onClearAll={() => setTodos([])} />
      <TodoList todos={todos} onDelete={handleDelete} />
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
