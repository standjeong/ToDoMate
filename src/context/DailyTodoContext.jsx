import { createContext, useContext, useState, useEffect } from 'react';

const DailyTodoContext = createContext();

export function DailyTodoProvider({ children }) {
  const [todos, setTodos] = useState(getFromLocalStorage);

  const handleAdd = (newTodo) => setTodos([...todos, newTodo]);
  const handleChange = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleDeleteAll = () => setTodos([]);

  useEffect(() => {
    localStorage.setItem('dailyTodos', JSON.stringify(todos));
  }, [todos]);

  return (
    <DailyTodoContext.Provider
      value={{ todos, handleDeleteAll, handleChange, handleDelete, handleAdd }}
    >
      {children}
    </DailyTodoContext.Provider>
  );
}

function getFromLocalStorage() {
  const todosString = localStorage.getItem('dailyTodos');
  const todosObj = JSON.parse(todosString);
  return todosString ? todosObj : [];
}

export function useDailyTodoContext() {
  return useContext(DailyTodoContext);
}
