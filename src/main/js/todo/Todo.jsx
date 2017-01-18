import React from 'react';
import ReactDOM from 'react-dom';
import TodoItemList from './TodoItemList.jsx';
import TodoFilter from './TodoFilter.jsx';
import TodoItemFactory from './TodoItemFactory.jsx';
import TodoEvent from './TodoEvent.jsx';

const ENTER_KEY = 13;

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      atLeastOneDone: false,
      selectAllChecked: false,
      filter: TodoFilter.SHOW_ALL
    };

    this.displayAll = this.displayAll.bind(this);
    this.displayActive = this.displayActive.bind(this);
    this.displayCompleted = this.displayCompleted.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deleteCompletedItems = this.deleteCompletedItems.bind(this);
    this.checkAllItems = this.checkAllItems.bind(this);
    this.handlerKeyUp = this.handlerKeyUp.bind(this);
  }

  componentDidUpdate() {
    TodoEvent.dispatchChange(
      ReactDOM.findDOMNode(this),
      this.state.todoItems.length,
      this.countCompleted(this.state.todoItems));
  }

  isAtLeastOneDone(todoItems) {
    return todoItems.some((todoItem) => todoItem.isDone);
  }

  isAllCompleted(todoItems) {
    return todoItems.length > 0
      && todoItems.every((todoItem) => todoItem.isDone);
  }

  countCompleted(todoItems) {
    let result = 0;
    todoItems.forEach((todoItem) => {
      if (todoItem.isDone) result++;
    });
    return result;
  }

  handlerKeyUp(event) {
    if (event.keyCode === ENTER_KEY) {
      let value = event.target.value;
      if (!value) return false;
      let newTodoItem = TodoItemFactory.create(value);
      event.target.value = "";
      this.addItem(newTodoItem);
    }
  }

  toggleItemCompleted(todoItems, todoItemId) {
    let item = TodoFilter.findById(todoItems, todoItemId);
    let itemIndex = todoItems.indexOf(item);
    let modifiedItem = Object.assign({}, item, {isDone: !item.isDone});
    return [
      ...todoItems.slice(0, itemIndex),
      modifiedItem,
      ...todoItems.slice(itemIndex + 1)
    ];
  }

  addItem(todoItem) {
    this.setState((prevState) => {
      return {
        todoItems: [...prevState.todoItems, todoItem],
        selectAllChecked: false
      }
    });
    console.log("ADD A FUCKING ITEM");

  }

  deleteItem(todoItemId) {
    this.setState((prevState) => {
      let todoItems = TodoFilter.excludeById(prevState.todoItems, todoItemId);
      return {
        todoItems: todoItems,
        atLeastOneDone: this.isAtLeastOneDone(todoItems),
        selectAllChecked: this.isAllCompleted(todoItems)
      }
    });
  }

  checkItem(todoItemId) {
    this.setState((prevState) => {
      let todoItems = this.toggleItemCompleted(prevState.todoItems, todoItemId);
      return {
        todoItems: todoItems,
        atLeastOneDone: this.isAtLeastOneDone(todoItems),
        selectAllChecked: this.isAllCompleted(todoItems)
      }
    });
  }

  deleteCompletedItems() {
    this.setState((prevState) => {
      let todoItems = TodoFilter.notCompleted(prevState.todoItems);
      return {
        todoItems: todoItems,
        atLeastOneDone: false,
        selectAllChecked: false
      }
    });
  }

  checkAllItems() {
    this.setState((prevState) => {
      let newState = !prevState.selectAllChecked;
      let todoItems = this.state.todoItems.map((item) => {
        return Object.assign({}, item, {isDone: newState});
      });
      return {
        todoItems: todoItems,
        atLeastOneDone: newState,
        selectAllChecked: newState
      }
    });
  }

  displayAll() {
    this.setState({filter: TodoFilter.SHOW_ALL});
  }

  displayActive() {
    this.setState({filter: TodoFilter.SHOW_ACTIVE});
  }

  displayCompleted() {
    this.setState({filter: TodoFilter.SHOW_COMPLETED});
  }

  renderHeader() {
    return (
      <div className="todo-header">
        <h2>Todo</h2>
        <input type="checkbox"
               checked={this.state.selectAllChecked}
               onChange={this.checkAllItems}/>
        <input type="text"
               onKeyUp={this.handlerKeyUp}
               placeholder="What's your task ?"/>
      </div>
    )
  }

  renderFooter() {
    let filter = this.state.filter;
    let allClassName = filter == TodoFilter.SHOW_ALL ? "active" : "";
    let activeClassName = filter == TodoFilter.SHOW_ACTIVE ? "active" : "";
    let completedClassName = filter == TodoFilter.SHOW_COMPLETED ? "active" : "";
    let clearCompleted;

    if (this.state.atLeastOneDone) {
      clearCompleted = <a href="#" className="clear-completed"
                          onClick={this.deleteCompletedItems}>Clear completed</a>;
    }

    return (
      <div className="todo-footer">
        <ul className="todo-filter">
          <li className={allClassName}>
            <a href="#filter=All"
               onClick={this.displayAll}>All</a></li>
          <li className={activeClassName}>
            <a href="#filter=Active"
               onClick={this.displayActive}>Active</a></li>
          <li className={completedClassName}>
            <a href="#filter=Completed"
               onClick={this.displayCompleted}>Completed</a></li>
        </ul>
        {clearCompleted}
      </div>
    )
  }

  render() {
    return (
      <div id={this.props.domId} className="todo">
        {this.renderHeader()}
        <TodoItemList todoItems={TodoFilter.filter(this.state.todoItems, this.state.filter)}
                      checkItem={this.checkItem}
                      deleteItem={this.deleteItem}/>
        {this.renderFooter()}
      </div>
    )
  }

}

Todo.propTypes = {
  domId: React.PropTypes.string.isRequired
};

export default Todo;
