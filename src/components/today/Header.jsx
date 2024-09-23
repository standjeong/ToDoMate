import { useState } from 'react';
import styles from './Header.module.css';
import { useDailyTodoContext } from '../../context/DailyTodoContext';
import { PiBroom } from 'react-icons/pi';
import Modal from '../common/Modal';

export default function Header({ filtered, filters, onFilterChange }) {
  const { handleDeleteAll } = useDailyTodoContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.titleBox}>
        <h1 className={styles.h1}>오늘 할 일</h1>
        <PiBroom
          className={styles.buttonAllDelete}
          onClick={() => setIsModalOpen(true)}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleDeleteAll}
          text={'오늘 할 일'}
        />
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
