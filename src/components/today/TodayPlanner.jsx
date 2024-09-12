import { useState } from 'react';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoList from './TodoList';

const FILTERS = ['all', 'active', 'done'];

export default function TodayPlanner() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <section>
      <Header filtered={filter} filters={FILTERS} onFilterChange={setFilter} />
      <TodoList filtered={filter} />
      <AddTodo />
    </section>
  );
}
