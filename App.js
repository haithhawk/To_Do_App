import React, { Component } from 'react';
import ToDoList from './src/components/ToDoList';
import ListOfItems from './src/components/ListOfItems';
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
