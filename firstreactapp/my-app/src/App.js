import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import {Homepage} from './Homepage';

class App extends Component {
  render() {
    return (
    <div className="container fullsize">
      <div className="App"> 
        <div className="container">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <Homepage/>
      </div>
     
    </div>
    );
  }
}
export default App;
 