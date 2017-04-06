const MongoClient = require('mongodb').MongoClient, assert = require('assert');
const TODO_COLLECTION = 'todo';
const DONE_COLLECTION = 'done';
module.exports = app => {
  class Todo extends app.Service {
    constructor(ctx) {
      super(ctx);
    }
    * dbConnect() {
      const DATABASE = 'mongodb://admin:123456@127.0.0.1:27017/todo';
      try {
        return yield MongoClient.connect(DATABASE);
      } catch (e) {
        return '数据库连接失败';
      }
    }
    * insertMany(data, collectionName) {
      data = Array.isArray(data) ? data : [ data ];
      const db = yield this.dbConnect();
      const ret = yield db.collection(collectionName).insertMany(data);
      db.close();
      if (ret.insertedCount === data.length) {
        return { code: 0};
      }
      return { code: 1 };
    }
    * deleteById(data, collectionName) {
      const db = yield this.dbConnect();
      const ret = yield db.collection(collectionName).deleteOne({ id: data.id });
      db.close();
      if (ret.deletedCount === 1) {
        return { code: 0};
      }
      return { code: 1 };
    }
    * find(collectionName) {
      const db = yield this.dbConnect();
      var collection = db.collection(collectionName);
      const ret = yield new Promise((resolve, reject) => {
        collection.find({}).toArray(function(err, docs) {
          if (err === null) resolve(docs);
          else reject(`获取数据失败,detail:${err}`);
        });
      });
      db.close();
      return ret;
    }
    * getTodoList() {
      return yield this.find(TODO_COLLECTION);
    }
    * getDoneList() {
      return yield this.find(DONE_COLLECTION);
    }
    * addTodoItem(data) {
      return yield this.insertMany(data, TODO_COLLECTION);
    }
    * deleteTodoItem(data) {
      return yield this.deleteById(data, TODO_COLLECTION);
    }
    * addDoneItem(data) {
      return yield this.insertMany(data, DONE_COLLECTION);
    }
    * deleteDoneItem(data) {
      return yield this.deleteById(data, DONE_COLLECTION);
    }
  }
  return Todo;
};