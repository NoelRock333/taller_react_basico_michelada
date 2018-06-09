import React from 'react';

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
          {this.state.list.map(element => {
            return <li>{element}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Todo;