const INITIAL_STATE = {
  description: 'Alguma coisa',
  list: [{
    _id: 1,
    description: 'Olá',
    done: true
  }, {
    _id: 2,
    description: 'Olá 2',
    done: false
  }]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload };

    default:
      return state;
  }
};
