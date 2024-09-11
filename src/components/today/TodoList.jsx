import React from 'react';
import Todo from './Todo';

export default function TodoList({ filtered, todos, onDelete, onChange }) {
  const filteredTodos = getFilteredTodos(filtered, todos);
  return (
    <ul>
      {filteredTodos &&
        filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onChange={onChange}
          />
        ))}
    </ul>
  );
}

function getFilteredTodos(filtered, todos) {
  switch (filtered) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter((todo) => !todo.done);
    case 'done':
      return todos.filter((todo) => todo.done);
    default:
      return console.error('해당하는 필터유형이 없습니다');
  }
}
