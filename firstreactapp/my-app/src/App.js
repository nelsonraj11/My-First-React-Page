import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.png';
import './App.css';
import {Content} from './Components/Content';
import {Album} from './Components/Album';
import {Photos} from './Components/Content';

class App extends Component {
  render() {
    return (  
    <div className="container">
      <div className="App"> 
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Router>
            <Route path ="/Photos" component={Photos}/>
          </Router>
      </div>
      <Content/> 
    </div> 
    );
  }
}
export default App;
 