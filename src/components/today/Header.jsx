import React from 'react';
import { useDailyTodoContext } from '../../context/DailyTodoContext';

export default function Header({
  filtered,
  filters,
  onFilterChange,
  // onClearAll,
}) {
  const { handleDeleteAll } = useDailyTodoContext();
  return (
    <header>
      <h1>오늘 할 일</h1>
      <button onClick={handleDeleteAll}>전체삭제</button>
      <ul>
        {filters.map((filter, index) => (
          <li key={index}>
            <button onClick={(e) => onFilterChange(filter)}>{filter}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
