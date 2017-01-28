import React from 'react';

const HOST = "/api/";

class TodoRepository {
}

TodoRepository.TODOS_END_POINT = HOST + 'todos/';
TodoRepository.TASKS_END_POINT = HOST + 'tasks/';

// Used to disable cache since pragma and Cache-Control are not enough
var time = () => '?' + new Date().getTime();

var headers = new Headers();
headers.append('Accept', 'application/json');
headers.append('Content-Type', 'application/json');

TodoRepository.getTasks = function (todoId, callback) {
  fetch(TodoRepository.TODOS_END_POINT + todoId + "/tasks" + time(), {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: headers
  }).then(response => {
    return response.json();
  }).then(json => {
    callback(json);
  }).catch(error => {
    console.log("Error during getTasks action or its callback", error.message);
  });
};

TodoRepository.addTask = function (todoId, task, callback) {
  fetch(TodoRepository.TODOS_END_POINT + todoId + "/tasks" + time(), {
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    headers: headers,
    body: JSON.stringify(task)
  }).then(response => {
    return response.json();
  }).then(json => {
    callback(json);
  }).catch(error => {
    console.log("Error during addTask action or its callback", error.message);
  });
};

TodoRepository.deleteTask = function (taskId, callback) {
  fetch(TodoRepository.TASKS_END_POINT + taskId + time(), {
    method: 'DELETE',
    mode: 'cors',
    redirect: 'follow',
    headers: headers
  }).then(response => {
    callback();
  }).catch(error => {
    console.log("Error during deleteTask action or its callback", error.message);
  })
};

// As json-server don't manage entity relation, this will not works correcly on tasks deletion
TodoRepository.updateTodo = function (todoId, todo, callback) {
  fetch(TodoRepository.TODOS_END_POINT + todoId + time(), {
    method: 'PUT',
    mode: 'cors',
    redirect: 'follow',
    headers: headers,
    body: JSON.stringify(todo)
  }).then(response => {
    callback();
  }).catch(error => {
    console.log("Error during updateTask action or its callback", error.message);
  })
};

TodoRepository.updateTask = function (task, callback) {
  fetch(TodoRepository.TASKS_END_POINT + task.id + time(), {
    method: 'PUT',
    mode: 'cors',
    redirect: 'follow',
    headers: headers,
    body: JSON.stringify(task)
  }).then(response => {
    callback();
  }).catch(error => {
    console.log("Error during updateTask action or its callback", error.message);
  })
};

TodoRepository.updateTasks = function (tasks, callback) {
  // TODO
};


export default TodoRepository;
