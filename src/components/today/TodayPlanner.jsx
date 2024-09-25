import styles from './TodayPlanner.module.css';
import { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
// import CompletionRateChart from './CompletionRateChart';

const FILTERS = ['all', 'active', 'done'];

export default function TodayPlanner() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <section className={styles.container}>
      <Header filtered={filter} filters={FILTERS} onFilterChange={setFilter} />
      <TodoList filtered={filter} />
      {/* <CompletionRateChart /> */}
    </section>
  );
}
