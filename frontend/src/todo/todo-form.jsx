import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/icon-button';
import { changeDescription, search } from './todo-actions'

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.keyHandler = this.keyHandler.bind(this);
  };

  componentWillMount() {
    this.props.search();
  };

  keyHandler(e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  };

  render() {
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
          <IconButton style="primary" icon="plus" onClick={this.props.handleAdd}></IconButton>
          <IconButton style="info" icon="search" onClick={this.props.handleSearch}></IconButton>
          <IconButton style="default" icon="close" onClick={this.props.handleClear}></IconButton>
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
  search
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
