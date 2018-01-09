import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addItem, toggleComplete} from './action'

const cross = {
  textDecoration: 'line-through'
}

class App extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(addItem(this.text.value))
    this.text.value = '';
  }

  toggleTodo(id) {
    console.log(id)
    this.props.dispatch(toggleComplete(id))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" required ref={(input) => this.text = input } />
          <input type="submit" value="Add todo" />
        </form>
        {this.props.todo.length > 0 &&
          <ul>
            {this.props.todo.map((todo,key) =>
              <li key={key}
                  onClick={() => this.toggleTodo(todo.id)}>
                  <span style={todo.completed ? cross: {}}>{todo.text}</span>
              </li>
            )}
          </ul>
        }
      </div>
    );
  }
}
App = connect(function(state){
  return {todo : state, }
})(App)

export default App;
