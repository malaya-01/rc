import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { Avatar } from './Avatar';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTodo = () => {
    if (newTask.trim()) {
      setTodos([...todos, { id: Date.now(), task: newTask, isCompleted: false }]);
      setNewTask('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <div className='items-center justify-center w-full h-full m-4 p-4'>
        <Avatar />
      </div>
      <div className="w-full max-h-full flex flex-col justify-center items-center">

        <h1 className="text-4xl text-black font-bold mb-8">To-Do List</h1>
        <div className="new-task w-full max-w-md flex flex-row gap-2 mb-8 justify-center items-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New task"
            className="flex-1 p-2 rounded border border-gray-300"
          />
          <button
            onClick={addTodo}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>
        <div className="w-full max-w-md">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))}
        </div>
      </div>
    </>

  );
};

export default TodoList;
