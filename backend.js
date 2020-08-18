/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(todo) {
  return todo.text;
}

const getPriority = function(todo) {
  return todo.priority;
}

const nameAndPriority = function(todo) {
  return `${todo.text} - ${todo.priority === 2 ? 'High' : 'Low'}`;
}

const isComplete = function(todo) {
  return todo.complete
}

const isNotComplete = function(todo) {
  return !todo.complete
}

const isHighPriority = function(todo) {
  return todo.priority === 2;
}

const isLowPriority = function(todo) {
  return todo.priority === 1;
}


/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(todos) {
  return todos.map(getTodoName);
}

const priorities = function(todos) {
  return todos.map(getPriority);
}

const namesAndPriorities = function(todos) {
  return todos.map(nameAndPriority);
}

const justNotComplete = function(todos) {
  return todos.filter(isNotComplete);
}

const justComplete = function(todos) {
  return todos.filter(isComplete);
}

const priority2Only = function(todos) {
  return todos.filter(isHighPriority);
}

const priority1Only = function(todos) {
  return todos.filter(isLowPriority);
}
