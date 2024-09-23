import styles from './TodoList.module.css';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { useDailyTodoContext } from '../../context/DailyTodoContext';

export default function TodoList({ filtered }) {
  const { todos } = useDailyTodoContext();
  const filteredTodos = getFilteredTodos(filtered, todos);
  return (
    <section className={styles.listContainer}>
      <ul className={styles.ul}>
        {filteredTodos &&
          filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </ul>
      <AddTodo />
    </section>
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
