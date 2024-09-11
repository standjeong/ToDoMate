export default function Todo({ todo, onChange, onDelete }) {
  const handleStatusChange = (e) =>
    onChange({ ...todo, done: e.target.checked ? true : false });

  return (
    <li>
      <input
        type='checkbox'
        id={todo.id}
        checked={todo.done}
        onChange={handleStatusChange}
      />
      <label htmlFor={todo.id}>{todo.text}</label>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
}
