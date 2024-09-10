import { useState } from 'react';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoList from './TodoList';

export default function TodayPlanner() {
  const [todos, setTodos] = useState(initialVal);

  return (
    <section>
      <Header onClearAll={() => setTodos([])} />
      <TodoList todos={todos} />
      <AddTodo />
    </section>
  );
}

const initialVal = [
  { id: 1, text: '프로젝트끝내기', completed: false },
  { id: 2, text: '포폴작업', completed: false },
  { id: 3, text: '청소하기', completed: false },
];
