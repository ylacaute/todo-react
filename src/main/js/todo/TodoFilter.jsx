
import React from 'react';

class TodoFilter {}

TodoFilter.SHOW_ALL = "SHOW_ALL";
TodoFilter.SHOW_ACTIVE = "SHOW_ACTIVE";
TodoFilter.SHOW_COMPLETED = "SHOW_COMPLETED";

// immutable
TodoFilter.filter = function(todoItems, filter) {
  switch (filter) {
    case TodoFilter.SHOW_ALL:
      return todoItems;
    case TodoFilter.SHOW_ACTIVE:
      return todoItems.filter(t => !t.isDone);
    case TodoFilter.SHOW_COMPLETED:
      return todoItems.filter(t => t.isDone);
  }
};

// immutable
TodoFilter.notCompleted = function(todoItems) {
  return todoItems.filter(item => !item.isDone);
};

// immutable
TodoFilter.excludeById = function(todoItems, excludedItemId) {
  let item = TodoFilter.findById(todoItems, excludedItemId);
  let itemIndex = todoItems.indexOf(item);
  return [
    ...todoItems.slice(0, itemIndex),
    ...todoItems.slice(itemIndex + 1)
  ];
};

TodoFilter.findById = function(todoItems, itemId) {
  return todoItems.find(item => item.id == itemId);
};

export default TodoFilter;
