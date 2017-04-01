module.exports = function router(app) {
  const { controller } = app;
  app.get('/', controller.home.ejs);
  app.get('/todo/getTodoList', controller.todo.getTodoList);
  app.get('/todo/getDoneList', controller.todo.getDoneList);
  app.post('/todo/addTodoItem', controller.todo.addTodoItem);
  app.post('/todo/addDoneItem', controller.todo.addDoneItem);
  app.post('/todo/deleteTodoItem', controller.todo.deleteTodoItem);
  app.post('/todo/setTaskDone', controller.todo.setTaskDone);
};