var reduxState = {
  searchText : "Dog",
  showCompleted : false,
  todos: [{
    id: "007",
    text: "Walk the Dog"
  }, {
    id: "009",
    text: "Get the Milk"
  }]
};

// this state is read only under redux
// you have to dispatch Action which will update your state

var action = {
  type: "CHANGE_SEARCH_TEXT", // must use upperCase type name
  searchText: "something to search"
}
