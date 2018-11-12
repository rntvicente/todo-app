import axios from 'axios';

const url = 'http://localhost:3000/api/todos';

export const changeDescription = (event) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
});

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search = (description ? `&description__regex=/${description}/` : '');

    const request = axios.get(`${url}?sort=-createdAt${search}`)
      .then(res => dispatch({ type: 'TODO_SEARCHED', payload: res.data }));
  };
};

export const add = (description) => {
  return dispatch => {
    axios.post(url, { description })
      .then(res => dispatch(clear()))
      .then(res => dispatch(search()));
  }
};

export const markAsDone = (todo) => {
  return dispatch => {
    axios.put(`${url}/${todo._id}`, { ...todo, done: true })
      .then(res => dispatch(search()));
  }
};

export const markAsPending = (todo) => {
  return dispatch => {
    axios.put(`${url}/${todo._id}`, { ...todo, done: false })
      .then(res => dispatch(search()));
  }
};

export const remove = (todo) => {
  return dispatch => {
    axios.delete(`${url}/${todo._id}`)
      .then(res => dispatch(search()));
  }
};

export const clear = () => {
  return [
    { type: 'TODO_CLEAR' },
    search()
  ]
};
