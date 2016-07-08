import CountInitialState from './CountInitialState';

function setState(state, newState) {
  return state.merge(newState);
}

function increment(state) {
  return state.set('count', state.get('count') + 1);
}

function decrement(state) {
  return state.set('count', state.get('count') - 1);
}

function multiply(state) {
  return state.set('count', state.get('count') * 2);
}

function divide(state) {
  return state.set('count', state.get('count') / 2);
}

export default function (state = CountInitialState, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'INCREMENT':
      return increment(state);
    case 'DECREMENT':
      return decrement(state);
    case 'MULTIPLY':
      return multiply(state);
    case 'DIVIDE':
      return divide(state);
  }
  return state;
}
