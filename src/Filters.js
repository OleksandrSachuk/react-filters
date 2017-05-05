import React, { Component } from 'react';
import './App.css';
import Checkbox from './Checkbox'

export default class Filters extends Component {
  componentWillMount(){
    const initialArray = [
      {
        "_id" : "sensorId1",
        "name" : "sensor1",
        "mac" : "04-7D-7B-97-0C-9F",
        "sensorspaceId" : "2367b83a-a4c4-4aaf-bf78-f48a9947a92a",
        "opstatus" : "STOCK",
        "containers" : {
          "group" : "groupId1"
        },
        // "updated" : ISODate("2017-05-04T11:28:53.823Z"),
        "__v" : 0
      },
      {
        "_id" : "sensorId2",
        "name" : "sensor2",
        "mac" : "04-7D-7B-97-0C-9F",
        "sensorspaceId" : "2367b83a-a4c4-4aaf-bf78-f48a9947a92a",
        "opstatus" : "STOCK",
        "containers" : {
          "group" : "groupId2",
          "channel" : "channelId1"
        },
        // "updated" : ISODate("2017-05-04T11:28:53.824Z"),
        "__v" : 0
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
      return <Checkbox
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
    console.log(choosenKeys);
    return choosenKeys;
  }
  render() {
    const allStateKeys = Object.keys(this.state);
    return (
      <div className="App">
        {this.renderallStateKeysCheckboxes(allStateKeys)}
        <button
          onClick={this.saveChoosenKeys.bind(this)}
        >Save</button>
      </div>
    );
  }
}
