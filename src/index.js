import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import Notes from './components/Notes';
import Note from './components/Note';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div className="container">
      <Route exact path="/" component={Todo} />
      <Route exact path="/notes" component={Notes} />
      <Route exact path="/notes/:id" component={Note} />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
