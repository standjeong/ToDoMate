import React from 'react';

export default function Header({ onClearAll }) {
  return (
    <header>
      <h1>오늘 할 일</h1>
      <button onClick={onClearAll}>전체삭제</button>
    </header>
  );
}
