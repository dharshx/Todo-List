import React, { useState } from 'react';
import './TodoList.css';


function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoText = event.target.elements.todoText.value;
    if (todoText.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
      event.target.reset();
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todoText" placeholder="Add a task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            onClick={() => handleToggleComplete(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
