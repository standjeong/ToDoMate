import React from 'react';

export default function Header({
  filtered,
  filters,
  onFilterChange,
  onClearAll,
}) {
  return (
    <header>
      <h1>오늘 할 일</h1>
      <button onClick={onClearAll}>전체삭제</button>
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
