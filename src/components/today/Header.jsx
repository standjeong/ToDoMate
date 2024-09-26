import { useState } from 'react';
import styles from './Header.module.css';
import { useDailyTodoContext } from '../../context/DailyTodoContext';
import { PiBroom } from 'react-icons/pi';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';
import Modal from '../common/Modal';
import { useDarkModeContext } from '../../context/DarkModeContext';

export default function Header({ filtered, filters, onFilterChange }) {
  const { handleDeleteAll } = useDailyTodoContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDarkMode, toggleIsDarkMode } = useDarkModeContext();

  return (
    <header className={styles.header}>
      <div className={styles.titleBox}>
        <button className={styles.mode} onClick={toggleIsDarkMode}>
          {isDarkMode ? <BsSun /> : <BsMoonStarsFill />}
        </button>
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
        {filters.map((list, index) => (
          <li key={index}>
            <button
              className={`${styles.buttonFilter} ${
                list.filter === filtered && styles.selected
              }`}
              onClick={(e) => onFilterChange(list.filter)}
            >
              {list.name}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
