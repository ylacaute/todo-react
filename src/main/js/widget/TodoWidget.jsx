import React from 'react';
import TodoEvent from './../todo/TodoEvent.jsx';

// External widget to illustrate event system without Redux
class TodoWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      completedTodoCount: 0,
      totalTodoCount: 0
    }
  }

  componentDidMount() {
    if (!this.state.initialized) {
      document
        .getElementById(this.props.todoDomId)
        .addEventListener(TodoEvent.TODO_CHANGE, event => this.onTodoCountChange(event));
      this.setState({
        initialized: true
      });
    }
  }

  onTodoCountChange(event) {
    this.setState({
      completedTodoCount: event.detail.completedCount,
      totalTodoCount:  event.detail.totalCount
    })
  }

  render() {
    return (
      <div>
        <span className="todo-widget">{this.state.completedTodoCount} / {this.state.totalTodoCount}</span>
      </div>
    )
  }

}

TodoWidget.propTypes = {
  todoDomId: React.PropTypes.string.isRequired
};


export default TodoWidget;
