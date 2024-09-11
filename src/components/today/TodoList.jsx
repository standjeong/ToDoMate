import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos &&
        todos.map((todo, index) => (
          <Todo key={index} todo={todo} onDelete={onDelete} />
        ))}
    </ul>
  );
}
