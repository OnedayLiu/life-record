exports.ejs = function* () {
  yield this.render('home.ejs', {
    title: 'Oneday的个人管理'
  });
};