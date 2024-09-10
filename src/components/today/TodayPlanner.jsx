import AddTodo from './AddTodo';
import Header from './Header';
import TodoList from './TodoList';

export default function TodayPlanner() {
  return (
    <section>
      <Header />
      <TodoList />
      <AddTodo />
    </section>
  );
}
