import React, { Component } from 'react';
import '../App.css';
import CheckboxFilter from '../components/Checkbox'
import {Button} from 'react-bootstrap';
import ErrorModal from '../components/ErrorModal';


export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
     showErrorModal: false
    };
    this.saveChoosenKeys = this.saveChoosenKeys.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount(){
    const initialArray = [
      {
        _id: 'sensorId1',
        name: 'Sensor1',
        mac: '04-7D-7B-97-0C-9F',
        opstatus: 'STOCK',
        type: 'sensor',
        ip: '10.10.10.100',
        sensorStatus: 'Active',
        sensorAlert: 'Green',
        alertInfo: 'Invalid Thumbnail',
        containers: {
          group: 'groupId1',
        },
      },
      {
        _id: 'sensorId2',
        name: 'Snsor2',
        mac: '04-7D-7B-97-0C-9F',
        opstatus: 'STOCK',
        type: 'sensor',
        ip: '10.10.10.100',
        sensorStatus: 'Active',
        sensorAlert: 'Green',
        alertInfo: 'Invalid Thumbnail',
        containers: {
          group: 'groupId2',
          channel: 'channelId1',
        },
      }
    ];
    const allKeys = [];
    initialArray.map(item =>{
      let currentKeys = Object.keys(item);
      currentKeys.map(currentKey => allKeys.push(currentKey));
      console.log(allKeys)
    });
    const uniqueKeys = allKeys.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });
    uniqueKeys.map(item =>{
      this.setState({[item]: false});
    });
  }


  createFilterList(label){
    this.setState({[label]: !this.state[label]});
  }

  renderallStateKeysCheckboxes(allStateKeys){
    return allStateKeys.map(item => {
      return <CheckboxFilter
        key={item}
        label={item}
        onChange={this.createFilterList.bind(this)}
      />
    })

  }

  saveChoosenKeys(){
    const allStateKeys = Object.keys(this.state);
    let choosenKeys = [];
    allStateKeys.map(item => {
      if (this.state[item]){
        choosenKeys.push(item);
      }
    });
    if(choosenKeys.length === 0){
      this.setState({showErrorModal: true});
    }
    return choosenKeys;
  }

  closeModal(){
    this.setState({showErrorModal: false});
  }

  render() {
    const allStateKeys = Object.keys(this.state);
    return (
      <div className="filters">
        {this.renderallStateKeysCheckboxes(allStateKeys)}
        <Button
          bsStyle="success"
          onClick={this.saveChoosenKeys}
        >Save</Button>
        {this.state.showErrorModal ? <ErrorModal onChange={this.closeModal} /> : null}
      </div>
    );
  }
}
