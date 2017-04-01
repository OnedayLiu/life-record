import * as React from 'react';
import * as utils from './utils/request';
interface IState {
  taskVal: string;
  toDoList: Object[];
  doneList: Object[];
}
export class Todo extends React.Component<{}, IState> {
  private constructor(p: any) {
    super(p);
    this.state = {
      taskVal: '',
      toDoList: [],
      doneList: []
    };
    this.taskInput = this.taskInput.bind(this);
    this.addTask = this.addTask.bind(this);
    this.setTaskDone = this.setTaskDone.bind(this);
    this.delTodoItem = this.delTodoItem.bind(this);
  }
  public taskInput(e: any) {
    this.setState({
      taskVal: e.target.value
    });
  }
  public async componentDidMount() {
    await this.getTodoList();
    await this.getDoneList();
  }
  public async getTodoList() {
    const ret = await utils.get('/todo/getTodoList');
    console.log(ret)
    if (ret.status === 200) {
      this.setState({
        toDoList: ret.data
      });
    }
  }
  public async getDoneList() {
    const ret = await utils.get('/todo/getDoneList');
    if (ret.status === 200) {
      this.setState({
        doneList: ret.data.reverse()
      });
    }
  }
  public async addTask() {
    const { taskVal } = this.state;
    if (!taskVal) {
      return false;
    }
    const toDoItem = {
      id: new Date().getTime(),
      item: taskVal
    };
    const ret = await utils.post('/todo/addTodoItem', toDoItem);
    if (ret.status === 200 && ret.data.code === 0) {
      const toDoList = this.state.toDoList;
      toDoList.push(toDoItem);
      this.setState({ toDoList, taskVal: '' });
    } else {
      console.log('addTask failed');
    }
  }
  public async delTodoItem(item: {}) {
    const { toDoList } = this.state;
    for (let i = 0; i < toDoList.length; i++) {
      const toDoItem = toDoList[i];
      if (toDoItem.id === item.id) {
        toDoList.splice(i, 1);
        break;
      }
    }
    const deleteTodoItemRet = await utils.post('/todo/deleteTodoItem', item);
    if (deleteTodoItemRet.status === 200 && deleteTodoItemRet.data.code === 0) {
      console.log('删除成功');
      this.setState({ toDoList });
    }
  }
  public getTODOItems() {
    return this.state.toDoList.map((item, i) => {
      return (
        <li key={item.id}>
          <span>{item.item}</span>
          <button onClick={ () => { this.setTaskDone(item); } }>done</button>
          <button onClick={ () => { this.delTodoItem(item); } }>delete</button>
        </li>
      );
    });
  }
  public async setTaskDone(item: {}) {
    const { toDoList, doneList } = this.state;
    for (let i = 0; i < toDoList.length; i++) {
      const toDoItem = toDoList[i];
      if (toDoItem.id === item.id) {
        toDoList.splice(i, 1);
        break;
      }
    }
    doneList.unshift(item);
    const setTaskDone = await utils.post('/todo/setTaskDone', item);
    if (setTaskDone.status === 200 && setTaskDone.data.code === 0) {
      this.setState({ toDoList, doneList });
    }
  }
  public getDoneItems() {
    return this.state.doneList.map((item, i) => {
      return (
        <li key={item.id}>
          <span>{item.item}</span>
        </li>
      );
    });
  }
  public content() {
    return (
      <div>
        <div>
          <input value={ this.state.taskVal } onChange={ this.taskInput } />
          <button onClick={ this.addTask }>add</button>
        </div>
        <div>
          <h3>TODO</h3>
          <ul>{ this.getTODOItems() }</ul>
        </div>
        <div>
          <h3>DONE</h3>
          <ul>{ this.getDoneItems() }</ul>
        </div>
      </div>
    );
  }
  public render() {
    return this.content();
  }
}