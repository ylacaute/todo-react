
import React from 'react';
import UUID from 'js/utils/UUID.js'

class TodoItemFactory {}

TodoItemFactory.create = function(name) {
  return {
    id: UUID.random(),
    todoId: 1,
    name: name,
    isDone: false
  };
};

export default TodoItemFactory;
