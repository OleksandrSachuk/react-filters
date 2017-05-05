import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './Checkbox'

class App extends Component {

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
    console.log(label);
  }

  render() {
    const allStateKeys = Object.keys(this.state);
    return (
      <div className="App">
        {allStateKeys.map(item => {
          <Checkbox
            label={item}
            onChange={this.createFilterList.bind(this)}
          />
        })
        }
      </div>
    );
  }
}

export default App;
