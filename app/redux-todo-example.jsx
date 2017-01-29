var redux = require('redux');

console.log('Starting TODO_REDUX Example');

var defaultState = {
  searchText : '',
  showCompleted : false,
  todos : [],
};
// reducer is the function which takes the state and action
var reducer = (state, action) => {
  state = state || defaultState;
  //  it has default state when app is loaded first
  // console.log('New Action', action);
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }

};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
// subscribe to changs
store.subscribe(() => {
  var state = store.getState();

  // console.log('Search Text is: ', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

// fetch the current state of the APP
var currentState = store.getState();
console.log('CurrentState', currentState);

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText : 'Task A'
};
store.dispatch(action);
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText : 'Task B'
})
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText : 'Task C'
})

console.log('New Action: CHANGE_SEARCH_TEXT', store.getState());
