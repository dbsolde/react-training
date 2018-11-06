import React, { Component } from 'react';
import './styles/App.css';
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo App with Redux</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
