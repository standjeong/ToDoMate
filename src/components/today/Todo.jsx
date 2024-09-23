import styles from './Todo.module.css';
import { useDailyTodoContext } from '../../context/DailyTodoContext';
import { RiDeleteBinLine } from 'react-icons/ri';

export default function Todo({ todo }) {
  const { handleChange, handleDelete } = useDailyTodoContext();
  const onStatusChange = (e) =>
    handleChange({ ...todo, done: e.target.checked ? true : false });

  return (
    <li className={styles.li}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={todo.id}
        checked={todo.done}
        onChange={onStatusChange}
      />
      <label className={styles.text} htmlFor={todo.id}>
        {todo.text}
      </label>

      <RiDeleteBinLine
        className={styles.button}
        onClick={() => handleDelete(todo.id)}
      />
    </li>
  );
}
