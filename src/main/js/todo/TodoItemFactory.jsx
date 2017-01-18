
import React from 'react';

class TodoItemFactory {}

TodoItemFactory.todoItemIdCounter = 0;

TodoItemFactory.getNextId = function() {
  return TodoItemFactory.todoItemIdCounter++;
};

TodoItemFactory.create = function(text) {
  return {
    id: TodoItemFactory.getNextId(),
    text: text,
    isDone: false
  };
};

export default TodoItemFactory;
