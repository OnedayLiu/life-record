import * as React from 'react';
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
  }
  public taskInput(e: any) {
    this.setState({
      taskVal: e.target.value
    });
  }
  public addTask() {
    const toDoList = this.state.toDoList;
    toDoList.push({
      id: new Date().getTime(),
      val: this.state.taskVal
    });
    this.setState({ toDoList, taskVal: '' });
  }
  public getTODOItems() {
    return this.state.toDoList.map((item, i) => {
      return (
        <li key={item.id}>
          <span>{item.val}</span>
          <button onClick={ () => { this.setTaskDone(item); } }>done</button>
        </li>
      );
    });
  }
  public setTaskDone(item: {}) {
    const { toDoList, doneList } = this.state;
    for (let i = 0; i < toDoList.length; i++) {
      const toDoItem = toDoList[i];
      if (toDoItem.id === item.id) {
        toDoList.splice(i, 1);
        break;
      }
    }
    doneList.unshift(item);
    this.setState({ toDoList, doneList });
  }
  public getDoneItems() {
    return this.state.doneList.map((item, i) => {
      return (
        <li key={item.id}>
          <span>{item.val}</span>
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