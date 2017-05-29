import React, {Component} from 'react';
import Filters from './Filters';
import Results from './Results';
import {Col} from 'react-bootstrap';

export default class Root extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Col xs={1}>
        <Filters/>
        </Col>
        <Col xs={1}>
        <Results />
        </Col>
      </div>
    )
  }
}
