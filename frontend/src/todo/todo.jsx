import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/page-header';
import TodoForm from './todo-form';
import TodoList from './todo-list';

const uri = 'http://localhost:3000/api/todos';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { description: '', list: [] };

    this.handleChange = this.handleAdd.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  };

  handleAdd() {
    const description = this.state.description;

    axios.post(uri, { description })
      .then(res => console.log('yugigyugiyguygugguyguy'))
      .catch(err => console.error(err));
  };

  handleChange(event) {
    this.setState({ ...this.state, description: event.target.value });
  }

  render() {
    return (
      <div>
        <PageHeader name='Tasks' small=' Register'></PageHeader>
        <TodoForm description={this.state.description}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd} />
        <TodoList />
      </div>
    );
  };
};
