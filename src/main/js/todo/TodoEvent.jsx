
import React from 'react';

class TodoEvent {}


TodoEvent.TODO_CHANGE = "TODO_CHANGE";

TodoEvent.dispatchChange = function(todoComponent, totalCount, completedCount) {
  let event = new CustomEvent(TodoEvent.TODO_CHANGE, {
    'detail': {
      totalCount: totalCount,
      completedCount: completedCount
    }
  });
  todoComponent.dispatchEvent(event);
};

export default TodoEvent;
