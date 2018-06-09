import React from 'react';
import Api from '../../utils/api';

class Note extends React.Component {
  state = {
    title: '',
    description: '',
    id: ''
  }

  componentDidMount() {
    Api.get(`/notes/${this.props.match.params.id}.json`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          title: data.title,
          description: data.description,
          id: data.id
        })
      })
  }

  onSubmit = (event) => {
    event.preventDefault();
    Api.put(`/notes/${this.state.id}.json`, {
      note: {
        title: this.state.title,
        description: this.state.description
      }
    })
    .then(data => {
      this.props.history.push('/notes')
    })
  }

  render() {
    return (
      <div>
        <h2>Mi nota</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              value={this.state.title}
              placeholder="Titulo"
              onChange={(ev) => { this.setState({ title: ev.target.value }) }}
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              value={this.state.description}
              placeholder="Titulo"
              onChange={(ev) => { this.setState({ description: ev.target.value }) }}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Guardar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Note;