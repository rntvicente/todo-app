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

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

    this.refresh();
  };

  refresh(description = '') {
    const search = (description ? `&description__regex=/${description}/` : '');

    axios.get(`${uri}?sort=-createdAt${search}`)
      .then(resp => this.setState({ ...this.state, description, list: resp.data }))
  };

  handleAdd() {
    const description = this.state.description;

    axios.post(uri, { description })
      .then(res => this.refresh());
  };

  handleChange(event) {
    this.setState({ ...this.state, description: event.target.value });
  }

  handleRemove(todo) {
    axios.delete(`${uri}/${todo._id}`, { todo })
      .then(res => this.refresh(this.state.description));
  };

  handleMarkAsDone(todo) {
    axios.put(`${uri}/${todo._id}`, { ...todo, done: true })
      .then(res => this.refresh(this.state.description));
  };

  handleMarkAsPending(todo) {
    axios.put(`${uri}/${todo._id}`, { ...todo, done: false })
      .then(res => this.refresh(this.state.description));
  };

  handleSearch() {
    this.refresh(this.state.description);
  };

  handleClear() {
    this.refresh();
  };

  render() {
    return (
      <div>
        <PageHeader name='Tasks' small=' Register'></PageHeader>

        <TodoForm
          description={this.state.description}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear} />

        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending} />
      </div>
    );
  };
};
