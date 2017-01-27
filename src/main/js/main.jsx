import React from 'react';
import {render} from 'react-dom';
import Todo from './todo/Todo.jsx';
import TodoWidget from './widget/TodoWidget.jsx';
import ClockWidget from './widget/ClockWidget.jsx';
import Style from './../sass/main.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    let todoDomId = 'todo';
    return (
      <div>
        <Todo id={'1'} domId={todoDomId} />
        <TodoWidget todoDomId={todoDomId} />
        <ClockWidget />
      </div>
    );
  }
}

render(<App/>, document.getElementById('react-app'));
