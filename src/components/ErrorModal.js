import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class ErrorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
    this.open = this.close.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({showModal: false});
    this.props.onChange();
  }

  open() {
    console.log("open");
    this.setState({showModal: true});
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>ERROR</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>You didn't choose any filter</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  };
}

export default ErrorModal;
