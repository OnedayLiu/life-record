exports.addTodoItem = function* () {
  this.body = yield this.service.todo.addTodoItem(this.request.body);
};

exports.addDoneItem = function* () {
  this.body = yield this.service.todo.addDoneItem(this.request.body);
};

exports.deleteTodoItem = function* () {
  this.body = yield this.service.todo.deleteTodoItem(this.request.body);
};

exports.getTodoList = function* () {
  this.body = yield this.service.todo.getTodoList();
};

exports.getDoneList = function* () {
  this.body = yield this.service.todo.getDoneList();
};

exports.deleteItem = function* () {
  this.body = yield this.service.todo.deleteItem(this.request.body);
};

exports.setTaskDone = function* () {
  const data = this.request.body;
  const deleteTodoItemRet = yield this.service.todo.deleteTodoItem(data);
  if (deleteTodoItemRet.code === 0) {
    this.body =  yield this.service.todo.addDoneItem(data);
  } else {
    this.body = { code: -1 };
  }
};