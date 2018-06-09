import React from 'react';
import Api from '../../utils/api';
import { Link } from 'react-router-dom';

class Notes extends React.Component {
  state = {
    notes: [],
    description: '',
    title: ''
  }

  componentDidMount() {
    Api.get('/notes.json')
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          notes: data
        }, () => {
          console.log(this.state.notes)
        })
      })
  }

  onSubmit = (event) => {
    event.preventDefault();
    Api.post('/notes.json', {
      note: {
        title: this.state.title,
        description: this.state.description
      }
    })
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({
        notes: [...this.state.notes, data]
      })
    });
  }

  deleteNote = (event) => {
    event.preventDefault();
    let id = event.target.dataset.id;
    Api.delete(`/notes/${id}.json`)
      .then(data => {
        this.setState({
          notes: this.state.notes.filter(item => `${item.id}` !== `${id}`)
        })
      })
  }

  render() {
    let notes = this.state.notes.map(note => {
      return <div key={note.id}>
        <span>{note.title}</span>
        <Link to={'/notes/' + note.id}>
          Editar
        </Link>
        <a href="" data-id={note.id} data-name="das" onClick={this.deleteNote} className="btn btn-danger mr-1">Eliminar</a>
      </div>
    })
    
    return (
      <div>
        <h2>Mis notas</h2>
        <form onSubmit={this.onSubmit} className="col-sm-5 mb-3">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              placeholder="Titulo"
              onChange={(ev) => this.setState({ title: ev.target.value })}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              value={this.state.description}
              placeholder="Descripcion"
              onChange={(ev) => this.setState({ description: ev.target.value })}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Guardar</button>
          </div>
        </form>
        <div className="list-group">
          {notes}
        </div>
      </div>
    )
  }
}

export default Notes;