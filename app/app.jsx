var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
const _ById = (id) => document.getElementById(id);

// Load foundation
// this is very very important
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')
/*
ReactDOM.render(
  <TodoApp/>, _ById('app')
);
*/
require('./redux-example.jsx');
//require('./redux-todo-example.jsx');
