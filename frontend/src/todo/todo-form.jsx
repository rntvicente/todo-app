import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/icon-button';
import { add, changeDescription, search, clear } from './todo-actions'

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.keyHandler = this.keyHandler.bind(this);
  };

  componentWillMount() {
    this.props.search();
  };

  keyHandler(e) {
    const { add, search, description, clear } = this.props;

    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      clear();
    }
  };

  render() {
    const { add, search, description, clear } = this.props;

    return (
      <div role='form' className='todoForm'>
        <Grid cols="12 9 10">
          <input id='description' className='form-control'
            onChange={this.props.changeDescription}
            placeholder='Add a task'
            value={this.props.description}
            onKeyUp={this.keyHandler}></input>
        </Grid>

        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus" onClick={() => add(description)}></IconButton>
          <IconButton style="info" icon="search" onClick={search}></IconButton>
          <IconButton style="default" icon="close" onClick={clear}></IconButton>
        </Grid>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  description: state.todo.description
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeDescription,
  search,
  add,
  clear
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
