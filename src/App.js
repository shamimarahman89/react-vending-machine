import React, { Component } from "react";
import VendingMachine from "./VendingMachine.js";
import Chips from "./Chips.js";
import Sardines from "./Sardines.js";
import Soda from "./Soda.js";
import Navbar from "./Navbar.js";
import {Route, Switch} from "react-router-dom";
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <VendingMachine/>} />
          <Route exact path='/Soda' render={() => <Soda/>} />
          <Route exact path='/Chips' render={() => <Chips/>} />
          <Route exact path='/Sardines' render={() => <Sardines/>} />
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
