import React from 'react';
import {render} from 'react-dom';
import Todo from 'js/component/todo/Todo.jsx';
import TodoWidget from 'js/component/TodoWidget.jsx';
import ClockWidget from 'js/component/ClockWidget.jsx';
import Style from 'sass/main.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    let todoDomId = 'todo';
    let todoId = 'b96983d5-268e-40d8-be62-5eaca333964c';
    return (
      <div>
        <Todo id={todoId} domId={todoDomId} />
        <TodoWidget todoDomId={todoDomId} />
        <ClockWidget />
      </div>
    );
  }
}

render(<App/>, document.getElementById('react-app'));
