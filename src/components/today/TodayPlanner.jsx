import styles from './TodayPlanner.module.css';
import { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';

const FILTERS = [
  { filter: 'all', name: '전체' },
  { filter: 'active', name: '진행중' },
  { filter: 'done', name: '완료' },
];

export default function TodayPlanner() {
  const [filter, setFilter] = useState(FILTERS[0].filter);

  return (
    <section className={styles.container}>
      <Header filtered={filter} filters={FILTERS} onFilterChange={setFilter} />
      <TodoList filtered={filter} />
    </section>
  );
}
