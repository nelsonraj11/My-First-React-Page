import React, { Component } from 'react';
//import Galleria from 'galleria';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.png';
import './App.css';
import {Content} from './Components/Content';
//import {Album} from './Components/Album';
import {Photos} from './Components/Photos';

class App extends Component {
  render() {
    return (  
  <Router>
    <div className="container">
      <div class="App" id="app"> 
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Route exact path ="/" component={Content}/>
          </div>
            <Route path ="/photos/:id" component={Photos}/>
      </div>     
    </div> 
  </Router>
    );
  }
}
export default App;
 