import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import Home from './Home';
import Filters from './Filters';
import Results from './Results';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='filters' component={Filters} />
      <Route path='results' component={Results} />
    </Route>
  </Router>,
  document.getElementById('root')
);
