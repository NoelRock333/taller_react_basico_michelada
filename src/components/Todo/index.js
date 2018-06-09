import React from 'react';
import Item from './Item';

class Todo extends React.Component {
  state = {
    list: [],
    item: ''
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.item],
      item: ''
    }, () => {
      console.log(this.state.list)
    })
  }

  render() {
    return (
      <div>
        <h1>Lista de cosas por hacer</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text"
            value={this.state.item}
            onChange={(ev) => {
              this.setState({ item: ev.target.value })
            }}
            className="form-control"
          />
        </form>
        <ul>
          {this.state.list.map((element, index) => {
            return <Item item={element} index={index} key={index}/>
          })}
        </ul>
      </div>
    )
  }
}

export default Todo;