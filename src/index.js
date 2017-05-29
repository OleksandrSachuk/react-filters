import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, IndexRoute, Switch, Link} from 'react-router-dom';
import App from './App';
import Navigation from './Navigation';
import Filters from './Containers/Filters';
import Results from './Results';
import {Col} from 'react-bootstrap';

import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" render={() => {
        return (
        <div>
          <Col xs={1}>
           <Navigation/>
          </Col>
          <Col xs={11}>
            <App/>
          </Col>
        </div>
        )
      }}/>

      <Route exact path="/filters" render={() => {
        return (
          <div>
            <Col xs={1}>
              <Navigation/>
            </Col>
            <Col xs={11}>
              <Filters/>
            </Col>
          </div>
        )
      }}/>

      <Route exact path="/results" render={() => {
        return (
          <div>
            <Col xs={1}>
              <Navigation/>
            </Col>
            <Col xs={11}>
              <Results/>
            </Col>
          </div>
        )
      }}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
