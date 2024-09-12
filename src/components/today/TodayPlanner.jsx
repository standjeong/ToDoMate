import { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoList from './TodoList';

const FILTERS = ['all', 'active', 'done'];

export default function TodayPlanner() {
  const [filter, setFilter] = useState(FILTERS[0]);
  const [todos, setTodos] = useState(getFromLocalStorage);

  const handleChange = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleAdd = (newTodo) => setTodos([...todos, newTodo]);

  useEffect(() => {
    localStorage.setItem('dailyTodos', JSON.stringify(todos));
  }, [todos]);

  return (
    <section>
      <Header
        filtered={filter}
        filters={FILTERS}
        onFilterChange={setFilter}
        onClearAll={() => setTodos([])}
      />
      <TodoList
        filtered={filter}
        todos={todos}
        onChange={handleChange}
        onDelete={handleDelete}
      />
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFromLocalStorage() {
  const todosString = localStorage.getItem('dailyTodos');
  const todosObj = JSON.parse(todosString);
  return todosString ? todosObj : [];
}
