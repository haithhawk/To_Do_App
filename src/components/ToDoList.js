import React, { Component } from 'react';
import ListOfItems from './ListOfItems';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      termlist: []
    };
    // use bind when you need to use this inside the function
    this.updateText = this.updateText.bind(this);
    this.show_list = this.show_list.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  updateText(event) {
    this.setState({ term: event.target.value });
  }

  show_list(event) {
    event.preventDefault();
    this.setState({
      //  term: '',
      termlist: [...this.state.termlist, this.state.term]
    });
    console.log(this.state);
  }

  handleDelete(index) {
    let newList = this.state.termlist.slice();
    //element is the value and index2 is the place in the array
    newList = newList.filter((element, index2) => {
      if (index == index2) {
        return false;
      } else return true;
    });
    this.setState({
      termlist: newList
    });
  }
  render() {
    return (
      <div className="todoMain">
        <form onSubmit={this.show_list}>
          <input
            placeholder="enter task"
            value={this.state.term}
            onChange={this.updateText}
          />

          <button type="submit">add</button>
        </form>
        <ListOfItems
          handleDelete={this.handleDelete}
          termlist={this.state.termlist}
        />
      </div>
    );
  }
}

export default ToDoList;
