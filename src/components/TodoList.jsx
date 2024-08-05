import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'low':
        return 'bg-green-100'; // Açık yeşil
      case 'medium':
        return 'bg-yellow-200'; // Orta sarı
      case 'high':
        return 'bg-red-300'; // Koyu kırmızı
      default:
        return '';
    }
  };

  return (
    <ul className="mt-4">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          removeTodo={() => removeTodo(index)}
          toggleTodo={() => toggleTodo(index)}
          editTodo={(newText) => editTodo(index, newText)}
          className={getPriorityClass(todo.priority)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
