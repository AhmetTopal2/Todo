import React, { useState } from "react";

const TodoItem = ({ todo, removeTodo, toggleTodo, editTodo, className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(newText);
    setIsEditing(false);
  };

  return (
    <li
      className={`flex justify-between items-center p-4 my-2 rounded shadow ${className}`}
    >
      <div className="flex items-center">
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          />
        ) : (
          <span className={todo.completed ? "line-through" : ""}>
            {todo.text}
          </span>
        )}
      </div>
      <div>
        {isEditing ? (
          <button onClick={handleSave} className="mx-1 text-green-600">
            Kaydet
          </button>
        ) : (
          <button onClick={handleEdit} className="mx-1 text-white">
            Düzenle
          </button>
        )}
        <button onClick={removeTodo} className="mx-1 text-red-600">
          Sil
        </button>
        {!isEditing && (
          <button onClick={toggleTodo} className="mx-1 text-green-600">
            {todo.completed ? "Tamamlanmadı" : "Tamamlandı"}
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
