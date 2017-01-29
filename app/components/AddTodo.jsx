const React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (evt) {
    evt.preventDefault();
    var todoText = this.refs.todoText.value;

    if (0 !== todoText.length) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What is your main focus for today?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
