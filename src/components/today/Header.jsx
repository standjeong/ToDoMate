import styles from './Header.module.css';
import { useDailyTodoContext } from '../../context/DailyTodoContext';
import { PiBroom } from 'react-icons/pi';

export default function Header({ filtered, filters, onFilterChange }) {
  const { handleDeleteAll } = useDailyTodoContext();
  return (
    <header className={styles.header}>
      <div className={styles.titleBox}>
        <h1 className={styles.h1}>오늘 할 일</h1>
        <PiBroom className={styles.buttonAllDelete} onClick={handleDeleteAll} />
      </div>
      <ul className={styles.filters}>
        {filters.map((filter, index) => (
          <li key={index}>
            <button
              className={`${styles.buttonFilter} ${
                filter === filtered && styles.selected
              }`}
              onClick={(e) => onFilterChange(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
