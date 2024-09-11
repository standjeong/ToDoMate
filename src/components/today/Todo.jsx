import React from 'react';

export default function Todo({ todo, onDelete }) {
  return (
    <li>
      <input type='checkbox' id={todo.id} />
      <label htmlFor={todo.id}>{todo.text}</label>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
}
