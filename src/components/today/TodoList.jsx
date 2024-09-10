import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos && todos.map((todo, index) => <Todo key={index} todo={todo} />)}
    </ul>
  );
}
