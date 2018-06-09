import React from 'react';

class Todo extends React.Component {
  state = {
    mundo: 'Mundo asdasdasdasd asdas'
  };

  render() {
    return (
      <div>
        <h1>Hola {this.state.mundo}</h1>
        <form action="">
          <input type="text"
            value={this.state.mundo}
            onChange={(ev) => {
              this.setState({ mundo: ev.target.value })
            }}
            className="form-control"
          />
        </form>
      </div>
    )
  }
}

export default Todo;