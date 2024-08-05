import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState('light');
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addTodo = (text, priority, category, dueDate) => {
    const newTodo = { text, completed: false, priority, category, dueDate };
    setTodos([...todos, newTodo]);
    toast.success('Görev eklendi!');
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    toast.error('Görev silindi!');
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    toast.info('Görev durumu değiştirildi!');
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
    toast.info('Görev güncellendi!');
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  const sortedTodos = filteredTodos.sort((a, b) => {
    if (sortOrder === 'priority') {
      const priorities = { low: 1, medium: 2, high: 3 };
      return priorities[b.priority] - priorities[a.priority];
    }
    if (sortOrder === 'dueDate') {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return 0;
  });

  return (
    <div className="App container mx-auto p-4">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Todo Uygulaması</h1>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          {theme === 'light' ? 'Koyu Tema' : 'Açık Tema'}
        </button>
      </header>
      <TodoForm addTodo={addTodo} />
      <div className="flex justify-between items-center mt-4">
        <div>
          <button onClick={() => setFilter('all')} className="mx-2">Tümü</button>
          <button onClick={() => setFilter('completed')} className="mx-2">Tamamlananlar</button>
          <button onClick={() => setFilter('incomplete')} className="mx-2">Tamamlanmayanlar</button>
        </div>
        <div>
          <button onClick={() => setSortOrder('none')} className="mx-2">Sıralama Yok</button>
          <button onClick={() => setSortOrder('priority')} className="mx-2">Önceliğe Göre</button>
          <button onClick={() => setSortOrder('dueDate')} className="mx-2">Tarihe Göre</button>
        </div>
      </div>
      <TodoList todos={sortedTodos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
      <ToastContainer />
    </div>
  );
};

export default App;
