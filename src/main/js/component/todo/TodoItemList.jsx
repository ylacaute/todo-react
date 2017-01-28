import React from 'react';
import TodoItem from './TodoItem.jsx';

class TodoItemList extends React.Component {

  constructor(props) {
    super(props);
    this.checkItem = this.checkItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(todoItemId, event) {
    // delegating check changes to the someone else
    this.props.deleteItem(todoItemId, event);
  }

  checkItem(todoItemId, event) {
    // delegating check changes to the someone else
    this.props.checkItem(todoItemId, event);
  }

  render() {
    let todoItems = [];
    this.props.todoItems.map((todoItem, index) => {
      todoItems.push(<TodoItem key={todoItem.id}
                               {...todoItem}
                               index={todoItem.id}
                               checkItem={this.checkItem}
                               deleteItem={this.deleteItem}/>)
    });
    return (
      <ul className="todo-body">
        {todoItems}
      </ul>
    );
  }
}

TodoItemList.propTypes = {
  todoItems : React.PropTypes.array.isRequired,
  checkItem: React.PropTypes.func.isRequired,
  deleteItem: React.PropTypes.func.isRequired
};

export default TodoItemList;
