import React, { Component } from 'react';
import ToDoList from './components/ToDoList';
import ListOfItems from './components/ListOfItems';
class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}

export default App;
