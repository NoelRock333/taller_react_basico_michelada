import React, { Component } from 'react';
import Item from './Item';

class Todo extends Component {
  state = {
    list: [],
    item: ''
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    this.setState({
      list: [
        ...this.state.list,
        {
          text: this.state.item,
          done: false
        }
      ],
      item: ''
    }, () => {
      console.log(this.state.list)
    })
  }

  handleInputChange = (index) => {
    let todoList = this.state.list;
    this.setState(() => {
      todoList[index] = { ...todoList[index], done: !todoList[index].done }
      return { list: todoList }
    }, () => {
      console.log(this.state.list)
    })
  }

  countUndone = () => {
    console.log('se ejecuta');
    return this.state.list.reduce((couner, item) => {
      if (!item.done) return couner + 1
      else return couner
    }, 0);
  }

  render() {
    return (
      <div>
        <h1>Lista de cosas por hacer</h1>
        <div>
          <span>Tareas por hacer: </span>
          <span>{this.countUndone()}</span>
        </div>
        <form onSubmit={this.onSubmit}>
          <input type="text"
            value={this.state.item}
            onChange={(ev) => {
              this.setState({ item: ev.target.value })
            }}
            className="form-control"
          />
        </form>
        <ul className="list-group">
          {this.state.list.map((element, index) => {
            return <Item item={element} index={index} key={index} handleInputChange={this.handleInputChange}/>
          })}
        </ul>
      </div>
    )
  }
}

export default Todo;