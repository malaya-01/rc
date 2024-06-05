import React from 'react';
import TodoList from './components/TodoList';
import './App.css';
import { Avatar } from './components/Avatar';

const App = () => {
  return (
    <div className="app">
      <TodoList />
      <Avatar />
    </div>
  );
};

export default App;
