import { useDailyTodoContext } from '../../context/DailyTodoContext';

export default function Todo({ todo }) {
  const { handleChange, handleDelete } = useDailyTodoContext();
  const onStatusChange = (e) =>
    handleChange({ ...todo, done: e.target.checked ? true : false });

  return (
    <li>
      <input
        type='checkbox'
        id={todo.id}
        checked={todo.done}
        onChange={onStatusChange}
      />
      <label htmlFor={todo.id}>{todo.text}</label>
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </li>
  );
}
