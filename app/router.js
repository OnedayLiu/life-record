module.exports = function router(app) {
  app.get('/', app.controller.home.ejs);
};